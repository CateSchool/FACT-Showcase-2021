

class Sketch_07 extends CTSketch {

    constructor() {
        super("Jeeyou Jung", 7);
    }

    startSketch() {
        angleMode(DEGREES);
    }

    //code source: Christopher Reyes
    display() {
        var backgroundR = 209
        var backgroundG = 153
        var backgroundB = 198

        var ringSize = 0
        var ringColor = 256

        var colorConstrain = constrain(mouseX, 102, 540)

        background(backgroundR, backgroundG, backgroundB);
        let fromBG = color(209, 153, 198);
        let toBG = color(199, 211, 183);
        let backgroundColor = lerpColor(fromBG, toBG, mouseX / width);
        background(backgroundColor);

        var moonConstrainX = constrain(mouseX, 102, 540)

        //Moon, moves in the X direction as mouseX changes
        noStroke();
        fill(256);
        ellipse(moonConstrainX, 80, 64, 64);

        //Moon shadow, follows moon at a rate that eventually overtakes it
        //Color set to be the same as the background to hide it
        fill(backgroundR, backgroundG, backgroundB);
        fill(backgroundColor);
        ellipse(moonConstrainX * 1.30 - 95, 80, 54, 54);

        fill(232, 151, 168);
        let fromMount1L = color(232, 151, 168);
        let toMount1L = color(105, 175, 173);
        let mount1LColor = lerpColor(fromMount1L, toMount1L, mouseX / width);
        fill(mount1LColor);
        triangle(111, 226, 57, 416, -3, 416);

        fill(206, 122, 137);
        let fromMount1R = color(206, 122, 137);
        let toMount1R = color(97, 142, 153);
        let mount1RColor = lerpColor(fromMount1R, toMount1R, mouseX / width);
        fill(mount1RColor);
        triangle(111, 226, 57, 416, 189, 416);

        //Mountain 2, pink
        fill(232, 151, 168);
        triangle(41, 254, -13, 444, -73, 444);
        fill(206, 122, 137);
        triangle(41, 254, -13, 444, 119, 444);

        //Mountain 3, pink
        fill(232, 151, 168);
        triangle(510, 366, 456, 556, 396, 556);
        fill(206, 122, 137);
        triangle(510, 366, 456, 556, 588, 556);

        //Mountain 4, largest, transitions from yellow to navy
        fill(229, 225, 163);
        let fromMount4L = color(229, 225, 163);
        let toMount4L = color(31, 60, 78);
        let mount4LColor = lerpColor(fromMount4L, toMount4L, mouseX / width);
        fill(mount4LColor);
        triangle(248, 158, 154, 480, -111, 480);

        fill(214, 192, 123);
        let fromMount4R = color(214, 192, 123);
        let toMount4R = color(10, 30, 49);
        let mount4RColor = lerpColor(fromMount4R, toMount4R, mouseX / width);
        fill(mount4RColor);
        triangle(248, 158, 154, 480, 591, 480);

        //Mountain 5, transitions from pink to dark green
        fill(232, 151, 168);
        let fromMount5L = color(232, 151, 168);
        let toMount5L = color(51, 93, 97);
        let mount5LColor = lerpColor(fromMount5L, toMount5L, mouseX / width);
        fill(mount5LColor);
        triangle(193, 290, 139, 480, 79, 480);

        fill(206, 122, 137);
        let fromMount5R = color(206, 122, 137);
        let toMount5R = color(37, 77, 68);
        let mount5RColor = lerpColor(fromMount5R, toMount5R, mouseX / width);
        fill(mount5RColor);
        triangle(193, 290, 139, 480, 271, 480);

        //Mountain 6, transitions from blue to pale green
        fill(175, 232, 229);
        let fromMount6L = color(175, 232, 229);
        let toMount6L = color(170, 191, 156);
        let mount6LColor = lerpColor(fromMount6L, toMount6L, mouseX / width);
        fill(mount6LColor);
        triangle(108, 334, 93, 480, -30, 480);

        fill(127, 201, 201);
        let fromMount6R = color(127, 201, 201);
        let toMount6R = color(130, 171, 142);
        let mount6RColor = lerpColor(fromMount6R, toMount6R, mouseX / width);
        fill(mount6RColor);
        triangle(108, 334, 93, 480, 253, 480);

        //Mountain 7, transitions from green to light blue
        fill(160, 232, 160);
        let fromMount7L = color(160, 232, 160);
        let toMount7L = color(105, 175, 173);
        let mount7LColor = lerpColor(fromMount7L, toMount7L, mouseX / width);
        fill(mount7LColor);
        triangle(295, 323, 229, 480, 153, 480);

        fill(117, 175, 117);
        let fromMount7R = color(117, 175, 117);
        let toMount7R = color(97, 142, 153);
        let mount7RColor = lerpColor(fromMount7R, toMount7R, mouseX / width);
        fill(mount7RColor);
        triangle(295, 323, 229, 480, 399, 480);

        // cloud beside the mountain
        if (mouseIsPressed) {
            let s = random(-10, 10);
            let m = random(235, 300);
            let palette = ['#000000', '#525151', '#807e7e', '#b0aeae', '#d9d7d7']
            fill(random(palette));
            textSize(15);
            text('💧', mouseX + s, m)
            text('💧', mouseX + s, m)
            text('💧', mouseX + s, m)

        } else {
            fill(255)
        }
        ellipse(mouseX, 200, 30, 30);
        ellipse(mouseX - 15, 190, 30, 30);
        ellipse(mouseX - 20, 200, 30, 30);
        ellipse(mouseX + 7, 190, 30, 30);
        ellipse(mouseX + 20, 198, 30, 30);

    }


}

