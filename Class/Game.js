'use strict';


export class Game {
  constructor(player1, player2, gameMessages, playerNameElement, playerClassElement, playerLifeElement, playerForceElement, opponentNameElement, opponentClassElement, opponentLifeElement, opponentForceElement) {
    this._player1 = player1;
    this._player2 = player2;
    this._gameMessages = gameMessages;
    this._playerNameElement = playerNameElement;
    this._playerClassElement = playerClassElement;
    this._playerLifeElement = playerLifeElement;
    this._playerForceElement = playerForceElement;
    this._opponentNameElement = opponentNameElement;
    this._opponentClassElement = opponentClassElement;
    this._opponentLifeElement = opponentLifeElement;
    this._opponentForceElement = opponentForceElement;
  }


  run() {
    let currentPlayer = this._player1;
    let opponent = this._player2;
    let winner = null;

    this._playerNameElement.textContent = currentPlayer._name;
    this._playerClassElement.textContent = currentPlayer._className;
    this._playerLifeElement.textContent = `Points de vie: ${currentPlayer._life}`;
    this._playerForceElement.textContent = `Force: ${currentPlayer._force}`;

    this._opponentNameElement.textContent = opponent._name;
    this._opponentClassElement.textContent = opponent._className;
    this._opponentLifeElement.textContent = `Points de vie: ${opponent._life}`;
    this._opponentForceElement.textContent = `Force: ${opponent._force}`;

    const gameLoop = () => {
      const damage = currentPlayer.hit();
      opponent._life -= damage;
      currentPlayer.shot++;

      this.displayMessage(`${currentPlayer._name} le ${currentPlayer._className} inflige ${damage} dégâts à ${opponent._name}.`);
      this.displayMessage(`${opponent._name} le ${opponent._className} n'a plus que ${opponent._life} points de vie.`);

      if (opponent._life <= 0) {
        winner = currentPlayer;
        this.displayMessage(`${winner._name} gagne la partie!`);
        return;
      }

      [currentPlayer, opponent] = [opponent, currentPlayer];

      setTimeout(gameLoop, 1000);
    };

    setTimeout(gameLoop, 1000);
  }

  displayMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    this._gameMessages.appendChild(messageElement);
  }
}

export default Game;
