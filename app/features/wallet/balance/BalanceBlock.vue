<template>
  <div
    class="flex flex-col gap-2 bg-bg-secondary rounded-[16px] px-4 py-[14px] max-w-[664px]"
  >
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-1">
        <h3 class="text-sm text-text-tertiary font-semibold">
          {{ $t("wallet.total_balance") }}
        </h3>
        <h2 class="text-[20px] font-semibold">{{ totalBalance }}</h2>
      </div>
      <Button
        color="tertiary"
        text-color="white"
        class="px-4 py-2 text-sm h-9"
        @click="navigateTo(localePath('/top-up'))"
      >
        {{ $t("wallet.top_up") }}
      </Button>
    </div>
    <div class="w-full h-[1px] bg-text-secondary mt-2"></div>
    <div class="flex flex-col gap-3 px-3 py-2">
      <CurrencySlot
        v-for="currency in currencies"
        :name="currency.name"
        :value="currency.value"
        :svg="currency.svg"
        :color="currency.color"
        :key="currency.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
import CurrencySlot from "./CurrencySlot.vue";
import { useCurrencyMapping } from "~/shared/composables/useCurrencyMapping";
import { useMoneyFormatting } from "~/shared/composables/useMoneyFormatting";

const localePath = useLocalePath();
const router = useRouter();

const { createCurrencyBalance, getCurrencyIcon, getCurrencyName } =
  useCurrencyMapping();
const { formatTotalBalance, calculateTotalValue } = useMoneyFormatting();

// Mock data - в реальном приложении это будет приходить из API
const mockBalances = [
  { currency: "BTC", amount: 0.0000003, usdValue: 150 },
  { currency: "USDT", amount: 200, usdValue: 200 },
  { currency: "ETH", amount: 0.0003, usdValue: 50 },
  { currency: "LTC", amount: 0.0, usdValue: 0 },
];

// Create currency balances with formatted values
const currencies = computed(() => {
  return mockBalances.map(balance => {
    const currencyBalance = createCurrencyBalance(
      balance.currency,
      balance.amount,
      balance.usdValue
    );

    if (!currencyBalance) {
      return {
        name: balance.currency,
        value: `${balance.amount} ${balance.currency}`,
        svg: "/_nuxt/assets/svg/dark/wallet.svg",
        color: "#6B7280",
      };
    }

    return {
      name: currencyBalance.info.name,
      value:
        currencyBalance.formattedValue +
        ` ≈ ${currencyBalance.formattedUsdValue}`,
      svg: currencyBalance.info.icon,
      color: currencyBalance.info.color,
    };
  });
});

// Calculate total balance in USD
const totalBalance = computed(() => {
  const totalUsdValue = calculateTotalValue(mockBalances);
  return formatTotalBalance(totalUsdValue, "USD");
});
</script>
