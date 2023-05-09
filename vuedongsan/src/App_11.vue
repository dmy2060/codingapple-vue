<template>
  <div>
    
    <!-- 모달 -->
    <Modal  @closeModal="modal = false" :rooms="rooms" :modalclick="modalclick" :modal="modal"/>

    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    <!-- 배너 -->
    <Discount :작명="데이터이름" />

    <!-- $event 안해도 i로 전달해도됨 -->
    <Card @openModal="modal = true; modalclick=$event" v-for="(room, i) in rooms" :key="i" :room="room"/>
    
  
  </div>
</template>

<script>

import data from './post.js'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

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
      object : {name:'kim', age:20},

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
    Modal,
    Card
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


<!-- 10강 v-model -->
<!-- 
   1. @input="" 입력할 때마다 뭐 실행해주세요
      @change="" 입력하고 커서 다른데 찍을 때 뭐 실행해주세요
   2. $event 는 이벤트 리스너 자바스크립트에서 e라는 파라미터랑 똑같은 역할
      -> e.target.value
   3. @input="month = $event.target.value" 의 축약 버전 존재
      -> v-model="데이터이름"
      -> 인풋에 입력한 데이터를 데이터이름에 저장해줌(select, textarea... 다 가능함(input checked true, false 도 boolrean 값으로 받을 수 있음))
      -> 사용자가 input에 입력한 것은 숫자로 초기값 설정해도 전부 문자자료형 
         (자바스크립트는 문자랑 숫자랑 곱해도 연산 가능! 단, 플러스 하면 문자 + 숫자로 되어 문자로 나옴)
      -> v-modal.number="month" 를 적게되면 문자를 숫자로 바꿔달라는 뜻
        
      
-->