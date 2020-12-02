import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://127.0.0.1:8000',
    namespace: 'api/v1',

    buildURL: function(type, id, record) {
        return this._super(type, id, record) + '/';
      }
});
