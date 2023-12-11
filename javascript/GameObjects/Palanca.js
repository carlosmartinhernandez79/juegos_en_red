class Palanca extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, objectToInteract){

        super(scene,x,y,"palanca_mov");

        this.active = true;
        this.objectToInteract = objectToInteract;

        scene.add.existing(this).setScale(0.4);

        scene.physics.world.enableBody(this);
        this.body.setAllowGravity(false) //workds;

        scene.misPalancas.add(this)

        this.SonidoPalanca = this.scene.sound.add("Sonido_Palanca");
        //scene.physics.add.existing(this, true); //lo hace static pero con physics

        //scene.physics.world.enableBody(this);
        //scene.physics.add.image(x, y-500, "palanca").setScale(0.5).setImmovable(true);
        //scene.physics.world.enabled();
        //this.body.setInmovable = true;

        this.anims.create({
            key: 'palanca_move',
            frames: this.anims.generateFrameNumbers('palanca_mov', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'palanca_stop',
            frames: [ { key: 'palanca_mov', frame: 0 } ],
            frameRate: 10,
        });
     
    }

    activarPalanca(){
        if(this.active && this.objectToInteract!=null){ //si la palanca está activa, activa el objeto
            this.objectToInteract.activar(); //la palanca, que tiene como argumento el objeto que va a dar funcionalidad, llama a su método activar
            //ES DECIR, TODOS LOS OBJETOS QUE VAYAMOS A METER CON FUNCIONALIDAD MEDIANTE UNA PALANCA TIENEN QUE TENER UN MÉTODO ACTIVAR
            //Si es un PlataformaMovil --> su método activar le da una velocidad a la plataforma
            //Si es una Puerta --> su método activar hace desaparecer la puerta
            console.log("Palanca Activada")
            this.animarPalanca();
            this.desactivarPalanca();
            this.SonidoPalanca.play();
        } 

        else if(!this.active && this.objectToInteract!=null){//si no está activa, desactiva el objeto
            console.log("Palanca Desactivada")
            console.log( this.objectToInteract)
            this.objectToInteract.desactivar();
            this.animarPalanca();
            this.desactivarPalanca();
            
        }
    }

    desactivarPalanca(){
        this.active = !this.active;

        if(this.objectToInteract.getClass() == "door"){
            this.objectToInteract = null;
            console.log( this.objectToInteract)
        }
        else{
            this.SonidoPalanca.play();
        }
    }

    isActive(){
        return this.active;
    }

    animarPalanca(){
    
        if(this.active){

            //this.Palanca.anims.play('palanca_move');
            //this.setAngle(-45)
        }
        else{
            //this.Palanca.anims.play('palanca_stop');
            //this.setAngle(45)
        }
    }
}
