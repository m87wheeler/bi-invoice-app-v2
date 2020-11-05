import { useEffect, useState } from "react";
import styled from "styled-components";

// *** data & hooks
import {
  utcDateToDateString,
  utcDateToTimeString,
} from "../../assets/functions/functions";

// *** styled components
const DateTime = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  justify-items: center;
`;

const DateString = styled.p``;

const TimeString = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1;
`;

const Clock = ({ className }) => {
  const [currentTime, setCurrentTime] = useState();
  const [currentDate, setCurrentDate] = useState();

  // ? update timer and date and clear on unmount
  useEffect(() => {
    setCurrentTime(utcDateToTimeString(new Date()));
    setCurrentDate(utcDateToDateString(new Date()));

    const timer = setInterval(() => {
      setCurrentTime(utcDateToTimeString(new Date()));
      setCurrentDate(utcDateToDateString(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <DateTime className={className}>
      <DateString>{currentDate}</DateString>
      <TimeString>{currentTime}</TimeString>
    </DateTime>
  );
};

export default Clock;
