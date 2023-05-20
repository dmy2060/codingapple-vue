<template>
 <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :chkfilter="chkfilter" :data="data" :step="step" :imgUrl="imgUrl" @write="text = $event"/>
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
      imgUrl: '',
      text:'',
      chkfilter: '',

    }
  },
  mounted() {
    this.emitter.on("작명", (a)=>{
     this.chkfilter = a;
     console.log(this.chkfilter)
    })
  },
  components: {
    Container
  },
  methods: {
    publish() {
      let mydata = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.text,
        filter: this.chkfilter
      };
      this.data.unshift(mydata);
      this.step = 0;
      this.chkfilter = ''
    },
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
      this.step++;
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
<!-- 9강 필터 박스 클릭시 기능을 만들어보자 -->
<!--
    1. app.vue까지 데이터를 전달
    상위 컴포넌트로는 custom event 가능하나, 상위 컴포넌트가 여러개일 경우 여러번 사용해야함
    -> mitt 사용하면 원하는데로 전송 가능
    !! import 시 ./ 없고 라이브러리이면 이름만 적음
    2. mitt 라이브러리 셋팅
    -> main.js
    import mitt from 'mitt'
    let emitter = mitt();
    let app = createApp(App);
    app.config.globalProperties.emitter = emitter;
    => app.config.globalProperties = 글로벌한 변수보관함임
    => 자수쓰는 라이브러리가 있으면 main.js에서 config.global~~ 로 선언하면
       import 해올 필요 없이 this.~~로 사용이 가능함!
    3. mitt로 데이터전송하는법
    (1). 발사하고 this.emitter.emit("작명", "데이터")
    (2). 수신하면 됨 this.emitter.on("작명", (a)=>{}) => mounted()안에 넣어주는게 관습적임
         => a는 이벤트 발사할 때 들어있던 데이터
         => 작명은 유니크하게! 단, 많이 쓰면 관리가 힘들어짐! 차라리 vuex 사용하는게 더 좋음
-->
