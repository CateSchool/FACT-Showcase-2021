
class Sketch_00 extends CTSketch {

    constructor() {
        super("Brooke Friedman", 0, 10);
    }

    startSketch() {
        rectMode(CENTER);
        noFill();
    }

    display() {
        frameRate(10);
        // background(200);
        for (let x = 0; x < 12; x++) {
            for (let y = 0; y < 12; y++) {

                let sz = 0;
                if (y < 5) {
                    sz = map(y, 0, 5, 5, 30);
                }
                else {
                    sz = map(y, 5, 9, 30, 5);
                }
                let r = random(255);
                let g = random(255);
                let b = random(255);
                stroke(r, g, b);
                let w = random(30);
                for (let i = 0; i < 10; i++) {
                    ellipse(50 * x + 20, 40 * y + 20, random(sz));
                }

            }
        }
    }
}