import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | order', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('order');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('order', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
