const blockDemo = require("./../../src/docsutil");
const {defaultTheme} = require("@vuepress/theme-default");
const {viteBundler} = require("@vuepress/bundler-vite");
module.exports = {
    title: "一码平台",
    description: "简化开发与交付，一码成就",
    port: 9988,
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    head: [
        ["link",{ rel: "icon",href: "/assets/logo.png" }]
    ],
    bundler: viteBundler({}),
    theme: defaultTheme({
        navbar: [
            {
                text: "主页",
                link: "/"
            },
            {
                text: "文档",
                link: "/guide/"
            },
            {
                text: "组件",
                link: "/components/"
            },
            {
                text: "示例",
                link: "https://bind.com/"
            },
        ],
        sidebar: // require("./config/sidebar"),
            {
                "/guide/": require("../guide/index"),
                "/components/": require("../components/index"),
            }
        // navbar: [
        //   {
        //     text: "首页",
        //     link: "/",
        //   },
        //   {
        //     text: "指南",
        //     children: [
        //       "/guide/get-started.md",
        //       "/guide/install.md",
        //       "/guide/demo.md",
        //     ],
        //   },
        //   {
        //     text: "GitHub",
        //     link: "https://github.com/seepine/vuepress-plugin-demo-block-vue3.git",
        //   },
        // ],
        // sidebar: {
        //   "/guide/": [
        //     {
        //       text: "指南",
        //       isGroup: true,
        //       children: [
        //         {
        //           text: "介绍",
        //           children: [
        //             "/guide/get-started.md",
        //             "/guide/install.md",
        //             "/guide/demo.md",
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
    }),
    plugins: [
        [
            blockDemo({
                path: __dirname,
            }),
        ],
    ],
    markdown: {
        lineNumbers: true,
    },
};