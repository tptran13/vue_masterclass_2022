<!--display all forums-->
<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link
          v-if="categoryId"
          :to="{ name: 'Category', params: { id: categoryId } }"
        >
          {{ title }}
        </router-link>
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            class="text-xlarge"
            :to="{ name: 'Forum', params: { id: forum.id } }"
          >
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <!--use optional chaining to determine if a thread object exist or not '?.'-->
            <span class="count">{{ forum.threads?.length || '0' }}</span>
            {{ wordThreads(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array,
    },
    title: {
      type: String,
      default: 'Forum',
    },
    categoryId: {
      // don't need to inforce require b/c some forums may not have a categoryIs
      type: String,
    },
  },
  methods: {
    wordThreads(forum) {
      return forum.threads?.length === 1 ? 'thread' : 'threads';
    },
  },
};
</script>

<style></style>
