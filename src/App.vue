<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <!-- <img src="./assets/profilepoet.jpg" alt="Heather Meatherall" class="profile"> -->

          <div alt="Heather Meatherall" class="profile flip"></div>
          <h1>Heather Meatherall</h1>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/showcase">Work Showcase</RouterLink>
          <RouterLink to="/published">Published Work</RouterLink>
          <RouterLink to="/build">Build A Poem</RouterLink>
          <RouterLink to="/connections">Connections Poem</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
  <footer>
    <h1>
      <a href="https://www.instagram.com/heathermeatspoetry/" class="foot"
        >@heathermeatspoetry <img src="./assets/instagram.png"
      /></a>
    </h1>
  </footer>
</template>
