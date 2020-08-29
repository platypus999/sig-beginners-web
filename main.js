const counter = document.getElementById('counter');
const record = document.getElementById('record');
const sugoi = document.getElementById('sugoi');
let millsecArray = [0,0,0,0,0];
const arraySize = millsecArray.length;
let recordCps = 0.0;

setInterval(() => {
	if(millsecArray[arraySize - 1] == 0){
		counter.innerHTML = "N/A";
	}
	else{
	var nowTime = new Date();
		var cps = (arraySize / (nowTime.getTime() - millsecArray[arraySize - 1]) * 1000);
		recordCps = Math.max(cps, recordCps);
		counter.innerHTML = String(cps.toFixed(2)) + " cps";
		record.innerHTML = "Max: " + String(recordCps.toFixed(2)) + " cps";
		if(recordCps > 15.4) sugoi.innerHTML = " ←超えていて、すごい";
	}
}, 16);

function myFunc(){
	var nowTime = new Date();
	for(var i = arraySize - 1; i > 0; i-=1){
		millsecArray[i] = millsecArray[i - 1];
	}
	millsecArray[0] = nowTime.getTime();
}
