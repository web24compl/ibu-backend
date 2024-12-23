export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'default-src': ["'self'", 'https:'],
  //         'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000'], // Allow frontend domain
  //         'media-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000'], // For media files
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://your-nuxt-domain.com'], // Replace with your Nuxt app's URL
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true, // If using cookies or authentication
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
