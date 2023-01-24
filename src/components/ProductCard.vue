<template>
  <div class="container2">
    <div class="card">
      <div class="card-header">
        <img src="../assets/sh1.png" alt="rover" />
      </div>
      <div class="card-body">
        <RouterLink to="/productDetail">
          <h4>Uno - Crossing Hearts 155227 WMLT</h4>
        </RouterLink>
        <p>
          Beyaz Sneakers<br />
          Renk: Beyaz
        </p>

        <div class="price">
          <div class="price-info">
            <h5>1429.99 TL</h5>
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
    <div class="card">
      <div class="card-header">
        <img src="../assets/sh2.png" alt="ballons" />
      </div>
      <div class="card-body">
        <RouterLink to="/productDetail">
          <h4>Arch Fit 149729 CHAR</h4>
        </RouterLink>

        <p>
          Gri Spor Ayakkabı<br />
          Renk: Gri
        </p>
        <div class="price">
          <div class="price-info">
            <h5>2360 TL</h5>
            <small>Yesterday</small>
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
    <div class="card">
      <div class="card-header">
        <img src="../assets/sh3.png" alt="city" />
      </div>
      <div class="card-body">
        <RouterLink to="/productDetail">
          <h4>Stamina-Classy Trail 13455 BKW</h4>
        </RouterLink>

        <p>
          Kadın Siyah Sneakers <br />
          Renk: Siyah
        </p>
        <div class="price">
          <div class="price-info">
            <h5>1546 TL</h5>
            <small>1w ago</small>
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
  </div>
</template>

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
<script setup lang="ts"></script>
