class TutorialLevelOnlineElfo extends Phaser.Scene{
    constructor(){
        super({key: "TutorialLevelOnlineElfo"});


    }
    preload()
    {
    }
    create(){
        //////////////////////////////////////////////////////////////////
        //  CREACION CON MAPA DE TILES
        /////////////////////////////////////////////////////////////
        /// VARIABLE MAPA LE PASAMOS EL KEY AL ARCHIVO JSON
        var map = this.make.tilemap({ key: 'tilemapLvL1', tileWidth:32, tileHeight:32});

        /// VARIABLE TILESET LE PASAMOS EL NOMBRE DEL TILESET EN LILED Y EL KEY DEL TILESET EN ASSETS
        /// REPETIR POR CADA TILESET QUE TENGAMOS EN TILED
        var tilesetEscenario = map.addTilesetImage('TilesFase1', 'tilesLvL1');
        var tilesetPinchos = map.addTilesetImage('Pinchos', 'Spikes');
        var tilesetLauncher = map.addTilesetImage('BarrelGenerator', 'BarrelGenerator');

        /// VARIABLE FONDO LE PASAMOS EL NOMBRE DE LA CAPA EN TILED Y EL TILESET QUE HEMOS CREADO EN EL PASO ANTERIOR
        /// REPETIR POR CADA CAPA QUE TENGAMOS EN TILED
        var fondo = map.createLayer('Fondo', tilesetEscenario).setScale(1.5);
        var limites = map.createLayer('Limites', tilesetEscenario).setScale(2);
        var plataformas = map.createLayer('Plataformas', tilesetEscenario).setScale(1.5);
       // var pinchos = map.createLayer('Pinchos', tilesetPinchos).setScale(1.5);
        //var generador = map.createLayer('Generador', tilesetLauncher).setScale(1.5);

        limites.setCollisionByProperty({colision:true});
        plataformas.setCollisionByProperty({colision:true});
       // pinchos.setCollisionByProperty({colision:true});
       // generador.setCollisionByProperty({colision:true});
        map.setCollisionBetween(0, 1200);

        plataformas.setCollisionByExclusion([-1]);
        limites.setCollisionByExclusion([-1]);
        //////////////////////////////////////////////////////////////////////////

        //CARGAMOS INTERFACES
        this.count = 0
	    this.interface = this.scene.launch('Tiempo_Monedas', {pantalla: "TutorialLevelOnlineElfo"})
        this.scene.bringToTop('Tiempo_Monedas') //la ponemos encima de todas
        
       

        //SONIDOS
        this.MiMusicaBase = this.sound.add("Musica_Base");
        this.VivaElVino = this.sound.add("Viva_El_Vino");
        this.IaMariano = this.sound.add("Ia_Mariano");
        this.MusicaHasPerdido = this.sound.add("Musica_Has_Perdido");
        this.SonidoSalto = this.sound.add("Sonido_Salto");
        this.MiMusicaBase.loop = true;

        this.sonido;

        this.MiMusicaBase.play()
       
    
        if(this.scene.get("StartScreen").isMusicOn()) {
        
            this.sonido = true;
        }
        else{
            this.sonido = false;
            this.MiMusicaBase.pause();
        }

        this.scene.get("SceneBootLoader").MiMusicaBase.pause();

        window.myScene = this;
        //---------------------------------

        //CARACTERISTICAS DEL MUNDO
        this.physics.world.bounds.width = 2350;
        this.physics.world.bounds.height = 2100;
        this.cameras.main.setBounds(0,0,2400,2100);
        //---------------------------------

        //IMAGENES TUTORIAL

        this.add.image(500,1900,"flechas").setScale(0.3)
        this.add.image(500,2000,"wasd").setScale(0.3)

        this.add.image(1797, 1925, "TutorialEnanoText").setScale(0.4)

        this.add.image(2170, 2020, "PalancaText").setScale(0.4)

        this.add.image(2140, 1660, "DobleSaltoText").setScale(0.4)
        
        this.add.image(2240,1655,"flechaUP").setScale(0.3).setOrigin(0.5,0.5)
        //this.add.text(2225, 1650, "+", {font: "25px Arial", fill: "white"})
        this.add.image(2310,1655,"flechaUP").setScale(0.3).setOrigin(0.5,0.5)

        //-------------------------------
        
        
        //COSAS DEL JUEGO INDIVIDUALES DE CADA JUGADOR

        //---PLATAFORMAS MOVIBLES---
        this.platformsMovibles = this.add.group(); //creo un grupo de plataformasMovibles
        //creo dos instancia, da igual donde las guarde, porque se gestionará su funcionaldidad desde el grupo platformsMovibles (se añaden desde la propia clase)
        this.platMovible = new PlataformaMovil(this, 970, 1275,"horizontal", 1380, 970, 200); 
        //this.platMovible2 = new PlataformaMovil(this, 1200, 3800,"vertical", 3800, 3500, 0);
        //this.platMovible3 = new PlataformaMovil(this, 1200, 3800,"vertical", 3800, 3500, 200);
        //---------------------------------

        //--PUERTAS--
        this.doors = this.add.group()
        this.puerta1 = new Puerta(this, 2035, 1800)
        //---------------------------------

        //--PALANCAS--
        this.misPalancas = this.add.group();
        //this.p = new Palanca(this, 1200, 3700, this.platMovible2); //Instanciar las palancas enviándolas el objeto que quieren activar cuando las activen
        this.p = new Palanca(this, 2300, 2030, this.puerta1); //Instanciar las palancas enviándolas el objeto que quieren activar cuando las activen
        //---------------------------------

        //-----PUERTA SALIR----------

        this.exitDoor = this.physics.add.image(2230,435,"puertaSalir").setScale(1.55)
        this.exitDoor.body.setAllowGravity(false) //workds;
        this.exitDoor.body.setImmovable(true)

        //----------------------------

        //---POCION---
        this.pot = this.physics.add.image(800,1990,"pocion")
        this.pot.body.setAllowGravity(false);
        this.pot.setScale(0.08)

        this.desTransformarse = this.physics.add.image(1700,2000,"pocion")
        this.desTransformarse.body.setAllowGravity(false);
        this.desTransformarse.setVisible(false);
        this.desTransformarse.setScale(0.1)

        //---BOX---
        this.box = this.physics.add.group()
        this.boxi = new Box(this,1700,1600, "box")
    
        this.physics.add.collider(this.box, plataformas);
        this.physics.add.collider(this.box, limites);
        this.physics.add.collider(this.box, this.box);
        this.boxi.body.setCollideWorldBounds(true);
        //----------------------------


        //---------MONEDAS------------
        this.misMonedas = this.physics.add.group()
        this.monedaX = new Monedas(this,110,1580)
        this.monedaX = new Monedas(this,1000,790)
        this.monedaX = new Monedas(this,1000,200)

        this.misMonedas.children.iterate(function (child) {

        child.setScale(0.2);
        child.body.setAllowGravity(false) 
        
        });
        //---------------------------------
         //PINCHOS
    this.pinchos = this.physics.add.staticGroup();
    this.pinchos.create(650, 2040, 'pinchos'); //pincho incio
    this.pinchos.create(1315, 1610, 'pinchos');//pincho saltos
    this.pinchos.create(933, 1610, 'pinchos');//pincho saltos
    this.pinchos.create(800, 1225, 'pinchos'); //pincho cerca de la plataforma movil
    this.pinchos.create(1546, 1225, 'pinchos');//pincho cerca de la plataforma movil
    //--------------------------------- 

    //GENERADOR DE BARRILES Y BALAS
    this.generadorBarriles = new Barriles(this, 135, 820, "right", 2000)
    this.misBalas = this.add.group()
    //----------------------------------

    //ESTANDARTE

    this.add.image(900,1900,"estandarte").setScale(0.6)

    this.add.image(1700,1900,"estandarte").setScale(0.6)

    //----------------------------------
    //---JUGADORES--
	//alert("ESTAS EN EL SCRIPT DEL gnomo")
    this.gnomo = new GnomoOnline(this,   135, 600); //100, 2000 para aparecer abajo izq la elfa aparece en 1970
    this.player = new ElfoOnline(this,  135, 600); //135, 600 en los barriless
    //instancio a ambos, pero solo muevo mi player 
    this.cat  = this.physics.add.group();
  
    
    //---------------------------------


    //---------FISICAS------------
    //FISICAS DEL PLAYER
    this.physics.add.collider(this.player, plataformas);//collisión con los tiles plataformas
    this.physics.add.collider(this.player, limites);//collisión con los tiles límites del mapa
    this.physics.add.collider(this.player, this.platformsMovibles); //collisión con las plataformas móviles
    this.physics.add.collider(this.player,  this.generadorBarriles);
    this.physics.add.collider(this.player, this.doors);
    //this.physics.add.overlap(this.player, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.player, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.collider(this.player, this.box);
    this.physics.add.overlap(this.player, this.pot, this.pickPotion, null, this);
    this.physics.add.overlap(this.player, this.exitDoor, this.canExit, null, this);

    this.player.body.setCollideWorldBounds(true);

    //FISICAS DEL CAT
    this.physics.add.collider(this.cat, plataformas);//collisión con los tiles plataformas
    this.physics.add.collider(this.cat, limites);//collisión con los tiles límites del mapa
    this.physics.add.collider(this.cat, this.platformsMovibles); //collisión con las plataformas móviles
    this.physics.add.collider(this.cat,  this.generadorBarriles);
    this.physics.add.collider(this.cat, this.doors);
   //this.physics.add.overlap(this.cat, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.cat, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.collider(this.cat, this.box);
    this.physics.add.overlap(this.cat, this.exitDoor, this.canExit, null, this);
    this.physics.add.overlap(this.cat, this.desTransformarse, this.destransformarseFunc, null, this); 

    //this.cat.body.setCollideWorldBounds(true);


    //FISICAS DEL OTRO
    this.physics.add.collider(this.gnomo, plataformas); //collisión con los tiles plataformas
    this.physics.add.collider(this.gnomo, limites);//collisión con los tiles límites del mapa
    this.physics.add.collider(this.gnomo, this.platformsMovibles); //collisión con las plataformas móviles
    this.physics.add.collider(this.gnomo,  this.generadorBarriles);
    this.physics.add.collider(this.gnomo, this.doors);
    //this.physics.add.overlap(this.gnomo, this.misMonedas, this.pickCoin, null, this);
    //this.physics.add.overlap(this.gnomo, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.collider(this.gnomo, this.box);
    this.physics.add.overlap(this.gnomo, this.exitDoor, this.canExit, null, this);

    this.gnomo.body.setCollideWorldBounds(true);


    //---------------------------------

    //---------CONTROLES------------
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.control = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);

    this.escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    //---------------------------------

    this.increment = 0;  
  	
    }

    update(time, delta){

        //ACTUALIZACIÓN DE LA CAMARA
        var camaraPosX = (Math.abs(this.player.x+this.gnomo.x)/2);
        var camaraPosY = (Math.abs(this.player.y+this.gnomo.y)/2);
        
        this.cameras.main.centerOn(camaraPosX,camaraPosY);
        //UPDATE INDEPENDIENTEMENTE DE LA CPU --> https://phaser.discourse.group/t/different-game-speed-depending-on-monitor-refresh-rate/7231/4
        var f = (delta / (1000 / 120)); // 1000 ms / 60fps
        this.increment = this.increment + (2 * f);
    
        if (this.increment > 32) {

        //--------------------MOVIMIENTO PLAYERS------------------------------------- 
    	this.player.move(); //MUEVO AL ELFO
    						
			stompClient.send("/game/setPosElfo", //Envío la posicion del elfo al servidor
	 		{},
			JSON.stringify({x: this.player.x, y: this.player.y})
	 		)
	 		
            if(posGnomo){ //RECIBO EL MOVIMIENTO DEL GNOMO
			 	this.gnomo.actualizarGnomo(posGnomo.x, posGnomo.y); //Llamo a actualizar Gnomo --> método especialmente creado para esto, moverlo con una pos que nos den
			}
		//------------------------------------------------------------------------------------- 
		//----------------------COMPRUEBO SI HA MUERTO----------------------------------------
            this.die(); 
    	//------------------------------------------------------------------------------------- 
        //----------------------CAMBIOS DE UNA VEZ----------------------------------------
            if(isDirty){ //cambios que solo quiero notificar una vez
				this.actStateByServerInfo();
				isDirty = false;
			}
		//------------------------------------------------------------------------------------- 
        //------------------------COMPROBANDO LAS CAJAS -----------------------------------------
            for(var i = 0; i < this.box.getChildren().length; i++){
                var box = this.box.getChildren()[i];
                box.stop();
    
                if(this.isColliding(this.gnomo, box, 50,110)){
                    this.gnomo.canJump = true;
                }
            }
        //------------------------------------------------------------------------------------- 
        
        //------------------------MOVIMIENTO DE LA PLATAFORMA----------------------------------
        	/*Esta información no se pasa al servidor, porque al ambos empezar a la vez, el movimiento debería ser el mismo. 
        	Además, como va independientemente de la CPU, no debería generar desfase */
            for(var i = 0; i < this.platformsMovibles.getChildren().length; i++){
                var plat = this.platformsMovibles.getChildren()[i];
                plat.update();
            }
        //------------------------------------------------------------------------------------- 
        //------------------------GESTIÓN DEL BARRIL Y BALAS-----------------------------------
            /*Esta información no se pasa al servidor, porque al ambos empezar a la vez, el movimiento debería ser el mismo. 
        	Además, como va independientemente de la CPU, no debería generar desfase */
            this.generadorBarriles.update(this.increment);
    
            for(var i = 0; i < this.misBalas.getChildren().length; i++){
                if(this.isColliding(this.player, this.misBalas.getChildren()[i], 50, 50)){
                    
                    this.resetGame();
                }
    
               this.misBalas.getChildren()[i].kill();
            }
         //------------------------------------------------------------------------------------- 
    
         //-----------------------GESTION DE LAS PALANCAS--------------------------------------
            //RECORRO TODOS Y ACTIVO SOLO AQUELLAS SOBRE LAS QUE ESTÉ ENCIMA
            //Comprobaré eso comprobando por cada palanca si el personaje se encuentra en la misma x y en la misma y con una diferencia de +-size
        
            for(var i = 0; i < this.misPalancas.getChildren().length; i++){
                    //Método de colisión por caja
                    if(this.isColliding(this.player, this.misPalancas.getChildren()[i], 50, 100)){
                        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
                            this.misPalancas.getChildren()[i].animarPalanca();
                            this.misPalancas.getChildren()[i].activarPalanca(); //activo la palanca
                            
                            //Envío esta info al servidor, para que le otro usuario sepa qué palanca es. 
                            //Puesto que tienene el mismo array, envío solo un int, y luego ejecuto esa pos en el array
                            stompClient.send("/game/actualizarPalancas", 
                            	{},
								i
	 						)
                            
                         }
                    }
            }
            //------------------------------------------------------------------------------------- 
            
           //-----------------------GESTION DE MONEDAS---------------------------------------------- (como las palancas)
          for(var i = 0; i < this.misMonedas.getChildren().length; i++){
                if(this.isColliding(this.player, this.misMonedas.getChildren()[i], 50, 50))
                {
                    //this.scene.get("Tiempo_Monedas").updateCount();
                    //this.misMonedas.getChildren()[i].pickUp()
                    
                    stompClient.send("/game/actualizarMonedas", 
                          {},
						   i
	 				)  
                }
            }
            //------------------------------------------------------------------------------------- 
            //---------------------------OTRAS COMPROBACIONES--------------------------------------
            if(this.escape.isDown){//pausa
                this.pauseGame()
            }
            
            if(reiniciar){//método para reiniciar
				this.MiMusicaBase.pause();
				this.scene.start("TutorialLevelOnlineElfo");
				reiniciar = false;
			}
            
            if(gameOver){ //método para perder
				 this.scene.start("GameOver",{pantalla: "TutorialLevelOnlineElfo"});
				  gameOver = false;
			}
			
			if(amigoDesconectado){
				this.MiMusicaBase.pause();
				this.scene.pause("Tiempo_Monedas")
				this.scene.sendToBack("Tiempo_Monedas")
				

				setTimeout(() => {
					this.scene.stop("TutorialLevelOnlineElfo");
					this.scene.bringToTop('StartScreen');
  				 	 this.scene.start("StartScreen",{sonido : this.sonido, username : nombreDeUsuario});
  				 	 socket.close();
				}, 1000);
			}
            
            
            this.increment = this.increment - 32;
        };
    }
   	//---------------------------PAUSE MENU--------------------------------------
        pauseGame(){
            this.scene.bringToTop("PauseMenu") //mostramos sobre todas el menu de pausa
            this.scene.run('PauseMenu', {sonido: this.sonido, pantalla: "TutorialLevelOnlineElfo",username:this.username}) //y lo ejecutamos
            this.MiMusicaBase.pause();
        }
    //--------------------------------------------------------------------------
    //---------------------------COMRPOBACIONES DEL DIE--------------------------------------

        die(){
            if(this.gnomo.y>3900 || this.player.y>3900 || this.isTooFar()){
                this.resetGame();
            }
        }
    
        isTooFar(){
            var itIs = false;
            if(Math.abs(this.player.x - this.gnomo.x)> 1300){
                itIs=true;
            }
            if(Math.abs(this.player.y - this.gnomo.y)> 650){
                itIs=true;
            }
            return itIs;
        }
     //--------------------------------------------------------------------------
    //-----------------------------GAME OVER--------------------------------------
        resetGame(){
	 		stompClient.send("/game/gameOver",  //envia un mensaje al servidor de que ha muerto
	 			{},
				true
	 		)
            
        }
  	//--------------------------------------------------------------------------       
     //-----------------------------MUERTE POR PINCHOS--------------------------------------
        pinchosDeath(char){
            char.setTint(0xff0000)
            //this.player.setTint(0xff0000)
    
            //this.gnomo.body.setVelocityY(-100);
            char.body.setVelocityY(-400);
            
            setTimeout(()=>{
                //this.scene.start("GameOver",{pantalla: "TutorialLevelOnlineElfo"});
                
             this.resetGame();
            }, 200);
    
        }
    
        
    
     //-----------------------------ELFO-GATO (NOT IMPLEMENTED)--------------------------------------
        pickPotion(){
           	this.player.hacerMetamorfosis();
            this.pot.destroy();
            this.VivaElVino.play();      
        }
    
        destransformarseFunc(){
            this.player.deshacerMetamorfosis();
            this.desTransformarse.destroy();
            this.IaMariano.play();
        }
		//--------------------------------------------------------------------------       
		//-----------------------A WAY OUT----------------------------------------       
        canExit(){
        
             if(this.isColliding(this.player, this.exitDoor, 50, 50))
            {
                //this.scene.start("Victory",{pantalla: "TutorialLevelOnlineElfo"});
                
                
                stompClient.send("/game/victoryElfo", //llamar a un método con parámetros (es una string basic)
	 				{},
	 				true
	 			)
	 			
	 			if(victoryElfo && victoryGnomo){
					 this.scene.start("Victory",{pantalla: "TutorialLevelOnlineElfo"});
				 }
                
            }
            else{
				stompClient.send("/game/victoryElfo", //llamar a un método con parámetros (es una string basic)
	 				{},
	 				false
	 			)
			}

        }
    //--------------------------------------------------------------------------       
    //-------------------------MÉTODOS AUXILIARES-------------------------------     
    //--------------------------------------------------------------------------       
    //------------------------SISTEMA DE COLISIÓN POR CAJA----------------------  
        isColliding(player, object, sizeX, sizeY){
    
            //Con este método simplificamos si el personaje está encima o no, puesto que lo utilizamos tanto para recoger monedas como para mover palancas
            //en resumen, recibe un personaje y un objeto y un sizex, sizey (que no es más que el tamaño de la colisión)
            //luego comprueba que el personaje esté entre el objeto +- ese size tanto en las X como en las Y, si está devolverá true --> se gestiona la colision
            var isColliding = false;
            var objectX = object.x;
            var objectY = object.y;
    
            var pX = player.x;
            var pY = player.y;
    
            //Método de colisión por caja
            if(pX < objectX+sizeX && 
                pX+sizeX > objectX && 
                pY < objectY+sizeY && 
                pY+sizeY > objectY)
            {
                isColliding = true;
            }
            return isColliding;
        }
        
        //--------------------------------------------------------------------------   
		 //-----------------------------EJECUTAR EL SONIDO BIEN--------------------------   
        checkSound(){
            if(this.sonido){
                this.MiMusicaBase.resume();
            }
            else{
                this.MiMusicaBase.pause();
            }
        }

        setSound(sound){
            this.sonido = sound;
        }

        getSound(){
            return this.sonido;
        }
         //------------------INFORMACIÓN DEL SERVER QUE QUIERO QUE SE HAGA UNA VEZ------------------------   
		//cosas que quiero actualizar una vez si ha habido un cambio --> quitamos trabajo a la CPU
        //se si hay 10 cosas, se comrpobaran las 10 cosas, y solo se harán aquellas con un cambio
        actStateByServerInfo(){
			
			//actualizo palancas si ha habido un cambio
			if(palancaModificada != -1){ //valor centinela, si es -1, es que no hay cambio
				this.misPalancas.getChildren()[palancaModificada].animarPalanca();
                this.misPalancas.getChildren()[palancaModificada].activarPalanca(); //activo la palanca
                palancaModificada =-1
			}	
			
			if(monedaModificada != -1){ //valor centinela, si es -1, es que no hay cambio
				this.scene.get("Tiempo_Monedas").updateCount();
                this.misMonedas.getChildren()[monedaModificada].pickUp()
                monedaModificada =-1
			}	
		}
}





 