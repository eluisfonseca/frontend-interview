// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `
//           @import "@/styles/mixins/_colors.scss";
//           @import "@/styles/mixins/_font-sizes.scss";
//         `,
//       },
//     },
//   },
// };
const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/mixins/*.scss')],
    },
  },
};
