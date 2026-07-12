import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace React import
content = content.replace("import React, { useState, useEffect } from 'react'", "import React, { useState, useEffect, lazy, Suspense } from 'react'")

# Also import Loader2
content = content.replace("import { Menu } from 'lucide-react'", "import { Menu, Loader2 } from 'lucide-react'")

# Replace components imports
# HomeDashboard
content = re.sub(r"import HomeDashboard from '\./components/HomeDashboard'", "const HomeDashboard = lazy(() => import('./components/HomeDashboard'));", content)
# Chapters
content = re.sub(r"import Chapter(\d+) from '\./chapters/Chapter(\d+)'", r"const Chapter\1 = lazy(() => import('./chapters/Chapter\2'));", content)

# Wrap Routes
suspense_wrapper_start = '''<Suspense fallback={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
              <Loader2 className="animate-spin" size={40} color="var(--accent-blue)" />
            </div>
          }>
            <Routes>'''
suspense_wrapper_end = '''</Routes>
          </Suspense>'''

content = content.replace('<Routes>', suspense_wrapper_start)
content = content.replace('</Routes>', suspense_wrapper_end)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('App.jsx refactored for lazy loading!')
