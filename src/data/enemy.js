const orcWarriorIdle1 = new Image();
orcWarriorIdle1.src = "assets/orc/warrior/idle_1.png";

const orcWarriorIdle2 = new Image();
orcWarriorIdle2.src = "assets/orc/warrior/idle_2.png";

const orcWarriorIdle3 = new Image();
orcWarriorIdle3.src = "assets/orc/warrior/idle_3.png";

const orcWarriorIdle4 = new Image();
orcWarriorIdle4.src = "assets/orc/warrior/idle_4.png";

const orcWarriorDead = new Image();
orcWarriorDead.src = "assets/orc/warrior/dead.png";

export default {
  orcs: {
    warrior: {
      animationFrames: {
        idle: [
          orcWarriorIdle1,
          orcWarriorIdle2,
          orcWarriorIdle3,
          orcWarriorIdle4,
        ],
        run: [],
        dead: [orcWarriorDead],
      },
    },
  },
};
