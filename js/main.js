// *********************************
// *** Déclaration des variables ***
// *********************************

let scores, roundScore, gamePlay, activePlayer, playTill, winningScore;

// ****************************************
// *** Déclaration des variables audios ***
// ****************************************

const audioBattle = new Audio("audio/battle-sound.wav"); // son de la victoire
const audioWin = new Audio("audio/victory-sound.wav"); // son de la victoire
const audioDiceShaking = new Audio("audio/dice-roll-sound.mp3"); // son au lancer du dé
const audioLost = new Audio("audio/lost-sound.wav");
const audioHold = new Audio("audio/hold-sound.wav");
const audioNewGame = new Audio("audio/new-game-sound.wav");
const audio = [audioWin, audioDiceShaking, audioLost, audioNewGame];

// Déclaration des constantes du DOM pour le bouton MUTE
const muted = document.getElementById("mute");
const mutedText = document.getElementById("mute-text");

// ****************************************
// *** Fonction qui initialise le jeu ******
// ****************************************

init();
document.querySelector(".dice").style.display = "block"; // affiche le dé au lancement du jeu


/**********************************/
/***Choisir le nom des joueurs ***/
/*********************************/

document.querySelector(".btn-enter").addEventListener("click", function () {
  document.querySelector(".player-names").style.display = "none";
  var player1Name = document.getElementById("player-name-1").value;
  var player2Name = document.getElementById("player-name-2").value;
  document.querySelector("#name-0").textContent = player1Name;
  document.querySelector("#name-1").textContent = player2Name;
});
