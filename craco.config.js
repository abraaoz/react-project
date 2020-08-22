const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@root": __dirname,
      "@base": path.resolve(__dirname, "src", "base"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@pages": path.resolve(__dirname, "src", "pages"),
    },
    configure: (webpackConfig) => {
      // Allow imports outside "src" folder
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
  },
  plugins: [{ plugin: CracoLessPlugin }],
};
