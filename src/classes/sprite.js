export class Sprite {
  constructor({ context, position, image, size, rotation = 0, offset }) {
    this.context = context;
    this.position = position;
    this.image = image;
    this.size = size;
    this.rotation = rotation;
    this.offset = offset;
  }

  draw() {
    this.context.save();

    this.context.translate(
      this.position.x + this.offset.x,
      this.position.y + this.offset.y
    );
    this.context.rotate(this.rotation);

    this.context.drawImage(
      this.image,
      -this.size.width / 2,
      -this.size.height / 2,
      this.size.width,
      this.size.height
    );

    this.context.restore();
  }
}
