<template>
  <div>
    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
    </div>

    
     <div>
      <h4>{{ products[0] }}</h4>
      <p>가격은 아무거나</p>
      <!-- <button @:click="numbers++">허위매물신고</button> <span>신고수 : {{ number }}</span> -->
      <button @:click="numbers[0]++">허위매물신고</button> <span>신고수 : {{ numbers[0] }}</span>
    </div>
    <div>
      <h4>{{ products[1] }}</h4>
      <p>가격은 아무거나</p>
      <button @:click="numbers[1]++">허위매물신고</button> <span>신고수 : {{ numbers[1] }}</span>
    </div>
    <div>
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
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']
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


<!-- 3강  이벤트 핸들러 -->
<!-- 
    1. 작성 방법 -> <button v-on:click="자바스크립트~~">허위매물신고</button> <span>신고수 : 0</span>
      : 축약 하고 싶으면 @click="" 으로도 사용 가능
    2. 버튼 누르면 신고수 1 증가시키기!
      -> 버튼 누르면 관련된 데이터만 + 1 해주면됨
         vue는 데이터 변하면 HTML에 바로 반영됨(관련된 데이터는 찾아서 재렌더링됨)
    3. 여러가지 이벤트 사용 가능(@mouseover(마우스 가져다될때))
      -> 커맨드 + 스페이스바 누르면 관련된 메서드 나옴
    4. 자바스크립트 부분에 입력할 코드가 길면 함수 선언해서 사용 가능
      : 쓰는 이유 -> 긴 코드를 한 단어로 축약하기 위해서
      -> vue에서 함수 만드려면 데이터 끝나는 공간에서 methods:{함수명(){}} 적고 안에 모든 함수 넣으면 됨
         함수 사용할때는 이름만 적어주면 됨
      !!! 함수 만들 때 주의사항
      (1). 함수안에서 데이터 쓸땐 this.데이터명 으로 사용해야함
           -> this는 내 object(큰 object를 뜻함.)   
-->