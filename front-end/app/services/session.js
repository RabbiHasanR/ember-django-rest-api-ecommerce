import Service, { inject as service}from '@ember/service';
// import Cookies from 'js-cookie';
// import Cookies from 'node_modules/js-cookie'
// import { A } from '@ember/array';

export default Service.extend({
    store: service(),
    currentUser: null,
    // init() {
    //     this._super(...arguments);
    //     this.set('currentUsers', A([]));
    // },
    login(userName, password) {
        // this.set('currentUser', user);
        // Cookies.set('userId', user.id);
        return new Promise((resolve, reject)=>{
            if (userName === 'rabbi' && password === '12345'){
               //get user from somewhere
               this.store.findAll('user').then(response => {
                   const user = response.get('firstObject');
                   this.set('currentUser', user)
                   Cookies.set('userId', user.id)
                   resolve()
               })
            } else {
               reject("Username and password did not match")
            }
          })
    },
    logout() {
        this.set('currentUser', null);
        Cookies.remove('userId');
    },
    initializeFromCookie: function() {
      const userId = Cookies.get('userId');
      if(userId) {
          const user = this.store.find('user', userId);
          this.set('currentUser', user)
      }
    }.on('init')

});
