const GlobalConfig = Ember.Object.extend({
  accessoryTypes: ['hats', 'boots', 'caps']
})

export function initialize(appInstance ) {
  appInstance.register('stuff:global', GlobalConfig);
  appInstance.inject('controller', 'global', 'stuff:global');
}

export default {
  name: 'load-custom-config',
  initialize
};
