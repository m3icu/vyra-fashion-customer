
/**
 * Navigation Item Structure
 *
 * {
 *   id: "",
 *   label: "",
 *   path: "",
 *   icon: null,
 *   badge: null,
 *   showOnDesktop: true,
 *   showOnMobile: true,
 *   requiresAuth: false,
 *   isExternal: false,
 *   order: 1,
 *   children: [],
 * }
 */

/**
 * Main navigation displayed
 * in the desktop navbar and mobile drawer.
 */
export const mainNavigation = [
  {
    id: "collection",
    label: "Collection",
    path: "/collections",
    description: "Explore every VYRA collection.",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 1,
    children: [],
  },

  {
    id: "stories",
    label: "Stories",
    path: "/stories",
    description: "Discover moments behind every collection.",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 2,
    children: [],
  },

  {
    id: "journal",
    label: "Journal",
    path: "/journal",
    description: "Style inspiration and lifestyle articles.",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 3,
    children: [],
  },

  {
    id: "about",
    label: "About",
    path: "/about",
    description: "Learn more about VYRA.",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 4,
    children: [],
  },
 
];

/**
 * Footer navigation links.
 */
export const footerNavigation = [
  {
    id: "about",
    label: "About",
    path: "/about",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 1,
  },

  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 2,
  },

  {
    id: "privacy",
    label: "Privacy Policy",
    path: "/privacy",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 3,
  },

  {
    id: "terms",
    label: "Terms & Conditions",
    path: "/terms",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 4,
  },

  {
    id: "faq",
    label: "FAQ",
    path: "/faq",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 5,
  },
];

/**
 * Official VYRA social media links.
 */
export const socialNavigation = [
  {
    id: "instagram",
    label: "Instagram",
    path: "https://instagram.com/",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: true,
    order: 1,
  },

  {
    id: "tiktok",
    label: "TikTok",
    path: "https://tiktok.com/",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: true,
    order: 2,
  },

  {
    id: "whatsapp",
    label: "WhatsApp",
    path: "#",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 3,
  },
];

/**
 * Utility navigation shown
 * on the right side of the navbar.
 */
export const secondaryNavigation = [

 {
    id: "wishlist",
    label: "Wishlist",
    path: "/wishlist",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 1,
  },

  {
    id: "cart",
    label: "Cart",
    path: "/cart",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: false,
    order: 2,
  },

  {
    id: "login",
    label: "Login",
    path: "/login",
    icon: null,
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: false,
    isExternal: true,
    order: 3,
  },

  {
    id: "account",
    label: "My Account",
    path: "/account",
    icon: "User",
    badge: null,
    showOnDesktop: true,
    showOnMobile: true,
    requiresAuth: true,
    isExternal: false,
    order: 4,
   },
];

export default {
  mainNavigation,
  footerNavigation,
  socialNavigation,
  secondaryNavigation,
};