<!--CategoryList import ForumList to display each forum corresponding to their specified category-->
<template>
  <!--pass the forum array and category name to ForumList-->
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :categoryId="category.id"
  >
  </ForumList>
</template>

<script>
import ForumList from '@/components/ForumList';

export default {
  components: {
    ForumList,
  },
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  methods: {
    // find and filter the forum corresponding to the category in data.json
    // returns an array
    getForumsForCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id,
      );
    },
  },
};
</script>
