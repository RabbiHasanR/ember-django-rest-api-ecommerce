import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deleteTutorial() {
            this.model.destroyRecord().then(response => {
                this.transitionToRoute('tutorials');
            }).catch(error => console.log('Tutorial delete error:', error));
        }
    }
});
