let v = 700
let s = 750
function setup() {
  createCanvas(800, 850);
  rectMode(CENTER)
}

function draw() {
  background(240, 239, 224);
  
  //line
  push()
  //translate(200,400)
  let x = 200 *cos(frameCount * 0.01) + 425
  let y = 425
  stroke(255,0,0)
  line(50, y, x,y)
  
  
  pop()
  //rectangle
  rect(400,425, v,s)
  noFill()
  push()
  //translate(Width/2, Height/2)
  
  
  scale(v)
  v = v+5
  v = v- 10
  //rect(400,425,350,375)
  pop()
  
  
  }
  //if(frameCount % 30== 0)
  {
    

}