<template>
  <div>
    <h1>Cadastro</h1>
    <div>
    <form>
      <div class="form-group">
        <label for="Name">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name_id"
          aria-describedby="namelHelp"
          v-model="name"
        />
        <small id="namelHelp" class="form-text text-muted"
          >We'll never share your name with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="Name">Idade</label>
        <input
          type="text"
          class="form-control"
          id="idade_id"
          aria-describedby="IdadelHelp"
          v-model="idade"
        />
        <small id="IdadelHelp" class="form-text text-muted"
          >We'll never share your Idade with anyone else.</small
        >
      </div>
      <button type="submit" class="btn btn-primary" @click="enviar($event)">Submit</button>
    </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      name: "",
      idade: null,
    };
  },

  methods:{
    enviar(e){
        e.preventDefault();
        alert('oal')
    }
  }
};
</script>

<style>
</style>