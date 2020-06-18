<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>マイアドレス帳</span>
      </v-toolbar-title>
    </v-app-bar>
    <SideNav />
    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";

export default {
  name: "App",
  components: {
    SideNav
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>