import{a as r,j as e}from"./jsx-runtime-eae7a151.js";function s({tokens:n,showConvertedRemToPx:t}){return r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),t&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([d,i])=>r("tr",{children:[e("td",{children:d}),e("td",{children:i}),t&&r("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})}try{s.displayName="TokensGrid",s.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},showConvertedRemToPx:{defaultValue:null,description:"",name:"showConvertedRemToPx",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
//# sourceMappingURL=TokensGrid-cae2decd.js.map