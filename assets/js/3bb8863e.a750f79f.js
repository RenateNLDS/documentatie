"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[3292],{22248:(e,t,n)=>{n.d(t,{C:()=>k});var a=n(87462),l=n(5104),i=n(1761),r=n(86010),s=n(67294),o=n(87536);const c="example-form_t2kS",m="utrecht-textbox--example-house-number_Gpje",d="utrecht-textbox--example-house-number-addition_B48h",u="utrecht-textbox--example-street-name_yBRo",p="utrecht-textbox--example-postal-code-nl_EiCQ",v="utrecht-textbox--example-woonplaats_W8bo",g="utrecht-textbox--example-voorletters_rUQ1",E="utrecht-textbox--example-family-name_OW_g",h="utrecht-textbox--example-tel_j5i8",f="utrecht-textbox--example-tel-national_gBVb",b="utrecht-textbox--example-voorvoegsel_MVYN",y="utrecht-textbox--example-mail_Clno",x="voorbeeld-theme--extensions_pWBG",$=e=>{let{children:t,description:n,label:a}=e;const l=n?(0,s.useId)():null;return s.createElement(i.pg,{role:"radiogroup","aria-describedby":n?l:void 0},a?s.createElement(i.Qv,null,a):null,n?s.createElement("div",{id:l},n):null,t)},_=e=>{let{children:t,description:n}=e;return s.createElement(i.Wi,{type:"radio"},s.createElement("p",{className:"utrecht-form-field__label utrecht-form-field__label--radio"},t),n?s.createElement("div",{className:"utrecht-form-field__description"},n):null)},N=e=>{let{children:t,description:n}=e;return s.createElement(i.Wi,{type:"checkbox"},s.createElement("p",{className:"utrecht-form-field__label utrecht-form-field__label--checkbox"},t),n?s.createElement("div",{className:"utrecht-form-field__description"},n):null)},k=e=>{var t,n,k,w,Z,V,S,C,X,W,F,q;let{noAutoComplete:z=[],defaultOptional:j=!1,astrixOnly:U=!1,nativeNumberInput:G=[],checkboxForRadio:O=[],unclearLabel:A=[],unnecessaryQuestions:Q=[],colorOnlyError:B=[],unlinkedLables:I=[],validationMode:M="onSubmit",telNational:T=!1,postalCodeSpace:H,postalCodePattern:L=!0}=e;const{register:J,handleSubmit:D,formState:{errors:P}}=(0,o.cI)({mode:M}),R=e=>!0===I||I.includes(e)?void 0:(0,s.useId)(),Y=(0,s.useId)(),K=R("straatnaam"),ee=R("huisnummer"),te=R("huisnummerToevoeging"),ne=R("poscode"),ae=R("woonplaats"),le=R("antiGraffitiCoating"),ie=R("opmerkingen"),re=R("achternaam"),se=R("tussenvoegsels"),oe=R("voorletters"),ce=R("geslacht"),me=R("email"),de=R("phone");return s.createElement(l.Z,null,s.createElement(i.JH,{className:(0,r.Z)("voorbeeld-theme",x)}," ",s.createElement("main",null,s.createElement(i.nL,null,"Voorbeeld formulier met fouten"),s.createElement("form",{onSubmit:D((e=>console.log(e,P))),"aria-labelledby":Y,className:c},s.createElement(i.XJ,{id:Y},"Graffiti-schoonmaakregeling aanvragen"),s.createElement(i.nv,null,"Graffiti of posters kunnen alleen worden verwijderd als u daarvoor toestemming geeft. U hoeft dit maar 1 keer te doen. Heeft u al een keer toestemming gegeven? Dan kunt u de vervuiling meteen melden."),U&&s.createElement(i.nv,null,"Velden met een * zijn ",j?"verplicht":"optioneel"),s.createElement(i.aC,null,"Gegevens pand"),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:K},!0===A||A.includes("straatnaam")?"Straatna(a)m(en)":"Straatnaam",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("straatnaam")&&P.straatnaam&&s.createElement(i.ue,{id:`${K}-description`,invalid:!0,className:`invalid-description--${P.straatnaam.type}`},null==(t=P.straatnaam)?void 0:t.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("straatnaam",{required:"Verplicht: Vergeet niet een straatnaam in te vullen"}),{type:"text",id:K,autoComplete:!0===z||z.includes("straatnaam")?void 0:"street-address",invalid:!!P.straatnaam,"aria-describedby":`${K}-description`,className:u}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:ee},"Huisnummer",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("huisnummer")&&P.huisnummer&&s.createElement(i.ue,{id:`${ee}-description`,invalid:!0,className:`invalid-description--${P.huisnummer.type}`},null==(n=P.huisnummer)?void 0:n.message.toString()),!0===G||G.includes("huisnummer")?s.createElement(i.fE,(0,a.Z)({},J("huisnummer",{required:"Verplicht: Vergeet niet een huisnummer in te vullen"}),{type:"number",id:ee,"aria-describedby":`${ee}-description`,invalid:!!P.huisnummer,className:m})):s.createElement(i.fE,(0,a.Z)({},J("huisnummer",{required:"Verplicht: Vergeet niet een huisnummer in te vullen"}),{type:"text",id:ee,inputMode:"numeric","aria-describedby":`${ee}-description`,invalid:!!P.huisnummer,className:m}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:te},"Toevoeging huisnummer",!j&&s.createElement("span",null," ",U?"*":"(optioneel)"))),!B.includes("huisnummer-toevoeging")&&P["huisnummer-toevoeging"]&&s.createElement(i.ue,{id:`${te}-description`,invalid:!0,className:`invalid-description--${P["huisnummer-toevoeging"].type}`},null==(k=P["huisnummer-toevoeging"])?void 0:k.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("huisnummer-toevoeging"),{type:"text",id:te,"aria-describedby":`${te}-description`,className:d}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:ne},"Postcode",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("postcode")&&P.postcode&&s.createElement(i.ue,{id:`${ne}-description`,invalid:!0,className:`invalid-description--${P.postcode.type}`},null==(w=P.postcode)?void 0:w.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("postcode",{required:"Verplicht: Vergeet niet een postcode in te vullen",pattern:L?!0===H?/^\d{4} [A-Za-z]{2}$/:!1===H?/^\d{4}[A-Za-z]{2}$/:/^\s*\d{4}\s*[A-Za-z]{2}\s*$/:void 0}),{type:"text",id:ne,autoComplete:!0===z||z.includes("postcode")?void 0:"postal-code","aria-describedby":`${ne}-description`,invalid:!!P.postcode,className:p}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:ae},"Woonplaats",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("woonplaats")&&P.woonplaats&&s.createElement(i.ue,{id:`${ae}-description`,invalid:!0,className:`invalid-description--${P.woonplaats.type}`},null==(Z=P.woonplaats)?void 0:Z.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("woonplaats",{required:"Verplicht: Vergeet niet een woonplaats in te vullen"}),{type:"text",id:ae,autoComplete:!0===z||z.includes("woonplaats")?void 0:"address-level2","aria-describedby":`${ae}-description`,invalid:!!P.woonplaats,className:v}))),s.createElement(i.Wi,null,s.createElement(i.pg,null,s.createElement(i.Qv,null,"Heeft uw pand een anti-graffiti-coating?"),s.createElement(N,null,!B.includes("anti-graffiti-coating")&&P["anti-graffiti-coating"]&&s.createElement(i.ue,{id:`${le}-description`,invalid:!0,className:`invalid-description--${P["anti-graffiti-coating"].type}`},null==(V=P["anti-graffiti-coating"])?void 0:V.message.toString()),s.createElement(i.lX,{htmlFor:`${le}-true`,type:"radio"},!0===O||O.includes("anti-graffiti-coating")?s.createElement(i.XZ,(0,a.Z)({},J("anti-graffiti-coating"),{className:"utrecht-form-field__input",id:`${le}-true`,value:"true","aria-describedby":`${le}-description`,invalid:!!P["anti-graffiti-coating"]})):s.createElement(i.EU,(0,a.Z)({},J("anti-graffiti-coating"),{className:"utrecht-form-field__input",id:`${le}-true`,value:"ja","aria-describedby":`${le}-description`,invalid:!!P["anti-graffiti-coating"]})),"Ja")),s.createElement(N,null,s.createElement(i.lX,{htmlFor:`${le}-false`,type:"radio"},!0===O||O.includes("anti-graffiti-coating")?s.createElement(i.XZ,(0,a.Z)({},J("anti-graffiti-coating"),{className:"utrecht-form-field__input",id:`${le}-false`,value:"false","aria-describedby":`${le}-description`,invalid:!!P["anti-graffiti-coating"]})):s.createElement(i.EU,(0,a.Z)({},J("anti-graffiti-coating"),{className:"utrecht-form-field__input",id:`${le}-false`,value:"nee","aria-describedby":`${le}-description`,invalid:!!P["anti-graffiti-coating"]})),"Nee")))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:ie},"Aanvullende opmerkingen",!j&&s.createElement("span",null," ",U?"*":"(optioneel)"))),!B.includes("opmerkingen")&&P.opmerkingen&&s.createElement(i.ue,{id:`${ie}-description`,invalid:!0,className:`invalid-description--${P.opmerkingen.type}`},null==(S=P.opmerkingen)?void 0:S.message.toString()),s.createElement(i.gx,(0,a.Z)({},J("opmerkingen"),{id:ie,invalid:!!P.opmerkingen,"aria-describedby":`${ie}-description`}))),s.createElement(i.aC,null,"Uw gegevens"),s.createElement(i.nv,null,"Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden zonder uw toestemming niet aan derden verstrekt."),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:re},"Achternaam",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("achternaam")&&P.achternaam&&s.createElement(i.ue,{id:`${re}-description`,invalid:!0,className:`invalid-description--${P.achternaam.type}`},null==(C=P.achternaam)?void 0:C.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("achternaam",{required:"Verplicht: Vergeet niet een achternaam in te vullen"}),{type:"text",id:re,autoComplete:!0===z||z.includes("achternaam")?void 0:"cc-family-name",invalid:!!P.achternaam,"aria-describedby":`${re}-description`,className:E}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:se},!0===A||A.includes("tussenvoegsels")?"Tussenvoegsel(s)":"Tussenvoegsels",!j&&s.createElement("span",null," ",U?"*":"(optioneel)"))),!B.includes("tussenvoegsels")&&P.tussenvoegsels&&s.createElement(i.ue,{id:`${se}-description`,invalid:!0,className:`invalid-description--${P.tussenvoegsels.type}`},null==(X=P.tussenvoegsels)?void 0:X.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("tussenvoegsels"),{type:"text",id:se,autoComplete:!0===z||z.includes("tussenvoegsels")?void 0:"cc-family-name","aria-describedby":`${se}-description`,invalid:!!P.tussenvoegsels,className:b}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:oe},!0===A||A.includes("voorletters")?"Voorletter(s)":"Voorletters (1 of meerdere)",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("voorletters")&&P.voorletters&&s.createElement(i.ue,{id:`${oe}-description`,invalid:!0,className:`invalid-description--${P.voorletters.type}`},null==(W=P.voorletters)?void 0:W.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("voorletters",{required:"Verplicht: Vergeet niet minimaal 1 voorletter in te vullen"}),{type:"text",id:oe,invalid:!!P.voorletters,"aria-describedby":`${oe}-description`,className:g}))),!0===Q||Q.includes("gender")&&s.createElement($,{label:"Geslacht "+(j?U?"*":"(verplicht)":""),description:s.createElement(i.ue,{id:`${ce}-desciption`,invalid:!!P.geslacht,className:(0,r.Z)(!!P.geslacht&&`invalid-description--${P.geslacht.type}`)},"Selecteer 'Niet relevant' als u geen keuze wilt maken in geslacht")},s.createElement(_,null,s.createElement(i.lX,{htmlFor:`${ce}-man`,type:"radio"},s.createElement(i.EU,(0,a.Z)({},J("geslacht",{required:!0}),{className:"utrecht-form-field__input",id:`${ce}-man`,value:"man","aria-describedby":`${ce}-desciption`,invalid:!!P.geslacht})),"Man")),s.createElement(_,null,s.createElement(i.lX,{htmlFor:`${ce}-vrouw`,type:"radio"},s.createElement(i.EU,(0,a.Z)({},J("geslacht",{required:!0}),{className:"utrecht-form-field__input",id:`${ce}-vrouw`,value:"vrouw","aria-describedby":`${ce}-desciption`,invalid:!!P.geslacht})),"Vrouw")),s.createElement(_,null,s.createElement(i.lX,{htmlFor:`${ce}-none`,type:"radio"},s.createElement(i.EU,(0,a.Z)({},J("geslacht",{required:!0}),{className:"utrecht-form-field__input",id:`${ce}-none`,value:"none","aria-describedby":`${ce}-desciption`,invalid:!!P.geslacht})),"Niet relevant"))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:me},"E-mailadres",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("email")&&P.email&&s.createElement(i.ue,{id:`${me}-description`,invalid:!0,className:`invalid-description--${P.email.type}`},null==(F=P.email)?void 0:F.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("email",{required:"Verplicht: Vergeet niet je email in te vullen"}),{type:"email",id:me,autoComplete:!0===z||z.includes("email")?void 0:"email",invalid:!!P.email,"aria-describedby":`${me}-description`,className:y}))),s.createElement(i.Wi,{type:"text"},s.createElement(i.nv,null,s.createElement(i.lX,{htmlFor:de},"Telefoonnummer",j&&s.createElement("span",null," ",U?"*":"(verplicht)"))),!B.includes("telefoonnummer")&&P.telefoonnummer&&s.createElement(i.ue,{id:`${de}-description`,invalid:!0,className:`invalid-description--${P.telefoonnummer.type}`},null==(q=P.telefoonnummer)?void 0:q.message.toString()),s.createElement(i.fE,(0,a.Z)({},J("telefoonnummer",{required:"Verplicht: Vergeet niet je telefoonnummer in te vullen"}),{type:"tel",id:de,autoComplete:!0===z||z.includes("telefoonnummer")?void 0:T?"tel-national":"tel",invalid:!!P.telefoonnummer,"aria-describedby":`${de}-description`,className:T?f:h}))),s.createElement(i.hE,null,s.createElement(i.zx,{type:"submit",appearance:"primary-action-button"},"Vraag aan"))))))}},36410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(22248),l=n(67294);const i=()=>l.createElement(a.C,{unlinkedLables:!0,defaultOptional:!0,astrixOnly:!0,unnecessaryQuestions:["gender"],validationMode:"onBlur"})}}]);