module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/mixins/_colors.scss";
          @import "@/styles/mixins/_font-sizes.scss";
        `,
      },
    },
  },
};
