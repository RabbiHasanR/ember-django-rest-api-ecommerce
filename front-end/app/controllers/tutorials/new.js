import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createTutorial() {
            this.model.save().then(response => {
                this.transitionToRoute('tutorials');
            }).catch(error => console.log(error));
        }
    }
});
