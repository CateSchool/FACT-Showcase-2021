
class Sketch_01 extends CTSketch {

    constructor() {
        super("Lucas Huiner", 1);
    }

    startSketch() {
    }

    display() {
      push();
      scale(scaleNum);
      let mx = mouseX /scaleNum;
      let my = mouseY /scaleNum;
        background(0, 0, 0, 10)
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 10; y++) {
            strokeWeight(1);
            stroke(60 * x, 50 * y, mx, my);
            
            line(60 * x, 60 * y, mx, my);
            fill(0)
            ellipse(mx, my, 100)
          }
      
        }
        pop();
    }
}