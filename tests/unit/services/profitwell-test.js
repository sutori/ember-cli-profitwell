import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('service:profitwell', 'Unit | Service | Profitwell');

test('#setUserEmail', function(assert) {
  const profitwellSpy = this.spy(window, 'profitwell');
  const service = this.subject();

  service.setUserEmail('someone@somewhere.com');

  assert.ok(
    profitwellSpy.calledWithExactly('user_email', 'someone@somewhere.com'),
    'It sets the user_email on the profitwell object'
  );
});
