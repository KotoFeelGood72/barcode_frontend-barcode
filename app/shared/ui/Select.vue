<template>
  <div class="relative inline-block w-full">
    <select
      name=""
      class="w-full rounded-[12px] px-3 pr-10 h-10 font-semibold placeholder:font-semibold placeholder:text-text-tertiary bg-bg-secondary border-none focus:outline-none focus:ring-0 text-text-tertiary appearance-none"
    >
      <option v-if="placeholder" :value="placeholder" selected>
        {{ placeholder }}
      </option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <div
      class="absolute right-3 top-[22px] transform -translate-y-1/2 pointer-events-none"
    >
      <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 text-text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  options: string[];
  placeholder?: string;
}>();
</script>
