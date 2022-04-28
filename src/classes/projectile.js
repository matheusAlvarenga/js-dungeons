export class Projectile {
  constructor({ context, position, velocity }) {
    this.context = context;
    this.position = position;
    console.log("position: ", position);
    this.velocity = velocity;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.velocity, 10, Math.PI * 2, false);
    this.context.fillStyle = "red";
    this.context.fill();
  }
}
