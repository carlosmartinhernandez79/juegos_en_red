/*
TO DO LIST:

-Clase Elfo 
-Clase Gnomo

-Que puedan morir
-Que detecten pinchos/x/y --> y que se mueran

Funcionalidades de cada personaje
Elfo doble salto
Gnomo se hace pequeño 

Que se mueran cuando uno de los dos salga de camara

*/

class SceneJuego extends Phaser.Scene{
    constructor(){
        super({key: "SceneJuego"});
    }

    preload(){
        console.log("Se ha cargado la escena del juego")

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

        this.speed = 400;
        this.jump= 600;
    }

    create(){
    this.add.text(720, 20, "Level1", {font: "25px Arial", fill: "black"})

    this.physics.world.bounds.width = 4000;
    this.physics.world.bounds.height = 4000;

    var platforms;
    
    this.cameras.main.setBounds(0,0,4000,4000);

    //---PLATAFORMAS MOVIBLES---
    this.platformsMovibles = this.add.group(); //creo un grupo de plataformasMovibles

    //creo dos instancia, da igual donde las guarde, porque se gestionará su funcionaldidad desde el grupo platformsMovibles (se añaden desde la propia clase)
    this.platMovible = new PlataformaMovil(this, 50, 3500,"horizontal", 375, 0, 200); 
    this.platMovible2 = new PlataformaMovil(this, 1200, 3800,"vertical", 3800, 3500, 0);
    //this.platMovible3 = new PlataformaMovil(this, 1200, 3800,"vertical", 3800, 3500, 200);

    //--PUERTAS--
    this.doors = this.add.group()

    this.puerta1 = new Puerta(this, 1500, 3500);

    //--PALANCAS--
    this.misPalancas = this.add.group();
    this.p = new Palanca(this, 1200, 3700, this.platMovible2); //Instanciar las palancas enviándolas el objeto que quieren activar cuando las activen
    this.p = new Palanca(this, 1500, 3400, this.puerta1); //Instanciar las palancas enviándolas el objeto que quieren activar cuando las activen
    //---PLATAFORMAS---
    platforms = this.physics.add.staticGroup();
    platforms.setOrigin(0,1);
    platforms.create(0, 3800, 'ground').setScale(10,2).refreshBody();;
    //platforms.create(50, 250, 'ground');
    platforms.create(4000, 3800, 'ground');
    platforms.create(140, 3300, 'ground');
   
    //---JUGADORES--

    this.gnomo1 = new Gnomo(this, 400, 3600);
    this.elfo = new Elfo(this, 700, 3600);

    //---------FISICAS------------
 
    //this.cameras.main.startFollow(this.playerR);

    //FISICAS DEL GNOMO
    this.physics.add.collider(this.gnomo1, platforms);
    this.physics.add.collider(this.gnomo1, platforms);
    this.physics.add.collider(this.elfo, this.gnomo1);
    this.physics.add.collider(this.gnomo1, this.platformsMovibles);
    this.physics.add.collider(this.gnomo1, this.doors);
    //this.physics.add.overlap(this.gnomo1, this.misPalancas, this.aux()); 
    this.gnomo1.body.setCollideWorldBounds(true);
    this.gnomo1.body.setBounce(0.3);

    //FISICAS DEL ELFO
    this.physics.add.collider(this.elfo, platforms);
    this.physics.add.collider(this.elfo, platforms);
    this.physics.add.collider(this.elfo, this.gnomo1);
    this.physics.add.collider(this.elfo, this.platformsMovibles);
    this.physics.add.collider(this.elfo, this.doors);
    //this.physics.add.overlap(this.elfo, this.misPalancas, this.aux()); 

    this.elfo.body.setCollideWorldBounds(true);
    this.elfo.body.setBounce(0.3);

    }

    update(time, delta){

    //ACTUALIZACIÓN DE LA CAMARA

    var camaraPosX = (Math.abs(this.elfo.x+this.gnomo1.x)/2);
    var camaraPosY = (Math.abs(this.elfo.y+this.gnomo1.y)/2);

    this.cameras.main.centerOn(camaraPosX,camaraPosY);

    //MOVIMIENTO DEDL PERSONAJE
    //this.moverPersonajeA();
    //this.moverPersonajeR();

    this.gnomo1.move();
    this.elfo.move();
    this.die();

    //MOVIMIENTO DE LA PLATAFORMA
    for(var i = 0; i < this.platformsMovibles.getChildren().length; i++){
        var plat = this.platformsMovibles.getChildren()[i];
        plat.update();
    }

    //GESTION DE LAS PALANCAS
    for(var i = 0; i < this.misPalancas.getChildren().length; i++){
        //RECORRO TODOS Y ACTIVO SOLO AQUELLAS SOBRE LAS QUE ESTÉ ENCIMA
        //Comprobaré eso comprobando por cada palanca si el personaje se encuentra en la misma x y en la misma y con una diferencia de +-5

        if(this.misPalancas.getChildren()[i].isActive()){

            var palancaX = this.misPalancas.getChildren()[i].x;
            var palancaY = this.misPalancas.getChildren()[i].y;
    
            var gX = this.gnomo1.x;
            var gY = this.gnomo1.y;
    
            var eX = this.elfo.x;
            var eY = this.elfo.y;
    
            //Método de colisión por caja
            if((gX < palancaX+10 && 
                gX+10 > palancaX && 
                gY < palancaY+20 && 
                gY+10 > palancaY) ||
                (eX < palancaX+10 && 
                eX+10 > palancaX && 
                eY < palancaY+20 && 
                eY+10 > palancaY)
                ){
    
                //play palanca animation
                this.misPalancas.getChildren()[i].activarPalanca(); //activo la palanca
                this.misPalancas.getChildren()[i].desactivarPalanca(); //la inutilizo
            }
        }

    }

    }

    die(){
        if(this.elfo.y>3900 || this.gnomo1.y>3900 || this.isTooFar()){
            console.log("Elfo sa matao")
            this.scene.start();
        }
    }

    isTooFar(){

        var itIs = false;

        if(Math.abs(this.gnomo1.x - this.elfo.x)> 1300){
            console.log("muy lejos")
            this.scene.start();
            itIs=true;
        }

        if(Math.abs(this.gnomo1.y - this.elfo.y)> 650){
            console.log("muy lejos")
            this.scene.start();
            itIs=true;
        }

        return itIs;
    }
}
