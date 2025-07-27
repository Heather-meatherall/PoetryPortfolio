<script setup>
// @ is an alias for src, making this an absolute path
import GraphicCard from '@/components/PoemCard.vue'
import poems from '@/components/poems.js'
import { ref } from 'vue'

const PoemCards = ref(poems)
</script>

<template>
  <h2>Showcase</h2>
  <div class="store">
    <GraphicCard v-for="card in PoemCards" :key="card.id" :cardProp="card" />
  </div>
</template>

<style scoped>
.store {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  text-align: center;
}
</style>
