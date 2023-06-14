const {NextFederationPlugin} = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    domains: ["image.tmdb.org", "www.themoviedb.org"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, options) =>{

    //console.log({config, options})
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'movieApp',
        remotes: {
          mainApp: `mainApp@http://localhost:2200/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        /* exposes: {
          './title': './components/exposedTitle.js',
          './checkout': './pages/checkout',
        },*/
        shared: {
          // whatever else
        },
        /*
        exposes: {
            './movie-app': './pages/projects/movie-app/[page].tsx',
          },
          */
        extraOptions: {
          exposePages: true, // `false` by default
          //enableImageLoaderFix: true, // `false` by default
          //enableUrlLoaderFix: true, // `false` by default
          //automaticAsyncBoundary: true, // `false` by default
          //skipSharingNextInternals: false // `false` by default
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig



//images.ctfassets.net
