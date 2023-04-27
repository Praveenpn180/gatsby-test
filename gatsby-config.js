/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kks-docs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": ""
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};