import { getRandomInt } from '../util.js';

export default class Player {
    constructor(name) {
      this._name = name;
      this._force = 0;
      this._life = 0;
      this.shot = 0;
    }
  
    hit() {
      let damage = getRandomInt(this._force);
      console.log(`${this._name} inflige ${damage} dégats.`);
      return damage;
    }
  }
  