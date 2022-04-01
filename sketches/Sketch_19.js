

class Sketch_19 extends CTSketch {

    constructor() {
        super("Jacob Gabbay", 19);
    }

    startSketch() {
        rectMode(CENTER);
        noFill();
    }

    display() {
        let r = random(100, 255);
        let g = random(100, 255);
        let b = random(100, 255);
        stroke(r, g, b)

        let s = random(200);
        for (let x = 0; x < 200; x++) {
            for (let y = 0; y < 200; y++) {



                rect(40 * x + 20, 40 * y + 20, s);



            }
        }
    }


}
