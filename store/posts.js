export const state = () => ({
  id: 1,
  all: [],
});

export const mutations = {
  updatePosts(state, newPosts) {
    state.all = newPosts;
  },
};

export const actions = {
  async getPosts(context) {
    await this.$evalApi
      .getPosts()
      .then((result) => {
        if (result.data != null) {
          context.commit("updatePosts", result.data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error while calling the API: " + err);
      });
  },
};
