class Elfo extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"dude");

        this.scenav = scene;

        this.elfo = scene.add.existing(this);

        this.elfo.scene.physics.world.enableBody(this);

        this.elfo.setScale(2);

        this.flechas = scene.input.keyboard.createCursorKeys();

        this.canDoubleJump = 0;

        this.metamorfosis = false;


        //const isJumpJustDown = Phaser.Input.Keyboard.JustDown(this.flechas.up)

        //ANIMATIONS DEL ELFO
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
    
            //DOBLE SALTO HECHO GRACIAS A: https://www.youtube.com/watch?v=j1Y75isZ1oM
            if (Phaser.Input.Keyboard.JustDown(this.flechas.up) && (this.body.touching.down || this.canDoubleJump<=1)) //
            { 
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
            else if(this.body.touching.down){
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

            if (this.flechas.up.isDown && this.body.touching.down ) //
            {
                this.body.setVelocityY(-600);
            }
        }
    }
       
    hacerMetamorfosis(){

        this.elfo.setPosition(this.elfo.x,this.elfo.y-30); //subirle el tamaño del sprite

        this.metamorfosis = !this.metamorfosis;

        this.scene.add.text(this.scene.gnomo1.x, this.scene.gnomo1.y-100, "¿¡QUEEEEEEE!?", {font: "25px Arial", fill: "black"})

        this.scene.add.text(this.scene.elfo.x, this.scene.elfo.y-100, "¡TRAKAAAAAAAA!", {font: "25px Arial", fill: "black"})
    }
}
