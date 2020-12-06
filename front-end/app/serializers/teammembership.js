import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    serialize: function(snapshot/*, options*/)
    {
        let json = this._super(...arguments);
        json.data.type = Ember.String.capitalize(snapshot.modelName);
        json.data.id = snapshot.id;
        json.data.attributes = {
            monster: json.data.relationships.monster.data.id,
            user: json.data.relationships.user.data.id,
        };

        delete json.data.relationships;
        return json
    }
});
