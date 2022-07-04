// this router file is responsible for setting vue routes
import * as VueRouter from 'vue-router';
import PageHome from '@/pages/PageHome';
import PageThreadShow from '@/pages/PageThreadShow';
import NotFound from '@/pages/PageNotFound';
import sourceData from '@/data.json';
import PageForum from '@/pages/PageForum';
import PageCategory from '@/pages/PageCategory';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id,
      );
      if (threadExists) {
        return next();
      }
      next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash,
        // show the NotFound page but do not change the URl so the user can fix or review the URL
      });
    },
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props: true,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
