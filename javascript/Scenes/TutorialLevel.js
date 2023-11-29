class TutorialLevel extends Phaser.Scene{
    constructor(){
        super({key: "TutorialLevel"});
    }
    preload()
    {
    }
    create(){

        /// VARIABLE MAPA LE PASAMOS EL KEY AL ARCHIVO JSON
        var map = this.make.tilemap({ key: 'tilemapTry' });

        /// VARIABLE TILESET LE PASAMOS EL NOMBRE DEL TILESET EN LILED Y EL KEY DEL TILESET EN ASSETS
        /// REPETIR POR CADA TILESET QUE TENGAMOS EN TILED
        var tileset = map.addTilesetImage('fondosCastillo', 'tilesBase');

        /// VARIABLE FONDO LE PASAMOS EL NOMBRE DE LA CAPA EN TILED Y EL TILESET QUE HEMOS CREADO EN EL PASO ANTERIOR
        /// REPETIR POR CADA CAPA QUE TENGAMOS EN TILED
        var fondo = map.createLayer('Suelo', tileset);


    }
    
}