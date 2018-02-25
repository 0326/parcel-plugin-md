# parcel-plugin-md

 📦 Parcel plugin for transform markdown to HTML.

<p align="left">
  <a href="https://www.npmjs.com/package/parcel-plugin-md">
    <img src="https://img.shields.io/npm/dt/parcel-plugin-md.svg" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/parcel-plugin-md">
    <img src="https://img.shields.io/npm/v/parcel-plugin-md.svg" alt="npm">
  </a>
  <a href="https://coveralls.io/r/0326/parcel-plugin-md">
    <img src="https://img.shields.io/npm/l/parcel-plugin-md.svg" alt="License">
  </a>
</p>

# Features
This plugin is based on [marked](https://github.com/markedjs/marked), support full-featured markdown syntax. Surppot ES6 code syntax.

# Getting started
First of all, install the plugin:

```bash
npm i parcel-plugin-md --save-dev # or yarn add parcel-plugin-md --dev
```

Then you can import *.md file as html string:

```javascript
import mdTpl from 'README.md'

document.body.innerHTML = mdTpl
```

Alternative plugin: [parcel-plugin-markdown](https://github.com/gongpeione/parcel-plugin-markdown).

# License
<a href="./LICENSE">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/License_icon-mit-88x31-2.svg/128px-License_icon-mit-88x31-2.svg.png">
</a>
