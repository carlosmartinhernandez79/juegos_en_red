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


    this.load.spritesheet("dude", "./ImagesJS/dude.png",
        { frameWidth: 32, frameHeight: 48 }
    );

    this.load.spritesheet("enano", "./ImagesJS/enanoSpritesheet.png",
        { frameWidth: 92.25, frameHeight: 108.25 }
    );

    }
}
