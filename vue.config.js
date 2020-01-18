module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: `http://${process.env.VUE_APP_BCK_HOST}:${process.env.VUE_APP_BCK_PORT}/`
  }
}