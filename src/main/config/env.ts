export default {
  mongoUrl: process.env.Mongo_URL || 'mongodb://mongo:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'Tda42=2'
}
