class ElfoOnline extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"elfita");

        this.scenav = scene;

        this.elfo = scene.add.existing(this);

        this.elfo.scene.physics.world.enableBody(this);

        this.elfo.setScale(0.8)

        this.wasd = scene.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D', e: "E", q: "Q"});

        this.canDoubleJump = 0;

        this.SonidoSalto = this.scene.sound.add("Sonido_Salto");

        this.metamorfosis = false;

        this.lookLeft = false;
        
        this.lastJumpPos;


        //ANIMATIONS ELFA
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('elfita', { start: 27, end: 53 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turnRight',
            frames: [ { key: 'elfita', frame: 0 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'turnLeft',
            frames: [ { key: 'elfita', frame: 62 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('elfita', { start: 1, end: 26 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'elfa_jump',
            frames: this.anims.generateFrameNumbers('elfita', { start: 54, end: 57 }),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'elfa_jump_doble',
            frames: this.anims.generateFrameNumbers('elfita', { start: 58, end: 61 }),
            frameRate: 1,
            repeat: -1
        });

    }
    

    move(){
        //-------MOVIMIENTO elfo-------
        
        /*stompClient.send("/game/setPosElfo", 
	 	{},
	 	this.elfo.x, this.elfo.y
	 	)*/
	 	
	 	
	 	
            if (this.wasd.left.isDown)
            {
				console.log("MOVE DEL ELFO LEFT")
                this.body.setVelocityX(-400);
                
                this.elfo.anims.play("left", true);

                this.elfo.lookLeft = true;
                

            }
            else if (this.wasd.right.isDown)
            {
				console.log("MOVE DEL ELFO RIGHT")
                this.body.setVelocityX(400);
                this.elfo.anims.play('right', true);

                this.elfo.lookLeft = false;
                

            }
            else if (this.elfo.lookLeft)
            {
                this.body.setVelocityX(0);
                this.elfo.anims.play('turnLeft');
            }
            else if(!this.elfo.lookLeft)
            {
                this.body.setVelocityX(0);
                this.elfo.anims.play('turnRight');
            }

            //DOBLE SALTO HECHO GRACIAS A: https://www.youtube.com/watch?v=j1Y75isZ1oM
            if (Phaser.Input.Keyboard.JustDown(this.wasd.up) && (this.elfo.body.blocked.down || this.canDoubleJump<=1)) //
            { 
                this.SonidoSalto.play();
                
                this.elfo.anims.play('elfa_jump', true);
					
				stompClient.send("/game/setDoubleJump", //llamar a un método con parámetros (es una string basic)
	 					{},
						true
	 				)
               
               if(this.canDoubleJump==1){
					
                    this.body.setVelocityY(-400);
                    this.elfo.anims.play('elfa_jump_doble', true);
                    ++this.canDoubleJump;
                    
                }    
                
                 else if(this.canDoubleJump==0){
                this.body.setVelocityY(-600); 
                ++this.canDoubleJump;
                console.log(this.canDoubleJump)

                }   
            }  
            else if(this.elfo.body.blocked.down){ //this.elfo.body.blocked.down funciona con los tiles. El isTouching no
                this.canDoubleJump = 0;
               
            }
        
        if(this.metamorfosis && this.cat){
            this.cat.move();
        }   
    }
    
    
    //PARTE DEL ELFO ONLINE
    actualizarElfo(newX, newY){
	
	console.log("ElfoPos = (" + this.elfo.x + ", " + this.elfo.y + ") NewPos = ("+newX+ ", " + newY +")")
	//PARA QUE HAYA ANIMACIONES, TENGO QUE DETECTAR SI SE MUEVE HACIA LEFT OR RIGHT UP OR DOWN
	
	//COMO HAY LAG, TENGO QUE PONER QUE ESTE EN UN RANGO, NO ESTÁ SIEMPRE EXACTO PERO WHO CARES MOTHERFUCKERS
	if (this.elfo.x <= newX + 10  && this.elfo.x >= newX-10  && this.elfo.lookLeft){
		this.body.setVelocityX(0);
		this.elfo.anims.play('turnLeft');
     }
     else if(this.elfo.x <= newX + 10  && this.elfo.x >= newX-10 && !this.elfo.lookLeft){
		this.body.setVelocityX(0);
		this.elfo.anims.play('turnRight');

	}
	
	else if(this.elfo.x<newX){//se mueve hacia la derecha
		this.body.setVelocityX(400);
        this.elfo.anims.play('right', true);
        this.elfo.lookLeft = false;
	}
	
	else if(this.elfo.x>newX){ //se mueve hacia la izquierda
		this.body.setVelocityX(-400);
		this.elfo.anims.play("left", true);
		this.elfo.lookLeft = true;
	}
	
	
	if (canDoubleJumpServer) //PRUEVAS QUE ESTABA HACIENDO
    { 
         this.SonidoSalto.play();
                
         this.elfo.anims.play('elfa_jump', true);
                
         //this.body.setVelocityY(-600); 
    	 this.canDoubleJump++;
    	
    	 
    	if(this.canDoubleJump==2){
					
        	this.body.setVelocityY(-400);
          	this.elfo.anims.play('elfa_jump_doble', true);
            this.canDoubleJump = 0;
             canDoubleJumpServer = false;

         }    
		else if(this.canDoubleJump==1){  //normal
                this.body.setVelocityY(-600); 
                 canDoubleJumpServer = false;
        }               
    } 
    
    
    
    if(this.metamorfosis && this.cat){
        this.cat.moveServer(newX, newY);
    }   
     
}
    
    
    //NO ESTÁ IMPLEMENTADO AÚN EN EL ONLINE
    hacerMetamorfosis(){

        this.metamorfosis = true;

        this.cat = new CatOnline(this.scene, this.elfo.x,this.elfo.y+107)
        this.elfo.setVisible(false);
        this.elfo.setPosition(this.elfo.x,this.elfo.y-30); //subirle el tamaño del sprite
        this.body.setVelocity(0);
    }

    deshacerMetamorfosis(){
        this.metamorfosis = false;
        this.elfo.setVisible(true);
        this.elfo.setPosition(this.cat.x,this.cat.y-100); //subirle el tamaño del sprite
        this.cat.destroy()
    }
}
