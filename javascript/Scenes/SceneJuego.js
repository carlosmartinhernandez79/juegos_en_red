/*
TO DO LIST:

-Clase Elfo 
-Clase Gnomo

-Que puedan morir
-Que detecten pinchos/x/y --> y que se mueran

Funcionalidades de cada personaje
Elfo doble salto
Gnomo se hace pequeño 

Que se mueran cuando uno de los dos salga de camara

*/

class SceneJuego extends Phaser.Scene{
    constructor(){
        super({key: "SceneJuego"});
       
    }
    
    preload(){
        console.log("Se ha cargado la escena del juego")

         //ANIMATIONS DEL MUÑECO
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

        this.speed = 400;
        this.jump= 600;
    }

    create(){
    //this.add.text(720, 20, "Level1", {font: "25px Arial", fill: "black"})    

    //CARGAMOS INTERFACES
    this.count = 0
	this.interface = this.scene.run('Tiempo_Monedas')
    this.scene.bringToTop('Tiempo_Monedas') //la ponemos encima de todas
    this.MiMusicaBase = this.sound.add("Musica_Base");
    this.VivaElVino = this.sound.add("Viva_El_Vino");
    this.MusicaHasPerdido = this.sound.add("Musica_Has_Perdido");
    this.SonidoMoneda = this.sound.add("Sonido_Moneda");
    this.SonidoPalanca = this.sound.add("Sonido_Palanca");
    this.MiMusicaBase.loop = true;
    this.MiMusicaBase.play();
    window.myScene = this;


    //---------------------------------
    //CARACTERISTICAS DEL MUNDO
    this.physics.world.bounds.width = 4000;
    this.physics.world.bounds.height = 4000;

    var platforms;
    
    this.cameras.main.setBounds(0,0,4000,4000);
    //---------------------------------

    //---PLATAFORMAS MOVIBLES---
    this.platformsMovibles = this.add.group(); //creo un grupo de plataformasMovibles
    //creo dos instancia, da igual donde las guarde, porque se gestionará su funcionaldidad desde el grupo platformsMovibles (se añaden desde la propia clase)
    this.platMovible = new PlataformaMovil(this, 50, 3500,"horizontal", 375, 0, 200); 
    this.platMovible2 = new PlataformaMovil(this, 1200, 3800,"vertical", 3800, 3500, 0);
    //this.platMovible3 = new PlataformaMovil(this, 1200, 3800,"vertical", 3800, 3500, 200);
    //---------------------------------

    //--PUERTAS--
    this.doors = this.add.group()
    this.puerta1 = new Puerta(this, 1500, 3500);
    //---------------------------------

    //--PALANCAS--
    this.misPalancas = this.add.group();
    this.p = new Palanca(this, 1200, 3700, this.platMovible2); //Instanciar las palancas enviándolas el objeto que quieren activar cuando las activen
    this.p = new Palanca(this, 1500, 3400, this.puerta1); //Instanciar las palancas enviándolas el objeto que quieren activar cuando las activen
    //---------------------------------

    //---PLATAFORMAS---
    platforms = this.physics.add.staticGroup();
    platforms.setOrigin(0,1);
    platforms.create(0, 3800, 'ground').setScale(10,2).refreshBody();
    //platforms.create(50, 250, 'ground');
    platforms.create(4000, 3800, 'ground');
    platforms.create(140, 3300, 'ground');
    //---------------------------------

    //---POCION---
    this.pot = this.physics.add.image(300,3700,"pocion")
    this.pot.body.setAllowGravity(false);
    this.pot.setScale(0.3)

    this.desTransformarse = this.physics.add.image(900,3700,"pocion")
    this.desTransformarse.body.setAllowGravity(false);
    this.desTransformarse.setVisible(false);
    this.desTransformarse.setScale(0.3)

    //----------------------------

    //---BOX---
    this.box = this.physics.add.group()
    this.boxi = new Box(this,600,3700, "box")
    this.boxi = new Box(this,800,3700, "box")
    
    this.physics.add.collider(this.box, platforms);
    this.physics.add.collider(this.box, this.box);

    //----------------------------


    //---------MONEDAS------------
    this.misMonedas = this.physics.add.group({
        key: 'moneda',
        repeat: 11,
        setXY: { x: 50, y: 3700, stepX: 350 }
    });
    
    this.misMonedas.children.iterate(function (child) {

        child.setScale(0.13);
        child.body.setAllowGravity(false) //workds;
    
    });
    //--------------------------------- 

    //PINCHOS
    this.pinchos = this.physics.add.staticGroup();
    this.pinchos.create(140, 3745, 'pinchos');
    //--------------------------------- 

    //---JUGADORES--
    this.gnomo1 = new Gnomo(this, 400, 3600);
    this.elfo = new Elfo(this, 700, 3600);
    //---------------------------------

    //---------FISICAS------------
    //this.cameras.main.startFollow(this.playerR);
    //FISICAS DEL GNOMO
    this.physics.add.collider(this.gnomo1, platforms);
    this.physics.add.collider(this.gnomo1, platforms);
    this.physics.add.collider(this.elfo, this.gnomo1);
    this.physics.add.collider(this.gnomo1, this.platformsMovibles);
    this.physics.add.collider(this.gnomo1, this.doors);
    this.physics.add.overlap(this.gnomo1, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.gnomo1, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.collider(this.gnomo1, this.box);
    //this.physics.add.overlap(this.gnomo1, this.misPalancas, this.aux()); 
    this.gnomo1.body.setCollideWorldBounds(true);


    //FISICAS DEL ELFO
    this.physics.add.collider(this.elfo, platforms);
    this.physics.add.collider(this.elfo, platforms);
    this.physics.add.collider(this.elfo, this.gnomo1);
    this.physics.add.collider(this.elfo, this.platformsMovibles);
    this.physics.add.collider(this.elfo, this.doors);
    this.physics.add.overlap(this.elfo, this.misMonedas, this.pickCoin, null, this);
    this.physics.add.overlap(this.elfo, this.pinchos, this.pinchosDeath, null, this);
    this.physics.add.overlap(this.elfo, this.pot, this.pickPotion, null, this);
    this.physics.add.overlap(this.elfo, this.desTransformarse, this.destransformarseFunc, null, this); 
    this.physics.add.collider(this.elfo, this.box);
    //this.physics.add.overlap(this.elfo, this.misPalancas, this.aux()); 


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

    var camaraPosX = (Math.abs(this.elfo.x+this.gnomo1.x)/2);
    var camaraPosY = (Math.abs(this.elfo.y+this.gnomo1.y)/2);

    this.cameras.main.centerOn(camaraPosX,camaraPosY);

    //MOVIMIENTO DEDL PERSONAJE INDEPENDIENTEMENTE DE LA CPU --> https://phaser.discourse.group/t/different-game-speed-depending-on-monitor-refresh-rate/7231/4
    var f = (delta / (1000 / 120)); // 1000 ms / 60fps
    this.increment = this.increment + (2 * f);

    if (this.increment > 32) {
		this.increment = this.increment - 32;
		this.gnomo1.move();
        this.elfo.move();
	};

    this.die(); //check si han muerto constantemetne

    //COMPROBANDO LAS CAJAS 

    for(var i = 0; i < this.box.getChildren().length; i++){
        var box = this.box.getChildren()[i];
      
       box.stop();
    }


    //MOVIMIENTO DE LA PLATAFORMA
    for(var i = 0; i < this.platformsMovibles.getChildren().length; i++){
        var plat = this.platformsMovibles.getChildren()[i];
        plat.update();
    }

    //GESTION DE LAS PALANCAS
    //RECORRO TODOS Y ACTIVO SOLO AQUELLAS SOBRE LAS QUE ESTÉ ENCIMA
    //Comprobaré eso comprobando por cada palanca si el personaje se encuentra en la misma x y en la misma y con una diferencia de +-size

    for(var i = 0; i < this.misPalancas.getChildren().length; i++){
            //Método de colisión por caja
            if(this.isColliding(this.gnomo1, this.misPalancas.getChildren()[i], 50, 100)){
                if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
                    //play palanca animation
                    this.misPalancas.getChildren()[i].activarPalanca(); //activo la palanca
                    this.SonidoPalanca.play();
                 }
            }

            else if(this.isColliding(this.elfo, this.misPalancas.getChildren()[i], 50, 100)){
                if(Phaser.Input.Keyboard.JustDown(this.control)){
                //play palanca animation
                this.misPalancas.getChildren()[i].activarPalanca(); //activo la palanca
                this.SonidoPalanca.play();
                }
            }
    }

    if(this.escape.isDown){
        this.pauseGame()
    }
    }


    pauseGame(){
        console.log("Pausar")
        this.scene.run('PauseMenu')
        this.scene.pause();
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
        this.scene.start("GameOver");
    }

    pinchosDeath(char){
        char.setTint(0xff0000)
        //this.gnomo1.setTint(0xff0000)

        //this.elfo.body.setVelocityY(-100);
        char.body.setVelocityY(-400);
        
        setTimeout(()=>{
            this.scene.start("GameOver");
        }, 200);

    }


    pickCoin(){
        for(var i = 0; i < this.misMonedas.getChildren().length; i++){
            if(this.isColliding(this.gnomo1, this.misMonedas.getChildren()[i], 50, 50) || this.isColliding(this.elfo, this.misMonedas.getChildren()[i], 50, 50))
            {
                this.scene.get("Tiempo_Monedas").updateCount();
                this.misMonedas.getChildren()[i].destroy();
                this.SonidoMoneda.play();
            }
        }
    }

    pickPotion(){
        this.elfo.hacerMetamorfosis();
        this.pot.destroy();
        this.VivaElVino.play();      
    }

    destransformarseFunc(){
        this.elfo.hacerMetamorfosis();
        this.desTransformarse.destroy();
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
}

