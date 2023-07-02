'use strict';

import Game from './Class/Game.js';
import Knight from "./Class/Knight.js";
import Dragon from "./Class/Dragon.js";

document.addEventListener('DOMContentLoaded', () => {
let startButton = document.getElementById('start-game');
let gameMessages = document.getElementById('game-messages');
let playerNameElement = document.getElementsByClassName('player-name')[0];
let playerClassElement = document.getElementsByClassName('player-class')[0];
let playerLifeElement = document.getElementsByClassName('player-life')[0];
let playerForceElement = document.getElementsByClassName('player-force')[0];
let opponentNameElement = document.getElementsByClassName('opponent-name')[0];
let opponentClassElement = document.getElementsByClassName('opponent-class')[0];
let opponentLifeElement = document.getElementsByClassName('opponent-life')[0];
let opponentForceElement = document.getElementsByClassName('opponent-force')[0];


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

      let game = new Game(
        player1,
        player2,
        gameMessages,
        playerNameElement,
        playerClassElement,
        playerLifeElement,
        playerForceElement,
        opponentNameElement,
        opponentClassElement,
        opponentLifeElement,
        opponentForceElement
      );

      game.run();
    } else {
      alert('Veuillez sélectionner un personnage et entrer votre nom avant de commencer le jeu.');
    }
  });
});
