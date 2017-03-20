<template lang="html">
  <div class="section">
    <div class="container">
      <div class="hero">
        <div class="hero__center">
          <h2 class="hero__message">Welcome to Ribbeter!</h2>
          <p>Ribbeter is kind of like Twitter, except users are called frogs, and tweets are called ribbets!</p>
          <button class="button button--primary"><router-link v-bind:to="{ name: 'register' }">Register</router-link></button>
      </div>
    </div>

    <p class="login">Already a member?
    <button class="button button--secondary"><router-link v-bind:to="{ name: 'login' }">Login</router-link></button></p>

    <img class="hero__img" src="http://i1.kym-cdn.com/photos/images/original/001/134/408/565.png" alt="Robert The Original Ribbeter">
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
