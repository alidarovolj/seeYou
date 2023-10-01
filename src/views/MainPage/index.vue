<template>
  <div class="container mx-auto px-4 lg:px-0 text-white">
    <div id="main" class="relative">
      <img class="w-full lg:w-[70%] absolute left-1/2 top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 -translate-x-1/2 h-auto" src="@/assets/img/mainPage/heroBg.png"
           alt="">
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[140px]"
           style="background: #BB86FC; filter: blur(281px);"></div>
      <div class="py-28 relative z-50 w-full lg:w-[70%] mx-auto">
        <h1 class="text-2xl lg:text-[66px] font-bold text-white text-center mx-auto benz mb-3 lg:mb-0">Создадим ваш бизнес в цифровом мире!</h1>
        <p class="text-xl lg:text-4xl font-medium text-white text-center">Разработка сайтов любой сложности исходя из Ваших
          потребностей</p>
      </div>
    </div>
    <div id="services" class="relative z-20 mb-36">
      <div class="flex items-end justify-between mb-7">
        <h2 class="text-xl lg:text-5xl font-benzin font-black">Услуги</h2>
        <p class="text-sm lg:text-2xl">Почему стоит к нам обратиться</p>
      </div>
      <div class="block lg:flex justify-between">
        <div class="w-full lg:w-2/3 flex flex-wrap justify-between mr-5">
          <div
              class="w-full block lg:flex justify-end relative bg-blockBg pb-6 pt-7 px-6 rounded-2xl text-end mb-5 overflow-y-hidden h-full lg:h-auto">
            <img class="relative lg:absolute left-2 bottom-0 h-1/2 lg:h-[110%] z-20" src="@/assets/img/mainPage/blocks/1.png" alt="">
            <div style="border-radius: 333px; background: #BB86FC; filter: blur(74px);"
                 class="w-1/2 absolute left-20 top-1/2 -translate-y-1/2 h-full "></div>
            <div class="w-full lg:w-[50%] h-1/2 lg:h-auto relative z-20">
              <h3 class="font-benzin text-xl lg:text-2xl font-bold mb-4">Разработка сайтов</h3>
              <p class="mb-6 text-xl font-medium">Создание и разработка сайтов в Астане (Нур-Султане) с индивидуальным
                дизайном по доступным ценам</p>
              <div class="flex justify-end">
                <p class="py-3 px-6 bg-mainColor rounded text-white w-max">Заказать сайт</p>
              </div>
            </div>
          </div>
          <div
              class="w-full lg:w-half flex justify-end relative bg-blockBg pb-6 pt-7 px-6 rounded-2xl text-end overflow-y-hidden mb-5 lg:mb-0">
            <img class="absolute left-0 bottom-0 z-20" src="@/assets/img/mainPage/blocks/2.png" alt="">
            <div style="border-radius: 333px; background: #BB86FC; filter: blur(74px);"
                 class="w-1/2 absolute left-0 bottom-0 translate-y-1/2 h-full "></div>
            <div class="w-[80%] relative z-20">
              <h3 class="font-benzin text-2xl font-bold mb-4">Продвижение сайтов</h3>
              <p class="mb-6 text-xl font-medium">Эффективное продвижение вашего веб-сайта в Астане. Среди наших услуг
                по продвижению сайта - Контекстная реклама и SEO продвижение.</p>
            </div>
          </div>
          <div class="w-full lg:w-half flex relative bg-blockBg pb-6 pt-7 px-6 rounded-2xl overflow-hidden mb-5 lg:mb-0">
            <img class="absolute right-0 bottom-0 z-20" src="@/assets/img/mainPage/blocks/3.png" alt="">
            <div style="border-radius: 333px; background: #BB86FC; filter: blur(74px);"
                 class="w-1/2 absolute left-0 top-0 -translate-y-1/2 h-full "></div>
            <div class="w-[80%] relative z-20">
              <h3 class="font-benzin text-2xl font-bold mb-4">SEO-оптимизация</h3>
              <p class="mb-6 text-xl font-medium">Раскрутка сайтов в поисковых системах — самый выгодный и надежный
                способ привлечения целевого трафика. Увеличим Ваши продажи, количество звонков и заказов с сайта за счет
                вывода Вашего сайта в ТОП-10 Яндекса и Google.</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 h-full lg:h-auto bg-blockBg flex flex-col py-12 px-10 rounded-2xl mb-5 lg:mb-0">
          <h3 class="font-benzin text-2xl font-bold mb-4">Техподдержка сайтов</h3>
          <p class="mb-6 text-xl font-medium">Регулярное обновление сайта, обеспечение сайта стабильной работой и
            контроль за безопасностью сайта в Астане.</p>
          <img class="static lg:absolute right-0 bottom-0 z-20" src="@/assets/img/mainPage/blocks/4.png" alt="">
          <div style="border-radius: 333px; background: #BB86FC; filter: blur(74px);"
               class="w-1/2 absolute right-0 bottom-0 h-[300px] w-[300px]"></div>
        </div>
      </div>
    </div>
    <div id="portfolio" class="relative z-20 mb-36">
      <div class="mb-9 text-center relative">
        <h2 class="text-3xl lg:text-5xl font-black mb-3">UniFreightCo</h2>
        <p class="text-sm lg:text-xl font-medium">UniFreight — это компания по управлению грузоперевозками, профессионально
          управляемая командой экспертов с глубокими знаниями во всех аспектах глобального управления
          грузоперевозками</p>
        <div style="background: #BB86FC; filter: blur(281px);" class="w-full h-36 absolute left-0 top-0"></div>
      </div>
      <div class="flex justify-center relative">
        <div class="w-[90%] relative overflow-hidden">
          <img class="w-full" src="@/assets/img/mainPage/portfolio/1.png" alt="">
          <carousel :breakpoints="breakpoints" v-bind="settings"
                    class="absolute z-10 top-2 left-1/2 -translate-x-1/2 w-[77%]">
            <slide v-for="slide in 10" :key="slide">
              <img class="w-full" src="@/assets/img/mainPage/portfolio/2.png" alt="">
            </slide>

            <template #addons>
              <navigation/>
            </template>
          </carousel>
        </div>
        <div style="background: #BB86FC; filter: blur(281px);"
             class="w-full h-36 absolute left-0 top-1/2 -translate-y-1/2"></div>
        <div style="background: #BB86FC; filter: blur(281px);" class="w-full h-36 absolute left-0 bottom-0"></div>
      </div>
    </div>
  </div>
  <div id="about" class="relative mb-36 text-white">
    <img class="absolute right-0 -top-36" src="@/assets/img/mainPage/bg.png" alt="">
    <div class="relative z-20">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="mb-7">
          <h2 class="text-xl lg:text-3xl lg:text-5xl font-benzin font-black mb-5">Сотрудничаем с ведущими компаниями</h2>
          <p class="text-sm lg:text-2xl">У нас есть все необходимое для запуска и развития вашего бизнеса</p>
        </div>
        <div class="block lg:flex justify-between">
          <div class="w-full lg:w-[39%]">
            <p @click="activeBlock = index"
               class="text-2xl font-bold text-blockBg mb-5 pb-1 border-b border-blockBg transition-all cursor-pointer"
               :class="{ '!text-activeBlock border-activeBlock' : index === activeBlock }"
               v-for="(item, index) of works"
               :key="index">{{ item.title }}</p>
          </div>
          <div class="w-full lg:w-[60%]">
            <div class="px-10 lg:px-16 py-10 lg:py-14"
                 style="border-radius: 15px; background: #3E2F51; box-shadow: 4px 4px 16px 0px rgba(147, 94, 205, 0.50) inset;">
              <div class="flex items-end w-4/5 mx-auto mb-8 justify-center">
                <img class="h-32 w-auto object-contain" :src="works[activeBlock].img" alt="">
              </div>
              <p class="text-2xl lg:text-3xl font-bold text-start lg:text-center">{{ works[activeBlock].title_full }}</p>
              <p class="text-base lg:text-xl text-start lg:text-center">{{ works[activeBlock].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="contacts" class="relative mb-36 text-white">
    <img class="absolute right-0 -top-36" src="@/assets/img/mainPage/bg.png" alt="">
    <div class="relative z-20">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="mb-7">
          <h2 class="text-xl lg:text-5xl font-benzin font-black mb-5">Этапы создания сайта</h2>
          <p class="text-sm lg:text-2xl">У нас есть все необходимое для запуска и развития вашего бизнеса</p>
        </div>
        <div class="hidden justify-between lg:flex">
          <div @mouseover="activeStep = index" class="flex" v-for="(item, index) of steps" :key="index">
            <p style="text-orientation: mixed; writing-mode: vertical-lr;"
               class="bg-mainColor text-end text-2xl font-black font-benzin px-7 py-9 rounded-2xl">{{ item.title }}</p>
            <div class="flex items-center justify-center">
              <p class="overflow-x-hidden flex items-center overflow-y-hidden py-16 w-0 text-2xl rounded-r-2xl"
                 :class="{ 'w-[255px] pr-5 pl-8 bg-blockBg h-[95%]' : activeStep === index }"><span>{{
                  item.description
                }}</span></p>
            </div>
          </div>
        </div>
        <div class="justify-between block lg:hidden">
          <div class="flex mb-5" v-for="(item, index) of steps" :key="index">
            <p style="text-orientation: mixed; writing-mode: vertical-lr;"
               class="bg-mainColor text-end text-xl font-black font-benzin px-7 py-9 rounded-2xl">{{ item.title }}</p>
            <div class="flex items-center justify-center">
              <p class="overflow-x-hidden flex items-center overflow-y-hidden py-16 text-lg rounded-r-2xl w-full pr-5 pl-8 bg-blockBg h-[95%]"><span>{{
                  item.description
                }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative z-20 text-white">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="mb-5">
        <h2 class="text-xl lg:text-5xl font-benzin font-black mb-5">Оставить заявку</h2>
        <p class="text-sm">Оставьте информацию о себе, мы перезвоним вам чтобы узнать детали</p>
      </div>
      <div class="block lg:flex justify-between">
        <div class="w-full lg:w-half bg-blockBg rounded-[20px] p-10 flex flex-col justify-between relative overflow-hidden mb-3 lg:mb-0">
          <div style="border-radius: 494px; opacity: 0.5; background: #BB86FC; filter: blur(157px);"
               class="w-[400px] h-[400px] absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2"></div>
          <p class="text-xl lg:text-4xl font-semibold">Начать сотрудничество – проще простого</p>
          <div>
            <p class="text-lg lg:text-xl mb-3">+7 775 288 88 33</p>
            <p class="text-lg lg:text-xl mb-3">+7 707 874 55 44</p>
            <p class="text-lg lg:text-xl">info@xbase.kz</p>
          </div>
        </div>
        <div class="w-full lg:w-half flex flex-col mb-3 lg:mb-0">
          <div class="mb-4">
            <p class="text-lg mb-1">Имя</p>
            <input class="p-4 rounded-[10px] bg-[#FCF8FF] w-full" type="text" placeholder="Ваше имя">
          </div>
          <div class="mb-4">
            <p class="text-lg mb-1">Название </p>
            <input class="p-4 rounded-[10px] bg-[#FCF8FF] w-full" type="text" placeholder="Название вашей организаций">
          </div>
          <div class="mb-4">
            <p class="text-lg mb-1">Телефон</p>
            <input class="p-4 rounded-[10px] bg-[#FCF8FF] w-full" type="text" placeholder="+7 777 777 77 77">
          </div>
          <div>
            <p class="text-lg mb-1">Описание проекта</p>
            <textarea cols="80" class="p-4 rounded-[10px] bg-[#FCF8FF] w-full"
                      placeholder="Описание проекта"></textarea>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <p class="w-max bg-mainColor text-white px-[60px] py-5 rounded-2xl text-3xl font-semibold">Отправить</p>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Slide} from 'vue3-carousel'

export default {
  name: "MainPage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    useMeta({title: "Главная"});
  },
  data() {
    return {
      activeBlock: 0,
      activeStep: 0,
      steps: [
        {
          id: 1,
          title: "СБОР ИНФОРМАЦИИ",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 2,
          title: "ТЕХ. ЗАДАНИЕ",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 3,
          title: "ПРОЕКТИРОВАНИЕ",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 4,
          title: "ДИЗАЙН",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 5,
          title: "ВЕРСТКА",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 6,
          title: "КОДИРОВАНИЕ",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 7,
          title: "АДМИН ПАНЕЛЬ",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 8,
          title: "ЗАПУСК САЙТА",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
        {
          id: 9,
          title: "ПОДДЕРЖКА",
          description: "Половина успеха любого заметного сервиса связана с аналитикой,потому что она позволяет ещё на этапе идеи и прототипа понять, что ждётваш продукт после запуска, как избежать серьезных ошибок и дойти до цели."
        },
      ],
      works: [
        {
          name: "У нас есть все необходимое для запуска и развития вашего бизнеса",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/40/AllurLogo.png",
          title: "AllurGroup",
          title_full: "Allur - крупнейшая автомобильная компания Казахстана",
          description: "Производим и реализуем автомобили для личного пользования и бизнеса. Способствуем развитию городской мобильности, оснащая страну общественным и специализированным транспортом."
        },
        {
          name: "У нас есть все необходимое для запуска и развития вашего бизнеса",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/40/AllurLogo.png",
          title: "AllurGroup",
          title_full: "Allur2 - крупнейшая автомобильная компания Казахстана",
          description: "Производим и реализуем автомобили для личного пользования и бизнеса. Способствуем развитию городской мобильности, оснащая страну общественным и специализированным транспортом."
        },
        {
          name: "У нас есть все необходимое для запуска и развития вашего бизнеса",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/40/AllurLogo.png",
          title: "AllurGroup",
          title_full: "Allur3 - крупнейшая автомобильная компания Казахстана",
          description: "Производим и реализуем автомобили для личного пользования и бизнеса. Способствуем развитию городской мобильности, оснащая страну общественным и специализированным транспортом."
        },
        {
          name: "У нас есть все необходимое для запуска и развития вашего бизнеса",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/40/AllurLogo.png",
          title: "AllurGroup",
          title_full: "Allur4 - крупнейшая автомобильная компания Казахстана",
          description: "Производим и реализуем автомобили для личного пользования и бизнеса. Способствуем развитию городской мобильности, оснащая страну общественным и специализированным транспортом."
        },
        {
          name: "У нас есть все необходимое для запуска и развития вашего бизнеса",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/40/AllurLogo.png",
          title: "AllurGroup",
          title_full: "Allur5 - крупнейшая автомобильная компания Казахстана",
          description: "Производим и реализуем автомобили для личного пользования и бизнеса. Способствуем развитию городской мобильности, оснащая страну общественным и специализированным транспортом."
        }
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
      }
    }
  }
}
</script>