<template>
    <div>
        Connect your linkedin account!
    </div>
    
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Linkedin",
        data(){
            return {
                info: null
            }
        },
        create() {
            axios.get('https://www.linkedin.com/oauth/v2/authorizatio')
        }

    }
</script>

<style scoped>

</style>
