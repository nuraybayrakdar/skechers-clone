<template>
    <div>
      <div id="VideoBandBanner" class="cl-ad-banner cl-ad-banner-full-width">
        <a href="https://asz4.adj.st?adj_t=jt0vhi5&amp;adj_deep_link=skechersturkiye%3A%2F%2F&amp;adj_campaign=qr-2&amp;adj_adgroup=homepage_banner&amp;adj_fallback=https%3A%2F%2Fwww.skechers.com.tr%2F&amp;adj_redirect_macos=https%3A%2F%2Fwww.skechers.com.tr%2F" class="cl-prom-item viewed" data-id="tag1635342770163" data-name="" data-creative="" data-position="0">
                <picture>
                    <source media="(max-width:991px)" srcset="https://skcfiles.mncdn.com/webfiles/banners/638058281932753044-skc-app-mobile.jpg?v=1670325231">
                    <img class="" src="https://skcfiles.mncdn.com/webfiles/banners/638058281906907325-skc-app-desktop.jpg?v=1670325231" data-src="https://skcfiles.mncdn.com/webfiles/banners/638058281906907325-skc-app-desktop.jpg?v=1670325231">
                </picture>
        </a>
    </div>
      <div id="slider">
        <figure>
          <img class="img-item" src="https://iili.io/HfiqABI.webp" alt="" />
          <img class="img-item" src="https://iili.io/HfiB6V2.webp " alt="" />
          <img class="img-item" src="https://iili.io/HfiqABI.webp" alt="" />
          <img class="img-item" src="https://iili.io/HfiB6V2.webp " alt="" />
          <img class="img-item" src="https://iili.io/HfiqABI.webp" alt="" />
        </figure>
      </div>
    </div>
  </template>
  
  <script>
  export default { name: 'QRandSlider' }
  </script>
  
  <style>
  #VideoBandBanner.cl-ad-banner {
    margin: 0;
}

    #VideoBandBanner.cl-ad-banner.cl-ad-banner-full-width {
        margin: 20px 0px 20px 0px;
    }

#VideoBandBanner.cl-ad-banner img {
    width: 100%;
    aspect-ratio: 1920/180;
    background-color: #f9f6f6;
}

    #VideoBandBanner.cl-ad-banner .cl-mobile-img {
        display: none;
    }

@media only screen and (max-width: 991px) {
   #VideoBandBanner.cl-ad-banner {
        margin: 0;
    }

        #VideoBandBanner.cl-ad-banner.cl-ad-banner-full-width {
            margin: 10px 0px 10px 0px;
        }

        #VideoBandBanner.cl-ad-banner .cl-desktop-img {
            display: none;
        }

       #VideoBandBanner.cl-ad-banner .cl-mobile-img {
            display: block;
        }
        #VideoBandBanner.cl-ad-banner img {
            aspect-ratio: 768/280;
        }
}
  #slider {
    overflow: hidden;
  }
  
  #slider figure {
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    animation: 20s slider infinite;
  }
  
  #slider figure img {
    width: 20%;
    float: left;
  }
  
  @keyframes slider {
    0% {
      left: 0;
    }
  
    20% {
      left: 0;
    }
  
    25% {
      left: -100%;
    }
  
    45% {
      left: -100%;
    }
  
    50% {
      left: -200%;
    }
  
    70% {
      left: -200%;
    }
  
    75% {
      left: -300%;
    }
  
    95% {
      left: -300%;
    }
  
    100% {
      left: -400%;
    }
  }
  </style>
  