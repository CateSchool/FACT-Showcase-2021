

class Sketch_05 extends CTSketch {

    constructor() {
        super("Christian Busse", 5, 20);
    }

    startSketch() {
        rectMode(CENTER);
    }

    display() {
        background(0);
        for (let i = -100; i < 100; i++) {

            let r = random(255, 3, 5);
            noFill();

            stroke(mouseX, mouseY, random(255));
            rect(mouseX, mouseY, r * 4);

            stroke(random(255), random(255), random(255));

            line(i * 30, 500, mouseX, mouseY);
        }
    }


}
