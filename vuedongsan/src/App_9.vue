<template>
  <div>
    
    <!-- 모달 -->
    <Modal :rooms="rooms" :modalclick="modalclick" :modal="modal"/>

    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    <!-- 배너 -->
    <Discount :작명="데이터이름" />

    <Card v-for="(room, i) in rooms" :key="i" :room="room"/>
    
  
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


<!-- 9강 props2 -->
<!-- 
   1. props 보낼 때 다양한 자료형 입력가능 :작명="Array,Object"
   <Discount :작명="데이터이름" /> or <Discount :작명="[123,456]" />
   -> 간단한 자료 보내는 경우 : 생략가능 <Discount 작명="안녕하세요"/>
   -> 작명="문자자료", :작명="숫자자료"
   2. object.name, object.age 각각 props로 전송하려면
   <Discount v-bind="object" 쓰거나 :이름="object.name" :나이="object.age" 쓰면됨/>
   -> 보통 잘 쓰지는 않음
-->