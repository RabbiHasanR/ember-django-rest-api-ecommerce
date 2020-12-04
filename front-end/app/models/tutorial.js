import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
    title: attr('string'),
    video_url: attr('string'),
    description: attr('string'),
    transcript: attr('string'),
    publishDate: attr('date'),
    updatedAt: attr('date'),
    createdAt: attr('date'),
    thumbnailImage: attr('string'),
    permalink: attr('string'),
    free: attr('boolean'),
    difficulty: attr('string'),
    difficulties: ['basic', 'intermediate', 'advanced']
});
