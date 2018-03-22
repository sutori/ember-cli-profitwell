import { module } from 'qunit';
import { setupTest } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

module('Unit | Service | Profitwell', function(hooks) {
  setupTest(hooks);

  test('#setUserEmail', function(assert) {
    const profitwellSpy = this.spy(window, 'profitwell');
    const service = this.owner.lookup('service:profitwell');

    service.setUserEmail('someone@somewhere.com');

    assert.ok(
      profitwellSpy.calledWithExactly('user_email', 'someone@somewhere.com'),
      'It sets the user_email on the profitwell object'
    );
  });
});
