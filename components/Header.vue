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
               <div>

               </div>
                <!-- Header buttons Start -->

                <div>

                </div>
              </div>
              <div class="navigationRow cl-navigation-row">
                <!-- Main Menus Wrapper -->

                <nav id="menu" class="desktop">
                  <div class="menu-sections">
                    <div class="menu-main-section">
                      <ul>
                        <li>
                          <a
                            class="main-category"
                            href="/kadin-c-1"
                            data-id="kadin"
                            >KADIN</a
                          >
                        </li>
                        <li class="viewed">
                          <a
                            class="main-category"
                            href="/erkek-c-2"
                            data-id="erkek"
                            >ERKEK</a
                          >
                        </li>
                        <li>
                          <a
                            class="main-category"
                            href="/cocuk-c-3"
                            data-id="cocuk"
                            >ÇOCUK</a
                          >
                        </li>
                        <li>
                          <a
                            class="main-category"
                            href="/koleksiyonlar-c-4"
                            data-id="koleksiyonlar"
                            >KOLEKSİYONLAR</a
                          >
                        </li>
                        <li>
                          <a
                            class="main-category"
                            href="/spor-giyim-c-6100"
                            data-id="spor-giyim"
                            >SPOR GİYİM</a
                          >
                        </li>
                        <li>
                          <a
                            class="main-category"
                            href="/herkes-icin-skechers-c-8072"
                            data-id="herhes"
                            >HERKES İÇİN SKECHERS
                          </a>
                        </li>
                        <li>
                          <a
                            class="color1 main-category"
                            href="/sezon-indirimi-c-7001"
                            data-id="indirim"
                            >İNDİRİM</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<style>
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
.mdd-menu {
  border-bottom: 1px solid #ebebeb;
  min-height: 72px;
}
.container-fluid {
  padding-left: 50px;
  padding-right: 50px;
}
.mdd-menu .navigation {
  width: 100%;
  height: 70px;
  display: table;
  position: relative;
  font-family: inherit;
  background-color: #fff;
}
.mdd-menu .navigation * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.navigationRow:first-child {
  padding: 0 50px;
  height: 90px;
  line-height: 90px;
}
.navigationRow {
  border-bottom: 1px solid #eee;
  height: 50px;
  line-height: 50px;
  max-width: 100vw;
}

#navigation1 .nav-search {
  display: block;
  border: none;
  float: left;
}
.mdd-menu .nav-brand {
  padding: 0;
  color: #343a40;
  font-size: 24px;
  text-decoration: none !important;
}
.mdd-menu .nav-brand {
  line-height: 90px;
}
.mdd-menu .nav-brand img {
  width: 50%;
  min-width: 180px;
  aspect-ratio: 6.1;
  margin-top: -10px;
}
@media screen and (max-width: 991px) {
  .hide-on-mobile {
    display: none !important;
  }

  .menu-active #TopBanner {
    display: none;
  }
}
@media screen and (min-width: 992px) {
  .menu-main-section > ul > li > a {
    font-family: Mulish,sans-serif;
    color: #262626;
    background-image: none;
    border-right: 1px solid #eee;
    margin: 16px 0;
    font-size: 13px;
    font-weight: 300;
    line-height: 26px;
  }
  #menu ul li {
    width: 14.28%;
    display: inline-block;
    text-align: center;
  }
}
a, a:active, a:focus, a:hover, button:focus, ul {
    text-decoration: none;
    outline: 0;
    list-style-type: none;
}
#menu ul{
    display: flex;
    text-align: center;
}
.menu-main-section{
    display: contents;
}
#menu .menu-main-section > ul > li > a {
    justify-content: center;
    text-decoration: none;
  line-height: 48px;
  font-size: 14px;
  font-weight: 300;
  background-position: right center;
  background-size: 16px;
  background-repeat: no-repeat;
  display: flex;
  font-family: Mulish,sans-serif;
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

#navigation1 .nav-search {
  margin: 0 60px;
  height: 90px;
  width: 600px;
  max-width: calc(100% - 600px);
  transition: 0.2s;
}

#navigation1 .nav-header,
#navigation1 .nav-search {
  display: block;
  border: none;
  float: left;
}
.mdd-menu .nav-search {
  height: 70px;
  float: right;
  z-index: 1040;
  width: 280px;
  position: relative;
}

.sk-header-cart-container {
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
.sk-header-cart-container .sk-user-account {
  line-height: 36px;
  display: inline-block;
  position: relative;
  top: 0;
  font-size: 12px;
  color: #262626;
  padding: 0 0 0 15px;
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
.navigationRow:first-child {
  padding: 0 50px;
  height: 90px;
  line-height: 90px;
}
.navigationRow {
  border-bottom: 1px solid #eee;
  height: 40px;
  line-height: 40px;
  max-width: 100vw;
}
@media screen and (min-width: 992px) {
  .navigationRow.cl-navigation-row {
    display: contents;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 991px) {
  .hide-on-mobile {
    display: none !important;
  }

  .menu-active #TopBanner {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .cl-slider-container .cl-slider-tab-buttons {
    width: calc(100vw - 30px) !important;
  }
}

.grecaptcha-badge {
  visibility: hidden;
}

.sub-category-body > div[data-width="33"] {
  width: 33%;
}

.sub-category-body > div[data-width="33"]:last-child {
  width: 34%;
}

@media only screen and (max-width: 767px) {
  .cl-slider-container .cl-slider-tab-buttons {
    width: calc(100vw - 30px) !important;
  }
}

.grecaptcha-badge {
  visibility: hidden;
}

.sub-category-body > div[data-width="33"] {
  width: 33%;
}

.sub-category-body > div[data-width="33"]:last-child {
  width: 34%;
}
</style>
