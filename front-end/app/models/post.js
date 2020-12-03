import DS from 'ember-data';
import { computed } from '@ember/object';
import Faker from 'faker';

const { Model, attr } = DS;

export default Model.extend({
    title: attr('string'),
    author: attr('string'),
    videoUrl: attr('string'),
    body: attr('string'),
    createdAt: attr('date'),

    deckedOutVideoUrl: computed('videoUrl', function() {
        return `${this.videoUrl}?rel=0`
    }),

    randomize() {
        this.set('title', Faker.company.companyName() + 'title');
        this.set('author', Faker.name.findName());
        this.set('videoUrl', 'https://www.youtube.com/embed/Toz-zPkzU');
        this.set('body', Faker.commerce.productName() + 'description');
        // If you would like to use in chain.
        return this;
    },


})