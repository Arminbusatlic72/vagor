/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Vagor Company UV Terminator`,
    author: {
      name: `Armin Busatlic`,
    },
    description: `Vagor kompanija za nabavku UV lampi`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `pricing`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Proizvodi'},
      {path: 'pricing', label: 'O proizvodu'},
      {path: 'screenshots', label: 'Galerija'},
      {path: 'testimonials', label: 'Reference'},
      {path: 'subscribe', label: 'Kontakt'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://facebook.com/styleshout`,
        fa: `facebook` },
      { service: `Twitter`,
        url : `https://twitter.com/styleshout`,
        fa: `twitter` },
      { service: `GitHub`,
        url : `https://github.com/desmukh/gatsby-starter-woo`,
        fa: `github` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/VagorLogo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/VagorLogo.png`,
      text: `UVC TERMINATOR – NEUTRALIŠITE SVE VIRUSE I BAKTERIJE
      U VAZDUHU KOJI UDIŠETE I POVRŠINAMA KOJE DODIRUJETE!`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `647.343.8234`, url: `tel:6473438234` },
      { text: `123.456.7890`, url: `tel:1234567890`},
      { text: `someone@woosite.com`, url: `mailto:someone@woo.com`},
    ],
  },
  plugins: [ 
    `gatsby-plugin-anchor-links`, 
    `gatsby-plugin-smoothscroll`, 
    `react-scrollspy`,
    `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },`gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp` ],
}
