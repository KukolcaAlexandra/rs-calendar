function createCurrentWeekDays(currentYear, currentMonth, currentDate){
	console.log('from createCurrentWeekDays');
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

	let weekDays = [];
	let leftBorder = new Date(currentYear, currentMonth, firstDay);
	for(let i=0; i<7; i++){
		weekDays.push( new Date(currentYear, currentMonth, firstDay + i));
		console.log('weekDays[' + i + ']' + weekDays[i]);
	}
	
	return weekDays;
}
export default createCurrentWeekDays;