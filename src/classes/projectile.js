export class Projectile {
  constructor({ context, position, velocity }) {
    this.context = context;
    this.position = position;
    this.velocity = velocity;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = "red";
    this.context.fillRect(this.position.x, this.position.y, 20, 20)
  }
}
