<template>
  <div class="page"> 
    <NuxtLink :to="$localePath('/stores')" class="flex items-center gap-2 lg:mb-7 mb-6">
      <div class="size-7 flex items-center justify-center bg-gray-dark rounded-full"><BackIcon /></div>
      <span class="lg:text-[32px] lg:leading-[110%]">Purchase</span>
    </NuxtLink>
    <div>
      <ul>
        <li>
          <span>Products, 3 pcs.</span>
          <span>$100</span>
        </li>
        <li>
          <span>Discount</span>
          <span>-$30</span>
        </li>
      </ul>
    </div>
    <div>
      <p>Purchase</p>
      <div>
        <div>
          <div>
            <div><PurchaseIcon /></div>
            <div>
              <span>Total balance</span>
              <span>$400 USD</span>
            </div>
          </div>
          <div><DropdownIcon /></div>
        </div>
      </div>
    </div>
    <div>
      <p>Promo code</p>
      <div>
        <Input placeholder="Enter promo code" />
        <button type="button">Apply</button>
      </div>
    </div>
  <Button color="primary" textColor="dark">Buy for $100</Button>
  </div>
</template>

<script setup lang="ts">
import BackIcon from '~/components/icons/BackIcon.vue';
import PurchaseIcon from '~/components/icons/PurchaseIcon.vue';
import DropdownIcon from '~/components/icons/DropdownIcon.vue';
import Input from '~/shared/ui/Input.vue';
import Button from '~/shared/ui/Button.vue';
</script>

<style scoped>

</style>