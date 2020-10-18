<template>
    <div>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <title>User Home</title>
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
                                    <a class="nav-link active" href="#">
                                        <span data-feather="home"></span>
                                        <div class="hover">
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
                                        <div class="hover" @click="goToMessagingComponent">
                                            Messages
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="users"></span>
                                        <div class="hover" >
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
                                    <a class="nav-link" href="#">
                                        <span data-feather="layers"></span>
                                        <div class="hover" @click="goToSettingComponent">
                                            Settings
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <!--

                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul class="nav flex-column mb-2">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Current month
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Last quarter
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Social engagement
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>
                            -->
                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Welcome Back {{user.data.displayName}}!</h1>

                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group mr-2">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">FAQ</button>
                                </div>

                                <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
                                    This week
                                </button> -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-8">
                                <h4>Upcoming Events</h4>
                                this will contain a google calendar
                            </div>
                            <div class="col-sm-4">
                                <h4>Messages/Friends</h4>
                                This will contain a box of messages</div>
                        </div>
                        <div class="row">
                            <div class="col-sm"><h6>Favorite Companies</h6></div>
                            <div class="col-sm"><h6>My Skills</h6></div>
                            <div class="col-sm"><h6>Current Resume</h6></div>
                        </div>
                    </main>


                </div>
            </div>
        </body>
    </div>
</template>



<script>
    import LogOut from "@/components/LogOut";
    import { mapGetters } from "vuex";
    import firebase from "firebase";
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
            checkAuth(){
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        //User is signed in
                    } else {
                        //No user is signed in
                    }
                })
            },
            connectLinkedIn(){
                this.$router.replace(({name: "Linkedin"}))

            },
            goToSettingComponent(){
              this.$router.replace(({name: "SettingsComponent"}))
            },
            goToMessagingComponent(){
              this.$router.replace({name: "MessagingComponent"})
            },
            createZoomMeeting(){
                //this.$router.replace(({name: "CreateZoomMeeting"}))
                this.$router.replace(({name: "CreateZoomMeeting"}))
            },
            setPreferences(){
                //this.$router.replace(({name: "CreateZoomMeeting"}))
                this.$router.replace(({name: "setPreferences"}))
            }
        },
        mounted(){
            let recaptchaScript2 = document.createElement('script');
            recaptchaScript2.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js');
            document.head.appendChild(recaptchaScript2);

            let recaptchaScript = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js');
            document.head.appendChild(recaptchaScript);

            let recaptchaScript3 = document.createElement('script');
            recaptchaScript3.setAttribute('src', '../assets/dist/js/bootstrap.bundle.min.js');
            document.head.appendChild(recaptchaScript3);

            let recaptchaScript4 = document.createElement('script');
            recaptchaScript4.setAttribute('src', 'https://code.jquery.com/jquery-3.5.1.slim.min.js');
            recaptchaScript4.setAttribute('integrity', 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj');
            recaptchaScript4.setAttribute('crossorigin', 'anonymous"');
            document.head.appendChild(recaptchaScript4);




        }
    }
</script>

<style scoped>
    .hover:hover {
        COLOR: blue; TEXT-DECORATION: none; font-weight: none
    }
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

    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }

    body {
        font-size: .875rem;
    }

    .feather {
        width: 16px;
        height: 16px;
        vertical-align: text-bottom;
    }

    /*
     * Sidebar
     */

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

    .sidebar-heading {
        font-size: .75rem;
        text-transform: uppercase;
    }

    /*
     * Navbar
     */

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

    /*
    .navbar .form-control {
        padding: .75rem 1rem;
        border-width: 0;
        border-radius: 0;
    }

     */

    .form-control-dark {
        color: #fff;
        background-color: rgba(255, 255, 255, .1);
        border-color: rgba(255, 255, 255, .1);
    }

    .form-control-dark:focus {
        border-color: transparent;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
    }

</style>
