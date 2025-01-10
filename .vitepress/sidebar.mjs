export default [
  {
    text: "Examples",
    items: [
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "Runtime API Examples", link: "/api-examples" },
      { text: "test", link: "/test" },
    ],
  },
  {
    text: "About",
    items: [
      { text: "test", link: "/test" },
      {
        text: "me",
        collapsed: false,

        link: "/about/me.md",
        items: [{ text: "me1", link: "/about/about1/me1.md" }],
      },
      { text: "us", link: "/about/us.md" },
    ],
  },
];
