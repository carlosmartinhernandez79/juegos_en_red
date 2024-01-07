 
 class CatOnline extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"cat");

        this.scenav = scene;

        this.cat = scene.add.existing(this);

        this.cat.scene.physics.world.enableBody(this);

        this.SonidoSalto = this.scene.sound.add("Sonido_Salto");

        this.scene.cat.add(this.cat)

        this.cat.body.setCollideWorldBounds(true);

        this.wasd = scene.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D', e: "E", q: "Q"});

    //ANIMATIONS DEL GATO
  this.anims.create({
    key: 'walkCat',
    frames: this.anims.generateFrameNumbers('cat', { start: 22, end: 28 }),
    frameRate: 10,
    repeat: -1
});


this.anims.create({
    key: 'iddle',
    frames: [ { key: 'cat', frame: 5 } ],
    frameRate: 20
});

    }

    move(){
        if (this.wasd.left.isDown)
        {
            this.body.setVelocityX(-400);

            this.cat.flipX = true;
        
            this.cat.anims.play("walkCat", true);
        }
        else if (this.wasd.right.isDown)
        {
            this.body.setVelocityX(400);

            this.cat.flipX = false;
            
            this.cat.anims.play('walkCat', true);
        }
        else
        {
            this.body.setVelocityX(0);
        
            this.cat.anims.play('iddle');
        }

        if (this.wasd.up.isDown && this.body.blocked.down ) //
        {
            this.body.setVelocityY(-600);
        }
    }
     moveServer(newX, newY){
		
		
		 if(this.cat.x <= newX + 10  && this.cat.x >= newX-10)
        {
            this.body.setVelocityX(0);
        
            this.cat.anims.play('iddle');
        }
		
		else if (this.cat.x >newX )
        {
            this.body.setVelocityX(-400);

            this.cat.flipX = true;
        
            this.cat.anims.play("walkCat", true);
        }
        else if (this.cat.x < newX)
        {
            this.body.setVelocityX(400);

            this.cat.flipX = false;
            
            this.cat.anims.play('walkCat', true);
        }


        if (this.cat.y > newY +107 && this.cat.body.blocked.down) //
        {
            this.body.setVelocityY(-600);
        }	
	}
}
 
 
 

