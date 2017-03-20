<template lang="html">
  <div class="section">
    <div class="container">
      <div class="hero">
        <div class="hero__center">
          <h2 class="hero__message">Welcome to Ribbeter!</h2>
          <p>Ribbeter is kind of like Twitter, except users are called frogs, and tweets are called ribbets!</p>
          <router-link v-bind:to="{ name: 'register' }" tag="button" class="button  button--primary">Register</router-link>
        </div>
      </div>

      <p>Already a member?
        <router-link v-bind:to="{ name: 'login' }" tag="button" class="button button--secondary">Login</router-link>
      </p>

      <img class="hero__img" src="http://i1.kym-cdn.com/photos/images/original/001/134/408/565.png" alt="Dat Boi, The Original Ribbeter">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
