export default {
  mongoUrl: process.env.Mongo_URL || 'mongodb://localhost:27019/clean-node-api',
  port: process.env.PORT || 5050
}
