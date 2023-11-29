class SceneBootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "SceneBootLoader" });
    }

    preload() {

        this.load.on("complete", () => {
            this.scene.start("TutorialLevel");
        });


        //Cargamos los tiles de nuestro mapa
        this.load.image('tilesDungeon', './assets/tilesets/castle_tileset_part1.png');
        this.load.image('pinchos', './assets/tilesets/pinchos.png');
        this.load.image('escaleras', './assets/tilesets/escalera.png');
        this.load.image('tilesBase', './assets/tilesets/Terrain (32x32).png');
        this.load.tilemapTiledJSON('tilemapTry', './assets/tilesets/RMKLevel1.json');

       // this.load.tilemapTiledJSON('TutorialMap', './assets/tilesets/TuruotialMap.json');
        this


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
