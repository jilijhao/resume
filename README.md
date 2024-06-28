# resume

这是我的个人简历，我将把我的经历写在这里

# 项目框架
resume/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── styles/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Sidebar.vue
│   │   ├── MainContent.vue
│   │   ├── ResumeSection.vue
│   │   └── ProjectCard.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Resume.vue
│   │   ├── Projects.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
├── README.md
└── vue.config.js

# 详细目录结构说明

    public/: 放置静态文件，如 index.html、网站图标（favicon）等。
        assets/: 存放静态资源，如图片和全局样式。
    src/: 项目源代码目录。
        assets/: 存放静态资源，如图片和局部样式。
        components/: 存放 Vue 组件。你可以将页面中可重用的部分拆分成组件，例如头部（Header）、脚部（Footer）、侧边栏（Sidebar）、主要内容区（MainContent）、简历部分（ResumeSection）、项目卡片（ProjectCard）等。
        views/: 存放视图页面，每个页面对应一个 Vue 组件，例如主页（Home）、关于我（About）、简历（Resume）、项目（Projects）、联系我（Contact）。
        router/: Vue Router 配置文件，定义应用的路由。
        store/: Vuex 状态管理（如果需要状态管理）。
        App.vue: 根组件。
        main.js: Vue 入口文件，初始化应用。
