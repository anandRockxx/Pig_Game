/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer, gamePlaying;

init();

// When roll button is clicked

var roll = document.getElementById('roll').addEventListener('click', function(){

	if (gamePlaying) {

// Random number
var random = Math.floor(Math.random() * 6 + 1);



// Display result

var dice = document.getElementById('dice');

dice.style.display = 'block';

dice.src = 'img/dice-'+random+'.png';

document.getElementById('current-'+ activePlayer).textContent = random;


// Change the player if dice is 1

if (random !== 1) {
	// Add the score to the roundscore
	roundscore += random ;

	document.getElementById('current-'+ activePlayer).textContent = roundscore;

}else{

	nextPlayer();
}   


	}


});


// When hold button is clicked

var hold = document.getElementById('hold').addEventListener('click',function(){

	if (gamePlaying) {


 scores[activePlayer] += roundscore;

 document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];



 // check if player won the game
 if (scores[activePlayer] >=20) {


 	document.querySelector('#name-'+ [activePlayer]).textContent = 'Winner';

 	document.getElementById('dice').style.display = 'none';

 	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

 	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    gamePlaying = false;

 }else{

 	 // next player
      nextPlayer();
 }


	}


});


function nextPlayer(){

// Change the player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundscore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

    document.getElementById('panel').classList.toggle('active');    
    document.getElementById('panel1').classList.toggle('active'); 

    document.getElementById('dice').style.display = 'none';

}

document.getElementById('new_game').addEventListener('click', init);


function init() {
	
scores = [0,0];
roundscore = 0;
activePlayer = 0;
gamePlaying = true;

// Hide the dice 

document.getElementById('dice').style.display = 'none';

    document.querySelector('#name-0').textContent = 'Player 1';

    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('#score-0').textContent = '0';

    document.querySelector('#score-1').textContent = '0';

    document.querySelector('#current-0').textContent = '0';

    document.querySelector('#current-1').textContent = '0';

 	document.querySelector('.player-0-panel').classList.remove('winner');

 	document.querySelector('.player-1-panel').classList.remove('winner');

 	document.querySelector('.player-0-panel').classList.remove('active');

 	document.querySelector('.player-0-panel').classList.add('active');

 	document.querySelector('.player-1-panel').classList.remove('active');

}