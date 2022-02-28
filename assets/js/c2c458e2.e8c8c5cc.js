"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7133],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Figma File structure",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"File structure",pagination_label:"File structure",description:"NL Design System File structure in Figma",keywords:["designer","figma"]},l="File structure in Figma",c={unversionedId:"meedoen/als-designer/figma/figma-file-structure",id:"meedoen/als-designer/figma/figma-file-structure",title:"Figma File structure",description:"NL Design System File structure in Figma",source:"@site/docs/meedoen/02-als-designer/02-figma/03-figma-file-structure.md",sourceDirName:"meedoen/02-als-designer/02-figma",slug:"/meedoen/als-designer/figma/figma-file-structure",permalink:"/documentatie/docs/meedoen/als-designer/figma/figma-file-structure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/meedoen/02-als-designer/02-figma/03-figma-file-structure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Figma File structure",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"File structure",pagination_label:"File structure",description:"NL Design System File structure in Figma",keywords:["designer","figma"]},sidebar:"meedoen",previous:{title:"Naming",permalink:"/documentatie/docs/meedoen/als-designer/figma/figma-naming"},next:{title:"Design tokens",permalink:"/documentatie/docs/meedoen/als-designer/figma/figma-design-tokens"}},u=[{value:"Grouping",id:"grouping",children:[{value:"Groups",id:"groups",children:[],level:3},{value:"Frames",id:"frames",children:[],level:3}],level:2},{value:"Emojis aid quick scanning",id:"emojis-aid-quick-scanning",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-structure-in-figma"},"File structure in Figma"),(0,o.kt)("p",null,"A proper file structure helps in scanning and navigating Figma files. High-level sectioning (such as component groups, components, component specifications, or examples) helps quickly navigate to these sections."),(0,o.kt)("p",null,"The keyboard shortcuts ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," allow quickly zooming in on either the whole page or a selection respectively."),(0,o.kt)("p",null,"With proper sections and layers, you can zoom into a section or layer by selecting it from the layer panel and zooming in by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),". Zooming back to the either page or 100% of the current view can be done by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," respectively."),(0,o.kt)("h2",{id:"grouping"},"Grouping"),(0,o.kt)("p",null,"Grouping in Figma is done by either creating a group or frame. Out of these two frames offer the most flexibility."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/documentatie/docs/meedoen/als-designer/figma/figma-components"},"Components can be considered another form of grouping"),"."),(0,o.kt)("h3",{id:"groups"},"Groups"),(0,o.kt)("p",null,"Groups simply group multiple objects together. Resizing a group causes the object it contains to scale with it."),(0,o.kt)("p",null,"Properties that can be set on a group are position, dimension, blending mode, and opacity. Fill, stroke, and effects affect all objects inside of a group."),(0,o.kt)("h3",{id:"frames"},"Frames"),(0,o.kt)("p",null,"Resizing a frame causes objects within it to respond to their individual constraints. Objects can be set to a fixed position within, or set to fill the width and/or height of the parent frame."),(0,o.kt)("p",null,"Another benefit of frames is that you often do not need a vector object to create an element; i.e. properties for a button such as background or border radius, width, and color can be set directly on the frame itself."),(0,o.kt)("p",null,"Auto layout can only be set on frames, applying auto-layout to a group will convert it into a frame automatically."),(0,o.kt)("h2",{id:"emojis-aid-quick-scanning"},"Emojis aid quick scanning"),(0,o.kt)("p",null,"Emojis in page and layer naming can aid quick scanning or provide a means to quickly check a status."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140959174-76e45980-73df-43c1-b918-f6cd14af3a29.png",alt:"Emojis in page and component names"})),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Avoid unnecessary folder nesting, but do use nesting to intentionally group related elements."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140959366-05df035f-3255-4346-8c65-f06056b241f0.png",alt:"Unintentional and intentional nesting examples"})))}m.isMDXComponent=!0}}]);