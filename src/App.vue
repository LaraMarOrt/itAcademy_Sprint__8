<template>
  <div class="bg-vc">
    <div class="d-flex text-white flex-column">
      <nav class="p-5">
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <Redes></Redes>
          <div>
            <router-link to="/">
              <img class="logo" alt="Vue logo"
                src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254">
            </router-link>
          </div>
          <div class="d-flex align-items-center" v-if="Logged">
            <b-avatar  variant = "warning me-3"  text = "🤠" ></b-avatar>
            <div>{{ Logged }}</div>
          </div>
          <div v-if="!Logged" class="d-flex justify-content-center m-2">
            <div class="me-3">
              <b-button variant="outline-light" id="show-btn" @click="showLogin">Log in</b-button>
            </div>
            <div>
              <router-link to="/Registro">
                <b-button variant="outline-light">Sign up</b-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="d-flex justify-content-center nav nav-pills">
            <router-link class="link me-2" to="/">HOME </router-link>
            <router-link class="link ms-2" to="/Naves">STARSHIPS</router-link>
          </div>
        </div>
      </nav>

      <Login v-if="this.isLoginVisible == true" @close="closeLogin"></Login>
      <router-view />
    </div>
  </div>
</template>


<script>
import Login from './components/Login.vue';
import Redes from './components/Redes.vue';

export default {
  name: 'App',
  components: { Login, Redes },
  data() {
    return {
      isLoginVisible: false,
    };
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
};
</script>


<style>
.bg-vc {
  min-height: 100vh;
  background-image: url("./assets/kenny-eliason-OjxsirfohHU-unsplash.jpg");
}

.logo {
  max-height: 70px;
}

.bg-dark {
  background-image: url("./assets/kenny-eliason-OjxsirfohHU-unsplash.jpg");
  background-repeat: repeat-y;
  background-size: 100%;
}

.link {
  color: azure;
  text-decoration: none;
}

.link:hover {
  color: rgb(210, 182, 24);
}

.link a {
  font-weight: 600;
}

nav {
  background-color: #25252cc8;
}
</style>
