const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src'),
    vendor: path.resolve(__dirname, 'src', 'vendor'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: true,
              esModule: false,
            }
          }
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          // 'url-loader',
          {
            loader: 'file-loader',
            options: {
              name(resourcePath, resourceQuery) {
                if (process.env.NODE_ENV === 'development') {
                  return '[path][name].[hash].[ext]';
                }
                return '[contenthash].[ext]';
              },
              outputPath: 'assets/images',
              // publicPath: 'images',
              postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
              emitFile: true,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
}
