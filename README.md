# electron-vue3-call-oatpp-example


通过 electron 上的 vue 调用 localhost oatpp 服务器上的服务的例子。

1. oatpp 服务器监听在 127.0.0.1:8002 上
2. oatpp 开启了自定义证书
3. electron 屏蔽了自定义证书错误和跨域错误
4. vue 通过 axios 发送 http 请求
5. vue 发送 websocket 请求



> 安装 sass 时，编译 node-sass 总是不成功，还是用 cnpm 安装。
> 可以尝试 yarn 安装，不行还是用 cnpm。

> 代码格式化优先选用 vscode 的配置，其次是各种 `.rc` 配置