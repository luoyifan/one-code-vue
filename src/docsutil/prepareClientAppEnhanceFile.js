// const { globby, path } = require("@vuepress/utils");
import { globby, path } from "@vuepress/utils";

module.exports = async (app, options, identifier = "") => {
  const getComponentsFromDir = async ({
    componentsDir,
    componentsPatterns,
    getComponentName,
  }) => {
    if (!componentsDir) {
      return {};
    }
    // get all matched component files
    const componentsDirFiles = await globby(componentsPatterns, {
      cwd: componentsDir,
    });
    // transform files to name => filepath map
    return Object.fromEntries(
      componentsDirFiles.map((filename) => [
        getComponentName(filename),
        path.resolve(componentsDir, filename),
      ])
    );
  };

  const componentsFromDir = await getComponentsFromDir(options);
  const baseComponents = {
    DemoBlock: path.resolve(__dirname, "./DemoBlock.vue"),
  };
  const componentsMap = {
    ...componentsFromDir,
    ...options.components,
    ...baseComponents,
  };
  const content = `\
    import { defineClientConfig } from '@vuepress/client'
    import { defineAsyncComponent } from 'vue'
    export default defineClientConfig({
        enhance({ app }){\
            ${Object.entries(componentsMap).map(
              ([name, filepath]) => `
            app.component(${JSON.stringify(
              name
            )}, defineAsyncComponent(() => import(${JSON.stringify(
                filepath
              )})))`
            )}
        },
    })
    `;
  // write temp file and return the file path
  return app.writeTemp(`register-components/client.js`, content);
};
