export interface SidebarMenuItem {
  id: string;
  path: string;
  label: string;
  icon: string;
  hasDropdown: boolean;
  order: number;
  isVisible: boolean;
  badge?: {
    text: string;
    color: string;
    variant: "primary" | "secondary" | "success" | "warning" | "error";
  };
  children?: SidebarMenuItem[];
}

export interface SidebarConfig {
  items: SidebarMenuItem[];
  showBalance: boolean;
  showAdvertisement: boolean;
  logoText: string;
  logoPath: string;
}

export function useSidebarMenu() {
  const { t } = useI18n();
  const localePath = useLocalePath();

  const menuItems: SidebarMenuItem[] = [
    {
      id: "barcodes",
      path: "/barcodes",
      label: t("sidebar.barcodes"),
      icon: "/_nuxt/assets/svg/dark/barcodes.svg",
      hasDropdown: false,
      order: 1,
      isVisible: true,
    },
    {
      id: "mrz",
      path: "/mrz",
      label: t("sidebar.mrz"),
      icon: "/_nuxt/assets/svg/dark/mrz.svg",
      hasDropdown: false,
      order: 2,
      isVisible: true,
    },
    {
      id: "other-tools",
      path: "/other-tools",
      label: t("sidebar.other_tools"),
      icon: "/_nuxt/assets/svg/dark/other-tools.svg",
      hasDropdown: true,
      order: 3,
      isVisible: true,
      children: [
        {
          id: "qr-generator",
          path: "/qr-generator",
          label: t("sidebar.qr_generator"),
          icon: "/_nuxt/assets/svg/dark/qr.svg",
          hasDropdown: false,
          order: 1,
          isVisible: true,
        },
        {
          id: "field-generator",
          path: "/field-generator",
          label: t("sidebar.field_generator"),
          icon: "/_nuxt/assets/svg/dark/field_gen.svg",
          hasDropdown: false,
          order: 2,
          isVisible: true,
        },
      ],
    },
    {
      id: "wallet",
      path: "/wallet",
      label: t("sidebar.wallet"),
      icon: "/_nuxt/assets/svg/dark/wallet.svg",
      hasDropdown: false,
      order: 4,
      isVisible: true,
    },
    {
      id: "bulk-generation",
      path: "/bulk-generation",
      label: t("sidebar.bulk_generation"),
      icon: "/_nuxt/assets/svg/dark/bulk.svg",
      hasDropdown: false,
      order: 5,
      isVisible: true,
    },
    {
      id: "store-orders",
      path: "/store-orders",
      label: t("sidebar.store_orders"),
      icon: "/_nuxt/assets/svg/dark/store-orders.svg",
      hasDropdown: false,
      order: 6,
      isVisible: true,
    },
    {
      id: "referral",
      path: "/referral",
      label: t("sidebar.referral"),
      icon: "/_nuxt/assets/svg/dark/referral.svg",
      hasDropdown: false,
      order: 7,
      isVisible: true,
    },
    {
      id: "help",
      path: "/help",
      label: t("sidebar.help"),
      icon: "/_nuxt/assets/svg/dark/help.svg",
      hasDropdown: false,
      order: 8,
      isVisible: true,
    },
    {
      id: "settings",
      path: "/settings",
      label: t("sidebar.settings"),
      icon: "/_nuxt/assets/svg/dark/settings.svg",
      hasDropdown: false,
      order: 9,
      isVisible: true,
    },
  ];

  const sidebarConfig: SidebarConfig = {
    items: menuItems,
    showBalance: true,
    showAdvertisement: true,
    logoText: "LOGO",
    logoPath: "/",
  };

  const getVisibleItems = (): SidebarMenuItem[] => {
    return menuItems
      .filter(item => item.isVisible)
      .sort((a, b) => a.order - b.order);
  };

  const getItemById = (id: string): SidebarMenuItem | undefined => {
    return menuItems.find(item => item.id === id);
  };

  const getItemByPath = (path: string): SidebarMenuItem | undefined => {
    return menuItems.find(item => item.path === path);
  };

  const getItemsWithDropdown = (): SidebarMenuItem[] => {
    return menuItems.filter(item => item.hasDropdown && item.isVisible);
  };

  const getItemsWithoutDropdown = (): SidebarMenuItem[] => {
    return menuItems.filter(item => !item.hasDropdown && item.isVisible);
  };

  const updateItemVisibility = (id: string, isVisible: boolean): void => {
    const item = getItemById(id);
    if (item) {
      item.isVisible = isVisible;
    }
  };

  const addItem = (item: Omit<SidebarMenuItem, "id">): string => {
    const id = item.path.replace("/", "").replace(/-/g, "_");
    const newItem: SidebarMenuItem = {
      id,
      ...item,
    };
    menuItems.push(newItem);
    return id;
  };

  const removeItem = (id: string): boolean => {
    const index = menuItems.findIndex(item => item.id === id);
    if (index !== -1) {
      menuItems.splice(index, 1);
      return true;
    }
    return false;
  };

  const updateItem = (
    id: string,
    updates: Partial<SidebarMenuItem>
  ): boolean => {
    const item = getItemById(id);
    if (item) {
      Object.assign(item, updates);
      return true;
    }
    return false;
  };

  const getLocalizedPath = (path: string): string => {
    return localePath(path);
  };

  return {
    menuItems: readonly(menuItems),
    sidebarConfig: readonly(sidebarConfig),
    getVisibleItems,
    getItemById,
    getItemByPath,
    getItemsWithDropdown,
    getItemsWithoutDropdown,
    updateItemVisibility,
    addItem,
    removeItem,
    updateItem,
    getLocalizedPath,
  };
}
