import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-ref-bucket-memory-leak/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tomek-test', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<TomekTest />`);

    assert.dom(this.element).hasText('Lorem ipsum');
  });
});
