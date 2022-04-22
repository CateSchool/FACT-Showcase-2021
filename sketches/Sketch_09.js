

class Sketch_09 extends CTSketch3D {

    constructor() {
        super("Daisy Gemberling", 9);

        this.start3D();
    }

    hide() {
        let h = select('#sketch-holder');
        h.style('display', 'block');

        let h2 = select('#sketch-holder2');
        h2.style('display', 'none');
        
    }

    show() {
        let h = select('#sketch-holder2');
        h.style('display', 'block');

        let h2 = select('#sketch-holder');
        h2.style('display', 'none');

        select("#stuentName").html(this.student);
    }

    start3D() {
        new p5(function (p) {
            let x = 100;
            let y = 100;

            p.setup = function () {
                let canvas = p.createCanvas(500 * scaleNum, 500 * scaleNum, WEBGL);
                canvas.parent('sketch-holder2');

                p.rectMode(CENTER);
                p.frameRate(60);
            };

            p.draw = function () {
                p.noFill();
                p.background(0);
                p.orbitControl(10);
                p.rotateY(5000);
                p.box(500, 500);
                for (let x = 1; x < 50; x++) {
                    for (let y = 1; y < 50; y++)
                        p.rect(40 * x, 40 * y, p.random(30));
                    p.translate(-200, 100, 90);
                    p.sphere(100);
                    p.stroke(p.random(255), p.random(255), p.random(255));
                    p.box(100);
                    p.torus(20, 20, 20)
                    p.rotateZ(p.frameCount * 0.01);
                    p.rotateX(p.frameCount * 0.01);
                    p.rotateY(p.frameCount * 0.01);
                }
            };
        });
    }
}
