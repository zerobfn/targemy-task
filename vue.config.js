const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/targemy-task/' : '',
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    },
    transpileDependencies: true
})