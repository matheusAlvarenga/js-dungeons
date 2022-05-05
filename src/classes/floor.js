import { chestGenerator } from "../generators/chest.js";
import { enemyGenerator } from "../generators/enemy.js";

export class Floor {
  constructor({ canvas, context, floor, difficulty, player }) {
    this.difficulty = difficulty;
    this.enemies = enemyGenerator({
      canvas,
      context,
      quantity: Math.ceil(floor * 1.2),
      difficulty: Math.ceil(floor * 1.05),
      player,
    });

    this.chests = chestGenerator({
      canvas,
      context,
      quantity: Math.ceil(floor * 0.3),
      player,
    });
  }

  draw() {
    this.drawEnemies();
    this.drawChests();
  }

  drawChests() {
    this.chests.forEach((chest) => chest.draw());
  }

  drawEnemies() {
    this.enemies.forEach((enemy) => enemy.draw());
  }
}
