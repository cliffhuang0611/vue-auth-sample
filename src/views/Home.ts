import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  get isLoggedIn() {
    return this.$store.getters.isLoggedIn;
  }

  get user() {
    return this.$store.getters.user;
  }
}
