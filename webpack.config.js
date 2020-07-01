const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //  入口文件
    entry: './src/index.js',
    // 输入
    output: {
        // 输出名称 
        filename: "built.js",
        // 输出路径
        path: resolve(__dirname,"build"),
    },

    // loader 的配置 解析其他格式的文件 例 css
    module: {
        rules: [
            // 详细loader的配置
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options:{
                    limit: 9 * 1024,
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                exclude: /\.(css|html|js)$/,
                loader: "file-loader",
                //配置文件信息
                options: {
                    //  文件名称 hash值 为10位  ext:原来的后缀
                    name: "[hash:10].[ext]"
                }
            }
        ]
    },

    //plugins的配置  插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",  //开发模式
    // mode: "production"

    // 开发服务器 devServer 用来自动化 (自动编译, 自动打开浏览器, 自动刷新浏览器~)
    // 特点： 只会在内存中编译打包，不会有任何输出
    // 启动devServer 指令为： npx webpack-dev-server
    devServer: {
        //devServer中的contentBase指定一个虚拟路径来让devServer服务器提供内容 在运行内存中运行
        contentBase: resolve(__dirname, "build"),
        //启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
    }
}