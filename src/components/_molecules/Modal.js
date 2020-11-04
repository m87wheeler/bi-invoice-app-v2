import styled, { css } from "styled-components";
import Button from "../_atoms/Button";

const Container = styled.div`
  position: fixed;
  top: -120vh;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(221, 221, 221, 0.75);
  z-index: 9999;

  ${(props) =>
    props.reveal &&
    css`
      top: 0;
    `};
`;

const Wrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 70%;
  height: 30%;
  min-width: 18rem;
  min-height: 12rem;
  max-width: 24rem;
  max-height: 24rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  background: #eee;
  border: 10px solid #566573;
  opacity: 0;
  transition-property: top, transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  ${(props) =>
    props.reveal &&
    css`
      top: 50%;
      opacity: 1;
    `}
`;

const Text = styled.p`
  grid-column: 1 / 3;
  text-align: center;
  font-weight: 500;
`;

const ConfirmButton = styled(Button)`
  ${(props) =>
    props.singleOption &&
    css`
      grid-column: 1 / 3;
    `}
`;

const Modal = (props) => {
  return (
    <Container reveal={props.reveal}>
      <Wrapper reveal={props.reveal}>
        <Text>{props.text}</Text>
        {props.confirmLink ? (
          <ConfirmButton
            link={props.confirmLink}
            singleOption={props.singleOption}
            confirm={!props.singleOption}
          >
            {props.confirm || "Confirm"}
          </ConfirmButton>
        ) : (
          <ConfirmButton
            onClick={props.onConfirm}
            singleOption={props.singleOption}
            confirm={!props.singleOption}
          >
            {props.confirm || "Confirm"}
          </ConfirmButton>
        )}
        {!props.singleOption ? (
          props.declineLink ? (
            <Button link={props.declineLink} danger>
              {props.decline || "Decline"}
            </Button>
          ) : (
            <Button onClick={props.onDecline} danger>
              {props.decline || "Decline"}
            </Button>
          )
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Modal;
