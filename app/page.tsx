import Link from 'next/link'

const cards = [
  {
    emoji: '🏢',
    title: 'Entidades Promotoras de Salud (EPS)',
    description:
      'Aprende cómo el estándar mejora la trazabilidad, autorización y seguimiento de referencias.',
    href: '/docs/guia-eps'
  },
  {
    emoji: '🏥',
    title: 'Hospitales e IPS',
    description:
      'Descubre cómo enviar, recibir y gestionar referencias y contrareferencias de forma estandarizada.',
    href: '/docs/guia-hospitales'
  },
  {
    emoji: '💻',
    title: 'Desarrolladores',
    description:
      'Implementa el estándar con ejemplos de código, perfiles FHIR y endpoints documentados.',
    href: '/docs/guia-desarrolladores'
  }
]

const principios = [
  {
    bold: 'Basado en FHIR R4',
    text: 'Usamos el estándar internacional más adoptado en salud digital'
  },
  {
    bold: 'Contextualizado para Colombia',
    text: 'Perfiles adaptados a la normatividad y terminologías colombianas'
  },
  {
    bold: 'Abierto y colaborativo',
    text: 'Cualquier actor del sistema de salud puede contribuir'
  },
  {
    bold: 'Enfocado en el flujo',
    text: 'Lideramos el cómo, no proveemos infraestructura'
  }
]

export default function HomePage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Sofmed Interop
      </h1>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 400, color: '#6b7280', marginBottom: '1.5rem' }}>
        Estándar abierto de interoperabilidad para referencia y contrareferencia
        en Colombia
      </h2>
      <p style={{ lineHeight: 1.7, marginBottom: '2rem' }}>
        Sofmed Interop es una propuesta de estándar basado en{' '}
        <strong>FHIR R4</strong> diseñado para facilitar y estandarizar el
        intercambio de información clínica en los procesos de{' '}
        <strong>referencia y contrareferencia</strong> dentro del sistema de
        salud colombiano.
      </p>

      <hr style={{ margin: '2rem 0', borderColor: '#e5e7eb' }} />

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
        ¿Para quién es esta documentación?
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            style={{
              padding: '1.5rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
          >
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              {card.emoji} {card.title}
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.5 }}>
              {card.description}
            </p>
          </Link>
        ))}
      </div>

      <hr style={{ margin: '2rem 0', borderColor: '#e5e7eb' }} />

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
        Inicio rápido
      </h3>
      <ol style={{ lineHeight: 2, paddingLeft: '1.25rem' }}>
        <li>
          Lee{' '}
          <Link href="/docs/introduccion/que-es-sofmed-interop">
            ¿Qué es Sofmed Interop?
          </Link>{' '}
          para entender la visión
        </li>
        <li>
          Revisa el <Link href="/docs/inicio-rapido">Inicio rápido</Link> según
          tu rol
        </li>
        <li>
          Explora el{' '}
          <Link href="/docs/estandar/vision-general">Estándar</Link> en detalle
        </li>
      </ol>

      <hr style={{ margin: '2rem 0', borderColor: '#e5e7eb' }} />

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
        Principios del estándar
      </h3>
      <ul style={{ lineHeight: 2, paddingLeft: '1.25rem' }}>
        {principios.map((p) => (
          <li key={p.bold}>
            <strong>{p.bold}</strong> — {p.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
