import styled from '@emotion/styled';
import { GlobalToken } from 'antd';

export const MDEditorWrapper = styled.div<{ token: GlobalToken }>`
  height: 100%;
  position: relative;
  & > div {
    height: 100%;
  }

  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  }

  .hljs {
    background: #474949;
    color: #d1d9e1;
  }
  .hljs-comment,
  .hljs-quote {
    color: #969896;
    font-style: italic;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-type,
  .hljs-addition {
    color: #cc99cc;
  }
  .hljs-number,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #f99157;
  }
  .hljs-string,
  .hljs-doctag,
  .hljs-regexp {
    color: #8abeb7;
  }
  .hljs-title,
  .hljs-name,
  .hljs-section,
  .hljs-built_in {
    color: #b5bd68;
  }
  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-id,
  .hljs-title.class_,
  .hljs-class .hljs-title {
    color: #ffcc66;
  }
  .hljs-section,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }
  .hljs-symbol,
  .hljs-bullet,
  .hljs-subst,
  .hljs-meta,
  .hljs-link {
    color: #f99157;
  }
  .hljs-deletion {
    color: #dc322f;
  }
  .hljs-formula {
    background: #eee8d5;
  }
  .hljs-attr,
  .hljs-attribute {
    color: #81a2be;
  }
  .hljs-emphasis {
    font-style: italic;
  }

  .CodeMirror {
    font-family: monospace;
    height: 300px;
    color: #000;
    direction: ltr;
  }
  .CodeMirror-lines {
    padding: 4px 0;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4px;
  }
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    background-color: #fff;
  }
  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }
  .CodeMirror-guttermarker {
    color: #000;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }
  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor .CodeMirror-line::selection,
  .cm-fat-cursor .CodeMirror-line > span::selection,
  .cm-fat-cursor .CodeMirror-line > span > span::selection {
    background: transparent;
  }
  .cm-fat-cursor .CodeMirror-line::-moz-selection,
  .cm-fat-cursor .CodeMirror-line > span::-moz-selection,
  .cm-fat-cursor .CodeMirror-line > span > span::-moz-selection {
    background: transparent;
  }
  .cm-fat-cursor {
    caret-color: transparent;
  }
  @-moz-keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  @keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }
  .CodeMirror-rulers {
    position: absolute;
    inset: -50px 0 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  .cm-s-default .cm-quote {
    color: #090;
  }
  .cm-negative {
    color: #d44;
  }
  .cm-positive {
    color: #292;
  }
  .cm-header,
  .cm-strong {
    font-weight: 700;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }
  .cm-s-default .cm-keyword {
    color: #708;
  }
  .cm-s-default .cm-atom {
    color: #219;
  }
  .cm-s-default .cm-number {
    color: #164;
  }
  .cm-s-default .cm-def {
    color: #00f;
  }

  .cm-s-default .cm-variable-3,
  .cm-s-default .cm-type {
    color: #085;
  }
  .cm-s-default .cm-comment {
    color: #a50;
  }
  .cm-s-default .cm-string {
    color: #a11;
  }
  .cm-s-default .cm-string-2 {
    color: #f50;
  }
  .cm-s-default .cm-meta,
  .cm-s-default .cm-qualifier {
    color: #555;
  }
  .cm-s-default .cm-builtin {
    color: #30a;
  }
  .cm-s-default .cm-bracket {
    color: #997;
  }
  .cm-s-default .cm-tag {
    color: #170;
  }
  .cm-s-default .cm-attribute {
    color: #00c;
  }
  .cm-s-default .cm-hr {
    color: #999;
  }

  .cm-s-default .cm-error,
  .cm-invalidchar {
    color: red;
  }
  .CodeMirror-composing {
    border-bottom: 2px solid;
  }
  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }
  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }
  .CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none;
    position: relative;
    z-index: 0;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
    outline: none;
  }
  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0;
    bottom: 0;
  }
  .CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -50px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
  }
  .CodeMirror-gutter-wrapper ::-moz-selection {
    background-color: transparent;
  }
  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }
  .CodeMirror-linebackground {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }
  .CodeMirror-rtl pre {
    direction: rtl;
  }
  .CodeMirror-code {
    outline: none;
  }
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre {
    position: static;
  }
  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors,
  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background: #d7d4f0;
  }
  .CodeMirror-line::-moz-selection,
  .CodeMirror-line > span::-moz-selection,
  .CodeMirror-line > span > span::-moz-selection {
    background: #d7d4f0;
  }
  .cm-searching {
    background-color: #ffa;
    background-color: #ff06;
  }
  .cm-force-border {
    padding-right: 0.1px;
  }
  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }
  .cm-tab-wrap-hack:after {
    content: '';
  }

  .bytemd {
    height: 100%;
    box-sizing: border-box;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica,
      Arial,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji;
  }
  .bytemd * {
    box-sizing: border-box;
  }
  .bytemd-hidden {
    display: none !important;
  }
  .bytemd .CodeMirror-scroll,
  .bytemd .CodeMirror-sizer,
  .bytemd .CodeMirror-gutter,
  .bytemd .CodeMirror-gutters,
  .bytemd .CodeMirror-linenumber {
    box-sizing: content-box;
  }
  .bytemd .CodeMirror,
  .bytemd code,
  .bytemd kbd {
    font-family:
      SFMono-Regular,
      Consolas,
      Liberation Mono,
      Menlo,
      monospace;
  }

  .bytemd-toolbar-right {
    & > div:nth-child(5),
    & > div:nth-child(6) {
      display: none;
    }
    //display: none;
  }
  .bytemd-toolbar {
    padding: 4px 12px;
    border-bottom: 1px solid #e1e4e8;
    background-color: #fafbfc;
    user-select: none;
    overflow: hidden;
  }
  .bytemd-toolbar-left {
    float: left;
  }
  .bytemd-toolbar-right {
    float: right;
  }
  .bytemd-toolbar-tab {
    display: inline-block;
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 24px;
    font-size: 14px;
  }
  .bytemd-toolbar-tab-active {
    color: #0366d6;
  }
  .bytemd-toolbar-icon {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .bytemd-toolbar-icon svg,
  .bytemd-toolbar-icon img {
    display: block;
    padding: 4px;
    width: 24px;
    height: 24px;
  }
  .bytemd-toolbar-icon:hover {
    background-color: #e1e4e8;
  }
  .bytemd-toolbar-icon-active {
    color: #0366d6;
  }
  .bytemd-toolbar .tippy-content {
    padding-left: 0;
    padding-right: 0;
  }
  .bytemd-dropdown {
    // max-height: 300px;
    // overflow: auto;

    padding: 0 3px;
    font-size: 14px;
  }
  .bytemd-dropdown-title {
    margin: 0 12px;
    font-weight: 500;
    border-bottom: 1px solid #e1e4e8;
    line-height: 32px;
    color: #444d56;
  }
  .bytemd-dropdown-item {
    padding: 4px 12px;
    border-radius: 3px;
    height: 32px;
    cursor: pointer;
  }
  .bytemd-dropdown-item:hover {
    background-color: ${({ token }) => token.controlItemBgHover};
  }
  .bytemd-dropdown-item-icon {
    display: inline-block;
  }
  .bytemd-dropdown-item-icon svg {
    display: block;
    padding: 4px;
    width: 24px;
    height: 24px;
  }
  .bytemd-dropdown-item-title {
    display: inline-block;
    line-height: 24px;
    vertical-align: top;
  }
  .bytemd-body {
    height: calc(100% - 58px);
    overflow: auto;
  }
  .bytemd-editor {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    overflow: hidden;
  }
  .bytemd-editor .CodeMirror {
    height: 100%;
    font-size: 14px;
    line-height: 1.5;
  }
  .bytemd-editor .CodeMirror pre.CodeMirror-placeholder {
    color: #959da5;
  }
  .bytemd-editor .CodeMirror .CodeMirror-lines {
    max-width: 800px;
    margin: 0 auto;
    padding: 16px 0;
  }
  .bytemd-editor .CodeMirror pre.CodeMirror-line,
  .bytemd-editor .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4%;
  }
  .bytemd-preview {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    font-size: 14px;
    overflow: auto;
    color: ${({ token }) => token.colorText};
    padding: 10px 20px;
    svg {
      background-color: #ffffff;
    }
  }
  .bytemd-preview .markdown-body {
    max-width: 800px;
    margin: 0 auto;
    // padding: 16px 4%;
  }
  .bytemd-sidebar {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    overflow: auto;
    font-size: 16px;
    border-left: 1px solid ${({ token }) => token.colorBorder};
    width: 280px;
    position: relative;
    padding: 0 16px;
  }
  .bytemd-sidebar-close {
    position: absolute;
    padding: 16px;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .bytemd-sidebar-close:hover {
    color: #0366d6;
  }
  .bytemd-sidebar h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 32px 0 16px;
  }
  .bytemd-sidebar ul {
    padding-left: 0;
    color: #959da5;
  }
  .bytemd-help {
    font-size: 13px;
  }
  .bytemd-help ul {
    line-height: 20px;
  }
  .bytemd-help ul svg {
    width: 16px;
    height: 16px;
    display: block;
  }
  .bytemd-help ul div {
    display: inline-block;
    vertical-align: top;
  }
  .bytemd-help li {
    list-style: none;
    margin-bottom: 12px;
  }
  .bytemd-help-icon {
    padding: 2px 0;
  }
  .bytemd-help-title {
    padding-left: 8px;
  }
  .bytemd-help-content {
    float: right;
    font-size: 12px;
  }
  .bytemd-toc li {
    list-style: none;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 2;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .bytemd-toc-active {
    color: #0366d6;
    background-color: #f6f8fa;
  }
  .bytemd-toc-first {
    font-weight: 500;
  }
  .bytemd-status {
    font-size: 12px;
    line-height: 24px;
    border-top: 1px solid ${({ token }) => token.colorBorder};
    user-select: none;
  }
  .bytemd-status-left {
    float: left;
  }
  .bytemd-status-left span {
    padding-left: 16px;
  }
  .bytemd-status-left strong {
    font-weight: 600;
  }
  .bytemd-status-right {
    float: right;
  }
  .bytemd-status-right label,
  .bytemd-status-right span {
    margin-right: 16px;
    cursor: pointer;
  }
  .bytemd-status-right span:hover {
    color: #0366d6;
  }
  .bytemd-status-right input {
    vertical-align: middle;
    margin-right: 3px;
  }
  .bytemd-status-error {
    color: #d73a49;
  }
  .bytemd-fullscreen.bytemd {
    position: fixed;
    inset: 0;
    border: none;
    height: 100vh !important;
  }
  .bytemd-split .bytemd-preview {
    border-left: 1px solid ${({ token }) => token.colorBorder};
  }

  .bytemd {
    // height: 100%;
    border: 1px solid ${({ token }) => token.colorBorder};
    background-color: ${({ token }) => token.colorBgElevated};

    .bytemd-toolbar {
      background-color: ${({ token }) => token.colorBgContainer};
      border-bottom: 1px solid ${({ token }) => token.colorBorder};

      .bytemd-toolbar-icon {
        color: ${({ token }) => token.colorText};
      }

      .bytemd-toolbar-icon:hover {
        background-color: ${({ token }) => token.colorFillTertiary};
      }

      .bytemd-toolbar-right {
        & > div:last-child {
          // display: none;
        }
      }
    }

    .bytemd-status {
      color: ${({ token }) => token.colorText};
      border-top: 1px solid ${({ token }) => token.colorBorder};

      .bytemd-status-left {
        display: none;
      }
    }

    .bytemd-body {
      .cm-s-default {
        background-color: ${({ token }) => token.colorBgContainer};
        color: ${({ token }) => token.colorText};

        .CodeMirror-cursors {
          .CodeMirror-cursor {
            border-color: ${({ token }) => token.colorText};
          }
        }
      }
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: auto;
    }
  }

  .bytemd-split {
    .bytemd-preview {
      border-left: 1px solid ${({ token }) => token.colorBorder};
    }

    del {
      text-decoration: line-through;
    }
  }

  .bytemd-fullscreen.bytemd {
    z-index: 9999;
    //background-color: orange;
  }

  .move-fullbar {
    .bytemd-fullscreen {
      padding-top: 50px;
    }
  }

  .tippy-box {
    background-color: var(--ant-color-bg-elevated);
    box-shadow: var(--ant-box-shadow-secondary);
    color: var(--ant-color-text);
  }

  .markdown-body {
    ul,
    ol {
      padding-left: 2em;
    }
  }
`;
