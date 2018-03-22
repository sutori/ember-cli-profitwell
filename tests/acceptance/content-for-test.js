import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | content for', function(hooks) {
  setupApplicationTest(hooks);

  const PART_OF_SCRIPT = `(function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){`;

  test('the recording script is inserted into the document head', async function(assert) {
    await visit('/');

    const body = document.getElementsByTagName('body')[0].innerHTML;

    assert.ok(
      body.includes(PART_OF_SCRIPT),
      'script is included'
    );
    assert.ok(
      body.includes(`profitwell('auth_token', 'the-token');`),
      'includes auth_token value'
    );
  });
});
