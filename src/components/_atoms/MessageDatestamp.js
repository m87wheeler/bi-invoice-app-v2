import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 0.5rem;
  justify-self: center;
  background: #677684;

  p {
    font-size: 0.8rem;
    color: #eee;
  }
`;

const MessageDatestamp = (props) => {
  const formateDate = (date) => {
    let dateObj = new Date(date);
    let str = dateObj.toUTCString();
    return str.substr(0, 16);
  };

  return (
    <Wrapper className={props.className}>
      <p>{formateDate(props.date)}</p>
    </Wrapper>
  );
};

export default MessageDatestamp;
