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

    }
}
