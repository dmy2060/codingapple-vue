<template>
  <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <!-- <h4>{{ rooms[사용자가누른상품번호].title }}</h4> -->
        <h4>{{ rooms[modalclick].title }}</h4>
        <img :src="rooms[modalclick].image" class="room-img"/>
        <p>{{rooms[modalclick].content}}</p>
        <p>{{rooms[modalclick].price}}</p>
        <Discount/>
        <button @click="modal = false">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
name:'modal'
}
</script>

<style>
.black-bg {
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.5);
  position:fixed;
  padding:20px;
}
.white-bg {
  width:100%;
  background-color: #fff;
  padding:20px;
  border-radius: 8px;
  
}
</style>