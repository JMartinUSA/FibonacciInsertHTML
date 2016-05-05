function Stats(){
	document.getElementById('right').innerHTML = '<!-- Stats -->\
	<link href="stats.css" rel="stylesheet"></style>\
	<div id="stats">\
		<div id="statText">\
			Correct: '+sessionCorrect+'<br>\
			Incorrect: '+sessionIncorrect+'<br>\
			Accuracy: '+sessionAccuracy+'<br>\
		</div>\
	</div>';
	sizeStats();
		
}
function Menu(){
	document.getElementById('left').innerHTML = '<!-- Menu -->\
	<link href="menu.css" rel="stylesheet"></style>\
	<div id="transparentCover"></div>\
	<div id="menu">\
		<div id="menuButton0" class="menuButton" onclick="Home();">Home</div>\
		<div id="menuButton1" class="menuButton" onclick="Stats();">Stats</div>\
		<div id="menuButton2" class="menuButton" onclick="Settings();">Settings</div>\
		<div id="menuButton3" class="menuButton" onclick="Login();">Login</div>\
	</div>';
	sizeMenu();
}