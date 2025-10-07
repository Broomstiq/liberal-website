#!/usr/bin/env python3

import sys
import os
import subprocess

def convert_to_gif(input_file, fps=15, width=480):
    if not os.path.exists(input_file):
        print(f"Error: File not found: {input_file}")
        sys.exit(1)

    base_name = os.path.splitext(input_file)[0]
    output_file = f"{base_name}.gif"

    print(f"Converting: {input_file}")
    print(f"Output: {output_file}")
    print(f"Settings: {fps}fps, {width}px width")
    print()

    # Try ffmpeg first
    ffmpeg_cmd = [
        'ffmpeg', '-i', input_file,
        '-vf', f'fps={fps},scale={width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse',
        '-y', output_file
    ]

    try:
        subprocess.run(ffmpeg_cmd, check=True, capture_output=True)
        input_size = os.path.getsize(input_file) / (1024*1024)
        output_size = os.path.getsize(output_file) / (1024*1024)
        print(f"✓ Conversion complete!")
        print(f"  Input:  {input_size:.2f}MB")
        print(f"  Output: {output_size:.2f}MB ({output_file})")
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("Error: ffmpeg not found. Please install ffmpeg:")
        print("  Download from: https://ffmpeg.org/download.html")
        print("  Or use online converter: https://cloudconvert.com/mp4-to-gif")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python convert-to-gif.py <input-video> [fps=15] [width=480]")
        sys.exit(1)

    input_file = sys.argv[1]
    fps = int(sys.argv[2]) if len(sys.argv) > 2 else 15
    width = int(sys.argv[3]) if len(sys.argv) > 3 else 480

    convert_to_gif(input_file, fps, width)
