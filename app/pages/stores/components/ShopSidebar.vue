<template>
  <div>
    <div>
      <div>
      <p>Placeholder</p>
      <ul>
        <li v-for="item in 5" :key="item">
          <Button text-color="white" color="primary">Placeholder</Button>
        </li>
      </ul>
      </div>
      <div>
        <p>Placeholder</p>
        <ul>
          <li v-for="item in 5" :key="item">
            <Checkbox id="checkbox" value="checkbox">Placeholder</Checkbox>
          </li>
        </ul>
      </div>
      <div>
        <p>Placeholder</p>
        <div>
          <div>
            <span>From</span>
            <Input placeholder="Placeholder" />
          </div>
          <div>
            <span>To</span>
            <Input placeholder="Placeholder" />
          </div>
        </div>
      </div>
      <div>
        <p>Placeholder</p>
        <div>
          <div>
            <span>From</span>
            <Input placeholder="Placeholder" />
          </div>
          <div>
            <span>To</span>
            <Input placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Button text-color="white" color="primary">Save</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/shared/ui/Button.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import Input from '~/shared/ui/Input.vue';
</script>

<style scoped>

</style>