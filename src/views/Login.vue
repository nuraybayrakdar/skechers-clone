<template>
    <div class="login-page">
      <form class="login-card active">
        <p class="login-card-header">Üye Girişi</p>
  
        <div class="login-tab-buttons">
          <div class="login-tab-button active" data-target="phone">
            Cep Telefonu ile
          </div>
          <div class="login-tab-button" data-target="mail">E-Posta ile</div>
          <div class="indicator"></div>
        </div>
        <div class="login-tab-contents">
          <div
            class="login-tab-content active custom-input-container"
            data-id="phone"
          >
            <input
              class="form-control phone custom-textbox"
              type="tel"
              placeholder="Telefon"
              data-val="true"
              data-val-regex="Lütfen istenilen formatta giriniz."
              data-val-regex-pattern="([0?)([ ]?)(\(5[0-9]{2}\))([ ]?)([0-9]{3})(\s*[\-]?)([0-9]{2})(\s*[\-]?)([0-9]{2})"
              data-val-required="Telefon numaranızı kontrol ediniz"
              id="Phone"
              name="Phone"
              value=""
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="Phone"
              data-valmsg-replace="true"
            ></span>
          </div>
          <div class="login-tab-content custom-input-container" data-id="mail">
            <input
              type="email"
              class="form-control email custom-textbox"
              placeholder="E-posta"
              data-val="true"
              data-val-length="Email Adresi 6-100 Karakter Olmalıdır!"
              data-val-length-max="100"
              data-val-length-min="6"
              data-val-regex="E-posta değerinin formatı doğru değil."
              data-val-regex-pattern="^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,10}$"
              data-val-required="Mail adresinizi kontrol ediniz"
              id="Email"
              name="Email"
              value=""
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="Email"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
        <div class="login-buttons">
          <div class="continue-button">Devam Et</div>
          <span>- veya -</span>
          <span>Üye değil misin? <a href="/register"> Hemen Üye Ol</a></span>
        </div>
      </form>
  
      <div class="password-card">
        <form
          id="easyPasswordLogin"
          method="post"
          action="/quickEasyPasswordLogin"
        >
          <h2 class="password-card-header">
            <img src="https://skcfiles.mncdn.com/webfiles/chevron-up.svg" />Şifre
            Giriniz
          </h2>
          <input type="hidden" name="Type" id="Type" />
          <input type="hidden" name="Email" id="Email" />
          <input type="hidden" name="Phone" id="Phone" />
          <input type="hidden" name="OtpNotSync" id="OtpNotSync" />
          <div class="custom-input-container">
            <input
              id="Password"
              name="Password"
              type="password"
              class="form-control custom-textbox"
              placeholder="Şifre giriniz"
              data-min="0"
              maxlength="999"
              data-val="true"
              data-val-length="Şifre en az 6 karakter içermelidir."
              data-val-length-max="999"
              data-val-length-min="6"
              data-val-required="Şifre gereklidir."
            />
            <img
              src="https://skcfiles.mncdn.com/webfiles/show-icon.svg"
              class="input-icon toggle-password"
            />
            <span
              style="position: absolute; bottom: -20px; left: 0px"
              class="field-validation-valid"
              data-valmsg-for="LoginPostModel.Password"
              data-valmsg-replace="true"
            ></span>
          </div>
          <div class="login-buttons">
            <div class="login-button">
              <input
                type="submit"
                class="cl-password-login-btn"
                value="GİRİŞ YAP"
              />
            </div>
            <span><a href="/passwordrecovery"> Şifremi Unuttum</a></span>
          </div>
          <input name="__RequestVerificationToken" type="hidden" />
        </form>
      </div>
    </div>
  </template>
  <script>
  export default { name: 'Login' }
  </script>
  <style>
  .login-page,
  .register-page {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .login-card,
  .otp-card,
  .password-card,
  .register-card {
    width: 100%;
    max-width: 432px;
    padding: 0 16px;
    display: none;
  }
  
  .login-card.active,
  .otp-card.active,
  .password-card.active,
  .register-card.active {
    display: block;
  }
  
  .login-card-header,
  .otp-card-header,
  .password-card-header,
  .register-card-header {
    font-size: 18px;
    font-weight: 700;
    margin: 32px 0;
    text-align: center;
    position: relative;
  }
  
  .otp-card-header img,
  .password-card-header img {
    height: 18px;
    transform: rotate(270deg);
    margin-right: auto;
    position: absolute;
    left: 0px;
    top: 2px;
    cursor: pointer;
  }
  
  .otp-card-subheader {
    font-size: 12px;
    margin-bottom: 12px;
    display: block;
    text-align: center;
  }
  
  .login-tab-buttons {
    background-color: #f4f5f6;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    border-radius: 6px;
    position: relative;
  }
  
  .login-tab-buttons .indicator {
    position: absolute;
    height: 34px;
    width: calc(50% - 8px);
    background-color: #fff;
    border-radius: 6px;
    top: 4px;
    left: 4px;
    z-index: 3;
    transition: left 0.3s;
  }
  
  .login-tab-buttons .login-tab-button[data-target="mail"].active ~ .indicator {
    left: calc(50% + 4px);
  }
  
  .login-tab-button {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    z-index: 4;
    cursor: pointer;
  }
  
  .login-tab-button.active {
    font-weight: 700;
  }
  
  .login-tab-contents {
    margin-bottom: 32px;
    height: 68px;
  }
  
  .login-tab-content {
    display: none;
  }
  
  .login-tab-content.active {
    display: block;
  }
  
  .custom-input-container {
    position: relative;
    margin-top: 12px;
  }
  
  .custom-textbox {
    height: 56px;
    border-radius: 6px;
    background-color: #f4f5f6 !important;
    width: 100%;
    border: none;
    padding: 0 16px;
    margin-bottom: 0px;
  }
  
  .custom-textbox.input-validation-error {
    border: 1px solid #d82121;
  }
  
  .login-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .login-buttons > div,
  .login-buttons > input {
    height: 56px;
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
    cursor: pointer;
    border: none;
  }
  
  .login-buttons > div > img {
    width: 24px;
    margin-right: 12px;
  }
  
  .login-buttons > span {
    font-size: 12px;
    color: var(--blue);
    margin-bottom: 16px;
  }
  
  .login-buttons > span > a {
    font-weight: 700;
    color: var(--blue);
    text-decoration: underline;
  }
  
  .login-buttons > div.whatsapp-button {
    background-color: #2dd26e;
  }
  
  .otp-card .custom-input-container,
  .password-card .custom-input-container,
  .register-card .form-group {
    margin-bottom: 32px;
    position: relative;
  }
  
  .cl-toast-container {
    text-align: left;
  }
  
  .cl-toast-container span {
    font-size: 13px;
  }
  
  .input-icon {
    position: absolute;
    right: 16px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    width: 20px;
    cursor: pointer;
  }
  
  #register-form .form-group > span {
    position: absolute;
    font-size: 10px;
    bottom: -14px;
    line-height: 12px;
    left: 0px;
  }
  
  #register-form .form-group > span.field-validation-error {
    color: #d82121;
  }
  
  .captcha-box > div > div > div {
    margin: auto;
  }
  
  .cl-custom-checkbox-container {
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    width: 100%;
  }
  
  .cl-custom-checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .cl-custom-checkbox-container .text {
    color: #707070;
    font-size: 10px;
    line-height: 13px;
    display: block;
    margin-left: 34px;
  }
  .cl-custom-checkbox-container .text a {
    color: #707070;
    font-weight: 700;
  }
  .cl-custom-checkbox-container .cl-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #fff;
    border: 1px solid #bcbcbc;
    border-radius: 3px;
  }
  
  .cl-custom-checkbox-container .cl-checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 8px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  .cl-custom-checkbox-container input:checked ~ .cl-checkmark:after {
    display: block;
  }
  
  .cl-easy-submit-btn,
  .cl-password-login-btn {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #fff;
    border-radius: 6px;
    border: none;
  }
  .cl-easy-otp-time-left {
    text-align: center;
    margin-bottom: 16px;
  }
  .cl-easy-login.disabled {
    pointer-events: none;
    color: #707070 !important;
    opacity: 0.65;
  }
  .cl-easy-resend-btn {
    cursor: pointer;
    font-weight: 700;
    color: var(--blue);
    text-decoration: underline;
  }
  .cl-easy-resend-btn.disabled {
    pointer-events: none;
    color: #707070 !important;
    opacity: 0.5;
  }
  .message-error,
  .message-error ul li {
    text-align: center;
    margin: 10px;
  }
  .cl-easy-login-password {
    padding: 10px 20px;
    background-color: var(--blue);
    border-radius: 6px;
    color: #fff;
  }
  .cl-easy-login-password.disabled {
    display: none;
  }
  input.cl-password-login-btn:disabled {
    background-color: #5b7692;
  }
  .cl-easy-login-password {
    cursor: pointer;
  }
  .field-validation-error,
  .field-validation-valid {
    color: #d82121;
    font-size: 10px;
    line-height: 18px;
  }
  .cl-invalid-input,
  .cl-invalid-input:focus {
    color: #d82121 !important;
    border: 1px solid #d82121 !important;
  }
  .cl-remember-me {
    margin-bottom: 32px;
  }
  
  .cl-remember-me .cl-login-checkbox-label {
    color: #707070;
    font-size: 10px;
    line-height: 13px;
    display: block;
    margin-left: 28px;
  }
  
  .cl-remember-me label.cl-login-checkbox-container {
    position: absolute;
  }
  
  .cl-remember-me label.cl-login-checkbox-container input {
    height: 22px;
    width: 22px;
    border-color: #bcbcbc;
    color: #bcbcbc;
  }
  
  .cl-custom-checkbox-container .cl-checkmark {
    border: 1px solid #343a40 !important;
  }
  .custom-checkbox,
  #register-form > .row {
    margin: 0px;
    padding: 0px;
  }
  #register-form > .row {
    margin-bottom: 32px;
  }
  .custom-checkbox .custom-control-description {
    color: #707070;
    font-size: 10px;
    line-height: 13px;
    display: block;
    margin-left: 34px;
  }
  .custom-checkbox .custom-control-description a {
    color: #707070;
    font-weight: 700;
    position: relative;
  }
  .custom-checkbox input {
    display: none;
  }
  
  label.custom-checkbox .custom-control-label:before {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #fff !important;
    border: 1px solid #343a40 !important;
    border-radius: 3px;
  }
  
  label.custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label:after {
    content: "";
    position: absolute;
    display: block;
    left: 8px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  </style>
  