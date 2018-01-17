import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';
import config from 'ember-set2/config/environment';
import { service } from 'ember-decorators/service';

export default Route.extend({
  @action didTransition() {
    window.r = this;
    window.c = config
  },
  @action submit(loginId, loginPassword) {
    let i = loginId;
    let j = loginPassword;
    debugger;
  },
  @action signUp(newName, newEmail, newPassword, reEnterPassword) {

    debugger;
  },
});
