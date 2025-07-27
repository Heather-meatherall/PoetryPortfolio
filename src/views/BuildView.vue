,.
<script setup>
import { ref } from 'vue'

const title = ref('Complete the Poem to Get Your Title!')

function getTitle() {
  let soliderResults = 0
  let poetResults = 0
  let kingResults = 0

  let verse1 = document.querySelector('#verse1').value
  let verse2 = document.querySelector('#verse2').value
  let verse3 = document.querySelector('#verse3').value
  let verse4 = document.querySelector('#verse4').value
  let verse5 = document.querySelector('#verse5').value
  let verse6 = document.querySelector('#verse6').value
  let verse7 = document.querySelector('#verse7').value

  let verses = [verse1, verse2, verse3, verse4, verse5, verse6, verse7]

  for (let i = 0; i < verses.length; i++) {
    if (verses[i] == 'Solider') {
      soliderResults++
    } else if (verses[i] == 'Poet') {
      poetResults++
    } else {
      kingResults++
    }
  }

  if (Math.max(soliderResults, poetResults, kingResults) == soliderResults) {
    title.value = 'For the Solider'
  } else if (Math.max(soliderResults, poetResults, kingResults) == poetResults) {
    title.value = 'For the Poet'
  } else {
    title.value = 'For the King'
  }
  console.log(soliderResults)
  console.log(poetResults)
  console.log(kingResults)
}
</script>

<template>
  <div>
    <section>
      <h2 id="title">{{ title }}</h2>
      <p>
        You were so young<br />
        When you picked up
        <select id="verse1">
          <option value="Solider">the sword</option>
          <option value="Poet">the pen</option>
          <option value="King">the crown</option>
        </select>
      </p>

      <p>
        And now <br />
        You can't even remember how it felt
        <select id="verse2">
          <option value="Solider">to do</option>
          <option value="Poet">to feel</option>
          <option value="King">to be</option>
        </select>
        <br />
        Anything else
      </p>

      <p>
        And you, little
        <select id="verse3">
          <option value="Solider">star</option>
          <option value="Poet">light</option>
          <option value="King">love</option>
        </select>
        <br />
        Have been carrying this weight for so long <br />
        And I know you think <br />
        <select id="verse4">
          <option value="Solider">you can't</option>
          <option value="Poet">you won't</option>
          <option value="King">you don't know how to</option>
        </select>
        put it down
      </p>

      <p>
        but I promise
        <select id="verse5">
          <option value="Solider">you can</option>
          <option value="Poet">you will</option>
          <option value="King">you'll remember how</option>
        </select>
      </p>

      <p>
        you are worth so much more then
        <select id="verse6">
          <option value="Solider">your sword</option>
          <option value="Poet">your art</option>
          <option value="King">your crown</option>
        </select>
        <br />
        and you may not believe me now <br />
        but
        <select id="verse7">
          <option value="Solider">you will</option>
          <option value="Poet">you will</option>
          <option value="King">you will</option>
        </select>
      </p>

      <div>
        <!-- <button onclick="savePoem()" class="button">Save</button> -->
        <button @click="getTitle()">Get Title</button>
      </div>
    </section>
    <br />
  </div>
</template>
