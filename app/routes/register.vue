<template lang="html">
<div class="section">
  <div class="container">
    <div class="alert" v-if="users.loading === 'error'">There was an error creating this user! :(</div>

    <div class="card">
      <div class="card__heading">
        <h2 class="card__message">Create an Account</h2>
      </div>

      <form v-on:submit.prevent="save" class="card__form">
        <div class="form-inputs">
          <div class="form-control">
            <label for="username">Username</label>
            <input v-model="formValues.username" name="username" placeholder="Username" class="card__form__input" type="text">
          </div>

          <div class="form-control">
            <label for="email">Email</label>
            <input v-model="formValues.email" name="email" placeholder="Email" class="card__form__input" type="text">
          </div>

          <div class="form-control">
            <label for="Password">Password</label>
            <input v-model="formValues.password" name="password" placeholder="Password" class="card__form__input" type="password">
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
import store from '../store';
import userResource from '../resources/user';
const create = userResource.actionCreators.create;

export default {
  data() {
    return {
      users: this.$select('users'),
      formValues: {
        username: '',
        email: '',
        password: '',
      }
    };
  },

  methods: {
    save() {
      // Dispatch new create action
      store.dispatch(create(this.formValues))
        .then(() => {
          this.$router.push({ name: 'login' });
        }).catch(() => {});
    },
  },
};
</script>
