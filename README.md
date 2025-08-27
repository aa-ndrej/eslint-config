# @aa-ndrej/eslint-config

![GitHub package.json version](https://img.shields.io/github/package-json/v/aa-ndrej/eslint-config?filename=packages%2Feslint-config%2Fpackage.json&style=flat-square)


## Installation

~~~bash
$ pnpm add -D eslint @aa-ndrej/eslint-config
~~~


## Usage

~~~js
// eslint.config.mjs

import { baseConfig, defineESLintConfig } from '@aa-ndrej/eslint-config'

export default defineESLintConfig([
  baseConfig({
    // Optional options...
  }),
])
~~~
