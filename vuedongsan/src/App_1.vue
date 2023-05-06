<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" > -->

  <!-- [데이터바인딩]수업 -->
  <!-- <div>
    <h4 :style="style">XX원룸</h4>  
    <p>{{ price1 }} 만원</p>
  </div> -->
  <!-- <div>
    <h4>XX원룸</h4>  
    <p>{{ price2 }} 만원</p>
  </div> -->
   
  <!-- 숙제 -->
  <div>
    <div>
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  // 데이터 보관함(변수 등등 다 만듬)
  data() {
    return {
      // [데이터바인딩] 수업
      // price1 : 60,
      // price2 : 70,
      // style : 'color : blue',
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
  margin-top: 60px;
}
</style>


<!-- 데이터 바인딩 하는 이유 -->
<!-- 
  1. HTML에 하드코딩해놓으면 나중에 변경 어려움
  2. 실시간 자동 렌더링 기능 쓰려면 사용해야함
     : 데이터 변경되면 data와 관련된 HTML을 재렌더링을 함
     : 스무스하게 변경 되서 웹앱 사이트 사용 가능
     : 단, 로고처럼 자주 바뀌지 않는 경우에는 데이터 바인딩 사용안함.(하드코딩으로 하는데 더 효율적)
  3. html 속성도 데이터 바인딩 가능 (id, class, style...)
     : :속성="데이터이름" <- 이렇게 사용함
-->