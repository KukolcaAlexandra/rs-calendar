function addEventsToCurrentWeek(currentYear, currentMonth, currentDate, events){
	console.log('111111111111111    from setCurrentWeek');
	//console.log('weeks ' + weeks.length);
	//console.log('events ' + events.size);
	console.log('currentYear ' + currentYear);
	console.log('currentMonth ' + currentMonth);
	console.log('currentDate ' + currentDate);
	
	let d = new Date(currentYear, currentMonth, currentDate);
	console.log('date d = ' + d);
	console.log('getDay d = ' + d.getDay());
	
	let day = d.getDay() - 1;
	day = (day < 0) ? 6 : day;
	console.log('day = ' + day);
	let firstDay = currentDate - day;///////////////////
	console.log('firstDay = ' + firstDay);

	let leftBorder = new Date(currentYear, currentMonth, firstDay);
	let rightBorder = new Date(currentYear, currentMonth, firstDay + 7);
	console.log('leftBorder = ' + leftBorder);
	console.log('rightBorder = ' + rightBorder);

	/*let d1 = new Date(2017, 5, 30);
	let d2 = new Date(2017, 6, 11);
	if(d1 > d2)
		console.log(">");
	else
		console.log("<");*/
	/*let rightBorder = new Date(currentYear, currentMonth, firstDay + 6);
	console.log('rightBorder = ' + rightBorder);*/
	//for(let i = 0; i < 7; i++){
	let selectedEvents = []; 
	for(let i=0; i<7; i++){
		selectedEvents.push([]);
	}

	let dayEvents = [];
	events.forEach(function(event){
		//console.log('event = ' + event.get('type'));
		let d = new Date(event.get('start'));
		//console.log('d = ' + d);
		if((d >= leftBorder) && (d < rightBorder)){
			console.log('d = ' + d);
			//let date = d;
			//let o = {d:event};
			//dayEvents.push(o);
			console.log('day = ' + d.getDay());
			let day = d.getDay() - 1;
			day = (day < 0) ? 6 : day;
			let index = day;
			console.log('index = ' + index);
			selectedEvents[index].push(event);
			//selectedEvents.push(event);
		} 
	});


	/*dayEvents.sort(function(a, b){
		var c = new Date(a.date);
		var d = new Date(b.date);
		return c-d;
	});*/

	//console.log('dayEvents[0] = ' + dayEvents[0]['']);
	//console.log('dayEvents.length = ' + dayEvents.length);
	//dayEvents.forEach((day) => console.log(day.get('start')));
	//console.log('dayEvents[29] = ' + dayEvents[]);
	for(let i=0; i<7; i++){
		console.log(selectedEvents[i]);
	}
	console.log('selectedEvents.length = ' + selectedEvents.length);
	//}

	return selectedEvents;
}
export default addEventsToCurrentWeek;