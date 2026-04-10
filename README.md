# MLGB人格测试网站部署指南

## 项目简介
这是一个MLGB人格测试网站，类似于MBTI人格测试，包含50道测试题目，测试完成后会生成独特的人格类型和多维度评分。

## 项目结构
```
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 逻辑文件
└── README.md       # 部署指南
```

## 部署方法

### 方法一：使用GitHub Pages（推荐）
1. **创建GitHub账号**：如果你还没有GitHub账号，先注册一个。
2. **创建新仓库**：在GitHub上创建一个新的仓库，命名为`mlgb-personality-test`。
3. **上传文件**：将`index.html`、`style.css`和`script.js`文件上传到仓库中。
4. **开启GitHub Pages**：
   - 进入仓库设置
   - 找到"Pages"选项
   - 在"Source"下拉菜单中选择"main"分支
   - 点击"Save"按钮
   - 稍等几分钟，GitHub会生成一个访问链接，格式为 `https://你的用户名.github.io/mlgb-personality-test/`

### 方法二：使用Netlify
1. **创建Netlify账号**：访问https://www.netlify.com/注册一个账号。
2. **部署网站**：
   - 点击"New site from Git"
   - 选择GitHub作为Git提供商
   - 选择你的`mlgb-personality-test`仓库
   - 点击"Deploy site"
   - Netlify会自动部署你的网站，并生成一个随机的访问链接

### 方法三：使用Vercel
1. **创建Vercel账号**：访问https://vercel.com/注册一个账号。
2. **部署网站**：
   - 点击"New Project"
   - 选择"Import Git Repository"
   - 选择你的`mlgb-personality-test`仓库
   - 点击"Deploy"
   - Vercel会自动部署你的网站，并生成一个访问链接

## 如何让别人访问

1. **分享链接**：将部署后生成的链接分享给你的朋友。
2. **自定义域名**：如果你有自己的域名，可以将其绑定到部署的网站上。
   - GitHub Pages：在仓库设置中添加自定义域名
   - Netlify：在网站设置中添加自定义域名
   - Vercel：在项目设置中添加自定义域名

## 功能说明

1. **测试流程**：
   - 进入网站后点击"开始测试"
   - 回答50道测试题目
   - 点击"提交"按钮查看结果

2. **结果展示**：
   - 显示你的MLGB人格类型
   - 显示多维度评分（疯狂指数、猎奇指数、装逼指数、搞怪指数）
   - 显示人格类型的详细描述

3. **重新测试**：点击"重新测试"按钮可以再次进行测试。

## 自定义修改

1. **修改题目**：编辑`script.js`文件中的`questions`数组，添加或修改测试题目。
2. **修改人格类型**：编辑`script.js`文件中的`personalities`数组，添加或修改人格类型。
3. **修改样式**：编辑`style.css`文件，修改网站的外观。
4. **修改作者信息**：编辑`index.html`文件中的作者信息。

## 技术栈
- HTML5
- CSS3
- JavaScript

## 注意事项
- 本项目是一个静态网站，不需要后端服务器
- 所有数据都存储在浏览器本地，不会上传到服务器
- 网站支持响应式设计，在手机和电脑上都能正常显示

## 作者
dhc大帅逼
