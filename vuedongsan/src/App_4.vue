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

     <div>
      <img src="./assets/room0.jpg" class="room-img"/>
      <h4 @click="modal = true">{{ products[0] }}</h4>
      <p>가격은 아무거나</p>
      <button @:click="numbers[0]++">허위매물신고</button> <span>신고수 : {{ numbers[0] }}</span>
    </div>
    <div>
      <img src="./assets/room1.jpg" class="room-img"/>
      <h4>{{ products[1] }}</h4>
      <p>가격은 아무거나</p>
      <button @:click="numbers[1]++">허위매물신고</button> <span>신고수 : {{ numbers[1] }}</span>
    </div>
    <div>
      <img src="./assets/room2.jpg" class="room-img"/>
      <h4>{{ products[2] }}</h4>
      <p>가격은 아무거나</p>
      <button @:click="numbers[2]++">허위매물신고</button> <span>신고수 : {{ numbers[2] }}</span>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // number : 0,
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


<!-- 4강 vue에서 모달창 만들기  -->
<!-- 
    1. 동적 UI 만드는 법
       -> (1) UI의 현재 상태를 데이터로 저장해둠
          (2) 데이터에 따라 UI가 어떻게보일지 작성
    2. v-if="조건식"
       : 조건식이 참일 때만 HTML 보여줌
-->