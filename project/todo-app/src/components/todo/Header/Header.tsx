import styled from "styled-components";
import { getDate } from "./date";
import { theme } from "../../common/GlobalStyle";

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${theme.indigo[1]};

  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 30px;
  }

  .day {
    font-size: 25px;
    color: ${theme.indigo[4]};
  }

  .month,
  .date {
    font-size: 15px;
    color: ${theme.indigo[2]};
  }
`;

const Header = () => {
  const { day, month, date } = getDate();

  return (
    <StyledHeader>
      <div className="day">{day},&nbsp;&nbsp;</div>
      <div className="month">{month}&nbsp;</div>
      <div className="date">{date}</div>
    </StyledHeader>
  );
};

export default Header;
