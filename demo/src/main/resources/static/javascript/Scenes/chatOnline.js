




function sendMessage() {
    var chatInput = document.getElementById('chat-input').value;
    console.log("HAY ESCRITO: " + chatInput);
    if(chatInput !== ''){
        stompClient.send("/game/setChat", {}, chatInput);
    }else{
        console.log("ESTA VACIO");
    }
    document.getElementById('chat-input').value = '';

    writingLine = false;
}

// Recogemos el evento cuando alguien escribe en el chat
/*chatInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        const message = chatInput.value;
        stompClient.send("/game/sendMessage", {}, message);
        chatInput.value = '';
    }
})*/

function displayMessages(messages) {
    var chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = '';
    let cadenaTotal = [];
    let entrada;
    //Recorremos todo el body
    for(let i = 0; i < messages.body.length; i++){
        entrada = '';
        while(messages.body[i] !== '\"' && messages.body[i] !== "]" && messages.body[i] !== "," && messages.body[i] !== '['){
            entrada += messages.body[i];
            i++;
        }
        if(entrada !== ''){cadenaTotal.push(entrada);}
    }

    //messages = stompClient.send("/game/setChat", {}, 0);
    console.log(messages);
    console.log("TODO EL CHAT: " + cadenaTotal);
    for(let i = 0; i < cadenaTotal.length; i++){
        //chatMessagesDiv.append("<p>" + cadenaTotal[i] + "</p>");
        chatMessagesDiv.innerHTML += "<p>" + cadenaTotal[i] + "</p>";
    }

    //Prevenir cuando se esté usando el chat, que se bloqueen las teclas de control
    function handleKeyPress(event) {
        // Detectamos si se está presionando alguna de las teclas de control
        if (event.key === 'W' || event.key === 'w') {
            console.log('Move character up');
        } else if (event.key === 'S' || event.key === 's') {
            console.log('Move character down');
        }else if (event.key === 'A' || event.key === 'a') {
            console.log('Move character left');
        } else if (event.key === 'D' || event.key === 'd') {
            console.log('Move character rigth');
        } else if (event.key === 'Q' || event.key === 'q') {
            console.log('Move character down');
        } else if (event.key === 'E' || event.key === 'E') {
            console.log('Move character down');
        }
    }
    
    // Vinculamos al documento el evento de presión de tecla
    document.addEventListener('keydown', handleKeyPress);
    
    // Detectamos si estamos en el campo del chat
    const chatInput = document.getElementById('chat-input');

    chatInput.addEventListener('keydown', function(event) {
        event.stopPropagation(); //Evitamos que se produzca el evento del control con ls teclas mientras estamos escribiendo.
    });
}