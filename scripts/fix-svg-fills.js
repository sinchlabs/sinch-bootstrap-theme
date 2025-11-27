const fs = require('fs');
const path = require('path');

const iconDirs = [
  'icons/branded',
  'icons/channel',
  'icons/logos'
];

let totalFixed = 0;

iconDirs.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.svg'));

  files.forEach(file => {
    const filePath = path.join(fullPath, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace fill="none" with fill="currentColor" on the root svg element
    if (content.includes('fill="none"')) {
      content = content.replace(/(<svg[^>]*)\s+fill="none"/, '$1 fill="currentColor"');
      fs.writeFileSync(filePath, content);
      totalFixed++;
      console.log(`Fixed: ${dir}/${file}`);
    }
  });
});

console.log(`\nTotal files fixed: ${totalFixed}`);
