import DS from 'ember-data';
const { Model, belongsTo } = DS;

export default Model.extend({
    monster: belongsTo('monster'),
    user: belongsTo('user')
});
