<template>
  <div class = "overall">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">
    <body data-spy="scroll" data-target="#navbarResponsive">
      <nav class = "navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class = "navbar-brand" href="#"><img src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/191px-Philadelphia_Eagles_logo.svg.png"></a>
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

      </nav>

      <!-- End Navigation -->

      <!-- Start Landing Page Section -->
      <div class="landing">
          <div class="home-wrap">
              <div class = "home-inner">
              </div>
          </div>
      </div>

      <div class="caption text-center">
          <h1>Welcome to Nuno</h1>
          <h3>Udemy Bootstrap 4 Course</h3>
          <a class="btn btn-outline-light btn-lg" href="#course">Get Started</a>
      </div>
      <!-- End Landing Page Section -->

      <!-- Start Features Section -->
      <div id ="features" class = "offset">

          <!-- Start Jumboton -->
          <div class="jumbotron">
              <div class = "narrow text-center">
                  <div class="row text-center">

                      <!-- shrink the cols when the screen shrinks -->
                      <div class="col-md-6">
                          <div class="feature">
                              <!-- icon -->
                              <i class="fas fa-play-circle fa-4x" data-fa-transform="shrink-3 up-5"></i>
                              <h3>Who is TTP3?</h3>
                              <p>as;kdfsl;fads;fd;asd;askf afdsljdsa;flfda;;sdaf jkadf;lsafa;dslkdsfa;l sadfdas;l;dsflkfasd ;k;f sdj</p>
                          </div>
                      </div>

                      <!-- shrink the cols when the screen shrinks -->
                      <div class="col-md-6">
                          <div class="feature">
                              <!-- icon -->
                              <i class="fas fa-sliders-h fa-4x" data-fa-transform="shrink-4.5 up-4."></i>
                              <h3>What do we do?</h3>
                              <p>as;kdfsl;fads;fd;asd;askjka df;lsafa;dslkdsfa;l sadfdas;l;dsflkfasd ;k;f sdj</p>
                          </div>
                      </div>
                  </div><!-- End of row -->

              </div><!-- End Narrow -->
          </div> <!-- End Jumboton -->

      </div>
      <!-- End Course Section -->
      <div id ="resources" class = "offset">

          <div class="fixed-background">

              <!-- Control if content is narrow or not -->
              <div class="row dark text-center recruiter">

                  <div class="col-12">
                      <h3 class="heading">The Value Prop.</h3>
                      <div class="heading-underline"></div>
                  </div>

                  <div class="col-md-4">
                      <h3>HTML 5</h3>
                      <div class = "feature">
                          <i class="fas fa-code fa-3x"></i>
                      </div>
                      <p class="lead">Built with the latest, HTML 5.</p>
                  </div>

                  <div class="col-md-4">
                      <h3>BOOTSTRAP 4</h3>
                      <div class = "feature">
                          <i class="fas fa-bold fa-3x"></i>
                      </div>
                      <p class="lead">Built with the latest, Bootstrap 4.</p>
                  </div>

                  <div class="col-md-4">
                      <h3>CSS 3</h3>
                      <div class = "feature">
                          <i class="fab fa-css3 fa-3x"></i>
                      </div>
                      <p class="lead">Built with the latest, CSS 3.</p>
                  </div>

              </div> <!-- End Row Dark, text-center to center text -->

              <div class="row dark text-center student">
                  <div class="col-md-4">
                      <h3>HTML 5</h3>
                      <div class = "feature">
                          <i class="fas fa-code fa-3x"></i>
                      </div>
                      <p class="lead">Built with the latest, HTML 5.</p>
                  </div>

                  <div class="col-md-4">
                      <h3>BOOTSTRAP 4</h3>
                      <div class = "feature">
                          <i class="fas fa-bold fa-3x"></i>
                      </div>
                      <p class="lead">Built with the latest, Bootstrap 4.</p>
                  </div>

                  <div class="col-md-4">
                      <h3>CSS 3</h3>
                      <div class = "feature">
                          <i class="fab fa-css3 fa-3x"></i>
                      </div>
                      <p class="lead">Built with the latest, CSS 3.</p>
                  </div>

              </div>
              <div class="fixed-wrap">
                  <!-- class fixed is background image -->
                  <div class = "fixed">
                  </div>
              </div>
          </div> <!-- End fixed background -->
      </div>
      <!-- Start Constact Section -->
      <div id ="contact" class = "offset">

          <footer>
              <div class="row justify-content-center">

                  <div class="col-md-5 text-center">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/191px-Philadelphia_Eagles_logo.svg.png">
                      <p> </p>
                      <strong>Contact Info</strong>
                      <p>(734) 263-4313<br>vinayak1000@gmail.com</p>
                      <a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
                      <a href="#" target="_blank"><i class="fab fa-twitter-square"></i></a>
                      <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                  </div>

                  <!-- line that goes across page -->
                  <hr class="socket">
                  &copy; TTP3.

              </div>
          </footer>


      </div>


    </body>
  </div>
</template>





<script>
  //import Register from "@/components/Register";
  export default {
    name: 'Home',
    components: {
    //  Register
    },
      mounted(){
/*
          let recaptchaScript = document.createElement('script');
          recaptchaScript.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.slim.min.js');
          document.head.appendChild(recaptchaScript);

 */

          let recaptchaScript2 = document.createElement('script');
          recaptchaScript2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');
          document.head.appendChild(recaptchaScript2);


          let recaptchaScript3 = document.createElement('script');
          recaptchaScript3.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js');
          document.head.appendChild(recaptchaScript3);


          let recaptchaScript4 = document.createElement('script');
          recaptchaScript4.setAttribute('src', 'https://use.fontawesome.com/releases/v5.5.0/js/all.js');
          document.head.appendChild(recaptchaScript4);


      },
    data(){
      return {

      }
    },
    methods:{
      nameToChange(name){
        console.log(name)
      },
      checkLogIn(){
        return false
      }
    }
  }
</script>

<style scoped>
    body {
        overflow-x: hidden;
        font-family: 'Oswald', sans-serif;
        color: #505962;
    }

    .offset:before{
        display:block;
        content: "";
        height: 4rem;
        margin-top: -4rem;
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
        height: 2rem;
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

    /*-- Landing Page --*/
    .home-inner{
        background: url('../assets/handshake.jpg');
        background-size: contain;
        overflow:hidden;
    }
    .caption{
        width: 100%;
        max-width: 100%;
        position: absolute;
        top: 38%;
        z-index: 1;
        color: white;
        text-transform: uppercase;
    }
    .caption h1{
        font-size: 3.8rem;
        font-weight: 700;
        letter-spacing: 0.3rem;
        text-shadow: .1rem .1rem .8rem black;
        padding-bottom: 1rem;
    }
    .caption h3{
        font-size: 2rem;
        text-shadow: 0.1rem 0.1rem 0.5rem black;
        padding-bottom: 1.6rem;
    }
    .btn-lg{
        border-width: medium;
        border-radius: 0;
        padding: 0.6rem 1.3rem;
        font-size: 1.1rem;
    }



    /*============= COURSE SECTION =============*/

    .narrow {
        width: 75%;
        margin: 1.5rem auto;
        padding-top: 2rem;
    }
    .narrow h1 {
        font-size: 2.4rem;
    }

    /* button */
    .btn-secondary {
        border-width: medium;
        border-radius: 0;
        padding: .6rem 1.2rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 1rem;
        border-color: #1EBBA3;
        background-color: #1EBBA3;
        color: white;
    }

    /* change color on hover*/
    .btn-secondary:hover,
    .btn-secondary:focus {
        border-color: #189582;
        background-color: #189582;
        color: white;
    }

    /* start of feature section css */

    .jumbotron{
        margin-bottom: 0;
        padding: 2rem 0 3.5rem;
        border-radius: 0;
    }

    h3.heading {
        font-size: 1.9rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 1.9rem;
    }

    .heading-underline{
        width: 3rem;
        height: 0.2rem;
        background-color: #1ebba3;
        margin: 0 auto 2rem;
    }

    /* change colors of icons */
    .feature svg.svg-inline--fa {
        color: #1eeba3
    }

    .feature h3{
        font-size: 1.3rem;
        text-transform: uppercase;
        padding-bottom: 0.4rem;
    }
    .feature p{
        font-size: 1.1rem;
    }

    /* start of resources section */

    .fixed{
        background-image: url(https://images.pexels.com/photos/6355/desk-laptop-working-technology.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200);
    }

    /* change tint of background photo, alpha changes opacity */
    .dark{
        background-color: rgba(0,0,0, 0.75);
        color: white;
        padding: 7rem 2rem;
    }
    .fixed-background h3 {
        margin-bottom: 2rem;
    }
    .fixed-background p {
        margin-top: 1.5rem;
    }

    /* client section */

    .clients img{
        width: 100%;
        /* make it circular */
        border-radius: 50%;
    }
    blockquote .svg-inline--fa {
        color: #1EBBA3;
        margin: 1rem;
    }

    .clients-hr {
        border-top: 0.5rem solid #1EBBA3;
    }

    /* contact section */

    footer {
        background-color: #40474e;
        color: white;
        padding: 2rem 0 2rem;
        margin-top: 2rem;
    }

    footer img {
        height: 10rem;
        margin: 1.5rem 0;
    }

    footer a {
        color: white;
    }

    footer svg.svg-inline--fa{
        font-size: 1.6rem;
        margin: 1.2rem 0.5rem 0 0;
    }

    footer svg.svg-inline--fa:hover{
        color:#1EBBA3!important;
    }
    hr.socket{
        width:100%;
        border-top: 0.2rem solid #666b71;
        margin-top: 3rem;
    }

    /* Media queries */

    /* if screen is less than that size */
    @media (max-width: 767px) {
        .caption h1{
            font-size: 2.3rem;
            font-weight: 700;
            letter-spacing: 0.15rem;
            text-shadow: .1rem .1rem .8rem black;
            padding-bottom: 0.5rem;
        }
        .caption h3{
            font-size: 1.2rem;
            text-shadow: 0.1rem 0.1rem 0.5rem black;
            padding-bottom: 1.2rem;
        }
        .btn-lg{
            border-width: medium;
            border-radius: 0;
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
        .narrow h1{
            font-size: 1.5rem;
        }
        .clients img{
            max-width: 50%;
            display: block;
            margin: 0 auto;
        }
    }


    /*============ BOOTSTRAP BREAK POINTS:
    Extra small (xs) devices (portrait phones, less than 576px)
    No media query since this is the default in Bootstrap
    Small (sm) devices (landscape phones, 576px and up)
    @media (min-width: 576px) { ... }
    Medium (md) devices (tablets, 768px and up)
    @media (min-width: 768px) { ... }
    Large (lg) devices (desktops, 992px and up)
    @media (min-width: 992px) { ... }
    Extra (xl) large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { ... }
    =============*/

    /*--- Extra Bootstrap Column Padding --*/
    [class*="col-"] {
        padding: 1rem;
    }

    /*--- Bootstrap Mobile Gutter Fix --*/
    .row, .container-fluid {
        margin-left: 0px!important;
        margin-right: 0px!important;
    }

    /*--- Fix for Fixed Navbar jumping on scroll --*/
    .fixed-top  {
        -webkit-backface-visibility: hidden;
    }

    /*--- Fixed Landing Page Section --*/
    .landing {
        position: relative;
        width: 100%;
        height: 100vh;
        display: table;
        z-index: 0;
    }
    .home-wrap {
        clip: rect(0, auto, auto, 0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .home-inner {
        position: fixed;
        display: table;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: transform;
    }

    /*--- iOS Fixed Background Image --*/
    .fixed-background {
        position: relative;
        width: 100%;
    }
    .fixed-wrap {
        clip: rect(0, auto, auto, 0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .fixed {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        -webkit-transform: translateZ(-1);
        transform: translateZ(-1);
        will-change: transform;
    }

    .recruiter {
        padding-bottom: 0px;
        z-index: 1!important;
    }

    .student {
        padding-top: 2px;
        z-index: 1!important;
    }
    .overall{
        z-index: -10!important;
    }
</style>
