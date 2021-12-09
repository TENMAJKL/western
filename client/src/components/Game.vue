<template>
    <div class="flex">
        <div class="block w-2/12 h-screen shadow-2xl">
            <div class="p-4 border-b-2 border-gray-50" v-for="(player, index) in players" v-bind:key="index">
                {{ player.name }} 
            </div>
        </div>
        <div class="flex items-center justify-center w-full">
            <div class="p-2 shadow-xl">
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/53/frog-face_1f438.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            players: []
        }
    },
    mounted() {
        this.players = this.$parent.players
    }
}
</script>
