<template lang="html">
    <div class="section">
      <div class="container">
        <h2 class="page__title">Users</h2>

        <div class="page--section">
          <div class="card">
            <div class="card__heading">
              <h2 class="card__message">New Ribbet</h2>
            </div>
            <form v-on:submit.prevent="save" class="card__form">
              <div class="form-inputs">
                <div class="form-control">
                  <label for="ribbet">What's going on?</label>
                  <textarea name="ribbet" class="card__form__input card__form__textarea" type="text"></textarea>
                </div>
              </div>

              <div class="form-buttons">
                <button  type="button" class="button button--login button--secondary" >Clear</button>
                <button type="submit" class="button button--signup button--primary">Save</button>
              </div>
            </form>
          </div>

        <div class="card">
          <div class="card__heading">
            <h2 class="card__message">See What's Happening!</h2>
          </div>

          <div class="post-list">
            <div class="post-list__loadmore">

            </div>
          </div>
        </div>
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
