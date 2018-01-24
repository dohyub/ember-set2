import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup');
  this.route('signin');
  this.route('manage-flex-orders');
  this.route('checkout');
  this.route('order');
  this.route('cart-checkout');
});

export default Router;
