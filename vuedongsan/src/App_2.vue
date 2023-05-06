<template>
  <div>
    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    <!-- [반복문]으로 바꾸기 실습 -->
    <!-- <div>
      <h4>{{ products[0] }}</h4>
      <p>가격은 아무거나</p>
    </div>
    <div>
      <h4>{{ products[1] }}</h4>
      <p>가격은 아무거나</p>
    </div>
    <div>
      <h4>{{ products[2] }}</h4>
      <p>가격은 아무거나</p>
    </div> -->
    

    <div v-for="(product, i) in products" :key="i">
      <h4>{{ product }}</h4>
      <p>가격은 아무거나</p>
    </div>

    <!-- <div v-for="(product, i) in 3" :key="i">
      <h4>{{ products[i] }}</h4>
      <p>가격은 아무거나</p>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menus: ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  components: {
    
  },
}
</script>

<style>
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


<!-- 2강  Vue Html 반복문 -->
<!-- 
    1. 사용법 -> v-for="원하는 이름 작명 in 몇회" :key:""
      : :key:"" 는 꼭 써줘야함, 안그럼 error!
        -> 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀(유니크한 숫자)
           <a v-for="(작명, i) in menus" :key="i">{{ 작명 }}</a>
           보통은 위와 같이 변수 두개 선언 하여, i를 key 값으로 사용
           i는 1씩 늘어나는 정수
      : "몇회" 자리에 숫자를 넣으면 똑같은 것만 반복
        ex. <a v-for="작명 in 3" :key="작명">Home</a>
        -> 이런 경우 home만 세번 나옴
      : "몇회" 자리에는 데이터도 넣을 수 있음 
        -> 넣으면 데이터 갯수만큼 반복물을 넣음
      : "작명"에 있는 작명은 작명한 변수로 사용가능, 작명한 변수는 데이터안의 자료가 됨.
        -> <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a> 
-->