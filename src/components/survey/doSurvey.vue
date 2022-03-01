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
let surveyJson = {
 "pages": [
  {
   "name": "Trang 1",
   "elements": [
    {
     "type": "text",
     "name": "question1",
     "title": "Bạn tên là gì?",
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
} 

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