import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{ borderRadius: '5px', marginRight: '10px' }}
        width={50}
        src='/polyxia-logo-white-bg.png'
      ></img>
      <h1 style={{ fontWeight: 'bold' }}>Polyxia</h1>
    </div>
  )
}

export default {
  logo: <Logo />,
  banner: {
    text: (
      <a
        href='https://github.com/polyxia-org/polyxia-org.github.io/issues/new?title=Feedback%20for%20%E2%80%9CPolyxia%E2%80%9D&labels=feedback'
        target='_blank'
      >
        <strong>Polyxia's documentation is under construction.</strong> Give us
        your feedback →
      </a>
    ),
  },
  primaryHue: {
    dark: 270,
    light: 270,
  },
  docsRepositoryBase:
    'https://github.com/polyxia-org/polyxia-org.github.io/tree/main/',
  project: {
    link: 'https://github.com/polyxia-org',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  footer: {
    text: 'MIT 2023 © Polyxia maintainers.',
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const base = 'https://polyxia-org.github.io/'
    const url = `${base}${asPath}`

    let title = `${frontMatter.title}` ?? 'Polyxia'
    if (asPath !== '/') {
      title += ' - Polyxia'
    }
    const description =
      frontMatter.description ??
      'Polyxia is a voice assistant project created by DevOps students at Polytech Montpellier that includes a FaaS architecture.'
    const image =
      frontMatter.image ??
      `https://raw.githubusercontent.com/polyxia-org/polyxia-org.github.io/main/public/polyxia-banner.png`

    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='title' content={title} />
        <meta name='theme-color' content='#321A4C' />
        <meta name='description' content={description} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={image} />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return {
        titleTemplate: 'Polyxia',
      }
    }
    return {
      titleTemplate: '%s - Polyxia',
    }
  },
}
