"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [18497],
 {
  15958: (n) => {
   function e(n) {
    (n.languages.bnf = { string: { pattern: /"[^\r\n"]*"|'[^\r\n']*'/ }, definition: { pattern: /<[^<>\r\n\t]+>(?=\s*::=)/, alias: ["rule", "keyword"], inside: { punctuation: /^<|>$/ } }, rule: { pattern: /<[^<>\r\n\t]+>/, inside: { punctuation: /^<|>$/ } }, operator: /::=|[|()[\]{}*+?]|\.{3}/ }), (n.languages.rbnf = n.languages.bnf);
   }
   (n.exports = e), (e.displayName = "bnf"), (e.aliases = ["rbnf"]);
  },
 },
]);
