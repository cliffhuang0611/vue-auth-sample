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
      //Get token from session storage
      const ssSession = sessionStorage.getItem('session');
      if (ssSession) {
        //Get User From token through server
        const [token, username] = ssSession.split('_');
        commit('setToken', token);
        commit('setUser', username);
        return;
      } else {
        //If not in session storage, try retrieving from local storage
        const cookiesSession = Cookies.get('session');
        if (cookiesSession) {
          //Get User From token through server
          const [token, username] = cookiesSession.split('_');
          commit('setToken', token);
          commit('setUser', username);
          return;
        } else {
          return;
        }
      }
    },
    login({ commit }, loginUser: LoginUser) {
      commit('setToken', loginUser.jwt);
      Cookies.set('session', loginUser.jwt);
      commit('setUser', loginUser.username);
      router.push({ name: 'Profile' });
    },
    sessionStorageLogin({ commit }, loginUser: LoginUser) {
      commit('setToken', loginUser.jwt);
      sessionStorage.setItem('session', loginUser.jwt);
      commit('setUser', loginUser.username);
      router.push({ name: 'Profile' });
    },
    logout({ commit }) {
      commit('setToken', null);
      Cookies.remove('session');
      sessionStorage.removeItem('session');
      router.push({ name: 'Login' });
      commit('setUser', null);
    },
  },
  modules: {},
});
