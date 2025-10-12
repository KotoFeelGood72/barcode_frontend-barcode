<template>
  <div class="flex items-center gap-3 cursor-pointer">
    <label :for="id" class="flex items-center justify-center w-6 h-6 bg-gray-dark rounded-[6px] border border-[#707070] overflow-hidden cursor-pointer" :class="[ circle ? 'rounded-full' : '' ]">
      <input type="checkbox" :id="id" v-model="modelValue" :value="value" class="hidden"/>
      <div class="check-icon" v-if="modelValue"><CheckIcon /></div>
    </label>
    <p class="text-sm font-medium select-none" @click="toggleCheckbox" v-if="label">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '~/components/icons/CheckIcon.vue';

const props = defineProps<{
  id?: string
  value?: string
  label?: string
  circle?: boolean
}>()

const modelValue = defineModel<string>()

const toggleCheckbox = () => {
  modelValue.value = modelValue.value === props.value ? '' : (props.value ?? '')
}

const isChecked = computed(() => {
  return modelValue.value === props.value
})

</script>

<style scoped>

</style>