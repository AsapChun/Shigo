<template>
    <div>
        <h1> Home Page</h1>
        <div>{{user.data.displayName}}</div>
        <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div> <br>
        <button @click="connectLinkedIn" class="social-button"><img alt="Linkedin Logo"
        src="../assets/linkedin-login.png"></button> <br>
        <button @click="createZoomMeeting">Create Zoom Meeting</button> <br>
        <button @click="setPreferences">Set Preferences</button> <br>
        <LogOut></LogOut>
    </div>
</template>



<script>
    import LogOut from "@/components/LogOut";
    import { mapGetters } from "vuex";
    //MapGetters is a helper that simply maps store getters to local computed properties.
    export default {
        name: "UserHome",
        components:{
            LogOut
        },
        computed: {
            //maps 'this.user' to 'this.$store.getters.user'
            ...mapGetters({
                user: "user"
            }),
        },
        methods: {
            connectLinkedIn(){
                this.$router.replace(({name: "Linkedin"}))

            },
            createZoomMeeting(){
                //this.$router.replace(({name: "CreateZoomMeeting"}))
                this.$router.replace(({name: "CreateZoomMeeting"}))
            },
            setPreferences(){
                //this.$router.replace(({name: "CreateZoomMeeting"}))
                this.$router.replace(({name: "setPreferences"}))
            }
        }
    }
</script>

<style scoped>
    .social-button{
        width: 75px;
        background: white;
        padding: 10px;
        border-radius: 100%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        outline: 0;
        border:0;
    }
    .social-button:active{
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    }
    .social-button img{
        width:100%;
    }
</style>
