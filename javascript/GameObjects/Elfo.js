class Elfo extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"elfa");

        this.scenav = scene;

        this.elfo = scene.add.existing(this);

        this.elfo.scene.physics.world.enableBody(this);

        //this.elfo.setScale(0.7);

        this.flechas = scene.input.keyboard.createCursorKeys();

        this.canDoubleJump = 0;

        this.lookLeft = true;

        this.metamorfosis = false;

        this.SonidoSalto = this.scene.sound.add("Sonido_Salto");


        //const isJumpJustDown = Phaser.Input.Keyboard.JustDown(this.flechas.up)

        //ANIMATIONS DEL ELFO
        
        this.anims.create({
            key: 'turnRight',
            frames: [ { key: 'elfa', frame: 0 } ],
            frameRate: 24
        });

        this.anims.create({
            key: 'turnLeft',
            frames: [ { key: 'elfa', frame: 56 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('elfa', { start: 1, end: 26 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('elfa', { start: 27, end: 53 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'jumpRight',
            frames: this.anims.generateFrameNumbers('elfa', { start: 54, end: 54 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'jumpLeft',
            frames: this.anims.generateFrameNumbers('elfa', { start: 55, end: 55 }),
            frameRate: 20,
            repeat: -1
        });



         //ANIMATIONS DEL GATO
         this.anims.create({
            key: 'walk',
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
        //-------MOVIMIENTO elfo-------
        if(!this.metamorfosis){ //modo persona
            if (this.flechas.left.isDown)
            {
                this.lookLeft = true;
                this.body.setVelocityX(-400);
            
                this.elfo.anims.play("left", true);

                
            }
            else if (this.flechas.right.isDown)
            {
                this.elfo.lookLeft = false;
                this.body.setVelocityX(400);
                this.elfo.anims.play('right', true);

                
            }
            else if (this.lookLeft == true)
            {
                this.body.setVelocityX(0);
                this.elfo.anims.play('turnLeft', true);
            }
            else 
            {
                this.body.setVelocityX(0);
                this.elfo.anims.play('turnRight', true);
            }
    
            //DOBLE SALTO HECHO GRACIAS A: https://www.youtube.com/watch?v=j1Y75isZ1oM
            if ((Phaser.Input.Keyboard.JustDown(this.flechas.up) || this.flechas.up.isDown ) && (this.elfo.body.blocked.down || this.canDoubleJump<=1)) //
            { 
                this.SonidoSalto.play();

                if(this.lookLeft == false){
                    console.log(this.elfo.lookLeft);
                    this.elfo.anims.play('jumpRight', true);
                }
                else
                {
                    this.elfo.anims.play('jumpLeft',true);
                    console.log(this.elfo.lookLeft);
                }
                
                
                if(this.canDoubleJump==0){
                this.body.setVelocityY(-600); 
                ++this.canDoubleJump;
                console.log(this.canDoubleJump)
                }
                else if(this.canDoubleJump==1){
                    this.body.setVelocityY(-400);
                    ++this.canDoubleJump;
                }
               
            }  
            else if(this.elfo.body.blocked.down){ //this.elfo.body.blocked.down funciona con los tiles. El isTouching no
                this.canDoubleJump = 0;
            }
        }
        else{ //modo gato
            if (this.flechas.left.isDown)
            {
                this.body.setVelocityX(-400);

                this.elfo.flipX = true;
            
                this.elfo.anims.play("walk", true);
            }
            else if (this.flechas.right.isDown)
            {
                this.body.setVelocityX(400);
    
                this.elfo.flipX = false;
                
                this.elfo.anims.play('walk', true);
            }
            else
            {
                this.body.setVelocityX(0);
            
                this.elfo.anims.play('iddle');
            }

            if (this.flechas.up.isDown && this.body.blocked.down ) //
            {
                this.body.setVelocityY(-600);
            }
        }
    }
       
    hacerMetamorfosis(){

        this.metamorfosis = !this.metamorfosis;

        if(this.metamorfosis){
            
        this.elfo.setPosition(this.elfo.x,this.elfo.y-30); //subirle el tamaño del sprite
        }
    }


}
