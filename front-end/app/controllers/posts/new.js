import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createPost(newPost) {
            newPost.save().then(response => {
                this.set("postResponse", true);
                this.set("model.title", "");
                this.set("model.author", "");
                this.set("model.videoUrl", "");
                this.set("model.body", "");
                this.transitionToRoute('posts');
            }).catch(response => console.log('post error:',response));
        }
    }
});
