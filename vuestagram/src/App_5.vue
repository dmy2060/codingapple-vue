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

  <Container :data="data" :step="step" :imgUrl="imgUrl"/>
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
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
      num:0,
      step:0,
      imgUrl: ''
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
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      this.imgUrl = url;
      this.step = 2;
      console.log(url)
    },
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
<!-- 5강 이미지 업로드버튼 만들기 -->
<!--
    1. 이전 방식에서는 업로드한걸 서버로 보내고 저장시키고 저장된 url을 유저한테 보냄
    2. 현재는 브라우저에서 이미지 다루는 함수 씀
      - FileReader(), 
      => 파일을 글자로 변환해줌 img src에 넣을 수 있음
      - URL.createObjectURL()
      => 이미지의 가상 url을 생성해줌
      => 임시 url! 브라우저 끄면 사라짐
      => blob: 0과 1로 이루어진 binary 데이터, 이미지의 경우 blob이라는 object에 담아서 다룸
      => input에서 사진 여러개 받으려면 multiple 써주면 가능
      => 이미지만 선택할 수 있게 하려면? 
         -> accept="image/*"
         -> 이미지만 뜰 수 있게 하는것 제한은 아님(근본적 해결책 아님)
         => 자바스크립트로 확장자 검사를 할 수 있음 ==> (file[0].png)
    3. 인풋이 변화했을때 특정이벤트 실행시키려면, @change="" 사용
      -> 함수에 e 파라미터 받고 e.target.files 라고 쓰면 업로드한 파일이 담김
-->
