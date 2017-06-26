import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | content for');

const SCRIPT_BODY = `(function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
      })(window,document,'script','https://dna8twue3dlxq.cloudfront.net/js/profitwell.js','profitwell');`;

test('the recording script is inserted into the document head', async function(assert) {
  await visit('/');

  const body = document.getElementsByTagName('body')[0].innerHTML;

  assert.ok(
    body.includes(SCRIPT_BODY),
    'script body is included'
  );
  assert.ok(
    body.includes(`profitwell('auth_token', 'the-token');`),
    'includes auth_token value'
  );
});
