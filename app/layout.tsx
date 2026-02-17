import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Sofmed Interop — Estándar FHIR R4 para Colombia',
    template: '%s | Sofmed Interop'
  },
  description:
    'Documentación del estándar de interoperabilidad FHIR R4 para referencia y contrareferencia en el sistema de salud colombiano.',
  openGraph: {
    title: 'Sofmed Interop',
    description:
      'Estándar abierto basado en FHIR R4 para facilitar la interoperabilidad en referencia y contrareferencia en Colombia.',
    siteName: 'Sofmed Interop',
    locale: 'es_CO',
    type: 'website'
  }
}

const logo = (
  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
    🏥 Sofmed Interop
  </span>
)

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/sofmed-admin/sofmed-interop"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sofmed-admin/sofmed-interop/tree/main"
          footer={
            <Footer>
              <p>
                © {new Date().getFullYear()} Sofmed · Estándar abierto para la
                interoperabilidad en salud en Colombia
              </p>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
