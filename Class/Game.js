'use strict';

import Dragon from "./Dragon.js";

export class Game {
  constructor(player1, player2) {
    this._player1 = player1;
    this._player2 = player2;
  }

  run() {
    // Boucle de jeu
    let currentPlayer = this._player1;
    let opponent = this._player2;
    let winner = null;

    while (true) {
      const damage = currentPlayer.hit();
      opponent._life -= damage;
      currentPlayer.shot++;

      console.log(`${opponent instanceof Dragon ? 'Opponent Dragon' : 'Opponent Knight'} n'a plus que ${opponent._life} points de vie.`);

      if (opponent._life <= 0) {
        winner = currentPlayer;
        break;
      }

      // Changer de joueur
      [currentPlayer, opponent] = [opponent, currentPlayer];
    }

    console.log(`${winner._name} gagne la partie!`);
  }
}

export default Game;
