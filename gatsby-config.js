/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Vagor Company UVC Terminator`,
    author: {
      name: `Armin Busatlic`,
    },
    description: `Vagor OVLAŠĆENI ZASTUPNIK ZA BALKAN UVC Terminator`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `pricing`,
      `call-to-action`,
      `screenshots`,
      // `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Proizvodi'},
      {path: 'pricing', label: 'O proizvodu'},
      {path: 'screenshots', label: 'Galerija'},
      // {path: 'testimonials', label: 'Reference'},
      {path: 'subscribe', label: 'Kontakt'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://www.facebook.com/grejalicezabaste.susacizaruke.uvlampezainsekte`,
        fa: `facebook` }
      
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
      line1: `Novi Beogad, Bulevar Arsenija Čarnojevića 39`,
      line2: `11 000, Beograd`,
      line3: `Srbija`,
    },
    contacts: [
      { text: `+38162 378 621`, url: `tel:+38162 378 621` },
      // { text: `123.456.7890`, url: `tel:1234567890`},
      { text: `vagordoo@gmail.com`, url: `mailto:vagordoo@gmail.com`},
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
