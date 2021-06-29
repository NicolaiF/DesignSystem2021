const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        drypp: path.resolve(__dirname, 'packages'),
      },
    },
  });
};
