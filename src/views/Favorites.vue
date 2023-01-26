<template>
  <div class="container2">
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.increment">+</button>
      <button @click="storeCounter.increment">-</button>
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
    <div class="card" v-if="storeCounter.bool">
      <div class="card-header">
        <img v-bind:src="'src/assets/sh1.png'" />
      </div>
      <div class="card-body">
        <RouterLink to="/productDetail">
          <h4>Uno - Crossing Hearts 155227 WMLT</h4>
        </RouterLink>
        <p>
          Beyaz Sneakers <br />
          Renk: Beyaz
        </p>

        <div class="price">
          <div class="price-info">
            <h5>1429.99 TL</h5>
            <small>2h ago</small>
          </div>
          <div class="btn-groups">
            <div class="btn-groups">
              <button type="button" class="add-cart-btn">🛒</button>
              <button type="button" class="buy-now-btn">🤍</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
