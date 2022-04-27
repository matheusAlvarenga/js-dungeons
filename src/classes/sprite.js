export class Sprite {
  constructor({ context, position, image, size }) {
    this.context = context;
    this.position = position;
    this.image = image;
    this.size = size;
  }

  draw() {
    this.context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}
