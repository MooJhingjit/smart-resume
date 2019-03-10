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
        // '@Layouts': resolve('src/Layouts'),
        '@Components': resolve ('src/components'),
        // '@Libraries': resolve ('src/Libraries'),
        // '@Config': resolve ('src/Config'),
        // '@Services': resolve ('src/Services')
      }
    }
  }
}