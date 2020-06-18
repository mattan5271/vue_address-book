import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBn4rjCYOsGKMnLznFyUSRPAnSfDUwv2Yw',
  authDomain: 'address-book-43202.firebaseapp.com',
  databaseURL: 'https://address-book-43202.firebaseio.com',
  projectId: 'address-book-43202',
  storageBucket: 'address-book-43202.appspot.com',
  messagingSenderId: '309716415740',
  appId: '1:309716415740:web:25fafd95f85f0027831379',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
