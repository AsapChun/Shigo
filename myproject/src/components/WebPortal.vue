<template>
    <div>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Nuno - Responsive Bootstrap Theme</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">
    </head>
        <!-- Modal -->
        <b-modal ref = "myModalRecruiter" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">


            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <b-carousel ref="carouselExampleIndicatorsRecruiter" class="carousel slide" data-interval="false" data-wrap = "false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">1</span>What are you looking for?</legend>
                                            <select id="job" name="field4">
                                                <optgroup label="Job-Seeking Status">
                                                    <option value="Full-Time">Seeking Full-Time Position</option>
                                                    <option value="Part-Time">Seeking Part-Time Position</option>
                                                    <option value="Internship">Seeking Internship</option>
                                                </optgroup>
                                            </select>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="nextRecruiter" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">2</span>What is your primary major?</legend>
                                            <select name="field4">
                                                <optgroup label="Major/Academic-Background #1">
                                                    <option value="Business">Business</option>
                                                    <option value="Computer-Science">Computer Science</option>
                                                    <option value="Political-Science">Political Science</option>
                                                </optgroup>
                                            </select>
                                            <legend>What is your secondary major (if applicable)?</legend>
                                            <select name="field4">
                                                <optgroup label="Major/Academic-Background #2">
                                                    <option value="Business">Business</option>
                                                    <option value="Computer-Science">Computer Science</option>
                                                    <option value="Political-Science">Political Science</option>
                                                    <option value="N/A">N/A</option>
                                                </optgroup>
                                            </select>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="prevRecruiter" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="nextRecruiter" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">3</span>What industries are you interested in working in?</legend>
                                            <input type="text" name="Industry-Interests" placeholder="Please seperate interests by a comma (e.g Sales, Design, Marketing...)">
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="prevRecruiter" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="nextRecruiter" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">4</span>What are your personal skills?</legend>
                                            <input type="text" name="Industry-Interests" placeholder="Please seperate skills by a comma (e.g Front-End, Strategy, C++...)">
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="prevRecruiter" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="nextRecruiter" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">5</span>Please upload your resume! We will display this for recruiters, much like how you would hand them your resume at a career fair!</legend>
                                            <div class="upload-btn-wrapper">
                                                <input type="file" name="resume">
                                                <button class="btn-resume-upload" onclick="fff(); return false;">Upload Resume</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="prevRecruiter" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsRecruiter" @click="nextRecruiter" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-carousel>
                </div>
            </div>
        </b-modal>

        <!-- Modal -->
        <b-modal ref = "myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">


            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <b-carousel ref="carouselExampleIndicatorsStudent" class="carousel slide" data-interval="false" data-wrap = "false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">1</span>What are you looking for?</legend>
                                            <select name="field4">
                                                <optgroup label="Job-Seeking Status">
                                                    <option value="Full-Time">Seeking Full-Time Position</option>
                                                    <option value="Part-Time">Seeking Part-Time Position</option>
                                                    <option value="Internship">Seeking Internship</option>
                                                </optgroup>
                                            </select>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="nextStudent" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">2</span>What is your primary major?</legend>
                                            <select name="field4">
                                                <optgroup label="Major/Academic-Background #1">
                                                    <option value="Business">Business</option>
                                                    <option value="Computer-Science">Computer Science</option>
                                                    <option value="Political-Science">Political Science</option>
                                                </optgroup>
                                            </select>
                                            <legend>What is your secondary major (if applicable)?</legend>
                                            <select name="field4">
                                                <optgroup label="Major/Academic-Background #2">
                                                    <option value="Business">Business</option>
                                                    <option value="Computer-Science">Computer Science</option>
                                                    <option value="Political-Science">Political Science</option>
                                                    <option value="N/A">N/A</option>
                                                </optgroup>
                                            </select>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="prevStudent" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="nextStudent" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">3</span>What industries are you interested in working in?</legend>
                                            <input type="text" name="Industry-Interests" placeholder="Please seperate interests by a comma (e.g Sales, Design, Marketing...)">
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="prevStudent" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="nextStudent" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">4</span>What are your personal skills?</legend>
                                            <input type="text" name="Industry-Interests" placeholder="Please seperate skills by a comma (e.g Front-End, Strategy, C++...)">
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="prevStudent" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="nextStudent" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="form-style-5">
                                    <form>
                                        <fieldset>
                                            <legend><span class="number text-center">5</span>Please upload your resume! We will display this for recruiters, much like how you would hand them your resume at a career fair!</legend>
                                            <div class="upload-btn-wrapper">
                                                <input type="file" name="resume">
                                                <button class="btn-resume-upload" onclick="fff(); return false;">Upload Resume</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class= "testing">
                                    <div class="carosal-button-prev">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="prevStudent" data-slide="prev">Prev</button>
                                    </div>
                                    <div class="carosal-button-next">
                                        <button class="submit2" href="#carouselExampleIndicatorsStudent" @click="nextStudent" data-slide="next">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-carousel>
                </div>
            </div>
        </b-modal>
    <body>
    <div class="cont">
        <div class="form sign-in">
            <h2>Welcome back,</h2>
            <label>
                <span>Email</span>
                <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        value
                        required
                        autofocus
                        v-model="loginform.email"/>
            </label>
            <label>
                <span>Password</span>
                <input type="password"
                       id="password"
                        class="form-control"
                        name="password"
                        required
                        v-model="loginform.password"/>
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button @click="submit" type="submit" class="submit">Sign In</button>
            <GoogleSign></GoogleSign>
        </div>
        <div class="sub-cont">
            <div class="img">
                <div class="img__text m--up">
                    <h2>New here?</h2>
                    <p>Sign up and discover great amount of new opportunities!</p>
                </div>
                <div class="img__text m--in">
                    <h2>One of us?</h2>
                    <p>If you already has an account, just sign in. We've missed you!</p>
                </div>
                <div class="img__btn">
                    <span class="m--up">Sign Up</span>
                    <span class="m--in">Sign In</span>
                </div>
            </div>
            <div class="form sign-up">
                <h2>Time to feel like home,</h2>
                <label>
                    <span>Name</span>
                    <input
                            id = "name"
                            type="text"
                            class="form-control"
                            name = "name"
                            value
                            required
                            autofocus
                            v-model="registerform.name"
                            />
                </label>
                <label>
                    <span>Email</span>
                    <input
                            id="Remail"
                            type="email"
                            class="form-control"
                            name="email"
                            value
                            required
                            autofocus
                            v-model="registerform.email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input
                            id="Rpassword"
                            type="password"
                            class="form-control"
                            name="password"
                            value
                            required
                            autofocus
                            v-model="registerform.password"/>
                </label>
                <label class = "student-recruiter-div">
                    <span id="student-recruiter-label">Are you a student or a recruiter?</span>
                    <select id="student-recruiter" class ="form-style-5" name="field4">
                        <optgroup label="Please indicate if you are a student or recruiter.">
                            <option value="Error">-</option>
                            <option value="Student">Student</option>
                            <option value="Recruiter">Recruiter</option>
                        </optgroup>
                    </select>
                </label>
                <b-button id ="sign-up-button" @click="signin" type="button" class="submit">Sign Up</b-button>
                <button type="button" class="fb-btn">Join with <span>google</span></button>
            </div>
        </div>
    </div>
    </body>
    </div>
</template>

<script>
    import GoogleSign from "@/components/GoogleSign";
    import firebase from "firebase";
    export default {
        name: "WebPortal",
        components: {GoogleSign},
        mounted(){
            let recaptchaScript = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');
            document.head.appendChild(recaptchaScript);

            let recaptchaScript2 = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js');
            document.head.appendChild(recaptchaScript2);

            let recaptchaScript3 = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://use.fontawesome.com/releases/v5.5.0/js/all.js');
            document.head.appendChild(recaptchaScript3);


            document.querySelector('.img__btn').addEventListener('click', function () {
                document.querySelector('.cont').classList.toggle('s--signup')
            })

        },
        data(){
            return{
                //form model object to create a manual user
                loginform: {
                    email: "",
                    password: ""
                },
                registerform:{
                    name:"",
                    email:"",
                    password:""
                },
                error: null,
            };
        },
        methods:{
            submit() {
                console.log("webportal signin");
                firebase
                    .auth()
                    //access the form above and uses the firebase function
                    .signInWithEmailAndPassword(this.loginform.email, this.loginform.password)
                    .then( data => {
                        //sign in successful
                        data.valueOf()
                        this.$router.replace(({name: "UserHome"}))
                    })
                    .catch(err =>{
                        //unsucessful sigin
                        this.error = err.message();
                        console.log("Sign In with email and password error: "+ this.error)
                    });
            },
            signin(){
                    var element = document.getElementById("student-recruiter").value;
                    if (element == "Error"){
                        document.getElementById("student-recruiter-label").innerHTML = 'Please indicate if you are a student or recruiter';
                        document.getElementById("student-recruiter-label").style.color = '#FF0000';
                        alert("Please indicate if you are a student or recruiter to proceed with sign-up.");
                        return;
                    } else if (element == "Student"){
                        this.$refs['myModal'].show();
                    } else {
                        this.$refs['myModalRecruiter'].show();
                       // document.getElementById("myModalRecruiter").modal("toggle");
                    }

                /*
                console.log("webportal register");
                console.log("email: "+ this.registerform.email + "; password: "+ this.registerform.password);
                firebase
                    .auth()
                    //takes the inputs from the form object above and uses the firebase function
                    .createUserWithEmailAndPassword(this.registerform.email, this.registerform.password)
                    //promise handler
                    .then(data =>{
                        data.user
                            //adds the user name to firebase user object
                            .updateProfile({
                                displayName: this.registerform.name
                            })
                            .then(() => {
                                this.$router.replace(({name: "UserHome"}))
                            });
                    }) // error handler
                    .catch((err => {
                        this.error=err.message;
                    }));

                 */
            },
            nextRecruiter(){
                this.$refs.carouselExampleIndicatorsRecruiter.next()
            },
            prevRecruiter(){
                this.$refs.carouselExampleIndicatorsRecruiter.prev();
            },
            nextStudent(){
                this.$refs.carouselExampleIndicatorsStudent.next();
            },
            prevStudent(){
                this.$refs.carouselExampleIndicatorsStudent.prev();
            }
        }
    }
</script>

<style scoped >
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family:'Oswald', Helvetica, Arial, sans-serif;
        background: #000000;
    }

    input, button {
        border: none;
        outline: none;
        background: none;
    }

    .tip {
        font-size: 20px;
        margin: 40px auto 50px;
        text-align: center;
    }

    .cont {
        overflow: hidden;
        position: relative;
        width: 900px;
        height: 650px;
        margin: 0 auto 100px;
        background: #fff;
    }

    .form {
        position: relative;
        width: 640px;
        height: 100%;
        -webkit-transition: -webkit-transform 1.2s ease-in-out;
        transition: -webkit-transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
        padding: 50px 30px 0;
    }

    .sub-cont {
        overflow: hidden;
        position: absolute;
        left: 640px;
        top: 0;
        width: 900px;
        height: 100%;
        padding-left: 260px;
        background: #fff;
        -webkit-transition: -webkit-transform 1.2s ease-in-out;
        transition: -webkit-transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
    }
    .cont.s--signup .sub-cont {
        -webkit-transform: translate3d(-640px, 0, 0);
        transform: translate3d(-640px, 0, 0);
    }

    button {
        display: block;
        margin: 0 auto;
        width: 260px;
        height: 36px;
        border-radius: 30px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
    }

    .img {
        overflow: hidden;
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;
        width: 260px;
        height: 100%;
        padding-top: 360px;
    }
    .img:before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 900px;
        height: 100%;
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg");
        background-size: cover;
        -webkit-transition: -webkit-transform 1.2s ease-in-out;
        transition: -webkit-transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
    }
    .img:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }
    .cont.s--signup .img:before {
        -webkit-transform: translate3d(640px, 0, 0);
        transform: translate3d(640px, 0, 0);
    }
    .img__text {
        z-index: 2;
        position: absolute;
        left: 0;
        top: 50px;
        width: 100%;
        padding: 0 20px;
        text-align: center;
        color: #fff;
        -webkit-transition: -webkit-transform 1.2s ease-in-out;
        transition: -webkit-transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out;
        transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
    }
    .img__text h2 {
        margin-bottom: 10px;
        font-weight: normal;
    }
    .img__text p {
        font-size: 14px;
        line-height: 1.5;
    }
    .cont.s--signup .img__text.m--up {
        -webkit-transform: translateX(520px);
        transform: translateX(520px);
    }
    .img__text.m--in {
        -webkit-transform: translateX(-520px);
        transform: translateX(-520px);
    }
    .cont.s--signup .img__text.m--in {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    .img__btn {
        overflow: hidden;
        z-index: 2;
        position: relative;
        width: 100px;
        height: 36px;
        margin: 0 auto;
        background: transparent;
        color: #fff;
        text-transform: uppercase;
        font-size: 15px;
        cursor: pointer;
    }
    .img__btn:after {
        content: '';
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #fff;
        border-radius: 30px;
    }
    .img__btn span {
        position: absolute;
        left: 0;
        top: 0;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
        -webkit-transition: -webkit-transform 1.2s;
        transition: -webkit-transform 1.2s;
        transition: transform 1.2s;
        transition: transform 1.2s, -webkit-transform 1.2s;
    }
    .img__btn span.m--in {
        -webkit-transform: translateY(-72px);
        transform: translateY(-72px);
    }
    .cont.s--signup .img__btn span.m--in {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    .cont.s--signup .img__btn span.m--up {
        -webkit-transform: translateY(72px);
        transform: translateY(72px);
    }

    h2 {
        width: 100%;
        font-size: 26px;
        text-align: center;
    }

    label {
        display: block;
        width: 260px;
        margin: 25px auto 0;
        text-align: center;
    }
    label span {
        font-size: 12px;
        color: #cfcfcf;
        text-transform: uppercase;
    }

    input {
        display: block;
        width: 100%;
        margin-top: 5px;
        padding-bottom: 5px;
        font-size: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        text-align: center;
    }

    .forgot-pass {
        margin-top: 15px;
        text-align: center;
        font-size: 12px;
        color: #cfcfcf;
    }

    .submit {
        margin-top: 40px;
        margin-bottom: 20px;
        color: #1EBBA3;
        background: #000000;
        text-transform: uppercase;
    }

    .submit:hover,
    .submit:focus {
        color: #000000;
        background: #1EBBA3;
    }

    .fb-btn {
        border: 2px solid #d3dae9;
        color: #8fa1c7;
    }
    .fb-btn span {
        font-weight: bold;
        color: #455a81;
    }

    .sign-in {
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    .cont.s--signup .sign-in {
        -webkit-transition-timing-function: ease-in-out;
        transition-timing-function: ease-in-out;
        -webkit-transition-duration: 1.2s;
        transition-duration: 1.2s;
        -webkit-transform: translate3d(640px, 0, 0);
        transform: translate3d(640px, 0, 0);
    }

    .sign-up {
        -webkit-transform: translate3d(-900px, 0, 0);
        transform: translate3d(-900px, 0, 0);
    }
    .cont.s--signup .sign-up {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .icon-link {
        position: absolute;
        left: 5px;
        bottom: 5px;
        width: 32px;
    }
    .icon-link img {
        width: 100%;
        vertical-align: top;
    }
    .icon-link--twitter {
        left: auto;
        right: 5px;
    }

    .form-style-5{
        max-width: 500px;
        padding: 10px 20px;
        background: #ffffff;
        margin: 10px auto;
        padding: 20px;
        padding-bottom: 5px;
        background: #ffffff;
        border-radius: 8px;
        font-family: 'Oswald', "Times New Roman", Times, serif;
    }
    .form-style-5 fieldset{
        border: none;
    }
    .form-style-5 legend {
        font-size: 1.4em;
        margin-bottom: 10px;
    }
    .form-style-5 label {
        display: block;
        margin-bottom: 8px;
    }
    .form-style-5 input[type="text"],
    .form-style-5 input[type="date"],
    .form-style-5 input[type="datetime"],
    .form-style-5 input[type="email"],
    .form-style-5 input[type="number"],
    .form-style-5 input[type="search"],
    .form-style-5 input[type="time"],
    .form-style-5 input[type="url"],
    .form-style-5 textarea,
    .form-style-5 select {
        font-family: 'Oswald', "Times New Roman", Times, serif;
        background: rgba(255,255,255,.1);
        border: none;
        border-radius: 4px;
        font-size: 15px;
        margin: 0;
        outline: 0;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        background-color: #e8eeef;
        color:#8a97a0;
        -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        margin-bottom: 30px;
        float:right;
    }
    .form-style-5 input[type="text"]:focus,
    .form-style-5 input[type="date"]:focus,
    .form-style-5 input[type="datetime"]:focus,
    .form-style-5 input[type="email"]:focus,
    .form-style-5 input[type="number"]:focus,
    .form-style-5 input[type="search"]:focus,
    .form-style-5 input[type="time"]:focus,
    .form-style-5 input[type="url"]:focus,
    .form-style-5 textarea:focus,
    .form-style-5 select:focus{
        background: #d2d9dd;
    }
    .form-style-5 select{
        -webkit-appearance: menulist-button;
        height:35px;
    }
    .form-style-5 .number {
        background: #1EBBA3;
        color: #fff;
        height: 30px;
        width: 30px;
        display: inline-block;
        font-size: 0.8em;
        margin-right: 4px;
        line-height: 30px;
        text-align: center;
        text-shadow: 0 1px 0 rgba(255,255,255,0.2);
        border-radius: 15px 15px 15px 0px;
    }

    .form-style-5 input[type="submit"],
    .form-style-5 input[type="button"]
    {
        position: relative;
        display: block;
        padding: 19px 39px 18px 39px;
        color: #FFF;
        margin: 0 auto;
        background: #1abc9c;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: 100%;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
    }
    .form-style-5 input[type="submit"]:hover,
    .form-style-5 input[type="button"]:hover
    {
        background: #109177;
    }

    .testing{
        display: flex;
    }

    .carosal-button-prev{
        flex: 50%;
        width: 40px;
        padding: 10px;
    }

    .carosal-button-next{
        flex: 50%;
        width: 33%;
        padding: 10px;
    }

    .submit2 {
        color: #1EBBA3;
        background: #000000;
        text-transform: uppercase;
        max-width: 50%;
    }

    .submit2:hover,
    .submit2:focus {
        color: #000000;
        background: #1EBBA3;
        max-width: 50%;
    }

    .modal-dialog,
    .modal-content {
        /* 80% of window height */
        height: 80%;
    }

    .modal-body {
        /* 100% = dialog height, 120px = header + footer */
        max-height: calc(80% - 240px);
        overflow-y: scroll;
    }

    .upload-btn-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        padding: 10px;
    }

    .btn-resume-upload {
        border: 2px solid #1EBBA3;
        color: #1EBBA3;
        background-color: white;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 10px;
        font-weight: bold;
    }



    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }

    .student-recruiter-div {
        padding-bottom: 5px!important;
    }

    #sign-up-button {
        margin-top: 5px!important;
    }
</style>
