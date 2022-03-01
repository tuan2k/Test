<template>
  <div>
      <div class="header page-wraper">
      <Header />
      </div>
      <router-view/>
      <Footer />
      <button v-on:click="topFunction()" id="myBtn" title="Go to top" class="icon-up"><i class="fa fa-arrow-up"></i></button>
  </div>
</template>

<script>
let mybutton= "";
window.onload = function() {
   mybutton = document.getElementById("myBtn");
};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 
import Footer from './footer/footer.vue'
import Header from './header/header.vue'
export default {
  name: 'Layout',
  components : {
      Footer,
      Header
   },
  methods: {
    topFunction() {
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>
<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 99999999999;
}
#myBtn {
  display: none; 
  position: fixed; 
  bottom: 20px; 
  right: 30px; 
  z-index: 99; 
  border: none;
  outline: none; 
  background-color: #4ad5ae; 
  color: white; 
  cursor: pointer; 
  padding: 15px; 
  border-radius: 10px; 
  font-size: 18px; 
}

#myBtn:hover {
  background-color: #555;
}
</style>

