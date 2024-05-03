<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Animations <i class="fa-solid fa-bars fa-sm"></i></h1>
    <ul>
      <li><RouterLink to="/rating5star">Rating 5 Star</RouterLink></li>
      <li><RouterLink to="/light-shadow">Light Shadow</RouterLink></li>
      <li><RouterLink to="/switch">Switch</RouterLink></li>
    </ul>
  </header>

  <RouterView />
</template>

<style lang="sass" src="./assets/main.sass"></style>
