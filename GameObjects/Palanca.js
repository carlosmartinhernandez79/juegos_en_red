class Palanca extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, objectToInteract){

        super(scene,x,y,"stick");

        this.active = true;
        this.objectToInteract = objectToInteract;

        scene.add.existing(this).setScale(0.5);

        scene.physics.world.enableBody(this);
        this.body.setAllowGravity(false) //workds;
        
        scene.misPalancas.add(this)
        //scene.physics.add.existing(this, true); //lo hace static pero con physics

        //scene.physics.world.enableBody(this);
        //scene.physics.add.image(x, y-500, "stick").setScale(0.5).setImmovable(true);
        //scene.physics.world.enabled();
        //this.body.setInmovable = true;
     
    }

    activarPalanca(){
        if(this.active){ //si la palanca está activa, activa el objeto
            this.objectToInteract.activar(); //la palanca, que tiene como argumento el objeto que va a dar funcionalidad, llama a su método activar
            //ES DECIR, TODOS LOS OBJETOS QUE VAYAMOS A METER CON FUNCIONALIDAD MEDIANTE UNA PALANCA TIENEN QUE TENER UN MÉTODO ACTIVAR
            //Si es un PlataformaMovil --> su método activar le da una velocidad a la plataforma
            //Si es una Puerta --> su método activar hace desaparecer la puerta
            console.log("Palanca Activada")
            this.desactivarPalanca();
        } 

        else if(!this.active){//si no está activa, desactiva el objeto
            console.log("Palanca Desactivada")
            this.objectToInteract.desactivar();
            this.desactivarPalanca();
        }
    }

    desactivarPalanca(){
        this.active = !this.active;
    }

    isActive(){
        return this.active;
    }
}
