import Service from '@ember/service';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default Service.extend({
  session: service(),
  store: service(),
  monsters: Ember.computed('session.currentUser.teamMemberships.@each', function() {
    const teamMemberships = this.session.currentUser.teamMemberships;
    if(!!teamMemberships) {
      return teamMemberships.mapBy('monster');
    } else {
      return A([]);
    }
  }),

  init() {
    this._super(...arguments);
    this.set('monsters', A([]));
  },
  add(monster) {
      if(this.fullTeam) {
          alert('Team is full.Remove a monster for add monster.')
      } else{
        this.monsters.pushObject(monster);
        const record = this.store.createRecord('teammembership', {
          user: this.session.currentUser,
          monster: monster
        });
        record.save()
      }
  },
  remove(monster) {
    const memberships = this.session.currentUser.teamMemberships.filterBy('monster.id', monster.id);
    memberships.forEach(membership => {
      memberships.destroyRecord();
    })
    this.monsters.removeObject(monster);
  },
  includes(monster) {
      // console.log('monsters:',this.monsters)
      // const result = this.monsters.mapBy('content')
      // const incl = result.includes(monster);
      // console.log('onTeam:', result)
      return this.monsters.includes(monster);
  },
  fullTeam: Ember.computed.gte('monsters.length', 6)
});
