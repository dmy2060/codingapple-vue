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
<!-- 4강 URL 파라미터 -->
<!-- 
  1. components 경로에 서브 폴더 만들어서 보관하기도 함
     > Detail > Detail.vue, Detail.css 
  2. :세미콜론 문법 /Detail/:작명
     /Detail/아무문자~ 
     -> 아무문자나 들어와도 그 컴포넌트를 보여줌
     -> 연달아서 사용해도 됨. .문법으로 꺼내 쓸 수 있음
  3. $route
     -> 현재 url 정보가 담겨있음
     $route.params
     -> 파라미터 자리에 기입된거 알려줌
  4. 파라미터 업그레이드 가능
     소괄호 안에 정규식 입력해서 아무 문자가 아닌 아무 숫자만 검사해주세요도 가능(엄격하게 제한 가능)
     -> (\\d+) => 숫자를 입력했을 때만 컴포넌트 보여주세요
     -> :id * => 반복! :id:id:id:id
     -> (.*) => 모든 문자
  5. 같은 라우터에 걸리면 위에 있는 라우터를 실행
 -->