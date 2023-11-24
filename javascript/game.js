var config  = {
    width: 3000,
    height: 1000,
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


