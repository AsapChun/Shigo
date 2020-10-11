import config from "../config.js";
    const apiKey = {
    signatureEndpoint: 'http://localhost:8080',
    apiKey: config.VUE_APP_ZOOM_APIKEY,
    meetingNumber: '12345678',
    role: 1,
    leaveUrl:'http://localhost:8080/#/',
    userName: 'WebSdk',
    userEmail: config.EMAIL,
    passWord: config.password

};
/*
var signatureEndpoint = 'http://localhost:4000'
var apiKey = 'JWT_API_KEY'
var meetingNumber = 123456789
var role = 0
var leaveUrl = 'http://localhost:9999'
var userName = 'WebSDK'
var userEmail = ''
var passWord = ''

 */
