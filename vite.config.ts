import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import json from '@rollup/plugin-json'
// @ts-ignore
import typescript from 'rollup-plugin-typescript';
// import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
    plugins: [
        vue(),
    ],
    // server: {
    //     host: false,
    // },
    css: {
        preprocessorOptions: {
            less: {
                math: "always",
                globalVars: {
                    // mainColor: "red",
                }
            },
        },
        devSourcemap: true,
    },
    build: {
        target: 'modules',
        outDir: "./dist",
        minify: true,
        sourcemap: true,
        // cssCodeSplit: false,
        assetsInlineLimit: 40960,
        lib: {
            entry: 'src/index.ts',
            name: 'one-code-vue',
            formats: ['es'],
            fileName: "one-code-vue",
        },
        rollupOptions: {

            output: {
                name: "one-code-vue",
                exports: 'named',
                globals: {
                    vue: "Vue",
                },
            },
            external: [
                'vue',
                'lodash',
                'element-plus',
                'localforage',
                'json5',
                "monaco-editor",
                "monaco-editor/esm/vs/basic-languages/sql/sql.js",
                // "monaco-editor/esm/vs/editor/contrib/find/findController",
                // "monaco-editor/esm/vs/editor/contrib/hover/hover"
                "@element-plus/icons-vue",
                "@vicons/fa",
                "@vicons/utils",
                "axios"
            ],
            plugins: [
                typescript({
                    "include": [
                        "./src/**/*.ts",
                        "./src/**/*.js"
                    ],
                    "exclude": [
                        "./dist",
                        "./node_modules"
                    ]
                }),
                // postcss({
                //     extensions: ['.css'],
                //     extract: true,
                //     plugins: [
                //         simplevars(),
                //         nested(),
                //         cssnext({warnForDuplicates: false,}),
                //         // cssnano()
                //     ]
                // }),
                json(),
            ],
        },
    },
});