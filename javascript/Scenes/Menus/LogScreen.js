class LogScreen extends Phaser.Scene{
    constructor() {
        super({ key: 'LogScreen' });

       this.logged = false;
    }
    preload(){

    }
    
    create(){
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.text(530,340,"CONTRASEÑA").setOrigin(0,0);    
        this.add.text(540,190,"USUARIO").setOrigin(0,0);   

        this.LogThings = document.getElementById("LogThings")
        this.LogThings.style.display = "block"

        this.username = document.getElementById("utext")
        //this.username.style.display = "block"

        this.password = document.getElementById("ptext")
        //this.password.style.display = "block"

        this.aceptar = document.getElementById("aceptar")
        //this.aceptar.style.display = "block"
        
        this.registrarse = document.getElementById("registrarse")
       // this.registrarse.style.display = "block"


        this.aceptar.addEventListener("click", ()=>{

		
            $.ajax({
                method: "POST",
                
  				url: "http://10.0.79.116:8080/Usuarios",
  				
  				data: JSON.stringify({ username: this.username.value, password: this.password.value }),
  				
  				contentType: "application/json"
  				
              }).done(function(data) {
                alert(data.username + " " + data.password); // imprimimos la respuesta

    			this.changeScene();
    			

              }).fail(function() {
                alert("Algo salió mal");
              });
              
          


           /* if(this.password.value && this.username.value){
                alert(this.password.value) //forma de obtener info de los estos


                this.scene.sendToBack("LogScreen");
                this.scene.start("StartScreen", {sonido: true});
                

                this.LogThings.style.display = "none"

            }
            else{

            
            }*/
        });
    }
    
    
    changeScene(){
		
		if(this.logged){
				 
				console.log("He cambiado de escena")
				 
				this.scene.sendToBack("LogScreen");
                this.scene.start("StartScreen", {sonido: true});
                
                this.LogThings.style.display = "none"
		}
	}
}