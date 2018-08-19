/*function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	const centerX = windowWidth/2;
	const centerY = windowHeight/2;

	background(255,170,120);
	rect(centerX,centerY,mouseX-centerX,mouseY-centerY);
	//console.log(mouseY,mouseX);

}
*/

let gears = [];
let imGears = [];

function preload() {
  //flower = loadImage('Gears/gear.png');
  for (let i = 0; i < 3; i++) {
    imGears[i] = loadImage(`Gears/gear ${i+1}.png`);
  }
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  //createCanvas(800, 500);

  //for (let i = 0; i < 10; i++) {
	  /*
		let x = random(width);
    let y = random(height);
    let r = random(50, 150);
		let k = random(0,2);
    // let kitten = random(kittens);
    let g = new Gear(x, y, r, imGears[k]);
    gears.push(g);
		*/
  //}
	//image(imGears[1],width/2,height/2,200,200);

}

function mousePressed() {
  //for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].clicked(mouseX, mouseY);
  //}

	let k=round(random(0,2));
	let Size=SRatio(imGears[k],random(80,350));
	let gear = new Gear(mouseX-Size.w/2,mouseY-Size.h/2,Size,imGears[k])
	gears.push(gear);
  /*
  console.log(mouseX,mouseY);
	console.log(Size.w,Size.h);
	console.log(mouseX+Size.w,mouseY+Size.h);
  */
}

function draw() {
	background(255);
	//ImagSize=SRatio(imGears[1],map(mouseY,0,width,10,500));
	//image(imGears[1],0,0,ImagSize.w,ImagSize.h);
  //background(0);

	for (let i = 0; i < gears.length; i++) {
    //gears[i].move();
    gears[i].show();
  }

	if (gears.length > 10) {
		gears = [];
	}

}

function SRatio(Im,DSize) {
	let ratio = Im.height/Im.width;
	var Ratio = {
		w: DSize,
		h: DSize * ratio,
	};
	return Ratio
}

class Gear {
  constructor(x, y, d, img) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.gear = img;
  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {


    //if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      //this.kitten = flower; //random(kittens);
    //}
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
		let ImagSize = SRatio(this.gear,this.d);
    image(this.gear, this.x, this.y, this.d.w, this.d.h);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
