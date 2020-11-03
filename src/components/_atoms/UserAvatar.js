import styled from "styled-components";

// *** styled components
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  background: #eee;
  border-radius: 100%;
  cursor: pointer;
`;

const Initials = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #111;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
`;

const UserAvatar = (props) => {
  const nameToInitials = (name) => {
    let split = name.split(" ");
    let initialOne = split[0][0];
    let initialTwo = split[split.length - 1][0];
    return `${initialOne}${initialTwo}`;
  };

  return (
    <Wrapper onClick={props.onClick}>
      <Initials>{nameToInitials(props.user.logged_name)}</Initials>
    </Wrapper>
  );
};

export default UserAvatar;
