const NUM_SKETCHES = 20;
const sketches = [];
let frameR = 60;
let currentSketch;
let currentSketchIndex = 12;
let sketch3D;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('sketch-holder');
    setSketch();
}

function draw() {
    frameRate(frameR);

    if (currentSketch) {
        currentSketch.display();
    }

    changeSketch();
}

function changeSketch() {

    if (frameCount % (frameR * 5) === 0) {
        currentSketchIndex++;
        currentSketchIndex %= NUM_SKETCHES;

        setSketch();
    }
}

function setSketch() {
    switch (currentSketchIndex) {
        case 0:
            currentSketch = new Sketch_00();
            break;
        case 1:
            currentSketch = new Sketch_01();
            break;
        case 2:
            currentSketch = new Sketch_02();
            break;
        case 3:
            currentSketch = new Sketch_03();
            break;
        case 4:
            currentSketch = new Sketch_04();
            break;
        case 5:
            currentSketch = new Sketch_05();
            break;
        case 6:
            currentSketch = new Sketch_06();
            break;
        case 7:
            currentSketch = new Sketch_07();
            break;
        case 8:
            currentSketch = new Sketch_08();
            break;
        case 9:
            currentSketch = null;
            sketch3D = new Sketch_09();
            break;
        case 10:
            currentSketch = new Sketch_10();
            sketch3D = null;
            break;
        case 11:
            currentSketch = new Sketch_11();
            break;
        case 12:
            currentSketch = new Sketch_12();
            break;
        case 13:
            currentSketch = new Sketch_13();
            break;
        case 14:
            currentSketch = new Sketch_14();
            break;
        case 15:
            currentSketch = new Sketch_15();
            break;
        case 16:
            currentSketch = new Sketch_16();
            break;
        case 17:
            currentSketch = new Sketch_17();
            break;
        case 18:
            currentSketch = new Sketch_18();
            break;
        case 19:
            currentSketch = new Sketch_19();
            break;
        default:
            currentSketch = new Sketch_00();
            break;
    }

    if (currentSketch) {
        currentSketch.init();
    }
}

function mousePressed() {
    if (currentSketch) {
        currentSketch.mouse();
    }
}