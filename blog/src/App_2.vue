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
              <a class="nav-link" href="#">DetailPage</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <List v-for="(blog, i) in blogList" :key="i" :blog="blog"/>
  </div>
</template>

<script>
import List from "./components/List.vue"
import blog from './assets/blog'

export default {
  name: 'App',
  data() {
    return {
      blogList : blog
    }
  },
  components: {
    List
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
<!-- 2강 props, 데이터바인딩 복습 -->