// REQUIREMENTS
// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// Ver 1 - 1 player only
// ver 2 - refactor code to include player 2
//       - global variables for current player; allPlayersScore
//       - refactor outputMessages to interact with each player, 1 & 2
//       - write logic for player 1 to go first then player 2
//       - compare score

// Global Variables
var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = "GAME_STATE_CHOOSE_DICE_ORDER";
var gameState = GAME_STATE_DICE_ROLL;

var playerRolls = [];

// Helper Function
var rollDice = function () {
  console.log("Control flow:start of roll Dice()");
  // get random integer 1 to 6
  var randomDecimal = Math.random() * 9;
  var randomInteger = Math.floor(randomDecimal) + 1;

  console.log("rollDice output, randomInteger: ", randomInteger);
  return randomInteger;
};

var rollDiceForPlayer = function () {
  console.log("Control flow: startof rollDiceForPlayer()");
  var counter = 0;
  while (counter < 2) {
    playerRolls.push(rollDice());
    counter = counter + 1;
  }

  console.log("rollDiceForPlayer changes, playerRolls; ", playerRolls);
  return `Dice roll 1: ${playerRolls[0]} <br> Dice roll 2: ${playerRolls[1]} <br><br> Please enter '1' or '2'
  to choose the dice to use for the first digit of the final value.`;
};

var getPlayerScore = function (playerInput) {
  //playerInput validation
  if (playerInput != 1 && playerInput != 2) {
    console.log(
      "Control flow: playerInput validation, invalid playerInput, NOT 1 AND NOT 2"
    );
    return `Error! Please only playerInput '1' or '2' to select dice for first digit of final value <br><br>
      Your dice rolls are: <br>
      Dice 1: ${playerRolls[0]} <br>
      Dice 2: ${playerRolls[1]}`;
  }
  //playerInput == 1
  if (playerInput == 1) {
    console.log("Control flow: playerInput == 1");
    var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));
    return "Your chosen value is " + playerScore;
  }
  //playerInput == 2
  if (playerInput == 2) {
    console.log("Control flow: playerInput == 2");
    var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
    return "Your chosen value is " + playerScore;
  }
};

var main = function (input) {
  console.log("Checking game state on submit click; ", gameState);
  var outputMessage = "";
  if (gameState == GAME_STATE_DICE_ROLL) {
    console.log("Control flow: gameState == GAME_STATE_DICE_ROLL");

    //Display dice rolled as output message
    outputMessage = rollDiceForPlayer();

    //Change the game state
    gameState = GAME_STATE_CHOOSE_DICE_ORDER;
    return outputMessage;
  }
  if (gameState == GAME_STATE_CHOOSE_DICE_ORDER) {
    console.log("Control flow: gameState == GAME_STATE_CHOOSE_DICE_ORDER");

    // Call playerScore function
    outputMessage = getPlayerScore(input);

    return outputMessage;
  }
};
