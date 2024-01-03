class TutorialLevel extends Phaser.Scene{
    constructor(){
        super({key: "TutorialLevel"});
    }
    preload()
    {
        console.log("TUTORIALLEVEL")
       
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
	    this.interface = this.scene.run('Tiempo_Monedas')
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
    this.pinchos.create(808, 1225, 'pinchos'); //pincho cerca de la plataforma movil
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

    this.gnomo1 = new Gnomo(this,  135, 600 ); //100, 2000 para aparecer abajo izq la elfa aparece en 1970
    this.elfo = new Elfo(this, 135, 600); //135, 600 en los barriles
    this.cat  = this.physics.add.group();
    //---------------------------------


    //---------FISICAS------------
    //FISICAS DEL GNOMO
    this.physics.add.collider(this.gnomo1, plataformas);//collisión con los tiles plataformas
    this.physics.add.collider(this.gnomo1, limites);//collisión con los tiles límites del mapa
    this.physics.add.collider(this.gnomo1, this.platformsMovibles); //collisión con las plataformas móviles
    this.physics.add.collider(this.gnomo1,  this.generadorBarriles);
    this.physics.add.collider(this.gnomo1, this.doors);
    this.physics.add.overlap(this.gnomo1, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.gnomo1, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.collider(this.gnomo1, this.box);
    this.physics.add.overlap(this.gnomo1, this.exitDoor, this.canExit, null, this);

    this.gnomo1.body.setCollideWorldBounds(true);

    //FISICAS DEL CAT
    this.physics.add.collider(this.cat, plataformas);//collisión con los tiles plataformas
    this.physics.add.collider(this.cat, limites);//collisión con los tiles límites del mapa
    this.physics.add.collider(this.cat, this.platformsMovibles); //collisión con las plataformas móviles
    this.physics.add.collider(this.cat,  this.generadorBarriles);
    this.physics.add.collider(this.cat, this.doors);
    this.physics.add.overlap(this.cat, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.cat, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.collider(this.cat, this.box);
    this.physics.add.overlap(this.cat, this.exitDoor, this.canExit, null, this);
    this.physics.add.overlap(this.cat, this.desTransformarse, this.destransformarseFunc, null, this); 

    //this.cat.body.setCollideWorldBounds(true);


    //FISICAS DEL ELFO
    this.physics.add.collider(this.elfo, plataformas); //collisión con los tiles plataformas
    this.physics.add.collider(this.elfo, limites);//collisión con los tiles límites del mapa
    this.physics.add.collider(this.elfo, this.platformsMovibles); //collisión con las plataformas móviles
    this.physics.add.collider(this.elfo,  this.generadorBarriles);
    this.physics.add.collider(this.elfo, this.doors);
    this.physics.add.overlap(this.elfo, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.elfo, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.overlap(this.elfo, this.pot, this.pickPotion, null, this);
    this.physics.add.collider(this.elfo, this.box);
    this.physics.add.overlap(this.elfo, this.exitDoor, this.canExit, null, this);

    this.elfo.body.setCollideWorldBounds(true);


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
        //console.log("X: " + this.gnomo1.x + " Y: "+ this.gnomo1.y)
    
        var camaraPosX = (Math.abs(this.elfo.x+this.gnomo1.x)/2);
        var camaraPosY = (Math.abs(this.elfo.y+this.gnomo1.y)/2);
        
        this.cameras.main.centerOn(camaraPosX,camaraPosY);
        //UPDATE INDEPENDIENTEMENTE DE LA CPU --> https://phaser.discourse.group/t/different-game-speed-depending-on-monitor-refresh-rate/7231/4
        var f = (delta / (1000 / 120)); // 1000 ms / 60fps
        this.increment = this.increment + (2 * f);

        //console.log("Incremento: " + this.increment)
        //console.log("f : " + f)
    
        if (this.increment > 32) {
            

            this.gnomo1.move();
            this.elfo.move();

            this.die(); //check si han muerto constantemetne
    
            //COMPROBANDO LAS CAJAS 
        
            for(var i = 0; i < this.box.getChildren().length; i++){
                var box = this.box.getChildren()[i];
                box.stop();
    
                if(this.isColliding(this.gnomo1, box, 50,110)){
                    this.gnomo1.canJump = true;
                }
            }
        
        
            //MOVIMIENTO DE LA PLATAFORMA
            for(var i = 0; i < this.platformsMovibles.getChildren().length; i++){
                var plat = this.platformsMovibles.getChildren()[i];
                plat.update();
            }
            //-------------------------
            //GESTIÓN DEL BARRIL Y BALAS
            this.generadorBarriles.update(this.increment);
    
            for(var i = 0; i < this.misBalas.getChildren().length; i++){
                if(this.isColliding(this.gnomo1, this.misBalas.getChildren()[i], 50, 50)){
                    
                    this.resetGame();
                }
    
                else if(this.isColliding(this.elfo, this.misBalas.getChildren()[i], 50, 50)){
                
                    this.resetGame();
                }
    
               this.misBalas.getChildren()[i].kill();
            }
            //-------------------------
    
            //GESTION DE LAS PALANCAS
            //RECORRO TODOS Y ACTIVO SOLO AQUELLAS SOBRE LAS QUE ESTÉ ENCIMA
            //Comprobaré eso comprobando por cada palanca si el personaje se encuentra en la misma x y en la misma y con una diferencia de +-size
        
            for(var i = 0; i < this.misPalancas.getChildren().length; i++){
                    //Método de colisión por caja
                    if(this.isColliding(this.gnomo1, this.misPalancas.getChildren()[i], 50, 100)){
                        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
                            this.misPalancas.getChildren()[i].animarPalanca();
                            this.misPalancas.getChildren()[i].activarPalanca(); //activo la palanca
                         }
                    }
        
                    else if(this.isColliding(this.elfo, this.misPalancas.getChildren()[i], 50, 100)){
                        
                        if(Phaser.Input.Keyboard.JustDown(this.control)){

                        this.misPalancas.getChildren()[i].animarPalanca();
                        this.misPalancas.getChildren()[i].activarPalanca(); //activo la palanca
                        }
                    }
            }
            
            if(this.escape.isDown){
                this.pauseGame()
            }
            this.increment = this.increment - 32;
        };
    }
    
        pauseGame(){
            this.scene.bringToTop("PauseMenu") //mostramos sobre todas el menu de pausa
           this.scene.run('PauseMenu', {sonido: this.sonido, pantalla: "TutorialLevel"}) //y lo ejecutamos
            this.scene.pause(); //pausamos el resto de escenas y la musica
            this.scene.pause("Tiempo_Monedas");
            this.MiMusicaBase.pause();
        }
    
        die(){
            if(this.elfo.y>3900 || this.gnomo1.y>3900 || this.isTooFar()){
                this.resetGame();
            }
        }
    
        isTooFar(){
            var itIs = false;
            if(Math.abs(this.gnomo1.x - this.elfo.x)> 1300){
                itIs=true;
            }
            if(Math.abs(this.gnomo1.y - this.elfo.y)> 650){
                itIs=true;
            }
            return itIs;
        }
    
        resetGame(){
            //this.scene.run(Tiempo_Monedas)
            this.scene.start("GameOver",{pantalla: "TutorialLevel"});
        }
    
        pinchosDeath(char){
            char.setTint(0xff0000)
            //this.gnomo1.setTint(0xff0000)
    
            //this.elfo.body.setVelocityY(-100);
            char.body.setVelocityY(-400);
            
            setTimeout(()=>{
                this.scene.start("GameOver",{pantalla: "TutorialLevel"});
            }, 200);
    
        }
    
    
        pickCoin(){
            for(var i = 0; i < this.misMonedas.getChildren().length; i++){
                if(this.isColliding(this.gnomo1, this.misMonedas.getChildren()[i], 50, 50) || this.isColliding(this.elfo, this.misMonedas.getChildren()[i], 50, 50))
                {
                    this.scene.get("Tiempo_Monedas").updateCount();
                    this.misMonedas.getChildren()[i].pickUp()
                }
            }
        }
    
        pickPotion(){
            this.elfo.hacerMetamorfosis();
            this.pot.destroy();
            this.VivaElVino.play();      
        }
    
        destransformarseFunc(){
            this.elfo.deshacerMetamorfosis();
            this.desTransformarse.destroy();
            this.IaMariano.play();
        }

        canExit(){
        
            if(this.isColliding(this.gnomo1, this.exitDoor, 50, 50) && this.isColliding(this.elfo, this.exitDoor, 50, 50))
            {
                this.scene.start("Victory",{pantalla:"TutorialLevel"});
            }

        }
    
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

        checkSound(){
            if(this.sonido){
                this.MiMusicaBase.resume();
                console.log("hola from checksound")
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
}