'use strict'

import { getRandomInt } from '../util.js';

export default class Player {
  constructor(name, className) {
    this._name = name;
    this._className = className;
    this._force = 0;
    this._life = 0;
    this.shot = 0;
  }

  get force() {
    return this._force;
  }

  get life() {
    return this._life;
  }

  hit() {
    let damage = getRandomInt(this._force);
    return damage;
    }
  }
  