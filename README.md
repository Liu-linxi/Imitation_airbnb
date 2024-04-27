# 开始创建 React 应用程序



该项目是通过[Create React App](https://github.com/facebook/create-react-app)启动的。

## [安装使用](https://juejin.cn/post/7324951354844561446#heading-1)

1. 项目目录配置![allocation](https://github.com/Liu-linxi/Imitation_airbnb/assets/86284893/880e3c64-c9bc-488c-8d0c-d8e28ef32b0e)


2. craco配置别名和less样式

   1. @->src配置   react中默认是不识别此种方式，需要在webpack中配置，但是react脚手架默认隐藏因此需要用到craco配置

   2. `npm run eject`会将隐藏webpack弹出暴露出来很多文件，不推荐使用

   3. 由此使用craco->create-react-app config相当于craco.config.js里面配置的东西和原本的webpack配置进行合并，也就是配置就可以生效了

      ###### 安装命令：`npm install @craco/craco`

      安装之后项目根目录创建craco.config.js文件

      注：如果你的版本不匹配package.json中->"react-scripts": "5.0.1"是当前的可以使用`npm install @craco/craco@alpha -D`

​		4.craco.config.js配置后需要修改package.json文件中启动方式![2](https://github.com/Liu-linxi/Imitation_airbnb/assets/86284893/e4743638-b303-44e6-81ef-a97319ebd371)


​		5.[配置less参考](https://4x-ant-design.antgroup.com/docs/react/use-with-create-react-app-cn/)

## 可用脚本

在项目目录中，您可以运行：

### `npm start`



在开发模式下运行应用程序。
打开[http://localhost:3000](http://localhost:3000/)在浏览器中查看。

当您进行更改时，页面将重新加载。
您还可能在控制台中看到任何 lint 错误。

### `npm test`



在交互式监视模式下启动测试运行程序。有关详细信息，请参阅有关[运行测试](https://facebook.github.io/create-react-app/docs/running-tests)
的部分。

### `npm run build`



将用于生产的应用程序构建到`build`文件夹中。
它在生产模式下正确捆绑 React 并优化构建以获得最佳性能。

构建被缩小，文件名包含哈希值。
您的应用程序已准备好部署！

有关详细信息，请参阅有关[部署](https://facebook.github.io/create-react-app/docs/deployment)的部分。

### `npm run eject`



**注意：这是一种单向操作。一旦你`eject`就无法回头！**

如果您对构建工具和配置选择不满意，可以`eject`随时进行。此命令将从您的项目中删除单个构建依赖项。

相反，它会将所有配置文件和传递依赖项（webpack、Babel、ESLint 等）复制到您的项目中，以便您可以完全控制它们。除此以外的所有命令`eject`仍然有效，但它们将指向复制的脚本，以便您可以调整它们。此时你只能靠自己了。

您不必永远使用`eject`.精选的功能集适合中小型部署，您不应该觉得有义务使用此功能。但是我们知道，如果您在准备好使用时无法对其进行自定义，则该工具将没有用处。

## 了解更多



您可以在[Create React App 文档](https://facebook.github.io/create-react-app/docs/getting-started)中了解更多信息。

要学习 React，请查看[React 文档](https://reactjs.org/)。

### 代码分割



本节已移至此处：https://facebook.github.io/create-react-app/docs/code-splitting

### 分析捆绑包大小



本节已移至此处：https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### 制作渐进式 Web 应用程序



本节已移至此处：https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### 高级配置



本节已移至此处：https://facebook.github.io/create-react-app/docs/advanced-configuration

### 部署



本节已移至此处：https://facebook.github.io/create-react-app/docs/deployment

### `npm run build`无法缩小



本节已移至此处：https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
