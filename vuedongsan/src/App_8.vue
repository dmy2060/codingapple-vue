<template>
  <div>
    
    <!-- 모달 -->
    <Modal :rooms="rooms" :modalclick="modalclick" :modal="modal"/>

    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    <!-- 배너 -->
    <Discount/>

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


<!-- 8강 props -->
<!-- 
   1. {{ 데이터바인딩 }}은 밑에 데이터가 있어야 가능함
      !!! 데이터를 복사해서 사용해도 되나 문제가 생김
      데이터가 수정되거나 변경된다면 복사한 데이터도 변경시켜야함.
      -> 데이터는 한 군데에만 만들어서 props로 사용
   2. props 란?
      : App.vue 부모, Modal.vue는 자식 
      부모의 데이터를 가져다 쓰고 싶을 때 props 문법 사용
   3. props 사용방법
      : (1). 밑에 데이터 골라서 보냄 <자식 :데이터이름(작명가능)="데이터이름">, <자식 v-bind:데이터이름="데이터이름">
            -> v-bind:, : 둘 중에 하나만 쓰면 됨 
            -> 작명 가능하나 데이터 이름과 보통은 맞춰서 사용
        (2). 자식 컴포넌트에 가서 정의 해줌 props : { rooms : Array(자료형 적어줌 ex.Object, Number...), }
            !!!주의 
            props 는 read-only임, 받아온거 수정하면 큰일남!
            = 로 재할당한다고 해도 부모 props가 변경되지 않음
    4. 데이터 만들때 자식 컴포넌트에 사용하도 되긴 하지만 거의 안씀
       -> 부모로 데이터 전송하기는 조금 어렵기 때문에(가능은 함, 그치만 어려운 문법 사용해야함. 그래서 복잡해짐)
          부모도 쓰는 데이터라면 부모 컴포넌트에 만들어두는게 좋음
-->