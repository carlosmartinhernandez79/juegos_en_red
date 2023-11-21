

class SceneJuego extends Phaser.Scene{
    constructor(){
        super({key: "SceneJuego"});
    }

    preload(){
        console.log("Se ha cargado la escena del juego")
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
    platforms.create(750, 220, 'ground');

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

    //---------FISICAS------------
    this.playerR.setCollideWorldBounds(true);
    this.playerA.setCollideWorldBounds(true);
    this.playerA.setBounce(0.3);
    this.playerR.setBounce(0.3);

    this.physics.add.collider(this.playerR, platforms);
    this.physics.add.collider(this.playerA, platforms);
    this.physics.add.collider(this.playerA, this.playerR);

    this.physics.add.overlap(this.playerA, this.palanca, tocarPalanca, null, this);

    //this.cameras.main.startFollow(this.playerR);

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

    this.palanca = new Palanca(this, 1100, window.innerHeight-100); //forma de instanciar las cossa
    
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.wasd = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });
    this.flechas = this.input.keyboard.createCursorKeys();


    }

    update(time, delta){
    
    var speed = 400;
    var jump= 600;

    //ACTUALIZACIÓN DE LA CAMARA

    var camaraPosX = (Math.abs(this.playerA.x+this.playerR.x)/2);
    var camaraPosY = (Math.abs(this.playerA.y+this.playerR.y)/2);

    this.cameras.main.centerOn(camaraPosX,camaraPosY-300);

    //-------MOVIMIENTO PLAYER ROJO-------
    if (this.wasd.left.isDown)
    {
        this.playerR.setVelocityX(-speed);

        //this.playerR.anims.play("left", true);
    }
    else if (this.wasd.right.isDown)
    {
        this.playerR.setVelocityX(speed);
    

        //this.playerR.anims.play('right', true);
    }
    else
    {
        this.playerR.setVelocityX(0);

        //this.playerR.anims.play('turn');
    }

    if (this.wasd.up.isDown && this.playerR.body.touching.down ) //
    {
        this.playerR.setVelocityY(-jump);
    }   
        //-------MOVIMIENTO PLAYER AZUL-------
    if (this.flechas.left.isDown)
    {
        this.playerA.setVelocityX(-speed);

        //player.anims.play('left', true);
    }
    else if (this.flechas.right.isDown)
    {
        this.playerA.setVelocityX(speed);

        //player.anims.play('right', true);
    }
    else
    {
        this.playerA.setVelocityX(0);

        //player.anims.play('turn');
    }

    if (this.flechas.up.isDown && this.playerA.body.touching.down ) //
    {
        this.playerA.setVelocityY(-jump);
    }
        this.aux(); //llamo a la funcion con el this
    }


     aux(){ //creo la funcion DENTRO del propio Scene
        if(this.wasd.up.isDown){
            console.log("hla")
        }
    }

}


function moverPersonajeR(){
//-------MOVIMIENTO PLAYER ROJO-------
if (this.wasd.left.isDown)
{
    this.playerR.setVelocityX(-speed);

    //this.playerR.anims.play("left", true);
}
else if (this.wasd.right.isDown)
{
    this.playerR.setVelocityX(speed);
   

    //this.playerR.anims.play('right', true);
}
else
{
    this.playerR.setVelocityX(0);

    //this.playerR.anims.play('turn');
}

if (this.wasd.up.isDown && this.playerR.body.touching.down ) //
{
    this.playerR.setVelocityY(-jump);
}
}


function moverPersonajeA(){
//-------MOVIMIENTO PLAYER AZUL-------


if (this.flechas.left.isDown)
{
    this.playerA.setVelocityX(-speed);

    //player.anims.play('left', true);
}
else if (flechas.right.isDown)
{
    this.playerA.setVelocityX(speed);

    //player.anims.play('right', true);
}
else
{
    this.playerA.setVelocityX(0);

    //player.anims.play('turn');
}

if (this.flechas.up.isDown && this.playerA.body.touching.down ) //
{
    this.playerA.setVelocityY(-jump);
}

}

function tocarPalanca(){

    if(this.keySpace.isDown){
        //añadir palanca
    //var palanca = new Palanca(this, 1100, window.innerHeight-100); //forma de instanciar las cossa
    console.log("Gola");
    this.palanca.setVisible(false);
    }
}