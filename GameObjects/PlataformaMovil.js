class PlataformaMovil extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, type, max, min, vel){

        super(scene,x,y,"ground");

        this.maxv = max;
        this.minv = min
        this.velv = vel;
        this.typev = type

        var block = scene.add.existing(this);

        block.scene.physics.world.enableBody(this);

        this.body.setAllowGravity(false) //workds;
        this.body.setImmovable(true)

        scene.platformsMovibles.add(this);

        switch(this.typev){
            case "horizontal":

            this.body.setVelocityX(this.velv)

            break;
            case "vertical":

            this.body.setVelocityY(this.velv)

            break;

        }
    }

    update(){
       
        //----------SI ES HORIZONTAL-------------
        if(this.typev == "horizontal"){ //si es horizontal y pasa el max, negamos la velocidad en las X
            if(this.x > this.maxv){
                this.body.setVelocityX(-this.velv)
            }
            if(this.x < this.minv){
                this.body.setVelocityX(this.velv)
            }

            //para que no se puedan parar las plataformas con fuerzas dfe los personajes
            if(Math.abs(this.body.velocity.x)<this.velv){
                console.log("ajaj")
                this.body.setVelocityX(this.velv)
            }
        }

        //-----SI ES VERTICAL-----------
        if(this.typev == "vertical"){//si es vertical y pasa el max, negamos la velocidad en las y
            if(this.y > this.maxv){
                this.body.setVelocityY(-this.velv)
            }
            if(this.y < this.minv){
                this.body.setVelocityY(this.velv)
            }
            //para que no se puedan parar las plataformas con fuerzas dfe los personajes
            if(Math.abs(this.body.velocity.y)<this.velv){
                this.body.setVelocityY(this.velv)
            }
        }

        
        

    }
    
}