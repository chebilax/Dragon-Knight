'use strict'

import Player from "./Player.js";
import { getRandomInt } from '../util.js';

export default class Knight extends Player {
  constructor(name) {
    super(name, 'Chevalier');
    this._force = getRandomInt(10) + 5;
    this._life = getRandomInt(50) + 30;
  }

  get force() {
    return this._force;
  }

  get life() {
    return this._life;
  }
}