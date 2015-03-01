// if any winning combinations are hit, stop game
// 	 and display winner.
// start new game with o.
// Only show play again button when game finishes?


$(document).ready(function(){
	var tally = {
		forX: 0,
		forO: 0
	};

	$('.winner').hide();

	var xWins = tally.forX;
	var oWins = tally.forO;
	var moves = xWins + oWins + 1;

	var winners = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		["1", "4", "7"],
		["2", "5", "8"],
		["3", "6", "9"],
		["1", "5", "9"],
		["3", "5", "7"],
	];
	


	// once 5 moves are made,
	// see if any of the div ids match winning arrays
	// if there is a match, record the id of those divs
	// stop allowing div clicks
	// return that div as the winner
	// highlight "play again button"

	// find div IDs with 3 or more matching classes
	// push those div IDs to an array
	// compare that array with arrays in "winners"

		function checkWin(current, winBoxes, finClass, winXO, winningLtr, winningAmt) {
		for (var i = 0; i < winners.length; i++){
			for (var j = 0; j < winBoxes.length; j++){
				if ($.inArray(winBoxes[j], winners[i]) === 2){
					console.log(winBoxes, "Winner!");
					// for (var y = 0; y < winners[i].length; y++){
					// 	var identity = document.getElementById(winners[y]);
					// 	identity.removeClass(current);
					// 	identity.addClass(finClass);
					// }
					$('#winner').html(winXO);
					$('#winner').show();
					winningLtr += 1;
					$(winningAmt).html(winningLtr)
				}
			}	
		}
	};


	$('div').click(function() {
		if ($(this).hasClass('xgo') || $(this).hasClass('ogo')){
			moves = moves;
		}
		else if (moves > 4 && moves % 2 != 0){
			$(this).addClass('xgo');
			checkWin('xgo');
			moves++;
		}
		else if (moves > 4 && moves % 2 === 0){
			$(this).addClass('ogo');
			checkWin('ogo');
			moves++;
		}
		else if (moves % 2 != 0){
			$(this).addClass('xgo');
			$('.turn').html("O");
			moves++;
		}
		else if (moves % 2 === 0){
			$(this).addClass('ogo');
			$('.turn').html("X");
			moves++;
		}
	});

	$('button').click(function() {
		$('div').removeClass();
		$('.winner').hide();
		moves = xWins + oWins + 1;
	});
});

Attempts:

	// var winners = [
	// 	[1, 2, 3],
	// 	[4, 5, 6],
	// 	[7, 8, 9],
	// 	[1, 4, 7],
	// 	[2, 5, 8],
	// 	[3, 6, 9],
	// 	[1, 5, 9],
	// 	[3, 5, 7],
	// ];

// $(".red").length )

	// function checkWin(eleClass) {
	// 	var clicksArray = [];
	// 	var clicks = document.getElementsByClassName(eleClass);
	// 	console.log(clicks);
	// 	for (var i = 0; i < clicks.length; i++){
	// 		clicksArray.push(clicks[i]);
	// 		// if 3 match a winning array
	// 		console.log(clicksArray);
	// 	}
	// };


	// if (('#1').hasClass('xgo') && ('#2').hasClass('xgo') && ('#3').hasClass('xgo')){
	// 	$('.winner').show();
	// 	$('.winner').html("X WON!!");
	// 	tally.forX++;
	// 	$('.xwins').html(tally.forX);
	// };

	// for (var x = 0; x < winners.length; x++){
	// 	for (var y = 0; y < winners[x].length; y++){
	// 		var current = winners[x[y]];
	// 		if ($('#current').hasClass('ogo')){
	// 			$('.winner').show();
	// 			$('.winner').html("O WON!!");
	// 			tally.forO++;
	// 			$('.owins').html(tally.forO);
	// 		}
	// 		else if ($('#current').hasClass('xgo')){
	// 			$('.winner').show();
	// 			$('.winner').html("X WON!!");
	// 			tally.forO++;
	// 			$('.owins').html(tally.forO);
	// 		}
	// 	}
	// };


	// var winners = [
	// 	['div#1.xgo', 'div#2.xgo', 'div#3.xgo'],
	// 	['div#4.xgo', 'div#5.xgo', 'div#6.xgo'],
	// 	['div#7.xgo', 'div#8.xgo', 'div#9.xgo'],
	// 	['div#1.xgo', 'div#4.xgo', 'div#7.xgo'],
	// 	['div#2.xgo', 'div#5.xgo', 'div#8.xgo'],
	// 	['div#3.xgo', 'div#6.xgo', 'div#9.xgo'],
	// 	['div#1.xgo', 'div#5.xgo', 'div#9.xgo'],
	// 	['div#3.xgo', 'div#5.xgo', 'div#7.xgo'],
	// ];

		// var winners = [
	// 	['div#1', 'div#2', 'div#3'],
	// 	['div#4', 'div#5', 'div#6'],
	// 	['div#7', 'div#8', 'div#9'],
	// 	['div#1', 'div#4', 'div#7'],
	// 	['div#2', 'div#5', 'div#8'],
	// 	['div#3', 'div#6', 'div#9'],
	// 	['div#1', 'div#5', 'div#9'],
	// 	['div#3', 'div#5', 'div#7'],
	// ];

	// function checkWin(eleClass, winBoxes) {
	// 	var clicks = document.getElementsByClassName(eleClass);
	// 	for (var i = 0; i < winners.length; i++){
	// 		for (var j = 0; j < winBoxes.length; j++){
	// 			if ($.inArray(winBoxes[j], winners[i]) == -1){
	// 				return false;
	// 			}
	// 			else {
	// 				console.log(winners[i]);
	// 			}
	// 		}
	// 	}
	// };


		// function winner(){
	// 	if (checkWin('xgo')){
	// 		$('.winner').html("X WON!!");
	// 		$('.winner').show();
	// 		xWins++;
	// 		$('.xwins').html(xWins)
	// 	}
	// 	else if checkWin('ogo'){
	// 		$('.winner').html("O WON!!");
	// 		$('.winner').show();
	// 		oWins++;
	// 		$('.owins').html(oWins)
	// 	}
	// }





	// function checkWin(current, winBoxes, finClass) {
	// 	for (var i = 0; i < winners.length; i++){
	// 		for (var j = 0; j < winBoxes.length; j++){
	// 			if ($.inArray(winBoxes[j], winners[i]) == -1){
	// 				console.log("Nope!");
	// 				return false;
	// 			}
	// 			else if ($.inArray(winBoxes[j], winners[i]) == 1){
	// 				console.log(winBoxes, "Winner!");
	// 				for (var y = 0; y < winners[i].length; y++){
	// 					$('#winBoxes[y]').removeClass(current);
	// 					$('#winBoxes[y]').addClass(finClass);
	// 				};
	// 			}
	// 		}	
	// 	}
	// };





		function checkWin(eleClass) {
		var clicks = document.getElementsByClassName(eleClass);
		for (var i = 0; i < winners.length; i++){
			for (var j = 0; j < clicks.length; j++){
				if (clicks[j] = "winners[i]" + "." + "eleClass"){
					console.log("yes");
				}
			}
		}
	};

	function winner(){
		if (checkWin('xgo')){
			$('.winner').html("X WON!!");
			$('.winner').show();
			xWins++;
			$('.xwins').html(xWins)
		}
		else if checkWin('ogo'){
			$('.winner').html("O WON!!");
			$('.winner').show();
			oWins++;
			$('.owins').html(oWins)
		}
	}