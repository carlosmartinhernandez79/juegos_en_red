




function sendMessage() {
    var chatInput = document.getElementById('chat-input').value;
    console.log("HAY ESCRITO: " + chatInput);
    if(chatInput !== ''){
        stompClient.send("/game/setChat", {}, chatInput);
    }else{
        console.log("ESTA VACIO");
    }
    document.getElementById('chat-input').value = '';
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

    /*messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = msg;
        chatMessagesDiv.appendChild(messageDiv);
        chatMessagesDiv.append("<p>" + msg + "</p>");
    });*/
}