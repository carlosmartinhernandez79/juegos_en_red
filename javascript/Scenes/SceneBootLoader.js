class SceneBootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "SceneBootLoader" });
    }

    preload() {

        this.load.on("complete", () => {
            this.scene.start("TutorialLevel");
        });


        //Cargamos los tiles de nuestro mapa
        //this.load.image('tilesDungeon', './assets/tilesets/Tiles/castle_tileset_part1.png');
        this.load.image('pinchos', './assets/tilesets/Tiles/pinchos.png');
        this.load.image('escaleras', './assets/tilesets/Tiles/escalera.png');
        this.load.image('tilesBase', './assets/tilesets/Tiles/Terrain (32x32).png');

        //this.load.image('tilesLvL1', './assets/tilesets/Tiles/Tileset1.png');
        this.load.image('tilesLvL1', './assets/tilesets/Tiles/TilesFase1.jpeg');

        this.load.image('Spikes', './assets/tilesets/Tiles/pinchos.png');
        this.load.image('BarrelGenerator', './assets/tilesets/Tiles/BarrilGenerator.png');



        //this.load.tilemapTiledJSON('tilemapTry', './assets/tilesets/LevelData/RMKLevel1.json');
        //this.load.tilemapTiledJSON('tilemapLvL1', './assets/tilesets/LevelData/LvLTutorial.json');
        this.load.tilemapTiledJSON('tilemapLvL1', './assets/tilesets/LevelData/LvLTutorialRMK.json');

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
