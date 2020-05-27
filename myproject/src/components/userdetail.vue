<template>
    <div>
        <input type="checkbox" v-on:change="markComplete">
        {{user.name}}
        <button @click="$emit('alterName', user.name)">click </button>

    </div>

</template>

<script>
    export default {
        name: "userdetail",
        props:["user"],
        methods: {
            markComplete(){
                this.user.name = 'obesity'
            }
        }
    }
</script>

<style scoped>

</style>
