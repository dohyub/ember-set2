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
  model() {
    return [{
      state: 'grand-old-mansion',
      reception: 'Gsdfsf',
      confirm: 'V345435',
      order: 'San Francisco',
      code: 'Estate',
      local: 3,
      international: 'https://upload.wikimedia.org/',
      customer: 'This grand old mansion sits',
      detail: 'sdfsdf'      
    }, {
      state: 'grand-old-mansion',
      reception: 'Grand Old Mansion',
      confirm: 'Veruca Salt',
      order: 'San Francisco',
      code: 'Estate',
      local: 16,
      international: 'https://upload.wikimedia.org/',
      customer: 'This grand old mansion sits',
      detail: 'sdfsdf'   
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 0,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 1,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 20,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 30,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 40,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 50,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 60,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 70,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }, {
      state: 'grand-old-mansion',
      reception: 'Gra4tansion',
      confirm: 'Veruca Salt',
      order: 'Sanrdtgo',
      code: 'Estate',
      local: 80,
      international: 'https:/4tedia.org/',
      customer: 'This gran234 sits',
      detail: 'sdhkmgjkhf' 
    }];
  }
});
