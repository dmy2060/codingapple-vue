<template>
  <div >
      <!-- <img :src="room.image" class="room-img"/>
      <h4 @click="$emit('openModal', room.id)">{{ room.title }}</h4>
      <p>{{ room.price }} 만원</p> -->

      <img :src="room.image" class="room-img"/>
      <h4 @click="send">{{ room.title }}</h4>
      <p>{{ room.price }} 만원</p>
</div>
</template>

<script>

export default {
name:"Card",
props: {
    room:Array
},
methods : {
    send(){
        this.$emit('openModal', this.room.id)
        // this.$emit()을 함수안에서 사용하고 싶으면 this.을 써야함
    }
}
}
</script>

<style>

</style>