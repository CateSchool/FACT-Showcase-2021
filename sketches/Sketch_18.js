

class Sketch_18 extends CTSketch {

    constructor() {
        super("Phin Stephenson", 18);
    }

    startSketch() {

    }

    display() {
        background(255);
        strokeWeight(2);
        fill(mouseY / 2, 0, height + (mouseX / 2))
        rect(0, 0, width, height)
        fill(69, mouseX, 255);
        rect(0, 0, mouseX, mouseY / 2);
        fill(40, 0, 255);
        rect(0, mouseY, mouseX, height);
        fill(69, mouseX, 255);
        rect((width + mouseX) / 2, mouseY, width, height)
        fill(150, mouseX, 255)
        triangle(mouseX, 0, mouseX, mouseY, width, mouseY)
        fill(200, mouseX, 255)
        triangle(mouseX, mouseY, 0, height / 2 + mouseY / 2, mouseX / 2, height)
        fill(100, 0, 255)
        triangle(0, height, 0, height / 2 + mouseY / 2, mouseX / 2, height)
        fill(mouseY, 0, 255)
        triangle(mouseX, 0, width, 0, width, mouseY)
        fill(mouseY * 1.5, 0, 255)
        triangle((mouseX + width) / 2, 0, (mouseX + width) / 2, mouseY / 2, width, mouseY / 2)
        fill(mouseX / 2.5, 0, 230)
        triangle(0, 0, mouseX, mouseY, 0, mouseY)
        fill(mouseX / 2.5, 0, 230)
        triangle(mouseX, mouseY, width, height, mouseX, height)
        fill(200, mouseX, 255)
        triangle((mouseX + width) / 2, mouseY, (mouseX + width) / 2, mouseY / 2, mouseX, mouseY / 2)
        // fill(mouseX/1.2, 0, 140)
        // ellipse((mouseX + width) / 2, mouseY/2, (mouseX-50-mouseY)/5)
    }


}
