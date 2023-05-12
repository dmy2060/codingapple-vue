<template>
  <div>
    <Post/>
    <!-- <Post/>
    <Post/> -->
  </div>
</template>

<script>
import Post from './Posts.vue'
export default {
  name: 'containerWrap',
  // props: {
  //   datalist:Array
  // },
  components: {
    Post
  }
}
</script>

<style>

</style>