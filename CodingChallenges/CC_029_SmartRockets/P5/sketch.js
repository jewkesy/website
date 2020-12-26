// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 1000;
// Made to display count on screen
var lifeP;
var genCount;
// Keeps track of frames
var count = 0;
var generationCount = 1;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

var targetHit = false;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  genCount = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html(count);
  genCount.html("Generation: " + generationCount);
  count++;
  if (count >= lifespan || population.allStopped()) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
