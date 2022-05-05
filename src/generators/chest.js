import { Chest } from "../classes/chest.js";

export const chestGenerator = ({ canvas, context, quantity, player }) => {
  const chests = [];

  for (let i = 0; i < quantity; i++) {
    const chest = new Chest({
      canvas,
      context,
      position: {
        x: Math.floor(Math.random() * canvas.width - 40) + 40,
        y: Math.floor(Math.random() * canvas.height - 40) + 40,
      },
      player: player,
    });

    chests.push(chest);
  }

  return chests;
};
