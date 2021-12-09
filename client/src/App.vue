<template>
  <div class="w-screen h-screen">
   <component v-bind:is="component"></component>
  </div>
</template>

<script>
import { io } from "socket.io-client"
import Game from './components/Game.vue'
import Lobby from './components/Lobby.vue'

export default {
    name: 'App',
    data() { 
        return {
            component: Lobby,
            players: []
        }
    },
    methods: {
        start() {
            this.component = Game
            const socket = io("http://localhost:3000")
            socket.on("message", (message) => {
                message = JSON.parse(message)
                if (("type" in message) == false) // literally javascript...
                    return
                if (message.type == "id")
                    localStorage["id"] = message.id
                if (message.type == "new_player")
                    this.players.push({name: message.name, id: message.id})
            }) 
        }
    }
}
</script>
