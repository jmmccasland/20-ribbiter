<template lang="html">
  <div class="section">
    <div class="container">

      <!-- alert error message on failed login -->
      <div v-if="error" class="card__error">
        <h2>There was an error logging in</h2>
      </div>

      <div class="card">
        <div class="card__heading">
          <h2 class="card__message">Login</h2>
        </div>

        <form v-on:submit.prevent="save" class="card__form">
          <div class="form-inputs">
            <div class="form-control">
              <label for="email">Email</label>
              <input v-model="formValues.email" name="email" placeholder="Email" class="card__form__input" type="text">
            </div>
            <div class="form-control">
              <label for="Password">Password</label>
              <input v-model="formValues.password" name="password" placeholder="Password" type="password" class="card__form__input">
            </div>
          </div>

          <div class="form-buttons">
            <router-link v-bind:to="{ path: '/register' }" type="button" tag="button" class="button button--login button--secondary">Register</router-link>

            <!-- submit form and log user into site -->
            <button type="submit" class="button button--signup button--primary">Login</button>
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
      error: false,
      formValues: {
        email: '',
        password: '',
      }
    };
  },

  methods: {
    // save() {
    //   fetch('http://localhost:3333/login', {
    //     method: 'POST',
    //     headers: { Accept: 'application/json', Content: 'application/json' },
    //     body: JSON.stringify(this.formValues)
    //   }).then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //
    //     // Still want error handling
    //     return Promise.reject(res.json);
    //   }).then((data) => {
    //     debugger;
    //   }).catch((err) => {
    //     this.error = true;
    //   });
    // },
  },
};
</script>
