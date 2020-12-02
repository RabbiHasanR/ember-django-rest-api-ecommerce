import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

    serialize: function(snapshot/*, options*/)
    {
        let json = this._super(...arguments);
        var results =  Object.values(snapshot.record.items);
        json.data.type = Ember.String.capitalize(snapshot.modelName)
        json.data.id = snapshot.id
        json.data.attributes = {
            name: snapshot._attributes.name,
            email: snapshot._attributes.email,
            address: snapshot._attributes.address,
            total_price: snapshot._attributes.totalPrice.toFixed(2),
            items: results
        };
        return json
    }
});
