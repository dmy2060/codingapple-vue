<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">YULL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/list">list</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/Detail">Detail</router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    
    <!-- 라우터 사용한 경우 -->
    <!-- 스타일링 할 경우에는 router-view를 감싸서 사용 -->
    <div class="mt-4">
      <router-view :blog="blogList"></router-view>
    </div>
    <!-- <List v-for="(blog, i) in blogList" :key="i" :blog="blog"/> -->
  </div>
</template>

<script>
// import List from "./components/List.vue"
import blog from './assets/blog'

export default {
  name: 'App',
  data() {
    return {
      blogList : blog
    }
  },
  components: {
    // List
  }
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
</style>
<!-- 5강 nested routes -->
<!-- 
  1. 라우트 안에서 또 페이지를 URL로 나누고 싶을 때 사용
  2. nested routes 만드는 법
    (1). children :[] 안에 객체로 똑같이 넣어 주면됨(경로는 상대경로로 적어줘야함)
    (2). 해당 컴포넌트 가서 어디서 보여줄지 표시 <router-view></router-view>
  3. 라우터 관련 에러는 표시가 안됨. 콘솔가서 확인 해야함
  4. $router는 페이지 이동관련 기능
     @click="$router.push('/detail/2') => 클릭했을때 해당 페이지로 이동
     $router.go(-1) => 뒤로가기(방문 히스토리 기능)
  5. named views
     여러개의 컴포넌트를 보여줄 때
     컴포넌튼에 object 형식으로 넣어줌
  6. redirection도 가능
     다른 페이지로 강제로 이동 시켜 줄 때
     
  =====> 가장 좋은건 찾아보면서 공부하기!!
 -->