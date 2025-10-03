<template>
  <div
    v-if="isTablet && isOpen"
    class="bg-bg-white absolute z-40 size-full top-0 px-4 mt-[48px]"
  >
    <div class="flex flex-col gap-3 my-[48px]">
      <p v-for="value in items" :key="value.label" class="text-[28px]">
        {{ value.label }}
      </p>
    </div>
    <div class="flex mt-[48px] gap-[15px]">
      <img
        src="/_nuxt/assets/svg/dark/facebook.svg"
        alt="Facebook"
        class="w-11 h-11"
      />
      <img src="/_nuxt/assets/svg/dark/inst.svg" alt="Instagram" class="w-11 h-11" />
      <img src="/_nuxt/assets/svg/dark/x.svg" alt="X" class="w-11 h-11" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBurgerMenuStore } from "~/shared/store/useBurgerMenu";
const { t } = useI18n();

const isTablet = ref(false);

onMounted(() => {
  const checkTablet = () => {
    isTablet.value = window.innerWidth < 1024;
  };

  checkTablet();
  window.addEventListener("resize", checkTablet);

  onUnmounted(() => {
    window.removeEventListener("resize", checkTablet);
  });
});

const items = [
  {
    label: t("home.home"),
    path: "/",
  },
  {
    label: t("home.store"),
    path: "/store",
  },
  {
    label: t("home.dashboard"),
    path: "/dashboard",
  },
  {
    label: t("home.barcode"),
    path: "/barcodes",
  },
  {
    label: t("home.discussion"),
    path: "/mrz",
  },
  {
    label: t("home.faq"),
    path: "/faq",
  },
];

const burgerMenuStore = useBurgerMenuStore();

const isOpen = computed(() => burgerMenuStore.isOpen);
</script>
