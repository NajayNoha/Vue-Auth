import { createApp} from "vue";
import  { createStore } from 'vuex';

localStorage.setItem('backendUrl', 'http://127.0.0.1:8000');
localStorage.setItem('frontendUrl', 'http://127.0.0.1:5173');

// Vue.use(Vuex);
const store = createStore({
    state: {
        user: null,
        isLoggedIn : false,
    },
    mutations: {
        setUser(state,  user){
            state.user = user;
            state.isLoggedIn = !!state.user
        }
    },
    actions: {
        login({ commit }, userData) {
        //   return new Promise((resolve, reject) => {
          if(isLoggedIn){
            
          }
            
        //   });
        },
        logout({ commit }) {
          commit('setUser', null);
        },
      },
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
      },
})

export default store
