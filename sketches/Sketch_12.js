

class Sketch_12 extends CTSketch {

    constructor() {
        super("Harry Su", 12);
    }

    startSketch() {
    }

    display() {
        background(255, 200, 200);
        
        for (let i = 0; i < 18; i++) {
      
          let cStart = color(246, 0, 255);
          let cEnd = color(0, 0, 255);
          let col = lerpColor(cStart, cEnd, i/18*1)
          fill(col)
      
          rect (0+5*i, 0+5*i, mouseX-10*i, mouseY-10*i)
      
          rect (mouseX+5*i, 0+5*i, width-mouseX-10*i, mouseY-10*i)
      
          rect (0+5*i, mouseY+5*i, mouseX-10*i, height-mouseY-10*i)
      
          rect (mouseX+5*i, mouseY+5*i, width-mouseX-10*i, height-mouseY-10*i)
        }
    }


}
