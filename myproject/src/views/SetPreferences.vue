<template>
    <div>
        <progress value="0" max="100" id="uploader">0%</progress> <br>
        <input type="file" @change="onFileChange"> <br>
        <div>
            <select v-model="jobType">
                <option disabled value="">Please select one</option>
                <option>Intern</option>
                <option>Full-Time</option>
            </select>
                <br>

            <select v-model="major">
                <option disabled value="">Please select one</option>
                <option>Economics</option>
                <option>Computer Science</option>
            </select>
            <br>
            <select v-model="jobField">
                <option disabled value="">Please select one</option>
                <option>Tech</option>
                <option>Finance</option>
            </select>
            <br>
            <button @click="writeUserData">Submit Preferences</button>

        </div>
    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "SetPreferences",
        data: function(){
            return {
                jobType: '',
                major: '',
                jobField: '',
                profilePhoto: ''
            }
        },
        methods:{
            onFileChange(e){
               // document.getElementById('fileUpload').
                //get file
                var file = e.target.files[0]
                if(!file.length){
                    return;
                }else{
                    console.log("file upload success");
                    this.profilePhoto = file;
                }

                /*
                //create a storage reference
                var storageRef = firebase.storage().ref('profile_pic/'+ file.name)
                //upload file
                var task = storageRef.put(file);
                //update progress bar
                task.on('state_change',
                    function progess(snapshot){
                        var percentage = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
                        this.fileUpload.uploader.value = percentage;
                    },
                    function error(err){
                        console.log(err)
                    },
                    function complete(){

                    })
                 */

            },
            writeUserData(){
                var database = firebase.database();
                let user = firebase.auth().currentUser;
                if(user != null){
                    console.log("uid: "+ user.uid)
                    database.ref('users/' + user.uid).set({
                        username: user.displayName,
                        email: user.email,
                        photoUrl: this.profilePhoto,
                        preferences: {
                            jobType: this.jobType , //intern or full time
                            major: this.major, //major
                            jobField: this.jobField // jobField
                        }
                    });
                }

            }
        }

    }
</script>

<style scoped>
    #uploader{
        -webkit-appearance: none;
        appearance: none;
        width: 50%;
        margin-bottom: 10px;
    }
</style>
