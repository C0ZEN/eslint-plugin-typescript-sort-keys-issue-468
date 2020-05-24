# eslint-plugin-typescript-sort-keys-issue-468

Reproduction for the issue https://github.com/infctr/eslint-plugin-typescript-sort-keys/issues/17

## How to reproduce

**Steps:**

- Run `npm i`
- Run `npm run lint`

I have another after that:

```
Error: Failed to load plugin 'typescript-sort-keys' declared in '.eslintrc': No valid exports main found for 'D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\node_modules\eslint-plugin-typescript-sort-keys'
Require stack:
- D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\__placeholder__.js

Error: Failed to load plugin 'typescript-sort-keys' declared in '.eslintrc': No valid exports main found for 'D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\node_modules\eslint-plugin-typescript-sort-keys'
Require stack:
- D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\__placeholder__.js
    at resolveExportsTarget (internal/modules/cjs/loader.js:632:9)
    at applyExports (internal/modules/cjs/loader.js:500:14)
    at resolveExports (internal/modules/cjs/loader.js:549:12)
    at Function.Module._findPath (internal/modules/cjs/loader.js:664:22)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:967:27)
    at Function.resolve (internal/modules/cjs/helpers.js:78:19)
    at Object.resolve (D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\node_modules\eslint\lib\shared\relative-module-resolver.js:28:50)
    at ConfigArrayFactory._loadPlugin (D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\node_modules\eslint\lib\cli-engine\config-array-factory.js:992:39)
    at D:\cozen\Documents\eslint\eslint-plugin-typescript-sort-keys-issue-468\node_modules\eslint\lib\cli-engine\config-array-factory.js:883:33
    at Array.reduce (<anonymous>)
Process finished with exit code -1
```
