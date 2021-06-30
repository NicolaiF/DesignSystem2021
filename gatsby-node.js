const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        '@dypp': path.resolve(__dirname, 'packages'),
      },
    },
  });
};
