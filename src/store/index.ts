import Vue from 'vue';
import Vuex from 'vuex';
import LoginUser from '@/models/LoginModel';
import * as ls from 'local-storage';
import router from '@/router';

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
      const session = ls.get<string>('session');
      console.log(session);
      if (!session) return;
      //Get User From token through server
      const [token, username] = session.split('_');
      console.log(token);
      console.log(username);
      commit('setToken', token);
      commit('setUser', username);
    },
    login({ commit }, loginUser: LoginUser) {
      commit('setToken', loginUser.jwt);
      ls.set<string>('session', loginUser.jwt);
      commit('setUser', loginUser.username);
      router.push({ name: 'Profile' });
    },
    logout({ commit }) {
      commit('setToken', null);
      ls.set<null>('session', null);
      router.push({ name: 'Login' });
      commit('setUser', null);
    },
  },
  modules: {},
});
