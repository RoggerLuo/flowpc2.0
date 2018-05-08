## 遗留问题

1.build-test 还没有弄完 前端分离部署  
 
2.object spread operater和Object.assign是否支持还不确定，  
stage-3和polyfill与`...`和`assign`的关系还不知道

### react & redux

### dev
直接通过webpack-dev-server启动，读取webpack.config.js  

### build
用node引入webpack来执行

### other
dev和build共用一个basic配置文件，  
basic配置文件中不包括css-loader，由不同的环境分别配置
