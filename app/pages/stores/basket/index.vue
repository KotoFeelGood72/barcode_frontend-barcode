<template>
  <div class="page">
    <div class="container">
      <div class="mb-10">
        <NuxtLink :to="$localePath('/stores')" class="flex items-center gap-2 lg:mb-7 mb-6">
          <div class="size-8 flex items-center justify-center bg-gray-dark rounded-full"><BackIcon /></div>
          <span class="lg:text-xl">Basket</span>
        </NuxtLink>
      </div>
      <div class="flex gap-4">
        <div class="flex-grow">
          <div class="flex justify-between items-center bg-gray-dark px-3.5 py-2.5 rounded-[20px] mb-2.5">
            <div class="flex items-center gap-5">
              <div class="flex items-center justify-center size-9 bg-[#292929] rounded-[12px]">
                <DiscountIcon/>
              </div>
              <span>Discounted items </span>
            </div>
            <span class="text-sm text-primary font-semibold">2 days left</span>
          </div>
          <div class="bg-gray-dark p-5 rounded-[20px]">
            <Checkbox id="checkbox" value="checkbox" label="Select All" circle class="py-3 mb-3"/>
            <ul>
              <li v-for="item in basketItems" :key="item.id" class="border-b border-[#292929] py-2.5">
                <BasketCard :item="item" :is-selected="false" />
              </li>
            </ul>
          </div>
        </div>
        <div class="max-w-[351px] w-full">
          <div class="bg-gray-dark p-5 rounded-[20px] flex flex-col gap-7"> 
            <ul class="flex flex-col gap-2 text-sm">
              <li class="flex justify-between items-center opacity-60">
                <span>Products, 3 pcs.</span>
                <span>$100</span>
              </li>
              <li class="flex justify-between items-center opacity-60"> 
                <span>Discount</span>
                <span>-$30</span>
              </li>
              <li class="flex justify-between items-center text-lg font-semibold pt-1">
                <span>Total cost </span>
                <span>-$270</span>
              </li>
            </ul>
            <Button color="primary" text-color="dark">Purchase</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscountIcon from '~/components/icons/DiscountIcon.vue';
import BackIcon from '~/components/icons/BackIcon.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import BasketCard from '~/components/card/BasketCard.vue';
import Button from '~/shared/ui/Button.vue';

const basketItems = ref([
  { id: 1, name: 'Apple card', price: 1000, quantity: 1, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Apple card', price: 1000, quantity: 1, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Apple card', price: 1000, quantity: 1, image: 'https://via.placeholder.com/150' },
]);
</script>

<style scoped>

</style>