import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default Route.extend({
  beforeModel() {
    this.session.redirectGuestTo('signin')
  },
  @action detail(rental) {
    this.controller.set('viewbibi', true);
    this.controller.set('rental', rental);
  },
  @action close() {
    this.controller.set('viewbibi', false);
  }
});
