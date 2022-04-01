

class Sketch_03 extends CTSketch {

    constructor() {
        super("Marco Gomez", 3);

        this.particles = [];
        this.lines = [];
    }

    startSketch() {
    
    }

    display() {
        background(1, 7, 20);

        // Calling the "Particle" object.
        let particle = new Particle();
        
        // Using push to populate the "this.particles" array.
        this.particles.push(particle); 
      
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].show(); 
          this.particles[i].move();
          
          // Using splice() to remove the faded this.particles.
          if (this.particles[i].remove()) {
            this.particles.splice(i, 1);
          }
        }
        
        // Calling the "Line" object.
        let line = new Line();
        
        // Using push to populate the "lines" array.
        this.lines.push(line);
      
        for (let i = this.lines.length - 1; i >= 0; i--) {
          this.lines[i].show();
          this.lines[i].move();
          
          // Using splice() to remove the faded lines.
          if (this.lines[i].remove()) {
            this.lines.splice(i, 1);
          }
        }
    }

  
}


// Creating the "Particle" object.
class Particle {
    constructor() {
      let colorFrom = color(255, 140, 0);
      let colorTo = color(192, 196, 89);
      
      this.position = createVector(random(width), random(height));
      this.speed = random(-TWO_PI, TWO_PI);
      this.size = random(PI, TWO_PI);
      
      this.color = lerpColor(colorFrom, colorTo, random(0, 1));
          
      this.lifespan = 255;
    }
    
    // Method to create the movement and the fading of the this.particles.
    move() {
      this.position.add(new p5.Vector(sin(this.speed), cos(this.speed)));
      
      this.color.setAlpha(this.lifespan); // Setting the opacity (alpha) of a single particle.
      
      this.lifespan -= 1; // Reducing the lifespan value by 1 so the this.particles will gradually fade.
    }
    
    // Method to create a single particle.
    show() {
      noStroke();
      fill(this.color);
      ellipse(this.position.x, this.position.y, this.size);
    }
  
    // Method to remove the this.particles when they fade out.
    remove() {
      return this.lifespan < 0;
    }
  }
  
  
  // Creating the "Line" object.
  class Line {
    constructor() {
      this.position = createVector(mouseX, mouseY);
      this.speed = random(frameCount);
  
          this.color = color(255);
          
      this.lifespan = 255;
    }
    
    // Method to create the movement and the fading of the lines.
    move() {
      this.position.add(new p5.Vector(sin(this.speed), cos(this.speed)));
      
      this.color.setAlpha(this.lifespan); // Setting the opacity (alpha) of a single line.
      
      this.lifespan -= 0.5; // Reducing the lifespan value by 0.5 so the lines will gradually fade.
    }
    
    // Method to create a single line.
    //this is where i can make the line not start from the middle
    show() {
      noFill();
      stroke(this.color);
      line(width / 2, height / 2, this.position.x, this.position.y);
    }
    
    // Method to remove the lines when they fade out.
    remove() {
      return this.lifespan < 0;
    }
  }



