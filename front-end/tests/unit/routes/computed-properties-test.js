import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | computed-properties', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:computed-properties');
    assert.ok(route);
  });
});
