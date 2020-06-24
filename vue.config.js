module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-manage-system/'
        : '/'
}
// module.exports = {
//     baseUrl: './',
//     assetsDir: 'static',
//     productionSourceMap: false,
//     // devServer: {
//     //     proxy: {
//     //         '/api':{
//     //             target:'http://jsonplaceholder.typicode.com',
//     //             changeOrigin:true,
//     //             pathRewrite:{
//     //                 '/api':''
//     //             }
//     //         }
//     //     }
//     // }
//     devServer: {
//         port: 9090,     // 端口号
//     }
// }
