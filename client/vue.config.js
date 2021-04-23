module.exports = {
  devServer: {
    port: 3500
  },
  "transpileDependencies": [
    "vuetify",
    "vue-tel-input-vuetify"
  ],
  configureWebpack: {
    devtool: 'source-map'
  }
}