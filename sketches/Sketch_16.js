

class Sketch_16 extends CTSketch {

    constructor() {
        super("Zach Coulter", 16);
    }

    startSketch() {

    }

    display() {
        noFill();
        function shade() {
            let black = color(0, 0, 0);
            let red = color(252, 3, 3);
            fill(lerpColor(red, black, .9));
            rect(0, 0, 700, 700);
        }

        shade();
        //  for (let x = 0; x < 10; x++) {
        //     for (let y = 0; y < 10; y++) {

        //       // your code here
        //       let r = random(255)
        //       let g = random(255);
        //       let b = random(255);
        //       stroke(r, g, b);
        //       let w = random(50);
        //       rect(40 * x + 20, 40 * y + 20, w);
        //     }
        //   }


        stroke(252, 184, 227);
        fill(252, 184, 227);
        rect(0, 166, 700, 100);

        stroke(255, 255, 255);
        fill(255, 255, 255);
        rect(0, 240, 700, 70);

        let r = random(255)
        let g = random(255);
        let b = random(255);
        let Y = (250);
        textSize(30);
        stroke(r, g, b);
        fill(0);
        strokeWeight(2);

        text("I LOVE YOU", mouseX, Y);
        text("I LOVE YOU", mouseX + 175, Y);
        text("I LOVE YOU", mouseX - 175, Y);
        text("I LOVE YOU", mouseX, Y + 30);
        text("I LOVE YOU", mouseX, Y - 30);
        text("I LOVE YOU", mouseX + 175, Y + 30);
        text("I LOVE YOU", mouseX - 175, Y + 30);
        text("I LOVE YOU", mouseX + 175, Y - 30);
        text("I LOVE YOU", mouseX - 175, Y - 30);
        text("I LOVE YOU", mouseX + 350, Y - 60);
        text("I LOVE YOU", mouseX + 350, Y + 60);
        text("I LOVE YOU", mouseX - 350, Y + 60);
        text("I LOVE YOU", mouseX - 350, Y - 60);
        text("I LOVE YOU", mouseX + 350, Y + 30);
        text("I LOVE YOU", mouseX + 350, Y - 30);
        text("I LOVE YOU", mouseX - 350, Y + 30);
        text("I LOVE YOU", mouseX - 350, Y - 30);
        text("I LOVE YOU", mouseX + 350, Y);
        text("I LOVE YOU", mouseX - 350, Y);
        text("I LOVE YOU", mouseX, Y + 60);
        text("I LOVE YOU", mouseX, Y - 60);
        text("I LOVE YOU", mouseX + 175, Y + 60);
        text("I LOVE YOU", mouseX + 175, Y - 60);
        text("I LOVE YOU", mouseX - 175, Y + 60);
        text("I LOVE YOU", mouseX - 175, Y - 60);
        text("I LOVE YOU", mouseX - 525, Y);
        text("I LOVE YOU", mouseX - 525, Y + 30);
        text("I LOVE YOU", mouseX - 525, Y - 30);
        text("I LOVE YOU", mouseX - 525, Y + 60);
        text("I LOVE YOU", mouseX - 525, Y - 60);
        text("I LOVE YOU", mouseX - 700, Y);
        text("I LOVE YOU", mouseX - 700, Y - 30);
        text("I LOVE YOU", mouseX - 700, Y + 30);
        text("I LOVE YOU", mouseX - 700, Y - 60);
        text("I LOVE YOU", mouseX - 700, Y + 60);

        stroke(145, 0, 0);
        strokeWeight(4);
        fill(252, 3, 3);
        ellipse(50, 50, 70);

        stroke(145, 0, 0);
        strokeWeight(4);
        fill(252, 3, 3);
        rect(100, 50, 200, 100, 70);

        stroke(145, 0, 0);
        strokeWeight(4);
        fill(252, 3, 3);
        ellipse(400, 70, 70);

        stroke(145, 0, 0);
        strokeWeight(4);
        fill(252, 3, 3);
        ellipse(50, 350, 70);

        //  stroke(145, 0, 0);
        // strokeWeight(4);
        // fill(252,3,3);
        // rect(100,50,200,100,70);
    }


}

