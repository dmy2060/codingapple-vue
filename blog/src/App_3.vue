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
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/Detail">Detail</router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-link to="/">홈페이지로 이동</router-link>
    <router-link to="/list">상품 목록으로 이동</router-link>
    <!-- 라우터 사용한 경우 -->
    <router-view :blog="blogList"></router-view>
    
    <!-- <router-view v-for="(blog, i) in blogList" :key="i" :blog="blog"></router-view> -->
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
<!-- 3강 vue-router -->
<!-- 
  1. 라우터 설치
  2. createApp(App).use('라우터만든거~~').mount('#app') 
     -> 근데 보통 라우터가 많아서 코드가 길기 때문에 따로 파일 만들어서 사용
  3. router.js 파일 따로 만들어서 기본 코드 채워넣기
  4. main.js에서 router 파일 import하고 라우터만든거에 넣기
  5. app.vue에서 컴포넌트 불러올 자리에 <router-view></router-view>
     넣어주면됨
     -> router-link도 사용 가능 다른 페이지 이동링크 만들때 사용 가능
     -> router-link to="/list"
  
 -->