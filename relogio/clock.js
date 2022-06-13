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

	if (hour >= 0 && hour < 5) {
		document.getElementById("time").innerHTML = calendar + "<br>" + clock + "<br><br>" + "ZzZ...";
		document.body.style.backgroundImage = "linear-gradient(#30305e, #b795dd)";
	}
	else if (hour >= 5 && hour < 12) {
		document.getElementById("time").innerHTML = calendar + "<br>" + clock + "<br><br>" + "Bom dia!";
		document.body.style.backgroundImage = "linear-gradient(#a8e4f3, #ffe8f5)";
	}
	else if (hour >= 12 && hour < 15) {
		document.getElementById("time").innerHTML = calendar + "<br>" + clock + "<br><br>" + "Boa tarde!";
		document.body.style.backgroundImage = "linear-gradient(#6bc4ff, #c6f4ff)";
	}
	else if (hour >= 15 && hour < 18) {
		document.getElementById("time").innerHTML = calendar + "<br>" + clock + "<br><br>" + "Boa tarde!";
		document.body.style.backgroundImage = "linear-gradient(#5093c0, #fff9da)";
	}
	else if (hour >= 18 && hour <= 23) {
		document.getElementById("time").innerHTML = calendar + "<br>" + clock + "<br><br>" + "Boa noite!";
		document.body.style.backgroundImage = "linear-gradient(#242270, #444da0)";
	}

	realTime();
}