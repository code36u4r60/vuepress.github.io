(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{233:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-serve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-serve","aria-hidden":"true"}},[t._v("#")]),t._v(" vuepress-plugin-serve "),a("GitHubLink",{attrs:{repo:"vuepress/vuepress-plugin-serve"}})],1),t._v(" "),a("p",[a("code",[t._v("vuepress-plugin-serve")]),t._v(" 是一个在本地构建静态服务器的 VuePress 插件。")]),t._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("h3",{attrs:{id:"全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g vuepress-plugin-serve\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-serve\n")])])]),a("h3",{attrs:{id:"局部安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-serve\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-serve\n")])])]),a("h3",{attrs:{id:"添加到-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加到-config-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加到 "),a("code",[t._v("config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serve'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      staticOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dotfiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'allow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    serve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/my/custom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" custom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'response'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),a("p",[t._v("使用了这个插件以后，VuePress 会新增一个 "),a("code",[t._v("serve")]),t._v(" 命令。这个命令会使用已经生成的文件来构建服务器。它拥有以下的选项：")]),t._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[t._v("#")]),t._v(" --build")]),t._v(" "),a("p",[t._v("在构建服务器前先执行一轮 "),a("code",[t._v("vuepress build")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open","aria-hidden":"true"}},[t._v("#")]),t._v(" --open")]),t._v(" "),a("p",[t._v("当服务端准备就绪时自动打开浏览器。")]),t._v(" "),a("h3",{attrs:{id:"host-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-host","aria-hidden":"true"}},[t._v("#")]),t._v(" --host "),a("code",[t._v("<host>")])]),t._v(" "),a("p",[t._v("参见 "),a("a",{attrs:{href:"#host"}},[t._v("host")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"port-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-port","aria-hidden":"true"}},[t._v("#")]),t._v(" --port "),a("code",[t._v("<port>")])]),t._v(" "),a("p",[t._v("参见 "),a("a",{attrs:{href:"#port"}},[t._v("port")]),t._v("。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("VuePress 内置的命令行选项，如 "),a("code",[t._v("--dest <dest>")]),t._v(", "),a("code",[t._v("--cache [cache]")]),t._v(", "),a("code",[t._v("--no-cache")]),t._v("，也都是支持的。")])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h3",{attrs:{id:"commandname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commandname","aria-hidden":"true"}},[t._v("#")]),t._v(" commandName")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("'serve'")])])]),t._v(" "),a("p",[t._v("vuepress-plugin-serve 会增加一个 vuepress 命令，这个选项可用于自定义命令名称。")]),t._v(" "),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host","aria-hidden":"true"}},[t._v("#")]),t._v(" host")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("siteConfig.host || 'localhost'")])])]),t._v(" "),a("p",[t._v("指定服务器的主机名。")]),t._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[t._v("#")]),t._v(" port")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("siteConfig.port || 8080")])])]),t._v(" "),a("p",[t._v("指定服务器监听的端口。")]),t._v(" "),a("h3",{attrs:{id:"notfoundpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notfoundpath","aria-hidden":"true"}},[t._v("#")]),t._v(" notFoundPath")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("'404.html'")])])]),t._v(" "),a("p",[t._v("用来存放 404 页面的地址。")]),t._v(" "),a("h3",{attrs:{id:"staticoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staticoptions","aria-hidden":"true"}},[t._v("#")]),t._v(" staticOptions")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("提供给 "),a("a",{attrs:{href:"https://github.com/expressjs/serve-static#servestaticroot-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("serve-static"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"beforeserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeserver","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeServer")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("(app, server) => void")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("在服务器接受客户端信息之前执行。类似于 VuePress 的 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#beforedevserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeDevServer"),a("OutboundLink")],1),t._v(" 选项。")]),t._v(" "),a("h3",{attrs:{id:"afterserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afterserver","aria-hidden":"true"}},[t._v("#")]),t._v(" afterServer")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("async (app, server) => void")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("在服务器接受客户端信息之后执行。类似于 VuePress 的 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#afterdevserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("afterDevServer"),a("OutboundLink")],1),t._v(" 选项。")]),t._v(" "),a("h3",{attrs:{id:"chainwebpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack","aria-hidden":"true"}},[t._v("#")]),t._v(" chainWebpack")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("type:")]),t._v(" "),a("code",[t._v("(config: Config) => void")])]),t._v(" "),a("li",[a("strong",[t._v("default:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("这个钩子会在服务器构建时调用。")]),t._v(" "),a("p",[t._v("参见 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/option-api.html#chainwebpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("chainWebpack"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"define"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define","aria-hidden":"true"}},[t._v("#")]),t._v(" define")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("type:")]),t._v(" "),a("code",[t._v("Record<string, string> | (() => Record<string, string>)")])]),t._v(" "),a("li",[a("strong",[t._v("default:")]),t._v(" "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("这个钩子会在服务器构建时调用。")]),t._v(" "),a("p",[t._v("参见 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/option-api.html#define",target:"_blank",rel:"noopener noreferrer"}},[t._v("define"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alias","aria-hidden":"true"}},[t._v("#")]),t._v(" alias")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("type:")]),t._v(" "),a("code",[t._v("Record<string, string> | (() => Record<string, string>)")])]),t._v(" "),a("li",[a("strong",[t._v("default:")]),t._v(" "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("这个钩子会在服务器构建时调用。")]),t._v(" "),a("p",[t._v("参见 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/option-api.html#alias",target:"_blank",rel:"noopener noreferrer"}},[t._v("alias"),a("OutboundLink")],1),t._v("。")])])},[],!1,null,null,null);s.default=r.exports}}]);