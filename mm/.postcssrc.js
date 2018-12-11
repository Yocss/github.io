// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // 浏览器兼容修改: use "browserslist" field in package.json
  // "autoprefixer": {}, // postcss-cssnext 已经有这个功能了
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 宽度
      viewportHeight: 1334, // 高度
      unitprecision: 3, // 最小可转换的px
      viewportUnit: 'vw', // 要转换的单位
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,  // 小于1px时不转换
      mediaQuery: false  // 是否允许在媒体查询中转换px
    },
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    },
    // px 转换成 rem 单位 已弃用
    // 'postcss-pxtorem': {
    //   // rootValue: 32,
    //   rootValue: 36,
    //   propList: ['*']
    // }
  }
}
