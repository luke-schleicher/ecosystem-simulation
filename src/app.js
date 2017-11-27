import Arena from './arena';

class App {

  constructor() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const arena = new Arena(canvas);
  }

}

export default App;