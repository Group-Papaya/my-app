<template>
    <div>
        <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5>
        <LoggedInUser/>
    </div>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";
    import LoggedInUser from './LoggedInUser'
    export default {
        data() {
    return {
      secrets: ""
    };
  },
  mounted() {
    this.getSecrets();
  },
  methods: {
    async getSecrets() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      this.secrets = await this.$axios.get(
        "http://localhost:3000/ttk",
        config
      );
      this.secrets = this.secrets.data;
    }
  },
        name: 'ChangeAdminDetails',
        components: {
        LoggedInUser
  }
    }
</script>

<style lang="scss" scoped>

</style>