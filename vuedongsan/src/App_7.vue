<template>
  <div>
    
    <!-- 모달 -->
    <Modal/>

    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    <!-- 배너 -->
    <Discount/>

    <div v-for="(room, i) in rooms" :key="i">
      <img :src="room.image" class="room-img"/>
      <h4 @click="modal = true; modalclick = i">{{ room.title }}</h4>
      <p>{{ room.price }} 만원</p>
    </div>
    
  
  </div>
</template>

<script>

import data from './post.js'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      // number : 0,
      modalclick: 0,
      rooms : data,
      numbers :[0, 0, 0],
      menus: ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      modal : false,

    }
  },
  methods : {
    // increase(){
    //   this.number += 1;
    // }
  },
  components: {
    // Discount : Discount,
    Discount, // key와 value가 똑같을 경우 한글자로 축약 가능
    Modal
  },
}
</script>

<style>
body {
  margin:0;
}

div {
  box-sizing: border-box;
}

.room-img {
  width:100%;
  margin-top:40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background:darkgoldenrod;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color:#fff;
  padding:10px;
}



</style>


<!-- 7강 component -->
<!-- 
    1. vue 파일 먼저 만들기
    2. 축약할 HTML 넣기 (뷰 기본 템플릿에 넣기, tempelet script(export) style)
    3. import 하기
    4. component: {} 오브젝트에 넣어야함!
    -> <Discount/> 
       <Discount></Discount>
       두가지 방법이 있음

    why?
    - 코드가 한줄로 축약이 가능해서 코드가 아름다운
    - 반복해서 재사용 해야 할 경우 재사용이 쉬움
    - 갑자기 UI를 다 바꿔야 할 경우 컴포넌트만 바꾸면 됨
    !!! 온갖거 다 컴포넌트로 만들면 안됨, 반복적으로 출현할때만 만드는게 좋음
    데이터바인딩할 때 귀찮은 일이 발생할 수 있음

-->