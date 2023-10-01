<template>
  <metainfo>
    <template #title="{ content }">{{
        content ? `${content} | SeeYou` : `SITE_NAME`
      }}
    </template>
  </metainfo>
  <div class="relative">
    <img class="top-0 left-0 absolute" src="@/assets/img/mainPage/bg.png" alt="">
    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import "vue3-toastify/dist/index.css";
import {useMeta} from "vue-meta";

export default {
  name: "App",
  components: {
    DefaultLayout
  },
  setup() {
    useMeta({
      title: "SeeYou",
      htmlAttrs: {lang: "en", amp: true},
    });
  },
  beforeCreate() {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  methods: {
    scrollTop() {
      document.getElementById('app').scrollIntoView();
    },
  }
};
</script>
