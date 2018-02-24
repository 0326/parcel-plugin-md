const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset')
const marked = require('marked')

module.exports = class MarkdownAsset extends HTMLAsset {
  constructor (name, pkg, options) {
    super(name, pkg, options)
    this.type = 'js'
  }

  parse (code) {
    const transHtml = marked(code)
    // hack javascript code ${} syntax and `` string.
    this.transHtml = transHtml.replace(/\$/g, '&#36;').replace(/`/g, '&#96;')
    return super.parse(this.transHtml)
  }

  generate () {
    return {
      js: `module.exports=\`${this.transHtml}\``
    }
  }
}
