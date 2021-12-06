<template>
  <div class="container">
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </article>
    <aside>
      <h3>
        <h3>Jokes you might enjoy</h3>
        <ul>
          <li :key="related.id" v-for="related in relatedPosts">
            <nuxt-link
              :to="{ name: 'posts-slug', params: { slug: related.slug } }"
              >{{ related.title }}</nuxt-link
            >
          </li>
        </ul>
      </h3>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find(
        (post) => post.slug === this.slug
      );
    },
    relatedPosts() {
      return this.$store.state.posts.all.filter(
        (post) => post.slug !== this.slug
      );
    },
  },
  head() {
    return {
      title: this.slug + " - DAD joke land",
      meta: [
        { name: "twitter:title", content: this.slug + " - DAD joke land" },
        {
          name: "twitter:description",
          content: this.post.content,
        },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>
