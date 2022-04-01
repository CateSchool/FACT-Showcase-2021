
class Sketch_01 extends CTSketch {

    constructor() {
        super("Lucas Huiner", 1);
    }

    startSketch() {
    }

    display() {
        background(0, 0, 0, 10)
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 10; y++) {
            strokeWeight(1);
            stroke(60 * x, 50 * y, mouseX, mouseY);
            fill(0)
            ellipse(mouseX, mouseY, 100)
            line(60 * x, 50 * y, mouseX, mouseY);
          }
      
        }
    }
}