/* eslint-env node */
// Post-build pre-rendering: loads the built SPA in headless Chrome for each
// route and writes the fully-rendered HTML (including react-helmet-async meta
// tags and JSON-LD) to dist/<route>/index.html. This gives crawlers and social
// scrapers real HTML instead of an empty <div id="root">.
//
// Runs after `vite build`. If it fails, the normal SPA build in dist/ is still
// valid — pre-rendering is a progressive enhancement, not a hard dependency.

import Prerenderer from '@prerenderer/prerenderer'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import { writeFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const staticDir = join(__dirname, 'dist')
const routes = ['/', '/Servicios', '/Nosotros', '/Contacto']

const prerenderer = new Prerenderer({
  staticDir,
  // Render one route at a time: parallel rendering caused cold-start races
  // where the first routes were snapshotted before react-helmet-async had
  // flushed the <head>. Serial + a fixed settle delay is reliable here.
  maxConcurrentRoutes: 1,
  renderer: new PuppeteerRenderer({
    // Deterministic, race-free: snapshot only once react-helmet-async has
    // flushed the <head> and dispatched 'helmet-ready' (see Seo.jsx). This
    // avoids the fixed-delay races where Home/Servicios were captured early.
    renderAfterDocumentEvent: 'helmet-ready',
    timeout: 30000,
    launchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
  }),
})

try {
  await prerenderer.initialize()
  const rendered = await prerenderer.renderRoutes(routes)

  for (const page of rendered) {
    const outPath =
      page.route === '/'
        ? join(staticDir, 'index.html')
        : join(staticDir, page.route, 'index.html')

    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, page.html.trim())
    console.log(`prerendered ${page.route} -> ${outPath.replace(staticDir, 'dist')}`)
  }

  await prerenderer.destroy()
  console.log('Pre-rendering complete.')
} catch (err) {
  await prerenderer.destroy()
  console.error('Pre-rendering failed (SPA build in dist/ is still usable):')
  console.error(err)
  process.exit(1)
}
