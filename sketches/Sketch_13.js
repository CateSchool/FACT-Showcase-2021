

class Sketch_13 extends CTSketch {

    constructor() {
        super("Sabine Fuchs", 13);
    }

    startSketch() {
        rectMode(CENTER);
        background("darkcyan")
    }

    display() {
        this.drawFlower(mouseX, mouseY, 'blue')
    }

    drawFlower(x, y, clr) {
        push()
        translate(x, y);
        noStroke()
        fill(random(['orange', 'gold', 'coral']));
        ellipse(0, 0, 67);
        ellipseMode(CORNER);
        fill(random(['white', 'lavender', 'mistyrose', 'lightcyan', 'lemonchiffon', 'lightpink', 'thistle']));
        let size = random(0.2,1);
        for (var i = 0; i < 17; i++) {
      
          ellipse(30, -20, 100 * size, 30);
          line(30, -5, 120 * size, -5)
          rotate(PI / 8)
        }
        pop()
      }
      
      
  
}


  