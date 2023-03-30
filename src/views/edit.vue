<template>
  <div>
    <h1>
      {{ this.$route.params.id }}
    </h1>

    <div class="row">
      <div class="col-6">
        Nome
        <input
          type="text"
          v-model="name"
          class="form-control"
          placeholder="digite o nome"
        />
      </div>
      <div class="col-6">
        Email
        <input
          v-model="email"
          type="text"
          class="form-control"
          placeholder="digite o Email"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <b-button
          variant="btn btn-success btn-block"
          v-b-modal.modal-1
          @click="edit_user"
          >Salvar</b-button
        >
        <b-button
          variant="btn btn-success btn-block"
          v-b-modal.modal-1
          @click="delete_user"
          >Excluir</b-button
        >
        <div v-if="excluido" class="alert alert-success">
          Excluido com Sucessos;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editando",
  data() {
    return {
      name: "",
      email: "",
      excluido: false,
    };
  },
  methods: {
    getUser() {
      axios
        .get(`http://127.0.0.1:8000/api/Editar/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data);
          this.name = response.data.name;
          this.email = response.data.email;
        });
    },

    edit_user() {
      let data = { name: this.name, email: this.email };
      axios
        .put(`http://127.0.0.1:8000/api/Update/${this.$route.params.id}`, data)
        .then((response) => {
          console.log(response);
        });

        this.$router.push('/list');

      //axios.put()
    },
    delete_user() {
      axios
        .delete(`http://127.0.0.1:8000/api/delete/${this.$route.params.id}`)
        .then((response) => {
          if (response.data == "Sucess") {
            this.excluido = true;
          }
        });
          setTimeout(() => {
            this.excluido = false;
            this.$router.push('/list');
          }, "500");
    },
  },

  created() {
    this.getUser();
  },
};
</script>

<style>
</style>