const io = require('socket.io')({
  cors: {
    origin: '*',
  }
});


let players = {};

io.on("connection", function(socket)
{
    var id = Math.random().toString(16).substr(2, 64);
    socket.send(JSON.stringify({type: "id", id: id}))

    players[id] = {socket: socket, name: "bohdan"};
    console.log(`User ${id} connected lol`)
    var player
    for (player_id in players)
    {
        player = JSON.stringify({type: "new_player", name: players[player_ud]["name"], id: player_id}) 
        socket.send()
        if (player_id == id)
            continue
        players[player_id]["socket"].send(player)        
    }

    socket.on("message", function(data)
    {
        message = JSON.parse(data);
        
        if (!"type" in message)
            return; 

    });
});

io.listen(3000)

/*

vytvori mistnost ->
{type: "new_room", name: "foo", password: "sha256(barbaz)"}
pripoji se ->
{type: "room_connect", name: "foo", password: "sha256(barbaz)}

oboji vrati id

*/
