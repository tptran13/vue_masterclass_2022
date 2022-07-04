<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
              >{{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            <!--import the child AppDate to customize time and date-->
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>
          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />
          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userById) }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <!--import the child AppDate to customize time and date-->
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
  //use prop to access the threads array from component PageHome
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
};
</script>
