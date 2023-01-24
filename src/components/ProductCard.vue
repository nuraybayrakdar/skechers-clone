<script setup lang="ts">
const props = defineProps({
  image: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: String, required: true },
});

props.name;
props.image // string
props.desc;
props.color;
props.price;
</script>
<template>
  
    <div class="card">
      <div class="card-header">
        <img :src="image" />
      </div>
      <div class="card-body">
        <RouterLink to="/productDetail">
          <h4>{{ name }}</h4>
        </RouterLink>
        <p>
          {{ desc }} <br />
          Renk: {{ color }}
        </p>

        <div class="price">
          <div class="price-info">
            <h5>{{ price }}</h5>
            <small>2h ago</small>
          </div>
          <div class="btn-groups">
            <button type="button" class="add-cart-btn">
              <i class="fas fa-shopping-cart"></i>
            </button>
            <button type="button" class="buy-now-btn">
              <i class="fas fa-wallet"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

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
