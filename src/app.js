import Arena from './arena';
import Creator from './creator';

class App {

  constructor() {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const arena = new Arena(canvas);
    const creator = new Creator(arena);
    this.startClock(arena, context);
  }

  startClock(arena, context) {
    const that = this;
    setInterval(this.ticGame, 100, arena, context, that);
  }

  ticGame(arena, context, that) {
    that.paintArena(arena, context);
    that.permitCreatureActions(arena);
  }

  paintArena(arena, context) {
    const canvasWidth = arena.getWidth();
    const canvasHeight = arena.getHeight();
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    const arenaState = arena.getState();
    debugger;
    context.fillStyle = 'blue';
    for (let i = 0; i < arenaState.length; i++) {
      const organism = arenaState[i];
      const x = organism.getX();
      const y = organism.getY();
      debugger;
      context.fillRect(x, y, 1, 1);
    }
  }

  permitCreatureActions(arena) {
    const arenaState = arena.getState();
    for (let i = 0; i < arenaState.length; i++) {
      const organism = arenaState[i];
      organism.makeAction();
    }
  }

}

export default App;