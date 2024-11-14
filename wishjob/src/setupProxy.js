const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://port-0-backend-m3ffo7y635cd1bb2.sel4.cloudtype.app',
            changeOrigin: true,
        })
    );
};
