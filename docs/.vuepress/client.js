import { defineClientConfig } from "@vuepress/client";

import * as OneCodeVue from '../../dist/one-code-vue.mjs'
import '../../dist/style.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(OneCodeVue)
  },
  setup() {},
  rootComponents: [],
});