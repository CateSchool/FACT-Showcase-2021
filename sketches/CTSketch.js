class CTSketch {

    constructor(student, id, fR=60) {
        this.id = id;
        this.frameR = fR;
        this.student = student;
    }

    init() {
        background(255);
        stroke(0);
        fill(0);
        strokeWeight(1);
        
        frameR = this.frameR;
        select("#stuentName").html(this.student);

        rectMode(CORNER);
        angleMode(RADIANS);

        blendMode(BLEND);
        
        this.startSketch();
    }

    // override
    startSketch() {}

    // override
    display() {}

    // override
    mouse() {}
}