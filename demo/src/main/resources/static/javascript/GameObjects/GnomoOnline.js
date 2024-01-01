class GnomoOnline extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"enano");

        this.gnomo = scene.add.existing(this);

        this.gnomo.scene.physics.world.enableBody(this);

        this.wasd = scene.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D', e: "E", q: "Q"});

        this.body.setCollideWorldBounds(true);

        this.SonidoSalto = this.scene.sound.add("Sonido_Salto");

        this.canJump = true;
        
        this.state = 1;
        


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

        
        if (this.wasd.q.isDown && this.gnomo.scale == 0.5) //hacer normal
        {
            this.gnomo.setPosition(this.gnomo.x,this.gnomo.y-30); //subirle el tamaño del sprite
            //this.body.setVelocityY(-300);
            this.gnomo.setScale(1);

            this.gnomo.anims.play('mini_enano', true);
            
            this.state = 1;
            
            stompClient.send("/game/setStateGnomo", //llamar a un método con parámetros (es una string basic)
	 		{},
			1
	 		)
            
        }

       if (this.wasd.e.isDown && this.gnomo.scale == 1) //hacer chikito
        {     
            this.gnomo.setScale(0.5);

            this.gnomo.anims.play('mini_enano', true);
            
            this.state = 0;
            
            stompClient.send("/game/setStateGnomo", //llamar a un método con parámetros (es una string basic)
	 		{},
			0
	 		)
        }   
        
    }
    
        //PARTE DEL ELFO ONLINE
    actualizarGnomo(newX, newY){
	
	//PARA QUE HAYA ANIMACIONES, TENGO QUE DETECTAR SI SE MUEVE HACIA LEFT OR RIGHT UP OR DOWN
	
	//COMO HAY LAG, TENGO QUE PONER QUE ESTE EN UN RANGO, NO ESTÁ SIEMPRE EXACTO PERO WHO CARES MOTHERFUCKERS
	    if(this.gnomo.x <= newX + 10  && this.gnomo.x >= newX-10)  //quieto
        {
            this.body.setVelocityX(0);
        
            this.gnomo.anims.play('turn');
        }
	    
	    
	    else if (this.gnomo.x>newX) //izq
        {
            this.body.setVelocityX(-400);

            this.gnomo.flipX = true;
        
            this.gnomo.anims.play("walk", true);
        }
        else if (this.gnomo.x<newX) //der
        {
            this.body.setVelocityX(400);
           
            this.gnomo.flipX = false;

            this.gnomo.anims.play('walk', true);
        }
        
         if (this.gnomo.y > newY + 30 && this.gnomo.body.blocked.down)//this.body.touching.down ) //
        {
            this.SonidoSalto.play();

            this.gnomo.anims.play('enano_jump', true);

            this.body.setVelocityY(-600);
            this.canJump = false;            
        }
        else if(this.gnomo.body.blocked.down){ //this.elfo.body.blocked.down funciona con los tiles. El isTouching no
            this.canJump = true;
        }
        
        
        
         if (stateGnomo==1 && stateGnomo != this.state) //hacer normal
        {
            this.gnomo.setPosition(this.gnomo.x,this.gnomo.y-30); //subirle el tamaño del sprite
            //this.body.setVelocityY(-300);
            this.gnomo.setScale(1);
            
            this.state = 1

            this.gnomo.anims.play('mini_enano', true);
        }

       if (stateGnomo == 0 && stateGnomo != this.state) //hacer chikito
        {     
            this.gnomo.setScale(0.5);

			this.state = 0;
			
            this.gnomo.anims.play('mini_enano', true);
        } 
	
}
    
    
    
    
}
