<template>
  <NuxtLayout name="empty">
    <div class="flex flex-col items-center justify-center min-h-screen error-page" v-if="statusCode === '404'">
      <h1 class="lg:text-[140px] md:text-[190px] text-[48px] font-hector leading-none">404</h1>
      <p class="lg:text-[32px] text-[24px] mb-10">Page not found</p>
      <Button color="white" text-color="dark" class="max-w-[148px] w-full">Go to home</Button>
    </div>
    <div class="error-page" v-else>  
      <div class="container">
        <div class="flex flex-col items-center justify-center min-h-screen ">
          <h1 class="lg:text-[64px] text-[32px] font-hector leading-none lg:mb-10 mb-4">Something's wrong.</h1>
          <p class="lg:text-xl mb-4 font-semibold">Error code 504</p>
          <span class="block max-w-[525px] mx-auto text-center font-medium mb-12">There was an error on the server. We are already working on fixing it.
            Try refreshing the page or logging in later.</span>
          <Button color="white" text-color="dark" class="max-w-[148px] w-full">Back to home</Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Button from '~/shared/ui/Button.vue';

const statusCode = ref<string>('504')

</script>

<style scoped>
.error-page {
  background-image: url('@/assets/images/bg-error.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 1024px) {
  .error-page {
    background-image: url('@/assets/images/bg-error-tablet.png');
  }
}

@media (max-width: 480px) {
  .error-page {
    background-image: url('@/assets/images/bg-error-mobile.png');
  }
}
</style>