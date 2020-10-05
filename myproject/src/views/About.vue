<template>
    <div>
        <head>
            <title>About</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body data-spy="scroll" data-target="#navbarResponsive">
        <nav class = "navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class = "navbar-brand" href="#"><img src = "../assets/shigo-logo.jpg" ></a>
            <button class = "navbar-toggler" type="button" data-toggle = "collapse" data-target = "#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- <div id="app"> -->
            <div class ="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class = "nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class = "nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class = "nav-link" to="/webportal">Web Portal</router-link>
                    </li>
                </ul>
            </div>
            <!-- End Navigation -->
        </nav>

        <main role="main">

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item embed-responsive-item active">
                        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                        <div class="container">
                            <div class="carousel-caption text-left">
                                <img src="../assets/Mission-Picture.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item embed-responsive-item">
                        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                        <div class="container">
                            <div class="carousel-caption">
                                <img src="../assets/Our-Mission-Picture.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item embed-responsive-item">
                        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                        <div class="container">
                            <div class="carousel-caption text-right">
                                <img src="../assets/User-Journey-Picture.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            <!-- Marketing messaging and featurettes
            ================================================== -->
            <!-- Wrap the rest of the page in another container to center all the content. -->

            <div class="container marketing">
                <h1>THE TEAM</h1>

                <!-- Three columns of text below the carousel -->
                <div class="row">
                    <div class="col-lg-6">
                        <div class="profile-pic">
                           <img src="../assets/mypic.jpg" alt="Avatar">
                        </div>
                       <!-- <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
                        <h2>Sean Chun</h2>
                        <p> - Boston University ‘20 Econ + CS <br>
                            - Software Engineer @ Citizens Bank <br>
                            - Global Citizen: Lived in LA, Tokyo, Bangkok <br>
                            - Will be very sad if the Lakers dont win a championship
                        </p>
                        <p><button class="btn btn-secondary" v-on:click="LinkedIn('Sean', $event)">Check out LinkedIn &raquo;</button></p>
                    </div><!-- /.col-lg-4 -->
                    <!--
                    <div class="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        <h2>Heading</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div> -->
                    <!-- /.col-lg-4 -->
                    <div class="col-lg-6">
                        <div class="profile-pic">
                           <img src="../assets/yakpic.jpeg" alt="Avatar">
                        </div>
                       <!-- <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
                        <h2>Vinayak Kannan</h2>
                        <p> - University of Michigan '20 Business Administration <br>
                            - Business Analyst @ Mckinsey & Company <br>
                            - Aspiring Bollywood Actor <br>
                            - Born in South Africa and raised in Tokyo
                        </p>
                        <p><button class="btn btn-secondary" v-on:click="LinkedIn('yak', $event)">Check out LinkedIn &raquo;</button></p>
                    </div> <!-- /.col-lg-4 --, $event>    -->
                </div><!-- /.row -->


                <!-- START THE FEATURETTES -->

                <hr class="featurette-divider">

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">COVID-19 Pandemic<br> <span class="text-muted">Changed the way we interact with one another</span></h2>
                        <p class="lead">Shigo presents a solution to circumvent the lose of career fairs and important in-person events by offering a digital platform to students to connect with recruiters</p>
                    </div>
                    <div class="col-md-5">
                           <img class="featurette-image" src="../assets/covidpic.png" alt="">
                    </div>
                </div>

                <hr class="featurette-divider">

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Make Connecting Simple! <span class="text-muted">Shigo uses Zoom video conferencing technology to allow for a fully in-browser experience.</span></h2>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="featurette-image" src="../assets/Connection_Pic.jpg" alt="" width="380" height="250" >
                     <!--   <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
              -->      </div>
                </div>

                <hr class="featurette-divider">

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Meet hundreds of employers all at the same time! <span class="text-muted">Find your career after college!</span></h2>
                    </div>
                    <div class="col-md-5">
                        <img class="featurette-image" src="../assets/job-picture.jpg" alt="" width="400" height="300" >
                    </div>
                </div>

                <hr class="featurette-divider">

                <!-- /END THE FEATURETTES -->

            </div><!-- /.container -->


            <!-- FOOTER -->
            <footer class="container">
                <p class="float-right"><a href="#">Back to top</a></p>
                <p>&copy; 2017-2020 Shigo, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </main>
        </body>
    </div>
</template>

<script>
 // import Login from "@/components/Login";
  export default {
    name: 'About',
    components: {
  //    Login,
    },
      methods: {
            LinkedIn: function(name, event){
                if(event){
                    if(name === "Sean") {
                        var surl = "https://www.linkedin.com/in/sean-chun-37555815a/"

                        window.open(surl);
                    } else if(name ==="yak") {
                        var vurl = "https://www.linkedin.com/in/vinayakkannan/"

                        window.open(vurl);
                    }
                }
            }
      },
      mounted(){
          //jQuery library
          let recaptchaScript2 = document.createElement('script');
          recaptchaScript2.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
          document.head.appendChild(recaptchaScript2);
          // Popper JS
          let recaptchaScript3 = document.createElement('script');
          recaptchaScript3.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js');
          document.head.appendChild(recaptchaScript3);
          // Latest compiled JavaScript
          let recaptchaScript4 = document.createElement('script');
          recaptchaScript3.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
          document.head.appendChild(recaptchaScript4);
      }
  }
</script>

<style scoped>
    body {
        overflow-x: hidden;
        font-family: 'Oswald', sans-serif;
        color: #505962;
    }

    /*--- Navigation --*/
    .navbar{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        background: rgba(0,0,0,0.6)!important;
    }
    /*-- height of brand logo! --*/
    .navbar-brand img{
        height: 6rem;
    }
    /*-- space out links! --*/
    .navbar-nav li {
        padding-right: 0.7rem;
    }
    /*-- color of link! --*/
    .navbar-dark .navbar-nav .nav-link{
        color: white;
        padding-top: 0.8rem;
    }
    /*-- color of hover! --*/
    .navbar-dark .navbar-nav .nav-link.active,
    .navbar-dark .navbar-nav .nav-link:hover{
        color: #1ebba3;
    }

    body {
        padding-top: 7.6rem;
        padding-bottom: 3rem;
        color: #5a5a5a;
    }


    /* CUSTOMIZE THE CAROUSEL
    -------------------------------------------------- */

    /* Carousel base class */
    .carousel {
        margin-bottom: 4rem;
    }
    /* Since positioning the image, we need to help out the caption */
    .carousel-caption {
        bottom: 3rem;
        z-index: 10;
    }

    .carousel-caption img{
        height: 27rem;
    }

    /* Declare heights because of positioning of img element */
    .carousel-item {
        height: 32rem;
    }
    .carousel-item > img {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        height: 32rem;
    }


    /* MARKETING CONTENT
    -------------------------------------------------- */

    /* Center align the text within the three columns below the carousel */
    .marketing .col-lg-4 {
        margin-bottom: 1.5rem;
        text-align: center;
    }
    .profile-pic img {
        height: 12rem;
        border-radius: 50%;
    }
    .marketing h1 {
        text-align: center;
    }
    .marketing h2 {
        font-weight: 400;
    }
    .marketing .col-lg-4 p {
        margin-right: .75rem;
        margin-left: .75rem;
    }


    /* Featurettes
    ------------------------- */
    .featurette-image{
        padding-top: 7rem;
        height: 25rem;
    }
    .featurette-divider {
        margin: 5rem 0; /* Space out the Bootstrap <hr> more */
    }

    /* Thin out the marketing headings */
    .featurette-heading {
        font-weight: 300;
        line-height: 1;
        letter-spacing: -.05rem;
    }


    /* RESPONSIVE CSS
    -------------------------------------------------- */

    @media (min-width: 40em) {
        /* Bump up size of carousel content */
        .carousel-caption p {
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
        }

        .featurette-heading {
            font-size: 50px;
        }
    }

    @media (min-width: 62em) {
        .featurette-heading {
            margin-top: 7rem;
        }
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


</style>
