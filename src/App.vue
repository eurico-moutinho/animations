<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const menuOpen = ref(false);

const toggleMenu = () => {

  menuOpen.value = true;

}

const closeMenu = () => {

  menuOpen.value = false;

}
</script>

<template>
  <header @mouseenter="toggleMenu" @mouseleave="closeMenu">
    <h1>Animations <i class="fa-solid fa-bars fa-sm"></i></h1>
    <ul v-show="menuOpen" @mouseenter="toggleMenu">
      <li @click="closeMenu"><RouterLink to="/rating5star">Rating 5 Star</RouterLink></li>
      <li @click="closeMenu"><RouterLink to="/light-shadow">Light Shadow</RouterLink></li>
      <li @click="closeMenu"><RouterLink to="/switch">Switch</RouterLink></li>
    </ul>
  </header>

  <RouterView />
</template>

<style lang="sass" src="./assets/main.sass"></style>
