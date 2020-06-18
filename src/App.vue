<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon
        v-show="$store.state.login_user"
        @click="toggleSideMenu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>マイアドレス帳</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <SideNav></SideNav>

    <v-main>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapActions } from 'vuex';
import SideNav from './components/SideNav';

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses();
        if (this.$router.currentRoute.name === 'Home')
          this.$router.push({ name: 'Addresses' });
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: 'Home' });
      }
    });
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      'toggleSideMenu',
      'setLoginUser',
      'logout',
      'deleteLoginUser',
      'fetchAddresses',
    ]),
  },
};
</script>
