'use strict'
const path = require('path')
module.exports = {
  // 开发环境
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    host: 'localhost', // 如果配置了process.env.HOST, host将会被复写, 为了方便在手机上查看效果，也可以改成本机的ip， 如：192.168.1.100
    // host: '192.168.31.9',
    port: 6060, // 如果配置了process.env.PORT, port将会被复写
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false,

    // 是否启用eslint
    useEslint: true,
    // 是否eslint错误
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-source-map',
    cssSourceMap: false
  },
  // 生产环境
  build: {
    index: path.resolve(__dirname, '../ll/index.html'),
    assetsRoot: path.resolve(__dirname, '../ll/dist'),
    assetsSubDirectory: 'static',

    /**
     * You can set by youself according to actual condition
     * You will need to set this if you plan to deploy your site under a sub path,
     * for example GitHub pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then assetsPublicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     */
     /**
      * 如果您想将您的页面放置在 github.io
      */
    assetsPublicPath: '/ll/',
    productionSourceMap: false,
    devtool: 'source-map',

    // gzip压缩， 在设置为true前，请确保您已经
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report || false,

    // `npm run build:prod --generate_report`
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}
