<template>
  <div class="d-flex justify-content-center">
    <div class="btn">
      <b-button variant="warning me-3" v-if="page>1" @click="paginaAbajo()">Anterior</b-button>
      <b-button variant="warning" v-if="page<=3" @click="paginaArriba()">Siguiente</b-button>
    </div>
  </div>
</template>

<script>


export default {
  name: "Paginacion",
  props:["page"],    
  methods: {
    paginaArriba() {
        this.$store.dispatch('pageMove', this.page+1);
    },
    paginaAbajo() {
        this.$store.dispatch('pageMove', this.page-1)
    }
  }
}
</script>

<style scoped>

</style>