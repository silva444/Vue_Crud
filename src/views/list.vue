<template>
  <div>
    <h1>Listagem View</h1>
    <b-button
      variant="outline-primary"
      @click="add_listagem()"
      v-b-modal.modal-1
      >Adicionar Novo Registro</b-button
    >

    <b-modal id="modal-1" title="BootstrapVue">
      <div class="row">
        <div class="col-6">
          
          <input type="text" v-model="name" class="form-control" placeholder="digite o nome" />
          
        </div>
        <div class="col-6">
          
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="digite o Email"
          />
        </div>
      </div>
     <!-- Margin top de 4 -->
      <div class="row mt-4">
        <div class="col-12">
          <b-button variant="btn btn-success btn-block" v-b-modal.modal-1
            @click="add_usuario">Salvar</b-button
          >
        </div>
      </div>
    </b-modal>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in Listagem" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
          <router-link :to="{name:'edit',params:{id:user.id } }">
          <b-button variant="outline-primary">Editar</b-button>
          </router-link> 
          
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "view",
  data() {
    return {
      Listagem: [],
      name: '',
      email: ''
    };
  },
  methods: {
    add_usuario(){

        let data = {name:this.name, email:this.email}
         axios.post('http://127.0.0.1:8000/api/adicionar',data).then(response =>{
                 console.log(response);
                  this.getlistagem();
        });

      
    },
    getlistagem(){
        axios.get('http://127.0.0.1:8000/api/lista').then(Response =>{
            console.log(Response.data)
            this.Listagem=(Response.data);
            this.name =""
            this.email=""
        })

    },
    refreshPage() {
    location.reload();
  },
    add_listagem() {},
  },
  created() {
   
    this.getlistagem();
  },
  
};
</script>

<style>
</style>