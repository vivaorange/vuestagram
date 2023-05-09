const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "앱이름",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, "index.html"], // 제외하고 싶은 파일 설정
    },
  },
});
