<template>
    <div>
    <header class="site-header mo-left header">
		<div class="top-bar">
			<div class="container">
				<div class="row d-flex justify-content-between align-items-center">
					<div class="dlab-topbar-left">
						<ul>
							<!-- <li><i class="la la-phone-volume"></i> +84 898325907</li> -->
							<!-- <li><i class="las la-map-marker"></i>271 Nguyễn Văn Linh - Đà Nẵng</li> -->
						</ul>
					</div>
					<div class="dlab-topbar-right right">
						<ul>
							<li><i class="la la-clock"></i>Mon - Fri 8.00 - 18.00</li>
							<li><i class="las la-envelope-open"></i>itvts@gmail.com</li>
							<li v-show="this.isLogged"><i>Chào mừng  {{username}}</i></li>
							<li v-show="this.isLogged"><button v-on:click="Logout" class="btn btn-primary btn-sm">Đăng xuất</button></li>
						</ul>				
					</div>
				</div>
			</div>
		</div>
        <div class="sticky-header main-bar-wraper navbar-expand-lg">
            <div class="main-bar clearfix ">
                <div class="container clearfix">
                    <div class="logo-header mostion logo-dark">
						<a href="index.html"><img src="images/logo.png" alt=""></a>
					</div>
                    <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
                    <div class="extra-nav">
                        <div class="extra-cell">
                            <button id="quik-search-btn" type="button" class="site-button-link"><i class="la la-search"></i></button>
						</div>
                    </div>
                    <div class="dlab-quik-search">
                        <form action="#">
                            <input name="search" value="Search ne" type="text" class="form-control" placeholder="Type to search">
                            <span id="quik-search-remove"><i class="ti-close"></i></span>
                        </form>
                    </div>
                    <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
						<div class="logo-header d-md-block d-lg-none">
							<a href="index.html"><img src="images/logo.png" alt=""></a>
						</div>
                        <ul class="nav navbar-nav">	
							<li class="active">
								<router-link to="/">Trang chủ</router-link>
							</li>
							<li>
								<router-link to="/about">Về chúng tôi</router-link>
							</li>
							<li>
								<router-link to="/survey/list">Khảo sát của tôi</router-link>
							</li>
							<li>
								<a href="https://app.uniswap.org/#/swap?chain=ropsten">Đổi token hệ thống</a>
							</li>
						</ul>
						<div class="dlab-social-icon">
							<ul>
								<li><a class="site-button circle fa fa-facebook" href="javascript:void(0);"></a></li>
								<li><a class="site-button circle fa fa-twitter" href="javascript:void(0);"></a></li>
								<li><a class="site-button circle fa fa-linkedin" href="javascript:void(0);"></a></li>
								<li><a class="site-button circle fa fa-instagram" href="javascript:void(0);"></a></li>
							</ul>
						</div>		
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
</template>
<script>
$(document).ready(function () {
    $('.nav li a').click(function(e) {
        $('.nav li .active').removeClass('active');
        var $parent = $(this).parent();
        $parent.addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});

import getWeb3 from '../../constants/getWeb3'
import authAbi from '../../constants/authAbi.json'
import SC from '../../constants/smartContractAddress'

export default {
  name: 'Header',
  created(){
	  this.isLogged = localStorage.getItem("isLogged");
	  this.username = localStorage.getItem("name");
	  console.log(this.isLogged);
	  console.log(this.username);
	  if ( this.isLogged ===  null || this.isLogged === false || this.isLogged === undefined){
		  this.$router.push({name:"login"});
	  }
  },
  data() {
	  return {
		  username: '',
		  isLogged: false,
	  };
  },
  methods: {
	  Logout: async function(){
		try {
			const web3 = await getWeb3();
			const accounts = await web3.eth.getAccounts();
			console.log(accounts[0]);
			const validateInstance = new web3.eth.Contract(
				authAbi,
				SC.ADDRESS_AUTHENTICAION
			);
			console.log("vo roi");
			let check=false;
			await validateInstance.methods.logoutPartner(accounts[0])
			.send({from: accounts[0]})
			.on("receipt", function(receipt) {
				localStorage.removeItem("isLogged");
				localStorage.removeItem("addressLogin");
				console.log(receipt);
				check = true;
            })
            .on("error", function(error) {
				console.log("logout failed!!!")
				console.log(error);
            });
			if (check === true) {
				this.$router.push({name: "login"});
			}
		} catch (error) {
			alert(
			`Failed to load web3, accounts, or contract. Check console for details.`
			);
			console.error(error);
		}
	  }
  }
}
</script>
<style scoped>
.right{
	float: right;
	margin-left: 1000px;
}
</style>
