<template>
  <article class="the-article">
    <img src="../assets/JFTMotorsLogo2 (3).png" alt="">
    <!-- <h1 class="company-name">JFT Motors</h1> -->
    <div class="container" :class="{'login-active' : login}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <p>If you have forgotten your password, simply enter your email address and we'll reset it for you.</p>
            <!-- <p>Please login with your personal info</p> -->
            <button class="invert" id="signIn" @click="login = !login">Return</button>
          </div>
          <div class="overlay-right">
            <h2>Forgot Password?</h2>
            <!-- <p>Please enter your personal details</p> -->
            <button class="invert" id="signUp" @click="login = !login">Reset Password</button>
          </div>
        </div>
      </div>
      <form class="reset-password" action="#">
        <h2>Reset Password</h2>
        <div>Please provide your email address</div>
        <!-- <input type="text" placeholder="Name" /> -->
        <input type="email" placeholder="Email" />
        <!-- <input type="password" placeholder="Password" /> -->
        <button>Reset Password</button>
      </form>
      <form class="sign-in" action="#" @submit.prevent="pressed">
        <h2>Sign In</h2>
        <!-- <div>Sign In</div> -->
        <br>
        <input type="email" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <br>
        <button type="submit">Login</button>
        <div class="error" v-if="error">{{error.message}}</div>
      </form>
    </div>
  </article>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";

  export default {
    methods: {
      async pressed() {
        // alert('submitted')
        firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "change-admin-details" });
        })
        .catch(error => {
          this.error = error;
        });
      }
    },
    data: () => {
      return {
        login: false,
        email: "",
        password: "",
        error: ""
      }
    }
  }
</script>

<style lang="scss" scoped>

  .error {
    position: relative;
    margin-top: 25px;
    color: red;
  }

  .the-article {
    height: 750px;
  }

  img {
    // text-align: center;
    position: relative;
    margin: 0px 265px 0px 300px;
    border-radius: 50px;
    // mix-blend-mode: soft-light;
    height: 200px;
  }

  // .company-name {
    // margin: 25px;
    // text-align: center;
  // }

  .container {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #efefef, #ccc);

    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform .5s ease-in-out;
      z-index: 100;
    }
    .overlay {
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      background: linear-gradient(to bottom right, #ffa500, #FFA500);
      color: #fff;
      transform: translateX(0);
      transition: transform .5s ease-in-out;
    }
    @mixin overlays($property) {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 70px 40px;
      width: calc(50% - 80px);
      height: calc(100% - 140px);
      text-align: center;
      transform: translateX($property);
      transition: transform .5s ease-in-out;
    }
    .overlay-left {
      @include overlays(-20%);
    }
    .overlay-right {
      @include overlays(0);
      right: 0;
      height: 175px;
      margin-top: 75px;
    }
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 20px 0 30px;
  }
  a {
    color: #222;
    text-decoration: none;
    margin: 15px 0;
    font-size: 1rem;
  }
  button {
    border-radius: 20px;
    border: 1px solid #009345;
    background-color: #009345;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;
    &:active {
      transform: scale(.9);
    }
    &:focus {
      outline: none;
    }
  }
  button.invert {
    background-color: transparent;
    border-color: #fff;
  }
  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: center;
    background: linear-gradient(to bottom, #efefef, #ccc);
    transition: all .5s ease-in-out;
    div {
      font-size: 1rem;
    }
    input {
      background-color: #eee;
      border: none;
      padding: 8px 15px;
      margin: 6px 0;
      width: calc(100% - 30px);
      border-radius: 15px;
      border-bottom: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
                        0 -1px 1px #fff, 
                        0 1px 0 #fff;
      overflow: hidden;
      &:focus {
        outline: none;
        background-color: #fff;
      }
    }
  }
  .sign-in {
    left: 0;
    z-index: 2;
  }
  .reset-password {
    left: 0;
    z-index: 1;
    opacity: 0;
  }
  .login-active {
    .sign-in {
      transform: translateX(100%);
    }
    .reset-password {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show .5s;
    }
    .overlay-container {
      transform: translateX(-100%);
    }
    .overlay {
      transform: translateX(50%);
    }
    .overlay-left {
      transform: translateX(0);
    }
    .overlay-right {
      transform: translateX(20%);
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }
    49% {
      opacity: 0;
      z-index: 1;
    }
    50% {
      opacity: 1;
      z-index: 10;
    }
  }
</style>