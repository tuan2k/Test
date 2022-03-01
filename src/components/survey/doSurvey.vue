<template>
    <div>
        <div>
            <Survey :survey="survey" />
        </div>
    </div>
</template>
<script>


import "survey-vue/modern.min.css";
import {Survey,StylesManager, Model } from "survey-vue"

StylesManager.applyTheme("modern");
let surveyJson = window.localStorage.getItem("YourStorageName"); 

export default {
  name: 'doSurvey',
  components: {
    Survey,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  },
  data() {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    survey.onComplete.add(this.alertResults);
    this.result = survey.data;

    // calfunctionl  save data into IPFS
    return {
        survey,
        result : {},
        json: {}
    };
  },
  methods: {
    alertResults(sender) {
      const results = JSON.stringify(sender.data);
      this.result = results;
      alert(results);
    }
  },
}
</script>