export class Sprite {
  invMatrix;

  constructor({
    context,
    position,
    image,
    size,
    rotation = 0,
    offset = { x: 0, y: 0 },
    opacity = 1,
    remove = false,
  }) {
    this.context = context;
    this.position = position;
    this.image = image;
    this.size = size;
    this.rotation = rotation;
    this.offset = offset;
    this.opacity = opacity;
    this.remove = remove;
  }

  preDraw() {}

  postDraw() {}

  draw() {
    if (this.remove) {
      return;
    }
    this.context.save();

    this.preDraw();

    this.context.translate(
      this.position.x + this.offset.x,
      this.position.y + this.offset.y
    );
    this.context.rotate(this.rotation);

    this.context.globalAlpha = this.opacity;

    this.invMatrix = this.context.getTransform().invertSelf();

    this.context.drawImage(
      this.image,
      -this.size.width / 2,
      -this.size.height / 2,
      this.size.width,
      this.size.height
    );

    this.postDraw();

    this.context.restore();
  }
}
