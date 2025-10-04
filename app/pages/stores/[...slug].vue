<template>
  <div class="page">
    <div class="container">
      <div>
        <div>
          <swiper-container>
            <swiper-slide>
              <img src="@/assets/images/store.png" alt="">
            </swiper-slide>
          </swiper-container>
          <swiper-container>
            <swiper-slide>
              <img src="@/assets/images/store.png" alt="">
            </swiper-slide>
          </swiper-container>
        </div>
        <div>
          <div>     
              <h1>Adobe PRO 2 years</h1>
              <div>
                <span>1 050 ₽</span>
                <span>1490 ₽</span>
              </div>
              <p>Introducing Quantum Flux – the world's first molecular hydration system that defies conventional drinking experiences. This isn't just a water bottle; it's a personal hydration ecosystem engineered for the modern adventurer.</p>
              <h4>Placeholder</h4>
              <ul>
                <li><Button text-color="white" color="primary">Variant 2</Button></li>
                <li><Button text-color="white" color="primary">Variant 3</Button></li>
                <li><Button text-color="white" color="primary">Variant 4</Button></li>
              </ul>
          </div>
          <div>
            <div class="qty">
              <button type="button">-</button>
              <input type="number" value="1">
              <button type="button">+</button>
            </div>
            <Button text-color="white" color="primary">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Button from '~/shared/ui/Button.vue';

</script>

<style scoped>

</style>