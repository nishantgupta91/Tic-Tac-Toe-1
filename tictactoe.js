// return click event function/ remove ability to click after win
	// fix class change on winning tiles
// Only show play again button when game finishes?
// highlight winning 3 [.addClass('xfin'/'ofin');]
// add case for stalemate
// 3rd game starts with O?

// forEach(winners, checkWin) in if statement?

// Change parameter names, fix win counts?

$(document).ready(function(){
	var tally = {
		forX: 0,
		forO: 0
	};

	$('#winner').hide();
	$('button').hide();

	var xWins = tally.forX;
	var oWins = tally.forO;
	var moves = 1;
	var xBoxes = [];
	var oBoxes = [];

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

	function youWon(array, current, finClass, winXO, winCount, letterWins) {
		console.log(array, "wiiinnnnssss!");
		// for (var y = 0; y < array.length; y++){
		// 	var identity = document.getElementById(thisOne);
		// 	identity.removeClass(current);
		// 	identity.addClass(finClass);
		// }
		// $('div').click('disable');
		$('#winner').html(winXO);
		$('#winner').show();
		if (winCount == tally.forX){
			tally.forX++;
			xWins = tally.forX;
			$(letterWins).html(tally.forX);
		}
		else if (winCount == tally.forO){
			tally.forO++;
			oWins = tally.forO;
			$(letterWins).html(tally.forO);
		}
		console.log("O wins: " + tally.forO);
		console.log("X wins: " + tally.forX);
		$('.who').hide();
		$('button').show();
	};

	function checkWin(winBoxes, current, finClass, winXO, winCount, letterWins) {
		for (var i = 0; i < winners.length; i++){
			var posArray = winners[i];
			var count = {};
			var quant = [];
			for (var j = 0; j < posArray.length; j++){
				count[posArray[j]] = (count[posArray[j]] || 0) + ($.inArray(posArray[j], winBoxes));
				if (count[posArray[j]] === -1){
					break;
				}
				else {
					quant.push(count[posArray[j]]);
					if (quant.length > 2 && $.inArray(-1, quant) == -1){
						var winArray = posArray;
						youWon(winArray, current, finClass, winXO, winCount, letterWins);
					}
				}
			}
		}
	};


	$('div').click(function() {
		if ($(this).hasClass('xgo') || $(this).hasClass('ogo')){
			moves = moves;
		}
		// else if (moves > 9) {
			
		// 	$('#1 #2 #3 #4 #5 #6 #7 #8 #9').removeClass();
		// 	$('#1 #2 #3 #4 #5 #6 #7 #8 #9').addClass('xfin');
		// }
		else if (moves > 4 && moves % 2 != 0){
			$(this).addClass('xgo');
			xBoxes.push($(this).attr('id'));
			$('.turn').html("O");
			checkWin(xBoxes, 'xgo', 'xfin', "X Wins!!", xWins, '.xwins');
			moves++;
		}
		else if (moves > 4 && moves % 2 === 0){
			$(this).addClass('ogo');
			oBoxes.push($(this).attr('id'));
			$('.turn').html("X");
			checkWin(oBoxes, 'ogo', 'ofin', "O Wins!!", oWins, '.owins');
			moves++;
		}
		else if (moves % 2 != 0){
			$(this).addClass('xgo');
			xBoxes.push($(this).attr('id'));
			$('.turn').html("O");
			moves++;
		}
		else if (moves % 2 === 0){
			$(this).addClass('ogo');
			oBoxes.push($(this).attr('id'));
			$('.turn').html("X");
			moves++;
		}
	});

	$('button').click(function() {
		$('div').removeClass();
		$('#winner').hide();
		$('.who').show();
		if ((xWins + oWins) % 2 === 0){
			moves = 2;
			$('.turn').html("O");
		}
		else {
			moves = 1;
			$('.turn').html("X");
		}
		xBoxes = [];
		oBoxes = [];
		// $('div').click('enable');
		$('button').hide();
	});
});
