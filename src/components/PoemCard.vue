<script setup>
defineProps({
  cardProp: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="poem-card">
    <h2>{{ cardProp.title }}</h2>
    <a v-bind:href="cardProp.link"><img :src="cardProp.poem" :alt="cardProp.title" /></a>
  </div>
</template>

<style scoped>
img {
  width: 300px;
  height: 300px;
  color: #001D2D;
}
span {
  font-weight: bold;
  font-size: 30px;
}
h2 {
  font-size: 20px;
  color: #c2728a;
}
.poem-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid #001d2d;
  margin-bottom: 18px;
  background-color: whitesmoke;
}
.poem-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #c2728a;
}
</style>
