<template>
    <div class="bg">
        <div class="mainbox">
        <div class="err">4</div>
        <div class="err1">0</div>
        <div class="err2">4</div>
        <br />
        <div class="msg">
            <br />
            <p style="color:red">Trang không tồn tại!!!</p>
            <p>Trở về trang chủ <router-link to="/">home</router-link></p>
            </div>
        </div>
    </div>
</template>
<style scoped>

.bg {
  background-color: #95c2de;
}

.mainbox {
  background-color: #95c2de;
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
}

  .err {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 20%;
    top: 8%;
  }

.err1 {
  color: #ffffff;
  font-family: 'Nunito Sans', sans-serif;
  position: absolute;
  font-size: 11rem;
  left: 42%;
  top: 15%;
}

 .err2 {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 68%;
    top: 8%;
  }

.msg {
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}
</style>