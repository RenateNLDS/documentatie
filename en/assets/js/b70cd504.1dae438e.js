"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [36546],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => p });
   var a = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a);
    }
    return t;
   }
   function r(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     a,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       a,
       o = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var l = a.createContext({}),
    d = function (e) {
     var n = a.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : r(r({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return a.createElement(l.Provider, { value: n }, e.children);
    },
    k = "mdxType",
    g = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    u = a.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      k = d(t),
      u = o,
      p = k["".concat(l, ".").concat(u)] || k[u] || g[u] || i;
     return t ? a.createElement(p, r(r({ ref: n }, m), {}, { components: t })) : a.createElement(p, r({ ref: n }, m));
    });
   function p(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var i = t.length,
      r = new Array(i);
     r[0] = u;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[k] = "string" == typeof e ? e : o), (r[1] = s);
     for (var d = 2; d < i; d++) r[d] = t[d];
     return a.createElement.apply(null, r);
    }
    return a.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  46429: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => g, frontMatter: () => i, metadata: () => s, toc: () => d });
   var a = t(87462),
    o = (t(67294), t(3905));
   const i = { title: "Jouw project inrichten op de NL Design System-architectuur", slug: "jouw-project-inrichten-op-de-nl-design-system-architectuur", authors: [{ name: "Robbert Broersma", title: "Design System Lead NL Design System", url: "http://robbertbroersma.nl" }], tags: ["architectuur", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/05/MicrosoftTeams-image.png", hide_table_of_contents: !1, date: new Date("2021-05-21T00:00:00.000Z") },
    r = void 0,
    s = {
     permalink: "/en/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur",
     source: "@site/blog/2021/20210521-jouw-project-inrichten-op-de-nl-design-system-architectuur.md",
     title: "Jouw project inrichten op de NL Design System-architectuur",
     description: "2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan.",
     date: "2021-05-21T00:00:00.000Z",
     formattedDate: "May 21, 2021",
     tags: [
      { label: "architectuur", permalink: "/en/blog/tags/architectuur" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Robbert Broersma", title: "Design System Lead NL Design System", url: "http://robbertbroersma.nl" }],
     frontMatter: { title: "Jouw project inrichten op de NL Design System-architectuur", slug: "jouw-project-inrichten-op-de-nl-design-system-architectuur", authors: [{ name: "Robbert Broersma", title: "Design System Lead NL Design System", url: "http://robbertbroersma.nl" }], tags: ["architectuur", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/05/MicrosoftTeams-image.png", hide_table_of_contents: !1, date: "2021-05-21T00:00:00.000Z" },
     prevItem: { title: "Innovatiebudget voor de werkwijze van het NL Design System", permalink: "/en/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system" },
     nextItem: { title: "Waarom NL Design System onmisbaar is voor organisaties", permalink: "/en/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Nieuwe werkwijze en aanvraag Innovatiebudget", id: "nieuwe-werkwijze-en-aanvraag-innovatiebudget", level: 2 },
     { value: "Design Tokens voor CSS", id: "design-tokens-voor-css", level: 2 },
     { value: "BEM class names voor CSS", id: "bem-class-names-voor-css", level: 2 },
     { value: "Storybook voor elke organisatie", id: "storybook-voor-elke-organisatie", level: 2 },
     { value: "Backlog voor co\xf6rdinatie van eisen", id: "backlog-voor-co\xf6rdinatie-van-eisen", level: 2 },
     { value: "Meewerken aan NL Design System", id: "meewerken-aan-nl-design-system", level: 2 },
    ],
    m = { toc: d },
    k = "wrapper";
   function g(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(k, (0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("p", null, "2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan."), (0, o.kt)("h2", { id: "nieuwe-werkwijze-en-aanvraag-innovatiebudget" }, "Nieuwe werkwijze en aanvraag Innovatiebudget"), (0, o.kt)("p", null, "2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan. Daarna komen de componenten 1 voor 1 beschikbaar voor Rijkshuisstijl en voor projecten voor Gemeente Amsterdam. Hoe kunnen ze zo succesvol samenwerken, terwijl ze technisch andere eisen hebben? Hoe kunnen projecten samenwerken en ook een helemaal eigen visueel ontwerp realiseren?"), (0, o.kt)("p", null, "De NL Design System-architectuur is bedacht om organisaties die op het eerste gezicht weinig raakvlakken hebben, mogelijkheid te bieden samen te werken aan uitdagingen die om veel tijd en expertise vragen, zoals toegankelijke websites maken en teams binnen 1 organisatie laten werken met hun framework naar keuze."), (0, o.kt)("p", null, "Wij vroegen organisaties die al aan hun eigen design system werken of ze hun websites willen en kunnen bouwen met open source componenten die al door andere overheden worden gedeeld. De meeste organisaties hadden wensen waar het bestaande aanbod nog niet goed in voorzag."), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Hergebruik in uiteenlopende technieken"), ": Het eerste struikelblok is dat er qua techniek vaak geen gemene deler is: de organisatie zelf ontwikkelt bijvoorbeeld in het framework Angular, terwijl de open source teams werken met React en styled-components waardoor geen aansluiting mogelijk is."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Doorlooptijd voor nieuwe componenten"), ": Een tweede bezwaar dat genoemd wordt: op het moment dat je voor je project een nieuw onderdeel wil toevoegen dat een intern team gauw nodig heeft, dan is het proces om de hele community daarbij te betrekken een te grote vertraging. Je wilt nog wel werk gedaan krijgen en niet alleen moeten overleggen met andere teams."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Hergebruik voor andere huisstijlen"), ": Zonder ingrijpende wijzigingen van een open source component heb je bovendien nog een drempel: als je een component van bijvoorbeeld Gemeente Amsterdam gebruikt, dan ziet jouw website er automatisch een beetje uit zoals de website van Amsterdam. Om jouw eigen huisstijl te realiseren op basis van een component van een ander, moet je vaak een kopie maken en zelf naar eigen smaak doorontwikkelen.")), (0, o.kt)("p", null, "Het veelgehoorde argument om een open source project te gebruiken vanwege de \u2018grote community\u2019 zodat je toegang hebt tot veel kennis en support op internet, gaat niet meer op wanneer je een kopie moet maken. Die kopie is al gauw achterhaald ten opzichte van de ontwikkelingen van een groot open source project. Je wilt juist werken met een centraal open source project waar je een verbetering aan kan toevoegen wanneer je die zelf nodig hebt, waar vervolgens de hele community van kan profiteren. Maar daarna gaan de ontwikkelingen gewoon door, en jouw verbetering blijft doorleven in het project."), (0, o.kt)("p", null, "We vroegen deze organisaties ook of ze hun eigen design system werk uit Git als open source op internet wilden zetten. Veelgenoemd bezwaar was: onze componenten zijn niet \u2018algemeen\u2019 genoeg, daar hebben anderen toch niets aan! Ook: wij hebben helemaal geen tijd om allemaal bijdragen van vrijwilligers te beoordelen in ons project. En wat als ze bugs veroorzaken?!"), (0, o.kt)("p", null, "Wij hebben geluisterd naar alle wensen en dit jaar zijn we begonnen met enkele teams om een architectuur te beproeven die bovenstaande wensen mogelijk moet maken."), (0, o.kt)("h2", { id: "design-tokens-voor-css" }, "Design Tokens voor CSS"), (0, o.kt)("p", null, "Het uiterlijk van websites wordt geprogrammeerd met CSS, een taal waarin kleuren, lettertypes, witruimte en vlakverdeling van websites worden ingesteld. Met de NL Design System-architectuur wordt de CSS opgedeeld in verschillende lagen: de onderste laag gaat over componenten en kan hergebruikt worden voor andere huisstijlen en andere teams. De bovenste laag bevat de kenmerken van de huisstijl van een organisatie: deze laag wordt in software vaak een \u2019thema\u2019 genoemd. De laag in het midden is de lijm die het mogelijk maakt: de design tokens van NL Design System."), (0, o.kt)("p", null, "Een design token is een kleine eigenschap van je visueel ontwerp, zoals een kleur of een lettertype. Elke huisstijl bestaat uit kleurenpalet en 1 of meerdere lettertypes: dit noemen wij \u2018brand identity design tokens\u2019, maar we korten het vaak af als \u2018brand tokens\u2018. Deze design tokens zijn er om de herkenbaarheid van je websites te waarborgen. Meestal is het de bedoeling dat geen kleuren of lettertypes worden gebruikt die niet een offici\xeble design token zijn."), (0, o.kt)("p", null, "Meestal wordt CSS geschreven op een manier dat deze kleuren en lettertypes in elke uithoek van de code voorkomen, zodat elke component aan de huisstijl voldoet. Uit onze rondvraag bleek dat al die huisstijl-specifieke code een belangrijke belemmering is om samen te werken aan code van een andere organisatie. Daarom vervangen onze teams al deze kleuren in hun code door CSS-variabelen van NL Design System. De naam \u2018variabele\u2019 zegt het al: de kleur of lettertype wordt afhankelijk van de website waarin je de component gebruikt."), (0, o.kt)("p", null, "Front-end developers zullen zich inmiddels afvragen: hoe ziet dat er uit in de code? Hier bijvoorbeeld 2 \u2018brand tokens\u2019 voor Rijkshuisstijl, uit de bovenste laag:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, ':root {\n  --rijkshuisstijl-color-hemelblauw-basis: hsl(203deg 100% 39%);\n\n  --rijkshuisstijl-typography-sans-serif-font-family: "Rijksoverheid SansWebText";\n}\n')), (0, o.kt)("p", null, "Om de code van componenten vrij te houden van huisstijl (en zo hergebruik mogelijk te maken) moet de code natuurlijk ook geen gebruik maken van de CSS-variabele ", (0, o.kt)("inlineCode", { parentName: "p" }, "var(--rijkshuisstijl-color-hemelblauw-basis)"), ", net zo min als de kleurcode ", (0, o.kt)("inlineCode", { parentName: "p" }, "#007bc7"), " herbruikbaar is voor anderen. In plaats daarvan gebruiken we CSS variabelen van NL Design System in de onderste laag, de CSs van componenten:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, ".nl-paragraph {\n  font-family: var(--nl-document-font-family);\n}\n\n.nl-button {\n  color: var(--nl-action-primary-color);\n}\n")), (0, o.kt)("p", null, "Elke huisstijl kan op deze manier een eigen invulling geven aan de componenten, door de lijm van de middelste laag waarin de ", (0, o.kt)("em", { parentName: "p" }, "brand identity design token"), " worden gekoppeld aan ", (0, o.kt)("em", { parentName: "p" }, "component design tokens"), ":"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, ":root {\n  --nl-document-font-family: var(--rijkshuisstijl-typography-sans-serif-font-family);\n\n  --nl-action-primary-color: var(--rijkshuisstijl-color-hemelblauw-basis);\n}\n")), (0, o.kt)("p", null, "Elke organisatie kan nu al beginnen met design tokens bepalen voor de huisstijl. Design tokens maken het veel makkelijker om aan te sluiten bij NL Design System, maar ze kunnen al gelijk ingezet worden je huidige websites en het is bovendien een goede handreiking aan marktpartijen die voor jouw organisaties websites en apps ontwikkelen. NL Design System biedt templates aan om design tokens te beheren en te publiceren naar verschillende kanalen: JSON, CSS, SCSS, Less, eventueel zelfs naar Android en iOS apps."), (0, o.kt)("h2", { id: "bem-class-names-voor-css" }, "BEM class names voor CSS"), (0, o.kt)("p", null, "Teams die werken aan templates in een CMS en teams die werken aan code in een framework naar keuze (zoals React, Vue.js, Angular, Stencil of Svelte) hebben iets gemeen: ze kunnen allemaal gebruik maken van de NL Design System design tokens en CSS-variabelen. Zelfs als teams binnen je organisatie werken met verschillende frameworks, kunnen ze al beginnen om centraal de design tokens te beheren."), (0, o.kt)("p", null, "Alle teams hebben n\xf3g iets gemeen: de CSS van componenten kan op alle soorten HTML toegepast worden met de ", (0, o.kt)("a", { parentName: "p", href: "http://getbem.com/" }, "BEM class names"), " van de NL Design System-architectuur, waardoor hergebruik in uiteenlopende technieken mogelijk wordt."), (0, o.kt)("p", null, "Een simpel voorbeeld is een button in een HTML template van bijvoorbeeld een CMS of een Angular template:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-html" }, '<button class="nl-button nl-button--primary-action">OK</button>\n')), (0, o.kt)("p", null, "Het essentiele voordeel van BEM class names is dat elk onderdeel van de CSS een unieke naam heeft waar je gemakkelijk naar kan verwijzen, iets dat niet vanzelfsprekend is voor een complexe CSS selector zoals ", (0, o.kt)("inlineCode", { parentName: "p" }, "form button:hover"), ". Dat betekent dat je de CSS zelfs kan gebruiken in situaties waarin je niet de class name van NL Design System op een HTML element kan of wilt plaatsen."), (0, o.kt)("p", null, "Met SCSS kun je de BEM class name van NL Design System bijvoorbeeld toepassen op de HTML van je huidige CMS templates, waardoor je oude system al gedeeltelijk naar NL Design System kan migreren:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, '@import "./nl-design-system";\n\n.content p {\n  @extend .nl-paragraph;\n}\n.content a {\n  @extend .nl-link;\n}\n.content a:hover {\n  @extend .nl-link--hover;\n}\n')), (0, o.kt)("p", null, "Veel React projecten maken gebruik van ", (0, o.kt)("em", { parentName: "p" }, "styled-components"), ": dat is een alternatief voor CSS-bestanden. Zulke projecten zonder CSS hebben niet een mogelijkheid om samen te werken aan het visueel ontwerp met teams in de organisatie die een ander framework gebruiken zoals Vue.js."), (0, o.kt)("p", null, "De BEM class names van NL Design System maken het mogelijk dat beide teams samenwerken aan de CSS. Hier volgt een voorbeeld van BEM class names in React door gebruik te maken van CSS-modules:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-js" }, 'import styles from "./nl-design-system.css";\n\nconst Button = () => <button className={styles["nl-button"]}>OK</button>;\n')), (0, o.kt)("p", null, "Dezelfde CSS kan met CSS-modules in een Vue.js template worden gebruikt:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-html" }, "<template>\n  <button :class=\"$style['nl-button']\">OK</button>\n</template>\n")), (0, o.kt)("p", null, "De NL Design System-architectuur richt zich dus in eerste instantie op herbruikbare CSS en simpele HTML codevoorbeelden, waardoor alle organisaties die meebouwen gelijk veel raakvlakken voor samenwerking hebben, zelfs wanneer heel uiteenlopende technieken worden gebruikt."), (0, o.kt)("h2", { id: "storybook-voor-elke-organisatie" }, "Storybook voor elke organisatie"), (0, o.kt)("p", null, "Je kunt beginnen met de NL Design System-architectuur voor jouw organisatie gebruiken met onze ", (0, o.kt)("a", { parentName: "p", href: "http://github.com/nl-design-system/template" }, "GitHub template repository"), ", zodat je als basis een Storybook website hebt waarin je de design tokens, componenten en patronen van jouw organisatie kunt documenteren en doorontwikkelen."), (0, o.kt)("p", null, "Deze eigen omgeving biedt je de mogelijkheid om op eigen tempo een bibliotheek samen te stellen van eigen componenten en ge\xefmporteerde componenten die in de bredere NL Design System-community gevonden kunnen worden. Je kunt zelf kiezen welke onderdelen je overneemt van anderen en welke je anders gaat aanpakken. De doorlooptijd van eigen componenten heb je volledig zelf in de hand, terwijl je nog steeds tijd kunt besparen door gedeeltelijke hergebruik. Je kunt bijvoorbeeld de code van een component zelf schrijven, maar de documentatie over toegankelijkheid van zo\u2019n component uit NL Design System overnemen."), (0, o.kt)("p", null, "De nieuwe NL Design System-werkwijze betekent dat je ge\xefmporteerde componenten van anderen kunt nomineren voor de centrale NL Design System-componentenbibliotheek, wanneer ze in jouw organisatie ook succesvol blijken te werken."), (0, o.kt)("p", null, "Wanneer je extra wensen hebt voor een component, dan kun je die melden op de ", (0, o.kt)("a", { parentName: "p", href: "http://github.com/nl-design-system/backlog/issues" }, "NL Design System-backlog"), "."), (0, o.kt)("h2", { id: "backlog-voor-co\xf6rdinatie-van-eisen" }, "Backlog voor co\xf6rdinatie van eisen"), (0, o.kt)("p", null, "De \u2018levende\u2019 backlog van NL Design System moet ontwikkelaars en designers per component en goed overzicht geven van de uiteenlopende wensen en eisen die in community bestaan."), (0, o.kt)("p", null, "Wanneer deelnemende organisaties helpen om voor elk component en patroon de eisen volledig te krijgen, dan kunnen teams die daadwerkelijk de component bouwen sneller aan alle eisen voldoen. Bovendien helpt het om de eisen te documenteren waaraan een huidige versie van een component voldoet, zodat die functionaliteit niet per ongeluk verloren gaat in een latere versie."), (0, o.kt)("p", null, "De backlog is ook de centrale plek waar je kunt ontdekken welke organisaties eigen varianten van een component hebben, waar jouw organisatie mogelijk op door kan bouwen."), (0, o.kt)("h2", { id: "meewerken-aan-nl-design-system" }, "Meewerken aan NL Design System"), (0, o.kt)("p", null, "Wil je een nieuw project starten met NL Design System? Dan vragen we je te letten op de volgende punten:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Deel je code als open source met de ", (0, o.kt)("a", { parentName: "li", href: "https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12" }, "EUPL-1.2 licentie"), "."), (0, o.kt)("li", { parentName: "ul" }, "Vermijd huisstijl-specifieke code in je CSS, gebruik in plaats daarvan CSS-variabelen voor design tokens NL Design System die ingevuld kunnen worden met de huisstijl van anderen."), (0, o.kt)("li", { parentName: "ul" }, "Deel de styling van componenten in een .css bestand met alleen BEM class names, en zonder \u2018side effects\u2019: geen code voor ", (0, o.kt)("inlineCode", { parentName: "li" }, "body"), " , ", (0, o.kt)("inlineCode", { parentName: "li" }, "p"), " of ", (0, o.kt)("inlineCode", { parentName: "li" }, ":root"), "."), (0, o.kt)("li", { parentName: "ul" }, "Begin namen in je code met een prefix voor jouw organisatie, zoals in BEM class names, CSS-variabelen en Custom Elements. Wij gebruiken ", (0, o.kt)("inlineCode", { parentName: "li" }, "nl-"), ", jij kiest iets anders."), (0, o.kt)("li", { parentName: "ul" }, "Baseer de namen in je code waar mogelijk op bestaande termen uit HTML, CSS, SVG en ARIA; deze hebben de voorkeur boven namen uit populaire frameworks en boven namen die je zelf bedenkt."), (0, o.kt)("li", { parentName: "ul" }, "Publiceer een overzicht van je componenten in een Storybook website, met HTML voorbeeldcode van de componenten."), (0, o.kt)("li", { parentName: "ul" }, "Wanneer je aan een component werkt, deel een link naar jouw werk in de backlog van NL Design System op GitHub."), (0, o.kt)("li", { parentName: "ul" }, "In plaats alle componenten zelf te schrijven, probeer eerst in de backlog te vinden of iemand anders aan die component werkt, en begin met de code van een andere contributor."), (0, o.kt)("li", { parentName: "ul" }, "Wanneer componenten van anderen niet aan al je wensen voldoen, deel dan je bevindingen in de backlog en kijk of er samenwerking mogelijk is wanneer je een eigen variant wilt ontwikkelen.")), (0, o.kt)("p", null, "Op deze manier zijn wij een samenwerking begonnen met meerdere teams, en willen we dit jaar bewijzen dat ondanks alle verschillen er toch heel veel mogelijkheden zijn voor samenwerken."), (0, o.kt)("p", null, "Samen willen we een gebruiksvriendelijke online overheid nastreven door kennis en inzichten over toegankelijkheid en gebruiksvriendelijkheid te delen. We kunnen enorme impact hebben wanneer we inzichten uit gebruikersonderzoek en toegankelijkheidsonderzoek uit heel het land delen op de backlog van NL Design System."), (0, o.kt)("p", null, "Kennis delen is maar een gedeelte van de oplossing: de kennis moet op het juiste moment op de juiste plek aanwezig zijn. Wat ons betreft is dat: op het moment dat een component wordt doorontwikkeld moet de kennis op de backlog van het ontwikkelteam staan! Met de backlog van NL Design System kunnen we gebruikers een stem geven in nieuwe ontwikkelingen van onze online overheid, en daarmee zetten de teams die op basis van de backlog meebouwen aan NL Design System echt de gebruiker centraal."), (0, o.kt)("p", null, "Bron: ", (0, o.kt)("a", { parentName: "p", href: "https://gist.github.com/Robbert/d22046b9028b7b4d0453ba6113ec9e99#file-nl-design-system-nieuwsbrief-2021-05-20-md" }, "gist.github.com")));
   }
   g.isMDXComponent = !0;
  },
 },
]);
