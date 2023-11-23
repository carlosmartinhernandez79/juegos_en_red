class Gnomo extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"dude");

        this.gnomo = scene.add.existing(this);

        this.gnomo.scene.physics.world.enableBody(this);

        this.gnomo.setScale(2);

        this.wasd = scene.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D', e: "E", q: "Q"});

        this.body.setCollideWorldBounds(true);

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
        //-------MOVIMIENTO GNOMO-------
        if (this.wasd.left.isDown)
        {
            this.body.setVelocityX(-400);
        
            this.gnomo.anims.play("left", true);
        }
        else if (this.wasd.right.isDown)
        {
            this.body.setVelocityX(400);
           
        
            this.gnomo.anims.play('right', true);
        }
        else
        {
            this.body.setVelocityX(0);
        
            this.gnomo.anims.play('turn');
        }
        
        if (this.wasd.up.isDown && this.body.touching.down ) //
        {
            this.body.setVelocityY(-600);
        }

        //PREGUNTARLE ESTO
        if (this.wasd.q.isDown && this.gnomo.scale == 1)
        {
            this.gnomo.setPosition(this.gnomo.x,this.gnomo.y-20); //subirle el tamaño del sprite
            this.gnomo.setScale(2);
        }

       if (this.wasd.e.isDown && this.gnomo.scale == 2)
        {     
            this.gnomo.setScale(1);
        }
      
       
    }
}
