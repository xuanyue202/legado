(function(){"use strict";var e={9700:function(e,t,r){var n=r(9963),o=r(6252);const i={class:"editor"};function l(e,t,r,n,l,a){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c)])}var a={setup(){}},c=r(3744);const s=(0,c.Z)(a,[["render",l]]);var u=s,d=r(2201),p=r(3577);const h={class:"left"},g=["onClick"];function S(e,t,r,n,i,l){const a=(0,o.up)("edit-input-list"),c=(0,o.up)("edit-menu"),s=(0,o.up)("edit-out");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",h,[(0,o._)("div",null,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Object.entries(e.config),(([t,r])=>((0,o.wg)(),(0,o.iD)("li",{onClick:e=>n.changeSelectTabKey(t),key:t,class:(0,p.C_)(t===e.selectTabKey?"active":"")},(0,p.zw)(r.name),11,g)))),128))])]),(0,o.Wm)(a,{data:n.currentTabData},null,8,["data"])]),(0,o.Wm)(c),(0,o.Wm)(s)],64)}var w=r(2262);r(7658);const y=e=>((0,o.dD)("data-v-c9cf95ee"),e=e(),(0,o.Cn)(),e),m={class:"menu"},v=y((()=>(0,o._)("span",null,"Ctrl+P",-1))),b=y((()=>(0,o._)("span",null,"Ctrl+E",-1))),f=y((()=>(0,o._)("span",null,"Ctrl+Z",-1))),_=y((()=>(0,o._)("span",null,"Ctrl+Enter",-1))),k=y((()=>(0,o._)("span",null,"Ctrl+S",-1)));function C(e,t,r,n,i,l){const a=(0,o.up)("edit-loading"),c=(0,o.up)("edit-warn"),s=(0,o.up)("edit-success");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",null,[n.showLoading?((0,o.wg)(),(0,o.j4)(a,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(c,{text:n.warnText,"is-show":n.warnShow,onChangeShow:n.changeShow},null,8,["text","is-show","onChangeShow"]),n.successShow?((0,o.wg)(),(0,o.j4)(s,{key:1,isShow:n.successShow,onChangeShow:n.changeSuccessShow,text:n.successText},null,8,["isShow","onChangeShow","text"])):(0,o.kq)("",!0)]),(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>n.push&&n.push(...e)),title:"Ctrl+P"},[(0,o.Uk)("⇈推送源 "),v]),(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>n.pull&&n.pull(...e))},"⇊拉取源"),(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>n.conver2Tab&&n.conver2Tab(...e)),title:"Ctrl+E"},[(0,o.Uk)(" ⋙生成源"),b]),(0,o._)("button",{onClick:t[3]||(t[3]=(...e)=>n.conver2Source&&n.conver2Source(...e))},"⋘编辑源"),(0,o._)("button",{onClick:t[4]||(t[4]=(...e)=>n.clearEdit&&n.clearEdit(...e))},"✗清空表单"),(0,o._)("button",{onClick:t[5]||(t[5]=(...e)=>n.undo&&n.undo(...e)),title:"Ctrl+Z"},[(0,o.Uk)("↶撤销操作"),f]),(0,o._)("button",{onClick:t[6]||(t[6]=(...e)=>n.redo&&n.redo(...e))},"↷重做操作"),(0,o._)("button",{onClick:t[7]||(t[7]=(...e)=>n.debug&&n.debug(...e)),title:"Ctrl+Enter"},[(0,o.Uk)(" ⇏调试源 "),_]),(0,o._)("button",{onClick:t[8]||(t[8]=(...e)=>n.saveSource&&n.saveSource(...e)),title:"Ctrl+S"},[(0,o.Uk)(" ✓保存源"),k])])}function U(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()))}function x(e){return fetch(e).then((e=>e.json()))}function T(e,t=!0){let r=/bookSource/.test(location.href),n=`http://${localStorage.getItem("url")||location.host}/`,o=r?"BookSource":"RssSource";return`${n}${e}${o}${t?"s":""}`}function D(){return x(T("get"))}function N(e){return U(T("save"),e)}function I(e){return U(T("save",!1),e)}function B(e){return U(T("delete"),e)}var E=r(3907),L=(0,E.MT)({state:{url:localStorage.getItem("url")||"",bookSources:[],rssSources:[],currentSource:{},currentTab:localStorage.getItem("tabName")||"editTab",editTabSource:{},deBugMsg:"",searchKey:""},getters:{sources(e){return/bookSource/.test(location.href)?e.bookSources:e.rssSources}},mutations:{changeSearchKey(e,t){e.searchKey=t},saveSources(e,t){/bookSource/.test(location.href)?e.bookSources=t:e.rssSources=t},deleteSources(e,t){let r=/bookSource/.test(location.href)?e.bookSources:e.rssSources;t.forEach((e=>{let t=r.indexOf(e);t>-1&&r.splice(t,1)}))},saveCurrentSource(e){let t,r,n=e.currentSource;/bookSource/.test(location.href)?(t=e.bookSources,r="bookSourceUrl"):(t=e.rssSources,r="sourceUrl");let o=t.findIndex((e=>e[r]===n[r]));n=JSON.parse(JSON.stringify(n)),o>-1?t.splice(o,1,n):t.push(n)},changeCurrentSource(e,t){const r=JSON.stringify(t);e.currentSource=JSON.parse(r)},changeCurrentSourceValue(e,t){let r=t.value,n={true:!0,false:!1};if("Boolean"===t.type&&(r=n[r]),"Number"===t.type&&(r=Number(r)),t.key.includes("_")){let n=t.key.split("_")[0],o=t.key.split("_")[1],i={};i[o]=r,e.currentSource[n]=Object.assign(e.currentSource[n]||{},i)}else e.currentSource[t.key]=r;e.currentSource.lastUpdateTime=(new Date).getTime(),/bookSource/.test(location.href)&&(e.currentSource["ruleToc"]=e.currentSource["ruleToc"]||{})},changeTabName(e,t){e.currentTab=t,localStorage.setItem("tabName",t)},changeEditTabSource(e,t){const r=JSON.stringify(t);e.editTabSource=JSON.parse(r)},editHistory(e,t){let r;if(localStorage.getItem("history"))r=JSON.parse(localStorage.getItem("history")),r.new.push(t),r.new.length>50&&r.new.shift(),r.old.length>50&&r.old.shift(),localStorage.setItem("history",JSON.stringify(r));else{const e={new:[t],old:[]};localStorage.setItem("history",JSON.stringify(e))}},editHistoryUndo(e){if(localStorage.getItem("history")){let t=JSON.parse(localStorage.getItem("history"));t.old.push(e.currentSource),t.new.length&&(e.currentSource=t.new.pop()),localStorage.setItem("history",JSON.stringify(t))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(e){e.editTabSource={},e.currentSource={}},appendDeBugMsg(e,t){let r=document.querySelector("#debug_text");r.scrollTop=r.scrollHeight,e.deBugMsg+=t+"\n"},clearDeBugMsg(e){e.deBugMsg=""},clearAllSource(e){e.bookSources=[],e.rssSources=[]}},actions:{},modules:{}});const O=e=>((0,o.dD)("data-v-ab8a8a34"),e=e(),(0,o.Cn)(),e),A={class:"fixed"},R=O((()=>(0,o._)("div",{class:"half-circle-spinner"},[(0,o._)("div",{class:"circle circle-1"}),(0,o._)("div",{class:"circle circle-2"})],-1))),K=[R];function j(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("div",A,K)}var H={name:"editLoading"};const J=(0,c.Z)(H,[["render",j],["__scopeId","data-v-ab8a8a34"]]);var $=J;const P={key:0,class:"warm"};function z(e,t,r,n,i,l){return r.isShow?((0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("p",null,(0,p.zw)(r.text),1),(0,o._)("div",null,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>n.changeShow&&n.changeShow(...e))},"关闭")])])):(0,o.kq)("",!0)}var M={name:"editWarm",props:{isShow:{default:!1,type:Boolean},text:{type:String,default:""}},setup(e,{emit:t}){const r=()=>{t("changeShow",!e.isShow)};return{changeShow:r}}};const V=(0,c.Z)(M,[["render",z],["__scopeId","data-v-de5a7c30"]]);var q=V;const F={class:"success"};function Z(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("div",F,[(0,o._)("p",null,(0,p.zw)(r.text),1)])}var W={props:{text:{type:String,default:""},isShow:{type:Boolean,default:!1}},emits:["changeShow"],setup(e,{emit:t}){return setTimeout((()=>{t("changeShow",!e.isShow)}),3e3),{}}};const G=(0,c.Z)(W,[["render",Z],["__scopeId","data-v-bef92f74"]]);var Y=G,Q={components:{editLoading:$,editWarn:q,editSuccess:Y},setup(){const e=(0,w.iH)(!1),t=(0,w.iH)(!1),r=(0,w.iH)(""),n=(0,w.iH)(!1),i=(0,w.iH)(""),l=e=>{t.value=e},a=e=>{n.value=e},c=r=>{throw e.value=!1,t.value=!0,i.value="请求发生了错误，请检查你的后端地址，填写是否正确，或者 阅读APP\n确认开启web服务",r},s=()=>{e.value=!0,D().then((o=>{e.value=!1,o.isSuccess?(L.commit("changeTabName","editList"),L.commit("saveSources",o.data),r.value=`成功拉取${o.data.length}条源`,n.value=!0):(i.value=o.errorMsg,t.value=!0)})).catch((e=>{c(e)}))},u=()=>{r.value="正在推送中",n.value=!0,e.value=!0;let o=L.getters.sources;N(o).then((l=>{if(l.isSuccess){let e=l.data;if(Array.isArray(e)){let t="";o.length>e.length&&(t="\n推送失败的源将用红色字体标注!"),r.value=`批量推送源到「阅读3.0APP」\n共计: ${o.length} 条\n成功: ${e.length} 条\n失败: ${o.length-e.length} 条${t}`,n.value=!0}else r.value=`批量推送源到「阅读3.0APP」成功!\n共计: ${o.length} 条`,n.value=!0}else i.value=`批量推送源失败!\nErrorMsg: ${l.errorMsg}`,t.value=!0;e.value=!1})).catch((e=>{c(e)}))},d=()=>{L.commit("changeEditTabSource",L.state.currentSource),L.commit("changeTabName","editTab")},p=()=>{L.commit("changeCurrentSource",L.state.editTabSource)},h=()=>{L.commit("editHistoryUndo")},g=()=>{L.commit("clearEdit"),r.value="已清除",n.value=!0},S=()=>{L.commit("clearEdit"),L.commit("clearAllHistory"),r.value="已清除所有历史记录",n.value=!0},y=()=>{let e=/bookSource/.test(location.href),o=L.state.currentSource;e&&""!==o.bookSourceUrl&&""!==o.bookSourceType&&""!==o.bookSourceName||!e&&""!==o.sourceUrl&&""!==o.sourceName?I(o).then((l=>{l.isSuccess?(r.value=`源《${e?o.bookSourceName:o.sourceName}》已成功保存到「阅读3.0APP」`,n.value=!0,L.commit("saveCurrentSource")):(i.value=`源《${e?o.bookSourceName:o.sourceName}》保存失败!\nErrorMsg: ${l.errorMsg}`,t.value=!0)})).catch((e=>{c(e)})):(i.value="请检查<必填>项是否全部填写",t.value=!0)},m=()=>{e.value=!0,L.commit("clearDeBugMsg"),L.commit("changeTabName","editDebug");let t=/bookSource/.test(location.href),o=L.state.currentSource;I(o).then((i=>{let l="ws://"+(localStorage.getItem("url")||location.host).replace(/\d+$/,(e=>parseInt(e)+1))+"/"+(t?"bookSourceDebug":"rssSourceDebug");const a=new WebSocket(l);let c="",s=t?o.bookSourceUrl:o.sourceUrl;t&&(c=o.ruleSearch.checkKeyWord?o.ruleSearch.checkKeyWord:L.state.searchKey?L.state.searchKey:"我的"),a.onopen=()=>{a.send(`{"tag":"${s}", "key":"${c}"}`)},a.onmessage=e=>{L.commit("appendDeBugMsg",e.data)},a.onclose=()=>{e.value=!1,r.value="调试已关闭！",n.value=!0,L.commit("appendDeBugMsg","调试已关闭！")}})).catch((e=>{c(e)}))};return(0,o.bv)((()=>{document.onkeydown=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&m(),(e.ctrlKey||e.metaKey)&&"s"===e.key&&(y(),e.preventDefault()),e.ctrlKey&&"e"===e.key&&(d(),e.preventDefault()),e.ctrlKey&&"p"===e.key&&(u(),e.preventDefault())}})),{debug:m,push:u,pull:s,clearEdit:g,showLoading:e,changeShow:l,warnShow:t,successText:r,changeSuccessShow:a,successShow:n,undo:h,redo:S,conver2Tab:d,conver2Source:p,warnText:i,saveSource:y}}};const X=(0,c.Z)(Q,[["render",C],["__scopeId","data-v-c9cf95ee"]]);var ee=X;const te={class:"out"};function re(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("div",te,[(0,o._)("ul",null,[(0,o._)("li",{class:(0,p.C_)("editTab"===e.current_tab?"active":""),onClick:t[0]||(t[0]=e=>n.handleSetActive("editTab"))}," 编辑源 ",2),(0,o._)("li",{class:(0,p.C_)("editDebug"===e.current_tab?"active":""),onClick:t[1]||(t[1]=e=>n.handleSetActive("editDebug"))}," 调试源 ",2),(0,o._)("li",{class:(0,p.C_)("editList"===e.current_tab?"active":""),onClick:t[2]||(t[2]=e=>n.handleSetActive("editList"))}," 源列表 ",2),(0,o._)("li",{class:(0,p.C_)("editHelp"===e.current_tab?"active":""),onClick:t[3]||(t[3]=e=>n.handleSetActive("editHelp"))}," 帮助信息 ",2)]),((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.current_tab)))],1024))])}function ne(e,t,r,i,l,a){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("textarea",{placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP","onUpdate:modelValue":t[0]||(t[0]=t=>e.source=t),onInput:t[1]||(t[1]=(...e)=>i.updateEditSource&&i.updateEditSource(...e))},null,544)),[[n.nr,e.source]])}var oe={name:"editTab",setup(){const e=(0,w.qj)({source:""}),t=()=>{L.commit("changeEditTabSource",JSON.parse(e.source))};return(0,o.m0)((()=>{let t=L.state.editTabSource;Object.keys(t).length>0?(t.lastUpdateTime=(new Date).getTime(),e.source=JSON.stringify(t,null,4)):e.source=""})),{...(0,w.BK)(e),updateEditSource:t}}};const ie=(0,c.Z)(oe,[["render",ne],["__scopeId","data-v-554d8227"]]);var le=ie;function ae(e,t,r,i,l,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[i.isBookSource?(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:0,type:"text",style:{"text-align":"center",border:"1px solid #dddddd","border-radius":"4px"},placeholder:"输入搜索关键字，默认搜「我的」","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchKey=t),onInput:t[1]||(t[1]=t=>i.changeSearch(e.searchKey)),onKeydown:t[2]||(t[2]=(0,n.D2)(((...e)=>i.startSearch&&i.startSearch(...e)),["enter"])),title:"输入关键词 enter(回车键)快捷搜索"},null,544)),[[n.nr,e.searchKey]]):(0,o.kq)("",!0),(0,o.wy)((0,o._)("textarea",{placeholder:"这里用于输出调试信息","onUpdate:modelValue":t[3]||(t[3]=t=>e.printDebug=t),ref:"textareaDom",id:"debug_text"},null,512),[[n.nr,e.printDebug]])],64)}var ce={name:"editDebug",setup(){const e=(0,w.iH)(""),t=(0,w.qj)({printDebug:L.state.deBugMsg,searchKey:""}),r=e=>{L.commit("changeSearchKey",e)};(0,o.m0)((()=>{t.printDebug=L.state.deBugMsg}));const n=()=>{document.querySelectorAll(".menu>button")[7].click()},i=(0,o.Fl)((()=>/bookSource/.test(window.location.href)));return{...(0,w.BK)(t),textareaDom:e,changeSearch:r,startSearch:n,isBookSource:i}}};const se=(0,c.Z)(ce,[["render",ae],["__scopeId","data-v-6969c1de"]]);var ue=se;const de={style:{display:"flex","flex-flow":"column"}},pe={class:"tool"},he={class:"source_list"},ge=["value"],Se={class:"book_index"},we=["onClick"],ye={class:"book_info"},me={key:0};function ve(e,t,r,i,l,a){return(0,o.wg)(),(0,o.iD)("div",de,[(0,o.wy)((0,o._)("input",{class:"search",type:"text",placeholder:"输入筛选关键词（源名称、源URL或源分组）输入自动筛选源","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchKey=t),onFocus:t[1]||(t[1]=t=>e.delArr=[])},null,544),[[n.nr,e.searchKey]]),(0,o._)("div",null,[(0,o._)("div",pe,[(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>i.upFile&&i.upFile(...e))},"导入书源文件"),(0,o._)("button",{onClick:t[3]||(t[3]=(...e)=>i.outExport&&i.outExport(...e))},"导出书源文件"),(0,o._)("button",{onClick:t[4]||(t[4]=(...e)=>i.deleteActiveSource&&i.deleteActiveSource(...e))},"删除选中源"),(0,o._)("button",{onClick:t[5]||(t[5]=(...e)=>i.clearAllSources&&i.clearAllSources(...e))},"清空列表")]),(0,o._)("div",he,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.filtedSources,((r,l)=>((0,o.wg)(),(0,o.iD)("div",{key:r.bookSourceUrl||r.sourceUrl,class:(0,p.C_)(["book_item",l===i.currentActive?"book_active":""])},[(0,o.wy)((0,o._)("input",{type:"checkbox",value:l,"onUpdate:modelValue":t[6]||(t[6]=t=>e.delArr=t)},null,8,ge),[[n.e8,e.delArr]]),(0,o._)("div",Se,(0,p.zw)(l+1),1),(0,o._)("div",{style:{"margin-left":"10px",flex:"1"},onClick:e=>i.handleItemClick(l)},[(0,o._)("div",ye,[(0,o._)("span",null,(0,p.zw)(r.bookSourceName||r.sourceName),1),i.isBookSource?((0,o.wg)(),(0,o.iD)("span",me,"最后修改："+(0,p.zw)(i.formatTime(r.lastUpdateTime)),1)):(0,o.kq)("",!0),(0,o._)("span",null,"分组："+(0,p.zw)(r.bookSourceGroup||r.sourceGroup||"无分组"),1)]),(0,o._)("div",null,(0,p.zw)(r.bookSourceUrl||r.sourceUrl),1)],8,we)],2)))),128))])])])}var be={name:"editList",setup(){let e=(0,w.qj)({searchKey:"",delArr:[],sources:[]});const t=(0,o.Fl)((()=>c(e.sources,e.searchKey))),r=(0,o.Fl)((()=>/bookSource/.test(window.location.href)));(0,o.m0)((()=>{e.sources=L.getters.sources}));let n=(0,w.iH)(null);const i=e=>{n.value=e,L.commit("clearEdit"),L.commit("changeCurrentSource",t.value[e])},l=()=>{L.commit("clearAllSource")},a=e=>{if(!e)return null;const t=new Date(e),r=t.getFullYear();let n=t.getMonth()+1;n=n<10?"0"+n:n;let o=t.getDate();o=o<10?"0"+o:o;let i=t.getHours();i=i<10?"0"+i:i;let l=t.getMinutes();l=l<10?"0"+l:l;let a=t.getSeconds();return a=a<10?"0"+a:a,r+"-"+n+"-"+o+" "+i+":"+l+":"+a},c=(t,n)=>""===n?e.sources:r.value?t.filter((e=>e.bookSourceName.toUpperCase().includes(n.toUpperCase())||(e.bookSourceGroup||"").toUpperCase().includes(n.toUpperCase())||e.bookSourceUrl.toUpperCase().includes(n.toUpperCase()))):t.filter((e=>e.sourceName.toUpperCase().includes(n.toUpperCase())||(e.sourceGroup||"").toUpperCase().includes(n.toUpperCase())||e.sourceUrl.toUpperCase().includes(n.toUpperCase()))),s=()=>{if(0===e.delArr.length)return!1;const r=[];e.delArr.forEach((e=>{r.push(t.value[e])})),B(r).then((t=>{t.isSuccess&&(L.commit("deleteSources",r),e.delArr=[])}))},u=()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",(e=>{const t=e.target.files[0];var r=new FileReader;r.readAsText(t),r.onload=()=>{const e=JSON.parse(r.result);L.commit("saveSources",e)}})),e.click()},d=()=>{const e=document.createElement("a");let t=L.getters.sources,n=r.value?"BookSource":"RssSource";e.download=`${n}_${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;let o=new Blob([JSON.stringify(t,null,4)],{type:"application/json"});e.href=window.URL.createObjectURL(o),e.click()};return{currentActive:n,isBookSource:r,filtedSources:t,deleteActiveSource:s,handleItemClick:i,...(0,w.BK)(e),formatTime:a,clearAllSources:l,upFile:u,outExport:d}}};const fe=(0,c.Z)(be,[["render",ve],["__scopeId","data-v-79a26999"]]);var _e=fe;const ke=(0,o.uE)('<a href="https://alanskycn.gitee.io/teachme/" target="_blank" data-v-7ac1e65e>书源制作教程</a><a href="https://zhuanlan.zhihu.com/p/29436838" target="_blank" data-v-7ac1e65e>xpath基础教程</a><a href="https://zhuanlan.zhihu.com/p/32187820" target="_blank" data-v-7ac1e65e>xpath高级教程</a><a href="https://www.w3cschool.cn/regex_rmjc" target="_blank" data-v-7ac1e65e>正则表达式教程</a><a href="https://regexr-cn.com/" target="_blank" data-v-7ac1e65e>正则表达式在线验证工具</a><div style="margin-top:20px;" data-v-7ac1e65e><span data-v-7ac1e65e><code data-v-7ac1e65e>^$()[]{}.?+*|</code> 这些是Java正则特殊符号,匹配需转义</span><br data-v-7ac1e65e><span data-v-7ac1e65e><code data-v-7ac1e65e>(?s)</code> 前缀表示跨行解析</span><br data-v-7ac1e65e><span data-v-7ac1e65e><code data-v-7ac1e65e>(?m)</code> 前缀表示逐行匹配</span><br data-v-7ac1e65e><span data-v-7ac1e65e><code data-v-7ac1e65e>(?i)</code> 前缀表示忽略大小写</span><br data-v-7ac1e65e></div>',6);function Ce(e,t,r,n,o,i){return ke}var Ue={name:"editHelp"};const xe=(0,c.Z)(Ue,[["render",Ce],["__scopeId","data-v-7ac1e65e"]]);var Te=xe,De={name:"editOut",components:{editDebug:ue,editTab:le,editList:_e,editHelp:Te},setup(){const e=(0,w.qj)({url:localStorage.getItem("url")||"",current_tab:L.state.currentTab||"editTab"}),t=e=>{L.commit("changeTabName",e)},r=e=>{L.commit("changeUrl",e)};(0,o.m0)((()=>{e.current_tab=L.state.currentTab}));const n=()=>{document.querySelectorAll(".menu>button")[1].click()};return{...(0,w.BK)(e),handleSetActive:t,changInput:r,pullSource:n}}};const Ne=(0,c.Z)(De,[["render",re]]);var Ie=Ne;const Be={class:"main"};function Ee(e,t,r,n,i,l){const a=(0,o.up)("edit-input");return(0,o.wg)(),(0,o.iD)("div",Be,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.data,((e,t)=>((0,o.wg)(),(0,o.j4)(a,{key:t,id:e.id,type:e.type,hint:e.hint,title:e.title,rows:e.rows,content:n.getContent(e.id),onChangeContent:n.upData},null,8,["id","type","hint","title","rows","content","onChangeContent"])))),128))])}const Le=e=>((0,o.dD)("data-v-915519b0"),e=e(),(0,o.Cn)(),e),Oe={class:"edit_input"},Ae=Le((()=>(0,o._)("i",null,":",-1))),Re=["id","placeholder","rows","value"];function Ke(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("div",Oe,[(0,o._)("span",null,[(0,o.Uk)((0,p.zw)(r.title),1),Ae]),(0,o._)("textarea",{id:r.id,class:(0,p.C_)(r.type),placeholder:r.hint,rows:r.rows,value:r.content,ref:"attr",onInput:t[0]||(t[0]=(...e)=>n.change&&n.change(...e)),onBlur:t[1]||(t[1]=e=>{n.changeHistory(),n.restoreHeight()}),onFocus:t[2]||(t[2]=(...e)=>n.adjustHeight&&n.adjustHeight(...e))},null,42,Re)])}let je;const He="\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",Je=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function $e(e){const t=window.getComputedStyle(e),r=t.getPropertyValue("box-sizing"),n=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),o=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),i=Je.map((e=>`${e}:${t.getPropertyValue(e)}`)).join(";");return{contextStyle:i,paddingSize:n,borderSize:o,boxSizing:r}}function Pe(e,t=1,r=null){je||(je=document.createElement("textarea"),document.body.appendChild(je));let{paddingSize:n,borderSize:o,boxSizing:i,contextStyle:l}=$e(e);je.setAttribute("style",`${l};${He}`),je.value=e.value||e.placeholder||"";let a=je.scrollHeight;const c={};"border-box"===i?a+=o:"content-box"===i&&(a-=n),je.value="";let s=je.scrollHeight-n;if(null!==t){let e=s*t;"border-box"===i&&(e=e+n+o),a=Math.max(e,a),c.minHeight=`${e}px`}if(null!==r){let e=s*r;"border-box"===i&&(e=e+n+o),a=Math.min(e,a)}return c.height=`${a}px`,je.parentNode&&je.parentNode.removeChild(je),je=null,c}var ze={props:{title:{type:String,default:""},rows:{type:Number,default:1},hint:{type:String,default:""},id:{type:String,default:""},type:{type:String,default:"String"},content:{type:[String,Number,Boolean],default:""}},emits:["changeContent"],setup(e,{emit:t}){const r=(0,w.iH)(""),n=()=>{t("changeContent",{value:r.value.value,key:r.value.getAttribute("id"),type:r.value.getAttribute("class")}),l()},o=()=>{localStorage.getItem("history")||localStorage.setItem("history",JSON.stringify({new:[],old:[]}));const e=JSON.parse(localStorage.getItem("history")),t=e.new;if(t.length){const e=r.value.getAttribute("id");if(e.includes("_")||t[t.length-1][e]===L.state.currentSource[e]){if(e.includes("_")){let r=e.split("_")[0],n=e.split("_")[1];t[t.length-1][r][n]!==L.state.currentSource[r][n]&&L.commit("editHistory",L.state.currentSource)}}else L.commit("editHistory",L.state.currentSource)}else L.commit("editHistory",L.state.currentSource)},i=()=>r.value.style="",l=()=>{r.value.style.height=Pe(r.value).height};return{changeHistory:o,change:n,attr:r,adjustHeight:l,restoreHeight:i}}};const Me=(0,c.Z)(ze,[["render",Ke],["__scopeId","data-v-915519b0"]]);var Ve=Me;function qe(){const e=(0,w.qj)({currentSource:L.state.currentSource}),t=e=>{L.commit("changeCurrentSourceValue",e)},r=t=>{try{if(t.includes("_")){let r=t.split("_")[0],n=t.split("_")[1],o=e.currentSource[r];return o?o[n]:null}return e.currentSource[t]}catch(r){L.commit("clearEdit")}};return(0,o.m0)((()=>{e.currentSource=L.state.currentSource})),{...(0,w.BK)(e),upData:t,getContent:r}}var Fe={name:"editInputList",props:{data:{type:Array,required:!0}},components:{editInput:Ve},setup(e){const{upData:t,getContent:r}=qe(),n=(0,w.qj)({data:e.data});return{...(0,w.BK)(n),upData:t,getContent:r}}};const Ze=(0,c.Z)(Fe,[["render",Ee]]);var We=Ze,Ge={base:{name:"基础",children:[{title:"源域名",rows:1,id:"bookSourceUrl",type:"String",hint:"<必填>通常填写网站主页,例: https://www.qidian.com"},{title:"源类型",rows:1,id:"bookSourceType",type:"Number",hint:"<必填>0:文本 1:音频 2:图片 3:文件(只提供下载的网站)"},{title:"源名称",rows:1,id:"bookSourceName",type:"String",hint:"<必填>会显示在源列表"},{title:"源分组",rows:1,id:"bookSourceGroup",type:"String",hint:"<选填>描述源的特征信息"},{title:"源注释",rows:1,id:"bookSourceComment",type:"String",hint:"<选填>描述源作者和状态"},{title:"书源变量",rows:1,id:"variableComment",type:"String",hint:"<选填>书源变量说明"},{title:"登录地址",rows:1,id:"loginUrl",type:"String",hint:"<选填>填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",rows:3,id:"loginUi",type:"String",hint:"<选填>自定义登录界面"},{title:"登录检测",rows:3,id:"loginCheckJs",type:"String",hint:"<选填>登录检测js"},{title:"封面解密",rows:3,id:"coverDecodeJs",type:"String",hint:"<选填>封面解密js"},{title:"并发率",rows:1,id:"concurrentRate",type:"String",hint:"<选填>并发率"},{title:"请求头",rows:3,id:"header",type:"String",hint:"<选填>客户端标识"},{title:"链接验证",rows:1,id:"bookUrlPattern",type:"String",hint:"<选填>当详情页URL与源URL的域名不一致时有效，用于添加网址"}]},search:{name:"搜索",children:[{title:"搜索地址",rows:1,id:"searchUrl",type:"String",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",rows:1,id:"ruleSearch_checkKeyWord",type:"String",hint:"校验关键字"},{title:"列表规则",rows:1,id:"ruleSearch_bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",rows:1,id:"ruleSearch_name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",rows:1,id:"ruleSearch_author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",rows:1,id:"ruleSearch_kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",rows:1,id:"ruleSearch_wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",rows:1,id:"ruleSearch_lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",rows:1,id:"ruleSearch_intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",rows:1,id:"ruleSearch_coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",rows:1,id:"ruleSearch_bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},find:{name:"发现",children:[{title:"发现地址",rows:6,id:"exploreUrl",type:"String",hint:"内容能显示在发现菜单\n每行一条发现分类(网址域名可省略)，例：\n名称1::网址(Url)1\n名称2::网址(Url)2\n..."},{title:"列表规则",rows:1,id:"ruleExplore_bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",rows:1,id:"ruleExplore_name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",rows:1,id:"ruleExplore_author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",rows:1,id:"ruleExplore_kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",rows:1,id:"ruleExplore_wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",rows:1,id:"ruleExplore_lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",rows:1,id:"ruleExplore_intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",rows:1,id:"ruleExplore_coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",rows:1,id:"ruleExplore_bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},detail:{name:"详情",children:[{title:"预处理",rows:3,id:"ruleBookInfo_init",type:"String",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",rows:1,id:"ruleBookInfo_name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",rows:1,id:"ruleBookInfo_author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",rows:1,id:"ruleBookInfo_kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",rows:1,id:"ruleBookInfo_wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",rows:1,id:"ruleBookInfo_lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",rows:1,id:"ruleBookInfo_intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",rows:1,id:"ruleBookInfo_coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",rows:1,id:"ruleBookInfo_tocUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"},{title:"下载URL",rows:1,id:"ruleBookInfo_downloadUrls",type:"String",hint:"文件类书源下载地址 (规则结果为String类型的url, 多个链接返回数组)"},{title:"修改书籍",rows:1,id:"ruleBookInfo_canReName",type:"String",hint:"允许修改书名作者(规则结果为String类型, 默认不允许)"}]},directory:{name:"目录",children:[{title:"更新前JS",rows:3,id:"ruleToc_preUpdateJs",type:"String",hint:"更新前JS 动态更新书籍目录链接"},{title:"列表规则",rows:3,id:"ruleToc_chapterList",type:"String",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",rows:1,id:"ruleToc_chapterName",type:"String",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",rows:1,id:"ruleToc_chapterUrl",type:"String",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"卷名标识",rows:1,id:"ruleToc_isVolume",type:"String",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"收费标识",rows:1,id:"ruleToc_isVip",type:"String",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",rows:1,id:"ruleToc_isPay",type:"String",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"章节信息",rows:1,id:"ruleToc_updateTime",type:"String",hint:"选择章节信息 (规则结果为String)"},{title:"翻页规则",rows:1,id:"ruleToc_nextTocUrl",type:"String",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}]},content:{name:"正文",children:[{title:"脚本注入",rows:3,id:"ruleContent_webJs",type:"String",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"正文规则",rows:1,id:"ruleContent_content",type:"String",hint:"选择正文内容 (规则结果为String)"},{title:"翻页规则",rows:1,id:"ruleContent_nextContentUrl",type:"String",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"资源正则",rows:1,id:"ruleContent_sourceRegex",type:"String",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",rows:1,id:"ruleContent_replaceRegex",type:"String",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",rows:1,id:"ruleContent_imageStyle",type:"String",hint:"FULL:铺满 不填:默认样式"},{title:"购买操作",rows:1,id:"ruleContent_payAction",type:"String",hint:"填写JavaScript 返回购买链接或者调用购买接口"},{title:"图片解密",rows:1,id:"ruleContent_imageDecode",type:"String",hint:"填写JavaScript 返回解密图片的bytes "}]},review:{name:"段评",children:[{title:"段评URL",rows:1,id:"ruleReview_reviewUrl",type:"String",hint:"段评URL"},{title:"发布头像",rows:1,id:"ruleReview_avatarRule",type:"String",hint:"段评发布者头像"},{title:"段评内容",rows:1,id:"ruleReview_contentRule",type:"String",hint:"段评内容"},{title:"发布时间",rows:1,id:"ruleReview_postTimeRule",type:"String",hint:"段评发布时间"},{title:"回复URL",rows:1,id:"ruleReview_reviewQuoteUrl",type:"String",hint:"获取段评回复URL"},{title:"点赞URL",rows:1,id:"ruleReview_voteUpUrl",type:"String",hint:"点赞URL"},{title:"点踩URL",rows:1,id:"ruleReview_voteDownUrl",type:"String",hint:"点踩URL"},{title:"发送回复",rows:1,id:"ruleReview_postReviewUrl",type:"String",hint:"发送回复URL"},{title:"回复段评",rows:1,id:"ruleReview_postQuoteUrl",type:"String",hint:"发送回复段评URL"},{title:"删除段评",rows:1,id:"ruleReview_deleteUrl",type:"String",hint:"删除段评URL"}]},other:{name:"其他",children:[{title:"启用搜索",rows:1,id:"enabled",type:"Boolean",hint:"启用: true  关闭: false (可选,默认true)"},{title:"启用发现",rows:1,id:"enabledExplore",type:"Boolean",hint:"启用: true  关闭: false (可选,默认true)"},{title:"启用段评",rows:1,id:"enabledReview",type:"Boolean",hint:"启用: true  关闭: false (可选,默认false)"},{title:"Cookie",rows:1,id:"enabledCookieJar",type:"Boolean",hint:"保存返回头的Cookie 启用: true  关闭: false (可选,默认false)"},{title:"搜索权重",rows:1,id:"weight",type:"Number",hint:"整数: 0~N (可选,默认0) | 数字越大越靠前"},{title:"排序编号",rows:1,id:"customOrder",type:"Number",hint:"整数: 0~N (可选,默认0) | 数字越小越靠前"}]}},Ye={base:{name:"基础",children:[{title:"源域名",rows:1,id:"sourceUrl",type:"String",hint:"<必填>通常填写网站主页,例: https://www.qidian.com"},{title:"图标",rows:1,id:"sourceIcon",type:"String",hint:"<选填>填写图片网络链接"},{title:"源名称",rows:1,id:"sourceName",type:"String",hint:"<必填>会显示在源列表"},{title:"源分组",rows:1,id:"sourceGroup",type:"String",hint:"<选填>描述源的特征信息"},{title:"源注释",rows:1,id:"sourceComment",type:"String",hint:"<选填>描述源作者和状态"},{title:"分类地址",rows:3,id:"sortUrl",type:"String",hint:"<选填>名称1::链接1\n名称2::链接2"},{title:"登录地址",rows:1,id:"loginUrl",type:"String",hint:"<选填>填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",rows:3,id:"loginUi",type:"String",hint:"<选填>自定义登录界面"},{title:"登录检测",rows:3,id:"loginCheckJs",type:"String",hint:"<选填>登录检测js"},{title:"封面解密",rows:3,id:"coverDecodeJs",type:"String",hint:"<选填>封面解密js"},{title:"请求头",rows:3,id:"header",type:"String",hint:"<选填>客户端标识"},{title:"变量说明",rows:1,id:"variableComment",type:"String",hint:"<选填>源变量说明"},{title:"并发率",rows:1,id:"concurrentRate",type:"String",hint:"<选填>并发率"}]},list:{name:"列表",children:[{title:"列表样式",rows:1,id:"articleStyle",type:"Number",hint:"<选填>0,1,2 (默认0)"},{title:"列表规则",rows:1,id:"ruleArticles",type:"String",hint:"规则结果为List<Element>"},{title:"翻页规则",rows:1,id:"ruleNextPage",type:"String",hint:"下一页链接 规则结果为List<String>或String"},{title:"标题规则",rows:1,id:"ruleTitle",type:"String",hint:"文章标题 规则结果为String"},{title:"时间规则",rows:1,id:"rulePubDate",type:"String",hint:"文章发布时间 规则结果为String"},{title:"描述规则",rows:1,id:"ruleDescription",type:"String",hint:"文章简要描述 规则结果为String"},{title:"图片规则",rows:1,id:"ruleImage",type:"String",hint:"文章图片链接 规则结果为String"},{title:"链接规则",rows:1,id:"ruleLink",type:"String",hint:"文章链接 规则结果为String"}]},webView:{name:"WebView",children:[{title:"启用JS",rows:1,id:"enableJs",type:"Number",hint:"启用: true  关闭: false (可选,默认true)"},{title:"加载地址",rows:1,id:"loadWithBaseUrl",type:"Number",hint:"启用: true  关闭: false (可选,默认true)"},{title:"内容规则",rows:1,id:"ruleContent",type:"String",hint:"文章正文"},{title:"样式规则",rows:3,id:"style",type:"String",hint:"文章正文样式 填写css"},{title:"注入规则",rows:3,id:"injectJs",type:"String",hint:"注入网页的JavaScript"},{title:"黑名单",rows:1,id:"contentBlacklist",type:"String",hint:"webView链接加载黑名单，英文逗号隔开"},{title:"白名单",rows:1,id:"contentWhitelist",type:"String",hint:"webView链接加载白名单，英文逗号隔开"}]},other:{name:"其他",children:[{title:"启用",rows:1,id:"enabled",type:"Boolean",hint:"启用: true  关闭: false (可选,默认true)"},{title:"Cookie",rows:1,id:"enabledCookieJar",type:"Boolean",hint:"保存返回头的Cookie 启用: true  关闭: false (可选,默认false)"},{title:"单URL",rows:1,id:"singleUrl",type:"Boolean",hint:"启用: true  关闭: false (可选,默认false)"},{title:"排序编号",rows:1,id:"customOrder",type:"Number",hint:"整数: 0~N (可选,默认0) | 数字越小越靠前"}]}},Qe={components:{editMenu:ee,editOut:Ie,editInputList:We},setup(){const e=(0,w.qj)({config:{},selectTabKey:"base"});/bookSource/.test(location.href)?(e.config=Ge,document.title="书源编辑"):(e.config=Ye,document.title="订阅源编辑");const t=t=>e.selectTabKey=t,r=(0,o.Fl)((()=>e.config[e.selectTabKey].children));return(0,o.bv)((()=>{})),{...(0,w.BK)(e),changeSelectTabKey:t,currentTabData:r}}};const Xe=(0,c.Z)(Qe,[["render",S],["__scopeId","data-v-ac6d92b6"]]);var et=Xe;const tt=[{path:"/bookSource",name:"book-home",component:et},{path:"/rssSource",name:"rss-home",component:et}],rt=(0,d.p7)({history:(0,d.r5)(),routes:tt});var nt=rt;(0,n.ri)(u).use(L).use(nt).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<l&&(l=i));if(a){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],a=n[1],c=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(t&&t(n);s<l.length;s++)i=l[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self["webpackChunklegado_web_source_editor"]=self["webpackChunklegado_web_source_editor"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9700)}));n=r.O(n)})();