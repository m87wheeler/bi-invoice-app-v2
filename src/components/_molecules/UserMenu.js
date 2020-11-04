import styled from "styled-components";

const Wrapper = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  top: 3rem;
  right: 0;
  width: auto;
  height: auto;
  padding: 0.25rem;
  background: #566573;
  border-top: 1px solid #788795;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  z-index: 999;
`;

const List = styled.ul`
  list-style-type: none;

  li {
    padding: 0.5rem 2rem;
    color: #eee;
    cursor: pointer;

    &:hover {
      background: #eee;
      color: #111;
    }

    &:last-of-type {
      font-size: 0.9rem;
      color: #eee;
      font-weight: 600;

      &:hover {
        background: #566573;
        color: #eee;
      }
    }
  }
`;

const UserMenu = (props) => {
  return (
    <Wrapper active={props.active}>
      <List>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
        <li onClick={props.onSignOut}>Sign Out</li>
      </List>
    </Wrapper>
  );
};

export default UserMenu;
