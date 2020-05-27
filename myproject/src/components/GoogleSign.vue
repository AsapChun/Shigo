<template>
    <div>
        <p>
            Google Sign In <br>
            <button @click="GoogleLogin() + initClient()" class="social-button">
                <img alt="Google Logo" src="../assets/google-logo.png">
            </button>
        </p>
    </div>
    
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "GoogleSign",
        methods:{
            GoogleLogin(){
                const provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/calendar');
                firebase.auth().signInWithPopup(provider).then((result)=> {
                    console.log(result.user.email+ " has been logged in w Google")
                    this.$router.replace('UserHome')
                    this.$router.rep
                }).catch((err) => {
                    console.log(err.message)
                });
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
