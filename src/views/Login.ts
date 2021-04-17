import { Component, Vue } from 'vue-property-decorator';
import LoginUser from '@/models/LoginModel';

@Component
export default class Login extends Vue {
  username = '';
  password = '';

  revealPassword = false;

  loginFailed = false;
  errorMsg = '';

  async login() {
    if (this.$store.getters.isLoading) return;
    try {
      this.$store.commit('startLoading');
      //Form Validation
      if (this.username === 'username' && this.password === 'password') {
        //Get JWT Token From Server

        const loginUser: LoginUser = {
          username: this.username,
          jwt: `helloworld_${this.username}`,
        };
        this.$store.dispatch('login', loginUser);
      } else {
        throw new Error('AUTH.DENIED');
      }
    } catch (error) {
      //Error Handling
      if (error.message === 'AUTH.DENIED') {
        this.loginFailed = true;
        this.errorMsg = 'Login failed';
      }
    } finally {
      this.$store.commit('endLoading');
    }
  }
}
