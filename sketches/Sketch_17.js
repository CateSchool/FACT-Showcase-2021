

class Sketch_17 extends CTSketch {

    constructor() {
        super("Zoë Flint", 17);
    }

    startSketch() {

    }

    display() {
        background(99, 153, 194, 5);
        noFill();

        //bush
        fill(65, 117, 59)
        stroke(0, random(255), 0);
        ellipse(200, 300, 100, 100, 90)

        //bush
        fill(65, 117, 59)
        stroke(0, random(255), 0);
        ellipse(350, 300, 100, 120, 90)

        //bush
        fill(65, 117, 59)
        stroke(0, random(255), 0);
        ellipse(250, 350, 200, 120, 90)

        //earth
        fill(69, 40, 23)
        stroke(random(255), 0, 0);
        ellipse(width, 500, 1500, 500);

        //mountain
        fill(31, 66, 36);
        stroke(0, random(255), 0);
        triangle(0, height, 50, 200, 100, height);

        //mpuntain
        fill(24, 38, 26);
        triangle(50, height, 70, 150, 150, height);

        //mountain
        fill(14, 20, 15)
        triangle(100, height, 110, 100, 200, height)

        //arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
        //fill(99,153,194);

        //lake
        for (let x = 0; x < 11; x++) {
            for (let y = 0; y < 11; y++) {
                strokeWeight(10);
                stroke(0, random(255), random(255));
                fill(0, 118, 191)
                ellipse(300, windowHeight - 5, random(490), random(80));
            }
        }

        //cloud
        for (let x = 0; x < 11; x++) {
            for (let y = 0; y < 11; y++) {
                strokeWeight(5);
                stroke(255, 255, 200);
                fill(188, 192, 194);
                ellipse(200, 100, random(70), random(70));
            }
        }

        //cloud
        for (let x = 0; x < 11; x++) {
            for (let y = 0; y < 11; y++) {
                strokeWeight(5);
                stroke(255, 255, 255)
                fill(188, 192, 194);
                ellipse(250, 120, random(90), random(90));
            }
        }

        //cloud
        for (let x = 0; x < 11; x++) {
            for (let y = 0; y < 11; y++) {
                strokeWeight(5);
                stroke(200, 255, 255)
                fill(188, 192, 194);
                ellipse(305, 85, random(50), random(50));
            }
        }

        if (mouseIsPressed) {

            noStroke();
            fill(random(255), random(255), random(255));


            let r1 = random(-50, 50);
            let r2 = random(-50, 50);

            ellipse(mouseX, mouseY, 'yellow');
            textSize(random(1, 50));
            text('☀️', mouseX + r1, mouseY + r2)
        }

    }


}
