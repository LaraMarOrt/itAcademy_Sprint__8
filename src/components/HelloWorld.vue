<template>
  <div  class="d-flex justify-content-center align-items-center text-center mt-5">
    <div>
      <h2 class="mb-5">Bienvenid@</h2>
      <h5 class="mb-5">¿Te gustaría conocer de primera mano toda la información de StarWars?</h5>
      <b-button v-if="Logged" variant="warning" @click=irNaves()>Súbete a la nave</b-button>
      <b-button v-if="!Logged" variant="warning" @click="showLogin()">Loginate</b-button>
    </div>
    <Login v-if="this.isLoginVisible == true" @close="closeLogin"></Login>
      <router-view />
  </div>
</template>

<script>
import Login from './Login.vue';

export default {
  name: 'HelloWorld',
  components: { Login },
  data() {
    return {
      isLoginVisible: false,
    }
  },
  methods: {
    irNaves() {
      this.$router.push('/Naves')
    }
  },
  computed: {
    Logged() {
      return this.$store.getters.getLogedUser != null ? this.$store.getters.getLogedUser.username : null;
    }
  },
  methods: {
    showLogin() {
      this.isLoginVisible = true;
    },
    closeLogin() {
      this.isLoginVisible = false;
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
