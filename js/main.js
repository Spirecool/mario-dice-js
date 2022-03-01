
// *********************************
// *** Déclaration des variables ***
// *********************************

let scores, roundScore, gamePlay, activePlayer, playTill, winningScore;


// ****************************************
// *** Déclaration des variables audios ***
// ****************************************

const audioBattle = new Audio('audio/battle-sound.wav'); // son de la victoire
const audioWin = new Audio('audio/victory-sound.wav'); // son de la victoire
const audioDiceShaking = new Audio('audio/dice-roll-sound.mp3'); // son au lancer du dé
const audioLost = new Audio ('audio/lost-sound.wav');
const audioHold = new Audio ('audio/hold-sound.wav');
const audioNewGame = new Audio ('audio/new-game-sound.wav');
const audio = [audioWin, audioDiceShaking, audioLost, audioNewGame];

// Déclaration des constantes du DOM pour le bouton MUTE
const muted = document.getElementById('mute');
const mutedText = document.getElementById('mute-text');


// ****************************************
// *** Fonction qui initalise le jeu ******
// ****************************************


init();
document.querySelector('.dice').style.display = 'block';  // affiche le dé au lancement du jeu

