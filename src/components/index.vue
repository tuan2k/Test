<template>
  <div>
    <div class="page-content bg-white">
      <div class="content-block">
        <div class="section-full bg-gray content-inner about-carousel-ser">
          <div class="container">
            <div class="section-head text-center">
              <h2 class="title">KHẢO SÁT PHỔ BIẾN</h2>
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
                      <h6 class="title">Bởi {{ survey.name }}</h6>
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
                      <a href="courses-details.html">{{ survey.title.substring(0,30) }}...</a>
                    </h6>
                    <p>
                      {{ survey.description.substring(0,30) }}
                    </p>
                    <div class="courses-info">
                      <ul>
                        <li>
                          <i class="fa fa-users"></i>{{ survey.number}}survey
                        </li>
                      </ul>
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
                
              </div>
              <div class="col-lg-8">
                <div class="section-head">
                  <h2 class="title">Chào mừng đến với hệ thống ESurvey</h2>
                  <p>
                   Chúng tôi hỗ trợ nhiều dịch vụ về blokchain cho khách hàng của chúng tôi.
                     Chúng tôi giúp họ biết thêm về blockchain và giúp họ
                     cải thiện dịch vụ của họ bằng công nghệ blockchain ..
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
                        <h5 class="rdx-tilte">Giáo dục đặc biệt</h5>
                        <p>
                          Đây là một trong những chủ đề cần khảo sát nhiều nhất.
                           Vì vậy, cải thiện môi trường giáo dục và phát triển
                           sinh viên.
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
                        <h5 class="rdx-tilte">Kinh tế</h5>
                        <p>
                          Trong khoa Kinh tế, thông tin thực sự là
                           tầm quan trọng là có cơ hội phát triển và phát triển
                           việc kinh doanh. Do đó, kết quả khảo sát là một phần của
                           Phòng ban.
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
                        <h5 class="rdx-tilte">Y học</h5>
                        <p>
                         Khảo sát những người sẵn sàng trả tiền để có được
                           vắc xin và khả năng chi trả tối đa cho bất kỳ
                           thuốc thực sự là quan trọng.Điều này có thể quyết định
                           khả năng sản xuất thuốc
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
                        <h5 class="rdx-tilte">Cảm xúc</h5>
                        <p>
                         Cuộc khảo sát về cảm xúc có thể giúp con người có thể cảm thông
                           và vui vẻ.
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
                        <h5 class="rdx-tilte">Tiêu chuẩn công nghệ</h5>
                        <p>
                          Vì vậy, chúng tôi cung cấp bất kỳ dịch vụ nào cho khách hàng để có được bất kỳ
                           những thứ bạn cần
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
                        <h5 class="rdx-tilte">24/7 Hổ trợ</h5>
                        <p>
                         Chúng tôi hy vọng có cơ hội hợp tác với bạn!!!
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
              <h2 class="title">Đội ngũ</h2>
              <p>
              Có nhiều thành viên trong nền tảng của chúng tôi. Nhưng bây giờ tôi sẽ chỉ cho bạn
                 về các thành viên chủ chốt của ESurvey
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
    await this.getSurveyExpectByAddress();
    await this.getMyImage();
    await this.getHeoImage();
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
