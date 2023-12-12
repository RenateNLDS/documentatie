"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [87049],
 {
  22015: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => y, contentTitle: () => f, default: () => S, frontMatter: () => x, metadata: () => _, toc: () => w });
   var o = l(85893),
    r = l(11151);
   function i(e) {
    const n = { h2: "h2", p: "p", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "plaats-de-link-boven-het-gerelateerde-formulierveld", children: "Plaats de link boven het gerelateerde formulierveld" }), "\n", (0, o.jsx)(n.p, { children: "Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is." }), "\n", (0, o.jsx)(n.p, { children: "Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld." }), "\n", (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: "Let op" }), ": de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor screenreadergebruikers."] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   var s = l(13455),
    t = l(31092);
   function d(e) {
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.X, { appearance: "do", title: "De link boven het gerelateerde invoerveld plaatsen.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsxs)("p", { children: [(0, o.jsx)("a", { href: "#", children: "Voorwaarden vrijwilligerswerk" }), "."] }), (0, o.jsxs)("p", { children: [(0, o.jsx)("input", { type: "checkbox", name: "vrijwilliger", id: "vrijwilliger" }), (0, o.jsx)("label", { for: "vrijwilliger", children: "Ik wil vrijwilliger worden" })] })] }) }), "\n", (0, o.jsx)(t.X, { appearance: "dont", title: "De link onder het gerelateerde invoerveld plaatsen.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsxs)("p", { children: [(0, o.jsx)("input", { type: "checkbox", name: "vrijwilliger", id: "vrijwilliger" }), (0, o.jsx)("label", { for: "vrijwilliger", children: "Ik wil vrijwilliger worden" })] }), (0, o.jsxs)("p", { children: [(0, o.jsx)("a", { href: "#", children: "Voorwaarden vrijwilligerswerk" }), "."] })] }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d();
   }
   function h(e) {
    const n = { a: "a", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "zet-geen-link-in-een-label", children: "Zet geen link in een label" }), "\n", (0, o.jsx)(n.p, { children: "Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid." }), "\n", (0, o.jsx)(n.p, { children: "Dit is om twee redenen geen goede constructie:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Een label kan ", (0, o.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns", children: "geen links of buttons elementen" }), " bevatten. Lees hierover meer in de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over Labels" }), "."] }), "\n", (0, o.jsx)(n.li, { children: "Screenreaders kunnen struikelen over de combinatie \u201clabel en link\u201d en lezen daardoor het label niet goed voor." }), "\n"] }), "\n", (0, o.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), "\n", (0, o.jsxs)("div", { class: "nlds-dont", children: [(0, o.jsx)("input", { id: "p", type: "checkbox", name: "privacybeleid" }), (0, o.jsx)("label", { for: "p", children: (0, o.jsxs)(n.p, { children: ["Ik ga akkoord met het ", (0, o.jsx)("a", { href: "#", children: "privacybeleid" })] }) })] }), "\n", (0, o.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png", alt: "Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link." }) }), "\n", (0, o.jsx)(n.p, { children: "Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties." })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.X, { appearance: "do", title: "Heel basaal, de link vlak boven het formulierveld plaatsen.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsxs)("p", { children: [(0, o.jsx)("a", { href: "#", children: "Privacybeleid gemeente Voorbeeld" }), "."] }), (0, o.jsx)("input", { id: "pb", type: "checkbox", name: "privacybeleid" }), (0, o.jsx)("label", { for: "pb", children: "Ik ga akkoord met het privacybeleid" })] }) }), "\n", (0, o.jsx)(t.X, { appearance: "do", title: "Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.", children: (0, o.jsx)(s.X, { language: "html", children: (0, o.jsxs)("fieldset", { children: [(0, o.jsx)("legend", { children: "Privacystatement gemeente Voorbeeld" }), (0, o.jsxs)("p", { id: "desc", children: ["Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ", (0, o.jsx)("a", { href: "#", target: "_blank", children: (0, o.jsx)(n.p, { children: "privacybeleid (opent in een nieuw venster)" }) }), "."] }), (0, o.jsx)("input", { type: "checkbox", "aria-describedby": "desc", id: "pvs" }), (0, o.jsx)("label", { for: "pvs", children: "Ik ga akkoord met het privacybeleid" })] }) }) }), "\n", (0, o.jsx)(t.X, { appearance: "dont", title: "Link in het label plaatsen.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsx)("input", { id: "privacybeleid", type: "checkbox", name: "privacybeleid" }), (0, o.jsxs)("label", { for: "privacybeleid", children: [" ", (0, o.jsxs)(n.p, { children: ["Ik ga akkoord met het ", (0, o.jsx)("a", { href: "#", children: "privacybeleid" }), " "] })] })] }) }), "\n", (0, o.jsx)(t.X, { appearance: "dont", title: "Link samen met het invoerveld in een impliciet label plaatsen.", children: (0, o.jsx)(s.X, { language: "html", children: (0, o.jsxs)("label", { for: "tac", children: [(0, o.jsx)("input", { id: "tac", type: "checkbox", name: "terms-and-conditions" }), (0, o.jsxs)(n.p, { children: ["Ik ga akkoord met het ", (0, o.jsx)("a", { href: "#", children: "privacybeleid" })] })] }) }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function g(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "geef-aan-als-een-link-in-een-nieuwe-tab-opent", children: "Geef aan als een link in een nieuwe tab opent" }), "\n", (0, o.jsx)(n.p, { children: "Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster." }), "\n", (0, o.jsxs)(n.p, { children: ["In de HTML kan dit met het attribuut ", (0, o.jsx)(n.code, { children: 'target="_blank"' }), " in de link."] }), "\n", (0, o.jsx)(n.p, { children: "Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor screenreadergebruikers is dit extra belangrijk." }), "\n", (0, o.jsx)(n.p, { children: "Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent." }), "\n", (0, o.jsx)(n.p, { children: "Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst." }), "\n", (0, o.jsx)(n.p, { children: "Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist." }), "\n", (0, o.jsxs)(n.p, { children: ["Hiermee voldoe je aan de volgende WCAG-richtlijn ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#voorspelbaar", children: "WCAG richtlijn 3.2 Voorspelbaar" }), ": Maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), "\n", (0, o.jsx)(n.h3, { id: "technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster", children: "Technieken voor een link openen in een nieuwe tab of venster" }), "\n", (0, o.jsx)(n.p, { children: "Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes." })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
   function v(e) {
    const n = { p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.X, { appearance: "do", title: "Alle informatie als zichtbare tekst in de link plaatsen.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsxs)("a", { href: "#", target: "_blank", children: [" ", (0, o.jsxs)(n.p, { children: ["Lees het privacybeleid (opent in een nieuwe tab)", " "] })] }), (0, o.jsx)(n.p, { children: "." })] }) }), "\n", (0, o.jsx)(t.X, { appearance: "do", title: "Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsx)("a", { href: "#", target: "_blank", class: "nlds-icon-ext", children: (0, o.jsxs)(n.p, { children: ["Lees het privacybeleid\n", (0, o.jsx)("span", { class: "sr-only", children: ", opent in een nieuwe tab" }), " "] }) }), (0, o.jsx)(n.p, { children: "." })] }) }), "\n", (0, o.jsx)(t.X, { appearance: "do", title: "Zichtbaar icoontje plus een aria-label voor screenreaders.", children: (0, o.jsx)(s.X, { language: "html", children: (0, o.jsx)("a", { href: "#", target: "_blank", class: "nlds-icon-ext", "aria-label": "Lees het privacybeleid (opent in een nieuwe tab)", children: (0, o.jsx)(n.p, { children: "Lees het privacybeleid" }) }) }) }), "\n", (0, o.jsx)(t.X, { appearance: "dont", title: "Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsx)("a", { href: "#", target: "_blank", "aria-label": "Lees het privacybeleid (opent in een nieuwe tab)", children: (0, o.jsx)(n.p, { children: "Lees het privacybeleid" }) }), (0, o.jsx)(n.p, { children: "." })] }) }), "\n", (0, o.jsx)(t.X, { appearance: "dont", title: "Informatie over het openen in een nieuwe tab voor iedereen weglaten.", children: (0, o.jsxs)(s.X, { language: "html", children: [(0, o.jsx)("a", { href: "#", target: "_blank", children: (0, o.jsx)(n.p, { children: "Lees het privacybeleid" }) }), (0, o.jsx)(n.p, { children: "." })] }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v(e);
   }
   var j = l(59467);
   const x = { title: "Links in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Links", pagination_label: "Links in een formulier", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", keywords: ["links", "formulier", "design", "code"] },
    f = "Links in een formulier",
    _ = { id: "richtlijnen/formulieren/alle-richtlijnen/links", title: "Links in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/03-links.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/links", permalink: "/richtlijnen/formulieren/alle-richtlijnen/links", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/03-links.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Links in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Links", pagination_label: "Links in een formulier", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", keywords: ["links", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Descriptions in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/descriptions" }, next: { title: "Buttons in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/buttons" } },
    y = {},
    w = [];
   function z(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "links-in-een-formulier", children: "Links in een formulier" }), "\n", (0, o.jsx)(n.p, { children: "Soms wil je binnen een formulier verwijzen naar een andere pagina, bijvoorbeeld de algemene voorwaarden of het privacybeleid. Zo\u2019n link kun je boven het formulier zetten, maar ook bij een specifieke vraag plaatsen.\nVoor het plaatsen van een link binnen een formulier zijn voor de toegankelijkheid de volgende punten belangrijk:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Plaats de link boven het gerelateerde formulierveld." }), "\n", (0, o.jsx)(n.li, { children: "Zet geen link in een label." }), "\n", (0, o.jsx)(n.li, { children: "Geef aan als een link in een nieuwe tab opent." }), "\n"] }), "\n", (0, o.jsx)(a, {}), "\n", (0, o.jsx)(c, {}), "\n", (0, o.jsx)(b, {}), "\n", (0, o.jsx)(k, {}), "\n", (0, o.jsx)(u, {}), "\n", (0, o.jsx)(m, {}), "\n", (0, o.jsx)(j.ZP, {})] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(z, { ...e }) }) : z(e);
   }
  },
  59467: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var o = l(85893),
    r = l(11151);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, o.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues/new", children: "Open een issue op GitHub" }), " met je suggesties."] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  13455: (e, n, l) => {
   l.d(n, { X: () => m });
   l(67294);
   const o = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var r = l(86010),
    i = l(28182),
    a = l.n(i),
    s = l(72237),
    t = l.n(s),
    d = l(73945),
    c = l.n(d),
    h = l(97762),
    b = l(1775);
   const p = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var k = l(65663),
    g = l(25934),
    u = l(85893);
   const v = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      o = n.ownerDocument.getElementById(l);
     (o.hidden = !o.hidden), n.setAttribute("aria-expanded", !o.hidden), (n.innerText = o.hidden ? "Bekijk code" : "Verberg code");
    },
    m = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: i = !0, children: s, language: d } = e;
     "function" == typeof s && (s = s());
     const m = c().format(h.uS(n || s), { parser: "html", plugins: [a(), t()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      j = (0, g.Z)();
     return (0, u.jsxs)("div", {
      className: (0, r.Z)(o["nlds-canvas"], "voorbeeld-theme", "utrecht-html"),
      children: [
       (0, u.jsx)("div", { className: (0, r.Z)(o["nlds-canvas__example"]), children: s }),
       (0, u.jsx)("div", { className: (0, r.Z)(o["nlds-canvas__toolbar"]), children: (0, u.jsx)(k.zx, { className: (0, r.Z)(o["nlds-canvas__button"], o["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: v, "aria-expanded": !i, "aria-controls": j, children: i ? "Bekijk code" : "Verberg code" }) }),
       (0, u.jsxs)("div", {
        className: (0, r.Z)(o["nlds-canvas__code-block"], !l && o["nlds-canvas__code-block--user-select-none"]),
        id: j,
        hidden: i,
        children: [
         (0, u.jsx)(b.Z, { language: d, style: p, children: m }),
         l &&
          (0, u.jsx)("div", {
           className: (0, r.Z)(o["nlds-canvas__toolbar"]),
           children: (0, u.jsx)(k.zx, {
            className: (0, r.Z)(o["nlds-canvas__button"], o["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(m).catch((e) => console.error("Copy code failed", e));
            },
            children: "Kopieer",
           }),
          }),
        ],
       }),
      ],
     });
    };
  },
  31092: (e, n, l) => {
   l.d(n, { X: () => d });
   l(67294);
   var o = l(12569),
    r = l(46451);
   const i = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = l(86010),
    s = l(65663),
    t = l(85893);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c } = e;
    const h = "Doen",
     b = "Niet doen";
    return (0, t.jsxs)("div", { className: (0, a.Z)(i["nlds-guideline"], i[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, t.jsxs)("div", { className: (0, a.Z)(i["nlds-guideline__description"]), children: ["dont" === l ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(s.nv, { className: (0, a.Z)(i["nlds-guideline__badge"], i[`nlds-guideline__badge--${l}`]), children: [(0, t.jsx)(o.Z, { className: i["nlds-guideline__icon"] }), (0, t.jsx)("span", { className: i["nlds-guideline__title"], children: b })] }), (0, t.jsx)(s.nv, { children: n })] }) : (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(s.nv, { className: (0, a.Z)(i["nlds-guideline__badge"], i[`nlds-guideline__badge--${l}`]), children: [(0, t.jsx)(r.Z, { className: i["nlds-guideline__icon"] }), (0, t.jsx)("span", { className: i["nlds-guideline__title"], children: h })] }), (0, t.jsx)(s.nv, { children: n })] }), d] }), (0, t.jsx)("div", { className: (0, a.Z)(i["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
