function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	const centerX = windowWidth/2;
	const centerY = windowHeight/2;

	background(255,170,120);
	rect(centerX,centerY,mouseX-centerX,mouseY-centerY);
	console.log(mouseY,mouseX);

}
