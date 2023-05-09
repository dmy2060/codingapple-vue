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


<!-- 9강 모달창 만들기 -->
<!-- 
   1. @click=""(@click="modal = true") 을 사용하게되면 이벤트 버블링(찾아보기)이 일어나서 위에까지 다 클릭이되어 사용은 가능함
   2. 부모에 있는 데이터를 수정하고 싶으면 custom event 사용해야함
      -> 자식요소에서 부모가 가진 데이터를 수정(실은 데이터 수정해달라는 메세지일뿐)
      -> $어쩌구는 Vue만의 특별한 변수이구나
      -> 부모한테 메세지 보낼땐 $emit('작명', 데이터)
      -> 부모에서 받을땐 @작명="자바스크립트~~" 해주면됨
      -> 자식에서 보낸 데이터를 받고싶을땐 $event 써주면됨. $event에 변수로 저장되어 있음
-->