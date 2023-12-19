
$(document).ready(function () {
    // Recogemos los mensajes desde el servidor
    
    
    $('#chatSend').click(sendMessage);
 	$('#getMessages').click(myGet);
    // Establecer un tiempo para actualizar el chat periodicamente
    setInterval(myGet, 200);
 	
});

//let ip = "192.168.1.62"

let ip = "127.0.0.1";

console.log("IP GLOBAL: " + ip);

var user = "";

//Función para descargar del servidor todo el chat


function myGet(){

	   var prueba = "hola"
	  $.ajax({
                        method: "GET",
                
  				        url: "http://127.0.0.1:8080/myGet/" + prueba,
  			
  				
                        processData: false,
        
                        headers: {
                            "Content-type":"application/json"
                        }
                          
                      }).done(function(data) {
                        console.log(data.sender + " " + data.content);     			
						displayMessages(data);
                     })
                     .done(function(data) {
                        console.log("No hay mensajes nuevos");
                     })
}

//Función para imprimir en pantalla los mensajes
function displayMessages(messages) {

    let chatMessages = document.getElementById("chat-message"); //Accedemos al div donde mostrar los mensajes
    //chatMessages.empty(); //Vaciamos el módulo
		 chatMessages.append(messages.sender+": " + messages.content);
		
		var br = document.createElement("br");
        chatMessages.appendChild(br);
       
}

//Función para enviar cada mensaje
function sendMessage(){
    let messageSent = document.getElementById("message-input").value;
    console.log("Mensaje mandado: " + messageSent);
    
    //Metemos en el array el mensaje
  
        $.ajax({
            type: "POST",
            url: "http://" + ip + ":8080/Chat/sendMessages",
            data: JSON.stringify({sender:user, content: messageSent }),
            contentType: "application/json",
            success: function () {
                
            }
        });

    document.getElementById("message-input").value = "";
}
        
