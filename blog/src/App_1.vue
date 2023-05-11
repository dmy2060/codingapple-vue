<template>
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
          <a class="nav-link" href="#">DetailPage</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: 'App',
  components: {
    
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
<!-- 1강 blog 부트스트랩으로 레이아웃 짜기 -->
<!-- 
     1. cdn 방식으로 붙혀넣을 경우 남의 사이트에서 css, js 가져오는 방식
        -> 사이트가 혹시 이용이 불가능하거나 서버가 멀면 시간이 오래 걸림
        -> 싫은 경우 다운 받으면 됨
     2. npm으로 설치하는 경우 기존 미리보기 띄우던 터미널은 종료하고 설치해야함
        -> 설치 후 main.js에서 
           import 'bootstrap';
           import 'bootstrap/dist/css/bootstrap.min.css';
           두 개 붙혀 넣어주면 됨

-->