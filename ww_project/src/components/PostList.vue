<!--this component will recieve an array of posts to display-->
<!--constraint: if the post belongs to the specified threadId then display it-->
<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
        <a href="#">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
            alt=""
          />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
      </div>
      <div class="post-date text-faded">
        <!--import the child AppDate to customize time and date-->
        <AppDate :timestamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  methods: {
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>

<style></style>
