module.exports = {
  outputDir: './tabbycat/static/vue/', // Output to standard directory
  filenameHashing: false, // Don't add a hash to the filename
  runtimeCompiler: true, // Using <templates> in components; so this is needed
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // mutate webpack config for production...
  //   } else {
  //     // mutate webpack config for development...
  //   }
  // },
  devServer: {
    port: 8888,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow hot module reload
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  pages: {
    admin: {
      entry: 'tabbycat/templates/js-bundles/admin.js',
    },
    public: {
      entry: 'tabbycat/templates/js-bundles/public.js',
    },
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: 'static', // Serve results as flat page
      defaultSizes: 'gzip', // Show the filesizes as if gzipped
      openAnalyzer: false, // Enable to view a heatmap of dependency sizes
    },
  },
}
