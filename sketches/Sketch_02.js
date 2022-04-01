

class Sketch_02 extends CTSketch {

    constructor() {
        super("Kate Ragatz", 2, 20);
    }

    startSketch() {
        frameRate(20)

        let c1 = color(random(100, 255), random(150, 255), random(190, 255));
        let c2 = color(random(100, 255), random(150, 255), random(190, 255));
        this.setGradient(0, 0, width, height, c1, c2, 1)
    }

    display() {
        const Y_AXIS = 1;
        const X_AXIS = 2;

        let c1 = color(random(100, 255), random(150, 255), random(190, 255));
        let c2 = color(random(100, 255), random(150, 255), random(190, 255));
        this.setGradient(0, 0, mouseX, height, c1, c2, 1)
    }

    setGradient(x, y, w, h, c1, c2, axis) {
        const Y_AXIS = 1;
        const X_AXIS = 2;

        noFill();

        if (axis === Y_AXIS) {
            // Top to bottom gradient
            for (let i = y; i <= y + h; i++) {
                let inter = map(i, y, y + h, 0, 1);
                let c = lerpColor(c1, c2, inter);
                stroke(c);
                line(x, i, x + w, i);
            }
        } else if (axis === X_AXIS) {
            // Left to right gradient
            for (let i = x; i <= x + w; i++) {
                let inter = map(i, x, x + w, 0, 1);
                let c = lerpColor(c1, c2, inter);
                stroke(c);
                line(i, y, i, y + h);
            }
        }
    }

    mouse() {
        const Y_AXIS = 1;
        const X_AXIS = 2;
        
        let c1 = color(random(100, 255), random(150, 255), random(190, 255));
        let c2 = color(random(100, 255), random(150, 255), random(190, 255));
        this.setGradient(0, 0, width, height/2, c1, c2, X_AXIS)
    }
}



