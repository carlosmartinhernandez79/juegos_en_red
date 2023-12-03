class Bala extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, vel, maxDist){

        super(scene,x,y,"bala");

        this.vel = vel;
        this.maxDist = maxDist;

        var block = scene.add.existing(this);

        block.scene.physics.world.enableBody(this);

        block.setScale(3)

        this.body.setAllowGravity(false) //workds;
        this.body.setImmovable(true)

        scene.misBalas.add(this);

        this.move();

    }
  

   move(){
    this.body.setVelocityX(this.vel)

   }

   kill(){
    if(this.x > this.maxDist){
        this.destroy();
    }
   }

    getClass(){
        return "Barriles"
    }
}