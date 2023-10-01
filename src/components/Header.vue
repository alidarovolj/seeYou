<template>
  <div class="relative z-[1000] container mx-auto px-4 lg:px-0 bg-none mb-5 py-[30px]">
    <div class="flex items-center justify-between">
      <img src="@/assets/img/logo.png" alt="">
      <div class="hidden lg:flex items-center text-white w-1/3 justify-between">
        <router-link to="/">Главная</router-link>
        <router-link to="/">Услуги</router-link>
        <router-link to="/">Портфолио</router-link>
        <router-link to="/">О нас</router-link>
        <router-link to="/">Контакты</router-link>
      </div>
      <div class="flex">
        <font-awesome-icon style="box-shadow: 0px 0px 15px 3px rgba(189, 0, 255, 0.25);" class="rounded-lg p-2 bg-mainColor text-white"
                           :icon="['fas', 'phone']"/>
        <p class="w-max bg-mainColor py-1 px-3 rounded text-white ml-4">Заказать сайт</p>
      </div>
    </div>
    <div class="flex lg:hidden items-center text-white w-full justify-between">
      <a href="#main">Главная</a>
      <a href="#services">Услуги</a>
      <a href="#portfolio">Портфолио</a>
      <a href="#about">О нас</a>
      <a href="#contacts">Контакты</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>