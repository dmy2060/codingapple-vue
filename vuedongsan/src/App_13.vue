<template>
  <div>
    
    <!-- 모달 -->
    <!-- <div class="start" :class="{end : modal}">
      <Modal  @closeModal="modal = false" :rooms="rooms" :modalclick="modalclick" :modal="modal"/>
    </div> -->

    <transition name="fade">
      <Modal  @closeModal="modal = false" :rooms="rooms" :modalclick="modalclick" :modal="modal"/>
    </transition>
    

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
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}

.fade-enter-from{
  opacity:0
}
.fade-enter-active{
  transition:all 1s
}
.fade-enter-to{
  opacity:1;
}

.fade-leave-from{
  transform: translateY(-100%);
}
.fade-leave-active{
  transition:all 1s
}
.fade-leave-to{
  transform: translateY(0px);

}
</style>


<!-- 12강 css로 부드러운 애니메이션 만들기 -->
<!-- 
   1. :class="{end : true}" 이런 식으로 넣어줄 경우 
      true일때만 end가 붙음 {클래스명:조건}
      -> ex. {end : modal}
   2. 더 편하게 애니메이션 주고 싶을때 사용
      애니메이션 주고싶은 요소를 <transition></transition>으로 감싸기
      (1). transition에 name값 주기
      (2). class명 3개 작성 스타일 만들기
      <등장>
      -> .fade(name)-enter-from{} 시작
      -> .fade(name)-enter-active{} transition
      -> .fade(name)-enter-to{} 끝

      <퇴장>
      -> .fade(name)-leave-from{} 시작
      -> .fade(name)-leave-active{} transition
      -> .fade(name)-leave-to{} 끝
-->