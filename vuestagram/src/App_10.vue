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
<h4>안녕 {{ $store.state.name }} </h4>
<button @click="$store.state.name = '박'">버튼</button>
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
<!-- 10강 vuex 사용하는 이유 -->
<!--
    1. 데이터 주고받기 어려움
       - 하위컴포넌트 전송은 props
       - 상위컴포넌트 전송은 custom event 아니면 mitt
    ==> vuex를 사용해서 데이터들을 다 몰아넣음
        모든 컴포넌트가 직접 꺼내서 사용할 수 있음
        단, 코드가 좀 많이 길어질 수 있음
        컴포넌트가 많은 플젝에서 사용하는게 좋음
    2. vuex 4 셋팅
       - store.js 파일 만듬
       - import { createStore } from 'vuex'
        const store = createStore({
            state() {
                return {

                }
            }
        })
        export default store;
        - main.js
          import store from './store.js'
          app.use(store).mount('#app')
    3. <h4>안녕 {{ $store.state.name }} </h4> 
       단, vuex 국룰 => 컴포넌트 안에서 직접 수정하기 금지!
       컴포넌트가 많을 경우 어디서 수정된지 모름!!

    4. state 수정하고 싶으면
       (1). 미리 store.js에서 수정방법을 정의해두고
       (2). 그 방법을 컴포넌트에서 소환해서 수정해야함
-->
