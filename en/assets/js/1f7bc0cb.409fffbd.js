"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51154],
 {
  16305: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => b, contentTitle: () => c, default: () => u, frontMatter: () => t, metadata: () => s, toc: () => k });
   var o = l(85893),
    r = l(11151),
    a = l(13455),
    d = l(31092),
    i = l(53579);
   const t = { title: "Toegankelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toegankelijk", sidebar_position: 1, pagination_label: "Toegankelijk", description: "Een formulier moet toegankelijk zijn", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    c = "Toegankelijk",
    s = { id: "richtlijnen/formulieren/toegankelijk", title: "Toegankelijk | Formulieren", description: "Een formulier moet toegankelijk zijn", source: "@site/docs/richtlijnen/formulieren/01-toegankelijk.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/toegankelijk", permalink: "/en/richtlijnen/formulieren/toegankelijk", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/01-toegankelijk.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Toegankelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toegankelijk", sidebar_position: 1, pagination_label: "Toegankelijk", description: "Een formulier moet toegankelijk zijn", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Uit te vragen informatie in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/vragen" }, next: { title: "Duidelijk", permalink: "/en/richtlijnen/formulieren/duidelijk" } },
    b = {},
    k = [
     { value: "Maak alles bereikbaar met het toetsenbord", id: "maak-alles-bereikbaar-met-het-toetsenbord", level: 2 },
     { value: "Geef elk veld een naam", id: "geef-elk-veld-een-naam", level: 2 },
     { value: "Vertrouw niet alleen op kleur", id: "vertrouw-niet-alleen-op-kleur", level: 2 },
     { value: "Zorg voor focusstijlen", id: "zorg-voor-focusstijlen", level: 2 },
    ];
   function g(e) {
    const n = { a: "a", code: "code", em: "em", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "toegankelijk", children: "Toegankelijk" }), "\n", (0, o.jsx)(i.nv, { lead: !0, children: (0, o.jsx)(n.p, { children: "Een formulier moet toegankelijk zijn. Dit betekent dat er in ontwerp en techniek rekening is gehouden met alle\nverschillende manieren waarop mensen websites gebruiken, inclusief mensen met een beperking." }) }), "\n", (0, o.jsx)(n.h2, { id: "maak-alles-bereikbaar-met-het-toetsenbord", children: "Maak alles bereikbaar met het toetsenbord" }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige gebruikers navigeren door een formulier met hun ", (0, o.jsx)(n.code, { children: "Tab" }), "-toets. Zorg dat alle onderdelen van het formulier bereikbaar zijn en gebruikt kunnen worden met alleen een toetsenbord (inclusief bijvoorbeeld kalenders). Dit ondersteunt toetsenbordgebruikers, maar ook gebruikers met andere randapparatuur die zich als toetsenbordpresenteert, zoals een ", (0, o.jsx)(n.em, { children: "switch control" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "geef-elk-veld-een-naam", children: "Geef elk veld een naam" }), "\n", (0, o.jsx)(n.p, { children: "Elk formulierveld moet een \u201ctoegankelijke naam\u201d hebben, dit is een naam die in de code gekoppeld is aan het veld. Dit wordt bijvoorbeeld gebruikt in hulptechnologie\xebn als schermlezers en stembediening." }), "\n", (0, o.jsxs)(n.p, { children: ["De snelste manier om een veld een naam te geven, is door een ", (0, o.jsx)(n.code, { children: "<label>" }), "-element in code te koppelen aan het veld."] }), "\n", (0, o.jsx)(n.p, { children: "Tips:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["houd de toegankelijke naam en de zichtbare naam hetzelfde (zie ook ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#label-in-naam", children: "WCAG 2.5.3 Label in naam" }), ")"] }), "\n", (0, o.jsx)(n.li, { children: "een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt" }), "\n"] }), "\n", (0, o.jsxs)(n.p, { children: ["Lees hierover meer op de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over labels" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "vertrouw-niet-alleen-op-kleur", children: "Vertrouw niet alleen op kleur" }), "\n", (0, o.jsx)(n.p, { children: "Soms gebruikt een formulier kleur om een status aan te geven, bijvoorbeeld dat een veld een fout bevat. Zorg er dan voor dat kleur niet de enige manier is waarop het verschil tussen \u201cgoede\u201d en \u201cfoute\u201d invoer wordt aangegeven. Dan is de status namelijk mogelijk niet te onderscheiden door mensen met kleurenblindheid." }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsxs)(n.em, { children: ["Dit is verplicht om te voldoen aan WCAG 2.1, ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#gebruik-van-kleur", children: "1.4.1 Gebruik van kleur" }), "."] }) }), "\n", (0, o.jsx)(d.X, { appearance: "do", title: "Beschrijf in tekst", description: (0, o.jsx)(i.nv, { children: "Vul de kleur aan met een beschrijving in tekst dat een melding een fout betreft, bijvoorbeeld \u201cFout: \u201d." }), children: (0, o.jsx)(a.X, { language: "html", code: (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(i.Wi, { children: [(0, o.jsx)(i.lX, { htmlFor: "name", children: "Voornaam" }), (0, o.jsx)(i.ue, { invalid: "true", children: "Fout: Dit is geen goede naam" }), (0, o.jsx)(i.fE, { type: "text", name: "first_name", id: "name" })] }) }), children: (0, o.jsxs)(i.Wi, { children: [(0, o.jsx)(i.lX, { htmlFor: "name", children: "Voornaam" }), (0, o.jsx)(i.ue, { invalid: "true", style: { color: "darkred" }, children: (0, o.jsx)(n.p, { children: "Fout: Dit is geen goede naam" }) }), (0, o.jsx)(i.fE, { type: "text", name: "first_name", id: "name" })] }) }) }), "\n", (0, o.jsx)(n.h2, { id: "zorg-voor-focusstijlen", children: "Zorg voor focusstijlen" }), "\n", (0, o.jsx)(n.p, { children: "Er is op je hele website altijd precies \xe9\xe9n element dat \u201cfocus\u201d heeft. Als gebruikers een formulier invullen, krijgt het veld waar ze in typen focus. Zorg dat het als zodanig herkenbaar is door een duidelijke focusstijl te gebruiken." }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsxs)(n.em, { children: ["Dit is verplicht om te voldoen aan WCAG 2.1, criterium ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#focus-zichtbaar", children: "2.4.7 Focus Zichtbaar" }), "."] }) }), "\n", (0, o.jsx)(d.X, { appearance: "dont", title: "Focus uitgezet", description: (0, o.jsxs)(i.nv, { children: ["In CSS kan focus worden uitgezet met ", (0, o.jsx)(n.code, { children: "outline: none" }), " of ", (0, o.jsx)(n.code, { children: "outline: 0" }), ". Doe dit net, want het zorgt dat gebruikers niet kunnen zien of het veld focus heeft."] }), children: (0, o.jsx)(a.X, { language: "css", code: ":focus { outline: none; }" }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  13455: (e, n, l) => {
   l.d(n, { X: () => p });
   l(67294);
   const o = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var r = l(86010),
    a = l(28182),
    d = l.n(a),
    i = l(72237),
    t = l.n(i),
    c = l(73945),
    s = l.n(c),
    b = l(97762),
    k = l(1775);
   const g = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var u = l(65663),
    h = l(25934),
    m = l(85893);
   const v = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      o = n.ownerDocument.getElementById(l);
     (o.hidden = !o.hidden), n.setAttribute("aria-expanded", !o.hidden), (n.innerText = o.hidden ? "Bekijk code" : "Verberg code");
    },
    p = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: a = !0, children: i, language: c } = e;
     "function" == typeof i && (i = i());
     const p = s().format(b.uS(n || i), { parser: "html", plugins: [d(), t()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      j = (0, h.Z)();
     return (0, m.jsxs)("div", {
      className: (0, r.Z)(o["nlds-canvas"], "voorbeeld-theme", "utrecht-html"),
      children: [
       (0, m.jsx)("div", { className: (0, r.Z)(o["nlds-canvas__example"]), children: i }),
       (0, m.jsx)("div", { className: (0, r.Z)(o["nlds-canvas__toolbar"]), children: (0, m.jsx)(u.zx, { className: (0, r.Z)(o["nlds-canvas__button"], o["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: v, "aria-expanded": !a, "aria-controls": j, children: a ? "Bekijk code" : "Verberg code" }) }),
       (0, m.jsxs)("div", {
        className: (0, r.Z)(o["nlds-canvas__code-block"], !l && o["nlds-canvas__code-block--user-select-none"]),
        id: j,
        hidden: a,
        children: [
         (0, m.jsx)(k.Z, { language: c, style: g, children: p }),
         l &&
          (0, m.jsx)("div", {
           className: (0, r.Z)(o["nlds-canvas__toolbar"]),
           children: (0, m.jsx)(u.zx, {
            className: (0, r.Z)(o["nlds-canvas__button"], o["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(p).catch((e) => console.error("Copy code failed", e));
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
   l.d(n, { X: () => c });
   l(67294);
   var o = l(12569),
    r = l(46451);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var d = l(86010),
    i = l(65663),
    t = l(85893);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: s } = e;
    const b = "Doen",
     k = "Niet doen";
    return (0, t.jsxs)("div", { className: (0, d.Z)(a["nlds-guideline"], a[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, t.jsxs)("div", { className: (0, d.Z)(a["nlds-guideline__description"]), children: ["dont" === l ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(i.nv, { className: (0, d.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, t.jsx)(o.Z, { className: a["nlds-guideline__icon"] }), (0, t.jsx)("span", { className: a["nlds-guideline__title"], children: k })] }), (0, t.jsx)(i.nv, { children: n })] }) : (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(i.nv, { className: (0, d.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, t.jsx)(r.Z, { className: a["nlds-guideline__icon"] }), (0, t.jsx)("span", { className: a["nlds-guideline__title"], children: b })] }), (0, t.jsx)(i.nv, { children: n })] }), c] }), (0, t.jsx)("div", { className: (0, d.Z)(a["nlds-guideline__example"]), children: s })] });
   };
  },
 },
]);
