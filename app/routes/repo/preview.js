import TravisRoute from 'travis/routes/basic';

export default TravisRoute.extend({
  model() {
    return this.store.query('request', {
      repository_id: this.modelFor('repo').get('id')
    });
  },

  setupController() {
    this._super(...arguments);
    return this.controllerFor('repo').activate('preview');
  }
});