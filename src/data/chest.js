const chestImageIdle = new Image();
chestImageIdle.src = "assets/chest/idle.png";

const chestImageOpen1 = new Image();
chestImageOpen1.src = "assets/chest/open_1.png";

const chestImageOpen2 = new Image();
chestImageOpen2.src = "assets/chest/open_2.png";

const chestImageOpen3 = new Image();
chestImageOpen3.src = "assets/chest/open_3.png";

export default {
  animationFrames: {
    idle: [chestImageIdle],
    open: [chestImageOpen1, chestImageOpen2, chestImageOpen3],
  },
};
