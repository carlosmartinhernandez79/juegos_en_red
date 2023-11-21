

class SceneJuego extends Phaser.Scene{
    constructor(){
        super({key: "SceneJuego"});
    }

    preload(){
        console.log("Se ha cargado la escena del juego")

         //ANIMATIONS
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

    this.physics.world.bounds.width = 4000;
    this.physics.world.bounds.height = 4000;
    
    var playerR;
    var playerA;
    var platforms;

    this.cameras.main.setBounds(0,0,4000,4000);

    //---PLATAFORMAS---
    platforms = this.physics.add.staticGroup();
    platforms.setOrigin(0,1);
    platforms.create(0, window.innerHeight-50, 'ground').setScale(100,2).refreshBody();;
    platforms.create(50, 250, 'ground');
    platforms.create(750, 200, 'ground');

    this.platMovible = new PlataformaMovil(this, 50, window.innerHeight-200, 'ground');

    //---TREE---
    this.tree = this.add.image(this.sys.game.config.width/2, 120 , "tree");
    this.tree.setOrigin(0.5,0);
    this.tree.setScale(0.25);


    //---PLAYER RED---
    //this.playerR = this.physics.add.image(100,100, "playerRojo");

    this.playerR = this.physics.add.sprite(100, 450, "dude");
    this.playerR.setScale(2);

    //---PLAYER BLUE---
    this.playerA = this.physics.add.sprite(window.innerWidth - 170, 110, "dude");//this.physics.add.image(window.innerWidth - 170, 110 , "playerAzul");
    this.playerA.setScale(2);

    //--CONTROLES Y PALANCAS--
    this.palanca = new Palanca(this, 1100, window.innerHeight-100); //forma de instanciar las cossa

    this.wasd = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });
    this.flechas = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey("SPACE")


    //---------FISICAS------------
    this.playerR.setCollideWorldBounds(true);
    this.playerA.setCollideWorldBounds(true);
    this.playerA.setBounce(0.3);
    this.playerR.setBounce(0.3);

    this.physics.add.collider(this.playerR, platforms);
    this.physics.add.collider(this.playerA, platforms);
    this.physics.add.collider(this.playerA, this.playerR);

    this.physics.add.collider(this.playerA, this.platMovible);
    this.physics.add.collider(this.playerR, this.platMovible);

    this.physics.add.overlap(this.playerA, this.palanca, this.tocarPalanca); //no fufa idk why
    this.physics.add.overlap(this.playerR, this.palanca, this.tocarPalanca); //same here

    //this.cameras.main.startFollow(this.playerR);

    }

    update(time, delta){

    //ACTUALIZACIÓN DE LA CAMARA

    var camaraPosX = (Math.abs(this.playerA.x+this.playerR.x)/2);
    var camaraPosY = (Math.abs(this.playerA.y+this.playerR.y)/2);

    this.cameras.main.centerOn(camaraPosX,camaraPosY-300);

    this.moverPersonajeA();
    this.moverPersonajeR();
    
    }


    tocarPalanca(){ //creo la funcion DENTRO del propio Scene
        
        if(keySpace.isDown){
            console.log("haha")
        }
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
