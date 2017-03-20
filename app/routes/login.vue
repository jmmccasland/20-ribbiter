<template lang="html">
  <div class="section">
    <div class="container">
      <div class="card">
        <div class="card__heading">
          <h2 class="card__message">Login</h2>
        </div>

        <form class="card__form">
          <div class="form-inputs">
            <div class="form-control">
              <label for="email">Email</label>
              <input name="email" placeholder="Email" class="card__form__input" type="text">
            </div>
            <div class="form-control">
              <label for="Password">Password</label>
              <input name="password" placeholder="Password" type="password" class="card__form__input">
            </div>
          </div>

          <div class="form-buttons">
            <router-link v-bind:to="{ path: '/register' }" type="button" tag="button" class="button button--login button--secondary">Register</router-link>

            <!-- submit form and log user into site -->
            <button class="button button--signup button--primary">Login</button>
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
