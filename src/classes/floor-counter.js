export class FloorCounter {
  constructor({ context, canvas, floor }) {
    this.context = context;
    this.canvas = canvas;
    this.floor = floor;
  }

  draw() {
    this.context.save();

    this.context.fillStyle = "black";
    this.context.font = "bold 16px Arial";

    this.context.fillText(`Floor ${this.floor}`, 5, 16);

    this.context.restore();
  }
}
