

class Sketch_11 extends CTSketch {

    //https://openprocessing.org/sketch/1176290
    constructor() {
        super("Mack Nieman", 11);
        this.time = 0;
    }

    startSketch() {
        noFill()
        strokeWeight(3)
        blendMode(SCREEN)
    }

    display() {
        
        let vel = TWO_PI / 300;
        let hori_count = 10
        let vert_count = 50
   
        clear()
        background(0, 0, 32);
        for (let y = 0; y < vert_count; y++) {
            for (let t = 0; t < hori_count; t++) {

                let y_pos = map(sin(this.time + t / 6 + y / 3), -1, 1, 75, width - 75)
                let x_pos = map(y, 0, vert_count - 1, 50, height - 50)

                stroke(0, x_pos, y_pos)
                circle(y_pos, x_pos, x_pos / 20)

            }
        }
        this.time += vel
    }


}




