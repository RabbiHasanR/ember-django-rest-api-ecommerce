import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    currentTeam: service(),
    actions: {
        add() {
            this.currentTeam.add(this.model);
        },
        remove() {
            this.currentTeam.remove(this.model);
        }
    }
});
