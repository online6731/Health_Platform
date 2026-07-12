import os
import re

chapters_dir = r"c:\Users\moham\Downloads\Health Platform Proposal\src\chapters"

replacements = [
    (r"rgba?\(255,\s*255,\s*255,\s*0\.0[2-5]\)", "var(--bg-secondary)"),
    (r"rgba?\(255,\s*255,\s*255,\s*0\.0[6-9]\)", "var(--bg-card-hover)"),
    (r"rgba?\(30,\s*30,\s*42,\s*0\.[0-9]\)", "var(--bg-card)"),
    (r"rgba?\(20,\s*20,\s*30,\s*0\.[0-9]\)", "var(--bg-card-hover)"),
    (r"rgba?\(13,\s*12,\s*22,\s*0\.[0-9]\)", "var(--bg-card)"),
    (r"rgba?\(10,\s*10,\s*20,\s*0\.[0-9]\)", "var(--bg-card-hover)"),
    (r"rgba?\(0,\s*0,\s*0,\s*0\.[1-5]\)", "var(--glass-shadow)"),
    (r"#1a1f2e", "var(--bg-card)"),
]

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")

for filename in os.listdir(chapters_dir):
    if filename.endswith(".jsx") or filename.endswith(".css"):
        process_file(os.path.join(chapters_dir, filename))

print("Done replacing hardcoded colors in chapters.")
