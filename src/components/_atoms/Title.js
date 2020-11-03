import styled from "styled-components";

const H1 = styled.h1``;
const H2 = styled.h2``;
const H3 = styled.h3``;
const H4 = styled.h4``;
const H5 = styled.h5``;
const H6 = styled.h6``;

const Title = (props) => {
  const titleStyles = {
    lineHeight: "1.25",
    letterSpacing: ".15em",
    fontWeight: "500",
    color: props.white ? "#eee" : "#111",
    textAlign: props.center ? "center" : "left",
    ...props.style,
  };

  switch (props.h) {
    case 1:
      return <H1 style={titleStyles}>{props.children}</H1>;
    case 2:
      return <H2 style={titleStyles}>{props.children}</H2>;
    case 3:
      return <H3 style={titleStyles}>{props.children}</H3>;
    case 4:
      return <H4 style={titleStyles}>{props.children}</H4>;
    case 5:
      return <H5 style={titleStyles}>{props.children}</H5>;
    case 6:
      return <H6 style={titleStyles}>{props.children}</H6>;
    default:
      return <H1 style={titleStyles}>{props.children}</H1>;
  }
};

export default Title;
