import 'whatwg-fetch'; // fetch-polyfill

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});


git add .
GIT_AUTHOR_DATE="2019-01-20T14:30:00" GIT_COMMITTER_DATE="2019-05-20T14:30:00" git commit -m "Feature: Router config added"
