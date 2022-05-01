const bow = new Image();
bow.src = "assets/bow/idle.png";

const bowShoot1 = new Image();
bowShoot1.src = "assets/bow/shoot_1.png";

const bowShoot2 = new Image();
bowShoot2.src = "assets/bow/shoot_2.png";

const bowShoot3 = new Image();
bowShoot3.src = "assets/bow/shoot_3.png";

export default {
  animationFrames: {
    idle: [bow],
    shoot: [bowShoot1, bowShoot2, bowShoot3]
  },
};
