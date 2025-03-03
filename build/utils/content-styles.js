"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_get_1 = __importDefault(require("./theme-get"));
/**
 *
 * Gives you the default styles for all "content" elements like:
 * ul, li, h1-h5 etc.
 *
 * ### Example
 *
 * ```typescript
 * import styled from 'styled-components'
 * import { contentCSS } from '@adminjs/design-system'
 *
 * const myComponent = styled`
 *   ${contentCSS};
 * `
 * ```
 *
 * @memberof module:@adminjs/design-system
 */
const contentCSS = styled_components_1.css `
  font-family: ${({ theme }) => theme.font};
  font-size: ${theme_get_1.default('fontSizes', 'md')};
  line-height: ${theme_get_1.default('lineHeights', 'lg')};
  font-weight: ${theme_get_1.default('fontWeights', 'light')};
  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    &:not([class*="adminjs_"]) {
      margin: 0;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
  }

  p, div {
    margin-bottom: ${theme_get_1.default('space', 'xl')};
    font-size: ${theme_get_1.default('fontSizes', 'md')};
    font-weight: ${theme_get_1.default('fontWeights', 'light')};
  }

  strong, b {
    font-weight: ${theme_get_1.default('fontWeights', 'bolder')}
  }

  li + li {
    margin-top: ${theme_get_1.default('space', 'md')};
  }

  p:not(:last-child),
  dl:not(:last-child),
  ol:not(:last-child),
  ul:not(:last-child),
  blockquote:not(:last-child),
  pre:not(:last-child),
  table:not(:last-child) {
    margin-bottom: ${theme_get_1.default('space', 'xl')};
  }

  pre {
    background-color: ${theme_get_1.default('colors', 'grey20')};
    border: 1px solid ${theme_get_1.default('colors', 'grey40')};
    padding: ${theme_get_1.default('space', 'xl')};
    margin: ${theme_get_1.default('space', 'xl')} 0 ${theme_get_1.default('space', 'xxl')};
    white-space: pre;
    font-family: 'Courier New', Courier, monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${theme_get_1.default('fontWeights', 'light')};
    line-height: ${theme_get_1.default('lineHeights', 'xl')};
    font-size: ${theme_get_1.default('fontSizes', 'h3')};
    margin-top: ${theme_get_1.default('space', 'xxl')};
    margin-bottom: ${theme_get_1.default('space', 'xl')};
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: ${theme_get_1.default('space', 'sm')};
  }

  h1 {
    font-size: ${theme_get_1.default('fontSizes', 'h1')};
    line-height: ${theme_get_1.default('lineHeights', 'xxl')};
    margin-top: ${theme_get_1.default('space', 'x4')};
    margin-bottom: ${theme_get_1.default('space', 'x3')};
  }

  h2 {
    font-size: ${theme_get_1.default('fontSizes', 'h2')};
    line-height: ${theme_get_1.default('lineHeights', 'xxl')};
    margin-top: ${theme_get_1.default('space', 'x3')};
    margin-bottom: ${theme_get_1.default('space', 'xxl')};
  }

  h3 {
    
  }

  h4 {
    font-size: ${theme_get_1.default('fontSizes', 'h4')};
    line-height: ${theme_get_1.default('lineHeights', 'xl')};
    margin-top: ${theme_get_1.default('space', 'xxl')};
    margin-bottom: ${theme_get_1.default('space', 'xl')};
  }

  h5 {
    font-size: ${theme_get_1.default('fontSizes', 'xl')};
    line-height: ${theme_get_1.default('lineHeights', 'lg')};
    margin-top: ${theme_get_1.default('space', 'xl')};
    margin-bottom: ${theme_get_1.default('space', 'lg')};
    font-weight: ${theme_get_1.default('fontWeights', 'normal')};
  }

  h6 {
    font-size: ${theme_get_1.default('fontSizes', 'lg')};
    line-height: ${theme_get_1.default('lineHeights', 'lg')};
    margin-top: ${theme_get_1.default('space', 'lg')};
    margin-bottom: ${theme_get_1.default('space', 'default')};
    font-weight: ${theme_get_1.default('fontWeights', 'normal')};
  }

  blockquote {
    background-color: ${theme_get_1.default('colors', 'grey20')};
    border-left: ${theme_get_1.default('space', 'sm')} solid ${theme_get_1.default('colors', 'primary20')};
    padding: ${theme_get_1.default('space', 'xl')};
    margin: ${theme_get_1.default('space', 'xxl')} 0;
  }

  ol {
    list-style-position: outside;
    margin-top: ${theme_get_1.default('space', 'lg')};
    margin-left: ${theme_get_1.default('space', 'xl')};
  }
  ol:not([type]) {
    list-style-type: decimal;
  }
  ol:not([type]).is-lower-alpha {
    list-style-type: lower-alpha;
  }
  ol:not([type]).is-lower-roman {
    list-style-type: lower-roman;
  }
  ol:not([type]).is-upper-alpha {
    list-style-type: upper-alpha;
  }
  ol:not([type]).is-upper-roman {
    list-style-type: upper-roman;
  }

  ul {
    list-style: disc outside;
    margin-left: ${theme_get_1.default('space', 'xl')};
    margin-top: ${theme_get_1.default('space', 'lg')};
  }
  ul ul {
    list-style-type: circle;
    margin-top: ${theme_get_1.default('space', 'sm')};
  }
  ul ul ul {
    list-style-type: square;
  }

  em {
    font-style: italic;
  }

  dd {
    margin-left: ${theme_get_1.default('space', 'xl')};
  }

  figure {
    margin-left: ${theme_get_1.default('space', 'md')};
    margin-right: ${theme_get_1.default('space', 'md')};
    text-align: center;
  }
  figure:not(:first-child) {
    margin-top: ${theme_get_1.default('space', 'md')};
  }
  figure:not(:last-child) {
    margin-bottom: ${theme_get_1.default('space', 'md')};
  }
  figure img {
    display: inline-block;
  }
  figure figcaption {
    font-style: italic;
  }

  sup,
  sub {
    font-size: 75%;
  }

  table {
    width: 100%;
    margin: ${theme_get_1.default('space', 'xl')} 0;
  }
  table td,
  table th {
    padding: ${theme_get_1.default('space', 'lg')};
    vertical-align: top;
  }
  table th {
    color: ${theme_get_1.default('colors', 'grey60')};
    border-bottom: 1px solid ${theme_get_1.default('colors', 'grey40')};
  }

  table td {
    border-bottom: 1px solid ${theme_get_1.default('colors', 'grey20')};
  }
  table th:not([align]) {
    text-align: inherit;
  }
  table thead td,
  table thead th {
    border-bottom: 1px solid ${theme_get_1.default('colors', 'grey40')};
    color: ${theme_get_1.default('colors', 'grey60')};
  }
  table tfoot td,
  table tfoot th {
    border-bottom: 1px solid ${theme_get_1.default('colors', 'grey40')};
    color: ${theme_get_1.default('colors', 'grey60')};
  }
  table tbody tr:last-child td,
  table tbody tr:last-child th {
    border-bottom-width: 0;
  }

  .tabs li + li {
    margin-top: 0;
  }
`;
exports.default = contentCSS;
