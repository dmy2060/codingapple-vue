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
    <Discount/>

    <button @click="priceSort">가격순정렬</button>
    <button @click="printSort1">가격낮은순정렬</button>
    <button @click="printSort2">가나다순정렬</button>
    <button @click="sortBack">되돌리기</button>




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
      roomsorigin: [...data],
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

    priceSort() {
      this.rooms.sort((a, b)=>{
        return a.price - b.price
      })
    },
    sortBack() {
      this.rooms = [...this.roomsorigin];
    },
    printSort1() {
      this.rooms.sort((a, b)=>{
        return b.price - a.price
      })
    },
    printSort2() {
      this.rooms.sort((a, b)=>{
        if(a.title.toLowerCase() > b.title.toLowerCase())
          return 1;
        else if(a.title.toLowerCase() < b.title.toLowerCase())
          return -1;
        else
          return 0;
      })
    }
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


<!-- 13강 상품정렬기능과 데이터 원본 보존 -->
<!-- 
   1. 생 자바스크립트라면 rooms 데이터를 정렬하고 HTML에 반영해주세요지만
      뷰의 경우 실시간 자동렌더링됨으로 데이터만 정렬해주면 됨
      * sort 문법 
      : 기본적으로 가나다순 정렬, 숫자 정렬하려면 (function(a,b) { return a - b })
        var array = [3,5,2];
        // 기본 가나다순 정렬
        //  array.sort();
        //  console.log(array);

        // 숫자 정렬
        // a외 b는 하나하나의 데이터 3과 5를 비교해서 return 값이 음수라면 a를 왼쪽으로~ 
        array.sort((a,b)=>{
          return a - b; 
        })
        -> sort는 원본이 변형됨
           map, filter의 경우는 원본은 변형하지 않음
      : object 끼리는 a - b를 뺴도 음수나 양수가 나오지 않아 sort가 불가함
        비교하고 싶은 항목을 빼야함
        -> a.price - b.price
      
    2. 되돌리기 버튼 만들기
      : 보존할 원본 데이터를 하나 더 만들어서 되돌리기 누르면 원본데이터가 들어가게 만들면됨
        단, 같은 데이터를 그냥 넣어버리면 사본이 아니라 같은데이터 뜻하는거밖에 되지 않음
        -> 각각 별개의 사본을 만드려면 [...array자료]
        !!! 이렇게 했을 경우 여러번 왔다갔다하면 둘 다 array이기 때문에
            등호로 array를 집어넣으면 왼쪽 오른쪽 값을 공유해달라 라는 뜻으로
            결국 두 개가 똑같아져서 에러가 생김
        해결! 등호로 끼워넣을때 끼워넣을 array도 [...array자료형]으로 만들어서 넣어야함!
        
-->