import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | monsters/monster', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:monsters/monster');
    assert.ok(route);
  });
});
