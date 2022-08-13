## What

这是一个svelte组件库的starter。
可以用它构建自己或者团队的组件库。

好处是：无论用户使用什么前端框架（Vue, React, Angular等），都可以引用基于svelte构建的组件库里的组件。
因为svelte编译完的组件其实是js模块，即无框架组件。

技术栈：vite + ts + svelte + less + unocss

## Usage

```javascript
git clone https://github.com/cunzaizhuyi/svelte-ui-template
```

### 开发组件

```javascript
npm run dev
```
本模板已经编写好了两个组件，分别是Counter.svelte和Counter2.svelte.
你可以继续在lib下面开发新的组件

### 打包组件库

组件开发好了，就可以打包组件库了
```javascript
npm run build
```

### 测试组件
可以在example文件夹下写个HTML文件来测试打包好的组件。


## 相关文档
暂无，回头拍个视频讲一下