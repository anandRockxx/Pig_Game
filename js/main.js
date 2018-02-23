/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// ****************************************************************************

var dice, score, player_1, player_2, active_player;

// Hide the dice
 dice = document.getElementById('dice').style.display = 'none';



// ******************************
//       Roll the Dice
//*******************************

// Check player is active or not 
 
 active_player = document.getElementsByClassName('active');

 console.log(active_player); 

// When roll button will be clicked
 var roll = document.getElementById('roll').addEventListener('click', function rollDice(){

  // Get a random number
  var ranNum = Math.floor(Math.random()* 6 + 1);

 // Show the score
  score = document.getElementById('current-0').innerHTML = ranNum ;

 // Change the img of the dice

   dice = document.getElementById('dice').style.display = 'block';

   dice = document.getElementById('dice').src = 'img/dice-'+ranNum+'.png';

 });


// ******************************
//       Envoked Functions
//*******************************

 // var roll = { function(){

 //    return{

 //    // Assign random number to the Dice
 //     public: function roleDice(){
 //     	var roleDice = Math.floor(math.random() * 6 + 1);
 //     		console.log(roleDice);
 //     	     }
 //     // Change the dice img
     


 //    }


 // }
 // }();


// ****************************************************************************

// ******************************
//       Show the Score
//*******************************




// ******************************
//       Envoked Functions
//*******************************



// ****************************************************************************

// ******************************
//       Shift the turn
//*******************************


// ******************************
//       Envoked Functions
//*******************************