'use strict';

import Game from './Class/Game.js';
import Knight from "./Class/Knight.js";
import Dragon from "./Class/Dragon.js";

let startButton = document.getElementById('start-game');

startButton.addEventListener('click', () => {
  let playerSelection = document.getElementById('player-selection');
  let playerNameInput = document.getElementById('player-name');

  let selectedPlayer = playerSelection.value;
  let playerName = playerNameInput.value;

  if (selectedPlayer && playerName) {
    let player1, player2;

    if (selectedPlayer === 'dragon') {
      player1 = new Dragon(playerName);
      player2 = new Knight('Opponent');
    } else if (selectedPlayer === 'knight') {
      player1 = new Knight(playerName);
      player2 = new Dragon('Opponent');
    }

    let game = new Game(player1, player2);
    game.run();
  } else {
    alert('Veuillez sélectionner un personnage et entrer votre nom avant de commencer le jeu.');
  }
});
