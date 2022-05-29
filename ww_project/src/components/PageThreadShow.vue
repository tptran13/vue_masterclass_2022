<template>
	<div v-if="thread" class="col-large push-top">
		<h1>{{ thread.title }}</h1>
		<div class="post-list">
			<div class="post" v-for="postId in thread.posts" :key="postId">
				<div class="user-info">
					<a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>
					<a href="#">
						<img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
					</a>
					<p class="desktop-only text-small">107 posts</p>
				</div> 
				<div class="post-content">
					<div>
						<p>{{ postById(postId).text }}</p>
					</div>
					<a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
				</div>
				<div class="post-date text-faded">{{ postById(postId).publishedAt }}</div>
			</div>
		</div>
	</div>
	<div v-else class="col-fu text-center">
		<h1>Cannot find the thread</h1>
		<!--using router-link to prevent reloading the page in a Single Page Application-->
		<router-link :to="{ name: 'Home' }">Read some cool threads</router-link>
</div>
</template>

<script>
import sourceData from "@/data.json";
export default {
	data () {
		return {
			threads: sourceData.threads,
			posts: sourceData.posts,
			users: sourceData.users
		}
	},
	props: {
		id: {
			required: true,
			type: String
		}
	},
	computed: {
		thread() {
			return this.threads.find(thread => thread.id === this.id)
		}
	},
	methods: {
		postById(postId) {
			return this.posts.find(p => p.id === postId);
		},
		userById(userId) {
			return this.users.find(p => p.id === userId);
		}
	}
};
</script>