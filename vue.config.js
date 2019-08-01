module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/css/default.scss";
            @import "@/assets/css/fonts.scss";
            @import "@/assets/css/common.scss";
            @import "@/assets/css/layout.scss";
            @import "@/assets/css/content.scss";
        `
      }
    }
  }
}
