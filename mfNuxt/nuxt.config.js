import webpack from "webpack";
export default {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "no"
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.bunny.net/css?family=Work+Sans:400,600,700,800&display=swap"
      }
    ]
  },
  generate: {
    fallback: true
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    /* { src: '~plugins/ga.js', mode: 'client' }*/
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["vue-plausible"],

  plausible: {
    // Use as fallback if no runtime config is available at runtime
    domain: "xn--mittfravr-n3a.no"
  },
  publicRuntimeConfig: {
    plausible: {
      domain: "xn--mittfravr-n3a.no"
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    "vue-plausible"
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    extend(config, ctx) {}
  }
};
