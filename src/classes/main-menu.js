export class MainMenu {
  constructor({ context, canvas }) {
    this.context = context;
    this.canvas = canvas;

    this.image = new Image();
    this.image.src = "assets/main-menu/script.png";
  }

  draw() {
    this.context.save();

    this.context.globalAlpha = 0.94;
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(
      this.image,
      this.canvas.width / 2 - 160,
      this.canvas.height / 2 - 15,
      320,
      30
    );

    this.context.fillStyle = "white";
    this.context.textAlign = "center";
    this.context.font = "16px Arial";

    this.context.fillText(
      "Click anywhere to start game.",
      this.canvas.width / 2,
      this.canvas.height / 2 + 48
    );

    this.context.restore();
  }
}
