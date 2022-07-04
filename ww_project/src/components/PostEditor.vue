<!--create text editor and prevent page reloading-->
<!--PageThreadShow listens to this component-->
<template>
  <div class="col-full push-top">
    <h2>Create new thread in <i>Cooking</i></h2>
    <form v-on:submit.prevent="save">
      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea v-model="text" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
      </div>
      <div class="btn-group d-flex justify-content-end">
        <button class="btn btn-ghost">Cancel</button>
        <button class="btn btn-blue" type="submit" name="Publish">Submit Post </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
	data () {
		return {
			text: ''
		}
	},
	methods: {
		save() {
			//new post object
			const postId = 'qweasdzxc' + Math.random().toString(16).substring(2, 8);
			const post = {		
				id: postId,	
				text: this.text,
				publishedAt: Math.floor(Date.now() / 1000),
				threadId: this.id,
				//random userId for now
				userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
			};
      
      //$emit allows the parent to listen to event 'save' using v-on
      //pass the post object to the parent listener
      this.$emit('save', { post })
      this.text = ''; 
		}
	}
};
</script>