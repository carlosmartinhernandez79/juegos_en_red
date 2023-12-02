class SceneBootLoader extends Phaser.Scene{
    constructor(){
        super({key: "SceneBootLoader"});
    }

    preload(){

        this.load.on("complete",()=>{
            this.scene.start("SceneJuego");
        });
        
    this.load.image("moneda", "./ImagesJS/Moneda.png");
    this.load.image("playerRojo", "./ImagesJS/circuloRojo.png");
    this.load.image("stick", "./ImagesJS/stick.png");
    this.load.image("playerAzul", "./ImagesJS/circuloAzul.png");
    this.load.image("tree", "./ImagesJS/tree.png");
    this.load.image("ground", "./ImagesJS/ground.png");
    this.load.image("pinchos", "./ImagesJS/pinchos.png");
    this.load.image("pocion", "./ImagesJS/pocion.png");
    this.load.image("box", "./ImagesJS/caja.png");

    //BOTONES
    this.load.image("menuOff", "./ImagesJS/Botones/Boton_Menu_Off.png");
    this.load.image("opcionesOff", "./ImagesJS/Botones/Boton_Opciones_Off.png");
    this.load.image("reiniciarOff", "./ImagesJS/Botones/Boton_Reiniciar_Off.png");
    this.load.image("nivelesOff", "./ImagesJS/Botones/Boton_Niveles_Off.png");

    this.load.image("menuOn", "./ImagesJS/Botones/Boton_Menu_On.png");
    this.load.image("opcionesOn", "./ImagesJS/Botones/Boton_Opciones_On.png");
    this.load.image("reiniciarOn", "./ImagesJS/Botones/Boton_Reiniciar_On.png");
    this.load.image("nivelesOn", "./ImagesJS/Botones/Boton_Niveles_On.png");

    this.load.spritesheet("cat", "./ImagesJS/catSpritesheet.png",
        { frameWidth: 39.5, frameHeight: 40 }
    );


    this.load.spritesheet("dude", "./ImagesJS/dude.png",
        { frameWidth: 32, frameHeight: 48 }
    );

    this.load.spritesheet("enano", "./ImagesJS/enanoSpritesheet.png",
        { frameWidth: 92.25, frameHeight: 108.25 }
    );

    }
}
