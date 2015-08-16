/**
 * Created by Nishant on 8/15/2015.
 */
function divClicked() {
    console.log('Div clicked : ' + this.id);
    if ($(this).hasClass('xgo') || $(this).hasClass('ogo')){
        moves = moves;
    }
    else if (moves > 4 && moves % 2 != 0){
        $(this).addClass('xgo');
        xBoxes.push($(this).attr('id'));
        $('.turn').html("O");
        checkWin(xBoxes, "X Wins!!", xWins, '.xwins');
        moves++;
        if (moves > 9){
            $('button').show();
        }
    }
    else if (moves > 4 && moves % 2 === 0){
        $(this).addClass('ogo');
        oBoxes.push($(this).attr('id'));
        $('.turn').html("X");
        checkWin(oBoxes, "O Wins!!", oWins, '.owins');
        moves++;
        if (moves > 10){
            $('button').show();
        }
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
}

function buttonClicked(){
    $('div').css('pointer-events', 'auto');
    $('div').removeClass();
    $('#winner').hide();
    $('.who').show();
    if ((xWins + oWins) % 2 === 0){
        moves = 1;
        $('.turn').html("X");
    }
    else {
        moves = 2;
        $('.turn').html("O");
    }
    xBoxes = [];
    oBoxes = [];
}