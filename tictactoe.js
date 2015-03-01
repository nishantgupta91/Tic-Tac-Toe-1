// return click event function
// fix class change on winning tiles
// Only show play again button when game finishes?
// highlight winning 3 [.addClass('xfin'/'ofin');]

// forEach(winners, checkWin) in if statement?


$(document).ready(function(){
	var tally = {
		forX: 0,
		forO: 0
	};

	$('#winner').hide();

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

	function youWon(array, current, finClass, winXO, winningLtr, winningAmt) {
		console.log(array, "wiiinnnnssss!");
			// for (var y = 0; y < winners[i].length; y++){
			// 	var identity = document.getElementById(winners[y]);
			// 	identity.removeClass(current);
			// 	identity.addClass(finClass);
			// }
		$('div').off('click');
		$('#winner').html(winXO);
		$('#winner').show();
		winningLtr += 1;
		$(winningAmt).html(winningLtr)
		$('.who').hide();
	};

	function checkWin(winBoxes, current, finClass, winXO, winningLtr, winningAmt) {
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
					console.log(quant);
					if (quant.length > 2 && $.inArray(-1, quant) == -1){
						var winArray = posArray;
						console.log(winArray, "Winner!");
						youWon(winArray, current, finClass, winXO, winningLtr, winningAmt);
					}
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
			xBoxes.push($(this).attr('id'));
			console.log(xBoxes);
			checkWin(xBoxes, 'xgo', 'xfin', "X Wins!!", xWins, '.xwins');
			moves++;
		}
		else if (moves > 4 && moves % 2 === 0){
			$(this).addClass('ogo');
			oBoxes.push($(this).attr('id'));
			console.log(oBoxes);
			checkWin(oBoxes, 'ogo', 'ofin', "O Wins!!", oWins, '.owins');
			moves++;
		}
		else if (moves % 2 != 0){
			$(this).addClass('xgo');
			xBoxes.push($(this).attr('id'));
			console.log(xBoxes);
			$('.turn').html("O");
			moves++;
		}
		else if (moves % 2 === 0){
			$(this).addClass('ogo');
			oBoxes.push($(this).attr('id'));
			console.log(oBoxes);
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
		$('div').on('click');
	});
});
