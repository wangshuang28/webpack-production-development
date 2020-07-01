/* 
    index.js: webpack入口起点文件
    
    1. 运行环境
    开发环境：webpack ./src/index.js -o ./build/.built.js --mode=development
    整体打包环境，是开发环境

    2.生产环境：webpack ./src/index.js -o ./build/.built.js --mode=production
    整体打包环境，是生产环境

    3.结论：
        1.webpack 能处理js / json， 不能处理css/img 等其他资源
        2.生产环境比开发环境多一个压缩代码
        3.生产环境和开发环境将ES6模块编译成浏览器能识别的模块化文件
*/

/* import data from "./data.json"
function add(x, y){
    return x + y;
}

console.log(data)

console.log(add(3,5)) */

/* import './index.css'
import './index.less' */

import '../iconfont/iconfont.css'