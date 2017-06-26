import Ember from 'ember';

export default Ember.Service.extend({
  setUserEmail(email) {
    if (window.profitwell) {
      window.profitwell('user_email', email);
    }
  }
});
