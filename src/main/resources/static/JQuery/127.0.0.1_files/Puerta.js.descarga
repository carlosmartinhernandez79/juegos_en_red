class Puerta extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"puerta");

        this.door = scene.add.existing(this);

        this.door.scene.physics.world.enableBody(this);

        this.door.setScale(0.1,0.23)

        this.body.setAllowGravity(false) //workds;
        this.body.setImmovable(true)

        scene.doors.add(this);

    }

    activar(){
        this.door.destroy();
        //this.door.scene.physics.world.disableBody(this);
    }

    getClass(){
        return "door"
    }



    /* activar(){
        this.door.scene.physics.world.disableBody(this,true);
    }
    desactivar(){
        this.door.scene.physics.world.enableBody(this,false);
    } */
}