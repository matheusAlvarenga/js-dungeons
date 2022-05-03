const rubyImage = new Image();
rubyImage.src = "assets/gems/ruby.png";

const emeraldImage = new Image();
emeraldImage.src = "assets/gems/emerald.png";

const ambarImage = new Image();
ambarImage.src = "assets/gems/ambar.png";

const saphireImage = new Image();
saphireImage.src = "assets/gems/saphire.png";

export default {
  animationFrames: {
    ruby: [rubyImage],
    ambar: [ambarImage],
    emerald: [emeraldImage],
    saphire: [saphireImage],
  },
};
