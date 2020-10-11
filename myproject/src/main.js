import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase"
import store from "@/store";
import LoadScript from 'vue-plugin-load-script';
import React from 'react';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import config from "../config.js";

//import $ from 'jquery';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;



Vue.use(LoadScript);
Vue.config.productionTip = false;


const scriptLoader = {
  loaded: [],
  load (src) {
    if (this.loaded.indexOf(src) !== -1) {
      return
    }

    this.loaded.push(src);

    if (document) {
      const script = document.createElement('script')
      script.setAttribute('src', src)
      document.head.appendChild(script)
    }
  }
};

Vue.use({
  install () {
    Vue.prototype.$scriptLoader = scriptLoader
  }
})
var firebasekey = config.VUE_APP_FIREBASE_APIKEY;

const firebaseConfig = {
  apiKey: firebasekey,
  authDomain: "onlinecareerfair-4a444.firebaseapp.com",
  databaseURL: "https://onlinecareerfair-4a444.firebaseio.com",
  projectId: "onlinecareerfair-4a444",
  storageBucket: "onlinecareerfair-4a444.appspot.com",
  messagingSenderId: "47255244547",
  appId: "1:47255244547:web:8a5eea5102a34c60532336",
  measurementId: "G-EDK1PB0X68"
};



firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  if (user){
    console.log(user.displayName + "has been signed in")
  } else{
    console.log("unsuccessful login")
  }
});

new Vue({
  router,
  store,
  React,
  render: h => h(App)
}).$mount('#app')
