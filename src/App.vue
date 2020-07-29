<template>
  <div id="app">
    <!-- <SignIn></SignIn> -->
    <router-view/>
  </div>
</template>

<script>
// import LoggedInUser from './components/LoggedInUser.vue'
export default {
  beforeCreate() {
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
  },
  // name: 'app',
  // components: {
  //   LoggedInUser
  // }
}
</script>

<style scoped lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;

  font-family: Tahoma;
  font-size: 1.6rem;
  color: #222;
  background-color: #ffffff;
  background: linear-gradient(to bottom, #ffffff, #000000);

  // background-blend-mode: screen;
  // background-image: url("./assets/JFTMotorsLogo2 (3).png"), linear-gradient(to bottom, #3C3C3C, #3C3C3C);
  // background-color: #000000;
  // background-size: 100%;
  
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

// body {
  // margin: 0;
  // padding: 0;
// }

</style>
