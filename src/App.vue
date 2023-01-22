<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import PopulerKategoriler from './components/PopulerKategoriler.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header></Header>
        <RouterLink to="/"></RouterLink>
  <RouterView />
  <PopulerKategoriler></PopulerKategoriler>
  <Footer></Footer>
</template>

<style>
 RouteView {
   width: 100%;
 }
</style>

