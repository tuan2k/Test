<template>
    <div>
        <div>
        <h3 class="label text-primary">Trang tạo khảo sát</h3>
        <button class="btn btn-primary center">Xuất file mẫu</button>
        <button class="btn btn-primary center">Import Excel</button>
        <!-- <button class="btn btn-primary center" v-on:click="downloadPDF()">Tải PDF</button> -->
        </div>
        <br /> <br />
        <survey-editor></survey-editor>
    </div>
</template>
<script>
import "survey-vue/modern.min.css";
import {StylesManager, Model } from "survey-vue";
import SurveyEditor from './SurveyEditor.vue'
import * as SurveyVue from 'survey-vue'
var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";
StylesManager.applyTheme("modern");

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
  name: 'createSurvey',
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
    };
  },
  methods: {
    
  },

}
</script>
<style scoped>
.center {
  float: right;
  margin-right: 20px;
}
.label {
  margin-left: 100px;
}
</style>
