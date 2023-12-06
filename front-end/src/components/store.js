import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userRole: null,
    // ...autres états
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    userRole: state => state.userRole,
    // ...autres getters
  },
  mutations: {
    login(state, { role }) {
      state.isLoggedIn = true;
      state.userRole = role;
      // ...autres mutations pour gérer l'état de login
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userRole = null;
      // ...réinitialiser l'état au logout
    },
    // ...autres mutations
  },
  actions: {
    // ...actions pour gérer l'authentification
  },
  methods: {
    login() {
      // Appeler l'API pour valider les informations d'identification de l'utilisateur
      // ...
      // Si succès, mettre à jour le store Vuex
      this.$store.commit('login', { role: 'admin' }); // 'admin' est un exemple, cela devrait venir de la réponse de l'API
      // Rediriger vers la page d'administration
      this.$router.push('/admin');
    },
  }
});
