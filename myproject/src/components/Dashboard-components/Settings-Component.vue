<template>
   <div>
       <head>
           <meta charset="utf-8">
           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
           <meta name="description" content="">
           <title>Settings</title>
           <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/dashboard/">
           <!-- Bootstrap core CSS -->
           <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
       </head>
       <body>
       <nav class="navbar navbar-blue sticky-top bg-dark flex-md-nowrap p-0 shadow">
           <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">SHIGO</a>
           <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
           <!--   <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
           <ul class="navbar-nav px-3">
               <li class="nav-item text-nowrap">

                   <a class="nav-link" href="#"><LogOut></LogOut></a>
               </li>
           </ul>
       </nav>
       <div class="container-fluid">
           <div class="row">
               <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                   <div class="sidebar-sticky pt-3">
                       <ul class="nav flex-column">
                           <li class="nav-item">
                               <a class="nav-link" href="#">
                                   <span data-feather="home"></span>
                                   <div class="hover" @click="goToDashboard">
                                       DashBoard
                                   </div>
                                   <span class="sr-only">(current)</span>
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">
                                   <span data-feather="file"></span>
                                   <div class="hover">
                                       Upcoming Events
                                   </div>
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">
                                   <span data-feather="shopping-cart"></span>
                                   <div class="hover">
                                       Messages
                                   </div>
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">
                                   <span data-feather="users"></span>
                                   <div class="hover">
                                       Connections
                                   </div>
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">
                                   <span data-feather="bar-chart-2"></span>
                                   <div class="hover">
                                       Calendar
                                   </div>
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link active" href="#">
                                   <span data-feather="layers"></span>
                                   <div class="hover">
                                       Settings
                                   </div>
                               </a>
                           </li>
                       </ul>

                   </div>
               </nav>

               <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                   <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                       <h1 class="h2">Settings</h1>

                       <div class="btn-toolbar mb-2 mb-md-0">
                           <div class="btn-group mr-2">
                              <!-- <button type="button" class="btn btn-sm btn-outline-secondary">FAQ</button> -->
                           </div>

                           <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                               <span data-feather="calendar"></span>
                               This week
                           </button> -->
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-sm">
                            <div class="card" style="width: 18rem;">
                                <div class="card-image-top">
                                 <!--   <img  src="../assets/information-icon.png" alt=""> -->
                                </div>
                            <div class="card-body">
                                <h5 class="card-title">Basic Information</h5>
                                <p class="card-text">
                                    Current Name: {{user.data.displayName}} <br>
                                    Email: {{user.data.email}} <br>
                                    Account Type: {{userinfo.PersonType}} <br>
                                </p>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Change Email </label>
                                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter New email" height="100px">
                                        <button type="submit" class="btn-submit" v-on:click="updateEmail">Update Email!</button>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Change Password</label>
                                        <input type="password" v-model="newpassword" class="form-control" id="exampleInputPassword1" placeholder="Enter New Password">
                                        <button type="submit" class="btn-submit" v-on:click="updatePassword">Update Password!</button>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Change Account Name </label>
                                        <input class="form-control" v-model="newName" id="NewAccountName" placeholder="Enter New Name">
                                        <button type="submit" v-on:click="updateName" class="btn-submit">Update Name!</button>
                                    </div>
                                </form>
                            </div>
                            </div>

                       </div>
                       <div class="col-sm">
                           <div class="card" style="width: 18rem;">
                               <div class="card-image-top">
                                   <!--   <img  src="../assets/information-icon.png" alt=""> -->
                               </div>
                               <div class="card-body">
                                   <h5 class="card-title">Education Information</h5>
                                   <p class="card-text">
                                       Primary Major: {{userinfo.PrimaryMajor}} <br>
                                       Secondary Major: {{userinfo.SecondaryMajor}} <br>
                                       Position Seeking: {{userinfo.PositionSeeking}} <br>
                                   </p>
                                   <form>
                                       <div class="form-group">
                                           <label for="exampleInputEmail1">Change Primary Major </label>
                                           <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter New Major">
                                       </div>
                                       <div class="form-group">
                                           <label for="exampleInputPassword1">Change Secondary Major</label>
                                           <input type="password" class="form-control"  placeholder="Enter New Major">
                                       </div>
                                       <div class="form-group">
                                           <label for="exampleFormControlSelect1">Update Position Seeking</label>
                                           <select class="form-control" id="exampleFormControlSelect1">
                                               <option>Full Time</option>
                                               <option>Part-Time</option>
                                               <option>Internship</option>
                                           </select>
                                       </div>
                                       <button type="submit" class="btn btn-primary">Change Information!</button>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="row">
                       <div class="card w-50">
                           <div class="card-body">
                               <h5 class="card-title">Interested Industries</h5>
                               <ul id="tags">
                                   <li v-for= "industry in userinfo.Industry" :key="industry.key">
                                        {{industry}}
                                   </li>
                               </ul>
                               <div class="form-group">
                                   <h5>Add Interested Industry!</h5>
                                   <input class="form-control"  placeholder="Enter Industry!">
                               </div>
                               <a href="#" class="btn btn-primary">Add Industry</a>
                               <div class="form-group">
                                   <h5>Remove Industry!</h5>
                                   <input class="form-control"  placeholder="Enter Industry!">
                               </div>
                               <a href="#" class="btn btn-primary">Delete Industry</a>
                           </div>
                       </div>
                       <div class="card w-50">
                           <div class="card-body">
                               <h5 class="card-title">Highlighted Skills</h5>
                               <ul>
                                   <li v-for= "skills in userinfo.Skills" :key="skills.key">
                                       {{skills}}
                                   </li>
                               </ul>
                               <div class="form-group">
                                   <h5>Add New Skill!</h5>
                                   <input class="form-control"  placeholder="Enter Skill">
                               </div>
                               <a href="#" class="btn btn-primary">Update</a>
                               <div class="form-group">
                                   <h5>Remove Skill!</h5>
                                   <input class="form-control"  placeholder="Enter Skill">
                               </div>
                               <a href="#" class="btn btn-primary">Remove</a>
                           </div>
                       </div>
                       <!--
                       Industry: {{userinfo.Industry}}<br>
                       Skills: {{userinfo.Skills}}<br>
                        Person Type: {{userPref.PersonType}} <br>
                      Position Seeking: {{userPref.PositionSeeking}} -->
                   </div>
               </main>


           </div>
       </div>
       </body>
   </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import LogOut from "@/components/LogOut";
    import firebase from "firebase"


    export default {
        name: "Settings-Component",
        components:{
            LogOut
        },
        methods:{
            goToDashboard(){
                this.$router.replace(({name: "UserHome"}))
            },
            updateEmail() {
                //TODO BUG: not sure why it returns to home page... for now we will log out user to ensure "safety" lol
                var u = firebase.auth().currentUser;
                console.log("new email: "+ this.email);
                u.updateEmail(this.email).then(function() {
                    // Update successful.
                    console.log("update successful")
                    window.alert("Update Succesful: Please sign back in with new email!")
                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                    console.log("shits not working lol")
                });
                firebase
                    .auth()
                    .signOut()
                    .then(() =>{
                        console.log('user has been logged off');
                    })
            },
            updatePassword(){
                //TODO BUG: not sure why it returns to home page... for now we will log out user to ensure "safety" lol
                var user = firebase.auth().currentUser;
                console.log("new password: "+ this.newpassword)
                user.updatePassword(this.newpassword).then(function() {
                    // Update successful.
                    console.log("password update successful")
                    window.alert("Update Succesful: Please sign back in with new password!")
                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                    console.log("shits not working lol")
                });
                firebase
                    .auth()
                    .signOut()
                    .then(() =>{
                        console.log('user has been logged off');
                    })
            },
            updateName(){
                //TODO BUG: not sure why it returns to home page... for now we will log out user to ensure "safety" lol
                var user = firebase.auth().currentUser;
                console.log("new Name: "+ this.newName);
                user.updateProfile({
                    displayName: this.newName
                }).then(function() {
                    // Update successful.
                    console.log("Name update successful")
                    //console.log("New Name: " + this.user.data.displayName)
                    window.alert("Update Succesful: Please sign back in!")
                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                    console.log("shits not working lol")
                });
                firebase
                    .auth()
                    .signOut()
                    .then(() =>{
                        console.log('user has been logged off');
                    })
            }

        },
        computed: {
            //maps 'this.user' to 'this.$store.getters.user'
            ...mapGetters({
                user: "user",
            }),
        },
        data() {
            return{
                testobject:[],
                userinfo:{
                    name: "test",
                    PrimaryMajor: "",
                    SecondaryMajor: "",
                    PositionSeeking: "",
                    PersonType: "",
                    Skills: [],
                    Industry: []
                },
                email: '',
                newpassword: '',
                newName: ''
            }
        },
        mounted(){

        },
        created(){
            var db = firebase.firestore();
            var docReference = db.collection("userPreferences").doc(this.user.data.uid);
            docReference.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.userinfo.PrimaryMajor = doc.data().PrimaryMajor;
                    this.userinfo.SecondaryMajor = doc.data().SecondaryMajor;
                    this.userinfo.PositionSeeking = doc.data().PositionSeeking;
                    this.userinfo.Industry = doc.data().Industry;
                    this.userinfo.Skills = doc.data().Skills;
                    this.userinfo.PersonType = doc.data().PersonType;
                } else {
                    console.log("No such document!")
                }
            }).catch(function (error) {
                console.log("Error getting document:", error)
            })
           // this.userinfo.PrimaryMajor = PM;

        }

    }
</script>

<style scoped>
    .btn-submit{

    }
    .hover:hover {
        COLOR: blue; TEXT-DECORATION: none; font-weight: none
    }
    .social-button img{
        width:100%;
    }
    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
    body {
        font-size: .875rem;
    }
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100; /* Behind the navbar */
        padding: 48px 0 0; /* Height of navbar */
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    @media (max-width: 767.98px) {
        .sidebar {
            top: 5rem;
        }
    }
    .sidebar-sticky {
        position: relative;
        top: 0;
        height: calc(100vh - 48px);
        padding-top: .5rem;
        overflow-x: hidden;
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }
    @supports ((position: -webkit-sticky) or (position: sticky)) {
        .sidebar-sticky {
            position: -webkit-sticky;
            position: sticky;
        }
    }
    .sidebar .nav-link {
        font-weight: 500;
        color: #333;
    }
    .sidebar .nav-link .feather {
        margin-right: 4px;
        color: #999;
    }
    .sidebar .nav-link.active {
        color: #007bff;
    }

    .sidebar .nav-link:hover .feather,
    .sidebar .nav-link.active .feather {
        color: red;
    }

    .nav-item:hover {
        COLOR: blue; TEXT-DECORATION: none; font-weight: bolder
    }

    .navbar-brand {
        padding-top: .75rem;
        padding-bottom: .75rem;
        font-size: 1rem;
        background-color: rgba(0, 0, 0, .25);
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
    }

    .navbar .navbar-toggler {
        top: .25rem;
        right: 1rem;
    }
    .col-sm{
        background: #1abc9c;

    }

</style>
