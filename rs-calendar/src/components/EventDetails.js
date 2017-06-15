import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
//import numToMonth from './functions/numToMonth';
//import addEventsToWeeks from './functions/addEventsToWeeks';
import numToMonth from '../functions/numToMonth';

class EventDetails extends Component{
	/*shouldComponentUpdate(nextProps){
		if (nextProps.user === this.props.user){
			return false;
		}
		return true;
	}*/
	

	render(){
		const d = new Date(this.props.event.get('start'));
		let month = numToMonth(d.getMonth());
		const thumbnailInstance = (
		  <Grid>
		    <Row>
		    <Col xs={12} md={12}>
		      <Thumbnail>
		        <h3>{this.props.event.get('type')} : {this.props.event.get('title')}</h3>
		        <p><b>Time:</b> {d.getDate()} {month} {d.getFullYear()}</p>
		        <p><b>Description:</b> {this.props.event.get('description')}</p>
		        <p>
		          <Button bsStyle="primary">feedback</Button>&nbsp;
		        </p>
		      </Thumbnail>
		    </Col>
		    </Row>
		  </Grid>
		);

		return (
			<div>
				{thumbnailInstance}
			</div>
		)
		/*return (
			<div>
				<h3>{this.props.event.get('type')} : {this.props.event.get('title')}</h3>
				<div>Time: {d.getDate()} {month} {d.getFullYear()}</div>
				<div>Description: {this.props.event.get('description')}</div>
			</div>
		)*/
	}
}

export default EventDetails;