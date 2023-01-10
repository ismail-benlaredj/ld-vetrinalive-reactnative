import dashboardIcon from "../assets/icons/dashboardIcon.svg"
import productsIcon from "../assets/icons/productsIcon.svg"
import target from "../assets/icons/target.svg"


export const drawerItemsList = [
    {
        id: 'Dashboard',
        type: 'item',
        screen: 'dashboard',
        icon: dashboardIcon,
        label: 'Dashboard',
        badge: null,
        children: null,

    },
    {
        id: 'products',
        type: 'item',
        screen: 'products',
        icon: productsIcon,
        label: 'Products',
        badge: null,
        children: null
    },
    {
        id: 'payment-options',
        type: 'item',
        screen: 'payment-options',
        icon: target,
        label: 'Payment options',
        badge: null,
        children: null
    },
    {
        id: 'orders',
        type: 'item',
        screen: 'orders',
        icon: target,
        label: 'Orders',
        children: null
    },
    {
        id: 'Subsription',
        type: 'item',
        screen: 'Subsription',
        icon: target,
        label: 'Subsription',
        children: null
    },

]



// ALL NAVIGATION ITEMS >>

// export const navItemsList = [
//     {
//         id: 'Dashboard',
//         type: 'item',
//         screen: 'dashboard',
//         icon: dashboardIcon,
//         label: 'Dashboard',
//         badge: null,
//         children: null,

//     },
//     {
//         id: 'products',
//         type: 'item',
//         screen: 'products',
//         icon: productsIcon,
//         label: 'Products',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'marketing',
//         type: 'group',
//         screen: 'marketing',
//         icon: target,
//         label: 'Marketing',
//         badge: null,
//         children: [
//             {
//                 id: 'exit-popup',
//                 type: 'item',
//                 screen: 'exit-popup',
//                 icon: null,
//                 label: 'Exit popup',
//                 badge: null,
//                 children: null
//             },
//             {
//                 id: 'storytelling',
//                 type: 'item',
//                 screen: 'storytelling',
//                 icon: null,
//                 label: 'Storytelling',
//                 badge: null,
//                 children: null
//             },
//         ]
//     },
//     {
//         id: 'promotional',
//         type: 'item',
//         screen: 'promotional',
//         icon: domainIcon,
//         label: 'Promotional',
//         badge: {
//             type: 'star',
//         },
//         children: null
//     },
//     {
//         id: 'gallery',
//         type: 'item',
//         screen: 'gallery',
//         icon: target,
//         label: 'Gallery',
//         badge: {
//             type: 'star',
//         },
//         children: null
//     },
//     {
//         id: 'orders',
//         type: 'item',
//         screen: 'orders',
//         icon: target,
//         label: 'Orders',
//         badge: {
//             type: 'notification',
//             value: '14'

//         },
//         children: null
//     },
//     {
//         id: 'shipments',
//         type: 'group',
//         screen: 'shipments',
//         icon: target,
//         label: 'Shipments',
//         badge: {
//             type: 'new',
//         },
//         children: [
//             {
//                 id: 'platforms',
//                 type: 'item',
//                 screen: 'platforms',
//                 icon: null,
//                 label: 'Platforms',
//                 badge: null,
//                 children: null
//             },
//             {
//                 id: 'package-sizes',
//                 type: 'item',
//                 screen: 'package-sizes',
//                 icon: null,
//                 label: 'Package sizes',
//                 badge: null,
//                 children: null
//             },
//         ]
//     },
//     {
//         id: 'customers',
//         type: 'item',
//         screen: 'customers',
//         icon: target,
//         label: 'Customers',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'categories',
//         type: 'item',
//         screen: 'categories',
//         icon: target,
//         label: 'Categories',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'delivery',
//         type: 'item',
//         screen: 'delivery-options',
//         icon: target,
//         label: 'Delivery options',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'payment-options',
//         type: 'item',
//         screen: 'payment-options',
//         icon: target,
//         label: 'Payment options',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'customization',
//         type: 'item',
//         screen: 'customization',
//         icon: target,
//         label: 'Customization',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'sellonsocial',
//         type: 'item',
//         screen: 'sell-on-social',
//         icon: target,
//         label: 'Sell on social',
//         badge: {
//             type: 'star',
//         },
//         children: null
//     },
//     {
//         id: 'discounts',
//         type: 'item',
//         screen: 'discounts',
//         icon: target,
//         label: 'Discounts codes',
//         badge: {
//             type: 'star',
//         },
//         children: null
//     },
//     {
//         id: 'integrations',
//         type: 'group',
//         screen: 'integrations',
//         icon: target,
//         label: 'Integrations',
//         badge: null,
//         children: [
//             {
//                 id: 'Zapier',
//                 type: 'item',
//                 screen: 'Zapier',
//                 icon: null,
//                 label: 'Zapier',
//                 badge: null,
//                 children: null
//             },
//             {
//                 id: 'Webhooks',
//                 type: 'item',
//                 screen: 'Webhooks',
//                 icon: null,
//                 label: 'Webhooks',
//                 badge: null,
//                 children: null
//             },
//             {
//                 id: 'App credentials',
//                 type: 'item',
//                 screen: 'app-credentials',
//                 icon: null,
//                 label: 'App credentials',
//                 badge: null,
//                 children: null
//             },
//         ]
//     },
//     {
//         id: 'settings',
//         type: 'item',
//         screen: 'settings',
//         icon: target,
//         label: 'Settings',
//         badge: null,
//         children: null
//     },
//     {
//         id: 'log-out',
//         type: 'item',
//         screen: 'log-out',
//         icon: target,
//         label: 'Log out',
//         badge: null,
//         children: null
//     },
// ]