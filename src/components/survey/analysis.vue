<template>
    <div>
        <div id="home">
            <router-link to="/survey/list"><h4 class="text-primary">Danh sách khảo sát</h4></router-link>
            <div id="surveyResult"></div>
        </div>
    </div>
</template>
<script>
import "survey-vue/modern.min.css";
import {Survey,StylesManager, Model } from "survey-vue"

StylesManager.applyTheme("modern");


export default {
  name: 'doSurvey',
  components: {
    Survey,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  },
  created(){
        this.question = this.$route.params.question;
        this.surveyResult = this.$route.params.survey;
  },
  data() {
    const survey = new Model(this.question);
    survey.focusFirstQuestionAutomatic = false;
    survey.onComplete.add(this.alertResults);
    survey.data = {"question1":"NGUYEN THANH TUAN","question2":["item1"],"question3":"item1","question4":"TOI LA TOI","question5":["item1","item3"],"question6":"ALOOO"}
    // calfunctionl  save data into IPFS
    return {
        survey,
        question: {},
        surveyResult: [],
        result : {},
    };
  },
  mounted() {
    var survey = new Model(this.question);
    var surveyResultNode = document.getElementById("surveyResult");
    surveyResultNode.innerHTML = "";
    var visPanel = new SurveyAnalytics.VisualizationPanel(survey.getAllQuestions(),this.surveyResult, {labelTruncateLength: 27});
    visPanel.showHeader = true;
    visPanel.render(surveyResultNode);
  },
  methods: {
    
  },
}
</script>
<style scoped>
#home {
  margin-left: 50px;
  margin-right: 50px;
}

</style>