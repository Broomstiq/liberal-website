#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Using CloudConvert API (free tier: 25 conversions/day)
// Or we can use ezgif.com programmatically

const inputFile = process.argv[2];
const fps = process.argv[3] || '15';
const width = process.argv[4] || '480';

if (!inputFile) {
  console.log('Usage: node convert-to-gif.js <input-video> [fps=15] [width=480]');
  process.exit(1);
}

if (!fs.existsSync(inputFile)) {
  console.error(`Error: File not found: ${inputFile}`);
  process.exit(1);
}

const outputFile = inputFile.replace(/\.(mp4|mov|avi|mkv)$/i, '.gif');

console.log(`Converting: ${inputFile}`);
console.log(`Output: ${outputFile}`);
console.log(`Settings: ${fps}fps, ${width}px width`);
console.log('');
console.log('Using ezgif.com API...');

// Upload to ezgif.com and convert
const FormData = require('form-data');
const form = new FormData();
form.append('new-image', fs.createReadStream(inputFile));

// Alternative: Let's use a Python script with moviepy instead
console.log('\nPlease use one of these alternatives:');
console.log('1. Install ffmpeg from https://ffmpeg.org/download.html');
console.log('2. Use online converter: https://ezgif.com/video-to-gif');
console.log('3. Use Python script (installing moviepy)...');
