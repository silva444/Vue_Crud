import  Vue from 'vue';
import axios from 'axios'

axios.defaults.baseURL=''

Vue.use({

    install(Vue){
          Vue.prototype.$http = axios // dolar http é para criar um variavel que não seja sobrescrita(uma palavra reservada)
    }

});

    
