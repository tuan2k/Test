<template>
  <div>
    <div class="page-content bg-white">
      <div class="content-block">
        <div class="section-full bg-gray content-inner about-carousel-ser">
          <div class="container">
            <div class="section-head text-center">
              <h2 class="title">POPULAR SURVEY</h2>
            </div>
            <div class="row">
              <div
                class="col-md-6 col-lg-3 col-sm-6"
                v-for="(survey, index) in surveys"
                :key="index"
              >
                <div class="dlab-box courses-bx">
                  <div class="dlab-media">
                    <div class="user-info">
                      <!-- <img
                        src="/static/assets/images/testimonials/pic1.jpg"
                        alt=""
                      /> -->
                      <h6 class="title">Jack Ronan</h6>
                      <div class="review">
                        <ul class="item-review">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star-half-o"></i></li>
                          <li><i class="fa fa-star-o"></i></li>
                        </ul>
                        <span>10 Review</span>
                      </div>
                    </div>
                  </div>
                  <div class="dlab-info">
                    <h6 class="dlab-title">
                      <a href="courses-details.html">{{ survey.title }}</a>
                    </h6>
                    <p>
                      {{ survey.description }}
                    </p>
                    <div class="courses-info">
                      <ul>
                        <li>
                          <i class="fa fa-users"></i>{{ survey.number }} Surveys
                        </li>
                      </ul>
                      <span class="price">$79.00</span>
                      <span
                        v-on:click="doSurvey(survey.id, survey.hash)"
                        class="btn-sm btn-info"
                        >Thực hiện</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-full bg-white content-inner">
          <div class="container">
            <div class="row service-area-one">
              <div class="col-lg-4 m-b30 hidden-sm">
                <div class="rdx-thu">
                  <img src="/static/assets/images/student1.png" alt="" />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="section-head">
                  <h2 class="title">Welcome To ESurvey System</h2>
                  <p>
                    We support many service about blokchain to ours customers.
                    We help them know more about blockchain and help them to
                    improve theirs service by blockchain technology..
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper left">
                      <div class="icon-bx-xs bg-secondry radius">
                        <a href="#" class="icon-cell"
                          ><i class="fa fa-paint-brush"></i
                        ></a>
                      </div>
                      <div class="icon-content">
                        <h5 class="rdx-tilte">Special Education</h5>
                        <p>
                          This is one the the most theme need a lot of survey.
                          So that improve education enviroment and develope
                          students.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper left">
                      <div class="icon-bx-xs bg-secondry radius">
                        <a href="#" class="icon-cell"
                          ><i class="fa fa-calendar"></i
                        ></a>
                      </div>
                      <div class="icon-content">
                        <h5 class="rdx-tilte">Economics</h5>
                        <p>
                          In Economics department, information is really
                          importance to have chance to grow and develope
                          business. Therefore survey result is a part of this
                          department.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper left">
                      <div class="icon-bx-xs bg-primary radius">
                        <a href="#" class="icon-cell"
                          ><i class="fa fa-book"></i
                        ></a>
                      </div>
                      <div class="icon-content">
                        <h5 class="rdx-tilte">Medical</h5>
                        <p>
                          Survey to People who willing to pay money to get
                          vaccine and maxium ability to pay for any special
                          medicine is really importance. Which can decide
                          ability of medicine to manufacturing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper left">
                      <div class="icon-bx-xs bg-primary radius">
                        <a href="#" class="icon-cell"
                          ><i class="fa fa-graduation-cap"></i
                        ></a>
                      </div>
                      <div class="icon-content">
                        <h5 class="rdx-tilte">Emotion</h5>
                        <p>
                          The survey about emotion can help human can sympathy
                          and happy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper left">
                      <div class="icon-bx-xs bg-secondry radius">
                        <a href="#" class="icon-cell"
                          ><i class="fa fa-user"></i
                        ></a>
                      </div>
                      <div class="icon-content">
                        <h5 class="rdx-tilte">Qualified technology</h5>
                        <p>
                          So we provide any service to our customers to get any
                          things you need
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper left serb">
                      <div class="icon-bx-xs bg-secondry radius">
                        <a href="#" class="icon-cell"
                          ><i class="fa fa-clock-o"></i
                        ></a>
                      </div>
                      <div class="icon-content">
                        <h5 class="rdx-tilte">24/7 Supports</h5>
                        <p>
                          We hope to have chance to support you!!!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
          style="background-image:url(images/background/bg4.jpg);"
        >
          <div class="container">
            <div class="row">
              <div
                class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="icon-bx-wraper center">
                  <div class="icon-content">
                    <h2 class="dlab-tilte counter">1107</h2>
                    <p>Survey</p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="icon-bx-wraper center">
                  <div class="icon-content">
                    <h2 class="dlab-tilte counter">1552</h2>
                    <p>Million token</p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div class="icon-bx-wraper center">
                  <div class="icon-content">
                    <h2 class="dlab-tilte counter">207</h2>
                    <p>Partner</p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div class="icon-bx-wraper center">
                  <div class="icon-content">
                    <h2 class="dlab-tilte counter">21000</h2>
                    <p>Survey Result</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-full bg-gray content-inner">
          <div class="container">
            <div class="section-head text-center ">
              <h2 class="title">Meet The Teacher</h2>
              <p>
                There are many members in our platform. But now I will show you
                about ESurvey key members
              </p>
            </div>
            <div class="row">
              <div
                class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="dlab-box m-b30 dlab-team1">
                  <div class="dlab-media">
                    <a href="teachers-profile.html">
                      <img
                        id="IdOfMyImage"
                        width="358"
                        height="460"
                        alt=""
                        src="images/our-team/preview.jpg"
                        class="lazy"
                        data-src="images/our-team/pic17.jpg"
                      />
                    </a>
                  </div>
                  <div class="dlab-info">
                    <h4 class="dlab-title">
                      <a href="teachers-profile.html">Trey Nguyen</a>
                    </h4>
                    <span class="dlab-position">Director</span>
                    <ul class="dlab-social-icon dez-border">
                      <li>
                        <a
                          class="fa fa-facebook"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a class="fa fa-twitter" href="javascript:void(0);"></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-linkedin"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-pinterest"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="dlab-box m-b30 dlab-team1">
                  <div class="dlab-media">
                    <a href="teachers-profile.html">
                      <img
                        id="IdOfHeoImage"
                        width="358"
                        height="460"
                        alt=""
                        src="images/our-team/preview.jpg"
                        class="lazy"
                        data-src="images/our-team/pic16.jpg"
                      />
                    </a>
                  </div>
                  <div class="dlab-info">
                    <h4 class="dlab-title">
                      <a href="teachers-profile.html">Khanh Le</a>
                    </h4>
                    <span class="dlab-position">Designer</span>
                    <ul class="dlab-social-icon dez-border">
                      <li>
                        <a
                          class="fa fa-facebook"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a class="fa fa-twitter" href="javascript:void(0);"></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-linkedin"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-pinterest"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div class="dlab-box m-b30 dlab-team1">
                  <div class="dlab-media">
                    <a href="teachers-profile.html">
                      <img
                        id="IdOfLuisImage"
                        width="358"
                        height="460"
                        alt=""
                        src="images/our-team/preview.jpg"
                        class="lazy"
                        data-src="images/our-team/pic15.jpg"
                      />
                    </a>
                  </div>
                  <div class="dlab-info">
                    <h4 class="dlab-title">
                      <a href="teachers-profile.html">Luis Nguyen</a>
                    </h4>
                    <span class="dlab-position">Developer</span>
                    <ul class="dlab-social-icon dez-border">
                      <li>
                        <a
                          class="fa fa-facebook"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a class="fa fa-twitter" href="javascript:void(0);"></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-linkedin"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-pinterest"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div class="dlab-box m-b30 dlab-team1">
                  <div class="dlab-media">
                    <a href="teachers-profile.html">
                      <img
                        id="IdOfLeoImage"
                        width="358"
                        height="460"
                        alt=""
                        src="images/our-team/preview.jpg"
                        class="lazy"
                        data-src="images/our-team/pic18.jpg"
                      />
                    </a>
                  </div>
                  <div class="dlab-info">
                    <h4 class="dlab-title">
                      <a href="teachers-profile.html">Leo Lee</a>
                    </h4>
                    <span class="dlab-position">Manager</span>
                    <ul class="dlab-social-icon dez-border">
                      <li>
                        <a
                          class="fa fa-facebook"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a class="fa fa-twitter" href="javascript:void(0);"></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-linkedin"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                      <li>
                        <a
                          class="fa fa-pinterest"
                          href="javascript:void(0);"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getWeb3 from "../constants/getWeb3";
import abi from "../constants/abi.json";
import surveyAbi from "../constants/surveyAbi.json";
import SC from "../constants/smartContractAddress";

const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https"
});

export default {
  name: "listSurvey",
  async created() {
    await this.getMyImage();
    await this.getHeoImage();
    await this.getLeoImage();
    await this.getLuisImage();
    this.getSurveyExpectByAddress();
  },
  data() {
    return {
      surveys: {},
      isLoading: false,
      fullPage: true
    };
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    deleteSurvey() {
      confirm("delete survey");
    },
    doSurvey: async function(idSurvey, hash) {
      const response = await fetch("https://gateway.ipfs.io/ipfs/" + hash);

      if (!response.ok) throw new Error(response.statusText);
      var json = await response.json();
      localStorage.setItem("doSurvey", JSON.stringify(json));
      localStorage.setItem("IdSurvey", idSurvey);
      this.$router.push({
        name: "doSurvey",
        params: { id: idSurvey, data: JSON.stringify(json) }
      });
    },
    createSurvey: async function() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        const instance = new web3.eth.Contract(abi, SC.ADDRESS_TOKEN_VLK);
        let check = false;
        var adrReceiver = "0xF2C54084Dc0f82A01e1dd50fb8dCA3B2c2C3980e";
        const heo = await instance.methods
          .transfer(adrReceiver, 1000000000)
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
        console.log(heo);
        if (check === true) {
          this.$router.push({ name: "createSurvey" });
        } else {
          alert("transaction failed!!!");
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    },
    getSurveyExpectByAddress: async function() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const instance_survey = new web3.eth.Contract(
          surveyAbi,
          SC.ADDRESS_SURVEY
        );
        let heo = await instance_survey.methods
          .getSurveyExpextAddress()
          .call({ from: accounts[0] });
        this.surveys = heo;
        console.log(this.surveys);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.log(error);
      }
    },
    getMyImage: async function() {
      // get image in ipfs
      const chunks = [];
      const result = await ipfs.cat(
        "QmfS2X6kKVsp9CRk6cBbxWd93Z7grhzn4XYxKuN3NtXRHf"
      );
      for (const chunk of result) {
        chunks.push(chunk);
      }
      var bytes = new Uint8Array(chunks);
      var image = document.getElementById("IdOfMyImage");
      image.src = "data:image/png;base64," + this.encode(bytes);
    },
     getHeoImage: async function() {
      // get image in ipfs
      const chunks = [];
      const result = await ipfs.cat(
        "QmX9ErZ3hCk5FCwHWBfHZkTq9qNWoVzUmFHwXg6nzpyj4k"
      );
      for (const chunk of result) {
        chunks.push(chunk);
      }
      var bytes = new Uint8Array(chunks);
      var image = document.getElementById("IdOfHeoImage");
      image.src = "data:image/png;base64," + this.encode(bytes);
    },
    getLuisImage: async function() {
      // get image in ipfs
      const chunks = [];
      const result = await ipfs.cat(
        "QmUL22izCLNiYJY92CvhHRKjzZC887kpkvC81RfyYHbs88"
      );
      for (const chunk of result) {
        chunks.push(chunk);
      }
      var bytes = new Uint8Array(chunks);
      var image = document.getElementById("IdOfLuisImage");
      image.src = "data:image/png;base64," + this.encode(bytes);
    },
     getLeoImage: async function() {
      // get image in ipfs
      const chunks = [];
      const result = await ipfs.cat(
        "QmQ3DvZHbx2qvS2sNsPnpX88moVG47k85bijGWoWr7EAhy"
      );
      for (const chunk of result) {
        chunks.push(chunk);
      }
      var bytes = new Uint8Array(chunks);
      var image = document.getElementById("IdOfLeoImage");
      image.src = "data:image/png;base64," + this.encode(bytes);
    },
    encode(input) {
      var keyStr =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      while (i < input.length) {
        chr1 = input[i++];
        chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
        chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output +=
          keyStr.charAt(enc1) +
          keyStr.charAt(enc2) +
          keyStr.charAt(enc3) +
          keyStr.charAt(enc4);
      }
      return output;
    }
  }
};
</script>
