let engine, world;
let ground1;
let particle = [];
let plinko = [];
let division = [];
let ground = [];
let frame = 0;
let infinite;


function setup() {
  createCanvas(500, 640);
  engine = Matter.Engine.create();
  world = engine.world;

  ground1 = new Ground(250, 645, 500, 30);
  ground2 = new Ground(5, 320, 10, 640);
  ground3 = new Ground(495, 320, 10, 640);

  for (var j = 50; j <= 500; j = j + 80) {
    objects(30, width - 30, 30, plinko, Plinko, j);
    objects(45, width - 30, 30, plinko, Plinko, j + 40);
  }

  objects(75, width-70, 70, division, Division, 580);
}

function draw() {
  background(150);
  Matter.Engine.update(engine);
  rectMode(CENTER);
  noStroke();
  frame = frame + 1;
  infinite = frame + 1;
  if (frame % 70 === 1) {
    particle.push(new Particle());
  }
  ground1.show();
  ground2.show();
  ground3.show();
  for (var i = 0; i < division.length; i++) {
    division[i].show();
  }

  for (var i = 0; i < plinko.length; i++) {
    plinko[i].show();
  }

  for (var i = 0; i < particle.length; i++) {
    particle[i].show();
  }
}

function objects(xaxis, len, dist, obj, clas, yaxis) {
  for (var i = xaxis; i <= len; i = i + dist) {
    obj.push(new clas(i, yaxis));
  }
}

function keyPressed() {
  if (keyCode === 82) {
    document.location.reload();
  }
  if (keyCode === 67) {
    codelink();
  }
}

function codelink(){
  window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-31";
}