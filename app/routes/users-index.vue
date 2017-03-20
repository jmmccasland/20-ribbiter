<template lang="html">
<div class="section">
  <div class="container">

    <h2 class="page__title">Users</h2>

    <div class="grid">
      <div v-for="user in users.items" class="grid__item">
        <div class="user-card">
          <div class="user-card__left">
            <img class="user-card__img" src="http://placecera.com/200/200"></img>
          </div>
          <div class="user-card__right">
            <h3 class="user-card__name">{{ user.username }}</h3>
            <h4 class="user-card__tag">{{ user.email }}</h4>
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
      users: this.$select('ufsers'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {
    // findAll() {
    //   // Dispatch findAll
    //   store.dispatch(findAll());
    // },
  },
};
</script>
