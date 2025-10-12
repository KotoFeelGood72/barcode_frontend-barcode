<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center gap-2.5">
      <Checkbox circle />
      <div>
        <img src="@/assets/images/basket-card.png" alt="">
      </div>
      <h3 class="line-clamp-2 max-w-[217px]">Apple card 1000 руб, РУ регион</h3>
    </div>
    <div>
      <div class="qty max-w-[115px] flex items-stretch justify-center gap-1.5">
        <button type="button" class="w-[30px] h-[30px] flex items-center justify-center bg-[#292929] rounded-lg" @click="decrementQuantity" :disabled="quantity === 1" :class="{ 'opacity-50': quantity === 1, 'cursor-pointer': quantity != 1 }"><MinusIcon /></button>
        <input type="number" :value="quantity" class="max-w-11 bg-[#292929] flex items-center justify-center text-center border-none outline-none rounded-lg text-sm font-semibold">
        <button type="button" class="w-[30px] h-[30px] flex items-center justify-center bg-[#292929] rounded-lg cursor-pointer" @click="incrementQuantity"><PlusIcon /></button>
      </div>
    </div>
    <div class="text-xl">1 420₽</div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from '~/components/ui/Checkbox.vue';
import MinusIcon from '~/components/icons/MinusIcon.vue';
import PlusIcon from '~/components/icons/PlusIcon.vue';

const quantity = ref(1)

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
const incrementQuantity = () => {
  quantity.value++
}
</script>

<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

</style>