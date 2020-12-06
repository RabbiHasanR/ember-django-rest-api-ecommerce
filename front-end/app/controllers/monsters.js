import Controller from '@ember/controller';

export default Controller.extend({
  yenConverter: Ember.inject.service(),
  actions: {
    switchCurrency(){
      this.get('yenConverter').switchCurrency();
    }
  }
});
