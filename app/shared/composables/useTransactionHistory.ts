import { ref, computed } from "vue";

export interface Transaction {
  id: number;
  title: string;
  date: string;
  category: string;
  value: string;
  svg: string;
  status: string;
}

export interface TransactionCategory {
  key: string;
  label: string;
  filter: (transaction: Transaction) => boolean;
}

export function useTransactionHistory(initialHistory: Transaction[]) {
  const history = ref<Transaction[]>(initialHistory);
  const filterCategory = ref<string>("");

  const categories: TransactionCategory[] = [
    {
      key: "all",
      label: "All",
      filter: () => true,
    },
    {
      key: "top_ups",
      label: "Top ups",
      filter: transaction => transaction.category === "Top up",
    },
    {
      key: "store",
      label: "Store",
      filter: transaction => transaction.category === "Store",
    },
    {
      key: "purchases",
      label: "Purchases",
      filter: transaction => transaction.category === "Purchase",
    },
  ];

  // Set default filter
  if (categories.length > 0) {
    filterCategory.value = categories[0]?.key || "";
  }

  const filteredHistory = computed(() => {
    const selectedCategory = categories.find(
      cat => cat.key === filterCategory.value
    );
    if (!selectedCategory) return history.value;

    return history.value.filter(selectedCategory.filter);
  });

  const groupedHistory = computed(() => {
    const groups: Record<string, Transaction[]> = {};

    filteredHistory.value.forEach(transaction => {
      const date = transaction.date.split("T")[0];
      if (date) {
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(transaction);
      }
    });

    return groups;
  });

  const setFilter = (categoryKey: string) => {
    filterCategory.value = categoryKey;
  };

  const addTransaction = (transaction: Transaction) => {
    history.value.unshift(transaction);
  };

  const updateTransaction = (id: number, updates: Partial<Transaction>) => {
    const index = history.value.findIndex(t => t.id === id);
    if (index !== -1) {
      history.value[index] = {
        ...history.value[index],
        ...updates,
      } as Transaction;
    }
  };

  const removeTransaction = (id: number) => {
    const index = history.value.findIndex(t => t.id === id);
    if (index !== -1) {
      history.value.splice(index, 1);
    }
  };

  return {
    history: readonly(history),
    categories,
    filterCategory: readonly(filterCategory),
    filteredHistory,
    groupedHistory,
    setFilter,
    addTransaction,
    updateTransaction,
    removeTransaction,
  };
}
