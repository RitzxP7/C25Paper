class Base{
    constructor(x, y, width, height, angle) {
        var option = {
            restitution : 0.3,
            friction : 1.0,
            density : .7
        }

        this.body = Bodies.rectangle(x, y, width, height, option);
        World.add(world, this.body);
        this.width = width;
        this.height = height;

        this.img = loadImage("Images/base.png");

    } 

    display() {
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.img, 0, 0, this.width, this.height);
        

        pop();
        
    }
    
}