<template>
    <div>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <title>Messaging</title>
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
                                <a class="nav-link active" href="#">
                                    <span data-feather="shopping-cart"></span>
                                    <div class="hover" >
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
                                <a class="nav-link" href="#">
                                    <span data-feather="layers"></span>
                                    <div class="hover" @click="goToSettingComponent">
                                        Settings
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Messaging</h1>

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

                        </div>
                        <div class="col-sm">

                        </div>
                    </div>
                </main>


            </div>
        </div>
        </body>
    </div>
    
</template>

<script>
    export default {
        name: "Messaging-Component",
        methods:{
            goToDashboard(){
                this.$router.replace(({name: "UserHome"}))
            },
            goToSettingComponent(){
                this.$router.replace(({name: "SettingsComponent"}))
            }
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
