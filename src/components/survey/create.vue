<template>
  <div>
    <div>
      <h3 class="label text-primary">Create Survey Question</h3>
      <br />
      <br />
      <b-button variant="primary" v-show="false" class="load">
        <b-spinner type="grow"></b-spinner>
        Loading...
      </b-button>
      <div class="nsv form-group">
        <label for="exampleInputEmail1"
          >Enter the number of your survey:
        </label>
        <input
          id="exampleInputEmail1"
          class="form-control col-sm-2"
          v-model="numberSurvey"
          placeholder="Enter number of survey"
          @mouseleave="callEventBus()"
        />
      </div>
    </div>
    <br />
    <br />
    <survey-editor></survey-editor>
  </div>
</template>
<script>
import getWeb3 from "../../constants/getWeb3";
import abi from "../../constants/abi.json";
import SC from "../../constants/smartContractAddress";
import "survey-vue/modern.min.css";
import { StylesManager, Model } from "survey-vue";
import SurveyEditor from "./SurveyEditor.vue";
import * as SurveyVue from "survey-vue";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";
import * as widgets from "surveyjs-widgets";
StylesManager.applyTheme("modern");

import EventBus from "./EventBus";
const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https"
});

widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
// widgets.select2tagbox(SurveyVue);
// widgets.signaturepad(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);

let surveyJson = window.localStorage.getItem("YourStorageName");

export default {
  name: "createSurvey",
  components: {
    Survey,
    SurveyEditor
  },
  data() {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    survey.onComplete.add(this.alertResults);
    return {
      survey,
      numberSurvey: "",
      loadingCreated: false
    };
  },
  methods: {
    callEventBus() {
      EventBus.$emit("survey", this.numberSurvey);
      localStorage.removeItem("data");
      localStorage.setItem("data",this.numberSurvey);
      console.log(localStorage.getItem("data"));
    },
    payToken: async function() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        const instance = new web3.eth.Contract(abi, SC.ADDRESS_TOKEN_VLK);
        console.log(instance.methods);
        var name = await instance.methods.name().call();
        console.log(name);
        var symbol = await instance.methods.symbol().call();
        console.log(symbol);
        var result = await instance.methods.balanceOf(accounts[0]).call();
        console.log(result);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    },
    tranferToken: async function() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const instance = new web3.eth.Contract(abi, SC.ADDRESS_TOKEN_VLK);
        var adrReceiver = "0xF2C54084Dc0f82A01e1dd50fb8dCA3B2c2C3980e";
        const heo = await instance.methods
          .transfer(adrReceiver, 1000000000)
          .send({ from: accounts[0] })
          .on("receipt", function(receipt) {
            console.log("transfer successfully!!!");
            console.log("receipt:" + receipt);
             this.$swal.fire({
                icon: "success",
                title: "Transfer token successfully!!!",
                showConfirmButton: false,
                timer: 1500
              });
          })
          .on("error", function(error) {
             this.$swal.fire({
                icon: "error",
                title: "Please check your network and connection!!!",
                showConfirmButton: false,
                timer: 1500
              });
            console.log("transfer failed!!!");
            console.log(error);
          });
        console.log(heo);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    },
    addJsonData: async function() {
      // save to IPFS
      let js = {
        tuan: "dep trai",
        heo: "dep gai"
      };
      const jsonStr = JSON.stringify(js);
      const buf = Buffer.from(jsonStr);
      const cid = await ipfs.add(buf);
      const response = await fetch(
        "https://gateway.ipfs.io/ipfs/" + cid[0].path
      );

      if (!response.ok) throw new Error(response.statusText);

      var json = await response.json();
      console.log(JSON.stringify(json));
    }
  }
};
</script>
<style scoped>
.center {
  float: right;
  margin-right: 20px;
}
.label {
  margin-left: 100px;
}
.nsv {
  margin-left: 100px;
}
.load {
  margin-left: 700px;
  margin-right: 200px;
}
</style>
