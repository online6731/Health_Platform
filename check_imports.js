import fs from 'fs';
import path from 'path';

const chaptersDir = './src/chapters';
const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const content = fs.readFileSync(path.join(chaptersDir, file), 'utf-8');
  
  // extract lucide-react imports
  const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
  const lucideImports = importMatch ? importMatch[1].split(',').map(s => s.trim()).filter(Boolean) : [];
  
  // extract all JSX tags that start with uppercase (Component usage)
  const tagRegex = /<([A-Z][a-zA-Z0-9]*)/g;
  let match;
  const usedTags = new Set();
  while ((match = tagRegex.exec(content)) !== null) {
    usedTags.add(match[1]);
  }
  
  const missingImports = [];
  for (const tag of usedTags) {
    if (tag === 'Fragment') continue;
    
    // Determine if it's imported in the file at all
    const importStatementRegex = new RegExp(`import\\s+(?:{[^}]*\\b${tag}\\b[^}]*}|\\b${tag}\\b)\\s+from`, 'g');
    if (!importStatementRegex.test(content)) {
      missingImports.push(tag);
    }
  }
  
  if (missingImports.length > 0) {
    console.log(`File: ${file} | Missing Imports: ${missingImports.join(', ')}`);
  }
}
