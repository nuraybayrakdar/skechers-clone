<template>
    <div>
      <div id="video-band-banner" class="cl-ad-banner cl-ad-banner-full-width">
        <img class="app-qr" src="https://iili.io/HfiKWt2.webp" alt="" />
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
  #video-band-banner.cl-ad-banner.cl-ad-banner-full-width {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  #video-band-banner .app-qr {
    width: 100%;
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
  