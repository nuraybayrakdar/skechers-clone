import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    bool: false,
    /*
    image: "'src/assets/sh1.png'",
    name: " Uno - Crossing Hearts 155227 WMLT",
    desc: " Beyaz Sneakers",
    color: "Beyaz",
    price: "1429.99 TL",
    */
  }),

  actions: {
    increment() {
      this.count++;
    },
    show() {
      this.bool = true;
    },
    close() {
      this.bool = false;
    },
  },
});
