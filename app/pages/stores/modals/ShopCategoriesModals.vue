<template>
  <div class="modal">
    <div class="container">
      <div>
        <ul>
          <li>
            <Button text-color="white" color="primary">
              <div><TempCatIcon /></div>
              <span>Category name</span>
              <div><ChevronIcon /></div>
            </Button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="item in 5" :key="item">
            <h3>Sub category name</h3>
            <ul>
              <li v-for="item in 5" :key="item">
                <NuxtLink to="/">Label 1</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Button from '~/shared/ui/Button.vue';
import ChevronIcon from '~/components/icons/ChevronIcon.vue';
import TempCatIcon from '~/components/icons/TempCatIcon.vue';

</script>

<style scoped>

</style>