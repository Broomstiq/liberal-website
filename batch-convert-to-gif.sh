#!/bin/bash

# Batch Video to GIF converter
# Usage: ./batch-convert-to-gif.sh <folder-path> [fps] [width]

FOLDER="$1"
FPS="${2:-15}"
WIDTH="${3:-480}"
FFMPEG="/tmp/ffmpeg"

# Counters
TOTAL=0
SUCCESS=0
FAILED=0
CORRUPTED=0

# Arrays to store results
declare -a SUCCESS_FILES
declare -a FAILED_FILES
declare -a CORRUPTED_FILES

if [ -z "$FOLDER" ]; then
    echo "Usage: $0 <folder-path> [fps=15] [width=480]"
    echo "Example: $0 ressources/ 15 480"
    exit 1
fi

if [ ! -d "$FOLDER" ]; then
    echo "Error: Folder '$FOLDER' not found"
    exit 1
fi

echo "=========================================="
echo "Batch Video to GIF Converter"
echo "=========================================="
echo "Folder: $FOLDER"
echo "Settings: ${FPS}fps, ${WIDTH}px width"
echo "=========================================="
echo ""

# Find all video files
shopt -s nullglob
VIDEO_FILES=("$FOLDER"/*.mp4 "$FOLDER"/*.mov "$FOLDER"/*.MP4 "$FOLDER"/*.MOV "$FOLDER"/*.avi "$FOLDER"/*.AVI)

if [ ${#VIDEO_FILES[@]} -eq 0 ]; then
    echo "No video files found in $FOLDER"
    exit 1
fi

echo "Found ${#VIDEO_FILES[@]} video file(s)"
echo ""

# Process each video
for INPUT in "${VIDEO_FILES[@]}"; do
    TOTAL=$((TOTAL + 1))
    FILENAME=$(basename "$INPUT")
    OUTPUT="${INPUT%.*}.gif"

    echo "[$TOTAL/${#VIDEO_FILES[@]}] Processing: $FILENAME"

    # Check if file is valid video
    FILE_TYPE=$(file "$INPUT" | grep -i -E "mp4|quicktime|video|iso media")

    if [ -z "$FILE_TYPE" ]; then
        echo "  ⚠ Corrupted or invalid video file"
        CORRUPTED=$((CORRUPTED + 1))
        CORRUPTED_FILES+=("$FILENAME")
        echo ""
        continue
    fi

    # Convert to GIF
    $FFMPEG -i "$INPUT" -vf "fps=${FPS},scale=${WIDTH}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" "$OUTPUT" -y 2>&1 | grep -E "(error|Error|Invalid)" > /tmp/ffmpeg_error.log

    if [ $? -eq 0 ] && [ -f "$OUTPUT" ]; then
        INPUT_SIZE=$(du -h "$INPUT" | cut -f1)
        OUTPUT_SIZE=$(du -h "$OUTPUT" | cut -f1)
        echo "  ✓ Success: $OUTPUT_SIZE (was $INPUT_SIZE)"
        SUCCESS=$((SUCCESS + 1))
        SUCCESS_FILES+=("$FILENAME → $(basename "$OUTPUT")")
    else
        echo "  ✗ Failed to convert"
        FAILED=$((FAILED + 1))
        FAILED_FILES+=("$FILENAME")
    fi
    echo ""
done

# Summary
echo "=========================================="
echo "SUMMARY"
echo "=========================================="
echo "Total files:      $TOTAL"
echo "Successfully converted: $SUCCESS"
echo "Failed:           $FAILED"
echo "Corrupted:        $CORRUPTED"
echo "=========================================="

if [ $SUCCESS -gt 0 ]; then
    echo ""
    echo "✓ Successfully converted:"
    for file in "${SUCCESS_FILES[@]}"; do
        echo "  - $file"
    done
fi

if [ $CORRUPTED -gt 0 ]; then
    echo ""
    echo "⚠ Corrupted/Invalid files:"
    for file in "${CORRUPTED_FILES[@]}"; do
        echo "  - $file"
    done
fi

if [ $FAILED -gt 0 ]; then
    echo ""
    echo "✗ Failed conversions:"
    for file in "${FAILED_FILES[@]}"; do
        echo "  - $file"
    done
fi

echo ""
echo "Done!"
