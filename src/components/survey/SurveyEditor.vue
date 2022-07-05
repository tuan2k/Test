<template>
    <div>
      <b-button variant="primary" v-show="loading" class="load">
      <b-spinner type="grow"></b-spinner>
      Loading...
    </b-button>
      <div id="surveyEditorContainer">
    </div>
    </div>
</template>
<script>

import getWeb3 from "../../constants/getWeb3"
import SC from "../../constants/smartContractAddress"
import surveyAbi from "../../constants/surveyAbi.json"
import EventBus from './EventBus'
import swal from 'sweetalert2';
window.Swal = swal;
const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

import * as SurveyEditor from 'surveyjs-editor'
import 'surveyjs-editor/surveyeditor.css';

import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";
import loginVue from '../auth/login.vue'

//import "inputmask/dist/inputmask/phone-codes/phone.js";
widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
// widgets.select2tagbox(SurveyKo);
// widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);

export default {
  name: 'survey-editor',
  created(){
  },
  data () {
    return {
        survey: '',
        numberSurvey: "",
        loading: false
    }
  },
  mounted () {
    
    if (localStorage.getItem("data")!= "" && localStorage.getItem("data") != undefined) {
         this.loading = true;
    }

    let editorOptions = {showTestSurveyTab: false,showTranslationTab: true,showLogicTab: true};
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions)

    // testing but not work for today
    this.editor.onTestSurveyCreated.add(function(sender, options) {
      options.survey.title = "You are testing survey at: " + new Date().toLocaleTimeString();
    });

    EventBus.$off('survey');
    localStorage.removeItem("data");
    // call save function to save survey data json in localStorage
    this.editor.saveSurveyFunc = function(saveNo, callback) {
      this.loading= false;
      console.log(this.loading);
      console.log(localStorage.getItem("data"));
       save(this.text,localStorage.getItem("data"));
    };
  },
  methods: {
  }
}
async function save(local,numberSurvey){
  try {
    // console.log(JSON.parse(local).title);
    // console.log(JSON.parse(local).description);
    console.log(numberSurvey);
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const instance = new web3.eth.Contract(
        surveyAbi,
        SC.ADDRESS_SURVEY
    );
    console.log(instance);
    const buf = Buffer.from(local);
    const cid = await ipfs.add(buf);
    const response = await fetch(
      "https://gateway.ipfs.io/ipfs/" + cid[0].path
    );
    //save data to SC
    const saveData = await instance.methods.saveSurvey(accounts[0],'tuan',numberSurvey,JSON.parse(local).title,JSON.parse(local).description,cid[0].path)
      .send({from: accounts[0]});
    console.log(saveData);
    if (!response.ok) throw new Error(response.statusText);
    var json = await response.json();
    console.log(JSON.stringify(json));
    swal.fire({
        icon: "success",
        title: "Create survey successfully!!!",
        showConfirmButton: false,
        timer: 2000
    });
    window.location.href = '/'; 

  } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.log(error);
      }
}
</script>

<style scoped>
</style>
