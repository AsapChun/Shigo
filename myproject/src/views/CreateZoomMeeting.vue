<template>
    <div id = "div1">
        <head>
            <link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.7.5/css/bootstrap.css" />
            <link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.7.5/css/react-select.css" />
        </head>
        <body class="ReactModal__Body--open">
        <nav id="nav-tool" class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">MyMeetingApp</a>
                </div>
                <div id="navbar">
                    <form class="navbar-form navbar-right" id="meeting_form">
                        <div class="form-group">
                            <input type="text" name="display_name" id="display_name" value="WebSDK1.7.7#CDN" placeholder="Name" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="text" name="meeting_number" id="meeting_number" value="" placeholder="Meeting Number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <input type="text" name="meeting_pwd" id="meeting_pwd" value="" placeholder="Meeting Password" class="form-control">
                        </div>

                        <div class="form-group">
                            <select id="meeting_role" class="selectpicker">
                                <option value=0>Attendee</option>
                                <option value=1>Host</option>
                                <option value=5>Assistant</option>
                            </select>
                        </div>

                        <button @click="getSignature" class="btn btn-primary" id="join_meeting">Join</button>
                    </form>
                </div><!--/.navbar-collapse -->
            </div>
        </nav>

            <!-- added on import -->
            <!--<div id="zmmtg-root"></div> -->
            <div id="aria-notify-area"></div>
            <!-- added on meeting init -->
            <div class="ReactModalPortal"></div>
            <div class="ReactModalPortal"></div>
            <div class="ReactModalPortal"></div>
            <div class="ReactModalPortal"></div>
            <div class="global-pop-up-box"></div>
            <div class="sharer-controlbar-container sharer-controlbar-container--hidden"></div>

        </body>


    </div>
</template>

<script>
    //import { ZoomMtg } from '@zoomus/websdk';

  //import {ZoomLib} from '@node_modules/@zoomus/websdk/dist/lib/'
    var API_KEY = 'Bd7JV-1oRG-n5owlUcvjjA';
    var API_SECRECT = 'cYjqYGaCH6atevG2qYFjuLVkYBo1clOhdrF5';
    //const zoomMeeting = document.getElementById("zmmtg-root");
    export default {
        name: "CreateZoomMeeting",
        data: function(){
            return{
                src: "",
                meetConfig: {
                    apiKey: API_KEY,
                    apiSecret: API_SECRECT,
                    meetingNumber: '74083761368',
                    leaveUrl: 'https://zoom.us.com',
                    userName: 'schun',
                    userEmail: 'schun@bu.com', // required for webinar
                    passWord: '0XBiFi', // if required
                    role:  0 // 1 for host; 0 for attendee or webinar
                },
                signature: {}
            };
        },
        mounted(){
            const ZoomMtg = import('@zoomus/websdk').then(module => {
                const {ZoomMtg} = module;
                console.log('initial zoom')
                //ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.7/lib', '/av');
                console.log("ZoomMeeting component mounting!!!")
                console.log("checkSystemRequirements");
                console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));
                ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.7/lib', '/av');
                ZoomMtg.preLoadWasm();
                ZoomMtg.prepareJssdk();
                return ZoomMtg
            });
           // console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));
            console.log('place holder'+ ZoomMtg)
            //ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.7/lib', '/av');
            /*
            console.log("ZoomMeeting component mounting!!!")
            console.log("checkSystemRequirements");
            */

/*
            const myScript = document.createElement('script');
            myScript.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.min.js');
            const div1 = document.getElementById("div1");
            div1.appendChild(myScript);
            console.log("addeded")
            eval(`$('#div1').html('jQuery Loaded')`);


/*
            let recaptchaScrip = document.createElement('script')
            recaptchaScrip.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
            document.head.appendChild(recaptchaScrip)
            */

            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://source.zoom.us/1.7.6/lib/vendor/react.min.js')
            document.head.appendChild(recaptchaScript)

            let recaptchaScript2 = document.createElement('script')
            recaptchaScript2.setAttribute('src', 'https://source.zoom.us/1.7.6/lib/vendor/react-dom.min.js')
            document.head.appendChild(recaptchaScript2)

            let recaptchaScript3 = document.createElement('script')
            recaptchaScript3.setAttribute('src', 'https://source.zoom.us/1.7.6/lib/vendor/redux.min.js')
            document.head.appendChild(recaptchaScript3)

            let recaptchaScript4 = document.createElement('script')
            recaptchaScript4.setAttribute('src', 'https://source.zoom.us/1.7.6/lib/vendor/redux-thunk.min.js')
            document.head.appendChild(recaptchaScript4)

            let recaptchaScript5 = document.createElement('script')
            recaptchaScript5.setAttribute('src', 'https://source.zoom.us/1.7.6/lib/vendor/jquery.min.js')
            document.head.appendChild(recaptchaScript5)

            let recaptchaScript6 = document.createElement('script')
            recaptchaScript6.setAttribute('src', 'https://source.zoom.us/1.7.6/lib/vendor/lodash.min.js')
            document.head.appendChild(recaptchaScript6)
            //defines ZoomMtg
            let recaptchaScript7 = document.createElement('script')
            console.log("Loading ZoomMtg ");
            recaptchaScript7.setAttribute('src','https://source.zoom.us/zoom-meeting-1.7.6.min.js')
            document.head.appendChild(recaptchaScript7);


            /*
            ZoomMtg = document.createElement("script");
            ZoomMtg.setAttribute(
                "src",
                "https://source.zoom.us/zoom-meeting-1.7.6.min.js"
            );
            document.head.appendChild(ZoomMtg);
            */

            /*
           // console.log("checkSystemRequirements");
           // console.log(JSON.stringify(ZoomMeeting.checkSystemRequirements()));
            //console.log('access key ' +zoomMeeting.accessKey);
            //ZoomMeeting.async = true;
            //document.head.appendChild(ZoomMtg);
            // eslint-disable-next-line no-undef
             */
            //ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.7.6/lib', '/av');
            /*
            ZoomMtg.preLoadWasm();
            ZoomMtg.prepareJssdk();

             */
        },created () {
            this.$scriptLoader.load("https://code.jquery.com/jquery-3.4.1.min.js")
        },
        methods:{
            getSignature() {
                const ZoomMtg = import('@zoomus/websdk').then(module => {
                    const {ZoomMtg} = module;
                    ZoomMtg.generateSignature({
                        meetingNumber: this.meetConfig.meetingNumber,
                        apiKey: this.meetConfig.apiKey,
                        apiSecret: this.meetConfig.apiSecret,
                        role: this.meetConfig.role,
                        success(res) {
                         console.log('signature', res.result);
                         ZoomMtg.init({
                            leaveUrl: 'http://localhost:8080/#/',
                            success() {
                                ZoomMtg.join(
                                    {
                                        meetingNumber: '74083761368',
                                        userName: 'schun',
                                        signature: res.result,
                                        apiKey: 'Bd7JV-1oRG-n5owlUcvjjA',
                                        passWord: '0XBiFi',
                                        success() {
                                            console.log('join meeting success');
                                        },
                                        error(res) {
                                            console.log(res);
                                        }
                                    }
                                );
                            },
                            error(res) {
                                console.log(res);
                            }
                        });
                    }
                 });
                });
                console.log(ZoomMtg)
            }

        },

    }
</script>

<style scoped>

</style>
