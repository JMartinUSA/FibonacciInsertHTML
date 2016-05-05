//tbd
//var percentCorrect = '99%';

var selectedHours = 0,
	selectedMinutes = 0;

var sessionCorrect = 0,
	sessionIncorrect = 0,
	sessionRow = 0,
	sessionRecordRow = 0,
	sessionAccuracy = 100;

// I'm working on correcting the accuracy calculations.. before my surgery;
function calculateSessionAccuracy(){
	sessionAccuracy = Math.ceil(100*(sessionCorrect/(sessionCorrect+sessionIncorrect)));
	if(isNaN(sessionAccuracy)){
		sessionAccuracy = 100;
	}
}

function submitAnswer(){
	if(hours == selectedHours && minutes == selectedMinutes){
		answerCorrect();
	}else{
		answerIncorrect();
	}
	selectedHours = 0;
	selectedMinutes = 0;
}

function answerCorrect(){
	console.log('correct');
	sessionCorrect ++;
	calculateSessionAccuracy();
		document.getElementById('submenu').innerHTML = '<!-- Sub Menu -->\
		<link href="submenus.css" rel="stylesheet"></style>\
		<div id="overlay">\
			<div class="resultText" id="resultText1">You are</div><br>\
			<div id="resultOutput" class="correct">Correct!!</div><br>\
			<div class="resultText" id="resultText2">Nice work,<br>\
			your accuracy <br>is</div><br>\
			<div id="percentCorrect" class="colorGreen">'+sessionAccuracy+'%</div>\
			<div id="continue" onclick="nextLevel()">Continue</div>\
		</div>';
		sizeResult();
}

function answerIncorrect(){
	console.log('incorrect');
	sessionIncorrect++;
	calculateSessionAccuracy();
		document.getElementById('submenu').innerHTML = '<!-- Sub Menu -->\
		<link href="submenus.css" rel="stylesheet"></style>\
		<div id="overlay">\
			<div class="resultText" id="resultText1">You are</div><br>\
			<div id="resultOutput" class="incorrect">Incorrect!!</div><br>\
			<div class="resultText" id="resultText2">Nice try,<br>\
			your accuracy <br>is</div><br>\
			<div id="percentCorrect" class="colorRed">'+sessionAccuracy+'%</div>\
			<div id="continue" onclick="nextLevel()">Continue</div>\
		</div>';
		sizeResult();
}
function nextLevel(){
	Game();
	document.getElementById('submenu').innerHTML = '';
}

function highlightHour(element, hoursIs){
	element.style.background=rBHighlighted;
	selectedHours = hoursIs;
	console.log(selectedHours);
}
function highlightMinute(element, minutesIs){
	element.style.background=bBHighlighted;
	selectedMinutes = minutesIs;
	console.log(selectedMinutes);
}


function clearHours(){
	selectedHours = 0;
	for(i = 0; i < 12; i++){
		//console.log("right"+i);
		document.getElementById("rightButton"+i).style.background=rBBackground;
	}
}
function clearMinutes(){
	selectedMinutes = 0;
	for(i = 0; i < 12; i++){
		//console.log("bottom"+i);
		document.getElementById("bottomButton"+i).style.background=bBBackground;
	}
}