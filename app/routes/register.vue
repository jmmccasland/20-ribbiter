<template lang="html">
<div class="section">
  <div class="container">
    <div class="card">
      <div class="card__heading">
        <h2 class="card__message">Create an Account</h2>
      </div>

      <form class="card__form">
        <div class="form-inputs">
          <div class="form-control">
            <label for="username">Username</label>
            <input name="username" placeholder="Username" class="card__form__input" type="text">
          </div>

          <div class="form-control">
            <label for="email">Email</label>
            <input name="email" placeholder="Email" class="card__form__input" type="text">
          </div>

          <div class="form-control">
            <label for="Password">Password</label>
            <input name="password" placeholder="Password" class="card__form__input" type="password">
          </div>

        </div>

        <div class="form-buttons">
          <router-link v-bind:to="{ path: '/login' }" type="button" class="button button--login button--secondary" tag="button">Login</router-link>
          <button type="submit" class="button button--signup button--primary">Sign Up</button>
        </div>
      </form>
    </div>
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
