module.exports = {
  siteMetadata: {
    title: 'Heidelberger Institut für angewandte Informatik e.V.',
    description: 'Neuigkeiten von und Informationen über das Heidelberger Institut für angewandte Informatik',
    author: '@hiai-de',
    menuLinks: [
      {
        title: 'Blog',
        link: '/'
      },
      {
        title: 'Über uns',
        link: '/about'
      },
      {
        title: 'Kontaktformular',
        link: '/contact'
      },
      {
        title: 'Impressum',
        link: '/imprint'
      }
    ],
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsYaml',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'downloads',
        path: `${__dirname}/src/downloads`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mappings',
        path: `${__dirname}/src/mappings`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              tracedSVG: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-reading-time'
        ],
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-recaptcha',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#808288',
        theme_color: '#808288',
        display: 'minimal-ui',
        icon: 'src/images/logo_square.png',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            subsets: ['latin']
          },
          {
            family: 'Raleway',
            subsets: ['latin']
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
