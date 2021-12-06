<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Best DAD jokes</h1>
      <h2 class="subtitle">That Are So Bad And So Funny!</h2>
      <div class="links">
        <nuxt-link
          :key="post.id"
          v-for="post in posts"
          :to="{ name: 'posts-id', params: { id: post.id } }"
          class="button--grey"
          >{{ post.title }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  fetch() {
    this.$store.dispatch("posts/getPosts");
  },
  components: {
    Logo,
  },
  head() {
    return {
      title: "Welcome to DAD joke land",
      meta: [
        { name: "twitter:title", content: "Welcome to DAD joke land" },
        {
          name: "twitter:description",
          content: "Best Dad jokes on the internet",
        },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}
</style>
