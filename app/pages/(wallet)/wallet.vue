<template>
  <NuxtLayout name="main">
    <div class="pt-2 flex flex-col mx-auto overflow-y-auto">
      <h1 class="font-hector text-3xl font-semibold">
        {{ $t("wallet.title") }}
      </h1>
      <div class="flex gap-4 mt-[38px] w-full mobile:flex-col">
        <BalanceBlock class="desktop:max-w-[664px] w-full" />
        <div class="flex flex-col gap-4 w-full desktop:max-w-[396px]">
          <BarcodeInfoBlock class="h-full" />
          <SubscriptionInfoBlock class="h-full" />
        </div>
      </div>
      <div class="flex justify-between items-center mt-[24px]">
        <h1 class="font-inter text-3xl font-semibold">
          {{ $t("wallet.history.title") }}
        </h1>
        <Select
          :options="[t('wallet.history.sort_by.title')]"
          class="max-w-[270px] w-full"
        />
      </div>
      <div class="mt-4">
        <div class="flex gap-2">
          <div
            class="px-3 py-2 rounded-[12px] cursor-pointer font-medium"
            v-for="(category, index) in categories"
            :key="category"
            :class="
              filterCategory === transactionCategories[index]?.key
                ? 'bg-white text-black'
                : 'bg-bg-tertiary text-white'
            "
            @click="handleCategoryChange(index)"
          >
            {{ category }}
          </div>
        </div>
      </div>
      <div class="mt-7">
        <div v-for="(group, date) in groupedHistory" :key="date" class="mb-6">
          <div class="font-medium text-lg">
            {{ formatDate(date) }}
          </div>
          <div class="">
            <TransactionSlot
              v-for="transaction in group"
              :key="transaction.id"
              :title="transaction.title"
              :category="transaction.category"
              :value="transaction.value"
              :svg="transaction.svg"
              :status="transaction.status"
              :dateMinutes="formatTime(transaction.date)"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BalanceBlock from "~/features/wallet/balance/BalanceBlock.vue";
import BarcodeInfoBlock from "~/features/wallet/BarcodeInfoBlock.vue";
import SubscriptionInfoBlock from "~/features/wallet/SubscriptionInfoBlock.vue";
import TransactionSlot from "~/features/wallet/TransactionSlot.vue";
import Select from "~/shared/ui/Select.vue";
import { useTransactionHistory } from "~/shared/composables/useTransactionHistory";
import { useFormatters } from "~/shared/composables/useFormatters";
import { useCurrencyTotals } from "~/shared/composables/useCurrencyTotals";

const { t } = useI18n();
const { formatDate, formatTime } = useFormatters();

// Mock data - в реальном приложении это будет приходить из API
const mockHistory = [
  {
    id: 1,
    title: "Barcode",
    date: "2025-02-10T12:03:00Z",
    category: "Purchase",
    value: "x12",
    svg: "/_nuxt/assets/svg/dark/Barcode.svg",
    status: "Success",
  },
  {
    id: 2,
    title: "Balance Top up",
    date: "2025-02-10T12:03:00Z",
    category: "Top up",
    value: "$600 USD",
    svg: "/_nuxt/assets/svg/dark/Success.svg",
    status: "Pending",
  },
  {
    id: 3,
    title: "30 barcode package",
    date: "2025-01-18T12:03:00Z",
    category: "Purchase",
    value: "x1",
    svg: "/_nuxt/assets/svg/dark/Package.svg",
    status: "Canceled",
  },
  {
    id: 4,
    title: "Store",
    date: "2025-01-18T12:03:00Z",
    category: "Purchase",
    value: "x1, $30 USD",
    svg: "/_nuxt/assets/svg/dark/Store.svg",
    status: "Failed",
  },
  {
    id: 5,
    title: "Unlimited for 168 hours",
    date: "2025-01-14T12:03:00Z",
    category: "Purchase",
    value: "x1, $400 USD",
    svg: "/_nuxt/assets/svg/dark/Subscription.svg",
    status: "Success",
  },
];

// Initialize transaction history with localized categories
const {
  categories: transactionCategories,
  filterCategory,
  groupedHistory,
  setFilter,
} = useTransactionHistory(mockHistory);

// Create localized categories for display
const categories = computed(() => [
  t("wallet.history.categories.all"),
  t("wallet.history.categories.top_ups"),
  t("wallet.history.categories.store"),
  t("wallet.history.categories.purchases"),
]);

// Currency totals for analytics
const { summary: currencySummary } = useCurrencyTotals(mockHistory);

// Handle category filter change
const handleCategoryChange = (categoryIndex: number) => {
  const categoryKey = transactionCategories[categoryIndex]?.key;
  if (categoryKey) {
    setFilter(categoryKey);
  }
};
</script>
