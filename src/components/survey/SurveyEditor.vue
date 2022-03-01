<template>
    <div id="surveyEditorContainer"></div>
</template>
<script>
import * as SurveyEditor from 'surveyjs-editor'
import 'surveyjs-editor/surveyeditor.css';

import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";

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
  data () {
    return {
        survey: '',
    }
  },
  mounted () {
    let editorOptions = {showTestSurveyTab: false,showTranslationTab: true,showLogicTab: true};
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions)

    // testing but not work for today
    this.editor.onTestSurveyCreated.add(function(sender, options) {
      options.survey.title = "You are testing survey at: " + new Date().toLocaleTimeString();
    });

    // call save function to save survey data json in localStorage
    this.editor.saveSurveyFunc = function(saveNo, callback) {
        window.localStorage.setItem("YourStorageName", this.text);
        alert('Lưu khảo sát thành công');
        let local = window.localStorage.getItem("YourStorageName");
        let localStorre = window.localStorage.getItem("MyItem");
        if (localStorage === null || localStorage === undefined || localStorage === "" )
        console.log(local);
        //!!callback && callback(saveNo, false);
        // calll ajax api in doc to save survey in database oke???
    };
  },
  methods: {
     
  }
}
</script>

<style scoped>
</style>
