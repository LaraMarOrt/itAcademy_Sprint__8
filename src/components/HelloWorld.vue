<template>
  <div  class="d-flex justify-content-center align-items-center text-center mt-5">
    <div>
      <h2 class="mb-5">Bienvenid@</h2>
      <h5 class="mb-5">¿Te gustaría conocer de primera mano toda la información de StarWars?</h5>
      <b-button variant="warning" @click=irNaves()>Súbete a la nave</b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    irNaves() {
      this.$router.push('/Naves')
    }
  }
}
</script>

<style scoped>

h2 {
  margin: 3rem 0;
}

h5 {
  margin-bottom: 2rem;
}

.btn {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

</style>
