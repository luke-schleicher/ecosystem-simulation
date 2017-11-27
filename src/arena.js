class Arena {

  constructor(canvas) {
    this.setHeight(canvas.height);
    this.setWidth(canvas.width);
    this.setState([]);
  }

  setHeight(height) {
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  setWidth(width) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

}

export default Arena;