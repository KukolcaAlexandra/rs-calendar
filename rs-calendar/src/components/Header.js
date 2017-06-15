import React, { Component } from 'react';
import { ButtonToolbar, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonGroup } from 'react-bootstrap';
//import numToMonth from './functions/numToMonth';
//import addEventsToWeeks from './functions/addEventsToWeeks';
import numToMonth from '../functions/numToMonth';

class Header extends Component{
	
	render(){
		let month = numToMonth(this.props.month);
		//let d = new Date(this.props.year, this.props.month, this.props.date);
		let d = new Date(this.props.weekDays[0].getFullYear(), 
						 this.props.weekDays[0].getMonth(), 
						 this.props.weekDays[0].getDate());
		console.log('22222222222222222222222222 d = ' + d);
		//let value = [];
		//value.push(this.props.mode);
		//value.push(this.props.month);//{'mode':this.props.mode, 'month':this.props.month};
		//value.push(this.props.year);
		let obj = {};
		obj.month = this.props.month;
		//console.log("555555555555555555555555             value[0] " + value[0]);
		//console.log("value[1]" + value[1]);
		const buttonGroupInstance = (
		  <ButtonGroup>
		    <Button bsStyle="warning" onClick={(obj) => this.props.onBackClick(obj)} value={this.props.mode+d} >
		    	back
		    </Button>
		    <Button bsStyle="warning" onClick={(obj) => this.props.onNextClick(obj)} value={this.props.mode+d}>
		    	next
		    </Button>
		  </ButtonGroup>
		);

		/*const navInstance = (
			<Nav inverse activeKey={1}>
			    <NavItem>{buttonGroupInstance}</NavItem>
			    <NavItem><h4>{month} {this.props.year}</h4></NavItem>
			    <NavItem>
			    	<ButtonGroup>
			        	<Button bsStyle="warning" onClick={() => this.props.onWeekClick()}>week</Button>
			        	<Button bsStyle="warning" onClick={() => this.props.onMonthClick()}>month</Button>
		        	</ButtonGroup>
		        </NavItem>
			</Nav>
		);*/
		/*const navInstance = (
			<Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
			    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
			    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
			    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
			 </Nav>
		);*/
		const dateMonth = month + " " + this.props.year;
		const dateWeek = numToMonth(this.props.weekDays[0].getMonth()) + ' ' + this.props.weekDays[0].getDate() + ' - ' + 
						 numToMonth(this.props.weekDays[6].getMonth()) + ' ' + this.props.weekDays[6].getDate();
		const date = this.props.mode ? dateMonth : dateWeek;
		const navbarInstance = (
		  <Navbar inverse defaultExpanded>
		    <Navbar.Collapse>
		      <Nav pullLeft>
		        <NavItem eventKey={1} href="#">
		        	{buttonGroupInstance}
		        </NavItem>
		      </Nav>
		      <Nav>
		      		<NavItem>
		      			<h4>
		      				{date}
		      			</h4>
		      		</NavItem>
		      </Nav>
		      <Nav pullRight>
		        <NavItem eventKey={1} href="#">
		        	<ButtonGroup>
			        	<Button bsStyle="warning" onClick={() => this.props.onWeekClick()}>week</Button>
			        	<Button bsStyle="warning" onClick={() => this.props.onMonthClick()}>month</Button>
		        	</ButtonGroup>
		        </NavItem>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		);

		
		return (
			<div>
				{navbarInstance}
			</div>
		)
		/*return (
			<div>
				{navInstance}

			</div>
		)*/
	}
}

export default Header;