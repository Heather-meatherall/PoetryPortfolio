<script setup>
// @ is an alias for src, making this an absolute path
// import GraphicCard from '@/components/PoemCard.vue'
// import poems from '@/components/poems.js'
// import { ref } from 'vue'

// const PoemCards = ref(poems)
</script>

<template>
  <h2>Showcase</h2>
  <div class="poems">
    <div class="poem-card">
      <h2>A Line Of Women</h2> 
    <a><img src="../assets/ALineOfWomen.png"/></a>
    </div>

    <div class="poem-card">
      <h2>How To Turn A Haunted House Into A Home</h2> 
    <a><img src="../assets/HowToTurnAHauntedHouse.jpg"/></a>
    </div>

    <div class="poem-card">
      <h2>I Will Not Tell You</h2> 
    <a href="https://www.kristenoyer.com/poesie-collaboration"><img src="../assets/IWIllNotTellYou.png"></a>
    </div>

    <div class="poem-card">
      <h2>Like The Moon</h2> 
    <a><img src="../assets/LikeTheMoon.png"/></a>
    </div>


    <div class="poem-card">
      <h2>Same To Me</h2> 
    <a><img src="../assets/SameToMe.png"/></a>
    </div>


    <div class="poem-card">
      <h2>Select All That Apply</h2> 
    <a><img src="../assets/SelectAllThatApply.png"/></a>
    </div>


    <div class="poem-card">
      <h2>Something About Pride</h2> 
    <a><img src="../assets/SomethingAboutPride.jpg"/></a>
    </div>

    <div class="poem-card">
      <h2>There is Comfort There (After M. Travis Lane)</h2> 
    <a><img src="../assets/ThereIsComfortThere.png"/></a>
    </div>

    <div class="poem-card">
      <h2>You Will Live</h2> 
    <a><img src="../assets/YouWillLive.jpg"/></a>
    </div>




    <!-- <GraphicCard v-for="card in PoemCards" :key="card.id" :cardProp="card" /> -->
  </div>
</template>

<style scoped>
.poems {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  text-align: center;
}

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
