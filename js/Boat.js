class Boat {

  constructor(x, y, width, height, boatPos) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.bodyPosition = boatPos;
    this.image = loadImage("./assets/ boat.png");
    World.add(world, this.body);

  }
  display() {
    var pos = this.body.position;
    Matter.Body.setVelocity(this.body,{x:-2, y:1});
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    fill("brown");
    imageMode(CENTER);
    //rect(0, 0, this.width, this.height);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint()
    pop();
  }
}
