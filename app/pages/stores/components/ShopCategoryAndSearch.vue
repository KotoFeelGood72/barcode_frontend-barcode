<template>
  <div>
    <Button text-color="white" color="primary">
      <span>Categories</span>
      <div><CategoryIcon /></div>
    </Button>
    <div>
      <div><SearchIcon /></div>
      <Input placeholder="Search" />
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