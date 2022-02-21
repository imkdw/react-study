const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.bithumb.com/public/orderbook/ALL_KRW",
      changeOrigin: true,
    })
  );
};
