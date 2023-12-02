class TutorialLevel extends Phaser.Scene{
    constructor(){
        super({key: "TutorialLevel"});
    }
    preload()
    {
    }
    create(){
        //////////////////////////////////////////////////////////////////
        //  CREACION CON MAPA DE TILES
        /////////////////////////////////////////////////////////////


        /// VARIABLE MAPA LE PASAMOS EL KEY AL ARCHIVO JSON
        var map = this.make.tilemap({ key: 'tilemapLvL1' });

        /// VARIABLE TILESET LE PASAMOS EL NOMBRE DEL TILESET EN LILED Y EL KEY DEL TILESET EN ASSETS
        /// REPETIR POR CADA TILESET QUE TENGAMOS EN TILED
        var tilesetEscenario = map.addTilesetImage('TilesFase1', 'tilesLvL1');
        var tilesetPinchos = map.addTilesetImage('Pinchos', 'Spikes');
        var tilesetLauncher = map.addTilesetImage('BarrelGenerator', 'BarrelGenerator');

        /// VARIABLE FONDO LE PASAMOS EL NOMBRE DE LA CAPA EN TILED Y EL TILESET QUE HEMOS CREADO EN EL PASO ANTERIOR
        /// REPETIR POR CADA CAPA QUE TENGAMOS EN TILED
        var fondo = map.createLayer('Fondo', tilesetEscenario);
        var limites = map.createLayer('Limites', tilesetEscenario);
        var plataformas = map.createLayer('Plataformas', tilesetEscenario);
        var pinchos = map.createLayer('Pinchos', tilesetPinchos);
        var generador = map.createLayer('Generador', tilesetLauncher);

        limites.setCollisionByProperty({colision:true});
        plataformas.setCollisionByProperty({colision:true});
        pinchos.setCollisionByProperty({colision:true});
        generador.setCollisionByProperty({colision:true});

        //////////////////////////////////////////////////////////////////////////

        var playerR;
        var playerA;

        this.cameras.main.setBounds(0,0,4000,4000);

    }
    
}