import Organism from './organism';

const numOrganisms = 1;

class Creator {

  constructor(arena) {
    this.createOrganisms(arena);
  }

  createOrganisms(arena) {
    const arenaState = arena.getState();
    const organisms = [];

    for (let i = 0; i < numOrganisms; i++) {
      const organism = new Organism(i);

      const maxArenaHeight = arena.getHeight();
      const initialY = Math.round(Math.random() * maxArenaHeight);
      organism.setY(initialY);

      const maxArenaWidth = arena.getWidth();
      const initialX = Math.round(Math.random() * maxArenaWidth);
      organism.setX(initialX);

      organisms.push(organism);

    }

    arena.setState(organisms);
  }

}

export default Creator;