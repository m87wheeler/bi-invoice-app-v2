import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// *** components
import Title from "../_atoms/Title";
import PriorityTag from "../_atoms/PriorityTag";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100% 100%;
  overflow: hidden;
`;

const StyledLink = styled(Link)``;

const SlideIn = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  margin-left: ${(props) => (props.status ? "0" : "-90%")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${(props) => (props.complete ? "seagreen" : "#566573")};
  transition: margin 0.3s ease-in-out;
  cursor: pointer;

  p,
  ${StyledLink} {
    display: inline;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 700;
    justify-self: center;
    align-self: center;
    color: #eee;
    text-decoration: none;

    &:hover {
      color: #111;
    }
  }
`;

const MainContent = styled.div`
  width: 90%;
  height: 100%;
  padding: 0.5rem;
  margin-left: ${(props) => (props.status ? "0" : "-90%")};
  display: grid;
  grid-template-columns: 1fr 1fr 4rem;
  grid-gap: 0.25rem;
  background: #eee;
  transition: margin 0.3s ease-in-out;
`;

const DateContainer = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 0.25rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  justify-items: center;
  background: #fff;

  p {
    line-height: 1;

    &:nth-child(1),
    &:nth-child(3) {
      font-size: 0.8rem;
    }

    &:nth-child(2) {
    }
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Priority = styled(PriorityTag)`
  grid-column: 3 / span 1;
`;

const Time = styled.p`
  grid-column: 1 / span 1;
  font-size: 0.9rem;
  font-weight: 600;
  align-self: flex-end;
`;

const Category = styled.p`
  grid-column: 2 / span 1;
  text-transform: capitalize;
  font-size: 0.75rem;
  font-weight: 600;
  align-self: flex-end;
`;

const EventEntry = (props) => {
  const [slideMenu, setSlideMenu] = useState(false);

  // ? destructuring props data
  /* eslint-disable*/
  const {
    assigned_to,
    category,
    client,
    complete,
    creation,
    date,
    description,
    id,
    priority,
    title,
  } = props.data;
  const { author, date: creationDate } = creation;
  const { all_day, end, start } = date;
  /*eslint-enable*/

  // ? format date strings as date object
  let fStartDate = new Date(start).toString();
  let fEndDate = new Date(end).toString();
  // ? format category text
  let fCat = category.split("_").join(" ");
  // ? format start and end times
  let fStHr = fStartDate.substr(16, 2);
  let fStMn = fStartDate.substr(19, 2);
  let fEnHr = fEndDate.substr(16, 2);
  let fEnMn = fEndDate.substr(19, 2);

  const handleSlide = () => setSlideMenu(!slideMenu);

  return (
    <Wrapper>
      <SlideIn status={slideMenu} complete={complete} onClick={handleSlide}>
        <p
          onClick={() => {
            props.onRemove(id);
          }}
        >
          REMOVE
        </p>
        <StyledLink to={`events/${id}`}>VIEW</StyledLink>
        <p>CLOSE</p>
      </SlideIn>
      <MainContent status={slideMenu}>
        <Title h={4} style={{ letterSpacing: "0", gridColumn: "1 / span 2" }}>
          {title}
        </Title>
        <DateContainer>
          <p>{fStartDate.substr(0, 3)}</p>
          <p>{fStartDate.substr(8, 2)}</p>
          <p>{fStartDate.substr(4, 3)}</p>
        </DateContainer>
        <Time>
          {all_day ? "All Day" : `${fStHr}:${fStMn}-${fEnHr}:${fEnMn}`}
        </Time>
        <Category>{fCat}</Category>
        <Priority level={priority} />
      </MainContent>
    </Wrapper>
  );
};

export default EventEntry;
