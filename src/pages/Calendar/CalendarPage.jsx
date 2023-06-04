import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import AppLink from "../../components/UI/Links/AppLink";
import Main from "../../components/UI/Main";
import { gap } from "../../styles/mixins";
import { ActivePage } from "../../utils/constants";
import UpArrowIcon from "../../assets/svg/UpArrowIcon";
import DownArrowIcon from "../../assets/svg/DownArrowIcon";
import { Month } from "../../utils/constants";
import { useState } from "react";
import { connect } from "react-redux";
import getCalendarDatesAction from "../../redux/actions/assigned/getCalendarDatesAction";
import { useEffect } from "react";
import InfoState from "../../components/UI/Info/InfoState";

const Week = styled.ul`
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--color-label);
`;
const WeekDay = styled.li`
  width: 50px;
  text-align: center;
`;
const MonthSection = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("12px")}
`;
const CalendarInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
const MonthName = styled.h5`
  width: 72px;
  padding: 0 0 0 8px;
  font-weight: 400;
  font-size: 20px;
  color: var(--color-text);
`;
const Buttons = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  &:hover{
    background: var(--color-hover);
  }
  &:disabled{
    opacity: 0.4;
    &:hover{
      background: none;
      cursor: default;
    }
  }
`;
const Year = styled.h6`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  color: var(--color-text);
`;
const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${gap("0px", "12px")}
`;
const Line = styled.div`
  border-top: 1px solid var(--color-cold-gray);
  opacity: 0.15;
  grid-column-start: 1;
  grid-column-end: 8;
`;
const DisabledDay = styled.div`
  width: 43px;
  height: 43px;
  margin: 0 auto;
  padding: 5px 0 7px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: ${gap("3px")}
  border-radius: 50%;
  font-weight: 400;
  font-size: 18px;
  color: var(--color-cards-secondary-text);
  opacity: 0.4;
  cursor: default;
`;
const Day = styled(AppLink)`
  width: 43px;
  height: 43px;
  margin: 0 auto;
  padding: 5px 0 7px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: ${gap("3px")}
  border-radius: 50%;
  font-weight: 400;
  font-size: 18px;
  color: var(--color-cards-secondary-text);
  transition: background 0.3s;
  &:hover{
    background: var(--color-hover);
  }
  &.active{
    color: var(--color-white);
    background: var(--color-acent);
    &>div{
      &.active{
        background: var(--color-white);
      }
    }
  }
`;
const DayPoint = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  &.active{
    background: var(--color-acent);
  }
`;
const CurrentMonthButton = styled.button`
  display: inline-flex;
  margin: 0 8px;
  color: var(--color-acent);
  &:hover{
    text-decoration: underline;
  }
`;

function CalendarPage ({state, dates, user, getDates}) {
  const date = new Date();
  const [calendarDate, setCalendarDate] = useState(new Date(date.getFullYear(), date.getMonth(), 1));

  useEffect(() => {
    if(user){
      getDates(user.id);
    }
  }, [getDates, user]);

  function daysInMonth(month) {
    return 32 - new Date(date.getFullYear(), month, 32).getDate();
  };

  function dayOfWeek(day){
    return [7, 1, 2, 3, 4, 5, 6][day];
  }

  function prevMonth(){
    let newDate;
    if(calendarDate.getMonth() !== 0){
      newDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth()-1, 1);
    } else{
      newDate = new Date(calendarDate.getFullYear()-1, 11, 1);
    }
    setCalendarDate(newDate);
  }

  function nextMonth(){
    let newDate;
    if(calendarDate.getMonth() !== 11){
      newDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth()+1, 1);
    } else{
      newDate = new Date(calendarDate.getFullYear()+1, 0, 1);
    }
    setCalendarDate(newDate);
  }

  function currentMonth(){
    setCalendarDate(new Date(date.getFullYear(), date.getMonth(), 1));
  }

  function formatDate(year, month, day){
    const newMonth = month+1 < 10 ? "0"+(month+1) : month+1;
    const newDay = day+1 < 10 ? "0"+(day+1) : day+1;
    return `${year}-${newMonth}-${newDay}`;
  }

  function checkDate(date){
    if(dates){
      for(let i = 0; i < dates.length; i++){
        if(dates[i] === date){
          return true;
        }
      }
    }
    return false;
  }

  return(
    <Main>
      <Header title="Календарь" lLink="/" rIcon={null} />
      <Week><WeekDay>пн</WeekDay><WeekDay>вт</WeekDay><WeekDay>ср</WeekDay><WeekDay>чт</WeekDay><WeekDay>пт</WeekDay><WeekDay>сб</WeekDay><WeekDay>вс</WeekDay></Week>
      <MonthSection>
        <CalendarInfo>
          <MonthName>{Month[calendarDate.getMonth()]}</MonthName>
          <Year>{calendarDate.getFullYear()}</Year>
          <Buttons>
            <Button disabled={date.getMonth()-1 === calendarDate.getMonth() && date.getFullYear() === calendarDate.getFullYear()} onClick={prevMonth}><UpArrowIcon/></Button>
            <Button onClick={nextMonth}><DownArrowIcon/></Button>
          </Buttons>
        </CalendarInfo>
        <InfoState state={state}>
          <Days>
            <Line></Line>
            {
              (dayOfWeek(calendarDate.getDay())-1 !== 0) ? [...Array(dayOfWeek(calendarDate.getDay())-1)].map((_, index) => {
                return <DisabledDay key={index}>
                  {daysInMonth(calendarDate.getMonth()-1)-dayOfWeek(calendarDate.getDay())+1+(index+1)}
                  <DayPoint className={checkDate(formatDate(
                      calendarDate.getMonth() !== 0 ? calendarDate.getFullYear() : calendarDate.getFullYear()-1,
                      calendarDate.getMonth() !== 0 ? calendarDate.getMonth()-1 : 11,
                      daysInMonth(calendarDate.getMonth()-1)-dayOfWeek(calendarDate.getDay())+1+(index))) ? "active" : null}/>
                </DisabledDay>
              }) : null
            }
            {
              [...Array(daysInMonth(calendarDate.getMonth()))].map((_, index) => {
                if((dayOfWeek(calendarDate.getDay())+index % 7) === 0) return <>
                  <Day to={`/calendar/${formatDate(calendarDate.getFullYear(), calendarDate.getMonth(), index)}`} key={index} className={(date.getDate() === index+1 && date.getFullYear() == calendarDate.getFullYear() && date.getMonth() && calendarDate.getMonth()) ? "active" : null}>
                    {index+1}
                    <DayPoint className={checkDate(formatDate(calendarDate.getFullYear(), calendarDate.getMonth(), index)) ? "active" : null}/>
                  </Day>
                  <Line></Line>
                </>;
                return <Day to={`/calendar/${formatDate(calendarDate.getFullYear(), calendarDate.getMonth(), index)}`} key={index} className={(date.getDate() === index+1 && date.getFullYear() === calendarDate.getFullYear() && date.getMonth() === calendarDate.getMonth()) ? "active" : null}>
                  {index+1}
                  <DayPoint className={checkDate(formatDate(calendarDate.getFullYear(), calendarDate.getMonth(), index)) ? "active" : null}/>
                </Day>
              })
            }
            {
              [...Array(7 - (dayOfWeek(calendarDate.getDay())-1 + daysInMonth(calendarDate.getMonth()))%7)].map((_, index) => {
                return <DisabledDay key={index} className="disabled">{index+1}
                    <DayPoint className={checkDate(formatDate(
                      calendarDate.getMonth() !== 11 ? calendarDate.getFullYear() : calendarDate.getFullYear()+1,
                      calendarDate.getMonth() !== 11 ? calendarDate.getMonth()+1 : 0,
                      index)) ? "active" : null}/>
                  </DisabledDay>
              })
            }
          </Days>
          {
            date.getFullYear() !== calendarDate.getFullYear() || date.getMonth() !== calendarDate.getMonth()
            ? <CurrentMonthButton onClick={currentMonth}>Текущий месяц</CurrentMonthButton>
            : null
          }
        </InfoState>
      </MonthSection>
      <NavBar active={ActivePage.calendar}/>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.assigned.getCalendarDatesState,
  dates: state.assigned.dates,
  user: state.auth.profile,
});
const mapDispatchToProps = {
  getDates: getCalendarDatesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);