class ModoDeJuego extends Phaser.Scene{
    constructor() {
        super({ key: 'ModoDeJuego' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }
    
     init(data){
        if(data){
           	this.username = data.username;
        }
    }
    
    

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "PantallaModo").setOrigin(0,0);

 		this.LocalOff= this.add.image(345,480, "BotonLocalOff").setOrigin(0.5,0.5).setScale(0.75);
        this.LocalOn =this.add.image(345,480, "BotonLocalOn").setOrigin(0.5,0.5).setScale(0.85);
       

		 this.OnlineOff = this.add.image(855,480, "BotonOnlineOff").setOrigin(0.5,0.5).setScale(0.75);
        this.OnlineOn = this.add.image(855,480, "BotonOnlineOn").setOrigin(0.5,0.5).setScale(0.85);
       

        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)
        
		
        Volver.setInteractive()
            .on('pointerdown', function () {
                this.scene.start('StartScreen');
            }, this);
            

        this.BotonLocal = this.LocalOff
        this.LocalOn.setVisible(false);
        this.BotonLocal.setInteractive()
        
        this.BotonLocal.on('pointerover',()=>{
            this.LocalOn.setVisible(true);
            //this.LocalOff.setVisible(false);
        })
        
        this.BotonLocal.on('pointerout',()=>{
            this.LocalOff.setVisible(true);
            this.LocalOn.setVisible(false);
        })
        
        this.BotonLocal.on('pointerdown', function () {
            this.scene.start("LevelSelector",{username:this.username})
        }, this);
        
        
        
        this.BotonOnline= this.OnlineOff
        this.OnlineOn.setVisible(false);
        this.BotonOnline.setInteractive()
        
        this.BotonOnline.on('pointerover',()=>{
            this.OnlineOn.setVisible(true);
             //this.OnlineOff.setVisible(false);
        })
        
        this.BotonOnline.on('pointerout',()=>{
            this.OnlineOff.setVisible(true);
            this.OnlineOn.setVisible(false);
        })
        
        this.BotonOnline.on('pointerdown', function () {
            this.scene.start("LogIn",{username:this.username})
            webSocketOpen = true;
        }, this);
    }   
}


//export default Escena2;
