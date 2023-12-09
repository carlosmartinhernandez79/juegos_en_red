class SceneBootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "SceneBootLoader" });
    }

    preload() {

        //LOADING BAR   
        var progressBox = this.add.graphics();
        var progressBar = this.add.graphics();
        progressBox.fillStyle(0xF0360E, 0.8);
        progressBox.fillRect(430, 300, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });

        loadingText.setOrigin(0.5, 0.5);    

        var percentText = this.make.text({
            x: width / 2,
            y: 325,//height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        //INTERFAZ ESCENA PRINCIPAL
        this.load.image("PantallaInicial", "./ImagesJS/Pantallas/Fondo_Pantalla_Principal_nublado.jpg");
        this.load.image("BotonJugarOff", "./ImagesJS/Botones/Boton_Jugar_Off.png");
        this.load.image("BotonOpcionesOff", "./ImagesJS/Botones/Boton_Opciones_Off.png");
        this.load.image("BotonCreditosOff", "./ImagesJS/Botones/Boton_Creditos_Off.png");

        this.load.image("BotonJugarOn", "./ImagesJS/Botones/Boton_Jugar_On.png");
        this.load.image("BotonOpcionesOn", "./ImagesJS/Botones/Boton_Opciones_On.png");
        this.load.image("BotonCreditosOn", "./ImagesJS/Botones/Boton_Creditos_On.png");
        //---------------------------------------------------------------------------------
        //IINTERFAZ CRÉDITOS
        this.load.image("FondoOscuroVacio", "./ImagesJS/Pantallas/fondo oscuro vacio.jpg");
        //---------------------------------------------------------------------------------
        //INTERFAZ LOGIN
        this.load.image("ElfaPng", "./ImagesJS/Elfa_LogIn.png");
        this.load.image("GnomoPng", "./ImagesJS/Gnomo_LogIn.png");
        this.load.image("BotonNivelesOff", "./ImagesJS/Botones/Boton_Niveles_Off.png");
        this.load.image("BotonNivelesOn", "./ImagesJS/Botones/Boton_Niveles_On.png");
        //---------------------------------------------------------------------------------
        //PANTALLA DERROTA
        this.load.image("PantallaDerrota", "./ImagesJS/Pantallas/Pantalla_Derrota.jpg");
        //---------------------------------------------------------------------------------
        //PANTALLA VICTORIA
        this.load.image("PantallaVictoria", "./ImagesJS/Pantallas/Pantalla_Victoria.jpg");
        //---------------------------------------------------------------------------------
        
        //IMAGENES IN GAME
    this.load.image("moneda", "./ImagesJS/Moneda.png");
    this.load.image("stick", "./ImagesJS/stick.png");
    this.load.image("ground", "./ImagesJS/ground.png");
    this.load.image("pinchos", "./ImagesJS/pinchos.png");
    this.load.image("pocion", "./ImagesJS/pocion.png");
    this.load.image("box", "./ImagesJS/caja.png");
    this.load.image("palanca", "./ImagesJS/palanca.png");
    this.load.image("puerta", "./ImagesJS/puerta.jpg");
    this.load.image("bala", "./ImagesJS/bala.png");
    this.load.image("cannon", "./ImagesJS/cannon.png");
    this.load.image("reloj", "./ImagesJS/reloj.png");
    this.load.image("puertaSalir", "./ImagesJS/PuertaSalir.png");
    this.load.image("wasd", "./ImagesJS/wasdMovimiento.png");
    this.load.image("flechas", "./ImagesJS/flechasMovimiento.png");
    this.load.image("flechaUP", "./ImagesJS/flechaUpMovimiento.png");
    this.load.image("estandarte", "./ImagesJS/estandarte.png");

    //ANIMACIONES
    this.load.spritesheet("cat", "./ImagesJS/catSpritesheet.png",
        { frameWidth: 39.5, frameHeight: 40 }
    );

    this.load.spritesheet("enano", "./ImagesJS/enanoSpritesheet.png",
        { frameWidth: 92.25, frameHeight: 108.25 }
    );

    this.load.spritesheet("enanoIdle", "./ImagesJS/enanoIdle.png",
        { frameWidth: 92.25, frameHeight: 108.25 }
    );

    this.load.spritesheet("elfita", "./ImagesJS/elfaSpritesheet.png",
        { frameWidth:  92, frameHeight: 107.25 }
    );



    //---------------------------------------------------------------------------------

    //BOTONES
    this.load.image("menuOff", "./ImagesJS/Botones/Boton_Menu_Off.png");
    this.load.image("opcionesOff", "./ImagesJS/Botones/Boton_Opciones_Off.png");
    this.load.image("reiniciarOff", "./ImagesJS/Botones/Boton_Reiniciar_Off.png");
    this.load.image("nivelesOff", "./ImagesJS/Botones/Boton_Niveles_Off.png");

    this.load.image("menuOn", "./ImagesJS/Botones/Boton_Menu_On.png");
    this.load.image("opcionesOn", "./ImagesJS/Botones/Boton_Opciones_On.png");
    this.load.image("reiniciarOn", "./ImagesJS/Botones/Boton_Reiniciar_On.png");
    this.load.image("nivelesOn", "./ImagesJS/Botones/Boton_Niveles_On.png");


    this.load.image("mute", "./ImagesJS/MuteButton.png");
    this.load.image("unMute", "./ImagesJS/SoundButton.png");


    /////////////////////////////////Sonidos/////////////////////////////////
        this.load.audio("Musica_Base", ["./Sonidos/Musica_Topwer.mp3"]);
        this.load.audio("Viva_El_Vino", ["./Sonidos/Viva_El_Vino.mp3"]); 
        this.load.audio("Ia_Mariano", ["./Sonidos/Ia_Mariano.mp3"]); 
        this.load.audio("Musica_Has_Perdido", ["./Sonidos/Musica_Has_Perdido.mp3"]); 
        this.load.audio("Sonido_Moneda", ["./Sonidos/Sonido_Moneda.mp3"]); 
        this.load.audio("Sonido_Palanca", ["./Sonidos/Sonido_Palanca.mp3"]); 
        this.load.audio("Sonido_Salto", ["./Sonidos/Sonido_Salto.mp3"]); 

    //---------------------------------------------------------------------------------
    //MAPA
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
        //---------------------------------------------------------------------------------

        //PANTALLA DE CARGA https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xF34306, 1);
            progressBar.fillRect(440, 310, 300 * value, 30);
        });

        this.load.on('complete', () => {
            loadingText.destroy();
            progressBar.destroy();
            progressBox.destroy();
            percentText.destroy();
            this.scene.start("StartScreen", {sonido: true});

            this.MiMusicaBase = this.sound.add("Musica_Base");
            this.MiMusicaBase.loop = true;
            this.MiMusicaBase.play();

        });

        /*this.load.on("complete", () => {
            this.scene.start("StartScreen");
        });*///lo que tenia antes 

    }
}
