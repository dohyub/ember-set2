import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default Route.extend({
  @action orderDetail() {
    this.controller.set('viewDetail', true);
  },
  @action close() {
    this.controller.set('viewDetail', false);
  },
  @action status() {
    this.controller.set('status', true);
  },
});
