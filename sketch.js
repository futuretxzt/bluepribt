var box1,box2

function setup() 
{
  createCanvas(400, 400);
  box1=new Box()
  box2=new Box()
}

function draw() 
{
  background(220);
  box1.display()
  box2.display()
  box1.move(3)
  box2.move(1)
}

