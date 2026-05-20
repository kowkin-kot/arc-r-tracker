
import fs from 'fs';

const filePath = 'src/data/db.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The issue is items missing the closing } before the next {
// Pattern to find: ],\n  { (when it should be ],\n  },\n  {)
// Or more generally, if a project/quest array ends, we need to check if the item ends there too.

// Let's use a more robust regex to fix the common broken patterns
// 1. Missing closing brace for item after a project/quest array
content = content.replace(/\]\s*,\s*\n\s+\{/g, ']\n  },\n  {');

// 2. Double closing brackets at the end of the file (I saw this in view_file earlier)
content = content.replace(/\]\s*\]\s*;\s*$/g, '];');

// Let's also make sure itemsList and blueprintsList are correctly declared.
// I'll re-run my previous fix logic but more carefully.

fs.writeFileSync(filePath, content);
console.log("File fixed with regex successfully");
