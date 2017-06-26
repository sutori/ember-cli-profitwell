import Ember from 'ember';

export default Ember.Service.extend({
  setUserEmail(email) {
    window.profitwell('user_email', email);
  }
});
