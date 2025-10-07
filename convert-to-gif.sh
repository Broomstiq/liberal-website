#!/bin/bash

# Video to GIF converter
# Usage: ./convert-to-gif.sh <input-video> [fps] [width]

# Use local ffmpeg binary
FFMPEG="/tmp/ffmpeg"

INPUT="$1"
FPS="${2:-15}"
WIDTH="${3:-480}"
OUTPUT="${INPUT%.*}.gif"

if [ -z "$INPUT" ]; then
    echo "Usage: $0 <input-video> [fps=15] [width=480]"
    exit 1
fi

if [ ! -f "$INPUT" ]; then
    echo "Error: Input file '$INPUT' not found"
    exit 1
fi

echo "Converting: $INPUT"
echo "Output: $OUTPUT"
echo "Settings: ${FPS}fps, ${WIDTH}px width"
echo ""

# Generate palette and convert to GIF
$FFMPEG -i "$INPUT" -vf "fps=${FPS},scale=${WIDTH}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" "$OUTPUT"

if [ $? -eq 0 ]; then
    # Get file sizes
    INPUT_SIZE=$(du -h "$INPUT" | cut -f1)
    OUTPUT_SIZE=$(du -h "$OUTPUT" | cut -f1)
    echo ""
    echo "✓ Conversion complete!"
    echo "  Input:  $INPUT_SIZE"
    echo "  Output: $OUTPUT_SIZE ($OUTPUT)"
else
    echo "✗ Conversion failed"
    exit 1
fi
