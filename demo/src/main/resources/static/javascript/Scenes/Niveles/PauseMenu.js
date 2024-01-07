class PauseMenu extends Phaser.Scene{
    constructor() {
        super({ key: 'PauseMenu' });
    }
    init(data){
        if(data){
            this.sonido = data.sonido;
            this.pantalla = data.pantalla;
            if(data.username){
				this.username = data.username
			}
            console.log(this.pantalla)
        }
    }
    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        console.log("pause")
    }

    create() {
        // Lógica de inicialización de la escena
        const graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRect(0, 0, 1200, 600);
        //graphics.alpha = 0.5     

        this.add.image(600,70, "PausaText").setOrigin(0.5,0.5);
        this.escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);


        this.menuOff = this.add.image(600,200,"menuOff").setScale(0.6);
        this.menuOn = this.add.image(600,200,"menuOn").setScale(0.7);;
        
        this.menu = this.menuOff

        this.menu.setInteractive();
        this.menuOn.setVisible(false);

        this.menu.on('pointerover',()=>{
            this.menuOn.setVisible(true);
        })
        
        this.menu.on('pointerout',()=>{ //PONER QUE SI ESTÁ ABIERTO EL SOCKET, AL OTRO USUARIO LE MANDE UN MENSAJE DE QUE TE HAS SALIDO Y CERRAR LA CONEXIÓN CON EL SOCKET
            this.menuOff.setVisible(true);
            this.menuOn.setVisible(false);
        })

        this.menu.on('pointerdown', function () { //HACER QUE CUANDO UNO LE DE A MENU, SE PIERDA LA CONEXIÓN DEL SOCKET
        
            
			if(webSocketOpen){ //si el websocket its open, haz esto
				stompClient.send("/game/desconectarUsuario",  //envia un mensaje al servidor de que han reiniciado
	 			{},
				true
	 			)
	 			  this.scene.start('StartScreen',{sonido: this.scene.get(this.pantalla).getSound(),username:nombreDeUsuario});
	 			  amigoDesconectado = false;
	 			  socket.close();
			}
			else{
				  this.scene.start('StartScreen',{sonido: this.scene.get(this.pantalla).getSound()});
			}
        
          
            this.scene.bringToTop('StartScreen');
            this.scene.sendToBack(this.pantalla);
            this.scene.sleep('PauseMenu');
            this.scene.sendToBack('OptionsFromPause');
            this.scene.sendToBack('Tiempo_Monedas');
            

            
        }, this);



        //--------------------------------------------------
        this.opcionesOff = this.add.image(600,300,"opcionesOff").setScale(0.6);
        this.opcionesOn = this.add.image(600,300,"opcionesOn").setScale(0.7);
        
        this.opciones = this.opcionesOff

        this.opciones.setInteractive();
        this.opcionesOn.setVisible(false);

        this.opciones.on('pointerover',()=>{
            this.opcionesOn.setVisible(true);
        })
        
        this.opciones.on('pointerout',()=>{
            this.opcionesOff.setVisible(true);
            this.opcionesOn.setVisible(false);
        })

        this.opciones.on('pointerdown', function () {
            console.log(this.scene.get("StartScreen").isMusicOn()+ ": FROM PAUSE MENU")
            this.scene.start('OptionsFromPause', {sonido: this.scene.get("StartScreen").isMusicOn(), pantalla: this.pantalla});
            this.scene.bringToTop('OptionsFromPause'); //mostramos sobre todas esta escena
            this.scene.pause('PauseMenu'); //dormimos la otra, porque no queremos perder lo que hagamos en el menu de pausa
            this.scene.sendToBack(this.pantalla); //enviamos al fondo la de tutorial
             this.scene.stop(this.pantalla);
            //this.scene.sendToBack('Tiempo_Monedas');
        }, this);

        //----------------------------------------------
        this.reiniciarOff = this.add.image(600,400,"reiniciarOff").setScale(0.6);
        this.reiniciarOn = this.add.image(600,400,"reiniciarOn").setScale(0.7);;
        this.reiniciar = this.reiniciarOff
        this.reiniciarOn.setVisible(false);
        this.reiniciar.setInteractive()

      
        this.reiniciar.on('pointerover',()=>{
            this.reiniciarOn.setVisible(true);
        })
        
        this.reiniciar.on('pointerout',()=>{
            this.reiniciarOff.setVisible(true);
            this.reiniciarOn.setVisible(false);
        })

        this.reiniciar.on('pointerdown', function () {
            this.scene.start(this.pantalla); //whoever le de, reinicia su pantalla

            if(webSocketOpen){ //si el websocket its open, haz esto
				stompClient.send("/game/reiniciarGame",  //envia un mensaje al servidor de que han reiniciado
	 			{},
				true
	 		)
			}
            
            
        }, this);

        //-------------------------------------------------

        this.nivelesOff = this.add.image(600,500,"nivelesOff").setScale(0.6);
        this.nivelesOn = this.add.image(600,500,"nivelesOn").setScale(0.7);
        this.niveles = this.nivelesOff;

        this.nivelesOn.setVisible(false);
        this.niveles.setInteractive()

        this.niveles.on('pointerover',()=>{
            this.nivelesOn.setVisible(true);
        })
        
        this.niveles.on('pointerout',()=>{
            this.nivelesOff.setVisible(true);
            this.nivelesOn.setVisible(false);
        })

        this.niveles.on('pointerdown', function () {
			if(!webSocketOpen){
			this.scene.start('LevelSelector');
            this.scene.bringToTop('LevelSelector');
            this.scene.sendToBack(this.pantalla);
            this.scene.sendToBack('Tiempo_Monedas');
			}
        }, this);
    }


    
    /*button.on('pointerover',function(pointer){
        button.setFrame(1);
    })
    
    button.on('pointerout',function(pointer){
        button.setFrame(0);
    })*/

    update() {
        if(this.escape.isDown){
            this.scene.sleep();
            console.log("Resume")
            this.scene.resume("Tiempo_Monedas");
            var sceneMain = this.scene.resume(this.pantalla);
            this.scene.get(this.pantalla).checkSound()

        }
    }
}