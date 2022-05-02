export class HpBar {
  constructor({
    context,
    position,
    width,
    health,
    maxHealth,
    offset = { x: 0, y: 0 },
  }) {
    this.context = context;
    this.position = position;
    this.width = width;
    this.health = health;
    this.maxHealth = maxHealth;
    this.offset = offset;
  }

  draw() {
    this.fillStyle = "black";
    this.context.fillRect(
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      this.width,
      5
    );
    this.context.beginPath();
    this.context.fillStyle = "red";
    this.context.fillRect(
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      this.width * (this.health / this.maxHealth),
      5
    );
  }
}
