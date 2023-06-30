import Player from "./Player.js";
import { getRandomInt } from '../util.js';


export default class Dragon extends Player {
    constructor(name) {
      super(name);
      this._force = getRandomInt(10) + 1;
      this._life = getRandomInt(50) + 50;
    }
  }