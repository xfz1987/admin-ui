webpackJsonp([29],{paZQ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("au-panel",{staticClass:"section",attrs:{title:"组件描述"}},[s("p",{staticClass:"paragraph"},[t._v("\n      日期选择组件\n    ")]),t._v(" "),s("div",{staticClass:"component-example"},[s("au-datepicker",{attrs:{label:"选一个日子吧",validators:t.validators},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}})],1)]),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Props"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认")]),t._v(" "),s("th",[t._v("可选")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("label")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            提示文字\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("label-width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td"),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("合法的css宽度值，仅支持px单位")]),t._v(" "),s("td",[t._v("\n            提示文字的宽度"),s("br"),t._v("\n            仅inline为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("tips")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -String\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            需要显示的解释信息"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("inline")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否横向放置label\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            值\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            输入框占位字符\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("normal")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("large")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("normal")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("small")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("mini")])])]),t._v(" "),s("td",[t._v("\n            输入框尺寸（高度）\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("full-width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否占满父元素宽度"),s("br"),t._v("\n            仅在inline为false时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            合法的css长度值\n          ")]),t._v(" "),s("td",[t._v("\n            输入框的宽度"),s("br"),t._v("\n            仅支持px单位"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("禁用")])]),t._v(" "),s("tr",[s("td",[t._v("readonly")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("只读")])]),t._v(" "),s("tr",[s("td",[t._v("start")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            有效日期的开始日期（包含）"),s("br"),t._v("\n            设置后该日期之后的日期才可被选中"),s("br"),t._v("\n            格式必须为YYYY-M(M)-D(D)\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("end")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            有效日期的结束日期（包含）"),s("br"),t._v("\n            设置后该日期之前的日期才可被选中"),s("br"),t._v("\n            格式必须为YYYY-M(M)-D(D)\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("warning")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("是否显示警告样式")])]),t._v(" "),s("tr",[s("td",[t._v("warnings")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -String\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            需要显示的警告信息"),s("br"),t._v("\n            如果给定了需要显示的警告信息，则组件将不执行validators中提供的验证器，而只是简单显示给定的警告"),s("br"),t._v("\n            不管warning选项是true还是false，只要给定了警告信息就一定会显示警告样式"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("validators")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -Object\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("validator: Function，接受一个表示当前值的参数value")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("warning: String，当验证失败时需要显示的警告信息")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("async: Boolean，是否为异步验证，默认为false")])])]),t._v(" "),s("td",[t._v("\n            验证器配置"),s("br"),t._v("\n            同步验证时，验证器函数只需要返回Booean类型的验证结果即可"),s("br"),t._v("\n            异步验证时，需要额外配置async为true"),s("br"),t._v("\n            同时，验证器函数需要返回一个promise，并在resolve函数中传递Boolean类型的验证结果给验证器"),s("br"),t._v("\n            既有同步验证，又有异步验证时，验证器首先执行同步验证"),s("br"),t._v("\n            只有通过了全部的同步验证时，才会执行异步验证"),s("br"),t._v("\n            不管warning选项是true还是false，只要验证未通过就一定会显示警告样式"),s("br")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Slots"}},[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Events"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@change")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),s("td",[t._v("\n            值改变事件"),s("br"),t._v("\n            参数value表示当前值\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("@focus")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),s("td",[t._v("\n            聚焦事件"),s("br"),t._v("\n            参数value表示当前值\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("@blur")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),s("td",[t._v("\n            失焦事件"),s("br"),t._v("\n            参数value表示当前值\n          ")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Methods"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("validate()")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            在给定了验证器的情况下执行验证"),s("br"),t._v("\n            返回一个Promise实例"),s("br"),t._v("\n            需要同时验证多个表单时请使用Promise.all()方法\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("clear()")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("清除值和警告")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"使用示例"}},[s("h4",{staticClass:"title-1"},[t._v("基础用例")]),t._v(" "),s("code-h",{attrs:{lang:"html",content:'\n      <au-datepicker label="选一个日子吧" v-model="date" :validators="validators"></au-datepicker>\n    '}}),t._v(" "),s("code-h",{attrs:{lang:"js"}},[t._v("\n      export default {\n        data () {\n          return {\n            date: '',\n            validators: [\n              {\n                validator (v) {\n                  return v === '2018-01-05'\n                },\n                warning: '请选择2018年01月05日'\n              }\n            ]\n          }\n        }\n      }\n    ")])],1)],1)},staticRenderFns:[]},e=s("VU/8")({name:"datepicker-examples",data:function(){return{date:"",validators:[{validator:function(t){return"2018-02-15"===t},warning:"请选择2018年02月15日"}]}}},v,!1,null,null,null);a.default=e.exports}});
//# sourceMappingURL=29.3a7c189b695b7386ca1d.js.map