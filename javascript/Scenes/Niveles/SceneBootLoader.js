class SceneBootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "SceneBootLoader" });
    }

    preload() {

        this.load.on("complete", () => {
            this.scene.start("StartScreen");
        });

        //Interfaz escena principal
        this.load.image("PantallaInicial", "./ImagesJS/Pantallas/Fondo_Pantalla_Principal_nublado.jpg");
        this.load.image("BotonJugarOff", "./ImagesJS/Botones/Boton_Jugar_Off.png");
        this.load.image("BotonOpcionesOff", "./ImagesJS/Botones/Boton_Opciones_Off.png");
        this.load.image("BotonCreditosOff", "./ImagesJS/Botones/Boton_Creditos_Off.png");

        this.load.image("BotonJugarOn", "./ImagesJS/Botones/Boton_Jugar_On.png");
        this.load.image("BotonOpcionesOn", "./ImagesJS/Botones/Boton_Opciones_On.png");
        this.load.image("BotonCreditosOn", "./ImagesJS/Botones/Boton_Creditos_On.png");
        //////////////////////////////////////////////////////////////////////////////////
        //Interfaz escena creditos
        this.load.image("FondoOscuroVacio", "./ImagesJS/Pantallas/fondo oscuro vacio.jpg");
        //////////////////////////////////////////////////////////////////////////////////
        //Interfaz LogIn
        this.load.image("ElfaPng", "./ImagesJS/Elfa_LogIn.png");
        this.load.image("GnomoPng", "./ImagesJS/Gnomo_LogIn.png");
        this.load.image("BotonNivelesOff", "./ImagesJS/Botones/Boton_Niveles_Off.png");
        this.load.image("BotonNivelesOn", "./ImagesJS/Botones/Boton_Niveles_On.png");
        //////////////////////////////////////////////////////////////////////////////////
        
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
