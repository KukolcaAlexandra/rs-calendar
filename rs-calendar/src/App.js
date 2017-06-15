/*global state*/
/*import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/
//import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createSelector, createStructuredSelector } from 'reselect';

import CalendarMonth from './components/CalendarMonth';
import EventDetails from './components/EventDetails';
import CalendarWeek from './components/CalendarWeek';
import Header from './components/Header';
import createWeeks from './functions/createWeeks';
import addEventsToWeeks from './functions/addEventsToWeeks';
import addEventsToCurrentWeek from './functions/addEventsToCurrentWeek';
import createCurrentWeekDays from './functions/createCurrentWeekDays';
import Immutable from 'immutable';
//import { Link } from 'react-router-dom';
//import numToMonth from './functions/numToMonth';

/*class UserDetails extends Component{
  shouldComponentUpdate(nextProps){
    if (nextProps.user === this.props.user){
      return false;
    }

    return true;
  }

  render(){
    return (
      <div>
        <div>Name: {this.props.user.get('name')}</div>
        <div>Balance: {this.props.user.get('balance')}</div>
        <div>Company: {this.props.user.get('company')}</div>
      </div>
    )
  }
}*/



/*class UsersList extends Component {
  render() {
    const users = this.props.users.map(user => {
      return (
        <li key={user.get('_id')} onClick={() => this.props.onUserClick(user)}>
          {user.get('name')}
        </li>
      )
    });

    return (
      <ul>{users}</ul>
    )
  }
}*/

class App extends Component {
  render() {
    const { users,
        currentUser, 
        currentYear, 
        currentMonth, 
        currentDate, 
        weeks, 
        currentEvent, 
        setCurrentEvent,
        setBack,
        setNext, 
        modeMonth,
        setWeekMode,
        setMonthMode,
        currentWeek,
        weekDays,
        todayDay,
        todayMonth,
        todayYear
       } = this.props;

    let UsersComponent;

    /*if (users.size === 0){
      UsersComponent = <div>Loading...</div>
    } else{
      UsersComponent = (
        <UsersList users={users} onUserClick={(user) => this.props.setCurrentUser(user)}/>
      )
    }*/

    return (
        <div className="app">
          <Header year={currentYear}
              month={currentMonth} 
              date={currentDate} 
              mode={modeMonth}
              weekDays={weekDays}
              onBackClick={setBack}
              onNextClick={setNext}
              onWeekClick={setWeekMode}
              onMonthClick={setMonthMode}
          />
          { modeMonth ?
              <CalendarMonth 
                  year={currentYear}
                  month={currentMonth} 
                  todayDay={todayDay} 
                  todayMonth={todayMonth} 
                  todayYear={todayYear} 
                  weeks={weeks} 
                  onEventClick={setCurrentEvent}
                  onMyClick={console.log}
              />
              :
              <CalendarWeek year={currentYear}
                  month={currentMonth} 
                  weeks={weeks} 
                  onEventClick={setCurrentEvent}
                  onMyClick={console.log}
                  week={currentWeek}
                  weekDays={weekDays}
              />
            
          }
          { currentEvent ? <EventDetails event={currentEvent} /> : null}
                   
        </div>
    );
  }
}

function userStateRootSelector() {
  return state.users;
}

const usersListSelector = createSelector(
  [userStateRootSelector],
  root => root.get('usersList')
);

const userNameSelector = createSelector(
  [usersListSelector],
  (users) => {
    return users.map(user => user.get('name'));
  }
)

const usersByIdSelector = createSelector(
  [userStateRootSelector],
  root => root.get('usersById')
)

function currentUserIdSelector(state) {
  return state.currentUserId;
}

const currentUserSelector = createSelector(
  [usersByIdSelector, currentUserIdSelector],
  (usersById, currentUserIdSelector) => {
    return usersById.get(currentUserIdSelector);
  }
)

/////////////////////////
function dateStateRootSelector() {
  return state.date;
}

const currentYearSelector = createSelector(
  [dateStateRootSelector],
  root => root.get('currentYear')
);

const currentMonthSelector = createSelector(
  [dateStateRootSelector],
  root => root.get('currentMonth')
);

const currentDateSelector = createSelector(
  [dateStateRootSelector],
  root => root.get('currentDate')
);

const todayDaySelector = createSelector(
  [dateStateRootSelector],
  root => root.get('todayDay')
);

const todayMonthSelector = createSelector(
  [dateStateRootSelector],
  root => root.get('todayMonth')
);

const todayYearSelector = createSelector(
  [dateStateRootSelector],
  root => root.get('todayYear')
);
///////////////////////
function eventsStateRootSelector() {
  return state.events;
}

const eventsListSelector = createSelector(
  [eventsStateRootSelector],
  root => root.get('eventsList')
);

const eventsByIdSelector = createSelector(
  [eventsStateRootSelector],
  root => root.get('eventsById')
)

function currentEventIdSelector(state) {
  return state.currentEventId;
}

const currentEventSelector = createSelector(
  [eventsByIdSelector, currentEventIdSelector],
  (eventsById, currentEventIdSelector) => {
    return eventsById.get(currentEventIdSelector);
  }
)

/*const weeksSelector = createSelector(
  [currentYearSelector, currentMonthSelector, eventsByIdSelector],
  function(currentYear, currentMonth, eventsById){
    return addEventsToWeeks(createWeeks(currentYear, currentMonth), eventsById);
  }
)*/

const weeksSelector = createSelector(
  [currentYearSelector, currentMonthSelector, eventsListSelector],
  function(currentYear, currentMonth, events){
    return addEventsToWeeks(createWeeks(currentYear, currentMonth), events, currentYear, currentMonth);
  }
)

/*const modeMonthSelector = createSelector(
  [usersListSelector],
  (users) => {
    return users.map(user => user.get('name'));
  }
)*/

function modeMonthSelector() {
  return state.modeMonth.get('modeMonth');
}

const currentWeekSelector = createSelector (
  [currentYearSelector, currentMonthSelector, currentDateSelector, eventsListSelector],
  function(currentYear, currentMonth, currentDate, events){
    return addEventsToCurrentWeek(currentYear, currentMonth, currentDate, events);/*addEventsToWeeks(createWeeks(currentYear, currentMonth), events, currentYear, currentMonth);*/
  }
)

const currentWeekDays = createSelector (
  [currentYearSelector, currentMonthSelector, currentDateSelector],
  function(currentYear, currentMonth, currentDate){
    return createCurrentWeekDays(currentYear, currentMonth, currentDate);
  }
)


const mapStateToProps = createStructuredSelector({
  users: usersListSelector,
  currentUser: currentUserSelector,
  currentYear: currentYearSelector,
  currentMonth: currentMonthSelector,
  currentDate: currentDateSelector,
  weeks: weeksSelector,
  //days: daysSelector,
  events: eventsListSelector,
  eventsById: eventsByIdSelector,
  currentEvent: currentEventSelector,
  modeMonth: modeMonthSelector,
  currentWeek: currentWeekSelector,
  weekDays: currentWeekDays,
  todayDay: todayDaySelector,
  todayMonth: todayMonthSelector,
  todayYear: todayYearSelector,
})

// function mapStateToProps(state) {
//  return {
//    users: state.users.get('usersList'),
//    userName: state.users.get('usersList').map(user => user.get('name')),
//    currentUser: state.users.get('usersById').get(state.currentUserId)
//  }
// }

function mapActionsToProps(dispatch) {
  return {
    setCurrentUser(user) {
      console.log("in setCurrentUser user = " + user);
      dispatch({
        type: 'SET_CURRENT_USER_ID',
        payload: user.get('_id')
      })
    },

    setCurrentEvent(e) {
      //console.log("in setCurrentEvent event = " + e.target);
      console.log("in setCurrentEvent event = " + e.target.value);//.value.get('id'));
      dispatch({
        type: 'SET_CURRENT_EVENT_ID',
        payload: e.target.value
      })
    }, 

    setBack(e) {
      //console.log('e = ' + e);
      //console.log('e.target = ' + e.target);
      //console.log('month = ' + e.target.value.getMonth());
      //console.log('e.target.value = ' + e.target.value);
      
      let mode = e.target.value[0];
      //console.log('mode = ' + mode);
      let sDate = e.target.value.slice(1);
      //console.log('sDate = ' + sDate);
      let date = new Date(sDate);
    
      if(mode == 1){
          console.log('MMMMMMMMMMMMMMode = 1');
          let month = date.getMonth() - 1;
          if(month < 0){
            dispatch({
              type: 'MONTH',
              payload: 11
            })
            dispatch({
              type: 'YEAR',
              payload: -1
            })
          }else{
            dispatch({
              type: 'MONTH',
              payload: month//e.target.value-1
            })
          }

          
      } else if(mode == 0){
          console.log('MMMMMMMMMMMMMMode = 0');
          let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-7);
          let today = new Date();
          console.log('newDate.date = ' + newDate.getDate());
          console.log('newDate.month = ' + newDate.getMonth());
          console.log('newDate.year = ' + newDate.getFullYear());

          const initialState = Immutable.fromJS({
            currentYear: newDate.getFullYear(),
            currentMonth: newDate.getMonth(),
            currentDate: newDate.getDate(),
            todayYear: today.getFullYear(),
            todayMonth: today.getMonth(),
            todayDate: today.getDate()

          });
          
          dispatch({
            type: 'DATE',
            payload: initialState
          })


      }

      dispatch({
          type: 'SET_CURRENT_EVENT_ID',
          payload: -1
      })

      //let month = 
      //console.log('e.target.value.mode = ' + e.target.value['mode']);
      
    },

    setNext(e) {
      //console.log('e = ' + e);
      //console.log('e.target.value = ' + e.target.value);
      //let month = e.target.value;
      let mode = e.target.value[0];
      //console.log('mode = ' + mode);
      let sDate = e.target.value.slice(1);
      //console.log('sDate = ' + sDate);
      let date = new Date(sDate);

      if(mode == 1){
          console.log('MMMMMMMMMMMMMMode = 1');
          let month = date.getMonth() + 1;
          if(month > 11){
            //console.log('> 11 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!month = ' + month);
            dispatch({
              type: 'MONTH',
              //type: 'SET_BACK_MONTH'//,
              payload: 0
            })
            dispatch({
              type: 'YEAR',
              //type: 'SET_BACK_MONTH'//,
              payload: 1
            })
          }else{
            //console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!month = ' + month);
            dispatch({
              type: 'MONTH',
              //type: 'SET_BACK_MONTH'//,
              //payload: e.target.value-1
              payload: month
            })
          }
      }else if(mode == 0){
          console.log('MMMMMMMMMMMMMMode = 0');
          let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);
          let today = new Date();
          console.log('newDate.date = ' + newDate.getDate());
          console.log('newDate.month = ' + newDate.getMonth());
          console.log('newDate.year = ' + newDate.getFullYear());

          const initialState = Immutable.fromJS({
            currentYear: newDate.getFullYear(),
            currentMonth: newDate.getMonth(),
            currentDate: newDate.getDate(),
            todayYear: today.getFullYear(),
            todayMonth: today.getMonth(),
            todayDate: today.getDate()
          });
          
          dispatch({
            type: 'DATE',
            payload: initialState
          })
      }

      dispatch({
          type: 'SET_CURRENT_EVENT_ID',
          payload: -1
      })
      
    },

    setWeekMode() {
      dispatch({
        type: 'MODE_MONTH',
        payload: 0
      });

      const date = new Date();
      const initialState = Immutable.fromJS({
          currentYear: date.getFullYear(),
          currentMonth: date.getMonth(),
          currentDate: date.getDate()
      });

      dispatch({
          type: 'DATE',
          payload: initialState
      })

      dispatch({
          type: 'SET_CURRENT_EVENT_ID',
          payload: -1
      })
    },

    setMonthMode() {
      dispatch({
        type: 'MODE_MONTH',
        payload: 1
      });

      const date = new Date();
      const initialState = Immutable.fromJS({
          currentYear: date.getFullYear(),
          currentMonth: date.getMonth(),
          currentDate: date.getDate()
      });

      dispatch({
          type: 'DATE',
          payload: initialState
      })

      dispatch({
          type: 'SET_CURRENT_EVENT_ID',
          payload: -1
      })
    }, 



  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
