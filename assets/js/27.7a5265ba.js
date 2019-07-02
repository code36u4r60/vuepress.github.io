(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{227:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-git-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-git-log","aria-hidden":"true"}},[t._v("#")]),t._v(" vuepress-plugin-git-log "),s("GitHubLink",{attrs:{repo:"vuepress/vuepress-plugin-git-log"}})],1),t._v(" "),s("p",[s("code",[t._v("vuepress-plugin-git-log")]),t._v(" 是一个在页面信息中集成 git 日志的 VuePress 插件。")]),t._v(" "),s("h2",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("h3",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g vuepress-plugin-git-log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-git-log\n")])])]),s("h3",{attrs:{id:"局部安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-git-log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-git-log\n")])])]),s("h3",{attrs:{id:"添加到-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加到-config-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加到 "),s("code",[t._v("config.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git-log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      additionalArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--no-merge'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      onlyFirstAndLastCommit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("或者")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git-log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      additionalProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        subject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        authorEmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%ae'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("这个插件会在每个 "),s("code",[t._v("$page")]),t._v(" 对象中添加 "),s("code",[t._v("git")]),t._v(" 属性，它将拥有下面的属性：")]),t._v(" "),s("h3",{attrs:{id:"git-author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-author","aria-hidden":"true"}},[t._v("#")]),t._v(" git.author")]),t._v(" "),s("p",[t._v("文章的作者，即第一个提交的作者。")]),t._v(" "),s("h3",{attrs:{id:"git-created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-created","aria-hidden":"true"}},[t._v("#")]),t._v(" git.created")]),t._v(" "),s("p",[t._v("文章的创建日期，即第一个提交的创建时间。")]),t._v(" "),s("h3",{attrs:{id:"git-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-updated","aria-hidden":"true"}},[t._v("#")]),t._v(" git.updated")]),t._v(" "),s("p",[t._v("文章的更新日期，即最后一个提交的提交时间。")]),t._v(" "),s("h3",{attrs:{id:"git-commits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-commits","aria-hidden":"true"}},[t._v("#")]),t._v(" git.commits")]),t._v(" "),s("p",[t._v("所有提交按时间顺序构成的列表。")]),t._v(" "),s("h3",{attrs:{id:"git-contributors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-contributors","aria-hidden":"true"}},[t._v("#")]),t._v(" git.contributors")]),t._v(" "),s("p",[t._v("文章的贡献者列表，即所有修改过文章的用户列表。")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h3",{attrs:{id:"formattime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formattime","aria-hidden":"true"}},[t._v("#")]),t._v(" formatTime")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("(timestamp: number, lang: string) => string")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("(timestamp, lang) => new Date(timestamp).toLocaleString(lang)")])])]),t._v(" "),s("p",[t._v("用于格式化 Unix 时间的函数。")]),t._v(" "),s("h3",{attrs:{id:"additionalprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additionalprops","aria-hidden":"true"}},[t._v("#")]),t._v(" additionalProps")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("{ [prop: string]: string }")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("{}")])])]),t._v(" "),s("p",[t._v("一个表示额外属性的对象。键是属性名，值为对应的 "),s("a",{attrs:{href:"https://git-scm.com/docs/git-log#_pretty_formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("占位符"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"additionalargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additionalargs","aria-hidden":"true"}},[t._v("#")]),t._v(" additionalArgs")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("string | string[]")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("要传入的额外参数列表。")]),t._v(" "),s("h3",{attrs:{id:"extendgitlog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extendgitlog","aria-hidden":"true"}},[t._v("#")]),t._v(" extendGitLog")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("type:")]),t._v(" "),s("code",[t._v("(git: object) => void")])]),t._v(" "),s("li",[s("strong",[t._v("default:")]),t._v(" "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("一个函数，用于拓展或者修改 "),s("a",{attrs:{href:"#api"}},[s("code",[t._v("$page.git")])]),t._v(" 对象。")]),t._v(" "),s("h3",{attrs:{id:"onlyfirstandlastcommit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyfirstandlastcommit","aria-hidden":"true"}},[t._v("#")]),t._v(" onlyFirstAndLastCommit")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否只搜索第一个和最后一个 commit。对于大规模项目开启这个选项可能会提高初次启动速度，但是作为代价，你将将不能使用 "),s("code",[t._v("$page.git.commits")]),t._v(" 和 "),s("code",[t._v("$page.git.contributors")]),t._v("。")])])},[],!1,null,null,null);a.default=r.exports}}]);