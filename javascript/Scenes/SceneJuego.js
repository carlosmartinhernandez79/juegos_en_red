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
    this.add.text(720, 20, "Level1", {font: "25px Arial", fill: "black"})

    this.physics.world.bounds.width = 4000;
    this.physics.world.bounds.height = 4000;
    
    var playerR;
    var playerA;
    var platforms;
    
    this.cameras.main.setBounds(0,0,4000,4000);

    //---PLATAFORMAS---
    platforms = this.physics.add.staticGroup();
    platforms.setOrigin(0,1);
    platforms.create(0, config.height, 'ground').setScale(10,2).refreshBody();;
    //platforms.create(50, 250, 'ground');
    platforms.create(750, 200, 'ground');

    //---PLATAFORMAS MOVIBLES---
    this.platformsMovibles = this.add.group(); //creo un grupo de plataformasMovibles

    //creo dos instancia, da igual donde las guarde, porque se gestionará su funcionaldidad desde el grupo platformsMovibles (se añaden desde la propia clase)
    this.platMovible = new PlataformaMovil(this, 50, 200,"horizontal", 375, 0, 200); 
    this.platMovible2 = new PlataformaMovil(this, 1200, 1150,"vertical", (config.height-50), 200, 200);


    //---PLAYER RED---
    //this.playerR = this.physics.add.image(100,100, "playerRojo");

    this.gnomo1 = new Gnomo(this, 400, 400);
    this.physics.add.collider(this.gnomo1, platforms);

    this.elfo = new Elfo(this, 700, 400);

    //this.gnomo1.setBounce(0.3);

    this.playerR = this.physics.add.sprite(100, 450, "dude");
    //this.playerR.setScale(2);

    //---PLAYER BLUE---
    this.playerA = this.physics.add.sprite(window.innerWidth - 170, 110, "dude");//this.physics.add.image(window.innerWidth - 170, 110 , "playerAzul");
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
   // this.playerR.setCollideWorldBounds(true);
    this.playerA.setCollideWorldBounds(true);
    this.playerA.setBounce(0.3);
    //this.playerR.setBounce(0.3);

    this.physics.add.collider(this.playerR, platforms);
    this.physics.add.collider(this.playerA, platforms);
    this.physics.add.collider(this.playerA, this.playerR);

    //--CHOQUE CON LAS PLATSMOVIBLES
    this.physics.add.collider(this.playerA, this.platformsMovibles);
    this.physics.add.collider(this.playerR, this.platformsMovibles);

    //quiero que cuando esté encima, y pulse el espacio, se llame a la función activar palanca de la palanca sobre la que ha pulsado el espacio.
    this.physics.add.overlap(this.playerA, this.palancas, this.aux); 
    this.physics.add.overlap(this.playerR, this.palancas, this.aux); 

    //this.cameras.main.startFollow(this.playerR);

    //FISICAS DEL GNOMO
    this.physics.add.collider(this.gnomo1, platforms);
    this.physics.add.collider(this.gnomo1, platforms);
    this.physics.add.collider(this.playerA, this.gnomo1);
    this.physics.add.collider(this.gnomo1, this.platformsMovibles);
    this.physics.add.overlap(this.gnomo1, this.palancas, this.aux); 

    //FISICAS DEL ELFO
    this.physics.add.collider(this.elfo, platforms);

    }

    update(time, delta){

    //ACTUALIZACIÓN DE LA CAMARA

    var camaraPosX = (Math.abs(this.playerA.x+this.playerR.x)/2);
    var camaraPosY = (Math.abs(this.playerA.y+this.playerR.y)/2);

    this.cameras.main.centerOn(camaraPosX,camaraPosY-300);

    //MOVIMIENTO DEDL PERSONAJE
    this.moverPersonajeA();
    //this.moverPersonajeR();

    this.gnomo1.move();
    this.elfo.move();

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
