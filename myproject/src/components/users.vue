<template>
   <div>
       <title></title>
       <div v-bind:key="user.id" v-for="user in users">
           <userdetail v-bind:user="user" v-on:alterName="$emit('alterName', user,name)"></userdetail>
       </div>
   </div>
</template>

<script>
    import userdetail from "@/components/userdetail";
    export default {
        name: "userinfo",
        components: {userdetail},
        props: ["users"],
    }
</script>

<style scoped>

</style>
