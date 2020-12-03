import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    edit: false,
    isEditing: computed('edit', function() {
        return this.edit;
    }),
    actions: {
        edit() {
            this.set('edit', true);
        },
        doneEditing(post) {
            post.save().then(response => {
                this.set("postResponse", true);
                this.set("model.title", "");
                this.set("model.author", "");
                this.set("model.videoUrl", "");
                this.set("model.body", "");
                this.set('edit', false);
            })
        },
        deletePost(post) {
            console.log('delete post')
            let confirmation = confirm('Are you sure?');
            if(confirmation){
                post.destroyRecord().then(response => {
                    this.transitionToRoute('posts');
                }).catch(response => console.log('post error:',response));
            }
            
        }
    }
});
