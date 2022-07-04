<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <!--pass an arrray of posts belonging to the specified threadId-->
    <post-list :posts="threadPosts" />
    <!--add new posts-->
    <PostEditor v-on:save="addPost" />
  </div>
  <div v-else class="col-fu text-center">
    <h1>Cannot find the thread</h1>
    <!--using router-link to prevent reloading the page in a Single Page Application-->
    <router-link :to="{ name: 'Home' }">Read some cool threads</router-link>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import PostEditor from '@/components/PostEditor';
export default {
  components: {
    PostList,
    PostEditor,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    //get the thread from the forum corresponding to the thread id
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
    threads() {
      return this.$store.state.threads;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id,
      };
      this.$store.dispatch('createPost', post);
    },
  },
  // name: 'ThreadPosts' ==> used to rename the component
};
</script>
