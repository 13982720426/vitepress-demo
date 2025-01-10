<script setup>
import DefaultTheme from "vitepress/theme";
import { watch } from "vue";
import Giscus from "@giscus/vue";
import { useRoute, useData, inBrowser } from "vitepress";

const { page, isDark } = useData();

const { Layout } = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");
  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: dark ? "transparent_dark" : "light",
        },
      },
    },
    "https://giscus.app"
  );
});
</script>
<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 24px">
        <!-- 在 https://giscus.app/zh-CN 官网，填入仓库 13982720426/glob-comments
        ,分类 Announcements。即可自动生成 repoId, category-id 。并且第一个评论时
        会在仓库自动生成 discussion -->
        <Giscus
          :key="page.filePath"
          repo="13982720426/glob-comments"
          repoId="MDEwOlJlcG9zaXRvcnkzNjI1MDI0MTE="
          category="Announcements"
          category-id="DIC_kwDOFZtZC84Cl6Ng"
          mapping="pathname"
          script="0"
          reactionsEnabled="1"
          emitMetadata="0"
          :theme="isDark ? 'dark' : 'light'"
          inputPosition="top"
          lang="zh-CN"
          crossorigin="anonymous"
          :discussion="page.filePath"
        />
      </div>
    </template>
  </Layout>
</template>
<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 400px;
  border: none;
  margin-top: 40px;
  margin-bottom: 40px;
}
th,
td {
  white-space: nowrap;
  width: 1%;
}
.main img {
  display: block;
  margin: 0 auto;
}
</style>
