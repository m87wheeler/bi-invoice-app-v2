import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 0.8rem;

  p {
    margin-left: 0.25rem;
  }
`;

const Dot = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid #eee;
  border-radius: 100%;
  background: ${(props) => (props.active ? "seagreen" : "crimson")};
`;

const StatusDot = (props) => {
  return (
    <Wrapper>
      <Dot active={props.active} />
      <p>{props.active ? "Active" : "Inactive"}</p>
    </Wrapper>
  );
};

export default StatusDot;
