import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
    flashMessages: inject(),
    actions: {
        createPost(newPost) {
            const flashMessages = get(this, 'flashMessages');
            newPost.save().then(response => {
                this.set("postResponse", true);
                this.set("model.title", "");
                this.set("model.author", "");
                this.set("model.videoUrl", "");
                this.set("model.body", "");
                this.transitionToRoute('posts');
                // this.flashMessages.success('Success')
                flashMessages.success('Success!');
            }).catch(response => console.log('post error:',response));
        }
    }
});
