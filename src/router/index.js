import Vue from 'vue';
import VueRouter from 'vue-router';
import Addresses from '../views/Addresses.vue';
import AddressForm from '../views/AddressForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/addresses',
    name: 'Addresses',
    component: Addresses,
  },
  {
    path: '/address_form',
    name: 'AddressForm',
    component: AddressForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
