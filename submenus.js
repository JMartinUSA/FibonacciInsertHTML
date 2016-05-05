function Stats(){
	exitSubmenu();
	document.getElementById('right').innerHTML = '<!-- Stats -->\
	<link href="stats.css" rel="stylesheet"></style>\
	<div id="stats">\
		<div id="statText">\
			Correct: '+sessionCorrect+'<br>\
			Incorrect: '+sessionIncorrect+'<br>\
			Accuracy: '+sessionAccuracy+'%<br>\
		</div>\
		<div id="backButton" onclick="exitSubmenu();">Back</div>\
	</div>';
	sizeStats();
		
}
function Menu(){
	exitSubmenu();
	document.getElementById('left').innerHTML = '<!-- Menu -->\
	<link href="menu.css" rel="stylesheet"></style>\
	<div id="transparentCover"></div>\
	<div id="menu">\
		<div id="menuButton0" class="menuButton" onclick="Home();exitResult();">Home</div>\
		<div id="menuButton1" class="menuButton" onclick="Stats();exitResult();">Stats</div>\
		<div id="menuButton2" class="menuButton" onclick="Settings();exitResult();">Settings</div>\
		<div id="menuButton3" class="menuButton" onclick="Login();exitResult();">Login</div>\
	</div>';
	sizeMenu();
}