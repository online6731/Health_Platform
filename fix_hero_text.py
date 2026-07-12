import os
import re

chapters_dir = r"c:\Users\moham\Downloads\Health Platform Proposal\src\chapters"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find blocks like .some-hero p { ... }
    # We want to inject color: rgba(255, 255, 255, 0.9); if it's not already there
    
    # Use a function for replacement to ensure we don't add it twice
    def replacer(match):
        block = match.group(0)
        if 'color:' not in block:
            # insert color: rgba(255, 255, 255, 0.9); right after the brace
            return match.group(1) + " {\n  color: rgba(255, 255, 255, 0.9);" + match.group(2)
        return block

    # Pattern matches something-hero p { followed by anything non-greedy until }
    pattern = re.compile(r'(\.[a-zA-Z0-9_-]+hero\s+p)\s*\{([^}]+)\}')
    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")

for filename in os.listdir(chapters_dir):
    if filename.endswith(".css"):
        process_file(os.path.join(chapters_dir, filename))

print("Done fixing hero p colors.")
