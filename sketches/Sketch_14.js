

class Sketch_14 extends CTSketch {

    constructor() {
        super("Caroline Esrey", 14);
    }

    startSketch() {

    }

    display() {
        stroke(random(255), random(255), random(255))
        let r = random(255)
        let a = random(50)
        let c = random(4)
        noFill();
        strokeWeight(c);
        textSize(a);
        text("Be Kind", mouseX, mouseY);

        if (mouseIsPressed) {
            // something different
            background(255, 255, 255);
            stroke(random(['purple', 'yellow', 'white', 'black']));
            text("To everyone", mouseX, mouseY);
        }
    }


}
