<template>
  <div>
    <div class="page-content bg-gray">
      <div
        class="dlab-bnr-inr overlay-black-middle bg-pt"
        style="background-image:url(images/banner/bnr1.jpg);"
      >
        <div class="container">
          <div class="dlab-bnr-inr-entry">
<<<<<<< HEAD
            <h1 class="text-white">Khảo sát của tôi</h1>
=======
            <h1 class="text-white">My Survey</h1>
>>>>>>> 4d9d3589fe4f294097a99fd481dc9c6b9660277f
          </div>
        </div>
      </div>
      <br />
      <b-button variant="primary" v-show="loading" class="load">
        <b-spinner type="grow"></b-spinner>
        Loading...
      </b-button>
      <div class="content-area">
        <div
              class="post card-container col-xl-12 col-lg-5 col-md-12 col-sm-12"
            >
            </div>
        <div class="container">
          <button class="btn btn-primary " v-on:click="createSurvey()">
<<<<<<< HEAD
                Tạo khảo sát
=======
                create survey
>>>>>>> 4d9d3589fe4f294097a99fd481dc9c6b9660277f
          </button>
          <br/> <br/>
          <div
            id="masonry"
            class="dlab-blog-grid-3 row"
          >
          
            <div
              class="post card-container col-xl-6 col-lg-4 col-md-6 col-sm-6" v-for="(survey, index) in surveys"
            :key="index"
            >
              <div class="blog-post blog-grid blog-rounded blog-effect1">
                <div class="dlab-post-media dlab-img-effect">
                  <a
                    ><img src="images/blog/grid/pic1.jpg" alt=""
                  /></a>
                </div>
                <div class="dlab-info p-a20">
                  <div class="dlab-post-meta">
                    <ul>
                      <li class="post-author">
<<<<<<< HEAD
                        <i class="la la-user-circle"></i> Bởi
                        <a href="javascript:void(0);">{{ survey.name}}</a>
                      </li>
                      <li class="post-tag">
                        <a href="javascript:void(0);">Khảo sát</a>
=======
                        <i class="la la-user-circle"></i> By
                        <a href="javascript:void(0);">{{ survey.name}}</a>
                      </li>
                      <li class="post-tag">
                        <a href="javascript:void(0);">KNOWLEDGE</a>
>>>>>>> 4d9d3589fe4f294097a99fd481dc9c6b9660277f
                      </li>
                    </ul>
                  </div>
                  <div class="dlab-post-title ">
                    <h5 class="post-title">
                      <a>{{ survey.title}}</a>
                    </h5>
                  </div>
                  <div class="dlab-post-text">
                    <p>
                      {{ survey.description}}
                    </p>
                  </div>
                  <div class="post-footer">
                    <div class="dlab-post-meta">
                      <ul>
                        <li class="post-date">
                          <i class="la la-clock"></i> <strong>01 June</strong>
                          <span> 2020</span>
                        </li>
                      </ul>
                    </div>
                    <div class="trey-heo-icon">
                      <span
                        v-on:click="viewSurvey(survey.id, survey.hash)"
                        class="btn-info btn-sm"
<<<<<<< HEAD
                        >Xem</span
=======
                        >View</span
>>>>>>> 4d9d3589fe4f294097a99fd481dc9c6b9660277f
                      >
                      <span
                        v-on:click="analysisSurvey(survey.id, survey.hash)"
                        class="btn-primary btn-sm"
<<<<<<< HEAD
                        >Phân tích</span>
                      <!-- <span
                        class="btn-danger btn-sm"
                        v-on:click="deleteSurvey(1)"
                        >List user do</span
                      > -->
=======
                        >Analysis</span>
                      <span
                        class="btn-danger btn-sm"
                        v-on:click="deleteSurvey(1)"
                        >List user do</span
                      >
>>>>>>> 4d9d3589fe4f294097a99fd481dc9c6b9660277f
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pagination-bx rounded-sm primary clearfix col-md-12 text-center"
          >
            <ul class="pagination">
              <li class="previous">
                <span v-on:click="viewPage(1)"
                  ><i></i> Prev</span
                >
              </li>
              <li class="active"><span v-on:click="viewPage(1)">1</span></li>
              <li><span v-on:click="viewPage(2)">2</span></li>
              <li class="next">
                <span v-on:click="viewPage(2)"
                  >Next <i class="ti-arrow-right"></i
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  name: "listSurvey",
  created() {
    this.page = 1;
    this.getSurveyByAddress();
  },
  data() {
    return {
      surveys: [],
      listSurvey: [],
      pageOne: [],
      pageTwo: [],
      page: 1,
      loading: false,
    };
  },
  methods: {
    deleteSurvey() {
      confirm("delete survey");
    },
    viewSurvey: async function(id, hash) {
      //get question of survey
      const response = await fetch("https://gateway.ipfs.io/ipfs/" + hash);
      const ques = await response.json();
      // get result of survey
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = new web3.eth.Contract(surveyAbi, SC.ADDRESS_SURVEY);
      const result = await instance.methods
        .getSurveyResultById(id)
        .call({ from: accounts[0] });
      const arrResult = result.listResult;
      var temp = [];
      for (var i=0;i<arrResult.length;i++){
          const resp = await fetch("https://gateway.ipfs.io/ipfs/" + arrResult[i]);
          const dt = await resp.json();
          temp.push(JSON.parse(dt));
      }
      // get list data from ipfs and send to view detail component
      this.$router.push({ name: "viewSurvey", params: { id: id, survey: temp, question: ques } });
    },
    analysisSurvey: async function(id,hash){
      //get question of survey
      const response = await fetch("https://gateway.ipfs.io/ipfs/" + hash);
      const ques = await response.json();
      // get result of survey
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = new web3.eth.Contract(surveyAbi, SC.ADDRESS_SURVEY);
      const result = await instance.methods
        .getSurveyResultById(id)
        .call({ from: accounts[0] });
      const arrResult = result.listResult;
      var temp = [];
      for (var i=0;i<arrResult.length;i++){
          const resp = await fetch("https://gateway.ipfs.io/ipfs/" + arrResult[i]);
          const dt = await resp.json();
          temp.push(JSON.parse(dt));
      }
      // get list data from ipfs and send to view detail component
      this.$router.push({ name: "analysisSurvey", params: { id: id, survey: temp, question: ques } });
    },
    createSurvey: async function() {
      try {
        this.loading= true;
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        const instance = new web3.eth.Contract(abi, SC.ADDRESS_TOKEN_VLK);
        let check = false;
        const number = "10000000000000000000";
        var adrReceiver = "0xF2C54084Dc0f82A01e1dd50fb8dCA3B2c2C3980e";
        const heo = await instance.methods
          .transfer(adrReceiver, number)
          .send({ from: accounts[0] })
          .on("receipt", function(receipt) {
            console.log("transfer successfully!!!");
            console.log("receipt:" + receipt);      
            check = true;
          })
          .on("error", function(error) {
            console.log("transfer failed!!!");
            console.log(error);
            check = false;
          });
        this.loading = false;
        if (check === true) {
          this.$swal.fire({
                icon: "success",
                title: "You has sent token successfully!!!",
                showConfirmButton: false,
                timer: 1500
              });
          this.loading = false;
          this.$router.push({ name: "createSurvey" });
        } else {
          this.loading = false;
           this.$swal.fire({
              icon: "error",
              title: "Failed to send token. Please check your network",
              showConfirmButton: false,
              timer: 1500
            });
          alert("transaction failed!!!");
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    },
    viewPage(pg){
       if (pg == 1) {
            this.surveys = this.pageOne;
            this.page = 1;
      } else if (pg ==2 ) {
            this.surveys = this.pageTwo
            this.page = 2;
       }
    },
    getSurveyByAddress: async function() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const instance_survey = new web3.eth.Contract(
          surveyAbi,
          SC.ADDRESS_SURVEY
        );
        const heo1 = await instance_survey.methods.getLength().call();
        let heo = await instance_survey.methods
          .getSurveyByAddress()
          .call({ from: accounts[0] });
        this.listSurvey = heo;
        if (this.listSurvey.length > 4) {
            for (var i=0;i<4;i++){
               this.surveys.push(this.listSurvey[i]);
               this.pageOne.push(this.listSurvey[i]);
            }
            for (var j=4;j<=this.listSurvey.length;j++){
              this.pageTwo.push(this.listSurvey[j]);
            }
        } else {
          this.surveys = this.listSurvey;
          this.pageOne = this.surveys;
        }
        this.page = 1;
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
#trey-heo-icon {
  display: inline-block;
  padding: 4px;
}
.load {
  margin-left: 700px;
  margin-right: 200px;
}
</style>
