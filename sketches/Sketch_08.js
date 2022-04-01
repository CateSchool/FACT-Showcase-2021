

class Sketch_08 extends CTSketch {

    constructor() {
        super("Josh Ludviksen", 8);
    }

    startSketch() {
      this.r = 100;
      this.rDirection = 1;
       this.gDirection = 0.5;
       this.bDirection = 0.2;
       this.g = 0;
       this.b = 50;
       this.s = 100;

       this.currentShape = 0;

       rectMode(CENTER);
    }

    display() {
      background(0, 0, 0, 5);
      noStroke();

      if (frameCount % (60*3) === 0) {
        this.currentShape++;
        this.currentShape %=3;
      }
    
    
      // if (mouseIsPressed) {
        if (this.r > 253) {
          this.rDirection = -1;
        }
        if (this.g > 253) {
          this.gDirection = -0.5;
        }
        if (this.b > 253) {
          this.bDirection = -0.1;
        }
        if (this.r < 2) {
          this.rDirection = 1;
        }
        if (this.g < 2) {
          this.gDirection = 0.5;
        }
        if (this.b < 2) {
          this.bDirection = 0.1;
        }
        this.r += this.rDirection;
        this.g += this.gDirection;
        this.b += this.bDirection;
        //stroke(g,r,b);
        fill(this.r, this.g, this.b);
        ellipse(mouseX, mouseY, this.s);
        //stroke(r,g,b);
        //line(mouseX+random(-50,50),mouseY+random(-50,50),mouseX+random(-75,75),mouseY+random(-75,75));
        // if (keyIsDown(32)) {
        //   s++;
        // }
        // if (keyIsDown(8)) {
        //   s--;
        // }
        if (this.currentShape === 0) {
          noFill();
          for (let i = 0; i < 10; i++) {
            stroke(this.r, this.g, this.b);
            ellipse(mouseX, mouseY, this.s * i);
          }
        }
        else if (this.currentShape === 1){
          noFill();
          for(let q = 0; q < 45; q++){
            stroke(this.r, this.g, this.b);
            rect(mouseX,mouseY,this.s+(40*q));
          }
        }
        else {
          noFill();
          for(let t = 0; t < 45; t++){
            stroke(this.r,this.g,this.b);
            triangle(mouseX-36*t,mouseY+27*t,mouseX+36*t,mouseY+27*t,mouseX,mouseY-45*t);
          }
        }
      }
    // }

  
}




