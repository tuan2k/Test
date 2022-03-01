<template>
    <div>
        <div id="home">
            <router-link to="/survey/list"><h2 class="text-primary">Danh sách khảo sát</h2></router-link>
            <div id="loadingIndicator">
            <span>
                <div id="loading">

                </div>
            </span>
            </div>
            <div id="surveyElement" style="display:inline-block;width:100%;"></div>
            <div id="surveyResult"></div>
            <div class="space"></div>
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
  created(){
      this.analysicSurvey(jsonAnaV2);
  },
  data() {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    survey.onComplete.add(this.alertResults);
    survey.data = {"question1":"NGUYEN THANH TUAN","question2":["item1"],"question3":"item1","question4":"TOI LA TOI","question5":["item1","item3"],"question6":"ALOOO"}
    // calfunctionl  save data into IPFS
    return {
        survey,
        result : {},
        json: {
            "pages": [
            {
            "name": "Trang 1",
            "elements": [
                {
                "type": "text",
                "name": "question1",
                "title": "What's your name?",
                "isRequired": true
                },
                {
                "type": "checkbox",
                "name": "question2",
                "title": "Ai là người đẹp trai nhất?",
                "isRequired": true,
                "choices": [
                "item1",
                "item2",
                "item3"
                ]
                },
                {
                "type": "radiogroup",
                "name": "question3",
                "title": "Bạn có bao nhiêu người yêu!!!",
                "isRequired": true,
                "choices": [
                "item1",
                "item2",
                "item3"
                ]
                }
            ]
            },
            {
            "name": "Trang 2",
            "elements": [
                {
                "type": "text",
                "name": "question4",
                "title": "Bạn là ai hả?",
                "isRequired": true
                },
                {
                "type": "checkbox",
                "name": "question5",
                "title": "Bạn có những gì?",
                "isRequired": true,
                "choices": [
                "item1",
                "item2",
                "item3"
                ]
                },
                {
                "type": "comment",
                "name": "question6",
                "title": "Tại sao bạn ghét tôi?",
                "isRequired": true
                }
            ]
            }
            ]
        },
    };
  },
  mounted() {
    var jsonAnaV2 = [{"question1":"Tuan","question2":["item1"],"question3":"item3","question4":"Tôi là bạn đó","question5":["item1"],"question6":"Hi heo"},
    {"question1":"Khanh","question2":["item2"],"question3":"item3","question4":"Tôi là bạn đó","question5":["item3"],"question6":"I Love You"},
    {"question1":"Heo","question2":["item3"],"question3":"item1","question4":"Tôi là bạn đó","question5":["item2"],"question6":"Love"} ];
    var survey = new Model(surveyJson);
    var surveyResultNode = document.getElementById("surveyResult");
    surveyResultNode.innerHTML = "";
    var surveyAnalyticsTabulator = new SurveyAnalyticsTabulator.Tabulator(survey, jsonAnaV2);
    surveyAnalyticsTabulator.render(surveyResultNode);
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
.space {
    margin-bottom: 50px;
}
</style>