import Vue from 'vue';
import Vuex from 'vuex';
import LoginUser from '@/models/LoginModel';
import router from '@/router';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false as boolean,
    token: null as string | null,
    user: null as string | null,
  },
  getters: {
    isLoading: state => state.isLoading,
    token: state => state.token,
    isLoggedIn: state => !!state.token,
    user: (state, getters) => {
      if (getters.isLoggedIn) {
        return state.user;
      } else {
        return null;
      }
    },
  },
  mutations: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    setToken(state, jwt: string) {
      state.token = jwt;
    },
    setUser(state, user: string) {
      state.user = user;
    },
  },
  actions: {
    async restore({ commit }) {
      const session = Cookies.get('session');
      if (!session) return;
      //Get User From token through server
      const [token, username] = session.split('_');
      commit('setToken', token);
      commit('setUser', username);
    },
    login({ commit }, loginUser: LoginUser) {
      commit('setToken', loginUser.jwt);
      Cookies.set('session', loginUser.jwt);
      commit('setUser', loginUser.username);
      router.push({ name: 'Profile' });
    },
    logout({ commit }) {
      commit('setToken', null);
      Cookies.remove('session');
      router.push({ name: 'Login' });
      commit('setUser', null);
    },
  },
  modules: {},
});
