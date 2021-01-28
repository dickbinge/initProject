/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 09:37:26
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 14:06:55
 */
module.exports = {
  // 基本路径
  publicPath: './',
  outputDir: 'dist', // 打包后输出的文件夹名称
  assetsDir: 'static', // 防止静态资源文件的目录
  indexPath: 'index.html', // html输出路径
  devServer: {
    port: 8096,
    proxy: 'http://192.168.0.215/',
  },
};
