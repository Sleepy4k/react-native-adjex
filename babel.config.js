module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@navigations": "./src/navigations",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@helpers": "./src/helpers",
            "@assets": "./src/assets",
            "@images": "./src/assets/images",
            "@fonts": "./src/assets/fonts",
          },
        },
      ],
    ],
  };
};
