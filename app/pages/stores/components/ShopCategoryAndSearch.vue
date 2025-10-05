<template>
  <div class="container flex items-center justify-start gap-[100px]">  
    <slot />
    <div class="max-w-[769px] w-full flex items-stretch justify-center gap-3">
      <Button text-color="dark" color="primary">
        <span>Categories</span>
        <div><CategoryIcon /></div>
      </Button>
      <div class="flex items-center justify-start bg-bg-secondary rounded-xl px-3.5 flex-grow">
        <div><SearchIcon /></div>
        <Input placeholder="Search" class="w-full flex-grow"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/shared/ui/Button.vue';
import Input from '~/shared/ui/Input.vue';
import CategoryIcon from '~/components/icons/CategoryIcon.vue';
import SearchIcon from '~/components/icons/SearchIcon.vue';
</script>

<style scoped>

</style>