<template>
  <div class="container2">
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.increment">+</button>
      <button @click="decreaseCount">-</button>
    </div>
    <!--
    <ProductCard
      v-bind:image="'src/assets/sh1.png'"
      name=" Uno - Crossing Hearts 155227 WMLT"
      desc=" Beyaz Sneakers"
      color="Beyaz"
      price="1429.99 TL"
    ></ProductCard>
    -->
  </div>
  <div class="container2">
    <div class="count">{{ storeCounter.count }}</div>
  </div>
</template>
<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();

const image = ref("'src/assets/sh1.png'");
const name = ref(" Uno - Crossing Hearts 155227 WMLT");
const desc = ref(" Beyaz Sneakers");
const color = ref("Beyaz");
const price = ref("1429.99 TL");
const count = ref(0);

const increaseCount = () => {
  count.value++;
};
const decreaseCount = () => {
  count.value--;
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
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
.count {
  font-size: 40px;
  margin: 10px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
