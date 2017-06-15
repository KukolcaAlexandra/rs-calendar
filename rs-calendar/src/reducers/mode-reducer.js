import Immutable from 'immutable';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const initialState = Immutable.fromJS({
	modeMonth: 1	
});

function modeReducer(state = initialState, action){
	//console.log('!!!!!!!!!!!!!!!! hello from monthReducer = ' + state);
	switch (action.type) {
		case 'MODE_MONTH':
			console.log("state = " + state);
			console.log("hello from MODE_MONTH");
			console.log("action.payload = " + action.payload);
			//console.log("action.payload = " + action.payload);
			//if(state.get('modeMonth') !== action.payload.get('modeMonth'))
			if(state !== action.payload){
				/*const date = new Date();
				const initialState = Immutable.fromJS({
					currentYear: date.getFullYear(),
					currentMonth: date.getMonth(),
					currentDate: date.getDate()
				});

				dispatch({
			        type: 'DATE',
			        payload: initialState
			    })*/
				return state.set('modeMonth', Immutable.fromJS(action.payload));
			}
			//return state;
		default: return state;
	}
}

export default modeReducer;