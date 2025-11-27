const svgtofont = require('svgtofont');
const path = require('path');

svgtofont({
  src: path.resolve(__dirname, '../icons/font-source'),
  dist: path.resolve(__dirname, '../fonts'),
  fontName: 'sinch-icons',
  css: {
    output: path.resolve(__dirname, '../css'),
    fileName: 'sinch-icons-font'
  },
  classNamePrefix: 'si',
  startUnicode: 0xea01,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  website: null // disable website generation
}).then(() => {
  console.log('Icon font generated successfully!');
}).catch((err) => {
  console.error('Error generating font:', err);
});
