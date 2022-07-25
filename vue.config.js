module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/targemy-task/' : '',
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    }
}