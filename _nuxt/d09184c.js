(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{354:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("22e14b0b",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";o(354)},361:function(t,e,o){var d=o(39)((function(i){return i[1]}));d.push([t.i,".downloads{min-height:60vh;margin:auto;max-width:1536px;padding:4rem}.downloads .downloads__header{display:flex;height:100%;flex-direction:column-reverse;align-items:center}@media (min-width: 1280px){.downloads .downloads__header{flex-direction:row}}.downloads .downloads__header .downloads__info{max-width:36rem}.downloads .downloads__header .downloads__info h1{margin-bottom:1rem;font-size:3rem;line-height:1;font-weight:600;--tw-text-opacity:1;color:rgba(9, 107, 241, var(--tw-text-opacity))}.downloads .downloads__header .downloads__info p{font-size:1.5rem;line-height:2rem;font-weight:500;--tw-text-opacity:1;color:rgba(3, 35, 79, var(--tw-text-opacity));--tw-text-opacity:0.6}.downloads .downloads__header .downloads__info .button{margin-top:2rem;width:100%;justify-content:center}.downloads .downloads__header .downloads__info .downloads__subinfo{margin-top:0.5rem;text-align:center;font-size:1rem;line-height:1.5rem;--tw-text-opacity:0.4}.downloads .downloads__header .downloads__info .downloads__subinfo a{--tw-text-opacity:1;color:rgba(9, 107, 241, var(--tw-text-opacity))}.downloads .downloads__header .downloads__image{padding-bottom:4rem}@media (min-width: 1280px){.downloads .downloads__header .downloads__image{margin-left:auto}.downloads .downloads__header .downloads__image{padding-left:3rem}.downloads .downloads__header .downloads__image{padding-bottom:0px}}.downloads .downloads__header .downloads__image img{border-radius:1rem;--tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.alt-downloads{min-height:30vh;margin:auto;max-width:1536px;padding:1.5rem}.alt-downloads .alt-downloads__header{display:flex;flex-direction:column}.alt-downloads .alt-downloads__header h1{text-align:center;font-size:3rem;line-height:1;font-weight:600;--tw-text-opacity:1;color:rgba(9, 107, 241, var(--tw-text-opacity))}.alt-downloads .alt-downloads__header .alt-downloads__buttons{margin-top:4rem;display:flex;width:100%;flex-direction:row;gap:1.5rem}.alt-downloads .alt-downloads__header .alt-downloads__buttons .button{width:100%;justify-content:center}.dark .downloads .downloads__header .downloads__info p{--tw-text-opacity:1;color:rgba(221, 235, 254, var(--tw-text-opacity));--tw-text-opacity:0.9}",""]),d.locals={},t.exports=d},377:function(t,e,o){"use strict";o.r(e);var d=o(5),n=(o(44),o(1).a.extend({name:"Downloads",data:function(){return{latestIrisRelease:{},latestInstallerRelease:{assets:{}}}},fetch:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.github.com/repos/IrisShaders/Iris/releases/latest");case 2:return t.latestIrisRelease=e.sent.data,e.next=5,t.$axios.get("https://api.github.com/repos/IrisShaders/Iris-Installer/releases/latest");case 5:return t.latestInstallerRelease=e.sent.data,e.next=8,t.$axios.get("https://api.github.com/repos/IrisShaders/Iris-Installer/releases/44833739/assets");case 8:t.latestInstallerRelease.assets=e.sent.data[0];case 9:case"end":return e.stop()}}),e)})))()}})),r=(o(360),o(17)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"downloads"},[o("div",{staticClass:"downloads__header"},[o("div",{staticClass:"downloads__info"},[o("h1",[t._v(t._s(t.$t("pages.downloads.title")))]),t._v(" "),o("p",[t._v("\n          "+t._s(t.$t("pages.downloads.description"))+"\n        ")]),t._v(" "),o("UIButton",{attrs:{href:t.latestInstallerRelease.assets.browser_download_url,theme:"primary",size:"large"}},[t._v(t._s(t.$t("pages.downloads.buttonInstaller")))]),t._v(" "),o("p",{staticClass:"downloads__subinfo",domProps:{innerHTML:t._s(t.$t("pages.downloads.subinfo",[t.latestIrisRelease.tag_name,t.latestInstallerRelease.tag_name]))}})],1),t._v(" "),t._m(0)])]),t._v(" "),o("div",{staticClass:"alt-downloads"},[o("div",{staticClass:"alt-downloads__header"},[o("h1",[t._v(t._s(t.$t("pages.downloads.manualTitle")))]),t._v(" "),o("div",{staticClass:"alt-downloads__buttons"},[o("UIButton",{attrs:{href:"https://modrinth.com/mod/iris",size:"large"}},[t._v("Modrinth")]),t._v(" "),o("UIButton",{attrs:{href:"https://www.curseforge.com/minecraft/mc-mods/irisshaders",size:"large"}},[t._v("CurseForge")]),t._v(" "),o("UIButton",{attrs:{href:"https://github.com/IrisShaders/Iris/releases",size:"large"}},[t._v("GitHub")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"downloads__image"},[e("img",{attrs:{src:"/img/installer.png"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UIButton:o(137).default})}}]);