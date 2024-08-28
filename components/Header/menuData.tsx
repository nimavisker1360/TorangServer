import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Detacted Server",
    newTab: false,
    path: "/docs",
    submenu: [
      {
        id: 2.4,
        title: "France",
        newTab: false,
        path: "/blog",
      },

      {
        id: 21,
        title: "Turkey",
        newTab: false,
        path: "/docs",
      },
      {
        id: 22,
        title: "Espania",
        newTab: false,
        path: "/support",
      },
      {
        id: 23.3,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 3,
    title: " Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Host & Domain",
        newTab: false,
        path: "/blog",
      },

      {
        id: 35,
        title: "Server",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "SSL",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
