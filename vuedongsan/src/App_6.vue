<template>
  <div>

    <div v-if="1 == 2">
      안녕하세요
    </div>
    <!-- if문 여러개 쓰고 싶을때! -->
    <div v-else-if="1==3">
      안녕하세요2
    </div>
    <!-- if문이 참이 아니면 이거 실행해주세요! -->
    <div v-else>
      안녕하세요3
    </div>

    
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <!-- <h4>{{ rooms[사용자가누른상품번호].title }}</h4> -->
        <h4>{{ rooms[modalclick].title }}</h4>
        <img :src="rooms[modalclick].image" class="room-img"/>
        <p>{{rooms[modalclick].content}}</p>
        <p>{{rooms[modalclick].price}}</p>
        <button @click="modal = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    <div v-for="(room, i) in rooms" :key="i">
      <img :src="room.image" class="room-img"/>
      <h4 @click="modal = true; modalclick = i">{{ room.title }}</h4>
      <p>{{ room.price }} 만원</p>
    </div>
    
  
  </div>
</template>

<script>

import data from './post.js'
console.log(data)

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
.black-bg {
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.5);
  position:fixed;
  padding:20px;
}
.white-bg {
  width:100%;
  background-color: #fff;
  padding:20px;
  border-radius: 8px;
  
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


<!-- 6강 product details -->
<!-- 
    1. v-if 문법 더 알아야할 내용

    <div v-if="1 == 2">
      안녕하세요
    </div>
    -> if문 여러개 쓰고 싶을때!
    <div v-else-if="1==3">
      안녕하세요2
    </div>
    -> if문이 참이 아니면 이거 실행해주세요!
    <div v-else>
      안녕하세요3
    </div>
-->