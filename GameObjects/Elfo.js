class Elfo extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"dude");

        this.elfo = scene.add.existing(this);

        this.elfo.scene.physics.world.enableBody(this);

        this.elfo.setScale(2);

        this.flechas = scene.input.keyboard.createCursorKeys();

        this.canDoubleJump = 0;


        //const isJumpJustDown = Phaser.Input.Keyboard.JustDown(this.flechas.up)

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

    }
    

    move(){
        //-------MOVIMIENTO elfo-------
        if (this.flechas.left.isDown)
        {
            this.body.setVelocityX(-400);
        
            this.elfo.anims.play("left", true);
        }
        else if (this.flechas.right.isDown)
        {
            this.body.setVelocityX(400);
           
        
            this.elfo.anims.play('right', true);
        }
        else
        {
            this.body.setVelocityX(0);
        
            this.elfo.anims.play('turn');
        }
        
        //this.sp = Phaser.Input.Keyboard.JustDown(this.spacebar)

        //DOBLE SALTO HECHO GRACIAS A: https://www.youtube.com/watch?v=j1Y75isZ1oM
        if (this.flechas.up.isDown && (this.body.touching.down || this.canDoubleJump<=1)) //
        {
            this.body.setVelocityY(-600);
            ++this.canDoubleJump;
            console.log(this.canDoubleJump)

        }  
        if(this.body.touching.down){
            this.canDoubleJump = 0;
        }
    }
}