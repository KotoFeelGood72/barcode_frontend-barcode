<template>
  <NuxtLink :to="link">
    <div>
      <img src="@/assets/images/products-card.png" alt="">
    </div>
    <div>
      <span>{{ price }}</span>
      <p>{{ title }}</p>
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