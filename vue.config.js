var path = require('path')
function resolve (dir) {
  // console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // @ is an alias to /src
        '@Assets': resolve ('src/assets'),
        '@Views': resolve ('src/views'),
        '@Components': resolve ('src/components'),
      }
    }
  }
}