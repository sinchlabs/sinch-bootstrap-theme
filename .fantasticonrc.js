const path = require('path');

module.exports = {
  inputDir: 'D:/apps/sinch-bootstrap-theme/icons/font-source',
  outputDir: 'D:/apps/sinch-bootstrap-theme/fonts',
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['css', 'json'],
  name: 'sinch-icons',
  prefix: 'si',
  selector: '.si',
  fontsUrl: '../fonts',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  templates: {
    css: path.join(__dirname, 'scripts', 'sinch-icons-css.hbs')
  },
  pathOptions: {
    css: path.join(__dirname, 'css', 'sinch-icons-font.css'),
    json: path.join(__dirname, 'fonts', 'sinch-icons.json')
  }
};
