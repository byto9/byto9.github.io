function realTime(){
	const refresh = 1000;
	setTimeout('displayTime()',refresh)
}

function displayTime(){
	let t = new Date();
	let day = t.getDate();
	day = day <= 9 ? "0" + day : day;
	let month = (t.getMonth()+1);
	month = month <= 9 ? "0" + month : month;
	let year = t.getFullYear();

	let hour = t.getHours();
	hour = hour <= 9 ? "0" + hour : hour;
	let min = t.getMinutes();
	min = min <= 9 ? "0" + min : min;
	let sec = t.getSeconds();
	sec = sec <= 9 ? "0" + sec : sec;

	let calendar = day + "/" + month + "/" + year
	let clock = hour + ":" + min + ":" + sec

	document.getElementById("time").innerHTML = calendar + "<br>" + clock;
	realTime();
}
