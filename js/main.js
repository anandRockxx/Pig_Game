var scores, roundscore, activePlayer, gamePlaying, ranNum, new_score;

init();

// When roll button is clicked

var roll = document.getElementById('roll').addEventListener('click', function() {

	if (gamePlaying) {

		var input_win_score = document.getElementById('win_score').value;

		if(input_win_score === ''){
			alert('Please decide wining score.')
		}else{

		// Random number
		var random = Math.floor(Math.random() * 6 + 1);

		var random2 = Math.floor(Math.random() * 6 + 1);


		// Display result

		var dice = document.getElementById('dice');

		var dice2 = document.getElementById('dice-2');

		dice.style.display = 'block';

		dice2.style.display = 'block';


		dice.src = 'img/dice-' + random + '.png';

		dice2.src = 'img/dice-' + random2 + '.png';

		new_score = random + random2;


		// Change the player if dice is 1

		if (random && random2) {
			// Add the score to the roundscore
			roundscore += new_score;

			document.getElementById('current-' + activePlayer).textContent = roundscore;

		}


		// Check Dices

		if (random == 6 && random2 == 6) {

			nextPlayer();

		} else if (random == 1 || random2 == 1) {

			nextPlayer();
		}


		}
	}


});



// When hold button is clicked

var hold = document.getElementById('hold').addEventListener('click', function() {

	if (gamePlaying) {


		scores[activePlayer] += roundscore;

		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


		// check if player won the game

		var input = win_score = document.getElementById('win_score').value;

		var win_score;

		if (input) {
			win_score = input;
		} else {
			win_score = 100;
		}



		// Check round score

		if (scores[activePlayer] >= win_score) {


			document.querySelector('#name-' + [activePlayer]).textContent = 'Winner';

			document.getElementById('dice').style.display = 'none';

			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			gamePlaying = false;

		} else {

			// next player
			nextPlayer();
		}


	}


});



// Next Player
function nextPlayer() {

	// Change the player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundscore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('panel').classList.toggle('active');
	document.getElementById('panel1').classList.toggle('active');

	document.getElementById('dice').style.display = 'none';

	document.getElementById('dice-2').style.display = 'none';

}

document.getElementById('new_game').addEventListener('click', init);



// Initialise the Game
function init() {

	scores = [0, 0];
	roundscore = 0;
	activePlayer = 0;
	gamePlaying = true;
	ranNum = 0;
	new_score = 0;



	var player_1 = prompt('What is your name player 1');
	var player_2;

	if(player_1 !== null && player_1 !== '') {
		player_2 = prompt('What is your name player 2');
		if(player_2 === null || player_2 === '') {
			window.location.reload();		
		}
	} else{
		window.location.reload();	
	}


	// Hide the dice 
	document.getElementById('dice').style.display = 'none';

	document.getElementById('dice-2').style.display = 'none';

	document.querySelector('#name-0').textContent = player_1;

	document.querySelector('#name-1').textContent = player_2;

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