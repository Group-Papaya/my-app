import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from "axios"
import firebase from "firebase/app"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLdqhKsu_sMVEhBdfQKMVA0KXDI1OiwlQ",
  authDomain: "testauthentication-ac211.firebaseapp.com",
  databaseURL: "https://testauthentication-ac211.firebaseio.com",
  projectId: "testauthentication-ac211",
  storageBucket: "testauthentication-ac211.appspot.com",
  messagingSenderId: "198893130822",
  appId: "1:198893130822:web:59ec61630245b86009e647",
  measurementId: "G-ZJT0ZHJEL4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
