# electron-vue3-call-oatpp-example


通过 electron 上的 vue 调用 localhost oatpp 服务器上的服务的例子。

1. oatpp 服务器监听在 127.0.0.1:8002 上
2. oatpp 开启了自定义证书
3. electron 屏蔽了自定义证书错误和跨域错误
4. vue 通过 axios 发送 http 请求
5. vue 发送 websocket 请求
6. 此例子只是用来测试通信，还需要重新包装。
7. Vue 下可用 vue-native-websocket，可以把数据放在 vuex 中同步到前端
8. axios 可以封装为 service，在 vuex 中请求，把数据放在 vuex 中同步到前端
9. 主进程的 background.js 只启动了窗口，没有调用 node 扩展，C++ 部分写到 http 服务器里实现，
   如果将 http 封装到 windows service 里，可能窗口类 API 就无法访问；但是可拿到 system 权限，
   可驻留。



> 安装 sass 时，编译 node-sass 总是不成功，还是用 cnpm 安装。
> 可以尝试 yarn 安装，不行还是用 cnpm。

> 代码格式化优先选用 vscode 的配置，其次是各种 `.rc` 配置



## 后续

1. electron 使用自定义证书
