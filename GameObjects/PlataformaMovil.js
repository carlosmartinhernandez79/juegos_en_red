class PlataformaMovil extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,name){

        super(scene,x,y,"ground");

        scene.add.existing(this);

        scene.physics.world.enableBody(this);

        this.body.setAllowGravity(false) //workds;
        
        //const wall = this.physics.add.image(200, 300, 'flectrum').setImmovable();

        this.body.setVelocity(400,0)

    }
}