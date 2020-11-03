import { useContext, useState, useRef, useReducer, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// *** data and hooks
import { LoggedInContext } from "../../context/loggedInContext";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { modalReducer } from "../../reducers/modalReducer";

// *** components
import UserAvatar from "../_atoms/UserAvatar";
import Modal from "../_molecules/Modal";
import UserMenu from "../_molecules/UserMenu";
import Title from "../_atoms/Title";

// *** styled components
const Wrapper = styled.header`
  height: 3rem;
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #566573;
`;

const Header = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [userMenu, setUserMenu] = useState(false);
  const [modalState, dispatch] = useReducer(modalReducer, false);

  const handleUserMenu = () => setUserMenu(!userMenu);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setUserMenu(false));

  const history = useHistory();
  const handleReturn = useCallback(() => history.push("/"), [history]);

  const promptSignOut = () => dispatch({ type: "REVEAL" });
  const handleDecline = () => dispatch({ type: "HIDE" });
  const handleSignOut = () => {
    dispatch({ type: "HIDE" });
    let logStatus = {
      ...loggedIn,
      logged_in: false,
      logged_id: "",
      logged_name: "",
      session_id: "",
      session_start: "",
    };
    setLoggedIn(logStatus);
    handleReturn();
    setUserMenu(false);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Title h={2} white>
        Blue Interiors
      </Title>
      {loggedIn.logged_in && (
        <UserAvatar user={loggedIn} onClick={handleUserMenu} />
      )}
      <UserMenu active={userMenu} onSignOut={promptSignOut} />
      <Modal
        text="Sign Out?"
        confirm="Yes"
        decline="No"
        onConfirm={handleSignOut}
        onDecline={handleDecline}
        reveal={modalState}
      />
    </Wrapper>
  );
};

export default Header;
