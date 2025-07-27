<script setup>
defineProps({
  cardProp: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="link-card">
    <a v-bind:href="cardProp.link"><h2>{{ cardProp.title }}</h2></a>
  </div>
</template>

<style scoped>
span {
  font-weight: bold;
  font-size: 30px;
}
h2 {
  font-size: 20px;
  color: #b24e70;
}
a {
  font-style: normal;
}


.link-card {
  cursor: pointer;
  border: 1px solid #001D2D;
  border-radius: 25px;
  margin-bottom: 18px;
}
.link-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #c2728a;
  background-color: #c2728a;
}
.link-card:hover h2 {
  color: #001D2D;
}

</style>
