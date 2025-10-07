#!/usr/bin/env python3
"""
Create a collage from Desintox episode thumbnails
"""

from PIL import Image
import os
import glob

# Configuration
thumbnails_dir = os.path.join(os.path.dirname(__file__), '../public/desintox-thumbnails')
output_path = os.path.join(os.path.dirname(__file__), '../public/desintox-collage.jpg')

# Grid configuration - 8 cols x 6 rows = 48 thumbnails (nice rectangular format)
cols = 8
rows = 6
thumb_width = 240
thumb_height = 135
gap = 2
background_color = (0, 0, 0)  # Black

# Calculate output dimensions
canvas_width = cols * thumb_width + (cols - 1) * gap
canvas_height = rows * thumb_height + (rows - 1) * gap

print(f"Creating collage: {canvas_width}x{canvas_height}")

# Create blank canvas
canvas = Image.new('RGB', (canvas_width, canvas_height), background_color)

# Get all thumbnail files
thumbnail_files = sorted(glob.glob(os.path.join(thumbnails_dir, '*.jpg')))
print(f"Found {len(thumbnail_files)} thumbnails")

# Calculate how many thumbnails to use
total_tiles = cols * rows
thumbnails_to_use = min(len(thumbnail_files), total_tiles)

print(f"Using {thumbnails_to_use} out of {len(thumbnail_files)} thumbnails")

# Place thumbnails on canvas
for idx in range(thumbnails_to_use):
    thumb_file = thumbnail_files[idx]
    row = idx // cols
    col = idx % cols

    # Calculate position
    x = col * (thumb_width + gap)
    y = row * (thumb_height + gap)

    # Open and resize thumbnail
    try:
        thumb = Image.open(thumb_file)
        thumb = thumb.resize((thumb_width, thumb_height), Image.Resampling.LANCZOS)

        # Paste onto canvas
        canvas.paste(thumb, (x, y))
        print(f"✓ Added thumbnail {idx + 1}/{thumbnails_to_use}")
    except Exception as e:
        print(f"✗ Failed to process {thumb_file}: {e}")

# Save collage
canvas.save(output_path, 'JPEG', quality=85, optimize=True)
print(f"\n✓ Collage saved to: {output_path}")
print(f"Dimensions: {canvas_width}x{canvas_height}")
