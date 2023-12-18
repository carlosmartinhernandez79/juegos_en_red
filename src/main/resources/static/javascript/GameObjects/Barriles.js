class Barriles extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, dir, maxDist){

        super(scene,x,y,"cannon");

        this.dir = dir;
        this.maxDist = maxDist;
        this.vel = dir == "left"? -200:200;

        this.distance = dir == "left"? -40:40;

        this.x = x;
        this.y = y;

        this.actualCount = 0;
        this.shotsPerSecond = 400;

        var barrelGen = scene.add.existing(this);

        dir == "left"? this.flipX=false:this.flipX=true;

        barrelGen.scene.physics.world.enableBody(this);

        this.setScale(4.5)
        this.body.setAllowGravity(false) //workds;
        this.body.setImmovable(true)


    }

    update(time){
    
        this.actualCount= this.actualCount + time;

        //console.log( this.actualCount)
    
        if(this.actualCount >= this.shotsPerSecond){
            this.shootBarrel();
            this.actualCount= this.actualCount - this.shotsPerSecond;
        }

    }  

    activar(){ //para activar los barrilles con palancas --> prox implementación
      
    }
    desactivar(){ //para desactivar los barrilles con palancas --> prox implementación
       
    }

    getClass(){
        return "Barriles"
    }

    shootBarrel(){
        this.bala = new Bala(this.scene, this.x + this.distance,this.y-20, this.vel, this.maxDist)
    }
}