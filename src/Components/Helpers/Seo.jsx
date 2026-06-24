import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../../seo.js'

/**
 * Per-route SEO head tags.
 * @param {string} title        Full <title> for the page.
 * @param {string} description  Meta description (~150 chars).
 * @param {string} path         Route path, e.g. "/Servicios" (used for canonical + og:url).
 * @param {object[]} [jsonLd]   Optional array of JSON-LD objects to embed.
 */
// Fired after react-helmet-async finishes writing tags to <head>. The
// pre-render step (prerender.js) waits for this event so it snapshots the page
// only once the full per-route head is in place. No-op in normal browsing.
const signalHelmetReady = () => {
  if (typeof document !== 'undefined') {
    document.dispatchEvent(new Event('helmet-ready'))
  }
}

function Seo({ title, description, path, jsonLd = [] }) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet onChangeClientState={signalHelmetReady}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd.map((schema, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default Seo
