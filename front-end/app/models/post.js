import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr } = DS;

export default Model.extend({
    title: attr('string'),
    author: attr('string'),
    videoUrl: attr('string'),
    body: attr('string'),
    createdAt: attr('date'),

    deckedOutVideoUrl: computed('videoUrl', function() {
        return `${this.videoUrl}?rel=0`
    })
})