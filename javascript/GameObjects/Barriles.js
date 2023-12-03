class Barriles extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, dir, maxDist){

        super(scene,x,y,"BarrelGenerator");

        this.dir = dir;
        this.maxDist = maxDist;
        this.vel = dir == "left"? -200:200;

        this.distance = dir == "left"? -100:100;

        this.x = x;
        this.y = y;

        this.actualCount = 0;
        this.shotsPerSecond = 250;

        var barrelGen = scene.add.existing(this);

        barrelGen.scene.physics.world.enableBody(this);

        this.setScale(1.5)
        this.body.setAllowGravity(false) //workds;
        this.body.setImmovable(true)


    }

    update(time){
    
        this.actualCount= this.actualCount + time;
        console.log("Contador: " +this.actualCount)

        console.log(this.actualCount >= this.shotsPerSecond)

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
        this.bala = new Bala(this.scene, this.x + this.distance,this.y, this.vel, this.maxDist)
    }
}