import { AnimatedSprite } from "./animated-sprite.js";

const playerImage = new Image();
playerImage.src = "assets/player/idle_1.png";

const playerImage2 = new Image();
playerImage2.src = "assets/player/idle_2.png";

const playerImage3 = new Image();
playerImage3.src = "assets/player/idle_3.png";

const playerImage4 = new Image();
playerImage4.src = "assets/player/idle_4.png";

const playerImageRun1 = new Image();
playerImageRun1.src = "assets/player/run_1.png";

const playerImageRun2 = new Image();
playerImageRun2.src = "assets/player/run_2.png";

const playerImageRun3 = new Image();
playerImageRun3.src = "assets/player/run_3.png";

const playerImageRun4 = new Image();
playerImageRun4.src = "assets/player/run_4.png";

const bowImage = new Image();
bowImage.src = "assets/bow/idle.png";

const bowImageShoot1 = new Image();
bowImageShoot1.src = "assets/bow/shoot_1.png";

const bowImageShoot2 = new Image();
bowImageShoot2.src = "assets/bow/shoot_2.png";

const bowImageShoot3 = new Image();
bowImageShoot3.src = "assets/bow/shoot_3.png";

export class Player {
  isRunning = false;

  isShooting = false;

  keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    mouse: {
      pressed: false,
    },
  };

  mouse = {
    x: 0,
    y: 0,
  };

  constructor({ context, position }) {
    this.context = context;
    this.position = position;
    this.sprite = new AnimatedSprite({
      context,
      position,
      actualState: "idle",
      allStates: {
        idle: [playerImage, playerImage2, playerImage3, playerImage4],
        run: [
          playerImageRun1,
          playerImageRun2,
          playerImageRun3,
          playerImageRun4,
        ],
      },
      size: {
        width: 46,
        height: 80,
      },
    });
    this.bow = new AnimatedSprite({
      context,
      position,
      actualState: "idle",
      allStates: {
        idle: [bowImage],
        shooting: [bowImage, bowImageShoot1, bowImageShoot2, bowImageShoot3],
      },
      size: {
        width: 40,
        height: 40,
      },
      rotation: 0,
      offset: {
        x: 25,
        y: 20,
      },
      oneTime: this.shooting,
    });
  }

  draw() {
    if (this.keys.w.pressed) {
      this.position.y -= 3;
    }

    if (this.keys.s.pressed) {
      this.position.y += 3;
    }

    if (this.keys.a.pressed) {
      this.position.x -= 3;
    }

    if (this.keys.d.pressed) {
      this.position.x += 3;
    }

    if (this.isRunning) {
      this.sprite.changeState("run");
    } else {
      this.sprite.changeState("idle");
    }

    if (this.isShooting) {
      this.bow.changeState("shooting");
    } else {
      this.bow.changeState("idle");
    }

    this.bow.rotation =
      Math.atan2(
        this.mouse.x - this.position.x,
        -(this.mouse.y - this.position.y)
      ) - 1.4;
    this.bow.draw();
    this.sprite.draw();
  }

  shooting(state) {
    if (state === "shooting") {
      console.log("shot");
    }
    this.changeState("idle");
  }
}
