const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Define routes for each microservice
app.use(cors());
app.use(
  "/bookservice",
  createProxyMiddleware({
    target: process.env.BOOK_SERVICE_URL,
    changeOrigin: true,
  })
);
app.use(
  "/orderservice",
  createProxyMiddleware({
    target: process.env.ORDER_SERVICE_URL,
    changeOrigin: true,
  })
);
app.use(
  "/paymentservice",
  createProxyMiddleware({
    target: process.env.PAYMENT_SERVICE_URL,
    changeOrigin: true,
  })
);
// app.use(
//   "/notificationservice",
//   createProxyMiddleware({
//     target: process.env.NOTIFICATION_SERVICE_URL,
//     changeOrigin: true,
//   })
// );

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
