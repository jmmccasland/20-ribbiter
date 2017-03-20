<template lang="html">
<div v-if="users.loading" class="section">
  <div class="container">

    <h2 class="page__title">Users</h2>

    <div class="grid">
      <div class="grid__item">
        <div class="user-card">
          <div class="user-card__left">
            <img class="user-card__img" src="http://placecera.com/200/200"></img>
          </div>
          <div class="user-card__right">
            <h3 class="user-card__name">Michael Cera</h3>
            <h4 class="user-card__tag">$cera</h4>
          </div>
        </div>
      </div>

      <div class="grid__item">
        <div class="user-card">
          <div class="user-card__left">
            <img class="user-card__img" src="http://placecera.com/200/200"></img>
          </div>
          <div class="user-card__right">
            <h3 class="user-card__name">Michael Cera</h3>
            <h4 class="user-card__tag">$cera</h4>
          </div>
        </div>
      </div>

      <div class="grid__item">
        <div class="user-card">
          <div class="user-card__left">
            <img class="user-card__img" src="http://placecera.com/200/200"></img>
          </div>
          <div class="user-card__right">
            <h3 class="user-card__name">Michael Cera</h3>
            <h4 class="user-card__tag">$cera</h4>
          </div>
        </div>
      </div>

      <div v-for="user in users.items" class="grid__item">
        <div class="user-card">
          <div class="user-card__left">
            <img class="user-card__img" src="http://placecera.com/200/200"></img>
          </div>
          <div class="user-card__right">
            <h3 class="user-card__name">Michael Cera</h3>
            <h4 class="user-card__tag">$cera</h4>
          </div>
        </div>
      </div>

      <div class="grid__item">
        <div class="user-card">
          <div class="user-card__left">
            <img class="user-card__img" src="http://placecera.com/200/200"></img>
          </div>
          <div class="user-card__right">
            <h3 class="user-card__name">Michael Cera</h3>
            <h4 class="user-card__tag">$cera</h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
const findAll = userResource.actionCreators.findAll;
export default {
  name: 'Users-Index',

  data() {
    return {
      users: this.$select('users'),
    };
  },

  methods: {
    findAll() {
      // Dispatch findAll
      store.dispatch(findAll(this.users));
    },
  },
};
</script>
