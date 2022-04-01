

class Sketch_06 extends CTSketch {

    constructor() {
        super("Nic Forry", 6);
    }

    startSketch() {
        rectMode(CENTER);
        noFill();
    }

    display() {
        background(0, 10);
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++)
                ellipse(60 * x, 50 * y, mouseX, mouseY);
            ellipse(mouseX, mouseY, 100, mouseX / 2, mouseY / 2);
            ellipse(mouseX, mouseY, 100);
            stroke((255), (255), (255))
        }
    }


}
