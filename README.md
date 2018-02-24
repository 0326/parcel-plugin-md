# parcel-plugin-md

 📦 Parcel plugin for transform markdown to HTML.

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

MIT.
