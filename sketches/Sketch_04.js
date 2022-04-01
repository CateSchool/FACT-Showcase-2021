

class Sketch_04 extends CTSketch {

    constructor() {
        super("Henry Bouma", 4);
    }

    startSketch() {
    
    }

    display() {
        background(0)
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 10; y++) {
            for (let r = 0; r < 10; r++){
              fill(25 * x,25 * y,random(255));
              ellipse((width/10) * x,(height/10) * y,(mouseX)-width/2,(mouseY)-height/2);
            }
          }   
        } 
    }

  
}
