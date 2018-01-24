import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default Route.extend({
  beforeModel() {
    this.session.redirectGuestTo('signin');
  },
  model() {
    return this.store.findAll('request');
  },
  @action detail(model) {
    this.controller.set('viewbibi', true);
    // this.controller.set('rental', rental);
  },
  @action close() {
    this.controller.set('viewbibi', false);
  },
  @action modify() {
    this.controller.set('viewModify', true)
  },
  @action cancel() {
    this.controller.set('viewModify', false)
  },
  @action logout() {
    this.session.signOut().then(r => {  
      return this.refresh();
    })
  }
});
