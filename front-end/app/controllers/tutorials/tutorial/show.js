import Controller from '@ember/controller';
import ENV from "front-end/config/environment";

console.log('Environmental variable:',ENV.AWS_BUCKET);
export default Controller.extend({
    actions: {
        deleteTutorial() {
            this.model.destroyRecord().then(response => {
                this.transitionToRoute('tutorials');
            }).catch(error => console.log('Tutorial delete error:', error));
        }
    }
});
