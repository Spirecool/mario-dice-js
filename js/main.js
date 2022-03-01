
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


// ******************************
// *** On vérifie qui a gagné ***
// ******************************

// On vérifie si le joueur a gagné la partie 
playTill = document.querySelector(".play-till").value;

document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  //check if player won game
  let input = document.querySelector(".play-till").value;

  if (input) {
    winningScore = input;
  } else {
    winningScore = 100;
  }
      if (scores[activePlayer] >= winningScore) {
          document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
          audioWin.play();
          document.querySelector('.dice').style.display = 'block';
          //on supprime la classe winner du block du joueur actif
          document.querySelector(("player-name-1").value + activePlayer + '-panel').classList.add('winner');
          // document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // sinon ce code
          document.querySelector(("player-name-2").value  + activePlayer + '-panel').classList.remove('active');
          gamePlay = false; // on enlève la possibilité de continuer la partie (roll dice et hold ne lancent plus rien)
      } else {
          nextPlayer();
      }
  }
});



// ********************************************
// *** Fonction "passer au joueur suivant") ***
// ********************************************


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //si joueur actif est le joueur 0, passer au joueur 1, sinon le joueur actif est le joueur 0
    roundScore = 0;
    // //classList.toggle ajoute une classe dans l'élément HTML, il supprime une classe si un argument n'est pas présent dans la classe de l'élément HTML
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
 
    // // on reset le scores courant du joueur (Round) à zéro
    document.getElementById('round-0').textContent = '0';
    document.getElementById('round-1').textContent = '0';

    // document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


// ************************************************
// *** Fonction "Démarrer une nouvelle partie") ***
// ************************************************


function init() {
    scores = [0, 0]; // reset les scores à 0
    activePlayer = 0; //O est le premier joueur et 1 est le second
    roundScore = 0;
    gamePlay = true;
    
    // audioNewGame.play(); A REMETTRE EN PROD !

    document.querySelector('.dice').style.display = 'block'; // affiche le dé au lancement nouvelle partie
    // Reset des scores : global
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('round-0').textContent = '0';
    document.getElementById('round-1').textContent = '0';

    //Reset les noms des joueurs (supprime "winner")
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //reset la propriété classList (sans le "winner")
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

// ****************************************
// *** Événénement MUTE = couper le son ***
// ****************************************


muted.addEventListener('click', () => {
  if(mutedText.innerText === 'Désactiver le son :'){
      mutedText.innerText = 'Activer le son :';
      muted.innerHTML = '&#128266;';
      for(let track of audio){
        track.muted = true;
      }

  } else if(mutedText.innerText === 'Activer le son :') {
      mutedText.innerText = 'Désactiver le son :';
      muted.innerHTML = '&#128263;';
      for(let track of audio){
        track.muted = false;
      }
  }
});

/**************************************/
/*** MODAL - Trigger/Ouvre le Modal ***/
/**************************************/


  // Cibler le modal
let modal = document.getElementById("myModal");

  // Cibler le bouton qui ouvre le modal
let btn = document.getElementById("myBtn");

  // Cibler l'élément <span> qui ferme le modal 
let span = document.getElementsByClassName("close")[0];

  // Quand le joueur clique sur le bouton, le modal s'ouvre
btn.onclick = function() {
  modal.style.display = "block";
}

  // Quand le joueur clique sur la croix du <span>, cela ferme le modal
span.onclick = function() {
  modal.style.display = "none";
}

  // Quand l'utilisateur clique n'importe où à l'extérieur du moal cela ferme le modal.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/**********************************/
/***Choisir le nom des joueurs ***/
/*********************************/


document.querySelector('.btn-enter').addEventListener('click', function() {
  document.querySelector('.player-names').style.display = 'none';
  var player1Name = document.getElementById("player-name-1").value;
  var player2Name = document.getElementById("player-name-2").value;
  document.querySelector('#name-0').textContent = player1Name;
  document.querySelector('#name-1').textContent = player2Name;

});
