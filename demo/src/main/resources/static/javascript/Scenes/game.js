var config  = {
	
	autocenter: Phaser.Scale.CENTER_BOTH,
	
    width: 1200,
    height: 600,
    backgroundColor: 0x000000,

    type: Phaser.AUTO,
    
    dom: {
        createContainer: true
    },
        
    parent: 'myGame',
    physics:{
        default: "arcade",
        arcade:{
            gravity:{
                y: 700
            },
            //debug : true
        }
    },

    scene:[
        SceneBootLoader, 
        StartScreen, 
        Tiempo_Monedas,
        LogIn, 
        Credits, 
        Options, 
        LevelSelector, 
        LogScreen,
        //SceneJuego,
        PauseMenu, 
        GameOver,
        Victory,
        OptionsFromPause,
        TestGround, 
        TutorialLevel,
        Records,
        TutorialLevelOnlineElfo,
        TutorialLevelOnlineGnomo,
        waitingForPlayer,
        ModoDeJuego,
        WaitingForElfo,
        WaitingForGnomo,
        AmbosIguales
        ]
}



var game = new Phaser.Game(config);

/*function create(){
    game.scene
}*/

