import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("product", {
  state: () => {
    return { product: String[""] };
  },

  actions: {
    increment(value: string) {
      this.product = value;
    },
    decrement(value: string) {
      this.product = -value;
    },
  },
});
