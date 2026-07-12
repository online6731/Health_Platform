import os
import re

chapters_dir = r"c:\Users\moham\Downloads\Health Platform Proposal\src\chapters"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The previous script added: \n  color: rgba(255, 255, 255, 0.9);
    # We will remove this exact string from the CSS files.
    
    target_str = "\n  color: rgba(255, 255, 255, 0.9);"
    if target_str in content:
        new_content = content.replace(target_str, "")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Reverted {os.path.basename(filepath)}")

for filename in os.listdir(chapters_dir):
    if filename.endswith(".css"):
        process_file(os.path.join(chapters_dir, filename))

print("Done reverting hero p colors.")
