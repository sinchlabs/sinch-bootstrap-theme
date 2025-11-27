import svgtofont from 'svgtofont';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  website: null
}).then(() => {
  console.log('Icon font generated successfully!');
}).catch((err) => {
  console.error('Error generating font:', err);
});
