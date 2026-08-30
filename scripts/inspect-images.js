import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src', 'assets', 'images');
const files = fs.readdirSync(dir);

async function inspect() {
  let totalBytes = 0;
  const infoList = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;
    totalBytes += stat.size;
    try {
      const meta = await sharp(filePath).metadata();
      infoList.push({
        file,
        sizeKB: (stat.size / 1024).toFixed(1),
        sizeBytes: stat.size,
        width: meta.width,
        height: meta.height,
        format: meta.format,
      });
    } catch (e) {
      infoList.push({ file, sizeKB: (stat.size / 1024).toFixed(1), error: e.message });
    }
  }

  infoList.sort((a, b) => b.sizeBytes - a.sizeBytes);
  console.log(`Total images: ${infoList.length}, Total Size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB\n`);
  console.table(infoList.map(i => ({
    File: i.file,
    'Size (KB)': i.sizeKB,
    Width: i.width,
    Height: i.height,
    Format: i.format
  })));
}

inspect();
