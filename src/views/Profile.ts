import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
  get user() {
    return this.$store.getters.user;
  }

  logout() {
    this.$store.dispatch('logout');
  }
}
