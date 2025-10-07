/**
 * Script to fetch Dailymotion video thumbnails for Desintox episodes
 * and create a collage for the project card
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Dailymotion video IDs from desintox page
const videoIds = [
  // Animateur episodes
  'x8akkls', 'x8ap18q', 'x8apzz8', 'x8ayhox', 'x8b8y2q', 'x8bn4m8', 'x8bu8y4',
  'x8fblx9', 'x8fiqhw', 'x8fld0h', 'x8fqtld', 'x8fssu8', 'x8g41b4', 'x8gvmnn',
  'x8hqtvm', 'x8hzgiq', 'x8jaabg', 'x8jcln3', 'x8ji5d2', 'x8jkb0a', 'x8k6cbw',
  'x8kehn8', 'x8lei0y', 'x8lqhlz', 'x8nep7c', 'x8ngks3', 'x8npsmw',
  // Réalisateur episodes (Dailymotion only)
  'x8f6m2h', 'x8fe0qr', 'x8g66bf', 'x8gavq9', 'x8jswh5', 'x8k26kk', 'x8kozqx',
  'x8ktn5z', 'x8l1h5w', 'x8ll8re', 'x8lxvt7', 'x8m37oc', 'x8mqvrk', 'x8mssam',
  'x8mxcpb', 'x8n44js', 'x8nkxub', 'x8ntnkg', 'x8nw2ym', 'x8o0y74', 'x8o6h23',
  'x8oc3j3'
];

// Create output directory
const outputDir = path.join(__dirname, '../public/desintox-thumbnails');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to get thumbnail URL from Dailymotion API
function getThumbnailUrl(videoId) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://api.dailymotion.com/video/${videoId}?fields=thumbnail_720_url`;

    https.get(apiUrl, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.thumbnail_720_url) {
            resolve(json.thumbnail_720_url);
          } else {
            reject(new Error(`No thumbnail URL found for ${videoId}`));
          }
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

// Function to download image from URL
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(outputPath, () => {});
        return downloadImage(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(outputPath);
        });
      } else {
        fs.unlink(outputPath, () => {});
        reject(new Error(`Failed with status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

// Function to download thumbnail
async function downloadThumbnail(videoId, index) {
  try {
    const thumbnailUrl = await getThumbnailUrl(videoId);
    const outputPath = path.join(outputDir, `${String(index).padStart(3, '0')}_${videoId}.jpg`);
    await downloadImage(thumbnailUrl, outputPath);
    console.log(`✓ Downloaded: ${videoId}`);
    return outputPath;
  } catch (err) {
    console.log(`✗ Failed: ${videoId} - ${err.message}`);
    throw err;
  }
}

// Download all thumbnails
async function downloadAll() {
  console.log(`Starting download of ${videoIds.length} thumbnails...`);

  const results = [];
  for (let i = 0; i < videoIds.length; i++) {
    try {
      const result = await downloadThumbnail(videoIds[i], i);
      results.push(result);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      // Continue even if one fails
    }
  }

  console.log(`\nCompleted! Downloaded ${results.length}/${videoIds.length} thumbnails`);
  console.log(`Output directory: ${outputDir}`);
  console.log('\nNext step: Use ImageMagick to create a collage:');
  console.log(`cd ${outputDir}`);
  console.log(`montage *.jpg -tile 8x6 -geometry 240x135+2+2 -background "#000000" ../desintox-collage.jpg`);
}

downloadAll().catch(console.error);
