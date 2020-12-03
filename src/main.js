import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/store';

Vue.config.productionTip = false

Vue.filter('vnd', (money) => {
  money = money.toString();
  let result = '';
  let prefix = '';
  if (money[0] === '-') {
    prefix = '-';
    money = money.slice(1)
  }
  
  while (money.length) {
    if (money.length <= 3) return prefix + parseInt(money) + result + ' đ'
    let last3Digits = money.slice(-3);
    result = ',' + last3Digits + result;
    money = money.slice(0, money.length-3)
  }
  if (result[0] === ',') {
    result = result.slice(1)
  }
  return prefix + result + ' đ'
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
