<template>
  <div class="cl-banner-with-product-slider">
    <a
      href="/cocuk-c-3"
      class="cl-banner-item cl-prom-item cl-prom-link viewed"
      data-id="2021100805"
      data-name="Işıltılı Enerji"
      data-creative="Işıltılı Enerji"
      data-position="1"
    >
      <img
        class="cl-banner-img"
        src="../assets/a3-kids-desktop.gif"
        data-src="../assets/a3-kids-desktop.gif"
      />
    </a>
    <div
      class="cl-one-product-slider swiper-container-initialized swiper-container-horizontal"
    >
      <p class="cl-one-product-slider-title">Işıltılı Enerji</p>
      <div
        class="swiper-wrapper"
        id="swiper-wrapper-9100bf77a88eacdea"
        aria-live="polite"
        style="transform: translate3d(0px, 0px, 0px)"
      >
        <a
          href="/p-twinkle-sparks-wing-charm-kucuk-kiz-cocuk-lavanta-isikli-spor-ayakkabi-314785n-lvmt"
          class="swiper-slide swiper-slide-active"
          role="group"
          aria-label="1 / 4"
          style="width: 310px"
        >
          <img
            src="../assets/683-09.gif"
            data-src="../assets/683-09.gif"
            data-resize="600/600"
            class="cl-product-img"
          />
          <p class="cl-product-name">Twinkle Sparks - Wing Charm</p>
          <p class="cl-product-category">
            Küçük Kız Çocuk Mor Işıklı Spor Ayakkabı
          </p>
        </a>
      </div>
      <span
        class="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  </div>
</template>

<style>
.cl-banner-with-product-slider {

  text-decoration: none;
  font-family: Mulish, sans-serif;
  display: flex;
  /*align-items: center;*/
  padding: 15px 15px;
  background-color: #fafafa;
  margin-bottom: 80px;
}

.cl-banner-with-product-slider .cl-banner-item {
  width: 76%;
  margin-right: 30px;
  position: relative;
}

.cl-banner-with-product-slider .cl-banner-item img {
  width: 100%;
  aspect-ratio: 1366/658;
  background-color: #eeeeee;
}

.cl-banner-with-product-slider .cl-banner-item .cl-banner-img.cl-mobile-image {
  display: none;
}

.cl-banner-with-product-slider .cl-one-product-slider {
  width: 24%;
  position: relative;
  margin: 0px;
  overflow: hidden;
  text-align: center;
  height: fit-content;
  transition: opacity 0.3s;
}
.cl-banner-with-product-slider .cl-one-product-slider.sliderHide {
  opacity: 0;
  height: 0px;
  overflow: hidden;
}
.cl-banner-with-product-slider
  .cl-one-product-slider
  .cl-one-product-slider-title {
  font-weight: 900;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #022d56;
}

.cl-banner-with-product-slider .cl-one-product-slider .cl-product-img {
  width: 120%;
  margin-bottom: 16px;
}

.cl-banner-with-product-slider .cl-one-product-slider .cl-product-name {
  text-decoration: none;
  font-size: 12px;
  color: #000000;
  margin-bottom: 4px;
}

.cl-banner-with-product-slider .cl-one-product-slider .cl-product-category {
  font-size: 12px;
  color: #757575;
  margin-bottom: 50px;
}

.cl-banner-with-product-slider
  .cl-one-product-slider
  .swiper-slide
  > .swiper-lazy-preloader {
  border-color: var(--blue);
  border-top-color: transparent;
}
.swiper-slide swiper-slide-active{
  text-decoration: none;
}
.cl-banner-with-product-slider
  .cl-one-product-slider
  .swiper-pagination-bullets {
  bottom: 0px;
}

.cl-banner-with-product-slider
  .cl-one-product-slider
  .swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  border-radius: 12px;
  background-color: transparent;
  border: 2px solid #000000;
  opacity: 1;
}

.cl-banner-with-product-slider
  .cl-one-product-slider
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #000000;
}

@media only screen and (max-width: 991px) {
  .cl-banner-with-product-slider {
    flex-direction: column;
    padding: 20px 15px;
    margin-bottom: 50px;
  }

  .cl-banner-with-product-slider .cl-banner-item {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 20px;
  }

  .cl-banner-with-product-slider .cl-one-product-slider {
    width: 100%;
    margin-bottom: 20px;
    display: block;
    min-height: calc(144vw - 30px);
  }
  .cl-banner-with-product-slider .cl-one-product-slider.sliderHide {
    height: auto;
  }
  .cl-banner-with-product-slider
    .cl-banner-item
    .cl-banner-img.cl-mobile-image {
    display: block;
  }

  .cl-banner-with-product-slider
    .cl-banner-item
    .cl-banner-img.cl-desktop-image {
    display: none;
  }

  .cl-banner-with-product-slider .cl-one-product-slider .cl-product-category {
    margin-bottom: 36px;
  }
  .cl-banner-with-product-slider
    .cl-one-product-slider
    .cl-one-product-slider-title {
    font-size: 14px;
    line-height: 16px;
    font-weight: 900;
    margin-bottom: 20px;
    color: #000000;
  }
  .cl-banner-with-product-slider .cl-one-product-slider .cl-product-img {
    padding: 0px;
    aspect-ratio: 0.8;
  }
}
</style>
