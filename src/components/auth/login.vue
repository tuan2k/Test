<template>
      <div class="h-100 top">
        <div class="authincation h-100">
          <div class="container h-100">
              <div class="row justify-content-center h-100 align-items-center">
                  <div class="col-md-6">
                      <div class="authincation-content">
                          <div class="row no-gutters">
                              <div class="col-xl-12">
                                  <div class="auth-form">
                                      <h4 class="text-center mb-4">Sign in your account</h4>
                                      <form @submit.prevent="Login()">
                                          <div class="form-group">
                                              <label><strong>Your Name</strong></label>
                                              <input type="text" v-model="form.name" class="form-control" value="hello@example.com">
                                          </div>
                                          <div class="form-group">
                                              <label><strong>Password</strong></label>
                                              <input v-model="form.password" required type="password" class="form-control" value="Password">
                                          </div>
                                          <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                              <div class="form-group">
                                                <div class="custom-control custom-checkbox ml-1">
                                                <input type="checkbox" class="custom-control-input" id="basic_checkbox_1">
                                                <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                                              </div>
                                              </div>
                                              <div class="form-group">
                                                  <a href="page-forgot-password.html">Forgot Password?</a>
                                              </div>
                                          </div>
                                          <div class="text-center">
                                              <button type="submit" class="btn btn-primary btn-block">Sign me in</button>
                                          </div>
                                      </form>
                                      <div class="new-account mt-3">
                                          <p>Don't have an account? <router-link class="text-primary" to="/register">Sign up</router-link></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
</template>
<script>
import getWeb3 from '../../constants/getWeb3'
import authAbi from '../../constants/authAbi.json'
import SC from '../../constants/smartContractAddress'

export default {
  name: 'Login',
  async created(){
     try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        const validateInstance = new web3.eth.Contract(
          authAbi,
          SC.ADDRESS_AUTHENTICAION
        );
        const data = await validateInstance.methods.checkIsPartnerLogged(accounts[0]).call()
        if (data === true) {
           this.$router.push({name: "home"});
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
  },
  data() {
    return {
        form: {
            address: '',
            name: '',
            password: '',
        }
    }
  },
  methods: {
    Login: async function(){
        try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        this.form.address = accounts[0];
        const instanceAuth = new web3.eth.Contract(
          authAbi,
          SC.ADDRESS_AUTHENTICAION
        );
        if (this.form.password === "" || this.form.password === null || this.form.password === undefined){
           alert("hack password rong :))");
        } else {
          let check=false;
          const result = await instanceAuth.methods.loginPartner(this.form.address,this.form.password)
            .send({ from: accounts[0]})
            .on("receipt", function(receipt) {
              check = receipt.events.loginSuccess.returnValues.result;
            })
            .on("error", function(error) {
              console.log("login failed!!!")
              console.log(error);
            });
          if (check === true) {
            const data = await instanceAuth.methods.getPartnerInfo(this.form.address).call();
            console.log(data);
            this.$router.push({name:'home'});
            localStorage.setItem("name",this.form.name);
            localStorage.setItem("addressLogin",accounts[0]);
            localStorage.setItem("isLogged",true);
          } else {
            alert("login failed!!!");
          }
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    }
  }
}
</script>
<style scoped>
.authincation-content {
  background: #fff;
  box-shadow: 0 0 35px 0 rgba(8, 227, 235, 0.15);
  border-radius: 5px; }
  [data-theme-version="dark"] .authincation-content {
    background: hsl(182, 14%, 61%);
    box-shadow: none; }

.h-100 {
  height: 100% !important; }

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto; }
  @media (min-width: 576px) {
    .container {
      max-width: 540px; } }
  @media (min-width: 768px) {
    .container {
      max-width: 720px; } }
  @media (min-width: 992px) {
    .container {
      max-width: 960px; } }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px; } }

.justify-content-center {
  justify-content: center !important; }

.align-items-center {
  align-items: center !important; }

.auth-form {
  padding: 50px 50px; }
  .auth-form .btn {
    height: 50px;
    font-weight: 700; }
  .auth-form .page-back {
    display: inline-block;
    margin-bottom: 15px; }

.top {
  margin-top: 70px;
}
</style>
