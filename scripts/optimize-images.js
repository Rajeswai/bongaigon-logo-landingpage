import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');
const publicDir = path.join(process.cwd(), 'public');

function getConfig(filename) {
  if (['aboutbuilderlogo.webp', 'logoimage.webp', 'hero.webp', 'about-builder.webp', 'builder-sketch.webp'].includes(filename)) {
    return { maxWidth: 400, quality: 78 };
  }
  
  if (filename.startsWith('map') || filename.startsWith('unitmap') || filename.includes('plan') || filename === 'mainplan.webp') {
    return { maxWidth: 1600, quality: 78 };
  }

  if (['g9.webp', 'g10.webp', 'picture1.webp', 'semiarenaview.webp', 'thankyoubg.webp', 'heroimage.webp'].includes(filename)) {
    return { maxWidth: 1400, quality: 72 };
  }

  return { maxWidth: 1000, quality: 72 };
}

async function optimizeAll() {
  console.log('--- Starting Deep Image Optimization ---');

  // 1. Optimize public/favicon.png
  const faviconPath = path.join(publicDir, 'favicon.png');
  if (fs.existsSync(faviconPath)) {
    const oldSize = fs.statSync(faviconPath).size;
    const inputBuffer = fs.readFileSync(faviconPath);
    const faviconBuffer = await sharp(inputBuffer)
      .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, quality: 80 })
      .toBuffer();
    fs.writeFileSync(faviconPath, faviconBuffer);
    const newSize = fs.statSync(faviconPath).size;
    console.log(`Favicon optimized: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
  }

  // 2. Optimize all images in src/assets/images
  const files = fs.readdirSync(imagesDir);
  let totalOld = 0;
  let totalNew = 0;

  for (const file of files) {
    if (!file.endsWith('.webp')) continue;
    const filePath = path.join(imagesDir, file);
    const oldSize = fs.statSync(filePath).size;
    totalOld += oldSize;

    try {
      const inputBuffer = fs.readFileSync(filePath);
      const meta = await sharp(inputBuffer).metadata();
      const config = getConfig(file);
      
      let pipeline = sharp(inputBuffer);

      if (meta.width && meta.width > config.maxWidth) {
        pipeline = pipeline.resize({ width: config.maxWidth, withoutEnlargement: true });
      }

      const outputBuffer = await pipeline
        .webp({ quality: config.quality, effort: 6 })
        .toBuffer();

      if (outputBuffer.length < oldSize) {
        fs.writeFileSync(filePath, outputBuffer);
        const newSize = outputBuffer.length;
        totalNew += newSize;
        console.log(`[OPT] ${file.padEnd(24)} -> max ${config.maxWidth}w | ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (-${(((oldSize - newSize) / oldSize) * 100).toFixed(1)}%)`);
      } else {
        totalNew += oldSize;
        console.log(`[KEEP] ${file.padEnd(23)} Already optimal: ${(oldSize / 1024).toFixed(1)} KB`);
      }
    } catch (err) {
      totalNew += oldSize;
      console.error(`[ERR] ${file}:`, err.message);
    }
  }

  console.log('\n==================================================');
  console.log(`Total Initial Size: ${(totalOld / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized Size: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((totalOld - totalNew) / 1024 / 1024).toFixed(2)} MB (-${(((totalOld - totalNew) / totalOld) * 100).toFixed(1)}%)`);
  console.log('==================================================\n');
}

optimizeAll();
