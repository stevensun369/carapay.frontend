let apiURL
let env = process.env.REACT_APP_ENV

if (env === 'dev') {
  apiURL = 'http://192.168.0.24:1000'
} else if (env === 'prod') {
  apiURL = 'https://carapay.elmtreeapi.xyz'
}

export { apiURL, env }
