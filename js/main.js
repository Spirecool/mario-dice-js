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




// ****************************************
// *** Bouton lancer de dé (Roll Dice) ****
// ****************************************


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlay) { // si le jeu est en cours
        audioDiceShaking.play();
        // Nombre aléatoire
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector('.dice'); // affiche l'image du dé selon le résultat du random
        // Affiche l'image du dé
        diceDOM.style.display = 'block';
        // Modifie l'image de la face du dé
        
        diceDOM.src = `images/face-${dice}.png`; // autre écriture : diceDOM.src = 'images/face-' + dice + '.png';
        //si nombre est différent de 1
        if (dice !== 1) {
            roundScore += dice; //obtenir le score du tour à partir des lancers de dés
            document.querySelector('#round-' + activePlayer).textContent = roundScore;

        //Sinon ...
        } else {
            
            document.querySelector('.dice');
            audioLost.play();
            nextPlayer(); // appelle la fonction du joueur suivant
        }
    }    
});



// *********************************
// *** Fonction sécuriser (hold) ***
// *********************************


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlay) { // si le jeu est en cours
        scores[activePlayer] += roundScore; // ajoute le score courant (ROUND) au score global
        audioHold.play();
  
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
  