

var message1 = "jitter",
    font,
    bounds, // holds x, y, w, h of the text's bounding box
    fontsize = 50,
    x, y; // x and y coordinates of the text

var song;
let img;

function preload() {
    font0 = loadFont('assets/Angelow.otf');
    font = loadFont('assets/PAC-FONT.TTF');
    img = loadImage('images/pacmanboard.png');
    ghostt = loadImage('images/ghostt.png');
    ghosty = loadImage('images/ghosty.png');
    ghostr = loadImage('images/ghostr.png');
    //song = loadSound('sounds/pacman.mp3');
}

function setup() {
    createCanvas(500, 500);

    // set up the font
    textFont(font);
    textSize(fontsize);

    // get the width and height of the text so we can center it initially
    bounds = font.textBounds(message1, 0, 0, fontsize);
    x = width / 2 - bounds.w / 2;
    y = height / 2 - bounds.h / 2;
    c = random(-200,200);
    d = random(-200,200);
    j = 1.5
    k = .5;
    }


function draw() {
background(204, 120);



// check if the mouse is inside the bounding box and tickle if so
if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    //song.play();
    a = random(-5,5);
    b = random(-5,5);
    background(270);
    image(img,0,-35,500,535);
    if (mouseX < 150){
        image(ghostr,mouseX+a,mouseY+b-80,70,70);
    }
    if (mouseX >= 150 && mouseX <= 275){
        image(ghosty,mouseX+a+80,mouseY+b,70,70);
    }
    if (mouseX > 275 && mouseX <= 500){
        image(ghostt,mouseX+a-120,mouseY+b-40,70,70);
    }
    fill(255);
    x += random(-10, 10);
    y += random(-15, 15);
    }
else {
    //song.pause();
    fill(215);
    x += j;
    y += k;
}

if (bounds.x + bounds.w >= width - 5){
    j = -1.5;
}
if (bounds.x <= width - 495){
    j = 1.5;
}
if (bounds.y + bounds.h <= height - 430){
    k = .5;
}
if (bounds.y >= height - 70){
    k = -.5;
}

// write the text in black and get its bounding box
text(message1, x+c, y+d);
bounds = font.textBounds(message1,x+c,y+d,fontsize);


}

