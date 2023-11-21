class Palanca extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,name){

        super(scene,x,y-200,"stick");

        scene.add.existing(this).setScale(0.5);

        scene.physics.world.enableBody(this);

        //scene.physics.add.existing(this, true); //lo hace static pero con physics

        //scene.physics.world.enableBody(this);
        //scene.physics.add.image(x, y-500, "stick").setScale(0.5).setImmovable(true);
        //scene.physics.world.enabled();
        //this.body.setInmovable = true;
     
    }

    activarPalanca(){
        //se triggerea la animación de la palanca
        //se abre una muerta
        console.log("muerta")
       this.setVisible(false);
    }
}
