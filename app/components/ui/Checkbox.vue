<template>
  <div>
    <input type="checkbox" :id="id" v-model="model" :value="value"/>
    <label :for="id">
      <div class="check-icon" v-if="modelValue"><CheckIcon /></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '~/components/icons/CheckIcon.vue';

defineProps<{
  id?: string
  value?: string
}>()

const model = defineModel<boolean>()

</script>

<style scoped>

</style>