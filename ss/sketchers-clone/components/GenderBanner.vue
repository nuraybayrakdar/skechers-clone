<template>
  <div>
    <div class="cl-gender-banner">
      <a
        href="/kadin-c-1"
        class="gender-banner-item cl-prom-item viewed"
        data-id="tag1635254890845"
        data-name="Kadın Ürünleri"
        data-creative="Kadın Ürünleri"
        data-position="0"
        alt="Kadın Ürünleri"
      >
        <img
          src="https://skcfiles.mncdn.com/webfiles/banners/638005622038985723-kadin-web-kategori-gorseller.jpg?v=1667927597"
          data-src="https://skcfiles.mncdn.com/webfiles/banners/638005622038985723-kadin-web-kategori-gorseller.jpg?v=1667927597"
          class="gender-banner-img"
        />
        <p class="gender-banner-title">Kadın Ürünleri</p>
      </a>
      <a
        href="/erkek-c-2"
        class="gender-banner-item cl-prom-item viewed"
        data-id="tag1635254890845"
        data-name="Kadın Ürünleri"
        data-creative="Kadın Ürünleri"
        data-position="0"
        alt="Erkek Ürünleri"
      >
        <img
          src="https://skcfiles.mncdn.com/webfiles/banners/638005622248928087-erkek-web-kategori-gorseller (1).jpg?v=1667927597"
          data-src="https://skcfiles.mncdn.com/webfiles/banners/638005622248928087-erkek-web-kategori-gorseller (1).jpg?v=1667927597"
          class="gender-banner-img"
        />
        <p class="gender-banner-title">Erkek Ürünleri</p>
      </a>
      <a
        href="/erkek-cocuk-ayakkabilari-c-3101"
        class="gender-banner-item cl-prom-item viewed"
        data-id="tag1635254890845"
        data-name="Kadın Ürünleri"
        data-creative="Kadın Ürünleri"
        data-position="0"
        alt="Erkek Çocuk Ayakkabıları"
      >
        <img
          src="https://skcfiles.mncdn.com/webfiles/banners/638035243397028678-erkek-cocuk-web-kategori-gorseller.png?v=1667927597"
          data-src="https://skcfiles.mncdn.com/webfiles/banners/638035243397028678-erkek-cocuk-web-kategori-gorseller.png?v=1667927597"
          class="gender-banner-img"
        />
        <p class="gender-banner-title">Erkek Çocuk Ayakkabıları</p>
      </a>
      <a
        href="/kiz-cocuk-ayakkabilari-c-3001"
        class="gender-banner-item cl-prom-item viewed"
        data-id="tag1635254890845"
        data-name="Kadın Ürünleri"
        data-creative="Kadın Ürünleri"
        data-position="0"
        alt="Kız Çocuk Ayakkabıları"
      >
        <img
          src="https://skcfiles.mncdn.com/webfiles/banners/638035243636155497-kiz-cocuk-web-kategori-gorseller.png?v=1667927597"
          data-src="https://skcfiles.mncdn.com/webfiles/banners/638035243636155497-kiz-cocuk-web-kategori-gorseller.png?v=1667927597"
          class="gender-banner-img"
        />
        <p class="gender-banner-title">Kız Çocuk Ayakkabıları</p>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style>
.cl-gender-banner {
  display: flex;
  margin-bottom: 80px;
  margin-left: 30px;
  margin-right: 30px;
  flex-wrap: wrap;
  font-family: Mulish,sans-serif;
}

.gender-banner-item {
  margin-left: 20px;
  margin-right: 20px;
  width: calc(25% - 40px);
  position: relative;
}

.gender-banner-img {
  width: 100%;
  border-radius: 6px;
  aspect-ratio: 550/976;
  background-color: #eee;
}

.gender-banner-title {
  color: #022c57;
  font-size: 16px;
  font-weight: 900;
  text-decoration: underline;
  background-image: url('https://skcfiles.mncdn.com/webfiles/right-arrow.svg');
  background-size: 10px;
  background-position: right;
  background-repeat: no-repeat;
  width: fit-content;
  padding-right: 12px;
  margin-top: 8px;
}

@media only screen and (max-width: 991px) {
  .cl-gender-banner {
    color: #022c57;
    font-family: Mulish,sans-serif;
    margin-bottom: 50px;
    margin-left: 10%;
    margin-right: 10%;
}

  .gender-banner-item {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 6px;
    width: calc(50% - 20px);
  }

  .gender-banner-title {
    color: #022c57;
    font-size: 12px;
    font-weight: 400;
    text-decoration: underline;
    background-image: none;
    margin-top: 4px;
  }
}
</style>
