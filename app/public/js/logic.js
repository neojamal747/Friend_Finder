//Dependencies
var friendsArray = require("../../data/friends.js")


function Friend(name, photoURL, scores){
this.name = name;
this.photoURL = photoURL;
this.scores = scores;
this.bestMatch;
};

//Compares the current user's answers to everybody else's answers, finding the closest match.  
Friend.prototype.totalDifference = function() {
	//lowestDiff starts at 40 because that is the maximum potential difference between two user's scores.
	var lowestDiff = 40;
	var that = this;
	friendsArray.forEach(function(currentValue, index, array){
		//Grabs every user's "scores" array in turn
		var currentFriendScores = currentValue.scores; 
		//Holds the net difference between that.scores and currentFriendScores
		var totalDiff = 0; 

		//Computes totalDiff;
		for (var i = 0; i < that.scores.length; i++) {
			var currentQuestionDiff = Math.abs(that.scores[i] - currentFriendScores[i]);
			totalDiff += currentQuestionDiff;
		};

		//If currentFriendScores is closer to this user's scores, change lowestDiff and store the Friend object currently being scanned to that.bestMath
		if (totalDiff < lowestDiff){
			lowestDiff = totalDiff;
			that.bestMatch = currentValue;
		};
	});
};

module.exports = Friend;