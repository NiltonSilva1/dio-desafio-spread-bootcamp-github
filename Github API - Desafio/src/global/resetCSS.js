import { createGlobalStyle } from "styled-components";
import imgBackground from "../assets/background.svg";

export const ResetCSS = createGlobalStyle`

/*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  box-sizing: border-box;
  border-style: solid;
  border-width: 0;
}
/* Document */
/* ============================================ */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3*/
}
/* Sections */
/* ============================================ */
/**
 * Remove the margin in all browsers.
 */
body {
  background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  font-family: roboto,sans-serif;
}
/**
 * Render the main element consistently in IE.
 */
main {
  display: block;
}
/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}
/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  margin: 0;
}
/* Lists (enumeration) */
/* ============================================ */
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Lists (definition) */
/* ============================================ */
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
  border-top-width: 1px;
  margin: 0;
  clear: both;
  color: inherit;
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: inherit; /* 2 */
}
address {
  font-style: inherit;
}
/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}
/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: inherit; /* 2 */
}
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}
/**
 * Prevent sub and sup elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/* Embedded content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
img,
embed,
object,
iframe {
  vertical-align: bottom;
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable
 */
 button {
  cursor: pointer;
}
/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from fieldset elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    fieldset elements in all browsers.
 */
legend {
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}
/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the outline style in Safari.
 */
[type="search"] {
  outline-offset: -2px; /* 1 */
}
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/**
 * Clickable labels
 */
label[for] {
  cursor: pointer;
}
/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}
/*
 * Remove outline for editable content.
 */
[contenteditable] {
  outline: none;
}
/* Table */
/* ============================================ */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption {
  text-align: left;
}
td,
th {
  vertical-align: top;
  padding: 0;
}
th {
  text-align: left;
  font-weight: bold;
}
/* Misc */
/* ============================================ */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}
/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

`;
