<template>
  <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <!-- <h4>{{ rooms[사용자가누른상품번호].title }}</h4> -->
        <h4>{{ rooms[modalclick].title }}</h4>
        <img :src="rooms[modalclick].image" class="room-img"/>
        <p>{{rooms[modalclick].content}}</p>
        <!-- <input @input="month = $event.target.value"/> -->
        <!-- 여기에 입력한 데이터를 저장해주세요 -->
        <input v-model="month"/>
        <textarea v-model="textarea"></textarea>
        <p> {{ month }}개월 선택함 {{rooms[modalclick].price * month}} {{ textarea }}</p>
        <Discount/>
        <button @click="$emit('closeModal')">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
name:'modal', 
data() {
    return {
        month: 1,
        textarea:''
    }
},  
watch : {
  month(a, b) {
   
    if(isNaN(a)) {      
      this.month = 1;
      alert('error');
    }
  },
},
props : {
    rooms : Array,
    modal : Boolean,
    modalclick : Number
},

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