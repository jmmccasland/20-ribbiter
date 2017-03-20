<template lang="html">
  <div class="app">
    <header>
        <div class="top-nav">
          <div class="top-nav__left">
            <router-link v-bind:to="{ path: '/' }" class="logo" tag="h1">Ribbeter</router-link>
          </div>
          <div class="top-nav__right">
            <a href="" class="top-nav__right__item">Ribbets</a>
            <router-link v-bind:to="{ path: '/users' }" class="top-nav__right__item">Frogs</router-link>
            <router-link v-bind:to="{ path: '/login' }" class="top-nav__right__item">Login</router-link>
          </div>
        </div>
    </header>

    <router-view></router-view>

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
