import Service from '@ember/service';

export default Service.extend({
  setUserEmail(email) {
    if (window.profitwell) {
      window.profitwell('user_email', email);
    }
  }
});
