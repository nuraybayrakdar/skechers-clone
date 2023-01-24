<template>
  <div class="container2">
    <ProductCard
      v-bind:image="'src/assets/sh1.png'"
      name=" Uno - Crossing Hearts 155227 WMLT"
      desc=" Beyaz Sneakers"
      color="Beyaz"
      price="1429.99 TL"
    ></ProductCard>
    <ProductCard
      v-bind:image="'src/assets/sh2.png'"
      name="Stamina-Classy Trail 13455 BKW"
      desc=" Siyah Sneakers"
      color="Siyah"
      price="1210 TL"
    ></ProductCard>

    <ProductCard
      v-bind:image="'src/assets/sh3.png'"
      name="Arch Fit 149729 CHAR"
      desc=" Gri Spor Ayakkabı"
      color="Gri"
      price="2354.99 TL"
    ></ProductCard>
  </div>
</template>
<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
</script>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #f7f8fc;
    font-family: "Roboto", sans-serif;
    color: #10182f;
  }
  .container2 {
    display: flex;
    width: 1040px;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>