<script setup>
// @ is an alias for src, making this an absolute path
import GraphicCard from '@/components/LinkCard.vue'
import links from '@/components/links.js'
import { ref } from 'vue'



const LinkCards = ref(links)
</script>

<template>
  <h2>Published Works</h2>
  <div class="links">
    <!-- Iterate over each event Object. Bind to ID to help Vue track each item.
     Finally, add event Prop, which receives the event Object instance currently iterated -->
    <GraphicCard v-for="card in LinkCards" :key="card.id" :cardProp="card" />
  </div>
</template> 

<style scoped>
.links {
  display: block;
  grid-template-columns: auto auto auto;
  text-align: center;
  justify-content: center;
  margin: auto;
  width: 50%;
}
</style>
