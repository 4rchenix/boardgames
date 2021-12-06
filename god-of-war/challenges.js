var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
//        var dice2 = Math.floor(Math.random() * 6) + 1;
//	var dice3 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
//        document.getElementById('dice-2').style.display = 'block';
//        document.getElementById('dice-3').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
//        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
//        document.getElementById('dice-3').src = 'dice-' + dice3 + '.png';
    }    
});


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
//    document.getElementById('dice-2').style.display = 'none';
//    document.getElementById('dice-3').style.display = 'none';
}
