

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
    this.add.text(720, 20, "Level1", {font: "25px Arial", fill: "black"})

    this.physics.world.bounds.width = 4000;
    this.physics.world.bounds.height = 4000;
    
    var playerR;
    var playerA;
    var platforms;
    var walls;
    
    this.cameras.main.setBounds(0,0,4000,4000);


    // --FONDO--
    let fondo = this.add.image(0, 0, 'background').setOrigin(0, 0);

    //---PLATAFORMAS---
    platforms = this.physics.add.staticGroup();
    platforms.setOrigin(0,1);
    platforms.create(0, window.innerHeight-50, 'ground').setScale(50,2).refreshBody();;
    platforms.create(50, 250, 'ground');
    platforms.create(750, 200, 'ground');

    // -- PAREDES--
    

    //---PLATAFORMAS MOVIBLES---
    this.platformsMovibles = this.add.group(); //creo un grupo de plataformasMovibles

    //creo dos instancia, da igual donde las guarde, porque se gestionará su funcionaldidad desde el grupo platformsMovibles (se añaden desde la propia clase)
    this.platMovible = new PlataformaMovil(this, 50, 1200,"horizontal", 1000, 50, 400); 
    this.platMovible2 = new PlataformaMovil(this, 1200, 1200,"vertical", 1200, 400, 400);

    //---TREE---
    this.tree = this.add.image(this.sys.game.config.width/2, 120 , "tree");
    this.tree.setOrigin(0.5,0);
    this.tree.setScale(0.25);
    //this.tree.sendToBack();


    //---PLAYER RED---
    //this.playerR = this.physics.add.image(100,100, "playerRojo");

    this.playerR = this.physics.add.sprite(100, 450, "dude");
    this.playerR.setScale(2);

    //---PLAYER BLUE---
    this.playerA = this.physics.add.sprite(200, 450, "dude");//this.physics.add.image(window.innerWidth - 170, 110 , "playerAzul");
    this.playerA.setScale(4);

    //--PALANCAS--
    this.palancas = this.add.group();
    this.p = new Palanca(this, 1200, window.innerHeight-300); //forma de instanciar las cossa
    this.p = new Palanca(this, 40, window.innerHeight-300); //forma de instanciar las cossa
    //---CONTROLES---
    this.wasd = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });
    this.flechas = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey("SPACE")


    //---------FISICAS------------
    this.playerR.setCollideWorldBounds(true);
    this.playerA.setCollideWorldBounds(true);
    this.playerA.setBounce(0.05);
    this.playerR.setBounce(0.05);

    this.physics.add.collider(this.playerR, platforms);
    this.physics.add.collider(this.playerA, platforms);
    this.physics.add.collider(this.playerA, this.playerR);

    //--CHOQUE CON LAS PLATSMOVIBLES
    this.physics.add.collider(this.playerA, this.platformsMovibles, this.colisionHandler, null, this);
    this.physics.add.collider(this.playerR, this.platformsMovibles, this.colisionHandler, null, this);
    this.physics.world.checkCollision.down = false;
    //         this.physics.add.collider(this.jugador, this.plataforma, this.colisionHandler, null, this);


    //quiero que cuando esté encima, y pulse el espacio, se llame a la función activar palanca de la palanca sobre la que ha pulsado el espacio.
    this.physics.add.overlap(this.playerA, this.palancas, this.aux); 
    this.physics.add.overlap(this.playerR, this.palancas, this.aux); 

    //this.cameras.main.startFollow(this.playerR);

    }

    colisionHandler(playerA, platformsMovibles) {
        // Verificar si el jugador está encima de la plataforma
        if (playerA.y < platformsMovibles.y) {
            // El jugador está encima de la plataforma, detener el movimiento hacia abajo
            playerA.setVelocityY(0);
        }
    }

    update(time, delta){

    //ACTUALIZACIÓN DE LA CAMARA

    var camaraPosX = (Math.abs(this.playerA.x+this.playerR.x)/2);
    var camaraPosY = (Math.abs(this.playerA.y+this.playerR.y)/2);

    //this.cameras.main.centerOn(camaraPosX,camaraPosY-300);
    this.cameras.main.centerOn(camaraPosX,camaraPosY);

    //MOVIMIENTO DEDL PERSONAJE
    this.moverPersonajeA();
    this.moverPersonajeR();

    //MOVIMIENTO DE LA PLATAFORMA
    for(var i = 0; i < this.platformsMovibles.getChildren().length; i++){
        var plat = this.platformsMovibles.getChildren()[i];
        plat.update();
    }

    //GESTION DE LAS PALANCAS

    }



    aux(){ //creo la funcion DENTRO del propio Scene
       
      console.log("has activado la palanca")

    }

    moverPersonajeR(){
        //-------MOVIMIENTO PLAYER ROJO-------
        if (this.wasd.left.isDown)
        {
            this.playerR.setVelocityX(-this.speed);
        
            this.playerR.anims.play("left", true);
        }
        else if (this.wasd.right.isDown)
        {
            this.playerR.setVelocityX(this.speed);
           
        
            this.playerR.anims.play('right', true);
        }
        else
        {
            this.playerR.setVelocityX(0);
        
            this.playerR.anims.play('turn');
        }
        
        if (this.wasd.up.isDown && this.playerR.body.touching.down ) //
        {
            this.playerR.setVelocityY(-this.jump);
        }
    }

    moverPersonajeA(){
        //-------MOVIMIENTO PLAYER AZUL-------
        
        
        if (this.flechas.left.isDown)
        {
            this.playerA.setVelocityX(-this.speed);
        
            this.playerA.anims.play('left', true);
        }
        else if (this.flechas.right.isDown)
        {
            this.playerA.setVelocityX(this.speed);
        
            this.playerA.anims.play('right', true);
        }
        else
        {
            this.playerA.setVelocityX(0);
        
            this.playerA.anims.play('turn');
        }
        
        if (this.flechas.up.isDown && this.playerA.body.touching.down ) //
        {
            this.playerA.setVelocityY(-this.jump);
        }
        
    }

}
