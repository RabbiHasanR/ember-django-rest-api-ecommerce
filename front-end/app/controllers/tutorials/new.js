import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createTutorial() {
            var file = this.get('model.temporaryThumbnailImage');
            console.log('file:',file);
            this.set('model.thumbnailImage', file);
            this.model.save().then(response => {
                this.transitionToRoute('tutorials');
            }).catch(error => console.log(error));
        }
    }
});
