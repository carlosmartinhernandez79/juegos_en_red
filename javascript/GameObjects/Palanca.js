class Palanca extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, objectToInteract){

        super(scene,x,y,"palanca_mov");

        this.active = true;
        this.objectToInteract = objectToInteract;

        this.palanca = scene.add.existing(this)

        this.palanca.setScale(0.4);

        this.palanca.scene.physics.world.enableBody(this);
        
        this.body.setAllowGravity(false) //workds;

        scene.misPalancas.add(this)

        this.SonidoPalanca = this.scene.sound.add("Sonido_Palanca");

        this.anims.create({
            key: 'palancaAnim',
            frames: this.anims.generateFrameNumbers('palanca_mov', { start: 0, end: 7 }),
            frameRate: 10,
        });
    }

    activarPalanca(){
        if(this.active && this.objectToInteract!=null){
            this.objectToInteract.activar(); 
            //si la palanca está activa, activa el objeto la palanca, que tiene como argumento el objeto que va a dar funcionalidad, llama a su método activar
            //ES DECIR, TODOS LOS OBJETOS QUE VAYAMOS A METER CON FUNCIONALIDAD MEDIANTE UNA PALANCA TIENEN QUE TENER UN MÉTODO ACTIVAR
            //Si es un PlataformaMovil --> su método activar le da una velocidad a la plataforma
            //Si es una Puerta --> su método activar hace desaparecer la puerta
            this.desactivarPalanca();

            this.SonidoPalanca.play();
        } 

        else if(!this.active && this.objectToInteract!=null){//si no está activa, desactiva el objeto
            this.objectToInteract.desactivar();
            
            this.desactivarPalanca();
            
        }
    }

    desactivarPalanca(){
        this.active = !this.active;

        if(this.objectToInteract.getClass() == "door"){
            this.objectToInteract = null;
        }
        else{
            this.SonidoPalanca.play();
        }
    }

    isActive(){
        return this.active;
    }

    animarPalanca(){
        console.log("Soy un gracisos")
        if(this.active){
            console.log("SAKTIVO")
            this.palanca.anims.play("palancaAnim", true);
            //this.setAngle(-45)
        }
        else{
            console.log("NOAKTIVO")
            this.palanca.anims.play("palancaAnim", true);
            //this.setAngle(45)
        }
    }
}
