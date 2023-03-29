<template>

<div>
 <h1>
     {{this.$route.params.id}}
  </h1>

  <div class="row">
        <div class="col-6">
          Nome
          <input type="text"  class="form-control" placeholder="digite o nome" />
          
        </div>
        <div class="col-6">
          Email
          <input
            
            type="text"
            class="form-control"
            placeholder="digite o Email"
          />
        </div>
        
      </div>
       <div class="row mt-4">
        <div class="col-12">
          <b-button variant="btn btn-success btn-block" v-b-modal.modal-1
            @click="add_usuario">Salvar</b-button
          >
        </div>
      </div>
</div>
 

 
</template>

<script>
export default {
 name: 'editando',
 data(){
    return{
        nome:"Editando"
    }
 }


}
</script>

<style>

</style>