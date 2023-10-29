<template>
  <div class="container mx-auto px-4 lg:px-0 text-white">
    <div id="main" class="relative">
      <img
          class="w-full lg:w-[70%] absolute left-1/2 top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 -translate-x-1/2 h-auto"
          src="@/assets/img/mainPage/heroBg.png"
          alt="">
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[140px]"
           style="background: #BB86FC; filter: blur(281px);"></div>
      <div class="py-28 relative z-50 w-full lg:w-[70%] mx-auto">
        <h1 class="text-2xl lg:text-[66px] font-bold text-white text-center mx-auto benz mb-3 leading-none">Создадим ваш
          бизнес в цифровом мире!</h1>
        <p class="text-xl lg:text-4xl font-medium text-white text-center">Разработка сайтов любой сложности исходя из
          Ваших
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
            <img class="relative lg:absolute left-2 bottom-0 h-1/2 lg:h-[110%] z-20"
                 src="@/assets/img/mainPage/blocks/1.png" alt="">
            <div style="border-radius: 333px; background: #BB86FC; filter: blur(74px);"
                 class="w-1/2 absolute left-20 top-1/2 -translate-y-1/2 h-full "></div>
            <div class="w-full lg:w-[50%] h-1/2 lg:h-auto relative z-20">
              <h3 class="font-benzin text-xl lg:text-2xl font-bold mb-4">Разработка сайтов</h3>
              <p class="mb-6 text-xl font-medium">Создаем современные, функциональные сайты, гарантируя высокое качество
                и индивидуальный подход</p>
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
              <h3 class="font-benzin text-2xl font-bold mb-4">Аналитика для успешного бизнеса</h3>
              <p class="mb-6 text-xl font-medium">Мы предлагаем услуги Data Science, которые помогут вам анализировать
                данные, выявлять тенденции и
                принимать обоснованные бизнес-решения на основе фактов.</p>
            </div>
          </div>
          <div
              class="w-full lg:w-half flex relative bg-blockBg pb-6 pt-7 px-6 rounded-2xl overflow-hidden mb-5 lg:mb-0">
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
        <div
            class="w-full lg:w-1/3 h-full lg:h-auto bg-blockBg flex flex-col py-0 lg:py-12 px-0 lg:px-10 rounded-2xl mb-5 lg:mb-0">
          <div class="py-12 lg:py-0 px-10 lg:px-0">
            <h3 class="font-benzin text-2xl font-bold mb-4">Приложения, которые приносят прибыль</h3>
            <p class="mb-6 text-xl font-medium">Наши мобильные приложения - это инструменты, спроектированные для
              увеличения дохода и эффективности вашего бизнеса. Мы создаем индивидуальные приложения, нацеленные на
              решение конкретных бизнес-задач и увеличение базы клиентов.</p>
          </div>
          <img class="static lg:absolute right-0 bottom-0 z-20 rounded-b-2xl" src="@/assets/img/mainPage/blocks/4.png"
               alt="">
          <div style="border-radius: 333px; background: #BB86FC; filter: blur(74px);"
               class="w-1/2 absolute right-0 bottom-0 h-[300px] w-[300px]"></div>
        </div>
      </div>
    </div>
    <div id="portfolio" class="relative z-20 mb-36">
      <div class="block relative">
        <div class="text-center w-full mb-9">
          <h2 class="text-3xl lg:text-5xl font-black mb-3">{{ slides[currentSlideIndex].title }}</h2>
          <p class="text-sm lg:text-xl font-medium">{{ slides[currentSlideIndex].description }}</p>
          <div style="background: #BB86FC; filter: blur(281px);" class="w-full h-36 absolute left-0 top-0"></div>
        </div>
        <div class="mx-auto w-[90%] relative overflow-hidden">
          <img class="w-full" src="@/assets/img/mainPage/portfolio/1.png" alt="">
          <carousel
              @slide-end="handleSlideStart"
              @init="handleInit"
              :breakpoints="breakpoints" v-bind="settings"
              :wrapAround="true"
              class="absolute z-10 top-2 left-1/2 -translate-x-1/2 w-[77%]">
            <slide v-for="slide in slides" :key="slide">
              <div
                  class="scroll rounded-t-sm sm:rounded-t-2xl max-h-[145px] h-[145px] md:max-h-[335px] md:h-[335px] sm:max-h-[273px] sm:h-[273px] lg:max-h-[455px] lg:h-[455px] xl:max-h-[575px] xl:h-[575px] overflow-y-auto">
                <img class="w-full" :src="slide.img" alt="">
              </div>
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
          <h2 class="text-xl lg:text-3xl lg:text-5xl font-benzin font-black mb-5">Сотрудничаем с ведущими
            компаниями</h2>
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
              <p class="text-2xl lg:text-3xl font-bold text-start lg:text-center">{{
                  works[activeBlock].title_full
                }}</p>
              <p class="text-base lg:text-xl text-start lg:text-center">{{ works[activeBlock].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative mb-36 text-white">
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
               class="bg-mainColor text-end text-2xl font-black font-benzin px-7 py-9 rounded-2xl uppercase">
              {{ item.title }}</p>
            <div class="flex items-center justify-center">
              <p class="overflow-x-hidden flex items-center transition-all overflow-y-hidden py-16 w-0 text-2xl rounded-r-2xl"
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
  <div id="contacts" class="relative z-20 text-white pb-10">
    <form @submit.prevent="sendMessageLocal" class="container mx-auto px-4 lg:px-0">
      <div class="mb-5">
        <h2 class="text-xl lg:text-5xl font-benzin font-black mb-5">Оставить заявку</h2>
        <p class="text-sm">Оставьте информацию о себе, мы перезвоним вам чтобы узнать детали</p>
      </div>
      <div class="block lg:flex justify-between">
        <div
            class="w-full lg:w-half bg-blockBg rounded-[20px] p-5 lg:p-10 flex flex-col justify-between relative overflow-hidden mb-3 lg:mb-0">
          <div style="border-radius: 494px; opacity: 0.5; background: #BB86FC; filter: blur(157px);"
               class="w-[400px] h-[400px] absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2"></div>
          <p class="text-lg lg:text-4xl font-semibold mb-3">Начать сотрудничество – проще простого</p>
          <div>
            <p class="text-base lg:text-xl mb-3">+7 775 288 88 33</p>
            <p class="text-base lg:text-xl mb-3">+7 707 874 55 44</p>
            <p class="text-base lg:text-xl">info@xbase.kz</p>
          </div>
        </div>
        <div class="w-full lg:w-half flex flex-col mb-3 lg:mb-0">
          <div class="mb-4">
            <p class="text-lg mb-1">Имя</p>
            <input
                v-model="form.name"
                class="p-4 rounded-[10px] bg-[#FCF8FF] w-full"
                :class="{ 'border-red-500': v$.form.name.$error }"
                type="text" placeholder="Ваше имя">
          </div>
          <div class="mb-4">
            <p class="text-lg mb-1">Название </p>
            <input
                class="p-4 rounded-[10px] bg-[#FCF8FF] w-full"
                :class="{ 'border-red-500': v$.form.org_name.$error }" type="text"
                placeholder="Название вашей организаций">
          </div>
          <div class="mb-4">
            <p class="text-lg mb-1">Телефон</p>
            <input
                class="p-4 rounded-[10px] bg-[#FCF8FF] w-full"
                :class="{ 'border-red-500': v$.form.phone_number.$error }" type="text" placeholder="+7 777 777 77 77">
          </div>
          <div>
            <p class="text-lg mb-1">Описание проекта</p>
            <textarea
                cols="80" class="p-4 rounded-[10px] bg-[#FCF8FF] w-full"
                :class="{ 'border-red-500': v$.form.note.$error }"
                placeholder="Описание проекта"></textarea>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <p class="w-max bg-mainColor text-white px-[60px] py-5 rounded-2xl text-xl lg:text-3xl font-semibold">
          Отправить</p>
      </div>
    </form>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import {useVuelidate} from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {inject} from "vue";

import 'vue3-carousel/dist/carousel.css'
import imgWorks1 from "@/assets/img/mainPage/works/1.png"
import imgWorks2 from "@/assets/img/mainPage/works/2.png"
import imgWorks3 from "@/assets/img/mainPage/works/3.png"
import imgWorks4 from "@/assets/img/mainPage/works/4.png"
import imgWorks5 from "@/assets/img/mainPage/works/5.png"
import imgWorks6 from "@/assets/img/mainPage/works/6.png"
import img1 from "@/assets/img/mainPage/partners/1.webp"
import img2 from "@/assets/img/mainPage/partners/2.png"
import img3 from "@/assets/img/mainPage/partners/3.png"
import img4 from "@/assets/img/mainPage/partners/4.png"
import img5 from "@/assets/img/mainPage/partners/5.png"
import img6 from "@/assets/img/mainPage/partners/6.png"
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MainPage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    useMeta({title: "Главная"});
    const toast = inject('notify');
    return {
      v$: useVuelidate(), toast
    };
  },
  validations() {
    return {
      form: {
        name: {required},
        org_name: {required},
        phone_number: {required},
        note: {required}
      },
    };
  },
  data() {
    return {
      currentSlideIndex: 0,
      activeBlock: 0,
      activeStep: 0,
      form: {
        name: null,
        org_name: null,
        phone_number: null,
        note: null
      },
      slides: [
        {
          id: 1,
          title: "Abitech",
          description: "Abitech - эффективное управление процессами и активами",
          img: imgWorks2
        },
        {
          id: 2,
          title: "GazBas",
          description: "Компания \"Trust Quality\" - Ваш надежный партнер для инновационных и рациональных решений по освещению.",
          img: imgWorks3
        },
        {
          id: 3,
          title: "Актив",
          description: "Актив - центр обслуживания бизнеса",
          img: imgWorks4
        },
        {
          id: 4,
          title: "Apple City Corps",
          description: "Apple City Corps – один из крупнейших дистрибьюторов на территории Центральной Азии и Казахстана.",
          img: imgWorks5
        },
        {
          id: 5,
          title: "CGService",
          description: "CGService - какую профессию выберет ваш ребенок?",
          img: imgWorks6
        },
        {
          id: 6,
          title: "AllurGroup",
          description: "Allur - крупнейшая автомобильная компания Казахстана",
          img: imgWorks1
        },
      ],
      steps: [
        {
          id: 1,
          title: "Сбор информации",
          description: "Исследования рынка и конкурентов, определение целевой аудитории, сбор обратной связи.",
        },
        {
          id: 2,
          title: "Тех. задание",
          description: "Разработка технического задания. Определение основных характеристик, функциональности и ключевых показателей успеха.",
        },
        {
          id: 3,
          title: "Проектирование",
          description: "Выбор архитектуры. Создание плана разработки (распределение ресурсов, сроки и бюджет)",
        },
        {
          id: 4,
          title: "Дизайн",
          description: "Разработка, согласование и утверждение персонального дизайна",
        },
        {
          id: 6,
          title: "Кодирование",
          description: "Разработка продукта, подключение необходимых скриптов и модулей",
        },
        {
          id: 7,
          title: "Админ панель",
          description: "Интеграция системы управления. Автоматизация процессов.",
        },
        {
          id: 8,
          title: "Тестирование",
          description: "Функциональное, интеграционное и нагрузочное тестирование для обеспечения безопасности и безперебойной работы.",
        },
        {
          id: 8,
          title: "Наполнение",
          description: "Создание контента: изображения, видео, аудио и другие мультимедийные элементы.",
        },
        {
          id: 9,
          title: "Маркетинг",
          description: "Маркетинговая стратегия для продукта, включая продвижение и рекламу",
        },
      ],
      works: [
        {
          img: img5,
          title: "AllurGroup",
          link: "https://allur.kz/",
          title_full: "Allur - крупнейшая автомобильная компания Казахстана",
          description: "Производим и реализуем автомобили для личного пользования и бизнеса. Способствуем развитию городской мобильности, оснащая страну общественным и специализированным транспортом."
        },
        {
          img: img2,
          title: "Abitech",
          link: "https://abitech.kz/",
          title_full: "Abitech - эффективное управление процессами и активами",
          description: "Профессиональный опыт в консалтинге и внедрению собственных разработок в различных отраслях промышленности"
        },
        {
          img: img3,
          title: "GazBas",
          link: "https://gazbas.kz/",
          title_full: "Компания \"Trust Quality\" - Ваш надежный партнер для инновационных и рациональных решений по освещению.",
          description: "Компания TrustQuality специализируется на поставке высококачественных автомобильных дворников и ламп для широкого спектра автомобилей. Нашей главной целью является обеспечение безопасности и комфорта на дороге, предоставляя клиентам доступ к самым современным и надежным автомобильным аксессуарам."
        },
        {
          img: img4,
          title: "Актив",
          link: "https://centeraktiv.kz/",
          title_full: "Актив - центр обслуживания бизнеса",
          description: "Интересы клиента всегда на первом месте. Полная вовлеченность и решение поставленной задачи исключительно с точки зрения: как будет лучше, удобней и экономичней для предпринимателя или его компании."
        },
        {
          img: img1,
          title: "Apple City Corps",
          link: "https://www.applecity.kz/",
          title_full: "Apple City Corps – один из крупнейших дистрибьюторов на территории Центральной Азии и Казахстана.",
          description: "Лидер в дистрибьюции продукции FMCG на территории Центральной Азии и Казахстана"
        },
        {
          img: img6,
          title: "CGService",
          link: "https://cgservice.kz/",
          title_full: "CGService - какую профессию выберет ваш ребенок?",
          description: "Пройдите онлайн-тест по профориентации\n" +
              "для анализа личности подростка и его\n" +
              "карьерного типа. Получите список подходящих профессий и рекомендации к действию."
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
  },
  computed: {
    ...mapGetters(['getSendedMessage'])
  },
  methods: {
    ...mapActions(['sendMessage']),
    handleInit() {
      console.log('created')
    },
    handleSlideStart(data) {
      console.log('slide-start', data)
      this.currentSlideIndex = data.currentSlideIndex
    },
    async sendMessageLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      await this.sendMessage(this.form)
          .then(response => {
            console.log(response)
            this.loading = false;
            this.toast(true, "Сообщение успешно доставлено");
          })
          .catch((error) => {
            if (error.response.data.errors) {
              if (Object.keys(error.response.data.errors).length > 0) {
                Object.values(error.response.data.errors).forEach((err) => {
                  this.toast(false, this.$t(err[0]))
                })
              }
            } else {
              this.toast(false, this.$t(error.response.data.message))
            }
          }).finally(() => {
            this.loading = false;
          })
    },

  }
}
</script>

<style>
.scroll::-webkit-scrollbar {
  display: none;
}
</style>