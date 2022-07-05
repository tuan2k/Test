<template>
  <div>
    <b-button variant="primary" v-show="loading" class="load">
      <b-spinner type="grow"></b-spinner>
      Loading...
    </b-button>
    <div>
      <Survey :survey="survey" />
    </div>
  </div>
</template>
<script>
import "survey-vue/modern.min.css";
import { Survey, StylesManager, Model } from "survey-vue";

StylesManager.applyTheme("modern");
let surveyJson = window.localStorage.getItem("doSurvey");

import getWeb3 from "../../constants/getWeb3";
import abi from "../../constants/abi.json";
import surveyAbi from "../../constants/surveyAbi.json";
import SC from "../../constants/smartContractAddress";

const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https"
});

export default {
  name: "doSurvey",
  created() {
    console.log(this.$route.params.data);
    this.surveys = this.$route.params.data;
    console.log(this.surveys);
  },
  components: {
    Survey
  },
  data() {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    survey.onComplete.add(this.alertResults);
    this.result = survey.data;

    // calfunctionl  save data into IPFS
    return {
      survey,
      surveys: {},
      result: {},
      json: {},
      loading: false
    };
  },
  methods: {
    alertResults: async function(sender) {
      const idSurvey = localStorage.getItem("IdSurvey");
      console.log(sender.data);
      console.log(idSurvey);
      const results = JSON.stringify(sender.data);
      this.result = results;
      const jsonStr = JSON.stringify(this.result);
      const buf = Buffer.from(jsonStr);
      const cid = await ipfs.add(buf);
      console.log(cid);
      console.log("IPFS cid:", cid[0].path);
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = new web3.eth.Contract(surveyAbi, SC.ADDRESS_SURVEY);
      this.loading = true;
      const result = await instance.methods
        .saveSurveyResult(idSurvey, cid[0].path)
        .send({ from: accounts[0] });
      console.log(result);
      this.loading = false;
      this.$swal.fire({
        icon: "success",
        title: "Your work has been saved!!!",
        text: "You will receive gift soon. Thank you so much!!!",
        showConfirmButton: false,
        timer: 2000
      });
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
.load {
  margin-left: 700px;
  margin-right: 200px;
}
</style>
