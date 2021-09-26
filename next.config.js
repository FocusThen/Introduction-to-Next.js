// module.exports = {
//   webpack: {
//     // webpack config properties
//   },
//   env: {
//     MY_ENV_VAR: process.env.SECRET,
//   },
// }

// const { PHASE_PRODUCTION_BUILD } = require('next/constants')

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_BUILD) {
//     console.log('Im in Prod mode')

//     return defaultConfig
//   }

//   return defaultConfig
// }

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()
