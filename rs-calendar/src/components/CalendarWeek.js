//import React from 'react';
import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import numToMonth from '../functions/numToMonth';


class Td extends Component {
	
	render() {
		console.log("props Td = " + this.props.data[0]);
		//console.log("onEventClick in Td = " + this.props.onEventClick);
		//console.log("props Td = " + this.props.data['events']);
		let bt = [];
		if(this.props.data !== undefined){
			let length = this.props.data.length;
			if(length !== 0){
				//return (

				for(let i=0; i<length; i++){
					const event = this.props.data[i];
					let d = new Date(this.props.data[i].get('start'));
					let h = d.getHours();
					if(h == this.props.hour){
						bt[i] = <Button bsStyle="primary" bsSize="xsmall"  value={event.get('id')}
							    onClick={(event) => this.props.onEventClick(event)} >
								{this.props.data[i].get('type')}
							</Button>;
					}
				}
				
			}
		}
		let index = 0;
		const bts = bt.map(bt => { 
			return(
				<div key={index++}>
					{bt}
				</div>
			)
		}); 
					
	
		return (
			
			<td width="12.5%">
				<div>
					{this.props.data['date']}
				</div>
				{bts}
			</td>
		)
	}
}

class Tr extends Component {
	render() {
		//console.log("props Tr week = " + this.props.week);
		//console.log("props Tr week[0] = " + this.props.week[0]['date']);
		//console.log("onEventClick in Tr = " + this.props.onEventClick);
		/*if(this.props.week[0]['events']){
			console.log("props Tr week[0] = " + this.props.week[0].get('start'));
		}*/
		
		/*this.props.week.forEach(function(elem){
			console.log('elem ' + elem['date']);
			if(elem['events'] !== undefined){
				if(elem['events'].length !== 0){
					console.log('elem[events] = ' + elem['events'].length);
				}
			}
		});*/

		let d = new Date('2017-02-13T12:51:24Z');
		console.log("d = " + d.getDate());
		let indexTd = 0;

		const week = this.props.week.map(data => {
			//console.log("//////////////////////////////////////////////");
			return (
				<Td key={indexTd++} data={data} onEventClick={this.props.onEventClick} hour={this.props.hour}/>
				
			)
		});

		return (
			<tr>
				<td width='7%'>{this.props.sHour}</td>
				{week}
			</tr>
			
		)
		
	}
}
/*key={user.get('_id')} onClick={() => this.props.onUserClick(user)}*/
export default class CalendarWeek extends Component{
	/*shouldComponentUpdate(nextProps){
		if (nextProps.user === this.props.user){
			return false;
		}

		return true;
	}*/

	render(){
		//console.log("year in CalendarMonth = " + this.props.year);
		//console.log("month in CalendarMonth = " + this.props.month);
		//console.log("date in CalendarMonth = " + this.props.date);
		console.log("week in CalendarMonth = " + this.props.week[0][1]);
		//console.log("onEventClick in CalendarMonth = " + this.props.onEventClick);
		//console.log("events in Calendar = " + this.props.events);
		let d = new Date(this.props.year, this.props.month, 1);
		let t = d.getDay() - 1;
		/*let trs = <tr>start</tr>;
		for(let i=0; i<10; i++){
			trs += <tr>i</tr>;
		}*/
		//const dates = [{'date':1, 'event':'event1'},{'date':2, 'event':'event2'},{'date':3, 'event':'event3'}];
		let indexTr = 0;
		let hours = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
		let sHours = ['12','1','2','3','4','5','6','7','8','9','10','11','12','1','2','3','4','5','6','7','8','9','10','11'];
		for(let i=0; i<12; i++){
			sHours[i] = sHours[i] + ':00 AM';
			//console.log('hours = ' + hours[i]); 
		}
		for(let i=12; i<24; i++){
			sHours[i] = sHours[i] + ':00 PM';
			//console.log('hours = ' + hours[i]); 
		}

		const tr = hours.map(hour => {
			return (
				<Tr key={indexTr} 
					week = {this.props.week} 
					onEventClick={this.props.onEventClick}	
					sHour={sHours[indexTr++]} 
					hour={hour} 
					
				/>
			)
		});
		//dates.map()
		/*const tr = this.props.weeks.map(week => {
			return (
				<Tr key={indexTr++} week = {week} onEventClick={this.props.onEventClick}	/>
				
			)
		});*/

		const WeekTable = (
		  	<Table striped bordered condensed hover>
		    	<thead>
		      		<tr>
		      			<th></th>
				        <th>Mon {this.props.weekDays[0].getDate()}/
				        	{this.props.weekDays[0].getMonth()<10?
				        	'0'+this.props.weekDays[0].getMonth():
				        	this.props.weekDays[0].getMonth()}
				        </th>
				        <th>Tue {this.props.weekDays[1].getDate()}/
				        	{this.props.weekDays[1].getMonth()<10?
				        	'0'+this.props.weekDays[1].getMonth():
				        	this.props.weekDays[1].getMonth()}
				        </th>
				        <th>Wed {this.props.weekDays[2].getDate()}/
				        	{this.props.weekDays[2].getMonth()<10?
				        	'0'+this.props.weekDays[2].getMonth():
				        	this.props.weekDays[2].getMonth()}
				        </th>
				        <th>Thu {this.props.weekDays[3].getDate()}/
				        	{this.props.weekDays[3].getMonth()<10?
				        	'0'+this.props.weekDays[3].getMonth():
				        	this.props.weekDays[3].getMonth()}
				        </th>
				        <th>Fri {this.props.weekDays[4].getDate()}/
				        	{this.props.weekDays[4].getMonth()<10?
				        	'0'+this.props.weekDays[4].getMonth():
				        	this.props.weekDays[4].getMonth()}
				        </th>
				        <th>Sat {this.props.weekDays[5].getDate()}/
				        	{this.props.weekDays[5].getMonth()<10?
				        	'0'+this.props.weekDays[5].getMonth():
				        	this.props.weekDays[5].getMonth()}
				        </th>
				        <th>Sun {this.props.weekDays[6].getDate()}/
				        	{this.props.weekDays[6].getMonth()<10?
				        	'0'+this.props.weekDays[6].getMonth():
				        	this.props.weekDays[6].getMonth()}
				        </th>
		      		</tr>
		    	</thead>
			    <tbody>
			       	{tr}
			    </tbody>
		  	</Table>
		);
		//const MonthTable = (<div>HI</div>);
		return (
			<div>
				{WeekTable}
			</div>

		)
	}
}

//export default Calendar;