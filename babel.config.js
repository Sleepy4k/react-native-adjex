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
            "@fonts": "./src/assets/fonts",
            "@config": "./app.json",
            "@assets": "./src/assets",
            "@images": "./src/assets/images",
            "@helpers": "./src/helpers",
            "@layouts": "./src/layouts",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@constants": "./src/constants",
            "@components": "./src/components",
            "@navigations": "./src/navigations",
          },
        },
      ],
    ],
  };
};
