// GitHub Pages has no server-side routing. On refresh of /posts/3 it looks for
// a real file and shows 404.html. We make 404.html a copy of index.html, so the
// React app loads and React Router shows the right page.
import { copyFileSync } from 'node:fs'

copyFileSync('docs/index.html', 'docs/404.html')
console.log('docs/404.html created')
