

class Sketch_15 extends CTSketch {

    constructor() {
        super("Sam Anum", 15);
    }

    startSketch() {
        rectMode(CENTER);
        angleMode(DEGREES);
        noFill();
    }

    display() {
        background(random(0), random(28));

        let s = random(200);
        stroke(random(255), random(235), random(90));

        rect(width / 2, height / 2, s);
        // triangle(30, 75, 58, 20, 86, 75);
        // triangle(30, 400, 58, 350, 86, 400);
        //triangle(540, 75, 500, 20, 476, 75);
        // triangle(540, 400, 500, 350, 476, 400);
        // line(10, 75, 555, 75);
        //line(10, 400, 555, 400);



        for (let angle = 0; angle < 360; angle += 20) {
            push();
            translate(width / 2, height / 2);
            rotate(angle + frameCount);
            ellipse(0, 210, random(50));
            line(20, 200, 545, 200);
            line(0, 0, 0, 200);
            pop();
        }

    }


}
