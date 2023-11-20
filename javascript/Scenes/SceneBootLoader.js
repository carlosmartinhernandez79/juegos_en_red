class SceneBootLoader extends Phaser.Scene{
    constructor(){
        super({key: "SceneBootLoader", active : true});
    }

    preload(){
    
    this.load.on("complete",()=>{
        this.scene.start("SceneJuego");
    });

    this.load.image("playerRojo", "./ImagesJS/circuloRojo.png");
    this.load.image("playerAzul", "./ImagesJS/circuloAzul.png");
    this.load.image("tree", "./ImagesJS/tree.png");
    this.load.image("ground", "./ImagesJS/ground.png");
    this.load.spritesheet("dude", "ImagesJS/dudeAnimations.png",
    { frameWidth: 32, frameHeight: 48 }
    );

    }
}
