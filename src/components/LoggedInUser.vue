<template>
  <div>
    <!-- Logged in -->
    <!-- <div v-if="loggedIn">Yes</div> -->
    <!-- <div v-else>No</div> -->
    <button class="but" @click="logout">Logout</button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "LoggedInUser",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("logged in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("logged out");
        // console.log("logged out", "true");
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "sign-in" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>