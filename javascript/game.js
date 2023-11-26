var config  = {
    width: 1200,
    height: 600,
    backgroundColor: 0xFCF3CF,

    type: Phaser.AUTO,
    
    physics:{
        default: "arcade",
        arcade:{
            gravity:{
                y: 700
            }
        }
    },

    scene:[
        SceneBootLoader,
        StartScreen, 
        LogIn, 
        Credits, 
        Options, 
        LevelSelector, 
        Level1, 
        SceneJuego,
        ]
}



var game = new Phaser.Game(config);

function preload() {
    // Puedes precargar recursos aquí si es necesario
}

// Su puta madre


