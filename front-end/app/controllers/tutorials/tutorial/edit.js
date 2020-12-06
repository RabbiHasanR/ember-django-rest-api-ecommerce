import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        doneEdit() {
            var file = this.get('model.temporaryThumbnailImage');
            console.log('file:',file);
            this.set('model.thumbnailImage', file);
            this.model.save().then(response => {
                this.transitionToRoute('tutorials.tutorial.show', this.model.id);
            }).catch(error => console.log('Error tutorial editing:', error));
        }
    }
});
