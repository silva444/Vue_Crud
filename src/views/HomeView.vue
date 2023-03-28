<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <Form_add />
  </div>
</template>

<script>
// @ is an alias to /src
import Form_add from "../components/form_add.vue"


export default {
  name: 'HomeView',
  components: {
    Form_add
  }
}
</script>
