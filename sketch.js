let balls

function setup() {
  createCanvas(windowWidth, windowHeight);
    noStroke()
  createBalls(int(random(10,15)))
}

function createBalls(n) {
//   n: number of balls
//   r: radius

  balls = []
  for( let i = 0; i < n; i++ ) {
    r=random(10,15)
    let newBall = {
      r: r,
      x: random(r, width-r),
      y: random(r, height-r),
      c: color(20,112,252),
      dx: random(-3,3),
      dy: random(-3,3)
    }
    balls.push(newBall)
  }
}
function draw() {
  background(0)
  for(let b of balls) {
    fill(b.c)
    circle(b.x,b.y,b.r)
    b.x += b.dx 
    b.y += b.dy
    
    if( b.x < b.r || b.x > width- b.r) {
      b.dx *= -1
      b.c.setAlpha(random(50,255))
    }
    if( b.y < b.r || b.y > height - b.r ) {
      b.dy *= -1
      b.c.setAlpha(random(50,255))
    }
    
    
  }
}
