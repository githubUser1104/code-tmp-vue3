# code-tmp-vue3

## 初始化
- 创建项目
```sh
# 需要node.js 16+，下面的指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。默认使用vite构建
npm init vue@latest
# 输入项目名, 例如 vue3-tmp，勾选 ts \ vue-router \ Pinia
cd frontend
npm install
npm run dev
# 如果需要更改版本号，就覆盖安装，例如
npm i pinia@2.0.32 vue@3.2.47 vue-router@4.1.6

# 如果需要同步到远程仓库
git init
git add .
git commit -m "init"
git remote add origin git@远程仓库地址
git push -u origin master
```

- 添加模板代码，注释默认代码，详见以下文件
  - views/01-base-main.vue
  - assets/01-base.css
  - router/index.ts
  - main.ts
  - App.vue
