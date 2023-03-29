import  Vue from 'vue';
import axios from 'axios'

axios.defaults.baseURL='http://127.0.0.1/'

Vue.use({

    install(Vue){
          Vue.prototype.$http = axios // dolar http é para criar um variavel que não seja sobrescrita(uma palavra reservada)
    }

});

    
