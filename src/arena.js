class Arena {

  constructor(canvas) {
    this.setHeight(canvas.height);
    this.setWidth(canvas.width);
  }

  setHeight(height) {
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

}

export default Arena;