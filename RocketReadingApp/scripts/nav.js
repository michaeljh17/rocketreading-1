function hideAll() {
	"use strict";
	var screens = [],
		count;
	
	screens = document.getElementsByClassName("navScreen");
	for ( count = 0; count < screens.length; count = count + 1 ) {
		console.log("hideAll() : Hiding " + screens[count].id);
		screens[count].hidden = true;
	};
}

var showPingPong = function () {
	"use strict";
	hideAll();
	document.getElementById("pingpong").hidden = false;
}

var showHomeScreen = function () {
	"use strict";
	hideAll();
	document.getElementById("homeScreen").hidden = false;
};

var showLevelScreen = function () {
	"use strict";
	hideAll();
	document.getElementById("levelSelectScreen").hidden = false;
};

var showGameSelectScreen = function () {
	"use strict";
	hideAll();
	document.getElementById("gameSelectScreen").hidden = false;
};

var showHighScoresScreen = function () {
	"use strict";
	hideAll();
	document.getElementById("highScoresScreen").hidden = false;
};

var showGameScreen = function () {
	"use strict";
	hideAll();
	document.getElementById("gamesScreen").hidden = false;
	gameInitialise();
};

var showLoginScreen = function () {
	"use strict";
	hideAll();
	document.getElementById("loginScreen").hidden = false;
};

function navigationInitialise() {
	"use strict";
	console.log("navigationInitialise() : Running");
	var collectionArray = [],
		count;
	// Login Screen
	document.getElementById("loginEnterBtn").addEventListener("click", processLogin, false);
	
	// Home Screen
	document.getElementById("homePlayGame").addEventListener("click", showLevelScreen);
	document.getElementById("homeHighScores").addEventListener("click", showHighScoresScreen);
	document.getElementById("homeExit").addEventListener("click", showLoginScreen);
	
	// Level Select Screen
	document.getElementById("levelSelectHomeButton").addEventListener("click", showHomeScreen);
	collectionArray = document.getElementsByClassName("levelSelectIconContainerClickable");
	
	for ( count = 0; count < collectionArray.length; count = count + 1) {
		collectionArray[count].addEventListener("click",showGameSelectScreen);
	}
	collectionArray = [];
	// Game Select Screen
	document.getElementById("gameSelectHomeButton").addEventListener("click", showLevelScreen);
	document.getElementById("gameScreenButton1").addEventListener("click", showGameScreen);
	
	// Game Screen
	document.getElementById("gameHomeLink").addEventListener("click", showHomeScreen);
	
	// High Scores Screen
	document.getElementById("highScoreScreenHomeButton").addEventListener("click", showHomeScreen);
}