class Puerta extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"ground");

        this.door = scene.add.existing(this);

        this.door.scene.physics.world.enableBody(this);

        this.body.setAllowGravity(false) //workds;
        this.body.setImmovable(true)

        scene.doors.add(this);

    }

    activar(){
        this.door.destroy();
    }
}