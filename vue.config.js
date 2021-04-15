var path = require("path");

module.exports = {
    configureWebpack: {
        // тут настройки вебпака, если вас не устраивают дефолтные. 
        // Дефолтные настройки находятся по пути node_modules/@vue/cli-service/webpack.config.js
        resolve: {
            alias: {
                // vue$: 'vue/dist/vue.js',
                "@": path.resolve(__dirname, "./src"),
                "@pages": path.resolve(__dirname, "./src/components/pages"),
                "@layouts": path.resolve(__dirname, "./src/components/layouts"),
                "@partials": path.resolve(__dirname, "./src/components/partials"),
                "@controls": path.resolve(__dirname, "./src/components/controls"),
                "@components": path.resolve(__dirname, "./src/components")
                //"@assets": path.resolve(__dirname, "./src/assets"),            
                //'jquery': path.resolve(__dirname, "./src/assets/js/jquery.min.js"),      
                //'bootstrap': path.resolve(__dirname, "./src/assets/js/bootstrap.min.js"),
                //'Modernizr':path.resolve(__dirname, "./src/assets/js/modernizr.custom.js"),
              }
        },
    }
}