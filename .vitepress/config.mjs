import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import sidebar from "./sidebar.mjs";
import socialLinks from "./socialLinks.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/vite.svg" }]],
  srcDir: "docs",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    // logo: "vite.svg",
    // logo: "https://happyfe.com/logo.png",
    // siteTitle: false,
    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>',
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    outline: {
      label: "本页目录",
      position: "deep",
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "重置",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchBy: "搜索提供者",
            },
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    socialLinks: socialLinks,
  },

  markdown: {
    // theme: "material-theme-palenight",
    lineNumbers: true,
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
});
