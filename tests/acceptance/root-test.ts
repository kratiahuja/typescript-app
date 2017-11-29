import 'qunit';
import moduleForAcceptance from 'typescript-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | root');

QUnit.test('visiting /root', function(assert) {
  server.createList('fooApi', 10);

  visit('/foo');

  andThen(function() {
    assert.equal(currentURL(), '/foo');
  });
});
