const blockDemo = require("./../../src/docsutil");
const {defaultTheme} = require("@vuepress/theme-default");
const {viteBundler} = require("@vuepress/bundler-vite");
module.exports = {
    title: "一码平台",
    description: "简化开发与交付，一码成就",
    port: 9988,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '一码平台',
            description: "简化开发与交付，一码成就",
        },
        '/en/': {
            lang: 'en-US',
            title: ' ',
            description: "Simplify development and delivery",
        }
    },
    head: [
        ["link", {rel: "icon", href: "/assets/logo.png"}]
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