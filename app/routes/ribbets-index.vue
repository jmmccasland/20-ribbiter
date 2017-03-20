<template lang="html">
    <div class="section">
      <div class="container">
        <h2 class="page__title">Users</h2>

        <div class="page">
          <div class="page__section page__section--newribbet">
            <div class="card">
              <div class="card__heading">
                <h2 class="card__message">New Ribbet</h2>
              </div>
              <form v-on:submit.prevent="save" class="card__form">
                <div class="form-inputs">
                  <div class="form-control">
                    <label for="ribbet">What's going on?</label>
                    <textarea v-model="formValues.body" name="ribbet" class="card__form__input card__form__textarea" type="text"></textarea>
                  </div>
                </div>

                <div class="form-buttons">
                  <button v-on:click="clearForm" type="button" class="button button--secondary" >Clear</button>
                  <button type="submit" class="button button--signup button--primary">Save</button>
                </div>
              </form>
            </div>
          </div>

        <div class="page__section page__section--ribbets">
          <div class="card">
            <div class="card__heading">
              <h2 class="card__message">See What's Happening!</h2>
            </div>

            <div class="post-list">
              <div class="post-list__loadmore">
                <button class="button button--full-width button--secondary">Load New Ribbets</button>
              </div>

              <div v-for="post in posts.items" class="post-list__item">
                <h3 class="post-list__item__username">{{ post.user.username}}</h3>
                <p class="post-list__item__message">{{ post.body }}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import postResource from '../resources/post';
const findAll = postResource.actionCreators.findAll;
const create = postResource.actionCreators.create;

export default {
  name: 'Ribbets-Index',

  data() {
    return {
      posts: this.$select('posts'),
      formValues: {
        body: '',
      },
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {
    clearForm() {
      this.formValues.body = '';
    },

    save() {
      store.dispatch(create(this.formValues));
      this.clearForm();
    },
  },
};
</script>
