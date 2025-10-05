<template>
  <NuxtLink :to="link">
    <div class="h-[257px] w-full mb-2 rounded-lg overflow-hidden">
      <img src="@/assets/images/products-card.png" alt="" class="w-full h-full object-cover">
    </div>
    <div>
      <span class="text-lg font-medium">{{ price }}</span>
      <p class="text-xs font-medium">{{ title }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">

export interface ProductsCardProps {
  title: string;
  price: string;
  image?: string;
  link: string;
}

const { title, price, image } = defineProps<ProductsCardProps>()

</script>

<style scoped>

</style>