import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    alreadySignInUser: 'Rabbi',
    hasLaftFoot: true,
    hasRightFoot: false,
    colors: [],
    number: 10,
    name: 'rabbi',
    copPayingAttention: true,
    copInUserArea: false,
    user: computed.alias('alreadySignInUser', function() {
        return this.alreadySignInUser;
    }),
    hasFoot: computed.and('hasLaftFoot','hasRightFoot'),
    isColorEmpty: computed.notEmpty('colors'),
    isNumberBig: computed.gt('number', 20),
    isNumberSmall: computed.lt('number', 20),
    copInProblem: computed.and('copPayingAttention', 'copInUserArea'),
    copNotProblem: computed.not('copInProblem'),
    firstName: 'Rabbi',
    lastName: 'Hasan',
    // fullName: computed('firstName', 'lastName', function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }),
    fullName: computed('firstName', 'lastName', {
      get(key) {
        return `${this.firstName} ${this.lastName}`; 
      },
      set(key, value) {
          let [firstName, lastName] = value.split(' ');
          this.set('firstName', firstName);
          this.set('lastName', lastName);
          return value;
      }

    }),
    companyName:'Algo',
    // bussinessCard:computed('fullName','companyName', function() {
    //     return `${this.fullName} of ${this.companyName}`;
    // }),
    bussinessCard:computed('fullName','companyName',{
        get(key) {
            return `${this.fullName} of ${this.companyName}`;
        },
        set(key, value) {
            let [fullName, companyName] = value.split('of');
            this.set('fullName', fullName);
            this.set('companyName', companyName);
            return value;
        }
    }),
    documentaries: [
        {name: 'Iron Man 1', release: '2008', budget: 140000000, boxOffice: 318000000},
        {name: 'Iron Man 2', release: '2010', budget: 200000000, boxOffice: 312000000},
        {name: 'The Avengers', release: '2012', budget: 220000000, boxOffice: 623000000},
        {name: 'Iron Man 3', release: '2013', budget: 200000000, boxOffice: 408000000},
        {name: 'Avengers 2', release: '2015', budget: 250000000, boxOffice: 455000000}
    ],
    totalDocumentaryBudget: computed('documentaries.@each.budget', function() {
        var totalBudget = 0;
        this.documentaries.forEach(function(documentary){
        totalBudget += Number(documentary.budget);
        })
        return totalBudget
    }),
    totalDocumentaryProfit: computed('documentaries.@each.{budget,boxOffice}', function() {
        var totalProfit = 0;
        this.get('documentaries').forEach(function(documentary){
        totalProfit += Number(documentary.boxOffice);
        totalProfit -= Number(documentary.budget);
        })
        return totalProfit;
    }),
    titles: computed('documentaries.@each.name', {
        get(key) {
            return this.documentaries.mapBy('name').join(', ');
        },
        set(key, value) {
            let arrayOfTitles = value.split(', ');
            arrayOfTitles.forEach((title, index) => {
                let documentary = this.documentaries[index];
                Ember.set(documentary, 'name', title);
            });
            return value;
        }
    })
});
