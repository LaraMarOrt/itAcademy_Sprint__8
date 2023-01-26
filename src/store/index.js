import { createStore } from 'vuex'

export default createStore({
  state: {
    userloged:null,
    naves: [],
    page : 1,
  },

  getters: {
    getLogedUser(state){
      return state.userLoged;
    },
  },

  mutations: {
    setPage(state, page) {
      state.page = page
    },
    setNaves(state, payload) {
      state.naves = payload
      console.log(state.naves)
    },
    loginUser(state,user_password){
              const username=user_password[0];
              const password=user_password[1];
              const user=JSON.parse(window.localStorage.getItem(username));
              if(user!=null && user.pass==password){
                  state.userLoged=user;
                  // alert("Ususario "+user.username+" loginado");
                  return user;
              }else{
                  alert("Error");
              }
          }
    },

  actions: {
    async fetchData({ commit },page) {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/starships/?page=`+page)
        const data = await res.json()
        commit('setNaves', data.results);
      } catch (error) {
        console.log(error)
      }
    },
    async pageMove({ commit }, nextpage){
      commit('setPage', nextpage);
      try {
        const res = await fetch(`https://swapi.py4e.com/api/starships/?page=`+nextpage)
        const data = await res.json()
        commit('setNaves', data.results);
      } catch (error) {
        console.log(error)
      }
    },
    logUser({ commit },state){
      commit('loginUser', state);
    },
    singUpUser({ commit },user){
      if(window.localStorage.getItem(user.username)==null){
        window.localStorage.setItem(user.username,JSON.stringify(user));
      alert("Ususario registrado");
      }else{
        alert("El Usuario ya existe");
      }
    },
  },

  modules: {
  }
})

