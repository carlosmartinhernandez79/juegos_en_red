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
                this.body.setVelocityX(-400);
                
                this.elfo.anims.play("left", true);

                this.elfo.lookLeft = true;
            }
            else if (this.wasd.right.isDown)
            {
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

                if(this.canDoubleJump==0){
                this.body.setVelocityY(-600); 
                ++this.canDoubleJump;
                console.log(this.canDoubleJump)
                }
                else if(this.canDoubleJump==1){
                    this.body.setVelocityY(-400);
                    this.elfo.anims.play('elfa_jump_doble', true);
                    ++this.canDoubleJump;
                }
               
            }  
            else if(this.elfo.body.blocked.down){ //this.elfo.body.blocked.down funciona con los tiles. El isTouching no
                this.canDoubleJump = 0;
            }
        
        if(this.metamorfosis && this.cat){
            console.log("moving")
            this.cat.move();
        }
    }
    
    actualizarElfo(newX, newY){
		this.elfo.x= newX
		this.elfo.y= newY
	}
       
    hacerMetamorfosis(){

        this.metamorfosis = true;

        this.cat = new Cat(this.scene, this.elfo.x,this.elfo.y+107)
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
