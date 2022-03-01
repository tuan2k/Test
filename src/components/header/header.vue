<template>
    <div>
    <header class="site-header mo-left header">
		<div class="top-bar">
			<div class="container">
				<div class="row d-flex justify-content-between align-items-center">
					<div class="dlab-topbar-left">
						<ul>
							<li><i class="la la-phone-volume"></i> +84 898325907</li>
							<li><i class="las la-map-marker"></i>271 Nguyễn Văn Linh - Đà Nẵng</li>
						</ul>
					</div>
					<div class="dlab-topbar-right">
						<ul>
							<li><i class="la la-clock"></i>  Mon - Fri 8.00 - 18.00</li>
							<li><i class="las la-envelope-open"></i>itvts@gmail.com</li>
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
								<router-link to="/gallary">Giỏ NFT</router-link>
							</li>
							<li>
								<router-link to="/myNFT">NFT của tôi</router-link>
							</li>
							<li>
								<router-link to="/survey/list">Khảo sát của tôi</router-link>
							</li>
							<li>
								<router-link to="/survey/create">Tạo khảo sát</router-link>
							</li>
							<li>
								<router-link to="/history">Lịch sử</router-link>
							</li>
						</ul>
						<div class="dlab-social-icon">
							<ul>
								<li><a class="site-button circle fa fa-facebook" href="javascript:void(0);"></a></li>
								<li><a class="site-button  circle fa fa-twitter" href="javascript:void(0);"></a></li>
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

</script>
