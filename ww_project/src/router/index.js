import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import NotFound from '@/components/PageNotFound'
import * as VueRouter from 'vue-router'
import sourceData from '@/data.json'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome
	},
	{
		path: '/thread/:id',
		name: 'ThreadShow',
		component: PageThreadShow,
		props: true,
		beforeEnter (to, from, next) {
			const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
			if (threadExists) {
				return next()
			}
			else {
				next ({ 
					name: 'NotFound',
					params: { pathMatch: to.path.substring(1).split('/')},
					query: to.query,
					hash: to.hash
					//show the NotFound page but do not change the URl so the user can fix or review the URL
			})
			}
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes
})

export default router