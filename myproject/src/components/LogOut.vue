<template>
    <button v-on:click="signOut">Sign Out</button>
</template>

<script>
    import firebase from "firebase";
    export default {
        name: "LogOut",
        methods: {
            signOut(){
                firebase
                .auth()
                .signOut()
                .then(() =>{
                    console.log('user has been logged off');
                    this.$router.replace({name: "Home"});
                })
            }
        }
    }
</script>

<style scoped>

</style>
