var bullet1,bullet2,bullet3;
//var wall, thickness;
//var bullet,speed,weight;
  

function setup() {
  createCanvas(800,400);
  
  bullet1=createSprite(0,100,30,20);
  bullet2=createSprite(0,200,30,20);
  bullet3=createSprite(0,300,30,20);



speed1=random(55,90);
speed2=random(55,90);
speed3=random(55,90);

weight1=random(400,1500);
weight2=random(400,1500);
weight3=random(400,1500);

thickness1=random(22,83);
thickness2=random(22,83);
thickness3=random(22,83);

wall1=createSprite(600,100,thickness1,70);
wall1.shapeColor=rgb(80,80,80);
wall2=createSprite(600,200,thickness2,70);
wall2.shapeColor=rgb(80,80,80);
wall3=createSprite(600,300,thickness3,70);
wall3.shapeColor=rgb(80,80,80);

bullet1.velocityX=speed1;
bullet2.velocityX=speed2;
bullet3.velocityX=speed3;

}

function draw() {
  background("lightgreen");
  
 if(wall1.x-bullet1.x<wall1.width/2+bullet1.width/2){
    bullet1.velocityX=0;
    damage1=0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1);


    if(damage1>180){
      bullet1.shapeColor="red";
    }
    else if(damage1>100 && damage1<180){
      bullet1.shapeColor="yellow";
    }
    else if(damage1<100){
      bullet1.shapeColor="green";
    }
  }

 

  if(wall2.x-bullet2.x< wall2.width/2+bullet2.width/2){
    bullet2.velocityX=0;
    damage2=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);

    if(damage2>180){
      bullet2.shapeColor="red";
    }
    else if(damage2>100 && damage2<180){
      bullet2.shapeColor="yellow";
    }
    else if(damage2<100){
      bullet2.shapeColor="green";
    }
  }

  if(wall3.x-bullet3.x< wall3.width/2+bullet3.width/2){
    bullet3.velocityX=0;
    damage3=0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3);

    if(damage3>180){
      bullet3.shapeColor="red";
    }
    else if(damage3>100 && damage3<180){
      bullet3.shapeColor="yellow";
    }
    else if(damage3<100){
      bullet3.shapeColor="green";
    }
  }
  drawSprites();
}
/*
function hasCollided(bullet,wall){
  if(wall.x-bullet.x<bullet.width/2+wall.x/2){
    return true;
  }
  else{
    return false;
  }
}
*/