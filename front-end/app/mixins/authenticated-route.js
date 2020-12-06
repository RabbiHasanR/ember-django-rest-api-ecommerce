import Mixin from '@ember/object/mixin';
import { inject as service} from '@ember/service';

export default Mixin.create({
    session: service(),
    beforeModel(transition) {
        if(!this.session.currentUser) {
            let loginController = this.controllerFor('users');
            loginController.set('previousTransition', transition);
            this.transitionTo('users')
        }
    }
});
