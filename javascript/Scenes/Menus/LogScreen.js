class LogScreen extends Phaser.Scene{
    constructor() {
        super({ key: 'LogScreen' });

       this.logged = false;
    }

    
    preload(){
		console.log(this.scene)
    }
    
    create(){

        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.text(530,340,"CONTRASEÑA").setOrigin(0,0);    
        this.add.text(540,190,"USUARIO").setOrigin(0,0); 
        
        var myUser = [];

        var contador = 0;

        this.LogThings = document.getElementById("LogThings")
        this.LogThings.style.display = "block"

        var username = document.getElementById("utext")
        //this.username.style.display = "block"

        var password = document.getElementById("ptext")
        //this.password.style.display = "block"

        this.aceptar = document.getElementById("aceptar")
        //this.aceptar.style.display = "block"
        
        this.registrarse = document.getElementById("registrarse")
       // this.registrarse.style.display = "block"
       
       this.registrarse.style.display = "none"

        this.goToRegister = document.getElementById("goToRegister")
        
        this.forgetPassword = document.getElementById("forgetPassword")
     
        this.changePassword = document.getElementById("changePassword")
		this.changePassword.style.display = "none"

        username.value = null;
        password.value = null;


        this.goToRegister.addEventListener("click", ()=>{

            this.registrarse.style.display = "block"
            this.aceptar.style.display = "none"
            this.goToRegister.style.display = "none"

        })


        this.registrarse.addEventListener("click", ()=>{

            this.registrarse.style.display = "none"
            this.aceptar.style.display = "block"
            this.goToRegister.style.display = "block"
            this.changePassword.style.display = "block"


        })
        
         this.forgetPassword.addEventListener("click", ()=>{

            this.registrarse.style.display = "none"
            this.aceptar.style.display = "none"
            this.goToRegister.style.display = "none"
            this.changePassword.style.display = "block"
            
            alert("HAS CLICKADO FORGETPASSWORD")

        })
        
        this.changePassword.addEventListener("click", ()=>{

            this.registrarse.style.display = "block"
            this.aceptar.style.display = "block"
            this.goToRegister.style.display = "block"
            this.forgetPassword.style.display = "block"
            this.changePassword.style.display = "none"

        })

		var myScene = this.scene;

            
              $(document).ready(function() {
				   	
  					$('#registrarse').click(registrarse);
  					$('#aceptar').click(aceptarFun);
  					//$('#changePassword').click(forgetPassword);
			});
			
			function forgetPassword(){
				
				
			}

			function registrarse() {
		
                checkValues();
				
  				$.ajax({
                method: "POST",
                
  				url: "http://127.0.0.1:8080/Usuarios",
  				
  				data: JSON.stringify({ username: username.value, password: password.value }),
  				
  				contentType: "application/json"
  				
              }).done(function(data) {
				 
				console.log(data)
                console.log("Se ha añadido correctamente: " + data.username + " " + data.password + "ID: " + data.id); // imprimimos la respuesta
                username.value = null;
                password.value = null;

                myUser[contador]=data.username;
                contador++;

			 }).fail(function(data) {
				
                alert("No ha salido bien"); // imprimimos la respuesta
                
			 })
    	}
    		
    		function myThings(myScene){
				 
				myScene.sendToBack("LogScreen");
                myScene.start("StartScreen", {sonido: true});
               	myScene.get("SceneBootLoader").MiMusicaBase.play();
                
                LogThings.style.display = "none"
			}
			
			function checkValues(){
				console.log(username.value + " " + password.value)
			}
			
			function aceptarFun() {
                alert("El elemento a buscar es: " + username.value + ", " +password.value)
                
                    $.ajax({
                        method: "GET",
                
  				        url: "http://127.0.0.1:8080/Usuarios/" + username.value,
  			
  				
                        processData: false,
        
                        headers: {
                            "Content-type":"application/json"
                        }
                          
                      }).done(function(data) {
                        console.log("Se ha encontrado un usuario con el nombre: "+ data.username );
                        if(data.username == username.value && data.password == password.value ){
							console.log("Usuario y contraseña correctas");
							     myThings(myScene)
						} 
						else{
							  console.log("Pero la contraseña es incorrecta");
							  alert("Contraseña incorrecta")
						}

                        
                        
                     }).fail(function(data) {
                          
                        alert("El usuario no existe"); 
                        
                        console.log("Usuario o contraseña incorrecta");
                     })
		}
			 
    }
}