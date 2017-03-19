<template lang="html">
  <div class="app">
    <header class="section section--header">
        <div class="top-nav">
          <div class="top-nav__left">
            <h1 class="logo">Ribbeter</h1>
          </div>
          <div class="top-nav__right">
            <a href="" class="top-nav__right__item">Ribbets</a>
            <a href="" class="top-nav__right__item">Frogs</a>
            <a href="" class="top-nav__right__item">Login</a>
          </div>
        </div>
    </header>

    <router-view>



    </router-view>

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
