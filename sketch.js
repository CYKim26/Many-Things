let balls

function setup() {
  ellipseMode(RADIUS)
  createCanvas(windowWidth, windowHeight);
  noStroke()
  
  createBalls(int(random(10,15)))
  u = {
    x: mouseX,
    y: mouseY,
    w: 50,
    h: 50,
    c: color(255)
  }
}

function createBalls(n) {
//   n: number of balls
  balls = []
  
  for( let i = 0; i < n; i++ ) {
    r = random(7,14)
  
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
  
  fill(u.c)
  rect(u.x,u.y,u.w,u.h)
  u.x = mouseX - u.w/2
  u.y = mouseY - u.h/2

  for(let i=0;i<balls.length;i++) {
    b = balls[i]
    fill(b.c)
    circle(b.x,b.y,b.r)
    b.x += b.dx 
    b.y += b.dy
    if( b.x < b.r || b.x > width - b.r) {
      b.dx *= -1
      b.c.setAlpha(random(50,255))
    }
    if( b.y < b.r || b.y > height - b.r) {
      b.dy *= -1
      b.c.setAlpha(random(50,255))
    }
    
    if (u.x < b.x + b.r && u.x + u.w > b.x - b.r && u.y < b.y + b.r && u.y + u.h > b.y - b.r) {
      let overlapX = abs((u.x + u.w / 2) - b.x)
      let overlapY = abs((u.y + u.h / 2) - b.y)
      
      if (overlapX > overlapY) {
        b.dx *= -1
      } else {
        b.dy *= -1
      }
    }
  
    
    for (let j=i+1;j<balls.length;j++) {
      b2 = balls[j]
      if(dist(b.x,b.y,b2.x,b2.y) < b.r + b2.r) {
        [b.dx,b.dy,b2.dx,b2.dy] = [b2.dx,b2.dy,b.dx,b.dy] 
      }
    }
  }
}
