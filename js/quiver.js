let bugs = []; // array of Jitter objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  if(mouseIsPressed){
      background(255);
  }
  else{
      background(0);
    //   stroke(255);
    //   line(0,height/2,width,height/2); 
  }
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}


// Jitter class
class Jitter {
  constructor() {
    this.x = random(width/2-200,width/2+200);
    this.y = random(height/2-200, height/2+200);
    if (mouseIsPressed){
        this.speed = 20;
    }
    else {
        this.speed = .5;
    }
    this.diameter = random(10,50);

  }


    move() {
    if (mouseIsPressed){
        this.x += random(-this.speed*7, this.speed*7);
        this.y += random(-this.speed*5, this.speed*5);
    } 
    else{
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
  }
      

  display() {
    
    if (mouseY>windowHeight/2){
        stroke(0);
        line(this.x, this.y-this.diameter/2, width/2, -50);
        //fill(random(255),random(255),random(255),random(200,255));
        //fill(255,160,0,150);
        fill(144,205,100,150); 
        ellipse(this.x, this.y, this.diameter+random(0,mouseX/10), this.diameter+random(0,mouseX/10));
    }

    else{
        stroke(0);
        line(this.x, this.y-this.diameter/2, width/2, -50);
        //fill(255,160,0,150); 
        fill(144,205,100,150); 
        ellipse(this.x, this.y, this.diameter+mouseX/10, this.diameter+mouseX/10);
        fill(0);
        ellipse(this.x, this.y, (this.diameter+mouseX/10)/2, (this.diameter+mouseX/10)/2);
        }
  }
}






