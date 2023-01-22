<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBottom from './HeaderBottom.vue'
</script>
<template>
  <div>
    <header role="presentation">
      <div class="mdd-menu">
        <div class="main_header_area animated">
          <div class="container-fluid">
            <div id="navigation1" class="navigation navigation-landscape">
              <div class="navigationRow">
                <!-- Logo Area Start -->
                <div class="nav-header">
                  <a class="nav-brand" href="/"
                    ><img
                      src="https://c-skc2-l.mncdn.com/images/skechers-rahat-ayakkabi.svg"
                      alt="Skechers Rahat Ayakkabı"
                      title="Skechers Rahat Ayakkabı"
                  /></a>
                </div>
                <div class="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <!-- Search panel Start -->
                <div class="nav-search">
                  <form
                    method="get"
                    class="w-100"
                    action="/search"
                    style="display: none"
                  >
                    <span class="nav-search-close-button" tabindex="0">X</span>
                    <input
                      type="hidden"
                      value="true"
                      data-val="true"
                      data-val-required="The Box field is required."
                      id="Box"
                      name="Box"
                    />
                    <label for="small-searchterms" class="sr-only">Arama</label>
                    <div class="input-group flex-row">
                      <div class="input-group-append">
                        <button
                          type="submit"
                          class="btn btn-info search-box-button float-sm-right d-inline-flex"
                        >
                          <span class="sr-only">Arama</span>
                          <span class="mdi mdi-magnify"></span>
                        </button>
                        <span class="mdi mdi-close close-search"></span>
                      </div>
                      <div class="d-flex mobile-search-trigger">
                        <div
                          class="personaclick-search-box personaclick-search-box__full"
                        >
                          <input
                            type="text"
                            class="form-control search-box-text personaclick-instant-search personaclick-instant-search-rendered"
                            id="small-searchterms"
                            autocomplete="off"
                            name="q"
                            placeholder="Ara: Ayakkabı, Spor Aya"
                          />
                          <div class="personaclick-search-results"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- Header buttons Start -->

                <div class="container-fluid sk-header-cart-container">
                  <RouterLink   class="sk-user-account" to="/login">
                    <span class="mdi mdi-account-outline"></span>

                    <span class="sk-acc-title" id="cl-account-button"
                      >Giriş Yap <br />
                      <span>veya üye ol</span> </span
                    >
                  </RouterLink>
                  <div class="d-inline-flex align-items-center sk-user-setting">
                    <ul class="shopping-links">
                      <li class="nav-item wishlist-container d-lg-block">
                        <a class="nav-link" href="/wishlist">
                          <span class="wishlist-label hl-label">
                            <span class="mdi mdi-heart-outline"></span>
                            <span class="sk-wish-title">Favorilerim</span>
                          </span>
                        </a>
                      </li>
                      <li class="nav-item cart-container" id="topcartlink">
                        <div class="btn-group dropdown">
                          <a class="nav-link" href="/cart">
                            <span class="cart-label hl-label">
                              <span class="mdi mdi-cart-outline"></span>
                              <span class="sk-cart-title">Sepetim</span>
                            </span>
                            <span class="cart-qty">0</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <HeaderBottom></HeaderBottom>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<style>
/*! CSS Used from: undefined */
dl,
h1,
h2,
h3,
h4,
h5,
h6,
ol,
p,
ul {
  margin-top: 0;
}
body,
body * {
  font-family: Mulish, sans-serif;
}
.btn,
img {
  vertical-align: middle;
}
#eu-cookie-bar-notification .btn,
.sr-only {
  white-space: nowrap;
}
body,
html > a {
  max-width: 1920px;
}
:root {
  --red: #d82121;
  --green: #11a311;
  --blue: #022c57;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.collapse:not(.show),
.tab-content > .tab-pane,
body .sk-checkout-footer,
body .sk-header-cart-container.hide {
  display: none;
}
img {
  border-style: none;
}
a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}
iframe#_hjRemoteVarsFrame {
  display: none !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
.personaclick-search-results .personaclick-search-wrapper {
  margin-left: 0 !important;
}
.personaclick-search-close {
  right: 20px !important;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}
.d-inline-flex {
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}
.d-none {
  display: none !important;
}
.cl-product-slider.hide,
.cl-slider-container.sliderHide,
.fade:not(.show),
.modal-backdrop.fade {
  opacity: 0;
}
.fade {
  transition: opacity 0.15s linear;
}
dl,
ol,
ul {
  margin-bottom: 1rem;
}
b,
strong {
  font-weight: bolder;
}
.d-inline-block {
  display: inline-block !important;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.flex-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}
.flex-wrap {
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
}
.order-1 {
  -ms-flex-order: 1;
  order: 1;
}
.order-2 {
  -ms-flex-order: 2;
  order: 2;
}
.order-3 {
  -ms-flex-order: 3;
  order: 3;
  -ms-flex-order: 4;
  order: 4;
}
.cl-slider-container {
  background-color: #f4f5f6;
  margin: 0 -50px;
  padding: 40px 0;
  transition: opacity 0.3s;
  opacity: 1;
}
.cl-slider-container .cl-slider-tab-buttons {
  display: flex;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 100vw;
  margin: 0 auto 15px;
  padding-bottom: 15px;
  white-space: nowrap;
  overflow: auto;
}
.cl-slider-header {
  text-align: center;
  color: var(--blue);
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  margin: 0 12px 30px;
  padding: 0 30px;
  border-radius: 6px;
}
.cl-slider-container .cl-slider-tab-buttons::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #eee;
}
.cl-slider-container .cl-slider-tab-buttons::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}
.cl-slider-container .cl-slider-tab-buttons .cl-slider-header {
  color: #707070;
  cursor: pointer;
  transition: color 0.3s;
  margin-bottom: 0;
}
.cl-slider-container .cl-slider-tab-buttons .cl-slider-header:hover,
.toast-message a,
.toast-message label {
  color: var(--blue);
}
.cl-slider-container .cl-slider-tab-buttons .cl-slider-header.active {
  border: 1px solid var(--blue);
  color: var(--blue);
}
.cl-product-slider {
  padding: 0 100px !important;
  transition: opacity 0.3s;
  min-height: 580px;
}
@media only screen and (max-width: 1920px) {
  .cl-product-slider {
    min-height: calc(31.25vw + 10px);
  }
}
.cl-product-slider .swiper-wrapper {
  display: flex;
}
.cl-product-slider .swiper-button-next,
.cl-product-slider .swiper-button-prev {
  color: #000;
  font-weight: 700;
  font-size: 4px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
}
.cl-product-slider .swiper-button-next::after,
.cl-product-slider .swiper-button-prev::after {
  font-size: 22px;
}
.cl-product-slider .swiper-slide {
  background-color: #fff;
  padding: 24px;
  overflow: hidden;
  height: auto;
}
#ModalQuickView,
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.cl-product-slider .swiper-slide .cl-product-images {
  position: relative;
  overflow: hidden;
  display: block;
}
.cl-product-slider .swiper-slide .cl-product-images img {
  width: 100%;
  transition: transform 0.3s;
  aspect-ratio: 0.8;
}
.cl-product-slider .swiper-slide .cl-product-info {
  margin-top: 8px;
}
.cl-product-slider .swiper-slide .cl-product-info .cl-product-name {
  font-size: 12px;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
}
.cl-product-slider .swiper-slide .cl-product-info .cl-product-category {
  font-size: 12px;
  font-weight: 600;
  color: #757575;
}
.cl-product-slider .swiper-slide .cl-product-prices {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
}
.cl-product-slider .swiper-slide .cl-product-prices .cl-product-old-price {
  color: #bcbcbc;
  margin-bottom: 4px;
}
.cl-product-slider
  .swiper-slide
  .cl-product-prices
  .cl-product-old-price
  span:not(.cl-product-discount-rate) {
  text-decoration: line-through;
}
.cl-product-slider
  .swiper-slide
  .cl-product-prices
  .cl-product-old-price
  .cl-product-discount-rate {
  color: var(--red);
  margin-left: 8px;
}
.cl-product-slider .swiper-slide .total-colors-count {
  font-size: 12px;
  font-weight: 600;
  color: #757575;
  margin: 8px 0 0 auto;
}
.cl-product-slider .swiper-slide .slid-color {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  transform: translateY(110%);
  transition: transform 0.3s;
  justify-content: center;
  display: flex;
}
.cl-product-slider .swiper-slide .slid-color a {
  width: 25%;
  height: 100px;
  background-size: cover;
  background-position: center;
  margin-top: 10px;
  margin-right: 10px;
}
.cl-product-slider .swiper-slide .slid-color a:last-child {
  margin-right: 0;
}
.cl-product-slider .swiper-slide:hover .slid-color {
  transform: translateY(0);
}
.cl-product-slider
  .swiper-slide.more-color-product:hover
  .cl-product-images
  img {
  transform: translateY(-20px);
}
.cl-product-slider .swiper-slide form select {
  border-radius: 6px;
  border: 1px solid #bcbcbc;
  height: 40px;
  color: #7c7c7c;
  font-size: 14px;
  margin: 12px 0 8px;
}
.cl-product-slider .swiper-slide form .slider-addtocart-button {
  border-radius: 6px;
  border: solid 1px var(--blue);
  height: 40px;
  width: 100%;
  color: var(--blue);
  background-color: transparent;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}
.cl-product-slider .swiper-slide form .slider-addtocart-button:hover {
  background-color: var(--blue);
  color: #fff;
}
@media only screen and (max-width: 1600px) {
  .cl-product-slider .swiper-slide .slid-color a {
    height: 60px;
  }
}
@media only screen and (max-width: 1366px) {
  .cl-product-slider {
    padding: 0 50px !important;
    min-height: calc(31.25vw + 20px);
  }
  .cl-fluid-slider .swiper-slide {
    width: 220px;
  }
  .cl-fluid-slider[data-type="product"] {
    min-height: 420px;
  }
  .cl-fluid-slider[data-type="product"] .cl-product-images {
    height: 330px;
  }
  .cl-fluid-slider[data-type="banner"] {
    min-height: 304px;
  }
  .cl-fluid-slider[data-type="banner"] .cl-banner-images {
    height: 248px;
  }
  .cl-product-slider .swiper-slide .slid-color a {
    height: 60px;
  }
}
@media screen and (max-width: 1120px) {
  .cl-slider-container {
    margin: 0 -15px;
  }
}
@media only screen and (max-width: 767px) {
  .cl-slider-container {
    margin: 0;
  }
  .cl-product-slider {
    padding: 0 12px !important;
    min-height: 440px;
  }
  .home-page .cl-slider-container {
    margin: 0 -15px;
  }
  .cl-slider-header {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  .cl-slider-container .cl-slider-tab-buttons {
    justify-content: flex-start;
  }
  .cl-product-slider .swiper-slide {
    width: 70vw;
    padding: 10px;
  }
  .cl-fluid-slider .swiper-slide:first-child {
    margin-left: 0 !important;
  }
  .cl-fluid-slider .swiper-slide:last-child {
    margin-right: 0 !important;
  }
  .cl-fluid-slider[data-type="product"] {
    min-height: 324px;
  }
  .cl-fluid-slider[data-type="product"] .cl-product-images {
    height: 240px;
  }
  .cl-fluid-slider[data-type="banner"] {
    min-height: 236px;
  }
  .cl-fluid-slider[data-type="banner"] .cl-banner-images {
    height: 180px;
  }
  .cl-product-slider .swiper-slide .slid-color.active,
  .cl-product-slider
    .swiper-slide.more-color-product:hover
    .cl-product-images
    img {
    transform: translateY(0);
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .cl-product-slider .swiper-slide:hover .slid-color {
    transform: translateY(110%);
  }
  .cl-product-slider .swiper-slide form select {
    height: 32px;
    font-size: 12px;
  }
  .cl-product-slider .swiper-slide form .slider-addtocart-button {
    height: 32px;
    font-size: 12px;
    background-color: var(--blue);
    color: #fff;
  }
}
.cl-slider-container.combined-slider-container
  .swiper-wrapper
  .swiper-slide
  form
  select {
  background: url("data:image/svg+xml;utf8,<svg fill='grey' xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon points='0,0 100,0 50,50'/></svg>")
    95% 50%/10px no-repeat;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-position: calc(100% - 6px) calc(100% - 7px);
}
@media screen and (min-width: 768px) {
  .cl-slider-container.combined-slider-container {
    background-color: #fff;
    padding: 0 50px;
  }
  .cl-slider-container.combined-slider-container .cl-slider-header {
    text-align: left;
    color: #000;
    padding-left: 6px;
    margin: 0;
  }
  .cl-slider-container.combined-slider-container .swiper-button-next,
  .cl-slider-container.combined-slider-container .swiper-button-prev {
    display: none !important;
  }
  .cl-slider-container.combined-slider-container .swiper-container {
    padding: 0 !important;
    margin: 0;
  }
  .cl-slider-container.combined-slider-container .swiper-wrapper {
    box-sizing: content-box;
    display: contents;
  }
  .cl-slider-container.combined-slider-container .swiper-wrapper .swiper-slide {
    display: flex;
    padding: 6px;
    margin-bottom: 14px;
    width: 100% !important;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    .cl-product-images {
    flex: none;
    margin-right: 30px;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    .cl-product-images
    img {
    width: 140px;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    .cl-product-name {
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 6px;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    .cl-product-category {
    font-size: 12px;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    .cl-product-prices {
    font-size: 18px;
    font-weight: 600;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    form {
    display: flex;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    form
    select {
    margin: 12px 20px 8px 0;
    height: 32px;
    font-size: 12px;
    width: 130px;
    flex: none;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    form
    .slider-addtocart-button {
    margin: 12px 0 8px;
    height: 32px;
    background-color: var(--blue);
    color: #fff;
    font-size: 12px;
    width: 180px;
    flex: none;
  }
  .cl-slider-container.combined-slider-container
    .swiper-wrapper
    .swiper-slide
    form
    .slider-addtocart-button:hover {
    color: var(--blue);
    background-color: #fff;
  }
}
.menu-active .nav-toggle,
.nav-toggle span {
  background: var(--blue);
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
body.scroll-down:not(.onTop) header {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
.tab-content > .active,
body .mdd-menu .navigation-portrait .nav-toggle {
  display: block;
}
.nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}
.modal-content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
#toast-container,
.collapsibleFooterHeader {
  pointer-events: none;
}
.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
}
.modal-backdrop.show {
  opacity: 0.5;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
body .mdd-menu .megamenu-panelbody .mdd-menu .nav-menu > li > a {
  margin: 17px 0;
  font-size: 12px;
  color: #000;
  font-weight: 500;
}
@media screen and (min-width: 992px) {
  .navigationRow.cl-navigation-row {
    height: 60px;
    line-height: 60px;
  }
} /*! CSS Used from: https://localhost/Themes/DefaultClean/Content/css/main.css?v=211218 */
.container-fluid {
  padding-left: 50px;
  padding-right: 50px;
}
body {
  position: relative;
  margin: 0 auto;
  overflow: scroll;
  overflow-x: hidden;
}
body * {
  line-height: 1.2;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: 0;
  border-radius: 0;
}
body #leftSide .user-panel-head {
  background: #fff;
  border-bottom: 1px solid #ddd;
  color: #262626;
}
body #leftSide .user-panel-head .offcanvas-close {
  color: #262626;
  margin-right: 5px;
}
body #leftSide .sk-mobile-filter-header {
  border-bottom: none;
}
body #leftSide .sk-mobile-filter-header .text-center.w-100 .offcanvas-close {
  position: relative;
  top: 20px;
}
body #back-to-top {
  background: #262626;
  bottom: 100px;
  border-radius: 100%;
}
#back-to-top.show {
  opacity: 1;
}
.btn-group > .btn:not(:first-child),
blockquote,
body > p {
  margin: 0;
}
body .sk-header-cart-container {
  height: 36px;
  max-height: 36px;
  border-bottom: 1px solid #ebebeb;
}
body .sk-header-cart-container a .mdi {
  top: 1px;
  position: relative;
}
body .sk-header-cart-container .sk-user-account {
  line-height: 36px;
  display: inline-block;
  position: relative;
  top: 0;
  font-size: 12px;
  color: #262626;
  padding: 0 0 0 15px;
}
body .sk-header-cart-container .sk-user-account .mdi,
body .sk-user-setting .cart-container .mdi,
body .sk-user-setting .wishlist-container .mdi {
  font-size: 16px;
}
body .sk-user-setting .cart-container .cart-label,
body .sk-user-setting .wishlist-container .wishlist-label {
  line-height: 36px;
  display: inline-block;
  position: relative;
  top: 0;
  font-size: 12px;
  color: #262626;
}
body .sk-user-setting .cart-container {
  pointer-events: all !important;
}
body .mdd-menu {
  border-bottom: 1px solid #ebebeb;
  min-height: 72px;
}
body .mdd-menu .navigation {
  width: 100%;
  height: 70px;
  display: table;
  position: relative;
  font-family: inherit;
  background-color: #fff;
}
body .mdd-menu .navigation .sk-checkout-top-numbers {
  display: none;
  width: auto;
  position: absolute;
  right: 50px;
  top: 30px;
}
body .mdd-menu .navigation .sk-checkout-top-numbers .sk-phone-number {
  font-size: 14px;
  color: #6a6a6a;
  margin-left: 40px;
}
body .mdd-menu .navigation .sk-checkout-top-numbers .sk-phone-number i {
  top: 5px;
  position: relative;
}
body .mdd-menu .navigation * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
body .mdd-menu .navigation-portrait {
  height: 48px;
}
body .mdd-menu .nav-header {
  float: left;
  max-width: 180px;
  position: relative;
}
@media screen and (max-width: 1120px) {
  .container-fluid {
    padding: 0 15px;
  }
  .container {
    padding: 0 30px;
  }
  body .mdd-menu .container-fluid,
  body .sk-header-cart-container {
    padding: 0 10px;
  }
  body .mdd-menu .nav-header {
    max-width: 140px;
  }
}
body .mdd-menu .nav-brand {
  padding: 0;
  color: #343a40;
  font-size: 24px;
  text-decoration: none !important;
}
body .mdd-menu .nav-brand img {
  width: 100%;
  min-width: 180px;
  aspect-ratio: 6.1;
  margin-top: -10px;
}
body .mdd-menu .nav-brand:focus,
body .mdd-menu .nav-brand:hover {
  color: #343a40;
}
body .mdd-menu .nav-toggle {
  top: 50px;
  left: 12px;
  position: absolute;
  margin: auto;
  bottom: 0;
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: none;
  text-align: left;
  padding: 0 8px !important;
  border-radius: 4px;
  transition: background 0.3s;
}
.nav-toggle span {
  display: block;
  position: absolute;
  height: 3px;
  width: 24px;
  border-radius: 9px;
  opacity: 1;
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -o-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  left: 8px;
}
.nav-toggle span:first-child {
  top: 10px;
}
.nav-toggle span:nth-child(2),
.nav-toggle span:nth-child(3) {
  top: 18px;
}
.nav-toggle span:nth-child(4) {
  top: 26px;
}
.menu-active .nav-toggle span:first-child,
.menu-active .nav-toggle span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
  background: #fff;
}
.menu-active .nav-toggle span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  background: #fff;
}
.menu-active .nav-toggle span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background: #fff;
}
body .mdd-menu .nav-search {
  height: 70px;
  float: right;
  z-index: 1040;
  width: 280px;
  position: relative;
}
@media screen and (max-width: 1218px) {
  body .mdd-menu .nav-search {
    width: 181px;
  }
}
body .mdd-menu .navigation-portrait .nav-search {
  height: 48px;
  padding: 0 10px;
  margin-right: 52px;
}
body .mdd-menu .nav-search span.mdi.mdi-close {
  display: none;
  width: 20px;
  height: 20px;
  background-size: 100%;
}
body .mdd-menu .nav-search > form {
  width: 100%;
  padding: 10px auto 0;
  display: block !important;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}
body .mdd-menu .nav-search > form .input-group.flex-row input {
  border: 1px solid #262626;
  border-radius: 0 !important;
  margin: 0 !important;
  z-index: 1 !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
body .mdd-menu .nav-search > form .input-group.flex-row .input-group-append {
  position: absolute;
  right: 10px;
  z-index: 9;
}
body
  .mdd-menu
  .nav-search
  > form
  .input-group.flex-row
  .input-group-append
  button {
  border: 0;
  background: #fff;
  color: #262626;
  border-top: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-radius: 0;
}
body .mdd-menu .nav-search-close-button {
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  top: 20px;
  line-height: normal;
  color: #343a40;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  display: none;
}
body .mdd-menu .navigation-portrait .nav-search-close-button {
  top: 10px;
  right: 14px;
}
body .sk-footer .mw-23 {
  max-width: 23.8% !important;
}
body .sk-footer .sk-footer-linkList {
  margin-top: 44px;
}
body .sk-footer .sk-footer-linkList a:hover {
  text-decoration: underline;
}
body .sk-footer .sk-footer-linkList .sk-footer-link-heading {
  font-size: 16px;
  font-weight: 700;
}
body .sk-footer .sk-footer-linkList .sk-footer-link-heading span {
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
body .sk-footer .sk-footer-linkList .footer-link-ullist {
  padding: 0;
  margin: 0;
}
body .sk-footer .sk-footer-linkList .footer-link-ullist a {
  line-height: 34px;
  font-size: 14px;
  color: #262626;
}
.toast-title,
body .sk-footer .sk-footer-linkList .footer-link-ullist.bolderText a {
  font-weight: 700;
}
body .sk-checkout-footer .sk-footer-copyright,
body .sk-footer .sk-footer-copyright {
  border: none;
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  background: #ebebeb;
  min-height: 40px;
  padding: 0;
  line-height: 40px;
  font-size: 11px;
  font-weight: lighter;
}
@media screen and (max-width: 767px) {
  body .mdd-menu .navigation .sk-checkout-top-numbers {
    display: none !important;
  }
  body .sk-footer .mw-23 {
    max-width: 100% !important;
    text-align: center;
  }
  body .sk-footer .sk-footer-linkList {
    width: 100%;
  }
  body .sk-checkout-footer .sk-footer-copyright span,
  body .sk-footer .sk-footer-copyright span {
    display: block;
    width: 100%;
    margin-top: 13px;
  }
}
body .sk-checkout-footer .sk-footer-copyright a,
body .sk-footer .sk-footer-copyright a {
  color: #262626;
  display: inline-block;
  margin-left: 10px;
  font-weight: 700;
  position: relative;
  text-decoration: underline;
}
body .sk-footer .sk-footer-copyright span {
  background-color: #262626;
  display: inline-block;
  margin-left: 10px;
  height: 3px;
  width: 3px;
  border-radius: 4px;
  position: relative;
  transform: translateY(-2px);
  opacity: 0;
}
body #eu-cookie-bar-notification {
  background: #fff;
  font-size: 12px;
  text-align: center;
}
body #eu-cookie-bar-notification .btn {
  color: #262626 !important;
  text-transform: capitalize;
  margin-right: 5px;
  font-size: 12px;
}
body #eu-cookie-bar-notification .btn:hover {
  background: #f8f9fa;
  border-color: #f8f9fa;
}
body #eu-cookie-bar-notification .btn.learn-more {
  background-color: #dadada !important;
  border-color: #dadada !important;
}
.form-control {
  width: 100%;
  display: inline-block;
  margin-left: 0;
  border-color: #d9d9d9;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
  height: 50px;
}
.form-control:focus {
  border: 2px solid #262626;
}
@media screen and (max-width: 991px) {
  body .mdd-menu {
    min-height: 97px;
  }
  body .mdd-menu .navigation .sk-checkout-top-numbers {
    right: 10px;
    top: -40px;
  }
  body .mdd-menu .navigation {
    height: 48px;
  }
  body .mdd-menu .navigation .sk-checkout-top-numbers .sk-phone-number {
    font-size: 11px;
    margin-left: 0;
  }
  body .mdd-menu .nav-header {
    text-align: center;
    max-width: 100%;
    width: 100%;
  }
  body .mdd-menu .nav-brand img {
    width: 150px;
    margin-top: 0;
  }
  body .mdd-menu .nav-brand {
    font-size: 18px;
    line-height: 48px;
  }
  body .mdd-menu .nav-toggle {
    display: block !important;
  }
  body .mdd-menu .navigation-portrait .nav-search {
    position: relative;
    right: 0;
    margin-right: 0;
    padding: 6px 6px 4px 12px;
    z-index: 1;
    width: calc(100% + 20px);
    left: 10px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  body .mdd-menu .navigation-portrait .nav-search input {
    border-radius: 9px;
    border: none;
    padding-left: 0;
    padding-right: 45px;
    font-size: 12px;
    letter-spacing: 0.4px;
    height: 37px;
    background: #fff !important;
  }
  body .mdd-menu .navigation-portrait .nav-search span.mdi.mdi-close,
  body .mdd-menu .navigation-portrait .nav-search span.mdi.mdi-magnify {
    position: absolute;
    font-size: 22px;
    color: #262626;
    right: 2px;
    top: 13px;
    opacity: 0.5;
  }
  body.search-active
    .mdd-menu
    .navigation-portrait
    .nav-search
    .search-box-button {
    display: none !important;
  }
  body.search-active
    .mdd-menu
    .navigation-portrait
    .nav-search
    span.mdi.mdi-close {
    display: block;
    z-index: 9;
  }
  body .sk-footer .sk-footer-linkList .sk-footer-link-heading {
    font-size: 14px;
  }
  body .sk-footer .sk-footer-linkList .footer-link-ullist a {
    font-size: 12px;
  }
  .modal-dialog {
    margin: 0 !important;
    display: inline;
  }
}
@media (max-width: 576px) {
  .modal-dialog {
    margin: 0 !important;
  }
}
body .mdd-menu,
header {
  border: none !important;
}
body .sk-header-cart-container {
  background: unset;
  height: unset;
  max-height: unset;
  text-align: right;
  border-bottom: none;
  line-height: 86px;
  width: 360px;
  display: inline-table;
  margin: 0;
  position: absolute;
  top: 0;
  right: 50px;
}
#navigation1 .nav-header,
#navigation1 .nav-search {
  display: block;
  border: none;
  float: left;
}
.sk-header-cart-container a {
  background-color: #f4f4f4;
  padding: 0 14px !important;
  font-size: 11px !important;
  font-weight: 500;
  color: #707070 !important;
  margin-right: 6px;
  transition: 0.3s;
  border: 2px solid transparent;
}
.sk-header-cart-container a:hover {
  border: 2px solid #022c57;
  color: #022c57 !important;
}
.sk-header-cart-container a:hover .mdi {
  opacity: 1;
  filter: grayscale(0);
}
.sk-header-cart-container a span {
  font-size: 11px !important;
  font-weight: 500;
  color: inherit !important;
  position: relative;
}
.sk-header-cart-container a span.mdi {
  opacity: 0.55;
  filter: grayscale(1);
  height: 16px;
  width: 16px;
  background-size: 16px;
  transform: translateY(3px);
  margin-right: 2px;
  transition: 0.3s;
}
#navigation1 .nav-search {
  margin: 0 60px;
  height: 90px;
  width: 600px;
  max-width: calc(100% - 600px);
  transition: 0.2s;
}
body .mdd-menu .container-fluid {
  padding: 0;
}
body .mdd-menu .nav-brand {
  line-height: 90px;
}
body .mdd-menu .nav-search > form .input-group.flex-row input {
  background-color: #f4f4f4;
  border: none;
  font-size: 13px !important;
  height: 40px;
  line-height: 40px;
  padding: 0 40px 0 20px;
}
body
  .mdd-menu
  .nav-search
  > form
  .input-group.flex-row
  .input-group-append
  button {
  background-color: transparent;
  border: none;
  height: 40px;
  line-height: 40px;
  padding: 0;
}
.mobile-search-trigger,
.personaclick-search-box {
  width: 100%;
}
#small-searchterms {
  overflow: hidden;
  width: 100%;
  margin: 0 5px 0 0;
  font-size: 16px;
}
body .mdd-menu .nav-search > form {
  padding-top: 25px;
  height: auto;
  background-color: unset;
}
body .mdd-menu .nav-search > form .mdi.mdi-magnify {
  height: 24px;
  width: 24px;
  background-size: 24px;
  transform: translateY(0);
  opacity: 0.5;
  align-self: center;
}
.navigationRow {
  border-bottom: 1px solid #eee;
  height: 50px;
  line-height: 50px;
  max-width: 100vw;
}
.navigationRow:first-child {
  padding: 0 50px;
  height: 90px;
  line-height: 90px;
}
body .sk-user-setting #topcartlink .cart-qty {
  left: auto;
  right: 2px;
  top: -2px;
  background: #022c57;
  color: #fff !important;
  width: 18px;
  height: 18px;
  line-height: 16px;
  font-weight: 500;
}
.personaclick-search-results {
  max-width: calc(100vw - 320px) !important;
}
#myaccount-login {
  transform: translateY(-4px);
  display: inline-flex;
}
.sk-header-cart-container a span.sk-acc-title span {
  position: absolute;
  font-size: 7px !important;
  left: 1px;
  top: 13px;
  opacity: 0.8;
  font-weight: 400;
}
.sk-header-cart-container .mdi:before {
  transform: translateY(4px) translateX(-4px) !important;
  font-size: 24px !important;
  color: #022c57 !important;
  width: 16px;
}
.sk-header-cart-container .shopping-links .mdi:before {
  transform: translateY(2px) translateX(-2px) !important;
  font-size: 19px !important;
  width: 16px;
}
.footerSocialRow {
  display: none;
  padding-top: 20px;
}
.footerSocialRow a {
  margin-right: 12px;
}
.footer-social-icon {
  height: 44px;
}
@media screen and (max-width: 767px) {
  .form-control {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
  .mobileAccordionCol,
  .sk-footer-copyright {
    background-color: #022e57 !important;
  }
  .mobileAccordionCol,
  .sk-footer .sk-footer-linkList .footer-link-ullist a,
  .sk-footer-copyright {
    color: #fff !important;
  }
  .collapsibleFooterHeader {
    pointer-events: auto;
    display: block;
    width: 100%;
    line-height: 40px;
    font-weight: 500 !important;
  }
  .footerSocialCol {
    display: none !important;
  }
  .footerSocialRow {
    display: block;
  }
  body .sk-footer .mw-23 {
    text-align: left;
  }
  .mobileAccordion .sk-footer-linkList {
    margin-top: 0 !important;
    line-height: 34px;
  }
  .sk-footer .container.max-100.mt-3 {
    padding-top: 0 !important;
  }
  .sk-footer .sk-footer-linkList .footer-link-ullist.bolderText a {
    font-weight: 700;
    font-size: 14px;
    color: #022e57 !important;
  }
  .mobileAccordionCol {
    margin-top: 2px;
  }
  .sk-footer-copyright {
    font-size: 9px !important;
    margin-top: 20px !important;
  }
  .sk-footer-copyright a {
    color: #fff !important;
    font-weight: 500 !important;
    text-decoration: none !important;
  }
  .sk-footer-copyright span {
    background-color: #fff !important;
    opacity: 1 !important;
  }
}
#loading,
.btn {
  background-color: transparent;
}
.cl-toast-container p,
.cl-toast-container span {
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
}
.sk-footer .sk-footer-linkList .sk-footer-link-heading span {
  display: inline-block !important;
  color: #fff !important;
  margin-bottom: 0 !important;
  display: right;
  line-height: 40px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.3s;
  transform: translateY(-1.5px) translateX(1px) rotate(45deg);
  -webkit-transform: translateY(-1.5px) translateX(1px) rotate(45deg);
  transform-origin: center;
}
.sk-footer .sk-footer-linkList .sk-footer-link-heading.collapsed span {
  transform: translateY(-2px) rotate(0);
  -webkit-transform: translateY(-2px) rotate(0);
}
@media screen and (min-width: 767px) {
  .collapse {
    display: block !important;
  }
}
.btn,
footer {
  display: inline-block;
}
.modal-content .close {
  right: 20px !important;
  top: 10px !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.btn {
  color: #212529;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}
.close,
.mdi {
  line-height: 1;
}
.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.toast,
.toast-error,
.toast-info,
.toast-message,
.toast-success,
.toast-warning {
  background-color: #fff;
}
.toast-message {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  padding: 20px 39px 20px 15px;
}
.toast-message a:hover {
  color: #ccc;
  text-decoration: none;
}
.toast-close-button {
  position: relative;
  right: -0.3em;
  top: -0.3em;
  float: right;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  -webkit-text-shadow: 0 1px 0 #ffffff;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.8;
  line-height: 1;
}
.toast-close-button:focus,
.toast-close-button:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.4;
}
.rtl .toast-close-button {
  left: -0.3em;
  float: left;
  right: 0.3em;
}
button.toast-close-button {
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  appearance: none;
}
.toast-top-center,
.toast-top-full-width {
  top: 0;
  right: 0;
  width: 100%;
}
.toast-bottom-center,
.toast-bottom-full-width {
  bottom: 0;
  right: 0;
  width: 100%;
}
.toast-top-left {
  top: 12px;
  left: 12px;
}
.toast-top-right {
  top: 80px;
  right: 50px;
}
.toast-bottom-right {
  right: 12px;
  bottom: 12px;
}
.toast-bottom-left {
  bottom: 12px;
  left: 12px;
}
#toast-container {
  position: fixed;
  z-index: 999999;
}
#toast-container * {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#toast-container > div {
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 15px 15px 15px 50px;
  width: 350px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border-radius: 3px;
  background-position: 15px center;
  background-repeat: no-repeat;
  -moz-box-shadow: 0 0 12px #999;
  -webkit-box-shadow: 0 0 12px #999;
  box-shadow: 0 0 12px #999;
  color: var(--blue);
  opacity: 0.8;
}
#toast-container > div.rtl {
  direction: rtl;
  padding: 15px 50px 15px 15px;
  background-position: right 15px center;
}
#toast-container > div:hover {
  -moz-box-shadow: 0 0 12px #000;
  -webkit-box-shadow: 0 0 12px #000;
  box-shadow: 0 0 12px #000;
  opacity: 1;
  cursor: pointer;
}
#toast-container > .toast-error,
#toast-container > .toast-info,
#toast-container > .toast-success,
#toast-container > .toast-warning {
  padding: 0 0 0 58px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2) !important;
  opacity: 1;
}
#toast-container > .toast-info {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=") !important;
  background-color: var(--blue);
  border-radius: 6px;
  border: 1px solid transparent;
}
#toast-container > .toast-error,
#toast-container > .toast-success {
  border-radius: 6px;
  background-color: var(--blue);
}
#toast-container > .toast-error {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=") !important;
  border: 1px solid transparent;
}
#toast-container > .toast-success {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==") !important;
  border: 1px solid transparent;
}
#toast-container > .toast-warning {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=") !important;
  background-color: var(--red);
  border-radius: 6px;
  border: 1px solid transparent;
}
#toast-container.toast-bottom-center > div,
#toast-container.toast-top-center > div {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
#toast-container.toast-bottom-full-width > div,
#toast-container.toast-top-full-width > div {
  width: 96%;
  margin-left: auto;
  margin-right: auto;
}
.toast-progress {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  background-color: #000;
  opacity: 0.4;
}
#loading,
.generalNote {
  position: fixed;
  text-align: center;
}
@media all and (max-width: 240px) {
  #toast-container > div {
    padding: 8px 8px 8px 50px;
    width: 11em;
  }
  #toast-container > div.rtl {
    padding: 8px 50px 8px 8px;
  }
  #toast-container .toast-close-button {
    right: -0.2em;
    top: -0.2em;
  }
  #toast-container .rtl .toast-close-button {
    left: -0.2em;
    right: 0.2em;
  }
}
@media all and (min-width: 241px) and (max-width: 480px) {
  #toast-container > div {
    padding: 8px 8px 8px 50px;
    width: 100%;
  }
  #toast-container > div.rtl {
    padding: 8px 50px 8px 8px;
  }
  #toast-container .toast-close-button {
    right: -0.2em;
    top: -0.2em;
  }
  #toast-container .rtl .toast-close-button {
    left: -0.2em;
    right: 0.2em;
  }
  #toast-container {
    top: 30px !important;
    width: 100% !important;
    right: 0 !important;
  }
  #toast-container > .toast-error,
  #toast-container > .toast-info,
  #toast-container > .toast-success,
  #toast-container > .toast-warning {
    margin: auto;
  }
}
#loading,
header {
  top: 0;
  width: 100%;
}
@media all and (min-width: 481px) and (max-width: 768px) {
  #toast-container > div {
    padding: 15px 15px 15px 50px;
    width: 25em;
  }
  #toast-container > div.rtl {
    padding: 15px 50px 15px 15px;
  }
}
.cl-toast-container {
  text-align: right;
}
.cl-toast-container span {
  color: var(--red);
}
.cl-toast-container a {
  font-size: 12px;
  line-height: 20px;
  text-decoration: underline;
} /*! CSS Used from: https://localhost/Themes/DefaultClean/Content/css/style.min.css?v=211218 */
.mdi {
  font-size: 24px;
}
a,
a:active,
a:focus,
a:hover,
button:focus,
ul {
  text-decoration: none;
  outline: 0;
  list-style-type: none;
}
a {
  color: #17a2b8;
}
a:hover {
  color: #00576b;
}
.search-box-button,
input {
  height: 38px;
}
.cl-flex-row {
  display: flex;
  flex-flow: wrap;
}
.form-control {
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.form-control:active,
.form-control:focus,
.form-control:hover {
  border-color: #0093b5;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
}
.generalNote {
  bottom: 15px;
  right: 15px;
  font-weight: 500;
  z-index: 1051;
}
.btn:focus {
  outline: 0;
  box-shadow: unset;
}
.btn-info {
  background-color: #0091b5;
  border-color: #0091b5;
}
.btn {
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.js-offcanvas-trigger .c-button__text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-offcanvas-content-wrap {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.c-offcanvas--left {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
}
.c-offcanvas,
.c-offcanvas-content-wrap {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}
.offcanvas-close {
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  color: #fff;
  float: right;
  cursor: pointer;
}
#loading {
  height: 100%;
  left: 0;
  display: block;
  opacity: 1;
  z-index: 99999;
}
#back-to-top,
.user-panel-head {
  background: #0091b5;
  color: #fff;
  display: flex;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-style: solid;
  border-radius: 50%;
  border-color: transparent;
  animation: 1s 0.5s infinite pulse;
}
@keyframes pulse {
  0% {
    height: 0;
    width: 0;
    border-color: #28a745;
    border-width: 32px;
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    height: 64px;
    width: 64px;
    border-width: 0;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
#back-to-top {
  justify-content: center;
  align-items: center;
  margin-left: auto;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 45px;
  height: 45px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  opacity: 0;
  z-index: 997;
}
#back-to-top .mdi {
  font-size: 36px;
}
.user-panel-head {
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  height: 43px;
  text-transform: uppercase;
}
#ModalQuickView {
  padding-right: 0 !important;
}
#ModalAddToCart,
#ModalPersonaClick,
#ModalSubscribe {
  z-index: 9999;
}
header {
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  -webkit-transition: transform 0.2s;
  transition: transform 0.2s;
  z-index: 1037;
}
.shopping-links {
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  order: 2;
}
.shopping-links .nav-link {
  display: inline-flex;
  align-items: center;
  padding: 0 0 0 15px;
  color: #17a2b8;
}
.shopping-links .nav-link .mdi {
  color: #000;
  font-size: 34px;
}
#searchModal .modal-dialog {
  margin: 0;
  max-width: 100%;
}
#searchModal.modal.fade .modal-dialog {
  transition: unset;
  height: 52px;
  position: sticky;
  width: 100%;
  top: 0;
}
.filter-button {
  max-width: 115px;
}
.eu-cookie-bar-notification {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 15px;
  background: rgba(23, 162, 184, 0.9);
  z-index: 1040;
}
#eu-cookie-bar-notification .ok-button {
  color: #000;
  font-weight: 500;
}
#eu-cookie-bar-notification .learn-more {
  background-color: #1d1f20;
  border-color: #1d1f20;
  text-decoration: none;
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
#eu-cookie-bar-notification .learn-more:hover {
  background-color: transparent;
  border-color: #fff;
}
#topcartlink {
  cursor: pointer;
}
.wishlist-container {
  position: relative;
}
#topcartlink .cart-qty {
  border-radius: 100%;
  background: #0091b5;
  color: #fff;
  font-size: 9px;
  font-weight: 300;
  width: 18px;
  height: 18px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 36px;
  top: -5px;
}
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  position: absolute;
  right: 7px;
  top: 4px;
  z-index: 1;
}
footer {
  padding: 45px 0 0;
  background-color: #fff;
  width: 100%;
  height: auto;
}
footer .footer-lower {
  margin: 45px 0 0;
  padding: 30px 0;
}
.footer-lower {
  border-top: 1px solid #dfdfdf;
}
::-webkit-scrollbar-track {
  width: 6px;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #fff;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  background-color: #d1d1d1;
}
body::-webkit-scrollbar {
  all: unset;
  border-radius: 0;
}
body::-webkit-scrollbar-thumb {
  border-radius: 0;
}
body::-webkit-scrollbar-track {
  background-color: #f2f2f2;
}
@media (min-width: 992px) {
  .c-offcanvas-bg.c-offcanvas-bg--left {
    display: none;
  }
}
@media (max-width: 991px) {
  #topcartlink .cart-qty {
    left: 30px;
  }
  #mobile_menu {
    overflow-x: hidden;
  }
  .shopping-links .nav-link {
    padding: 0 0 0 0.5rem;
  }
  .shopping-links .nav-link .mdi {
    font-size: 28px;
    color: #000;
  }
  .filter-button .c-button__text {
    display: flex;
    align-items: center;
  }
  #leftSide {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  .c-offcanvas--left {
    width: 320px;
    overflow: scroll;
    transform: translate3d(-320px, 0, 0);
    -webkit-transform: translate3d(-320px, 0, 0);
  }
  .wishlist-container {
    order: 2;
  }
  #topcartlink {
    order: 3;
    margin-left: auto;
    padding-right: 0;
  }
  footer .max-100 {
    max-width: 100% !important;
  }
  footer {
    padding: 0;
  }
}
@media (max-width: 767px) {
  .footer-lower {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
@media (min-width: 767px) {
  #ModalAddToCart,
  #ModalPersonaClick,
  #ModalSubscribe {
    transition: unset;
  }
}
@media (max-width: 575px) {
  .generalNote {
    left: 15px;
    font-size: 14px;
  }
}
@media (max-width: 372px) {
  .c-offcanvas--left {
    width: 285px;
  }
  .mfp-hide {
    display: none !important;
  }
}
@media only screen and (max-width: 991px) {
  .personaclick-search-results .personaclick-search-wrapper {
    border: none;
    padding-bottom: 80px;
  }
  .navigationRow {
    position: relative;
    height: 0;
    border-bottom: none;
    margin-bottom: 10px;
  }
  .navigationRow:first-child {
    padding: 0 24px;
    height: 100px;
    line-height: 50px;
    border-bottom: 1px solid #707070;
    border-bottom: none;
  }
  body .mdd-menu .nav-header {
    max-width: calc(100% - 115px);
    height: 50px;
  }
  body .mdd-menu .nav-header .nav-brand {
    line-height: 50px;
    float: left;
    max-width: 160px;
  }
  body .mdd-menu .nav-header .nav-brand img {
    max-width: 100%;
  }
  #navigation1 .nav-search input {
    background-color: transparent !important;
  }
  .sk-header-cart-container a .sk-acc-title,
  .sk-header-cart-container a .sk-cart-title,
  .sk-header-cart-container a .sk-wish-title {
    display: none !important;
  }
  body .sk-header-cart-container {
    right: 20px;
    height: 50px;
    line-height: unset;
    width: 115px;
  }
  .sk-header-cart-container a {
    width: 32px;
    height: 32px;
    line-height: 32px;
    padding: 0 !important;
    text-align: center;
    border: none;
    background-color: transparent;
    margin-top: 9px;
    float: left;
  }
  .sk-header-cart-container a:hover {
    border: none;
    background-color: #eee;
  }
  .sk-header-cart-container a span.mdi {
    opacity: 1;
    height: 20px;
    width: 20px;
    background-size: 20px;
    transform: translateY(0);
    margin-left: 2px;
    filter: none;
  }
  .sk-user-setting {
    display: inline-block !important;
  }
  body .sk-user-setting .cart-container .cart-label,
  body .sk-user-setting .wishlist-container .wishlist-label {
    line-height: normal;
    width: 100%;
  }
  body .sk-user-setting #topcartlink .cart-qty {
    top: 6px;
    width: 14px;
    height: 14px;
    line-height: 14px;
    font-size: 9px !important;
  }
  .personaclick-search-box {
    position: unset !important;
  }
  .personaclick-search-results {
    max-width: unset !important;
    width: 100vw;
    left: 0;
    top: unset !important;
    position: fixed;
  }
  .sk-user-account .mdi-account-outline {
    transform: translateY(2px) !important;
  }
  body .mdd-menu .navigation-portrait .nav-search span.mdi.mdi-magnify {
    opacity: 0.5;
  }
  .sk-header-cart-container .mdi:before {
    transform: translateY(-1px) !important;
    font-size: 30px !important;
    width: auto;
  }
  .sk-header-cart-container .shopping-links .mdi:before {
    transform: translateY(-2px) !important;
    font-size: 24px !important;
    width: auto;
  }
  body .mdd-menu .nav-search > form {
    padding-top: 0;
    line-height: 50px;
    height: auto;
  }
  body .mdd-menu .nav-search > form input {
    line-height: 50px !important;
    height: 50px !important;
  }
  body .mdd-menu .nav-toggle {
    border: none !important;
  }
  #navigation1 .nav-search {
    margin: 0;
    height: 49px;
    background-color: #f5f5f5;
    position: absolute;
    top: 50px;
    left: 70px;
    border-top: 1px solid #707070;
    max-width: unset;
    float: unset;
    border: none;
    border-radius: 6px;
    width: calc(100% - 80px);
  }
}
#small-searchterms,
.sk-header-cart-container a {
  border-radius: 6px !important;
}
#back-to-top .mdi-chevron-up {
  background-image: url(https://skcfiles.mncdn.com/webfiles/chevron-up-light.svg);
  height: 26px;
  width: 26px;
  background-size: 26px;
  transform: translateY(0);
}
#back-to-top .mdi-chevron-up::before {
  content: none !important;
  display: none !important;
}
.mdi-set,
.mdi:before {
  display: inline-block;
  font: 24px/1 "Material Design Icons";
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mdi-magnify::before {
  content: "\F349";
}
.mdi-close::before {
  content: "\F156";
}
.mdi-account-outline::before {
  content: "\F013";
}
.mdi-heart-outline::before {
  content: "\F2D5";
}
.mdi-cart-outline::before {
  content: "\F111";
}
.mdi-plus::before {
  content: "\F415";
}
.mdi-filter-variant::before {
  content: "\F236";
}
.mdi-truck-fast::before {
  content: "\F787";
}
.mdi-paw::before {
  content: "\F3E9";
}
.mdi-chevron-up::before {
  content: "\F143";
}
.mdi-tune::before {
  content: "\F62E";
}
.mdi-fire::before {
  content: "\F238";
}
.mdi-phone-outline::before {
  content: "\FDCC";
}
.mdi-heart::before {
  content: "\F2D1";
}
.mdi-account::before {
  content: "\F004";
}
.mdi-chevron-down::before {
  content: "\F140";
}
.mdi-chevron-left::before {
  content: "\F141";
}
.mdi-chevron-right::before {
  content: "\F142";
}
.mdi-export-variant::before {
  content: "\FB6F";
}
.mdi-bell::before {
  content: "\F09A";
}
.mdi-package::before {
  content: "\F3D3";
}
.mdi-cards-heart::before {
  content: "\F8CF";
}
.mdi-information::before {
  content: "\F2FC";
}
.mdi-eye::before {
  content: "\F208";
}
.mdi-play::before {
  content: "\F40A";
}
.mdi-pause::before {
  content: "\F3E4";
}
.mdi-eye-off::before {
  content: "\F209";
}
.mdi-clock::before {
  content: "\F953";
}
.mdi-package-variant::before {
  content: "\F3D6";
}
.captcha-fancybox .fancybox-bg {
  background: #9d9d9d;
}
#captcha-content {
  padding: 40px;
  border-radius: 20px;
}
#captcha-content iframe {
  width: auto;
  height: 78px;
}
#captcha-submit {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  color: #fff;
  border-radius: 6px;
  margin-top: 12px;
  cursor: pointer;
}
html > a {
  display: block;
  margin: auto;
}
.sk-user-account.cl-segment-flag {
  background: linear-gradient(90deg, #9f9362 0, #e5d3ac 50%, #9f9362 100%);
  color: #3e3e3e !important;
}
.sk-user-account.cl-silver-segment-flag {
  background: linear-gradient(
    101.36deg,
    #aaa -19.41%,
    #e3e3e3 26.76%,
    #aaa 64.3%,
    #f5f5f5 126.04%
  );
  color: #3e3e3e !important;
}
.sk-user-account.cl-classic-segment-flag {
  background: #022d56;
  color: #fff !important;
}
.sk-header-cart-container .cl-classic-segment-flag .mdi:before {
  color: #fff !important;
}
.sk-header-cart-container .cl-classic-segment-flag .mdi-account-outline {
  opacity: 1 !important;
}
.sk-header-cart-container a.cl-classic-segment-flag:hover {
  background: #fff;
  color: #022c57 !important;
}
.sk-header-cart-container a.cl-classic-segment-flag:hover .mdi:before {
  color: #022c57 !important;
}
.grecaptcha-badge {
  visibility: hidden;
}
.cl-payment-container-card.disabled #applydiscountcouponcode,
.cl-payment-container-card.disabled #discountcouponcode {
  pointer-events: none;
  opacity: 0.5;
}
</style>
