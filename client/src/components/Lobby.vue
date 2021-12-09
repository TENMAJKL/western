<template>
    <div class="flex items-center justify-center h-screen">
        <input type="text" class="p-1 shadow-xl outline-none" placeholder="Jméno" v-model="name">
        <button class="p-1 m-5 bg-white shadow-xl" v-on:click="start">
            Hrát
        </button>
    </div>
</template>

<script>
export default {
    data() {
        var self = this
        return {
            name: "",
            start() {
                self.$parent.start()
            }
        }
    }
}
</script>
