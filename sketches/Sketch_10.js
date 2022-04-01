

class Sketch_10 extends CTSketch {

    constructor() {
        super("Stella Rogers", 10);
    }

    startSketch() {
        select('#sketch-holder2').style('display', 'none');
        select('#sketch-holder').style('display', 'block');
        rectMode(CENTER);
    }

    display() {
        translate(mouseX - 230, mouseY - 130);
        scale(1, 1)
        this.snowman();

        let mouseSpeed = 2 * dist(mouseX, mouseY, pmouseX, pmouseY);

        // if (keyIsDown(49)) {
            noFill();
            strokeWeight(2);
            for (let x = 0; x < 20; x++)
                for (let y = 0; y < 20; y++)
                    stroke(random(255), random(255), random(255));
            rect(mouseX, mouseY, random(40));
        // }
        // if (keyIsDown(50)) {
            textSize(mouseSpeed);
            text('🌸', mouseX, mouseY);
        // }

        // if (keyIsDown(51)) {
            textSize(mouseSpeed);
            text('❄️', mouseX, mouseY);
        // }
    }

    snowman() {

        // snowman body
        fill(255)
        strokeWeight(1)
        ellipse(230, 230, 120);
        ellipse(230, 160, 100);
        ellipse(230, 100, 80);
        //snowman eyes
        fill(0)
        ellipse(245, 90, 10);
        ellipse(215, 90, 10);
        //snowman buttons
        fill(0)
        ellipse(230, 170, 5);
        ellipse(230, 150, 5);
        ellipse(230, 190, 5);
        ellipse(230, 230, 5);
        ellipse(230, 260, 5);
        //snowman nose
        strokeWeight(0)
        fill(250, 133, 7)
        triangle(230, 100, 200, 100, 230, 110);
        //triangle(x1, y1, x2, y2, x3, y3);
        //hat
        //fill(80, 91, 99)
        //rect(180, 60, 110, 20);
        //rect(x, y, w, h)
        // rect(200, 25, 65, 45)

    }





}
