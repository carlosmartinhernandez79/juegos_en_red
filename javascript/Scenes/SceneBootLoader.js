class SceneBootLoader extends Phaser.Scene{
    constructor(){
        super({key: "SceneBootLoader"});
    }

    preload(){

        this.load.on("complete",()=>{
            this.scene.start("SceneJuego");
        });
        
    this.load.image("moneda", "./ImagesJS/Moneda.png");
    this.load.image("stick", "./ImagesJS/stick.png");
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

    /////////////////////////////////Sonidos/////////////////////////////////
        this.load.audio("Musica_Base", ["./Sonidos/Musica_Topwer.mp3"]);
        this.load.audio("Viva_El_Vino", ["./Sonidos/Viva_El_Vino.mp3"]); 
        this.load.audio("Ia_Mariano", ["./Sonidos/Ia_Mariano.mp3"]); 
        this.load.audio("Musica_Has_Perdido", ["./Sonidos/Musica_Has_Perdido.mp3"]); 
        this.load.audio("Sonido_Moneda", ["./Sonidos/Sonido_Moneda.mp3"]); 
        this.load.audio("Sonido_Palanca", ["./Sonidos/Sonido_Palanca.mp3"]); 
        this.load.audio("Sonido_Salto", ["./Sonidos/Sonido_Salto.mp3"]); 
    }
}
