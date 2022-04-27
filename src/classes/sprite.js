export class Sprite {
  constructor({ context, position, images, size }) {
    this.context = context;
    this.position = position;
    this.images = images;
    this.size = size;
  }

  draw() {
    this.context.drawImage(
      this.images[0],
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}
