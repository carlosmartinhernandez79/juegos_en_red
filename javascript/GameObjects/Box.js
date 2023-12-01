class Box extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"box");

        this.box = scene.add.existing(this);

        this.box.setScale(0.3)

        scene.box.add(this)
    }

   stop(){
     if(this.box.velocity()>1){
        this.box.setVelocityX(0);
     }
   }
}