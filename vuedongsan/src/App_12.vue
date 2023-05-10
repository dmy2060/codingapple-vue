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


<!-- 11강 watcher로 데이터 감시하기 -->
<!-- 
   1. 감시하고 싶은데이터 있는 경우, watch : {} 만들면 됨
   2. 함수로 만들면 됨 watch: {감시할데이터이름(){}} !! 무조건 감시할 데이터 이름을 적어줘야함
      -> 감시할 데이터가 변할때마다 watcher도 실행됨
      -> 함수 파라미터는 데이터를 뜻함
      -> 파라미터는 두 개ㅈ까지 작성 가능함, (a, b) a는 변경 후 데이터, b는 변경 전 데이터
-->