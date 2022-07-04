<template>
  <span :title="diplayFullDate()">
    {{ timeFromNow() }}
  </span>
</template>

<script>
//use dayjs plugin to format time and date
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default {
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
  },
  methods: {
    userById(userId) {
      youtube;

      return this.users.find((p) => p.id === userId);
    },
    timeFromNow() {
      return dayjs.unix(this.timestamp).fromNow();
    },
    diplayFullDate() {
      return dayjs.unix(this.timestamp).format('llll');
    },
  },
};
</script>

<style></style>
