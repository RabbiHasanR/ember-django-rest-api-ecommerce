import Component from '@ember/component';

export default Component.extend({
    actions: {
        doneEditing(post) {
            this.afterSave(post);
        }
    }
});
