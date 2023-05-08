<template>
  <div>

    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용임</p>
        <button @click="modal = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

     <!-- <div>
      <img :src="rooms[0].image" class="room-img"/>
      <h4 @click="modal = true">{{ rooms[0].title }}</h4>
      <p>{{ rooms[0].price }} 만원</p>
    </div>
     -->

    <div v-for="(room, i) in rooms" :key="i">
      <img :src="room.image" class="room-img"/>
      <h4 @click="modal = true">{{ room.title }}</h4>
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


<!-- 5강 export, import  -->
<!-- 
    1. var apple = 10;
       var apple2 = 100;
      export default apple;
      변수 다른데서 사용하려면 변수를 export
      -> import 변수명(자유롭게 작명 가능) from '경로' 하면 export된 함수 사용가능

    2. var apple = 10;
       var apple2 = 100;
       export {apple, apple2}
       -> import {apple, apple2} from '경로' 하면 export된 함수 사용가능
-->