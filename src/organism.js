class Organism {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setX(x) {
    this.x = x;
  }

  getX(x) {
    return this.x;
  }

  setY(y) {
    this.y = y;
  }

  getY() {
    return this.y;
  }

  makeAction() {
    const x = this.getX();
    const incrementX = Math.round(Math.random());
    const newX = incrementX ? x + 1 : x - 1;
    this.setX(newX);

    const y = this.getY();
    const incrementY = Math.round(Math.random());
    const newY = incrementY ? x + 1 : x - 1;
    this.setY(newY);

  }

}

export default Organism;