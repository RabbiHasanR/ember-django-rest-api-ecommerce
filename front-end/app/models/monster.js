import DS from 'ember-data';
import { inject as service } from '@ember/service';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  level: attr('number'),
  imageUrl: attr('string'),
  price: attr('string'),
  teamMemberships: hasMany('teammembership'),

  currentTeam: service(),
  onTeam: Ember.computed('currentTeam.monsters.@each', function(){
    return this.currentTeam.includes(this);
  })
});
