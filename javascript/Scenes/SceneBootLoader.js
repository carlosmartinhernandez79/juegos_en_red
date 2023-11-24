class SceneBootLoader extends Phaser.Scene{
    constructor(){
        super({key: "SceneBootLoader"});
    }

    preload(){

        this.load.on("complete",()=>{
            this.scene.start("SceneJuego");
        });

    this.load.image("playerRojo", "./ImagesJS/circuloRojo.png");
    this.load.image("stick", "./ImagesJS/stick.png");
    this.load.image("playerAzul", "./ImagesJS/circuloAzul.png");
    this.load.image("tree", "./ImagesJS/tree.png");
    this.load.image("ground", "./ImagesJS/ground.png");
    this.load.image("background", "./assets/fondoProvisional.jpg")
    this.load.spritesheet("dude", "./ImagesJS/dude.png",
        { frameWidth: 32, frameHeight: 48 }
    );
    }
}
