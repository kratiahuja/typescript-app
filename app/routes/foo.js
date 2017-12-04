import Route from '@ember/routing/route';
import multiplyWrapper from 'typescript-app/utils/some-util';

export default Route.extend({
  model() {
    return multiplyWrapper('two');
  },
});
