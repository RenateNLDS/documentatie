"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[8541],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={title:"Date picker",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Date picker",pagination_label:"Date picker",description:"UX richtlijnen voor date picker component",keywords:["date picker","den haag","community"]},l=void 0,d={unversionedId:"componenten/date-picker",id:"componenten/date-picker",title:"Date picker",description:"UX richtlijnen voor date picker component",source:"@site/docs/componenten/date-picker.mdx",sourceDirName:"componenten",slug:"/componenten/date-picker",permalink:"/docs/componenten/date-picker",editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/date-picker.mdx",tags:[],version:"current",frontMatter:{title:"Date picker",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Date picker",pagination_label:"Date picker",description:"UX richtlijnen voor date picker component",keywords:["date picker","den haag","community"]},sidebar:"componenten",previous:{title:"Componenten Overzicht",permalink:"/docs/componenten/"},next:{title:"Headings",permalink:"/docs/componenten/headings"}},p=[{value:"Richtlijnen",id:"richtlijnen",children:[],level:2},{value:"Anatomie",id:"anatomie",children:[],level:2},{value:"(Interactive) states",id:"interactive-states",children:[],level:2},{value:"Toegankelijkheid",id:"toegankelijkheid",children:[],level:2},{value:"Datepicker",id:"datepicker",children:[],level:2}],u={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date-picker"},"Date picker"),(0,a.kt)("p",null,"Date pickers laten gebruikers een datum kiezen uit een visuele kalender."),(0,a.kt)("h2",{id:"richtlijnen"},"Richtlijnen"),(0,a.kt)("p",null,"Gebruik datum en tijd prikkers als je een gebruiker vraagt een datum of tijd te kiezen. Als de datum gemakkelijk kan worden onthouden en ingetypt, gebruik dan een simpele tekst input in plaats van deze complexe date picker component."),(0,a.kt)("p",null,"Gebruik de kalender prikker wanneer de gebruiker de relatie tussen de in te voeren datum en andere dagen moet kunnen zien of als een datum variabel kan zijn. Het geeft de gebruiker de kans om zowel een visuele keuze te maken uit een kalender of handmatig de datum in te voeren."),(0,a.kt)("h2",{id:"anatomie"},"Anatomie"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Label: beschrijft wat de gebruiker kan doen met de component"),(0,a.kt)("li",{parentName:"ol"},"Datum veld: een text input waar de gebruiker handmatig de datum in kan voeren."),(0,a.kt)("li",{parentName:"ol"},"Icoon: dit kalender icoon geeft aan dat een kalender menu beschikbaar is."),(0,a.kt)("li",{parentName:"ol"},"Kalender: menu waar een datum kan worden geselecteerd"),(0,a.kt)("li",{parentName:"ol"},"Jaar besturing: stelt de gebruiker in staat om door eerdere en toekomstige tijdspanne te navigeren"),(0,a.kt)("li",{parentName:"ol"},"Maand besturing: stelt de gebruiker in staat om per maand voor of achteruit in tijd te gaan"),(0,a.kt)("li",{parentName:"ol"},"Weekdag: dagen in de week"),(0,a.kt)("li",{parentName:"ol"},"Dag: dagen in een maand")),(0,a.kt)("h2",{id:"interactive-states"},"(Interactive) states"),(0,a.kt)("p",null,"De date picker heeft inactive, active, hover, disabled en focus statussen."),(0,a.kt)("h2",{id:"toegankelijkheid"},"Toegankelijkheid"),(0,a.kt)("p",null,"Sommige gebruikers kunnen moeite hebben met de interactie die nodig is om met een date picker een datum te kiezen. Wanneer een date picker component wordt gebruikt, geef gebruikers dan altijd de optie om de datum ook met een simpel tekst veld in te voeren."),(0,a.kt)("h2",{id:"datepicker"},"Datepicker"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"status"),": community"),(0,a.kt)("p",null,"Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/denhaag/?path=/story/react-input-datepicker--default-story"},"Datepicker is beschikbaar in Den Haag Design System"))))}s.isMDXComponent=!0}}]);