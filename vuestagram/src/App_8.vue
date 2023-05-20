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

  <Container :data="data" :step="step" :imgUrl="imgUrl" @write="text = $event"/>
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
    }
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
        filter: "perpetua"
      };
      this.data.unshift(mydata);
      this.step = 0;
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
<!-- 8강 slot -->
<!--
    1. 사진위에 필터명 표기하면서 배우기
    slot으로 부모 -> 자식 데이터 전송이 가능(props보다 좀 더 직관적)
    -> 사용법
       (1). 자식에 구멍 뚫기
       (2). <컴포넌트> </컴포넌트> 태그사이에 데이터넣기
    2. slot은 태그안에 데이터바인딩할 때만 사용가능
    -> 속성 같은데에서는 slot으로 사용 불가
    3. slot 여러개 사용하는 법
    - 자식
    -> <slot name="a"></slot>
    -> <slot name="b"></slot>
    - 부모
    -> <template v-slot:a> 데이터1 </template>
    -> <template v-slot:b> 데이터2 </template>
    ==> 이런개 반복되다 보면 복잡해짐, 여러개가 필요할 경우는 props가 더 나음.
    4. slot 장점
    -> 간단하게 전송이 가능, html도 전송이 가능
    !! 5. 참고 slot props
    -> slot 사용할 때 자식데이터 필요한 경우
    <slot :자식데이터="자식데이터"></slot>
    => 부모 사용 가능!
    -> 부모는 {{자식데이터}} 로 사용 가능!
    단, 부모에 <template v-slot:default="작명">{{작명.자식데이터}}</template>

-->
