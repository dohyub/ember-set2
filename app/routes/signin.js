import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default Route.extend({
  @action submit(loginId, loginPassword) {
    this.controller.set('showvisi', true);
    this.session.signIn(loginId, loginPassword).then(r => {
      return r;
    }).catch(c => {
      alert(c.message);
    }).then(r => {
      this.controller.set('showvisi', false);
      this.session.redirectUserTo('manage-flex-orders');
    })
  },
});
