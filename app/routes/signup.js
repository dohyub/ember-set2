import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default Route.extend({
  @action signUp(newName, newEmail, newPassword, reEnterPassword) {
    this.controller.set('visible', true);
    this.session.signUp(newEmail,newPassword,newName).then(r => {
      alert("success");
      return r;
    }).catch(c => {
      alert(c.message);
    }).then(r => {
      this.controller.set('visible', false);
      this.session.redirectUserTo('signin');
    })
  }
});
