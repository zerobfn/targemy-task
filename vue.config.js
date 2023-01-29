module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/targemy-task/' : '',
    transpileDependencies: true,
    devServer: {
        historyApiFallback: true
    }
}