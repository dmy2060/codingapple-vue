<template>
  <div>
    <Post v-for="(datas, i) in data" :key="i" :data="datas"/>
  </div>
</template>

<script>
import Post from './Posts.vue'
export default {
  name: 'containerWrap',
  props: {
    data:Array
  },
  components: {
    Post
  }
}
</script>

<style>

</style>