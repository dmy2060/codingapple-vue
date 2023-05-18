<template>
 <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :data="data"/>
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import postdata from './assets/postdata'
import Container from './components/Container.vue'
import axios from 'axios'
// axios.get()

export default {
  name: 'App',
  data(){
    return {
      data: postdata,
      num:0

    }
  },
  components: {
    Container
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.num}.json`)
      .then((result)=>{
        console.log(result.data);
        this.data.push(result.data);
        this.num++;
      })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

</style>
<!-- 3강 ajax로 더보기 버튼 만들기 -->
<!--
    1. ajax
       - get or post 요청하면 브라우저가 새로고침됨
       - <form></form> 쓰면  get or post 요청 가능
      (1). get 요청
        서버가 정해놓은 url 잘 적어서 요청하는 것
        -> 데이터를 서버에서 가져올 때
      (2). post 요청
        -> 서버로 데이터를 보낼 때
    2. ajax 쓰면 새로고침 없이도 get post 요청 가능
      -> ajax 요청하려면
      (1). axios 라이브러리 사용
         -> npm install axios
      (2). 기본 fetch 함수 사용
         -> 매우 최신 브라우저에서만 이용이 가능함
         -> 호환성 때문에 axios를 더 많이 사용
    3. axios 사용법
    - import axios from 'axios'
    - 필요한곳에 axios.get(), post()
    -> axios.post('url', {name:'kim'}).then().catch((error)=>{})
       이런식으로 전달을 할 수 있음

-->
