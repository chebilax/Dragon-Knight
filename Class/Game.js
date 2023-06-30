'use strict';

import Dragon from "./Dragon.js";

export class Game {
  constructor(player1, player2) {
    this._player1 = player1;
    this._player2 = player2;
  }

  run() {
    let currentPlayer = this._player1;
    let opponent = this._player2;
    let winner = null;
  
    console.log(`Tu es ${currentPlayer._name} le ${currentPlayer._className}.`);
    console.log(`Ton opposant est ${opponent._name} le ${opponent._className}.`);
  
    while (true) {
      const damage = currentPlayer.hit();
      opponent._life -= damage;
      currentPlayer.shot++;
  
      console.log(`${currentPlayer._name} le ${currentPlayer._className} inflige ${damage} dégats à ${opponent._name}.`);
      console.log(`${opponent._name} le ${opponent._className} n'a plus que ${opponent._life} points de vie.`);
  
      if (opponent._life <= 0) {
        winner = currentPlayer;
        break;
      }
  
      [currentPlayer, opponent] = [opponent, currentPlayer];
    }
  
    console.log(`${winner._name} gagne la partie!`);
  }
  
}  

export default Game;
