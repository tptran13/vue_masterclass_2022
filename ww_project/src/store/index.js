import { createStore } from 'vuex';
const sourceData = require('@/data');

const outputStore = createStore({
  state: {
    ...sourceData,
    authId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  },
  getters: {
    authUser: (state) => state.users.find((user) => user.id === state.authId),
  },
  actions: {
    createPost({ commit }, post) {
      post.id = 'qweasdzxc' + Math.random().toString(16).substring(2, 8);
      //set new post to posts array
      commit('setPost', { post });
      //add new post to thread array's element posts
      commit('appendPostToThread', {
        postId: post.id,
        threadId: post.threadId,
      });
    },
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post);
    },
    appendPostToThread(state, { post, threadId }) {
      state.threads.find((thread) => threadId === threadId).posts.push(post);
    },
  },
});

export default outputStore;
