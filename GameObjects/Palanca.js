class Palanca extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,name){

        super(scene,x,y,name);

        scene.add.image(x, y, "stick").setScale(0.5);
        scene.physics.world.enableBody(this);

    }

    activarPalanca(){
        this.destroy();
    }
}
