import { Enemy } from "../classes/enemy.js";

export const enemyGenerator = ({
  canvas,
  context,
  quantity,
  difficulty,
  player,
}) => {
  const enemies = [];

  for (let i = 0; i < quantity; i++) {
    enemies.push(
      new Enemy({
        canvas,
        context,
        position: {
          x: Math.floor(Math.random() * canvas.width) - 40,
          y: Math.floor(Math.random() * canvas.height) - 40,
        },
        player: player,
      })
    );
  }

  return enemies;
};
