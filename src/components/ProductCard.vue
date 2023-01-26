<template>
  <div class="card" v-for="post in posts" :key="post._id">
    <div class="card-header">
      <img v-bind:src="post.image" />
    </div>
    <div class="card-body">
      <RouterLink to="/productDetail">
        <h4>{{ post.title }}</h4>
      </RouterLink>
      <p>
        {{ desc }} <br />
        Renk: {{ color }}
      </p>

      <div class="price">
        <div class="price-info">
          <h5>{{ post.content }}</h5>
          <small>2h ago</small>
        </div>
        <div class="btn-groups">
          <div class="btn-groups">
            <button type="button" class="add-cart-btn">🛒</button>
            <button
              type="button"
              class="buy-now-btn"
              @click="storeCounter.increment"
            >
              🤍
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { computed } from "vue";
import { ref } from "vue";
import { isProxy, toRaw } from "vue";
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
export default {
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
  },
  /*
  setup() {
    const posts = ref([]);
    const API_URL = "http://localhost:5000/posts";
    onMounted(() => {
      getPosts();
    });
    async function getPosts() {
      const response = await fetch(API_URL);
      const json = await response.json();
      posts.value = json;

      console.log(posts.value[0]);
    }
  },
*/
  name: "ProductCard",
  data() {
    return {
      posts: null,
    };
  },
  computed: {
    async getData() {
      const response = await fetch("http://localhost:5000/posts");
      const finalResponse = await response.json();
      this.posts = finalResponse;
      console.log(this.posts);
    },
  },
  mounted() {
    this.getData;
  },
};
</script>
<style>
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.price {
  display: flex;
  margin-top: auto;
}

.price img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.price-info {
  margin: 30px;
}
.price-info h5 {
  margin: 0;
}
.price-info small {
  color: #545d7a;
}
</style>
