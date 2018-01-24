import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default Route.extend({
  model() {
    return this.session.redirectUserTo('manage-flex-orders');
  },
  @action submit(loginId, loginPassword) {
    this.controller.set('showvisi', true);
    this.session.signIn(loginId, loginPassword).then(r => {
      return r;
    }).then(r => {
      this.controller.set('showvisi', false);
      this.session.redirectUserTo('manage-flex-orders');
    }).catch(c => {
      alert(c.message);
      this.controller.set('showvisi', false);
    })
  }
});
