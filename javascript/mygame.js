

var config =
{
    width : window.innerWidth,
    height : window.innerHeight,
    backgroundColor : 0xFFC0CB,

   type: Phaser.AUTO,
    
    physics:{
        default: "arcade",
        arcade:{
            gravity:{
                y: 700
            }
        }
    },

    scene: [
        SceneBootLoader,
        SceneJuego
    ]
}

/*var playerR;
var playerA;
var platforms;

var speed = 400;
var jump= 600;


function preload(){
    wasd = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });
    flechas = this.input.keyboard.createCursorKeys();

    this.load.image("playerRojo", "./Images/circuloRojo.png");
    this.load.image("playerAzul", "./Images/circuloAzul.png");
    this.load.image("tree", "./Images/tree.png");
    this.load.image("ground", "./Images/ground.png");
}

function create(){

    //---PLATAFORMAS---
    platforms = this.physics.add.staticGroup();

    platforms.setOrigin(0,1);

    platforms.create(0, window.innerHeight-50, 'ground').setScale(10,2).refreshBody();;
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    
    //---TREE---
    this.tree = this.add.image(window.innerWidth/2, 120 , "tree");
    this.tree.setOrigin(0.5,0);
    this.tree.setScale(0.25);

    //---PLAYER RED---
    this.playerR = this.physics.add.image(100,100, "playerRojo");
    this.playerR.setScale(0.1);

    //---PLAYER BLUE---
    this.playerA = this.physics.add.image(window.innerWidth - 170, 110 , "playerAzul");
    this.playerA.setScale(0.3);

    //---------FISICAS------------
    this.playerR.setCollideWorldBounds(true);
    this.playerA.setCollideWorldBounds(true);
    this.playerA.setBounce(0.3);
    this.playerR.setBounce(0.3);

    this.physics.add.collider(this.playerR, platforms);
    this.physics.add.collider(this.playerA, platforms);
    this.physics.add.collider(this.playerA, this.playerR);
}   

function update(time, delta){
    //-------MOVIMIENTO PLAYER ROJO-------
    if (wasd.left.isDown)
    {
        this.playerR.setVelocityX(-speed);
    
        //player.anims.play('left', true);
    }
    else if (wasd.right.isDown)
    {
        this.playerR.setVelocityX(speed);
       
    
        //player.anims.play('right', true);
    }
    else
    {
        this.playerR.setVelocityX(0);
    
        //player.anims.play('turn');
    }
    
    if (wasd.up.isDown && this.playerR.body.touching.down ) //
    {
        this.playerR.setVelocityY(-jump);
    }


    //-------MOVIMIENTO PLAYER AZUL-------


    if (flechas.left.isDown)
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
    
    if (flechas.up.isDown && this.playerA.body.touching.down ) //
    {
        this.playerA.setVelocityY(-jump);
    }
}*/

var game = new Phaser.Game(config);