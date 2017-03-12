import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('routelog');
  this.route('australia');
  this.route('login');
  this.route('airports');
});

export default Router;
