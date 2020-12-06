import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service('session'),
    actions: {
        logoutUser() {
            this.logout();
        }
    }
});
