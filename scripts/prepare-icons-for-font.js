const fs = require('fs');
const path = require('path');

// Create output directory
const outputDir = path.join(__dirname, '..', 'icons', 'font-source');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Clear existing files
fs.readdirSync(outputDir).forEach(f => fs.unlinkSync(path.join(outputDir, f)));

const iconSources = [
  { dir: 'icons/branded', prefix: '' },           // sms.svg -> sms.svg
  { dir: 'icons/channel', prefix: 'channel-' },   // whatsapp.svg -> channel-whatsapp.svg
  { dir: 'icons/logos', prefix: 'logo-' }         // sinch-icon.svg -> logo-sinch-icon.svg
];

let totalCopied = 0;

iconSources.forEach(({ dir, prefix }) => {
  const fullPath = path.join(__dirname, '..', dir);
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.svg'));

  files.forEach(file => {
    const srcPath = path.join(fullPath, file);
    const destName = prefix + file;
    const destPath = path.join(outputDir, destName);

    fs.copyFileSync(srcPath, destPath);
    totalCopied++;
  });

  console.log(`Copied ${files.length} files from ${dir} with prefix "${prefix}"`);
});

console.log(`\nTotal icons copied to font-source: ${totalCopied}`);
