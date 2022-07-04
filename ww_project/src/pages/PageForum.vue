<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>
  <div class="col-full">
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue';
export default {
  components: {
    ThreadList,
  },
  //props validation
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    //find and return the matching forum from data.json
    forum() {
      return this.$store.state.forums.find((forum) => forum.id === this.id);
    },
    //find and return the matching thread from data.json
    threads() {
      return this.$store.state.threads.filter(
        (thread) => thread.forumId === this.id,
      );
    },
  },
};
</script>

<style></style>
