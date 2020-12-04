import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cart', {path: 'shopping-cart'});
  this.route('item', {path: '/item/:item_id'});
  this.route('not-found', {path: '/*path'});
  this.route('orders');
  this.route('posts', function() {
    this.route('new');
    this.route('post', {path: ':post_id'});
  })
  this.route('computed-properties');
  this.route('tutorials', function() {
    this.route('tutorial', {path: ':tutorial_id'}, function() {
      this.route('show');
      this.route('edit');
    });
    this.route('new');
  });
});

export default Router;
