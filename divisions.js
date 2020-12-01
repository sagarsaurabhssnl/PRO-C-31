class Division {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x, y, 10, 100, options);
        Matter.World.add(world, this.body);
    }

    show() {
        push();
        rect(this.body.position.x, this.body.position.y, 10, 100);
        pop();
    }
}