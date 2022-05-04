const playerImageIdle1 = new Image();
playerImageIdle1.src = "assets/player/idle_1.png";

const playerImageIdle2 = new Image();
playerImageIdle2.src = "assets/player/idle_2.png";

const playerImageIdle3 = new Image();
playerImageIdle3.src = "assets/player/idle_3.png";

const playerImageIdle4 = new Image();
playerImageIdle4.src = "assets/player/idle_4.png";

const playerImageRun1 = new Image();
playerImageRun1.src = "assets/player/run_1.png";

const playerImageRun2 = new Image();
playerImageRun2.src = "assets/player/run_2.png";

const playerImageRun3 = new Image();
playerImageRun3.src = "assets/player/run_3.png";

const playerImageRun4 = new Image();
playerImageRun4.src = "assets/player/run_4.png";

const playerImageDead = new Image();
playerImageDead.src = "assets/player/dead.png";

export default {
  animationFrames: {
    idle: [
      playerImageIdle1,
      playerImageIdle2,
      playerImageIdle3,
      playerImageIdle4,
    ],
    run: [playerImageRun1, playerImageRun2, playerImageRun3, playerImageRun4],
    dead: [playerImageDead],
  },
};
