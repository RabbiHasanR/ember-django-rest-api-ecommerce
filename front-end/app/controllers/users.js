import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    actions: {
        loginUser() {
            //this.session.login(user);
            let {userName, password} = this.getProperties('userName', 'password');
            this.get("session").login(userName, password).then(()=>{
              //this.transitionToPreviousRoute()
              this.get('flashMessages').success('Yor are signed in!')
              this.transitionToRoute('monsters');
            }).catch((reason)=>{
              console.log(`Error: ${reason}`)
              this.get('flashMessages').danger(reason);
            })
        }
    },
    transitionToPreviousRoute(){
        var previousTransition = this.get('previousTransition');
        if (previousTransition) {
          this.set('previousTransition', null);
          previousTransition.retry();
        } else {
          // Default back to homepage
          this.transitionToRoute('index');
        }
      }
});
