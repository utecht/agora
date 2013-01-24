$(document).ready(function(){
    var name = window.prompt("Your name?");

    $('.send').click(function() {
        var chat_num = this.classList[1];
        var msg = $('#words' + chat_num).val();
        msg = chat_num + '|' + name + ': ' + msg;
        websocket.send(msg);
        $('#words' + chat_num).val('');
    });

    var wsUri = "ws://10.72.10.163:8888/"; 
    websocket = new WebSocket(wsUri);
    websocket.onmessage = function(m){
        var data = m.data.split('|');
        $('#chat' + data[0]).append('<p>' + data[1] + '</p>');
    };
});





