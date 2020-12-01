class Particle {
    constructor() {
        var options = {
            restitution: 0.3
        }
        this.body = Matter.Bodies.circle(random(100,400), 20, 5, options);
        this.color= color(random(0,255), random(0,255), random(0,255));
        Matter.World.add(world, this.body);
    }
    show() {
        push();
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, 10, 10);
        pop();
    }
}