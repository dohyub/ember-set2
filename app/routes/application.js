import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';
import config from 'ember-set2/config/environment';
import { service } from 'ember-decorators/service';

export default Route.extend({
  beforeModel() {
    return this.get('session.prefetch');
  },
  @action didTransition() {
    window.r = this;
    window.c = config
  },
  @action modelTest() {
    let user = this.session.currentUser;
    let body = "Models are objects that represent2"
    let rep;
    // let post = {
    //   body: "Models are objects that represent1",
    //   user: this.session.currentUser
    // };
    // let newPost = this.get('store').createRecord('post', post).save();
    // let getPosts = this.session.currentUser.get('posts');
    // getPosts.pushObject(newPost);
    // this.session.currentUser.save();
    let post = this.get('store').createRecord('post', {
      user: user, 
      body: body
    }).save().then(response => {
      rep = response;
      debugger;
      return this.get('store').findRecord('user',user.id);
    }).then(response => {
      response.set('post', rep);
      debugger;
      return response.save();
    })
    debugger;
    // this.store.createRecord('post', {
    //   user, body
    // }).save().then(r => {
    //   user.get('posts.content').pushObject(r);
    //   return user.save();
    // }).then(() => {
    //   alert("success");
    // })
  }
});
