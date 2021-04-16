const path = require('path');
// console.log('__dirname', __dirname);
// Используйте настройку configureWebpack для того чтобы переопределить настройки вебпака.
// Дефолтные настройки вебпака, которые использует vue-cli можно посмотреть по пути "\node_modules\@vue\cli-service\webpack.config.js"
module.exports = {
  assetsDir: "assets/",  
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/views/components"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@layouts": path.resolve(__dirname, "./src/views/layouts"),
      },
    }
  }
};