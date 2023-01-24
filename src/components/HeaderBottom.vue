<template>
  <nav id="menu" class="desktop">
    <div class="menu-header">
      <div>Tüm Kategoriler</div>
    </div>
    <div class="menu-sections">
      <div class="menu-main-section">
        <ul>
          <li>
            <RouterLink
              class="main-category"
              to="/products"
              data-id="kadin"
              >KADIN</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="main-category"
              to="/products"
              data-id="kadin"
              >ERKEK</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="main-category"
              to="/products"
              data-id="kadin"
              >ÇOCUK</RouterLink
            >

            <div class="sub-categories" data-target="cocuk"></div>
          </li>
          <li>
            <RouterLink
            class="main-category"
            to="/products"
            data-id="kadin"
            >KOLEKSİYONLAR</RouterLink
          >
          </li>
          <li>
            <RouterLink
            class="main-category"
            to="/products"
            data-id="kadin"
            >SPOR GİYİM</RouterLink
          >
          </li>
          <li>
            <RouterLink
              class="main-category"
              to="/products"
              data-id="kadin"
              >HERKES İÇİN SKECHERS</RouterLink
            >
          </li>
          <li>
            <RouterLink
            class="main-category"
            to="/products"
            data-id="kadin"
            >İNDİRİM</RouterLink
          >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.sub-category-body .sub-category span,
.sub-category-tab-buttons .sub-category-header span {
  font-size: 10px;
  color: var(--blue);
  text-align: center;
}
body.menu-active,
body.search-active {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
#menu ul ul,
.hide,
.hide-on-mobile,
.sub-categories.no-sub-category .sub-category-tab-buttons,
.sub-category-body .sub-category-list {
  display: none;
}
.color1 {
  color: #d52222 !important;
}
.color2 {
  color: #32aa22 !important;
}
#menu {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 110px);
  overflow: hidden;
  pointer-events: none;
  left: 0;
  right: auto;
  background-color: #fff;
  -webkit-transition: opacity 0s linear 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.2s linear 0.4s, -webkit-transform 0.4s;
  -o-transition: opacity 0.2s linear 0.4s, transform 0.4s;
  -webkit-transform: translateX(-100vw);
  transform: translateX(-100vw);
}
#menu.active {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  pointer-events: all;
}
#menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#menu ul a {
  color: var(--blue);
}
#menu ul li {
  width: calc(100vw - 24px);
}
#menu .menu-sections {
  width: 200vw;
  height: calc(100% - 57px);
  display: flex;
}
#menu .menu-main-section,
#menu .menu-side-section {
  width: 100vw;
  background-color: #fff;
  padding: 0 12px;
  position: relative;
  overflow: auto;
  transition: transform 0.4s;
  order: 1;
  z-index: 9;
  max-height: 100%;
}
#menu .menu-side-section {
  order: 2;
  z-index: 10;
  padding: 0;
}
#menu .menu-header {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 8px;
  margin: 0 12px;
}
#menu .menu-header div {
  font-size: 16px;
  line-height: 48px;
  color: var(--blue);
  font-weight: 700;
  margin: 0;
  background-size: 0;
  transition: padding 0.4s, background-size 0.4s;
}
#menu .menu-header div.back-button {
  padding-left: 20px;
  background-image: url(https://skcfiles.mncdn.com/webfiles/chevron-left.svg);
  background-position: left center;
  background-size: 12px;
  background-repeat: no-repeat;
  cursor: pointer;
}
#menu .menu-main-section > ul > li > a {
  line-height: 48px;
  font-size: 14px;
  font-weight: 600;
  background-image: url(https://skcfiles.mncdn.com/webfiles/chevron-right.svg);
  background-position: right center;
  background-size: 16px;
  background-repeat: no-repeat;
  display: block;
  font-family: HeaderMulish;
}
#menu .menu-side-section.active {
  transform: translateX(-100%);
}
#menu .menu-side-section.active ~ .menu-main-section {
  transform: translateX(20%);
}
#menu .menu-side-section .sub-categories {
  display: none;
  height: 100%;
}
#menu .menu-side-section .sub-categories.active {
  display: flex;
}
.sub-category-tab-buttons {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 84px;
  background-color: #fff;
}
.sub-category-body,
.sub-category-body > div,
.sub-category-tab-buttons .sub-category-header.active {
  background-color: #f4f5f6;
}
.sub-category-tab-buttons .sub-category-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-bottom: 1px solid #f4f5f6;
  cursor: pointer;
}
.sub-category-tab-buttons .sub-category-header img {
  height: 44px;
  margin-bottom: 6px;
}
.sub-category-tab-button .sub-category-header.active span {
  font-weight: 600;
}
.sub-category-body {
  width: 100%;
  padding: 8px 0;
}
.sub-category-body > div {
  padding: 8px;
}
.sub-category-body .sub-category-list.active {
  display: flex;
  flex-wrap: wrap;
}
.sub-category-body .sub-category {
  background-color: #fff;
  padding: 8px;
  height: 80px;
  width: calc(33% - 8px);
  margin: 4px;
}
.sub-category-body .sub-category a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.sub-category-body .sub-category img {
  height: 38px;
  margin-bottom: auto;
}
.sub-category-body .sub-category span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sub-categories .sub-category-body .sub-category:last-child {
  margin-bottom: 120px !important;
}
.sub-categories.no-sub-category .sub-category-body,
.sub-categories.no-sub-category .sub-category-body > div {
  background-color: #fff;
}
.sub-categories.no-sub-category .sub-category-body .sub-category {
  width: 100%;
  border-bottom: 1px solid #f4f5f6;
  background-image: url(/Themes/DefaultClean/Content/images/chevron-right.svg);
  background-position: right center;
  background-size: 16px;
  background-repeat: no-repeat;
  height: auto;
  padding: 0;
  margin: 0;
}
.sub-categories.no-sub-category .sub-category-body .sub-category a {
  flex-direction: row;
  height: 50px;
}
.sub-categories.no-sub-category .sub-category-body .sub-category img {
  height: 44px;
  margin: 0 20px 0 auto;
  order: 2;
}
.sub-categories.no-sub-category
  .sub-category-body
  .sub-category.all-products
  img {
  opacity: 0;
}
.sub-categories.no-sub-category .sub-category-body .sub-category span {
  font-size: 12px;
  font-weight: 600;
  -webkit-line-clamp: 1;
  order: 1;
}
@media screen and (min-width: 992px) {
  #menu,
  #menu .menu-sections,
  #menu .sub-categories {
    width: 100vw;
    max-width: 1920px;
  }
  #menu,
  .sub-category-body > div {
    position: relative;
    background-color: #fff;
  }
  .hide-on-mobile {
    display: block;
  }
  .hide-on-desktop {
    display: none !important;
  }
  #menu .menu-header,
  #menu .menu-side-section,
  #menu li.before-seperator::before,
  .sub-category-body .sub-category img,
  .sub-category-header img {
    display: none;
  }
  #menu {
    height: 100%;
    overflow: visible;
    pointer-events: auto;
    left: unset;
    right: unset;
    transform: none;
  }
  #menu .menu-main-section {
    padding: 0;
    max-height: unset;
    overflow: visible;
  }
  #menu .menu-main-section ul {
    display: table;
    float: none;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    line-height: normal;
    font-size: 0;
    width: 100%;
  }
  #menu ul li {
    width: 14.28%;
    display: inline-block;
    text-align: center;
  }
  #menu .menu-main-section > ul > li > a {
    font-family: Mulish, sans-serif;
    background-image: none;
    border-right: 1px solid #eee;
    margin: 16px 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 26px;
  }
  #menu .menu-main-section > ul > li:last-child > a {
    border: none;
  }
  #menu .sub-categories {
    position: absolute;
    display: none;
    left: 0;
    background-color: #fff;
    height: 435px;
    box-shadow: 0 15px 20px 0 rgb(0 0 0 / 15%) !important;
    overflow: hidden;
    padding: 0 30px;
  }
  .sub-category-body .sub-category-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 300px;
  }
  #menu ul li.active .sub-categories {
    display: block;
    border-top: 1px solid #eee;
  }
  .sub-category-body {
    display: flex;
    height: calc(100% - 35px);
    background-color: #fff;
    margin-top: 35px;
  }
  .sub-category-body > div {
    width: 20%;
    border-right: 1px solid #eee;
    padding: 4px 20px;
    height: 340px;
  }
  .sub-category-body > div[data-width="25"] {
    width: 25%;
  }
  .sub-category-body > div[data-width="30"] {
    width: 30%;
  }
  .sub-category-body > div[data-width="40"] {
    width: 40%;
  }
  .sub-category-body > div[data-width="50"] {
    width: 50%;
  }
  .sub-category-body > div[data-width="60"] {
    width: 60%;
  }
  .sub-category-body > div[data-width="70"] {
    width: 70%;
  }
  .sub-category-body > div[data-width="75"] {
    width: 75%;
  }
  .sub-category-body > div[data-width="80"] {
    width: 80%;
  }
  .sub-category-body > div:last-child {
    border-right: none;
  }
  .sub-category-body > div > .menu-banner {
    margin: 10px 0;
    display: block;
  }
  .sub-category-body > div > .menu-banner img {
    width: 100%;
  }
  .sub-category-body > div.banner-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .sub-category-body > div.banner-group .menu-banner {
    margin: 10px;
    width: calc(50% - 20px);
    max-width: 125px;
  }
  .sub-category-body > div.banner-group .menu-banner:first-child,
  .sub-category-body > div.banner-group .menu-banner:nth-child(2) {
    margin-top: 0;
  }
  .sub-category-body .sub-category a {
    font-size: 14px;
    display: block;
    color: #262626;
  }
  .sub-category-body .sub-category {
    padding: 0;
    height: auto;
    margin: 0;
    width: 100%;
    text-align: left;
    display: block;
  }
  .sub-category-body .sub-category.bold {
    font-weight: 900;
  }
  .sub-category-body .sub-category.all-products {
    position: absolute !important;
    bottom: -8px !important;
    left: 20px !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    background-color: transparent !important;
  }
  .sub-category-body .sub-category.all-products span {
    font-weight: 900 !important;
  }
  .sub-category-body .sub-category:hover {
    text-decoration: underline !important;
  }
  .sub-category-body > div[data-width="30"] .sub-category {
    width: 100% !important;
  }
  .sub-category-body > div[data-width="40"] .sub-category,
  .sub-category-body > div[data-width="50"] .sub-category {
    width: 50% !important;
  }
  .sub-category-body > div[data-width="60"] .sub-category {
    width: 33.33% !important;
  }
  .sub-category-body > div[data-width="70"] .sub-category,
  .sub-category-body > div[data-width="75"] .sub-category,
  .sub-category-body > div[data-width="80"] .sub-category {
    width: 25% !important;
  }
  .sub-category-body .sub-category span {
    text-align: left;
    font-size: 12px;
    line-height: 26px;
    color: #000;
  }
  .sub-category-header span {
    display: flex;
    font-size: 12px;
    font-weight: 900;
    color: #000;
    margin-bottom: 12px;
  }
  .sub-categories.no-sub-category .sub-category-body .sub-category {
    all: unset;
  }
  .sub-categories.no-sub-category .sub-category-body .sub-category a {
    height: auto;
  }
  .sub-categories.show-images-on-desktop .sub-category-body .sub-category a {
    flex-direction: column;
  }
  .sub-categories.show-images-on-desktop
    .sub-category-body
    .sub-category
    a
    img {
    width: auto;
    height: 100%;
    max-height: 110px;
    display: block;
    margin: 0;
    order: 2;
  }
  .sub-categories.show-images-on-desktop
    .sub-category-body
    .sub-category
    a
    span {
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sub-category-body .sub-category.all-products > img {
    display: block;
    height: 140px;
  }
  .sub-categories .sub-category-body .sub-category:last-child {
    margin-bottom: 0 !important;
  }
  .cl-menu-image-align {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
@media screen and (max-width: 991px) {
  .personaclick-search-results {
    display: none;
  }
  body.search-active .personaclick-search-results {
    display: block;
  }
  .sub-category-body > div {
    padding: 0;
  }
  .sub-category-body .sub-category-list {
    display: none;
    padding: 8px;
  }
  #menu .menu-header {
    border-bottom: none;
  }
  .sub-category-body .sub-category-list.active {
    margin-left: 8px;
  }
  #menu .menu-main-section ul li a {
    font-family: Mulish, sans-serif;
    background-image: none;
    border-right: 1px solid #eee;
    margin: 16px 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 26px;
  }
}
</style>
