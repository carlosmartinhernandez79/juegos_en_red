class GnomoOnline extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"enano");

        this.gnomo = scene.add.existing(this);

        this.gnomo.scene.physics.world.enableBody(this);

        this.wasd = scene.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D', e: "E", q: "Q"});

        this.body.setCollideWorldBounds(true);

        this.SonidoSalto = this.scene.sound.add("Sonido_Salto");

        this.canJump = true;
        
        


        //ANIMATIONS DEL MUÑECO
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('enano', { start: 0, end: 15 }),
            frameRate: 20,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'enano', frame: 16 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'enano_jump',
            frames: this.anims.generateFrameNumbers('enano', { start: 17, end: 37 }),
            frameRate: 1
        });

        this.anims.create({
            key: 'mini_enano',
            frames: this.anims.generateFrameNumbers('enano', { start: 38, end: 58 }),
            frameRate: 1
        });
    }
    

    move(){
		
        //-------MOVIMIENTO GNOMO-------
        if (this.wasd.left.isDown)
        {
            this.body.setVelocityX(-400);

            this.gnomo.flipX = true;
        
            this.gnomo.anims.play("walk", true);
        }
        else if (this.wasd.right.isDown)
        {
            this.body.setVelocityX(400);
           
            this.gnomo.flipX = false;

            this.gnomo.anims.play('walk', true);
        }
        else
        {
            this.body.setVelocityX(0);
        
            this.gnomo.anims.play('turn');
        }
        
        if (this.wasd.up.isDown && this.canJump)//this.body.touching.down ) //
        {
            this.SonidoSalto.play();

            this.gnomo.anims.play('enano_jump', true);

            this.body.setVelocityY(-600);
            this.canJump = false;            
        }
        else if(this.gnomo.body.blocked.down){ //this.elfo.body.blocked.down funciona con los tiles. El isTouching no
            this.canJump = true;
        }

        //PREGUNTARLE ESTO
        if (this.wasd.q.isDown && this.gnomo.scale == 0.5)
        {
            this.gnomo.setPosition(this.gnomo.x,this.gnomo.y-30); //subirle el tamaño del sprite
            //this.body.setVelocityY(-300);
            this.gnomo.setScale(1);

            this.gnomo.anims.play('mini_enano', true);
        }

       if (this.wasd.e.isDown && this.gnomo.scale == 1)
        {     
            this.gnomo.setScale(0.5);

            this.gnomo.anims.play('mini_enano', true);
        }   
        
    }
}
