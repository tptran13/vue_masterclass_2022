import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import AppDate from './components/AppDate.vue';
import store from '@/store/index';

const forumApp = createApp(App);
forumApp.use(router);
forumApp.component('AppDate', AppDate); // global component AppDate
forumApp.use(store);
forumApp.mount('#app');
// automatically register any component as global
// const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
// requireComponent.keys().forEach(function (fileName) {
//   let baseComponentConfig = requireComponent(fileName)
//   baseComponentConfig = baseComponentConfig.default || baseComponentConfig
//   const baseComponentName = baseComponentConfig.name || (
//     fileName
//       .replace(/^.+\//, '')
//       .replace(/\.\w+$/, '')
//   )
//   forumApp.component(baseComponentName, baseComponentConfig)
// })
