<template>
  <div class="page">
    <div class="container">
      <swiper-container :pagination="{
        el: '.slider-pagination',
        clickable: true,
      }">
        <swiper-slide v-for="item in 10" :key="item">
          <div class="bg"><img src="@/assets/images/store.png" alt=""></div>
          <div>
            <p>Product</p>
            <h2>Microsoft office 360</h2>
            <Button text-color="white" color="primary">Buy</Button>
          </div>
        </swiper-slide>
        <div class="slider-pagination"></div>
      </swiper-container>
      <div>
        <h2>All products</h2>
        <div>
          <ProductsCard title="Microsoft office 360" price="100" link="/products/1" v-for="item in 10" :key="item" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Button from '~/shared/ui/Button.vue';
import ProductsCard from '~/components/card/ProductsCard.vue';

</script>

<style scoped>

</style>