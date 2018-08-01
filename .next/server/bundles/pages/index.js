module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/carbon-components/css/carbon-components.min.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}button,input[type='button'],input[type='submit'],input[type='reset'],input[type='file']{border-radius:0}input[type='text']::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Light.woff\") format(\"woff\")}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Light-Pi.woff2\") format(\"woff2\");unicode-range:\"U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Light-Latin3.woff2\") format(\"woff2\");unicode-range:\"U+0102-0103, U+1EA0-1EF9, U+20AB\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Light-Latin2.woff2\") format(\"woff2\");unicode-range:\"U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Light-Latin1.woff2\") format(\"woff2\");unicode-range:\"U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Regular.woff\") format(\"woff\")}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Regular-Pi.woff2\") format(\"woff2\");unicode-range:\"U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Regular-Latin3.woff2\") format(\"woff2\");unicode-range:\"U+0102-0103, U+1EA0-1EF9, U+20AB\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Regular-Latin2.woff2\") format(\"woff2\");unicode-range:\"U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-Regular-Latin1.woff2\") format(\"woff2\");unicode-range:\"U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-SemiBold.woff\") format(\"woff\")}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-SemiBold-Pi.woff2\") format(\"woff2\");unicode-range:\"U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-SemiBold-Latin3.woff2\") format(\"woff2\");unicode-range:\"U+0102-0103, U+1EA0-1EF9, U+20AB\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-SemiBold-Latin2.woff2\") format(\"woff2\");unicode-range:\"U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-mono';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexMono-SemiBold-Latin1.woff2\") format(\"woff2\");unicode-range:\"U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Light.woff\") format(\"woff\")}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Light-Pi.woff2\") format(\"woff2\");unicode-range:\"U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Light-Latin3.woff2\") format(\"woff2\");unicode-range:\"U+0102-0103, U+1EA0-1EF9, U+20AB\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Light-Latin2.woff2\") format(\"woff2\");unicode-range:\"U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:300;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Light-Latin1.woff2\") format(\"woff2\");unicode-range:\"U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Regular.woff\") format(\"woff\")}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Regular-Pi.woff2\") format(\"woff2\");unicode-range:\"U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Regular-Latin3.woff2\") format(\"woff2\");unicode-range:\"U+0102-0103, U+1EA0-1EF9, U+20AB\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Regular-Latin2.woff2\") format(\"woff2\");unicode-range:\"U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:400;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-Regular-Latin1.woff2\") format(\"woff2\");unicode-range:\"U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-SemiBold.woff\") format(\"woff\")}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-SemiBold-Pi.woff2\") format(\"woff2\");unicode-range:\"U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-SemiBold-Latin3.woff2\") format(\"woff2\");unicode-range:\"U+0102-0103, U+1EA0-1EF9, U+20AB\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-SemiBold-Latin2.woff2\") format(\"woff2\");unicode-range:\"U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02\"}@font-face{font-family:'ibm-plex-sans';font-style:normal;font-weight:600;src:url(\"https://unpkg.com/carbon-components@latest/src/globals/fonts/IBMPlexSans-SemiBold-Latin1.woff2\") format(\"woff2\");unicode-range:\"U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02\"}.bx--visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}.bx--body{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;color:#152935;background-color:#f5f7fa;line-height:1}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}body{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;color:#152935;background-color:#f5f7fa;line-height:1}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--type-giga{font-size:4.75rem;line-height:1.25;font-weight:300}.bx--type-mega{font-size:3.375rem;line-height:1.25;font-weight:300}.bx--type-omega{font-size:0.75rem;line-height:1.25;font-weight:600}.bx--type-caption{font-size:0.75rem;line-height:1.5;font-weight:400}.bx--type-legal{font-size:0.6875rem;line-height:1.5;font-weight:400}.bx--type-caps{text-transform:uppercase}strong,.bx--type-strong{font-weight:700}p{font-size:1rem;line-height:1.5;font-weight:400}em{font-style:italic}a{color:#3d70b2}h1,.bx--type-alpha{font-size:2.25rem;line-height:1.25;font-weight:300}h2,.bx--type-beta{font-size:1.75rem;line-height:1.25;font-weight:300}h3,.bx--type-gamma{font-size:1.25rem;line-height:1.25;font-weight:300}h4,.bx--type-delta{font-size:1.125rem;line-height:1.25;font-weight:600}h5,.bx--type-epsilon{font-size:1rem;line-height:1.25;font-weight:600}h6,.bx--type-zeta{font-size:0.875rem;line-height:1.25;font-weight:600}.bx--grid{margin-left:3%;margin-right:3%;padding-left:5px;padding-right:5px}@media (min-width: 576px){.bx--grid{margin-left:5%;margin-right:5%;padding-left:10px;padding-right:10px}}@media (min-width: 1600px){.bx--grid{margin:0 auto}}.bx--grid.max{max-width:1600px}.bx--row{display:flex;flex-wrap:wrap;margin:0 -5px}@media (min-width: 576px){.bx--row{margin:0 -10px}}[class*='bx--col']{position:relative;width:100%;min-height:1px;padding:0 5px}@media (min-width: 576px){[class*='bx--col']{padding:0 10px}}.bx--col-xs-1{flex-basis:8.33333%}.bx--col-xs-2{flex-basis:16.66667%}.bx--col-xs-3{flex-basis:25%}.bx--col-xs-4{flex-basis:33.33333%}.bx--col-xs-5{flex-basis:41.66667%}.bx--col-xs-6{flex-basis:50%}.bx--col-xs-7{flex-basis:58.33333%}.bx--col-xs-8{flex-basis:66.66667%}.bx--col-xs-9{flex-basis:75%}.bx--col-xs-10{flex-basis:83.33333%}.bx--col-xs-11{flex-basis:91.66667%}.bx--col-xs-12{flex-basis:100%}@media (min-width: 576px){.bx--col-sm-auto{flex:0 0 auto;width:auto}.bx--col-sm-1{flex-basis:8.33333%}.bx--col-sm-2{flex-basis:16.66667%}.bx--col-sm-3{flex-basis:25%}.bx--col-sm-4{flex-basis:33.33333%}.bx--col-sm-5{flex-basis:41.66667%}.bx--col-sm-6{flex-basis:50%}.bx--col-sm-7{flex-basis:58.33333%}.bx--col-sm-8{flex-basis:66.66667%}.bx--col-sm-9{flex-basis:75%}.bx--col-sm-10{flex-basis:83.33333%}.bx--col-sm-11{flex-basis:91.66667%}.bx--col-sm-12{flex-basis:100%}}@media (min-width: 768px){.bx--col-md-auto{flex:0 0 auto;width:auto}.bx--col-md-1{flex-basis:8.33333%}.bx--col-md-2{flex-basis:16.66667%}.bx--col-md-3{flex-basis:25%}.bx--col-md-4{flex-basis:33.33333%}.bx--col-md-5{flex-basis:41.66667%}.bx--col-md-6{flex-basis:50%}.bx--col-md-7{flex-basis:58.33333%}.bx--col-md-8{flex-basis:66.66667%}.bx--col-md-9{flex-basis:75%}.bx--col-md-10{flex-basis:83.33333%}.bx--col-md-11{flex-basis:91.66667%}.bx--col-md-12{flex-basis:100%}}@media (min-width: 992px){.bx--col-lg-auto{flex:0 0 auto;width:auto}.bx--col-lg-1{flex-basis:8.33333%}.bx--col-lg-2{flex-basis:16.66667%}.bx--col-lg-3{flex-basis:25%}.bx--col-lg-4{flex-basis:33.33333%}.bx--col-lg-5{flex-basis:41.66667%}.bx--col-lg-6{flex-basis:50%}.bx--col-lg-7{flex-basis:58.33333%}.bx--col-lg-8{flex-basis:66.66667%}.bx--col-lg-9{flex-basis:75%}.bx--col-lg-10{flex-basis:83.33333%}.bx--col-lg-11{flex-basis:91.66667%}.bx--col-lg-12{flex-basis:100%}}@media (min-width: 1200px){.bx--col-xl-auto{flex:0 0 auto;width:auto}.bx--col-xl-1{flex-basis:8.33333%}.bx--col-xl-2{flex-basis:16.66667%}.bx--col-xl-3{flex-basis:25%}.bx--col-xl-4{flex-basis:33.33333%}.bx--col-xl-5{flex-basis:41.66667%}.bx--col-xl-6{flex-basis:50%}.bx--col-xl-7{flex-basis:58.33333%}.bx--col-xl-8{flex-basis:66.66667%}.bx--col-xl-9{flex-basis:75%}.bx--col-xl-10{flex-basis:83.33333%}.bx--col-xl-11{flex-basis:91.66667%}.bx--col-xl-12{flex-basis:100%}}@media (min-width: 1600px){.bx--col-xxl-auto{flex:0 0 auto;width:auto}.bx--col-xxl-1{flex-basis:8.33333%}.bx--col-xxl-2{flex-basis:16.66667%}.bx--col-xxl-3{flex-basis:25%}.bx--col-xxl-4{flex-basis:33.33333%}.bx--col-xxl-5{flex-basis:41.66667%}.bx--col-xxl-6{flex-basis:50%}.bx--col-xxl-7{flex-basis:58.33333%}.bx--col-xxl-8{flex-basis:66.66667%}.bx--col-xxl-9{flex-basis:75%}.bx--col-xxl-10{flex-basis:83.33333%}.bx--col-xxl-11{flex-basis:91.66667%}.bx--col-xxl-12{flex-basis:100%}}.bx--col-xs,.bx--col-sm,.bx--col-md,.bx--col-lg{flex-basis:0;flex:1;flex-grow:1;max-width:100%}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}button.bx--btn{display:inline-block}button.bx--btn::-moz-focus-inner{padding:0;border:0}button.bx--btn .bx--btn__icon{position:relative;vertical-align:middle;top:-1px}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){button.bx--btn .bx--btn__icon{top:0}}.bx--btn{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.875rem;font-weight:600;height:2.5rem;padding:0 1rem;border-radius:0;text-align:center;text-decoration:none;transition-duration:250ms;transition-timing-function:ease-in;white-space:nowrap;line-height:16px}.bx--btn:disabled{cursor:not-allowed;opacity:0.5}.bx--btn .bx--btn__icon{width:1rem;height:1rem;margin-left:0.5rem;transition-duration:250ms;transition-timing-function:ease-in}.bx--btn--primary{background-color:#3d70b2;border-width:2px;border-style:solid;border-color:transparent;color:#fff}.bx--btn--primary:focus,.bx--btn--primary:hover{background-color:#5596e6}.bx--btn--primary:focus{border:2px solid #f5f7fa;outline:2px solid #5596e6}.bx--btn--primary:disabled:hover,.bx--btn--primary:disabled:focus{background-color:#3d70b2}.bx--btn--primary:active{background-color:#234066}.bx--btn--primary .bx--btn__icon{fill:#fff}.bx--btn--secondary{background-color:transparent;border-width:2px;border-style:solid;border-color:#3d70b2;color:#3d70b2}.bx--btn--secondary:focus,.bx--btn--secondary:hover{background-color:#3d70b2}.bx--btn--secondary:focus{border:2px solid #f5f7fa;outline:2px solid #3d70b2}.bx--btn--secondary:disabled:hover,.bx--btn--secondary:disabled:focus{background-color:transparent}.bx--btn--secondary:active{background-color:transparent}.bx--btn--secondary .bx--btn__icon{fill:#3d70b2}.bx--btn--secondary:hover,.bx--btn--secondary:focus{color:#fff}.bx--btn--secondary:active{color:#3d70b2}.bx--btn--secondary:hover>.bx--btn__icon,.bx--btn--secondary:focus>.bx--btn__icon{fill:#fff}.bx--btn--secondary:hover:disabled,.bx--btn--secondary:focus:disabled{color:#3d70b2}.bx--btn--tertiary{background-color:transparent;border-width:2px;border-style:solid;border-color:#8c9ba5;color:#8c9ba5}.bx--btn--tertiary:focus,.bx--btn--tertiary:hover{background-color:#8c9ba5}.bx--btn--tertiary:focus{border:2px solid #f5f7fa;outline:2px solid #8c9ba5}.bx--btn--tertiary:disabled:hover,.bx--btn--tertiary:disabled:focus{background-color:transparent}.bx--btn--tertiary:active{background-color:transparent}.bx--btn--tertiary .bx--btn__icon{fill:#8c9ba5}.bx--btn--tertiary:hover,.bx--btn--tertiary:focus{color:#fff}.bx--btn--tertiary:active{color:#8c9ba5}.bx--btn--tertiary:hover:disabled,.bx--btn--tertiary:focus:disabled{color:#8c9ba5}.bx--btn--ghost{background-color:transparent;border-width:2px;border-style:solid;border-color:transparent;color:#3d70b2}.bx--btn--ghost:focus,.bx--btn--ghost:hover{background-color:#3d70b2}.bx--btn--ghost:focus{border:2px solid #f5f7fa;outline:2px solid #3d70b2}.bx--btn--ghost:disabled:hover,.bx--btn--ghost:disabled:focus{background-color:transparent}.bx--btn--ghost:active{background-color:transparent}.bx--btn--ghost .bx--btn__icon{fill:#3d70b2}.bx--btn--ghost:hover,.bx--btn--ghost:focus{color:#fff}.bx--btn--ghost:hover .bx--btn__icon,.bx--btn--ghost:focus .bx--btn__icon{fill:#fff}.bx--btn--ghost .bx--btn__icon{margin-left:.5rem}.bx--btn--ghost:hover:disabled,.bx--btn--ghost:focus:disabled{color:#3d70b2}.bx--btn--ghost:hover:disabled .bx--btn__icon,.bx--btn--ghost:focus:disabled .bx--btn__icon{fill:#3d70b2}.bx--btn--danger{background-color:transparent;border-width:2px;border-style:solid;border-color:#e0182d;color:#e0182d}.bx--btn--danger:focus,.bx--btn--danger:hover{background-color:#e0182d}.bx--btn--danger:focus{border:2px solid #f5f7fa;outline:2px solid #e0182d}.bx--btn--danger:disabled:hover,.bx--btn--danger:disabled:focus{background-color:transparent}.bx--btn--danger:active{background-color:transparent}.bx--btn--danger .bx--btn__icon{fill:#e0182d}.bx--btn--danger:hover{color:#fff;border:2px solid transparent}.bx--btn--danger:focus{color:#fff}.bx--btn--danger:hover:disabled,.bx--btn--danger:focus:disabled{color:#e0182d;border:2px solid #e0182d}.bx--btn--danger:hover>.bx--btn__icon,.bx--btn--danger:focus>.bx--btn__icon{fill:#fff}.bx--btn--danger--primary{background-color:#e0182d;border-width:2px;border-style:solid;border-color:transparent;color:#fff}.bx--btn--danger--primary:focus,.bx--btn--danger--primary:hover{background-color:#b21324}.bx--btn--danger--primary:focus{border:2px solid #f5f7fa;outline:2px solid #b21324}.bx--btn--danger--primary:disabled:hover,.bx--btn--danger--primary:disabled:focus{background-color:#e0182d}.bx--btn--danger--primary:active{background-color:#840e1a}.bx--btn--danger--primary .bx--btn__icon{fill:#fff}.bx--btn--danger--primary:hover:disabled,.bx--btn--danger--primary:focus:disabled{color:#fff;border:2px solid #e0182d}.bx--btn--sm{letter-spacing:0;height:2rem;padding:0 .5rem}.bx--btn--secondary+.bx--btn--primary,.bx--btn--tertiary+.bx--btn--danger--primary{margin-left:1rem}.bx--btn.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:9.375rem}.bx--btn.bx--skeleton:hover,.bx--btn.bx--skeleton:focus,.bx--btn.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--btn.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--btn--copy{position:relative;overflow:visible}.bx--btn--copy .bx--btn__icon{margin-left:.3125rem}.bx--btn--copy__feedback{position:absolute;display:none;top:1.2rem;left:50%}.bx--btn--copy__feedback:before{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);font-size:0.75rem;top:1.1rem;padding:0.5rem 1rem;border:1px solid #dfe3e6;color:#152935;content:attr(data-feedback);transform:translateX(-50%);white-space:nowrap;pointer-events:none}.bx--btn--copy__feedback:after{top:0.85rem;width:0.5rem;height:0.5rem;border-right:1px solid #dfe3e6;border-bottom:1px solid #dfe3e6;content:'';transform:rotate(-135deg)}.bx--btn--copy__feedback:before,.bx--btn--copy__feedback:after{position:absolute;display:block;background:#fff}.bx--btn--copy__feedback--displayed{display:inline-flex}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--fieldset{margin-bottom:2rem}.bx--form-item{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;flex:1;margin-right:1rem;margin-bottom:1.5rem}.bx--form-item:last-of-type{margin-right:0;margin-bottom:0}.bx--label{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;font-weight:600;display:inline-block;vertical-align:baseline;margin-bottom:.5rem}.bx--label .bx--tooltip__trigger{font-size:0.875rem}.bx--label--disabled{opacity:0.5}.bx--label.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:4.6875rem;height:.875rem}.bx--label.bx--skeleton:hover,.bx--label.bx--skeleton:focus,.bx--label.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--label.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}input[data-invalid],textarea[data-invalid],select[data-invalid]{box-shadow:0 2px 0px 0px #e0182d}input[data-invalid] ~ .bx--form-requirement,textarea[data-invalid] ~ .bx--form-requirement,select[data-invalid] ~ .bx--form-requirement{max-height:12.5rem;display:block}input:not(output):not([data-invalid]):-moz-ui-invalid{box-shadow:none}.bx--form-requirement{font-size:0.75rem;margin:.75rem 0 0;max-height:0;overflow:hidden;font-weight:600;line-height:1.5;display:none}.bx--form-requirement::before{content:'*';display:inline-block;color:#e0182d}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes rotate-end-p1{100%{transform:rotate(360deg)}}@keyframes rotate-end-p2{100%{transform:rotate(-360deg)}}@keyframes init-stroke{0%{stroke-dashoffset:240}100%{stroke-dashoffset:40}}@keyframes stroke-end{0%{stroke-dashoffset:40}100%{stroke-dashoffset:240}}.bx--loading{animation-name:rotate;animation-duration:500ms;animation-timing-function:linear;animation-fill-mode:forwards;animation-iteration-count:infinite;width:10.5rem;height:10.5rem}.bx--loading svg circle{animation-name:init-stroke;animation-duration:1000ms;animation-timing-function:cubic-bezier(0.5, 0, 0.1, 1)}.bx--loading__svg{fill:transparent;stroke:#6eedd8;stroke-width:7;stroke-linecap:butt;stroke-dasharray:240;stroke-dashoffset:40}.bx--loading--stop{animation:rotate-end-p1 700ms cubic-bezier(0, 0, 0.25, 1) forwards,rotate-end-p2 700ms cubic-bezier(0, 0, 0.25, 1) 700ms forwards}.bx--loading--stop svg circle{animation-name:stroke-end;animation-duration:700ms;animation-timing-function:cubic-bezier(0, 0, 0.25, 1);animation-delay:700ms;animation-fill-mode:forwards}.bx--loading--small{width:2rem;height:2rem}.bx--loading--small .bx--loading__svg{stroke:#8c9ba5}.bx--loading-overlay{position:fixed;top:0;left:0;height:100%;width:100%;background-color:rgba(255,255,255,0.6);display:flex;justify-content:center;align-items:center;transition:background-color 2000ms cubic-bezier(0.5, 0, 0.1, 1);z-index:8000}.bx--loading-overlay--stop{display:none}.bx--file{width:100%}.bx--file-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}.bx--file-btn{display:inline-flex;margin:0}.bx--label-description{font-size:0.875rem;line-height:1.5;color:#5a6872;margin-bottom:1.5rem}.bx--file-container{display:block;width:100%;margin-top:1.5rem}.bx--file__selected-file{display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;width:300px;display:flex;align-items:center;justify-content:space-between;min-height:1.875rem;background-color:rgba(61,112,178,0.1);padding:0 1rem;margin-bottom:1rem}.bx--file__selected-file:last-child{margin-bottom:0}.bx--file-filename{font-size:0.75rem;display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;display:inline-flex;align-items:center;color:#152935;margin-right:1rem;height:1.875rem}.bx--file__state-container{display:flex;align-items:center}.bx--file__state-container .bx--loading{width:1.125rem;height:1.125rem;margin-right:.5rem}.bx--file__state-container .bx--loading__svg{stroke:#8c9ba5}.bx--file__state-container .bx--file-close,.bx--file__state-container .bx--file-complete{width:1rem;height:1rem;fill:#152935;cursor:pointer}.bx--file__state-container .bx--file-close:focus,.bx--file__state-container .bx--file-complete:focus{outline:1px solid #3d70b2}.bx--file__state-container .bx--file-close{fill:#8c9ba5}.bx--file__state-container .bx--file-complete{fill:#5aa700}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--form-item.bx--checkbox-wrapper{margin-bottom:1rem}.bx--form-item.bx--checkbox-wrapper:first-of-type{margin-top:.5rem}.bx--form-item.bx--checkbox-wrapper:last-of-type{margin-bottom:0}.bx--checkbox{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}.bx--checkbox-label{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:0.875rem;display:flex;align-items:center;cursor:pointer;position:relative;padding-left:1.5rem;min-height:1rem}.bx--checkbox-label::before{box-sizing:border-box;content:'';position:absolute;left:0;top:calc(50% - 9px);height:1.125rem;width:1.125rem;border:2px solid #8c9ba5;background-color:#fff}.bx--checkbox-label::after{content:'';width:10px;height:5px;background:none;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:scale(0) rotate(-45deg);position:absolute;left:.1875rem;top:50%;margin-top:-.3125rem}.bx--checkbox:checked+.bx--checkbox-label::before,.bx--checkbox:indeterminate+.bx--checkbox-label::before,.bx--checkbox-label[data-contained-checkbox-state='true']::before,.bx--checkbox-label[data-contained-checkbox-state='mixed']::before{background-color:#3d70b2;border-color:#3d70b2}.bx--checkbox:checked+.bx--checkbox-label::after,.bx--checkbox-label[data-contained-checkbox-state='true']::after{opacity:1;transform:scale(1) rotate(-45deg)}.bx--checkbox:not(:checked)+.bx--checkbox-label::after{opacity:0;transform:scale(0) rotate(-45deg)}.bx--checkbox:focus+.bx--checkbox-label::before,.bx--checkbox-label__focus::before{box-shadow:0 0 0 3px #7cc7ff;outline:1px solid transparent}.bx--checkbox:indeterminate+.bx--checkbox-label::after,.bx--checkbox-label[data-contained-checkbox-state='mixed']::after{transform:scale(1) rotate(0deg);border-left:0 solid #fff;border-bottom:2px solid #fff;opacity:1;width:.75rem;margin-top:-.375rem}.bx--checkbox:disabled+.bx--checkbox-label,.bx--checkbox:disabled ~ .bx--checkbox-label-text,.bx--checkbox-label[data-contained-checkbox-disabled='true']{opacity:0.5;cursor:not-allowed}.bx--checkbox-appearance{position:absolute;left:0;top:calc(50% - 9px);display:inline-block;height:1.125rem;width:1.125rem;margin-right:.5rem;background-color:#fff;border:2px solid #8c9ba5;min-width:1.125rem}.bx--checkbox:checked+.bx--checkbox-label .bx--checkbox-appearance{top:-.0625rem}.bx--checkbox:checked+.bx--checkbox-appearance,.bx--checkbox:checked+.bx--checkbox-label .bx--checkbox-appearance{display:flex;align-items:baseline;background-color:#3d70b2;border-color:#3d70b2}.bx--checkbox:focus+.bx--checkbox-label .bx--checkbox-appearance,.bx--checkbox:focus+.bx--checkbox-appearance{box-shadow:0 0 0 3px #7cc7ff;outline:1px solid transparent}.bx--checkbox:disabled+.bx--checkbox-appearance{opacity:0.5;cursor:not-allowed}.bx--checkbox-checkmark{display:none;fill:#fff;width:100%;height:100%}.bx--checkbox:checked+.bx--checkbox-appearance .bx--checkbox-checkmark,.bx--checkbox:checked+.bx--checkbox-label .bx--checkbox-appearance .bx--checkbox-checkmark{display:block}@-moz-document url-prefix(){.bx--checkbox:checked+.bx--checkbox-appearance .bx--checkbox-checkmark,.bx--checkbox:checked+.bx--checkbox-label .bx--checkbox-appearance .bx--checkbox-checkmark{stroke:#3d70b2}}.bx--checkbox-label.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:6.25rem;height:1.125rem}.bx--checkbox-label.bx--skeleton:hover,.bx--checkbox-label.bx--skeleton:focus,.bx--checkbox-label.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--checkbox-label.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--checkbox-label.bx--skeleton:after,.bx--checkbox-label.bx--skeleton:before{border:none}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--list-box{position:relative;width:100%;height:2.5rem;max-height:2.5rem;background-color:rgba(61,112,178,0.1)}.bx--list-box--disabled{opacity:0.5}.bx--list-box--disabled,.bx--list-box--disabled .bx--list-box__field,.bx--list-box--disabled .bx--list-box__menu-icon{cursor:not-allowed}.bx--list-box--inline{background-color:inherit;width:auto;height:2rem}.bx--list-box--inline .bx--list-box__label{color:#3d70b2}.bx--list-box--inline .bx--list-box__field{padding:0 0 0 .625rem}.bx--list-box--inline .bx--list-box__menu-icon{position:static;padding:0 .625rem 0 .75rem}.bx--list-box--inline>.bx--list-box__menu{top:2rem;width:18.75rem}.bx--list-box--inline>.bx--list-box__field[aria-expanded='true'] ~ .bx--list-box__menu{outline:1px solid #3d70b2;box-shadow:0 4px 8px 0 rgba(0,0,0,0.1)}.bx--list-box--inline>.bx--list-box__field[aria-expanded='true']{outline:none}.bx--list-box__field{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;width:100%;position:relative;display:inline-flex;align-items:center;height:100%;padding:0 1rem;cursor:pointer}.bx--list-box__field::-moz-focus-inner{border:0}.bx--list-box__field:focus,.bx--list-box__field[aria-expanded='true']{outline:1px solid #3d70b2}.bx--list-box__field[disabled]{outline:none}.bx--list-box__field[aria-expanded='true'] ~ .bx--list-box__menu{box-shadow:0 1px 0 0 #3d70b2,1px 0 0 0 #3d70b2,-1px 0 0 0 #3d70b2,0 4px 8px 0 rgba(0,0,0,0.1)}.bx--list-box__label{font-size:0.875rem;color:#152935;font-weight:600;-moz-user-select:none;-ms-user-select:none;user-select:none}.bx--list-box__menu-icon{display:inline-block;position:absolute;top:0;right:0;bottom:0;height:100%;padding:0 1rem;transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer}.bx--list-box__menu-icon>svg{fill:#3d70b2;height:100%}.bx--list-box__menu-icon--open{transform:rotate(180deg)}.bx--list-box__selection{display:inline-block;position:absolute;top:0;right:1.625rem;bottom:0;height:2.5rem;padding:0 1rem;cursor:pointer;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color 200ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--list-box__selection>svg{fill:#8c9ba5;height:100%}.bx--list-box__selection:focus{outline:1px solid #3d70b2}.bx--list-box__selection--multi{font-size:0.75rem;position:static;display:flex;align-items:center;justify-content:center;padding:0;background-color:#3d70b2;height:1.125rem;color:white;line-height:0;padding:.3125rem;margin-right:.625rem;border-radius:.8125rem}.bx--list-box__selection--multi>svg{fill:white;width:0.5rem;height:0.5rem;margin-left:.3125rem}.bx--list-box__selection--multi:focus,.bx--list-box__selection--multi:hover{background-color:#5596e6;outline:none}.bx--list-box__menu{box-shadow:0px 3px 3px 0 rgba(0,0,0,0.1);position:absolute;left:0;right:0;top:2.5rem;width:100%;background-color:#fff;max-height:7.5rem;overflow-y:auto;z-index:7000}.bx--list-box__menu-item{font-size:0.875rem;display:flex;align-items:center;height:2.5rem;padding:0 1rem;cursor:pointer;-moz-user-select:none;-ms-user-select:none;user-select:none}.bx--list-box__menu-item:hover,.bx--list-box__menu-item--highlighted{background-color:rgba(61,112,178,0.1);color:#152935}.bx--list-box__menu-item>.bx--form-item.bx--checkbox-wrapper{margin:0}.bx--list-box input[role='combobox']{background-color:inherit;font-weight:600;outline-offset:0}.bx--list-box input[role='combobox']::-ms-input-placeholder{font-weight:400}.bx--list-box input[role='combobox']::placeholder{font-weight:400}.bx--list-box--disabled input[role='combobox']{opacity:1}.bx--combo-box>.bx--list-box__field{padding:0}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--radio-button-group{display:flex;align-items:center;margin-top:.5rem}.bx--radio-button{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}.bx--radio-button__label{font-size:0.875rem;font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;cursor:pointer;margin-right:1rem}.bx--radio-button__appearance{background-color:#fff;border-radius:50%;border:2px solid #8c9ba5;flex-shrink:0;height:1.125rem;width:1.125rem;margin-right:.5rem}.bx--radio-button:checked+.bx--radio-button__label .bx--radio-button__appearance{display:flex;align-items:center;justify-content:center;border-color:#3d70b2}.bx--radio-button:checked+.bx--radio-button__label .bx--radio-button__appearance:before{content:'';display:inline-block;position:relative;width:0.5rem;height:0.5rem;border-radius:50%;background-color:#3d70b2}.bx--radio-button:disabled+.bx--radio-button__label{opacity:0.5;cursor:not-allowed}.bx--radio-button:focus+.bx--radio-button__label .bx--radio-button__appearance{box-shadow:0 0 0 3px #7cc7ff;outline:1px solid transparent}.bx--radio-button__label.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:6.25rem;height:1.125rem}.bx--radio-button__label.bx--skeleton:hover,.bx--radio-button__label.bx--skeleton:focus,.bx--radio-button__label.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--radio-button__label.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--radio-button__label.bx--skeleton .bx--radio-button__appearance{display:none}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--toggle{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}.bx--toggle__label{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;position:relative;display:flex;align-items:center;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer;margin:1rem 0}.bx--toggle__appearance{position:relative;width:3rem}.bx--toggle__appearance:before{position:absolute;display:block;content:'';width:100%;height:.25rem;top:-2px;background-color:#8c9ba5;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer}.bx--toggle__appearance:after{box-sizing:border-box;position:absolute;display:block;border:2px solid #8c9ba5;cursor:pointer;top:-12px;width:1.5rem;height:1.5rem;background-color:#fff;border-radius:50%;content:'';transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--toggle--small+.bx--toggle__label{width:2rem}.bx--toggle--small+.bx--toggle__label .bx--toggle__appearance{width:2rem;height:1rem}.bx--toggle--small+.bx--toggle__label .bx--toggle__appearance:before{box-sizing:border-box;height:1rem;width:2rem;border-radius:0.9375rem;background-color:transparent;border:2px solid #8c9ba5;top:0}.bx--toggle--small+.bx--toggle__label .bx--toggle__appearance:after{width:.625rem;height:.625rem;background-color:#8c9ba5;border:none;top:3px;left:3px}.bx--toggle__check{fill:#8c9ba5;position:absolute;left:6px;top:6px;z-index:1;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);transform:scale(0.2)}.bx--toggle--small:checked+.bx--toggle__label .bx--toggle__check{fill:#3d70b2;transform:scale(1) translateX(16px)}.bx--toggle__text--left,.bx--toggle__text--right{font-size:0.875rem;position:relative}.bx--toggle__text--left{margin-right:.5rem}.bx--toggle__text--right{margin-left:.5rem}.bx--toggle:checked+.bx--toggle__label .bx--toggle__appearance:before{background-color:#3d70b2}.bx--toggle:checked+.bx--toggle__label .bx--toggle__appearance:after{transform:translateX(24px);background-color:#3d70b2;box-shadow:none;border-color:#3d70b2}.bx--toggle--small:checked+.bx--toggle__label .bx--toggle__appearance:before{background-color:#3d70b2;border-color:#3d70b2}.bx--toggle--small:checked+.bx--toggle__label .bx--toggle__appearance:after{background-color:#fff;border-color:#fff;margin-left:0px;transform:translateX(17px)}.bx--toggle:focus+.bx--toggle__label .bx--toggle__appearance:before{outline:1px solid transparent}.bx--toggle:focus+.bx--toggle__label .bx--toggle__appearance:after{box-shadow:0 0 0 3px #7cc7ff;outline:1px solid transparent}.bx--toggle--small:focus+.bx--toggle__label .bx--toggle__appearance:before{box-shadow:0 0 0 3px #7cc7ff;outline:1px solid transparent}.bx--toggle--small:focus+.bx--toggle__label .bx--toggle__appearance:after{outline:none;box-shadow:none}.bx--toggle:disabled+.bx--toggle__label{cursor:not-allowed;opacity:0.5}.bx--toggle:disabled+.bx--toggle__label .bx--toggle__appearance:before,.bx--toggle:disabled+.bx--toggle__label .bx--toggle__appearance:after{cursor:not-allowed;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--toggle.bx--skeleton+.bx--toggle__label{cursor:default}.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__appearance:before,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__appearance:after{background-color:#3d70b2;border-color:#3d70b2;cursor:default}.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--left,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--right{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:1.25rem;height:.75rem}.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--left:hover,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--left:focus,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--left:active,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--right:hover,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--right:focus,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--right:active{border:none;outline:none;cursor:default}.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--left:before,.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__text--right:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__appearance:before{background:transparent;border-color:#8c9ba5}.bx--toggle.bx--skeleton+.bx--toggle__label>.bx--toggle__appearance:after{background-color:#8c9ba5;border:none}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--search{display:flex;position:relative;width:100%}.bx--search .bx--label{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}.bx--search-input{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:rgba(61,112,178,0.1);color:#152935;font-weight:600;padding:0 2.5rem;text-overflow:ellipsis;width:100%}.bx--search-input:focus{outline:1px solid #3d70b2}.bx--search-input::-ms-input-placeholder{color:#5a6872;font-weight:400}.bx--search-input::placeholder{color:#5a6872;font-weight:400}.bx--search-input::-ms-clear{display:none}.bx--search--sm .bx--search-input{font-size:0.875rem;height:2rem}.bx--search--lg .bx--search-input{font-size:0.875rem;height:2.5rem}.bx--search-magnifier,.bx--search-close{position:absolute;height:1rem;width:1rem;top:calc(50% - 0.5rem)}.bx--search-magnifier{left:0.75rem;fill:#8c9ba5}.bx--search-close{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;transition:opacity 250ms;fill:#8c9ba5;cursor:pointer;visibility:visible;opacity:1}.bx--search-close::-moz-focus-inner{border:0}.bx--search-close:focus{outline:1px solid #3d70b2;outline-offset:2px}.bx--search--sm .bx--search-close{right:0.75rem}.bx--search--lg .bx--search-close{right:6.25rem}.bx--search--lg .bx--search-close:last-child{right:.75rem}.bx--search-button{border:0;transition:250ms;height:2.5rem;width:2.5rem;min-width:2.5rem;margin-left:.25rem;background-color:#fff;position:relative;padding:0}.bx--search-button svg{position:relative;top:-1px;box-sizing:border-box;vertical-align:middle;transition:250ms;fill:#3d70b2;height:1rem;width:1rem}.bx--search-button:hover,.bx--search-button:focus{cursor:pointer;background-color:#3d70b2;outline:1px solid transparent}.bx--search-button:hover svg,.bx--search-button:focus svg{fill:#fff}.bx--search-close--hidden{visibility:hidden;opacity:0}.bx--search-view--hidden{display:none}.bx--search--lg.bx--skeleton .bx--search-input,.bx--search--sm.bx--skeleton .bx--search-input{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:100%}.bx--search--lg.bx--skeleton .bx--search-input:hover,.bx--search--lg.bx--skeleton .bx--search-input:focus,.bx--search--lg.bx--skeleton .bx--search-input:active,.bx--search--sm.bx--skeleton .bx--search-input:hover,.bx--search--sm.bx--skeleton .bx--search-input:focus,.bx--search--sm.bx--skeleton .bx--search-input:active{border:none;outline:none;cursor:default}.bx--search--lg.bx--skeleton .bx--search-input:before,.bx--search--sm.bx--skeleton .bx--search-input:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--search--lg.bx--skeleton .bx--search-input::-webkit-input-placeholder,.bx--search--sm.bx--skeleton .bx--search-input::-webkit-input-placeholder{color:transparent}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--select{position:relative;display:block}.bx--select-input{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;height:2.5rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;width:100%;padding:0 2.5rem 0 1rem;color:#152935;background-color:rgba(61,112,178,0.1);border:1px solid transparent;border-radius:0;cursor:pointer}.bx--select-input::-ms-expand{display:none}.bx--select-input:focus{outline:1px solid #3d70b2}.bx--select-input:disabled{opacity:0.5;cursor:not-allowed}.bx--select__arrow{fill:#3d70b2;position:absolute;right:1rem;top:1.175rem;width:.625rem;height:.3125rem;pointer-events:none}.bx--select-optgroup,.bx--select-option{color:#152935}.bx--select-option[disabled]{opacity:0.5;cursor:not-allowed}@-moz-document url-prefix(){.bx--select-option{background-color:#fff;color:#152935}.bx--select-optgroup{color:#152935}}.bx--select--inline{display:flex;align-items:center}.bx--select--inline .bx--label{white-space:nowrap;margin:0 .5rem 0 0;font-weight:400}.bx--select--inline .bx--select-input{background-color:transparent;color:#3d70b2;font-weight:600}.bx--select--inline .bx--select-input:disabled ~ *{opacity:0.5;cursor:not-allowed}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-input{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;display:block;width:100%;height:2.5rem;min-width:10rem;padding:0 1rem;color:#152935;background-color:rgba(61,112,178,0.1);border:1px solid transparent}.bx--text-input::-webkit-input-placeholder{color:#5a6872}.bx--text-input:focus{outline:none;border:1px solid #3d70b2}.bx--text-input:disabled{opacity:0.5;cursor:not-allowed}.bx--text-input:disabled:hover{border:1px solid transparent}.bx--text-input.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:100%}.bx--text-input.bx--skeleton:hover,.bx--text-input.bx--skeleton:focus,.bx--text-input.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--text-input.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--text-input.bx--skeleton::-webkit-input-placeholder{color:transparent}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-area{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;width:100%;min-width:10rem;padding:1rem;color:#152935;background-color:rgba(61,112,178,0.1);border:1px solid transparent;resize:vertical}.bx--text-area:focus{outline:1px solid #3d70b2}.bx--text-area::-webkit-input-placeholder{color:#5a6872}.bx--text-area:disabled{opacity:0.5;cursor:not-allowed}.bx--text-area:disabled:hover{border:1px solid transparent}bx--text-area.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);height:6.25rem}bx--text-area.bx--skeleton:hover,bx--text-area.bx--skeleton:focus,bx--text-area.bx--skeleton:active{border:none;outline:none;cursor:default}bx--text-area.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}bx--text-area.bx--skeleton::-webkit-input-placeholder{color:transparent}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--number{display:flex}.bx--number input[type='number']{font-size:0.875rem;font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;box-sizing:border-box;display:inline-flex;width:100%;min-width:9.375rem;padding-left:1rem;padding-right:2rem;font-weight:300;height:2.5rem;color:#152935;background-color:rgba(61,112,178,0.1);border:1px solid transparent;border-radius:0}.bx--number input[type='number']:focus{outline:1px solid #3d70b2}.bx--number input[type='number']:disabled{opacity:0.5;cursor:not-allowed}.bx--number input[type='number']:disabled ~ .bx--number__controls{opacity:0.5;cursor:not-allowed;pointer-events:none}.bx--number input[type='number']{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.bx--number input[type='number']::-ms-clear{display:none}.bx--number input[type='number']::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none}.bx--number__controls{position:relative;display:block;left:-1.75rem;display:flex;flex-direction:column;justify-content:center;align-items:center}.bx--number__control-btn{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;width:100%;position:relative;bottom:0;width:1.25rem;height:.625rem}.bx--number__control-btn::-moz-focus-inner{border:0}.bx--number__control-btn:focus{outline:1px solid #3d70b2}.bx--number__control-btn:hover{cursor:pointer}.bx--number__control-btn:hover svg{fill:#5596e6}.bx--number__controls svg{fill:#3d70b2;width:.5625rem;height:.5625rem}.bx--number__controls svg:hover{cursor:pointer;fill:#5596e6}.bx--number[data-invalid] input[type='number']{box-shadow:0 2px 0px 0px #e0182d}.bx--number[data-invalid] ~ .bx--form-requirement{max-height:12.5rem}.bx--number.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:100%;height:2.5rem}.bx--number.bx--skeleton:hover,.bx--number.bx--skeleton:focus,.bx--number.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--number.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--number.bx--skeleton input[type='number']{display:none}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--link{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:600;color:#3d70b2;text-decoration:underline;transition:250ms}.bx--link:visited{color:#3d70b2}.bx--link:active,.bx--link:hover,.bx--link:focus{color:#5596e6}.bx--link:focus{outline:1px solid #3d70b2}.bx--link[aria-disabled=\"true\"]{opacity:.5;pointer-events:none}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--list--nested,.bx--list--unordered,.bx--list--ordered{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-left:2rem;line-height:1.5}.bx--list--unordered,.bx--list--ordered{padding:1rem}.bx--list__item{font-weight:600;padding-left:.25rem}.bx--list--unordered>.bx--list__item{list-style-type:disc}.bx--list--ordered>.bx--list__item{list-style-type:decimal}.bx--list--nested{margin-left:.5rem}.bx--list--nested>.bx--list__item{list-style-type:none;font-weight:400}.bx--list--nested>.bx--list__item:before{content:'-';padding-right:.25rem}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--overflow-menu{position:relative;width:1.25rem;height:2.375rem;cursor:pointer}.bx--overflow-menu:focus{outline:1px solid transparent;box-shadow:0 0 0 1px #3d70b2}.bx--overflow-menu__icon{width:100%;height:100%;padding:0.5rem;fill:#8c9ba5}.bx--overflow-menu__icon:hover,.bx--overflow-menu__icon:focus{fill:#3d70b2}.bx--overflow-menu-options{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);display:none;flex-direction:column;align-items:flex-start;position:absolute;z-index:10000;background-color:#fff;border:1px solid #dfe3e6;width:11.25rem;list-style:none;margin-top:.25rem;padding:.25rem 0 .5rem;left:-20px}.bx--overflow-menu-options--open{display:flex}.bx--overflow-menu-options:before{content:'';position:absolute;display:block;width:.5rem;height:.5rem;z-index:-1;transform:rotate(45deg);background-color:#fff;border-top:1px solid #dfe3e6;border-left:1px solid #dfe3e6;top:-5px;left:24px}.bx--overflow-menu-options__option{display:flex;background-color:transparent;align-items:center;width:100%;padding:0}.bx--overflow-menu--divider{border-top:1px solid #dfe3e6}.bx--overflow-menu-options__btn{font-size:0.875rem;font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-weight:400;width:100%;height:100%;border:none;display:inline-block;background-color:transparent;text-align:left;padding:.5rem 1rem;cursor:pointer}.bx--overflow-menu-options__btn:focus{outline:1px solid transparent;text-decoration:underline}.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:focus{outline:1px solid transparent;text-decoration:underline}.bx--overflow-menu-options__option:hover{background-color:#3d70b2}.bx--overflow-menu-options__option:hover .bx--overflow-menu-options__btn{color:#fff;text-decoration:none}.bx--overflow-menu-options__option--danger{border-top:1px solid #dfe3e6}.bx--overflow-menu-options__option--danger:hover{background-color:#e0182d}.bx--overflow-menu-options__option--disabled:hover{background-color:#fff}.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn{color:#152935;cursor:not-allowed;opacity:0.5}.bx--overflow-menu-options__option--disabled:hover .bx--overflow-menu-options__btn{color:#152935;opacity:0.5}.bx--overflow-menu-options__option--disabled:hover .bx--overflow-menu-options__btn:active,.bx--overflow-menu-options__option--disabled:hover .bx--overflow-menu-options__btn:focus{background-color:#fff;pointer-events:none}.bx--overflow-menu--flip{left:-140px}.bx--overflow-menu--flip:before{left:145px}.bx--responsive-table-container{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;overflow-x:auto;overflow-y:hidden;width:99.9%}.bx--responsive-table{background-color:#fff;width:100%;min-width:500px;border-collapse:collapse;border-spacing:0;border:2px solid #dfe3e6}.bx--responsive-table td{font-size:0.875rem;padding:0 .375rem;vertical-align:middle}.bx--responsive-table td p{font-size:0.875rem}.bx--responsive-table th{font-size:0.75rem;padding:.5625rem .375rem;vertical-align:middle;font-weight:600}.bx--responsive-table th:focus{outline:1px solid transparent}.bx--responsive-table th:focus span{outline:1px solid #3d70b2}.bx--responsive-table--tall td,.bx--responsive-table--tall th{padding-top:.9375rem;padding-bottom:.9375rem}.bx--responsive-table--static-size{border-collapse:collapse;width:auto;border:2px solid #dfe3e6}.bx--responsive-table--static-size tr td:first-child,.bx--responsive-table--static-size tr th:first-child{padding-left:1.5rem}.bx--responsive-table--tall td,.bx--responsive-table--tall th{padding-top:.625rem;padding-bottom:.625rem}.bx--table-row{height:2rem;padding-left:1rem}.bx--table-head .bx--table-row{border-bottom:1px solid #3d70b2;height:2rem}.bx--table-header{font-size:0.75rem;font-weight:600;text-align:left;text-transform:uppercase;height:2.5rem}.bx--table-body>.bx--parent-row,.bx--table-body>.bx--parent-row{background-color:#fff}.bx--table-body>.bx--parent-row+.bx--expandable-row,.bx--table-body>.bx--parent-row+.bx--expandable-row{background-color:#fff}.bx--table-body>.bx--parent-row--even,.bx--table-body>.bx--parent-row--even{background-color:#f0f3f6}.bx--table-body>.bx--parent-row--even+.bx--expandable-row,.bx--table-body>.bx--parent-row--even+.bx--expandable-row{background-color:#f0f3f6}.bx--table-body .bx--table-row{border:1px solid transparent}.bx--table-body .bx--table-row:first-child:hover,.bx--table-body .bx--table-row:first-child:focus{border-left:2px solid #5596e6;outline:1px solid #5596e6}.bx--table-body .bx--table-row:not(:first-child):hover,.bx--table-body .bx--table-row:not(:first-child):focus{border-left:2px solid #5596e6;outline:1px solid #5596e6}.bx--expandable-row>td{border-left:4px solid #3d70b2;padding:2rem}.bx--expandable-row--hidden{visibility:hidden}.bx--table-expand{padding-left:.5rem;padding-right:.75rem;text-align:center;width:1.25rem;cursor:pointer}.bx--table-expand:focus{outline:1px solid transparent}.bx--table-expand:focus svg{outline:1px solid #3d70b2}.bx--table-expand__svg{fill:#8c9ba5;transform:rotate(0deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1);width:12px;height:12px;margin-left:.4375rem;margin-right:.125rem}@media all and (min--moz-device-pixel-ratio: 0) and (min-resolution: 3e1dpcm){.bx--table-expand__svg{margin-top:2px}}.bx--table-expand[data-previous-value='collapsed'] .bx--table-expand__svg{transform:rotate(90deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1)}[data-event='sort']{cursor:pointer}.bx--table-sort__svg{fill:#8c9ba5;width:8px;height:8px;transform:rotate(0deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--table-sort--ascending .bx--table-sort__svg{transform:rotate(180deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--table-select{width:1.875rem;text-align:center;padding-left:0;padding-right:0}.bx--table-select .bx--checkbox-label{display:inline-flex;margin:0}@media all and (min--moz-device-pixel-ratio: 0) and (min-resolution: 3e1dpcm){.bx--table-select .bx--checkbox-label{margin-top:2px}}.bx--table-select .bx--checkbox-appearance{margin:0}.bx--table-overflow{width:2.5rem;text-align:center}.bx--table-overflow .bx--overflow-menu{padding:0}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--table-toolbar{display:flex;padding-top:.5rem;padding-bottom:.5rem;width:100%;position:relative}.bx--table-toolbar .bx--search-input{position:relative}.bx--table-toolbar .bx--search-input:focus{box-shadow:inset 0px 0px 0px 1px #3d70b2;outline:0}.bx--toolbar-content{display:flex;margin-left:auto}.bx--toolbar-action{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;width:100%;cursor:pointer;padding-left:.75rem;padding-right:.75rem}.bx--toolbar-action::-moz-focus-inner{border:0}.bx--toolbar-action:hover>.bx--toolbar-action__icon{fill:#3d70b2}.bx--toolbar-action:focus{outline:1px solid #3d70b2}.bx--toolbar-action:focus>.bx--toolbar-action__icon{fill:#3d70b2}.bx--toolbar-action:active>.bx--toolbar-action__icon{fill:#36649f}.bx--toolbar-action:last-of-type{padding-right:0}.bx--toolbar-action ~ .bx--btn{margin-left:.75rem;margin-right:.75rem}.bx--toolbar-action__icon{height:1rem;width:auto;max-width:16px;fill:#8c9ba5;transition:250ms}.bx--batch-actions{display:flex;align-items:center;position:absolute;opacity:0;left:0;top:0;padding-left:1.5rem;padding-right:1.5rem;width:100%;height:100%;z-index:6000;background-color:transparent;transition:opacity 200ms cubic-bezier(0.5, 0, 0.1, 1),background-color 200ms cubic-bezier(0.5, 0, 0.1, 1);pointer-events:none;visibility:hidden}.bx--batch-actions:focus{outline:1px solid #3d70b2}.bx--batch-actions .bx--btn{color:#fff}.bx--batch-actions .bx--btn__icon{fill:#fff}.bx--batch-actions .bx--btn--ghost:hover,.bx--batch-actions .bx--btn--ghost:focus{background-color:#fff;color:#3d70b2}.bx--batch-actions .bx--btn--ghost:hover .bx--btn__icon,.bx--batch-actions .bx--btn--ghost:focus .bx--btn__icon{fill:#3d70b2}.bx--batch-actions .bx--btn--ghost:focus{border:2px solid #3d70b2;outline:2px solid #f5f7fa}.bx--batch-actions--active{visibility:visible;background-color:#3d70b2;pointer-events:all;transition:opacity 200ms cubic-bezier(0.5, 0, 0.1, 1),background-color 200ms cubic-bezier(0.5, 0, 0.1, 1);opacity:1}.bx--action-list{margin-left:-0.5rem}.bx--action-icons{margin-left:auto}.bx--action-icons svg{padding:0 .75rem;fill:#fff;height:1rem;width:auto}.bx--batch-summary{margin-left:auto;display:flex;align-items:center;color:#fff}.bx--batch-summary__para{font-size:0.875rem;margin-right:1.5rem}.bx--batch-summary__cancel{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;font-size:0.875rem;color:#fff;border-bottom:1px solid transparent;font-weight:600;cursor:pointer;transition:border 250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--batch-summary__cancel::-moz-focus-inner{border:0}.bx--batch-summary__cancel:hover,.bx--batch-summary__cancel:focus{border-bottom:1px solid #fff}.bx--batch-actions ~ .bx--toolbar-search-container,.bx--batch-actions ~ .bx--toolbar-content{opacity:1;transition:opacity 250ms}.bx--batch-actions--active ~ .bx--toolbar-search-container,.bx--batch-actions--active ~ .bx--toolbar-content{opacity:0}.bx--data-table-v2-container{width:100%;min-width:31.25rem;overflow-x:auto;padding-top:.125rem}.bx--data-table-v2{border-collapse:collapse;border-spacing:0;width:100%;border-bottom:1px solid #dfe3e6}.bx--data-table-v2 thead{font-size:0.875rem;background-color:#f5f7fa;font-weight:700}.bx--data-table-v2 tbody{font-size:0.875rem;background-color:#fff}.bx--data-table-v2 tr{height:3rem}.bx--data-table-v2 tr:hover td{background-color:rgba(85,150,230,0.1);border-top:1px solid #3d70b2;border-bottom:1px solid #3d70b2}.bx--data-table-v2 tr:hover td:first-of-type{border-left:1px solid #3d70b2}.bx--data-table-v2 tr:hover td:last-of-type{border-right:1px solid #3d70b2}.bx--data-table-v2 tr:hover .bx--overflow-menu{opacity:1}.bx--data-table-v2 th{border-top:1px solid #dfe3e6}.bx--data-table-v2 th,.bx--data-table-v2 td{border-top:1px solid #dfe3e6;padding-left:.75rem;vertical-align:middle;text-align:left}.bx--data-table-v2 th:first-of-type,.bx--data-table-v2 td:first-of-type{padding-left:1.5rem;border-left:1px solid #dfe3e6}.bx--data-table-v2 th:last-of-type,.bx--data-table-v2 td:last-of-type{padding-right:1.5rem;border-right:1px solid #dfe3e6}.bx--data-table-v2 .bx--checkbox-label{padding-left:1.75rem}.bx--data-table-v2 .bx--overflow-menu{opacity:0}.bx--data-table-v2 .bx--overflow-menu:focus{outline:0;opacity:1;box-shadow:none}.bx--data-table-v2 .bx--overflow-menu:focus .bx--overflow-menu__icon{box-shadow:inset 0px 0px 0px 1px #3d70b2}.bx--data-table-v2 .bx--overflow-menu__icon{transform:rotate(90deg)}.bx--data-table-v2-header{margin-bottom:.5rem}.bx--data-table-v2--zebra tbody tr:nth-child(even){background-color:#f5f7fa}.bx--data-table-v2--no-border tr:last-of-type td{border-bottom-color:transparent}.bx--data-table-v2--no-border th:first-of-type,.bx--data-table-v2--no-border td:first-of-type{border-left-color:transparent}.bx--data-table-v2--no-border th:last-of-type,.bx--data-table-v2--no-border td:last-of-type{border-right-color:#dfe3e6}.bx--data-table-v2--compact tbody tr{height:1.5rem}.bx--data-table-v2--short tbody tr{height:2rem}.bx--data-table-v2--tall tbody tr{height:4rem}.bx--data-table-v2--static{width:auto}.bx--data-table-v2--zebra tbody tr.bx--data-table-v2--selected,tbody tr.bx--data-table-v2--selected{background-color:rgba(85,150,230,0.1)}tr.bx--expandable-row-v2.bx--expandable-row--hidden-v2{display:none}tr.bx--expandable-row-v2>td:first-of-type{position:relative}tr.bx--expandable-row-v2>td:first-of-type:before{content:'';position:absolute;top:0;left:0;height:100%;width:2px;background-color:#3d70b2}tr.bx--expandable-row-v2+tr[data-child-row] td{border-top:0;padding-bottom:.5rem}tr.bx--expandable-row-v2:hover>td{background-color:rgba(85,150,230,0.1)}tr.bx--expandable-row-v2:hover>td:first-of-type{border-left:1px solid transparent}tr.bx--expandable-row-v2:hover>td:last-of-type{border-right:1px solid #3d70b2}tr.bx--expandable-row-v2:hover[data-parent-row]>td{border-bottom:0}tr.bx--expandable-row-v2:hover+tr[data-child-row]>td{background-color:rgba(85,150,230,0.1);border-bottom:1px solid #3d70b2;border-right:1px solid #3d70b2}tr.bx--expandable-row--hover-v2>td{background-color:rgba(85,150,230,0.1);border-top:1px solid #3d70b2}tr.bx--expandable-row--hover-v2>td:last-of-type{border-right:1px solid #3d70b2}.bx--table-expand-v2[data-previous-value='collapsed'] .bx--table-expand-v2__svg{transform:rotate(90deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--table-expand-v2__button{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer}.bx--table-expand-v2__button::-moz-focus-inner{border:0}.bx--table-expand-v2__button:focus{outline:1px solid transparent}.bx--table-expand-v2__button:focus svg{box-shadow:inset 0px 0px 0px 1px #3d70b2}.bx--table-expand-v2__svg{fill:#8c9ba5;transform:rotate(0deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1);height:16px;width:auto;max-width:16px;padding:.125rem}.bx--table-sort-v2--ascending .bx--table-sort-v2__icon{transform:rotate(180deg);transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--table-sort-v2--active .bx--table-sort-v2__icon{opacity:1}.bx--data-table-v2 th:hover .bx--table-sort-v2__icon{opacity:1}.bx--table-sort-v2{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;position:relative;font:inherit;cursor:pointer;display:flex;align-items:center;width:100%}.bx--table-sort-v2::-moz-focus-inner{border:0}.bx--table-sort-v2:focus{outline:0}.bx--table-sort-v2:focus svg{opacity:1;outline:1px solid #3d70b2;fill:#3d70b2;outline-offset:-0.5px}.bx--table-sort-v2__icon{position:relative;left:2px;transition:transform 200ms cubic-bezier(0.5, 0, 0.1, 1);transform:rotate(0);opacity:0;fill:#8c9ba5;height:.5625rem;padding:.125rem;width:auto;min-width:14px}.bx--inline-edit-label{display:flex;justify-content:space-between;align-items:center}.bx--inline-edit-label:hover .bx--inline-edit-label__icon{opacity:1}.bx--inline-edit-label--inactive{display:none}.bx--inline-edit-label__action{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer}.bx--inline-edit-label__action::-moz-focus-inner{border:0}.bx--inline-edit-label__action:hover{cursor:pointer}.bx--inline-edit-label__action:focus{outline:1px solid #3d70b2;padding:.125rem}.bx--inline-edit-label__action:focus .bx--inline-edit-label__icon{width:auto;opacity:1}.bx--inline-edit-label__icon{fill:#8c9ba5;opacity:0}.bx--inline-edit-input{display:none}.bx--inline-edit-input--active{display:block;margin-left:-.75rem}.bx--inline-edit-input--active input{padding-left:.75rem}.bx--data-table-v2--short input{height:2rem}.bx--data-table-v2--short select{padding:0.45rem 2.75rem 0.45rem 1rem}.bx--data-table-v2--short .bx--select__arrow{top:0.875rem}.bx--data-table-v2.bx--skeleton th{border-bottom:1px solid #3d70b2}.bx--data-table-v2.bx--skeleton th:nth-child(3n+1){width:10%}.bx--data-table-v2.bx--skeleton th:nth-child(3n+2){width:30%}.bx--data-table-v2.bx--skeleton th:nth-child(3n+3){width:15%}.bx--data-table-v2.bx--skeleton th span,.bx--data-table-v2.bx--skeleton td span{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:75%;height:1rem;display:block}.bx--data-table-v2.bx--skeleton th span:hover,.bx--data-table-v2.bx--skeleton th span:focus,.bx--data-table-v2.bx--skeleton th span:active,.bx--data-table-v2.bx--skeleton td span:hover,.bx--data-table-v2.bx--skeleton td span:focus,.bx--data-table-v2.bx--skeleton td span:active{border:none;outline:none;cursor:default}.bx--data-table-v2.bx--skeleton th span:before,.bx--data-table-v2.bx--skeleton td span:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--data-table-v2.bx--skeleton tr:hover td{border-color:#dfe3e6;background:transparent}.bx--data-table-v2.bx--skeleton tr:hover td:first-of-type,.bx--data-table-v2.bx--skeleton tr:hover td:last-of-type{border-color:#dfe3e6}.bx--data-table-v2.bx--skeleton .bx--table-sort-v2{pointer-events:none}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--structured-list--selection .bx--structured-list-td,.bx--structured-list--selection .bx--structured-list-th{padding-left:1rem;padding-right:1rem}.bx--structured-list--selection .bx--structured-list-td:first-child,.bx--structured-list--selection .bx--structured-list-th:first-child{padding-left:1rem;padding-right:.5rem}.bx--structured-list--selection .bx--structured-list-td:last-child,.bx--structured-list--selection .bx--structured-list-th:last-child{padding-right:2rem}[data-structured-list] .bx--structured-list-td,[data-structured-list] .bx--structured-list-th{padding-left:1rem;padding-right:1rem}[data-structured-list] .bx--structured-list-td:first-child,[data-structured-list] .bx--structured-list-th:first-child{padding-left:1rem;padding-right:.5rem}[data-structured-list] .bx--structured-list-td:last-child,[data-structured-list] .bx--structured-list-th:last-child{padding-right:2rem}.bx--structured-list-input{display:none}.bx--structured-list{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:table;overflow-x:auto;overflow-y:hidden;width:100%;min-width:500px;border-collapse:collapse;border-spacing:0;margin-bottom:5rem;background-color:transparent}.bx--structured-list.bx--structured-list--border{border:1px solid #dfe3e6;background-color:#fff}.bx--structured-list.bx--structured-list--condensed .bx--structured-list-td,.bx--structured-list.bx--structured-list--condensed .bx--structured-list-th{padding:.5rem;padding-left:0}.bx--structured-list-row{display:table-row;border-bottom:1px solid #dfe3e6;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--structured-list--selection .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row){background-color:rgba(85,150,230,0.1);cursor:pointer}[data-structured-list] .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row){background-color:rgba(85,150,230,0.1);cursor:pointer}.bx--structured-list-row.bx--structured-list-row--selected{background-color:rgba(85,150,230,0.1)}.bx--structured-list-row.bx--structured-list-row--header-row{border-bottom:2px solid #3d70b2;cursor:inherit}.bx--structured-list-row:focus:not(.bx--structured-list-row--header-row){outline:1px solid #3d70b2}.bx--structured-list-thead{display:table-header-group;vertical-align:middle}.bx--structured-list-th{padding-left:0;padding-right:2rem;padding-top:1rem;padding-bottom:1rem;font-size:0.75rem;display:table-cell;font-weight:600;height:2.5rem;text-align:left;text-transform:none;vertical-align:bottom}.bx--structured-list-th:last-child{padding-right:0}.bx--structured-list-tbody{display:table-row-group;vertical-align:middle}.bx--structured-list-td{font-size:0.875rem;line-height:1.5;padding-left:0;padding-right:2rem;padding-top:1rem;padding-bottom:1rem;position:relative;display:table-cell}.bx--structured-list-td:last-child{padding-right:2rem}.bx--structured-list-content--nowrap{white-space:nowrap}.bx--structured-list-svg{display:inline-block;fill:transparent;vertical-align:middle;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--structured-list-row:hover .bx--structured-list-svg{fill:rgba(85,150,230,0.1)}.bx--structured-list-input:checked+.bx--structured-list-row .bx--structured-list-svg,.bx--structured-list-input:checked+.bx--structured-list-td .bx--structured-list-svg{fill:#5596e6}.bx--structured-list.bx--skeleton .bx--structured-list-th:first-child{width:8%}.bx--structured-list.bx--skeleton .bx--structured-list-th:nth-child(3n+2){width:30%}.bx--structured-list.bx--skeleton .bx--structured-list-th:nth-child(3n+3){width:15%}.bx--structured-list.bx--skeleton .bx--structured-list-th span{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:75%;height:1rem;display:block}.bx--structured-list.bx--skeleton .bx--structured-list-th span:hover,.bx--structured-list.bx--skeleton .bx--structured-list-th span:focus,.bx--structured-list.bx--skeleton .bx--structured-list-th span:active{border:none;outline:none;cursor:default}.bx--structured-list.bx--skeleton .bx--structured-list-th span:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--structured-list.bx--structured-list--border.bx--skeleton .bx--structured-list-th:first-child{width:5%}.bx--structured-list.bx--structured-list--border.bx--skeleton .bx--structured-list-th:first-child span{display:none}.bx--structured-list-content{font-size:0.875rem}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--snippet--code{font-family:\"ibm-plex-mono\",\"Menlo\",\"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",Courier,monospace;position:relative;max-width:40rem;width:100%;background-color:rgba(61,112,178,0.1);padding:1rem 2.5rem 1rem 1rem}.bx--snippet code{font-size:1rem}.bx--snippet--code .bx--snippet-container{max-height:12rem;overflow-y:scroll;margin-right:1rem;position:relative}.bx--snippet--code .bx--snippet-container pre{white-space:pre-wrap}.bx--snippet--terminal{font-family:\"ibm-plex-mono\",\"Menlo\",\"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",Courier,monospace;position:relative;max-width:40rem;width:100%;background-color:#152935;color:#fff;height:3.5rem;padding:0 2.5rem 0 1rem}.bx--snippet--terminal .bx--snippet-container{display:flex;align-items:center;height:130%;white-space:nowrap;overflow-x:scroll;position:relative}.bx--snippet__icon{fill:#3d70b2;height:1.5rem;width:1.125rem;transition:250ms}.bx--snippet__icon:hover{fill:#5596e6}.bx--snippet--terminal .bx--snippet__icon{fill:#fff}.bx--snippet--terminal .bx--snippet__icon:hover{fill:#5596e6}.bx--snippet-button{cursor:pointer;position:absolute;top:0.5rem;right:0.5rem;border:none;background-color:transparent;outline:none;padding:0;height:2rem;width:2rem}.bx--snippet-button:focus{outline:1px solid #3d70b2}.bx--snippet .bx--btn--copy__feedback{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;z-index:8000;font-weight:600;left:inherit;top:1rem;right:1.25rem}.bx--snippet--code.bx--skeleton{height:6.125rem}.bx--snippet--terminal.bx--skeleton{height:3.5rem}.bx--snippet.bx--skeleton .bx--snippet-container{height:100%}.bx--snippet.bx--skeleton code{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:100%;height:1rem;display:block}.bx--snippet.bx--skeleton code:hover,.bx--snippet.bx--skeleton code:focus,.bx--snippet.bx--skeleton code:active{border:none;outline:none;cursor:default}.bx--snippet.bx--skeleton code:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--card{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;box-shadow:0 1px 2px 0 rgba(0,0,0,0.1);display:flex;flex-direction:column;width:12.5rem;height:15rem;background-color:#fff;border:1px solid #dfe3e6}.bx--card:focus{outline:1px solid #3d70b2}.bx--card__card-overview{position:relative;display:flex;justify-content:center;text-align:center;padding-left:1rem;padding-top:1rem;padding-right:1rem;height:12rem}.bx--card__card-overview .bx--overflow-menu{position:absolute;top:1rem;right:1rem;z-index:10000;margin:0}.bx--card-footer{display:flex;align-items:center;justify-content:space-between;height:3rem;background-color:#f0f3f6;padding-left:1rem;padding-right:1rem}.bx--card-footer>.bx--btn{display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:0.25rem;flex:1}.bx--card-footer__link{font-size:0.875rem}.bx--card-footer__link:focus{outline:1px solid #3d70b2}.bx--card-overview__about{display:flex;flex:1;flex-direction:column;align-items:center;padding-top:1rem;width:100%}.bx--about__title{font-weight:400;padding-top:1.5rem;width:100%}.bx--about__title--name{font-size:1.125rem;display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;margin:0;line-height:1.2;overflow:hidden}.bx--about__title--link{font-size:0.75rem;display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;text-align:center}.bx--about__title--additional-info{font-size:0.75rem;display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;padding:0;margin:0;color:#5a6872}.bx--about__title--additional-info:first-child{padding-top:0.25rem}.bx--about__icon{display:flex;align-items:center;justify-content:center;width:3.125rem;height:3.125rem;background-color:#fff;border:1px solid #dfe3e6;border-radius:100%}.bx--about__icon .bx--about__icon--img{width:2rem;height:2rem;overflow:hidden}.bx--card-footer__app-status .active{display:flex}.bx--card-footer__app-status--running{font-size:0.75rem;display:none;align-items:center}.bx--card-footer__app-status--running::before{content:' ';height:1rem;width:1rem;border-radius:100%;margin-right:0.25rem}.bx--card-footer__app-status--running::before{background-color:#5aa700}.bx--card-footer__app-status--not-running{font-size:0.75rem;display:none;align-items:center}.bx--card-footer__app-status--not-running::before{content:' ';height:1rem;width:1rem;border-radius:100%;margin-right:0.25rem}.bx--card-footer__app-status--not-running::before{background-color:#e0182d}.bx--card-footer__app-status--stopped{font-size:0.75rem;display:none;align-items:center}.bx--card-footer__app-status--stopped::before{content:' ';height:1rem;width:1rem;border-radius:100%;margin-right:0.25rem}.bx--card-footer__app-status--limited{font-size:0.75rem;display:none;align-items:center}.bx--card-footer__app-status--limited::before{content:' ';height:1rem;width:1rem;border-radius:100%;margin-right:0.25rem}.bx--card-footer__app-actions{display:flex}.bx--app-actions__button{font-size:1rem;display:inline-block;padding:0.125rem 0 0;margin:0 0.175rem;cursor:pointer;background:none;border:none}.bx--app-actions__button:hover .bx--app-actions__button--icon,.bx--app-actions__button:focus .bx--app-actions__button--icon{fill:#3d70b2}.bx--app-actions__button:focus{outline:1px solid #3d70b2}.bx--app-actions__button--icon{width:1rem;height:1rem;margin:0 0.125rem;transition:200ms;fill:#8c9ba5;cursor:pointer}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--content-switcher{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;height:2.5rem}.bx--content-switcher-btn{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:0.875rem;font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;background-color:transparent;display:flex;align-items:center;padding:0 2rem;margin:0;text-decoration:none;border:1px solid #3d70b2;color:#3d70b2}.bx--content-switcher-btn:focus{outline:1px solid transparent;box-shadow:0 2px 0 0 #7cc7ff,0 -2px 0 0 #7cc7ff;background-color:#5596e6;z-index:2;border-color:#5596e6;text-decoration:underline;color:#fff}.bx--content-switcher-btn:hover{cursor:pointer}.bx--content-switcher-btn:hover,.bx--content-switcher-btn:active{background-color:#5596e6;border-color:#5596e6;color:#fff}.bx--content-switcher__icon{margin-right:.5rem;fill:currentColor}.bx--content-switcher__icon *{fill:currentColor}.bx--content-switcher-btn:not(:last-of-type){border-right:none}.bx--content-switcher-btn:not(:first-of-type){border-left:1px solid #3d70b2}.bx--content-switcher-btn:first-of-type{border-bottom-left-radius:8px;border-top-left-radius:8px}.bx--content-switcher-btn:first-of-type:hover{border-color:#5596e6}.bx--content-switcher-btn:first-of-type:focus{box-shadow:-2px 0 0 0 #7cc7ff,0 2px 0 0 #7cc7ff,0 -2px 0 0 #7cc7ff;z-index:0}.bx--content-switcher-btn:last-of-type{border-top-right-radius:8px;border-bottom-right-radius:8px}.bx--content-switcher-btn:last-of-type:hover{border-color:#5596e6}.bx--content-switcher-btn:last-of-type:focus{box-shadow:2px 0 0 0 #7cc7ff,0 2px 0 0 #7cc7ff,0 -2px 0 0 #7cc7ff;z-index:0}.bx--content-switcher-btn.bx--content-switcher--selected{background-color:#3d70b2;color:#fff;font-weight:400;outline:1px solid transparent}.bx--content-switcher-btn.bx--content-switcher--selected:hover{border-color:#3d70b2}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.flatpickr-calendar{background:transparent;overflow:hidden;max-height:0;opacity:0;visibility:hidden;text-align:center;padding:0;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:315px;box-sizing:border-box;touch-action:manipulation;background:#fff;box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;visibility:visible;overflow:visible;max-height:640px}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.hasWeeks{width:auto}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.rightMost:after{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:28px;line-height:1;text-align:center;position:relative;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.flatpickr-prev-month,.flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0px;line-height:16px;height:28px;padding:10px calc(3.57% - 1.5px);z-index:3}.flatpickr-prev-month i,.flatpickr-next-month i{position:relative}.flatpickr-prev-month.flatpickr-prev-month,.flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-prev-month.flatpickr-next-month,.flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-prev-month:hover,.flatpickr-next-month:hover{color:#959ea9}.flatpickr-prev-month:hover svg,.flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-prev-month svg,.flatpickr-next-month svg{width:14px}.flatpickr-prev-month svg path,.flatpickr-next-month svg path{transition:fill 0.1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.05);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute;top:33%}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6)}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6)}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:6.16px 0 0 0;line-height:1;height:28px;display:inline-block;text-align:center;transform:translate3d(0px, 0px, 0px)}.flatpickr-current-month.slideLeft{transform:translate3d(-100%, 0px, 0px);animation:fpFadeOut 400ms ease,fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-current-month.slideLeftNew{transform:translate3d(100%, 0px, 0px);animation:fpFadeIn 400ms ease,fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-current-month.slideRight{transform:translate3d(100%, 0px, 0px);animation:fpFadeOut 400ms ease,fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-current-month.slideRightNew{transform:translate3d(0, 0, 0px);animation:fpFadeIn 400ms ease,fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:0.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:default;padding:0 0 0 0.5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:baseline}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:315px;display:flex;align-items:center;height:28px}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:flex;width:315px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:315px;min-width:315px;max-width:315px;box-sizing:border-box;display:inline-block;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;justify-content:space-around;transform:translate3d(0px, 0px, 0px);opacity:1}.flatpickr-calendar.animate .dayContainer.slideLeft{animation:fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.animate .dayContainer.slideLeft,.flatpickr-calendar.animate .dayContainer.slideLeftNew{transform:translate3d(-100%, 0px, 0px)}.flatpickr-calendar.animate .dayContainer.slideLeftNew{animation:fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.animate .dayContainer.slideRight{animation:fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);transform:translate3d(100%, 0px, 0px)}.flatpickr-calendar.animate .dayContainer.slideRightNew{animation:fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;flex-basis:14.2857143%;max-width:40px;height:40px;line-height:40px;margin:0;display:inline-block;position:relative;justify-content:center;text-align:center}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 0 #569ff7, 5px 0 0 #569ff7}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{display:inline-block;float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day{display:block;width:100%;max-width:none}.flatpickr-innerContainer{display:block;display:flex;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;cursor:pointer;color:#393939;font-size:14px;position:relative;box-sizing:border-box}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;display:inline-block;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time .flatpickr-am-pm:focus{background:#f0f0f0}.flatpickr-input[readonly]{cursor:pointer}@keyframes fpFadeInDown{from{opacity:0;transform:translate3d(0, -20px, 0)}to{opacity:1;transform:translate3d(0, 0, 0)}}@keyframes fpSlideLeft{from{transform:translate3d(0px, 0px, 0px)}to{transform:translate3d(-100%, 0px, 0px)}}@keyframes fpSlideLeftNew{from{transform:translate3d(100%, 0px, 0px)}to{transform:translate3d(0px, 0px, 0px)}}@keyframes fpSlideRight{from{transform:translate3d(0, 0, 0px)}to{transform:translate3d(100%, 0px, 0px)}}@keyframes fpSlideRightNew{from{transform:translate3d(-100%, 0, 0px)}to{transform:translate3d(0, 0, 0px)}}@keyframes fpFadeOut{from{opacity:1}to{opacity:0}}@keyframes fpFadeIn{from{opacity:0}to{opacity:1}}.bx--date-picker{display:flex;align-items:flex-start}.bx--date-picker-container{position:relative}.bx--date-picker.bx--date-picker--simple .bx--date-picker__input{width:7.125rem}.bx--date-picker.bx--date-picker--simple.bx--date-picker--short .bx--date-picker__input{width:5.7rem}.bx--date-picker.bx--date-picker--single .bx--date-picker__input{width:9rem}.bx--date-picker__input{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;display:block;position:relative;height:2.5rem;max-width:9rem;padding:0 1rem;background-color:rgba(61,112,178,0.1);color:#152935;border:1px solid transparent}.bx--date-picker__input:focus,.bx--date-picker__input.bx--focused{outline:1px solid #3d70b2}.bx--date-picker__input:disabled{opacity:0.5;cursor:not-allowed}.bx--date-picker__input:disabled:hover{border:1px solid transparent}.bx--date-picker__input::-webkit-input-placeholder{color:#5a6872}.bx--date-picker__icon{position:absolute;top:2.25rem;left:1rem;fill:#3d70b2;cursor:pointer;z-index:1}.bx--date-picker__icon+.bx--date-picker__input{padding-left:3rem}.bx--date-picker--range{display:flex;position:relative}.bx--date-picker--range>.bx--date-picker-container:first-child{margin-right:.5rem}.bx--date-picker--range .bx--date-picker__icon{right:-1.75rem;left:auto}.bx--date-picker--range .bx--date-picker__input{width:7.075rem}.bx--date-picker__calendar,.flatpickr-calendar.open{box-shadow:0 12px 24px 0 rgba(0,0,0,0.1);background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem 1rem .25rem;width:17.8125rem !important;height:14.375rem;border-radius:0;border:none;overflow:hidden;margin-top:-1px}.bx--date-picker__calendar:before,.bx--date-picker__calendar:after,.flatpickr-calendar.open:before,.flatpickr-calendar.open:after{display:none}.bx--date-picker__calendar:focus,.flatpickr-calendar.open:focus{outline:1px solid #3d70b2}.bx--date-picker__month,.flatpickr-month{width:100%;margin-bottom:.25rem}.bx--date-picker__month .flatpickr-prev-month,.bx--date-picker__month .flatpickr-next-month,.flatpickr-month .flatpickr-prev-month,.flatpickr-month .flatpickr-next-month{padding:0;line-height:1.25rem;fill:#152935}.bx--date-picker__month .flatpickr-prev-month:hover svg,.bx--date-picker__month .flatpickr-next-month:hover svg,.flatpickr-month .flatpickr-prev-month:hover svg,.flatpickr-month .flatpickr-next-month:hover svg{fill:#3d70b2}.bx--date-picker__month .flatpickr-current-month,.flatpickr-month .flatpickr-current-month{font-size:0.75rem;text-transform:uppercase;padding:0}.bx--date-picker__month .flatpickr-current-month svg,.flatpickr-month .flatpickr-current-month svg{fill:#152935}.bx--date-picker__month .flatpickr-current-month .cur-month,.flatpickr-month .flatpickr-current-month .cur-month{margin-right:0.25rem;color:#152935}.numInputWrapper,.flatpickr-current-month .numInputWrapper{min-width:2.375rem;width:2.375rem}.bx--date-picker__month .numInputWrapper .numInput,.flatpickr-month .numInputWrapper .numInput{font-weight:600;color:#152935;background-color:rgba(61,112,178,0.1);border:none;border-radius:0;min-width:2.375rem;width:2.375rem;padding:.25rem}.bx--date-picker__month .numInputWrapper .numInput:focus,.flatpickr-month .numInputWrapper .numInput:focus{outline:1px solid #3d70b2}.bx--date-picker__month .numInputWrapper span.arrowUp,.bx--date-picker__month .numInputWrapper span.arrowDown,.flatpickr-month .numInputWrapper span.arrowUp,.flatpickr-month .numInputWrapper span.arrowDown{left:2.6rem;border:none;width:.75rem}.bx--date-picker__month .numInputWrapper span.arrowUp:hover,.bx--date-picker__month .numInputWrapper span.arrowDown:hover,.flatpickr-month .numInputWrapper span.arrowUp:hover,.flatpickr-month .numInputWrapper span.arrowDown:hover{background:none}.bx--date-picker__month .numInputWrapper span.arrowUp:hover:after,.bx--date-picker__month .numInputWrapper span.arrowDown:hover:after,.flatpickr-month .numInputWrapper span.arrowUp:hover:after,.flatpickr-month .numInputWrapper span.arrowDown:hover:after{border-bottom-color:#5596e6;border-top-color:#5596e6}.bx--date-picker__month .numInputWrapper span.arrowUp:after,.bx--date-picker__month .numInputWrapper span.arrowDown:after,.flatpickr-month .numInputWrapper span.arrowUp:after,.flatpickr-month .numInputWrapper span.arrowDown:after{border-bottom-color:#3d70b2;border-top-color:#3d70b2}.bx--date-picker__month .numInputWrapper span.arrowUp,.flatpickr-month .numInputWrapper span.arrowUp{top:1px}.bx--date-picker__month .numInputWrapper span.arrowDown,.flatpickr-month .numInputWrapper span.arrowDown{top:9px}span.bx--date-picker__weekday,span.flatpickr-weekday{font-size:0.75rem;font-weight:600;color:#152935}.bx--date-picker__day,.flatpickr-day{font-size:0.75rem;height:1.5625rem;width:1.8rem;line-height:1.5625rem;flex-basis:1.8rem;margin:.03125rem 0;display:flex;align-items:center;justify-content:center;color:#152935;border-radius:0}.bx--date-picker__day:hover,.flatpickr-day:hover{background:#dfe3e6}.bx--date-picker__day:focus,.flatpickr-day:focus{outline:none;background:#dfe3e6}.bx--date-picker__day.today,.flatpickr-day.today{border:2px solid #3d70b2}.bx--date-picker__day.today.no-border,.flatpickr-day.today.no-border{border:none}.bx--date-picker__day.disabled,.flatpickr-day.disabled{cursor:not-allowed;color:#8c9ba5}.bx--date-picker__day.disabled:hover,.flatpickr-day.disabled:hover{background:transparent}.bx--date-picker__day.inRange,.flatpickr-day.inRange{background:#5596e6;box-shadow:-6px 0 0 #5596e6,6px 0 0 #5596e6;border:2px solid transparent}.bx--date-picker__day.selected,.flatpickr-day.selected{background:#3d70b2;color:#fff;border:2px solid transparent}.bx--date-picker__day.startRange.selected,.flatpickr-day.startRange.selected{box-shadow:none;z-index:2}.bx--date-picker__day.endRange.inRange,.flatpickr-day.endRange.inRange{background:#fff;color:#152935;border:2px solid #3d70b2;z-index:3;box-shadow:none}.bx--date-picker__day.endRange.inRange.selected,.flatpickr-day.endRange.inRange.selected{background:#3d70b2;border:none;color:#fff;box-shadow:none}.bx--date-picker__day.startRange.inRange:not(.selected),.flatpickr-day.startRange.inRange:not(.selected){box-shadow:none;background:#fff;border:2px solid #3d70b2;z-index:3}.bx--date-picker__days,.dayContainer{width:14.0625rem;min-width:14.0625rem;max-width:14.0625rem;height:8.25rem}.flatpickr-innerContainer,.flatpickr-rContainer{width:14.0625rem;height:10.5rem}.bx--date-picker__weekdays,.flatpickr-weekdays,.flatpickr-weekdaycontainer{width:14.0625rem;margin-bottom:.25rem}.flatpickr-weekdaycontainer{display:flex}.flatpickr-months{display:flex;width:100%;position:relative}.flatpickr-prev-month,.flatpickr-next-month{padding-top:5px}.bx--date-picker.bx--skeleton input,.bx--date-picker__input.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:100%}.bx--date-picker.bx--skeleton input:hover,.bx--date-picker.bx--skeleton input:focus,.bx--date-picker.bx--skeleton input:active,.bx--date-picker__input.bx--skeleton:hover,.bx--date-picker__input.bx--skeleton:focus,.bx--date-picker__input.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--date-picker.bx--skeleton input:before,.bx--date-picker__input.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--date-picker.bx--skeleton input::-webkit-input-placeholder,.bx--date-picker__input.bx--skeleton::-webkit-input-placeholder{color:transparent}.bx--date-picker.bx--skeleton .bx--label{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:4.6875rem;height:.875rem}.bx--date-picker.bx--skeleton .bx--label:hover,.bx--date-picker.bx--skeleton .bx--label:focus,.bx--date-picker.bx--skeleton .bx--label:active{border:none;outline:none;cursor:default}.bx--date-picker.bx--skeleton .bx--label:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--tabs{font-size:0.875rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;color:#152935;font-weight:600;height:auto;width:100%;position:relative}@media screen and (min-width: 768px){.bx--tabs{background:none;min-height:3.0625rem}}.bx--tabs-trigger{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;height:2.5rem;cursor:pointer;background-color:rgba(61,112,178,0.1)}.bx--tabs-trigger svg{width:.75rem;height:.75rem;fill:#3d70b2}.bx--tabs-trigger:focus{outline:1px solid #3d70b2}@media screen and (min-width: 768px){.bx--tabs-trigger{display:none}}.bx--tabs-trigger-text{text-decoration:none;font-weight:600;color:#152935}.bx--tabs-trigger-text:focus{outline:1px solid #3d70b2}.bx--tabs__nav{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);margin:0;padding:0;position:absolute;width:100%;list-style:none;display:flex;flex-direction:column;z-index:7000}@media screen and (min-width: 768px){.bx--tabs__nav{font-size:1rem;flex-direction:row;margin-right:1rem;margin-left:1rem;background:none;box-shadow:none;z-index:auto}}@media screen and (min-width: 1200px){.bx--tabs__nav{margin-left:0}}.bx--tabs__nav--hidden{display:none}@media screen and (min-width: 768px){.bx--tabs__nav--hidden{display:flex}}.bx--tabs__nav-item{font-size:0.875rem;background-color:#fff;padding:0;cursor:pointer}.bx--tabs__nav-item:hover,.bx--tabs__nav-item:focus{background-color:#3d70b2}@media screen and (min-width: 768px){.bx--tabs__nav-item:hover,.bx--tabs__nav-item:focus{outline:1px solid transparent;background:transparent}}@media screen and (min-width: 768px){.bx--tabs__nav-item{background:transparent;padding:.75rem 0 .75rem}.bx--tabs__nav-item+.bx--tabs__nav-item{margin-left:3rem}}.bx--tabs__nav-item--selected{border:none}@media screen and (min-width: 768px){.bx--tabs__nav-item--selected{border-bottom:2px solid #3d70b2}.bx--tabs__nav-item--selected .bx--tabs__nav-link{color:#3d70b2}.bx--tabs__nav-item--selected .bx--tabs__nav-link:focus{color:#3d70b2}}.bx--tabs__nav-item:hover .bx--tabs__nav-link{color:#fff}@media screen and (min-width: 768px){.bx--tabs__nav-item:hover .bx--tabs__nav-link{color:#3d70b2}}.bx--tabs__nav-link{display:inline-block;color:#152935;text-decoration:none;padding:1rem;width:100%;white-space:nowrap;text-overflow:ellipsis}.bx--tabs__nav-link:focus{outline:1px solid transparent;background-color:#3d70b2;color:#fff}@media screen and (min-width: 768px){.bx--tabs__nav-link{padding:0 .125rem;width:auto}.bx--tabs__nav-link:hover{color:#3d70b2}.bx--tabs__nav-link:focus{background-color:transparent;color:#152935;outline:1px solid transparent;box-shadow:0 0 0 1px #3d70b2}}.bx--tabs.bx--skeleton{pointer-events:none;cursor:default}.bx--tabs.bx--skeleton .bx--tabs__nav-link{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:4.6875rem;height:.75rem}.bx--tabs.bx--skeleton .bx--tabs__nav-link:hover,.bx--tabs.bx--skeleton .bx--tabs__nav-link:focus,.bx--tabs.bx--skeleton .bx--tabs__nav-link:active{border:none;outline:none;cursor:default}.bx--tabs.bx--skeleton .bx--tabs__nav-link:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--tabs.bx--skeleton .bx--tabs-trigger{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:6.25rem}.bx--tabs.bx--skeleton .bx--tabs-trigger:hover,.bx--tabs.bx--skeleton .bx--tabs-trigger:focus,.bx--tabs.bx--skeleton .bx--tabs-trigger:active{border:none;outline:none;cursor:default}.bx--tabs.bx--skeleton .bx--tabs-trigger:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--tabs.bx--skeleton .bx--tabs-trigger svg{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--breadcrumb{font-size:0.875rem;font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:inline}@media screen and (min-width: 500px){.bx--breadcrumb{display:flex;flex-wrap:wrap}}.bx--breadcrumb-item{margin-right:1rem;display:flex;align-items:center}.bx--breadcrumb-item::after{content:'/';margin-left:1rem;color:#5a6872}.bx--breadcrumb--no-trailing-slash .bx--breadcrumb-item:last-child::after{content:''}.bx--breadcrumb-item:last-child{margin-right:0}.bx--breadcrumb-item:last-child::after{margin-right:0}.bx--breadcrumb .bx--link{white-space:nowrap;font-weight:400;text-decoration:none;border-bottom:1px solid transparent}.bx--breadcrumb .bx--link:hover,.bx--breadcrumb .bx--link:focus{outline:none;color:#3d70b2;border-bottom:1px solid #3d70b2}@-moz-document url-prefix(){.bx--breadcrumb .bx--link{border-bottom:none}}.bx--breadcrumb.bx--skeleton .bx--link{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:6.25rem;height:1rem}.bx--breadcrumb.bx--skeleton .bx--link:hover,.bx--breadcrumb.bx--skeleton .bx--link:focus,.bx--breadcrumb.bx--skeleton .bx--link:active{border:none;outline:none;cursor:default}.bx--breadcrumb.bx--skeleton .bx--link:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--detail-page-header--no-tabs{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;justify-content:space-between;position:fixed;top:5.375rem;transition:transform 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s,max-height 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s,box-shadow 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s,height 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s;will-change:transform, height, max-height, box-shadow;z-index:6000;max-height:4.125rem;height:4.125rem;left:12.5rem;background-color:#f5f7fa;width:calc(100% - 200px);padding:0.875rem 3%}.bx--detail-page-header--no-tabs[data-header-active='true']{box-shadow:0 6px 12px 0 rgba(0,0,0,0.1)}@media screen and (min-width: 768px){.bx--detail-page-header--no-tabs{padding:0.75rem 5%;height:5.5rem;max-height:5.5rem}}.bx--detail-page-header--with-tabs{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;justify-content:space-between;position:fixed;top:5.375rem;transition:transform 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s,max-height 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s,box-shadow 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s,height 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s;will-change:transform, height, max-height, box-shadow;z-index:6000;min-height:4.125rem;background-color:#fff;padding:0.75rem 3% 0;left:0;width:100%}.bx--detail-page-header--with-tabs[data-header-active='true']{box-shadow:0 6px 12px 0 rgba(0,0,0,0.1)}@media screen and (min-width: 768px){.bx--detail-page-header--with-tabs{padding:0.75rem 5% 0;height:7.75rem}}.bx--detail-page-header .bx--breadcrumb{display:inline;transition:opacity 250ms cubic-bezier(0.5, 0, 0.1, 1) 150ms,visibility 250ms cubic-bezier(0.5, 0, 0.1, 1) 150ms,transform 250ms cubic-bezier(0.5, 0, 0.1, 1) 0s;will-change:opacity, visibility, transform}@media screen and (min-width: 768px){.bx--detail-page-header .bx--breadcrumb{display:flex;flex-wrap:nowrap}}.bx--detail-page-header--no-tabs .bx--breadcrumb{margin-bottom:0.75rem;transform:translate3d(0, 0, 0)}.bx--detail-page-header-title-container{display:flex;align-items:center;min-height:2.25rem;height:2.25rem;transition:transform 300ms cubic-bezier(0.5, 0, 0.1, 1) 0s}@media screen and (min-width: 768px){.bx--detail-page-header-title-container{padding-bottom:0}}.bx--detail-page-header--with-tabs .bx--detail-page-header-title-container{margin-top:.1875rem}@media screen and (min-width: 768px){.bx--detail-page-header--with-tabs .bx--detail-page-header-title-container{margin-top:0.5rem}}.bx--detail-page-header--no-tabs .bx--detail-page-header-title-container{padding-bottom:0}.bx--detail-page-header-content{width:100%;display:flex;flex-direction:column}@media screen and (min-width: 768px){.bx--detail-page-header-content{justify-content:space-between}}.bx--detail-page-header-icon-container{display:inline-flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #8c9ba5;height:2.25rem;width:2.25rem;margin-right:0.625rem}.bx--detail-page-header-title{font-size:1.25rem;font-weight:300;color:#5a6872}@media screen and (min-width: 768px){.bx--detail-page-header-title{font-size:1.75rem}}.bx--detail-page-header-status-container{display:inline;margin-top:.5rem}@media screen and (min-width: 768px){.bx--detail-page-header-status-container{display:inline-block}}.bx--detail-page-header-status-icon{display:inline-block;border-radius:50%;height:.75rem;width:.75rem;background-color:#5aa700;margin-left:0.625rem}.bx--detail-page-header-menu{position:absolute;right:0.75rem;display:flex;align-items:flex-start;transition:top 250ms cubic-bezier(0.5, 0, 0.1, 1) 0s,transform 250ms cubic-bezier(0.5, 0, 0.1, 1) 0s;will-change:transform, top}@media screen and (min-width: 768px){.bx--detail-page-header-menu{align-items:center;top:50%;transform:translate3d(0, -50%, 0)}}.bx--detail-page-header .bx--tabs{transition:opacity 250ms cubic-bezier(0.5, 0, 0.1, 1) 150ms,visibility 250ms cubic-bezier(0.5, 0, 0.1, 1) 150ms;will-change:opacity, visibility, transform}.bx--detail-page-header--with-tabs .bx--tabs{padding:0.75rem 0;display:inline}@media screen and (min-width: 768px){.bx--detail-page-header--with-tabs .bx--tabs{display:block;padding:0;min-height:2.875rem}}.bx--detail-page-header--with-tabs .bx--tabs__nav{margin-left:0}.bx--detail-page-header--with-tabs .bx--tabs__nav-link{white-space:nowrap}.bx--detail-page-header--scroll .bx--breadcrumb,.bx--detail-page-header--scroll .bx--tabs{transition-delay:0s}@media screen and (min-width: 768px){.bx--detail-page-header--scroll .bx--breadcrumb,.bx--detail-page-header--scroll .bx--tabs{opacity:0;visibility:hidden}}.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs{padding:0.75rem 3% 0;transition-delay:150ms}@media screen and (min-width: 768px){.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs{padding:0.75rem 5% 0;transform:translate3d(0, -50%, 0)}}.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs .bx--tabs{display:block}.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs .bx--detail-page-header-menu{transition-delay:150ms}@media screen and (min-width: 768px){.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs .bx--detail-page-header-menu{top:75%}}.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs .bx--detail-page-header-title-container{transition-delay:150ms}@media screen and (min-width: 768px){.bx--detail-page-header--scroll.bx--detail-page-header--with-tabs .bx--detail-page-header-title-container{transform:translate3d(0, 100%, 0)}}@media screen and (min-width: 768px){.bx--detail-page-header--scroll.bx--detail-page-header--no-tabs{transform:translate3d(0, -1.375rem, 0)}}.bx--detail-page-header--scroll.bx--detail-page-header--no-tabs .bx--breadcrumb{transform:translate3d(0, -100%, 0);transition-delay:0s;margin-bottom:0}.bx--detail-page-header--scroll.bx--detail-page-header--no-tabs .bx--detail-page-header-title-container{padding:0}@media screen and (min-width: 768px){.bx--detail-page-header--scroll.bx--detail-page-header--no-tabs .bx--detail-page-header-title-container{margin-bottom:.1875rem}}@media screen and (min-width: 768px){.bx--detail-page-header--scroll.bx--detail-page-header--no-tabs .bx--detail-page-header-menu{transform:translate3d(0, -.5rem, 0)}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--dropdown{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;position:relative;list-style:none;display:block;background-color:rgba(61,112,178,0.1);width:100%;height:2.5rem;cursor:pointer;color:#152935}.bx--dropdown:focus{outline:1px solid #3d70b2}.bx--dropdown.bx--dropdown--open:focus{outline:1px solid transparent;box-shadow:0 -1px 0 0 #3d70b2,1px 0 0 0 #3d70b2,-1px 0 0 0 #3d70b2}.bx--dropdown--up.bx--dropdown--open:focus{box-shadow:0 1px 0 0 #3d70b2,1px 0 0 0 #3d70b2,-1px 0 0 0 #3d70b2}.bx--dropdown--up.bx--dropdown--open:focus .bx--dropdown-list{box-shadow:0 -1px 0 0 #3d70b2,1px 0 0 0 #3d70b2,-1px 0 0 0 #3d70b2}.bx--dropdown--up .bx--dropdown-list{bottom:2.5rem}.bx--dropdown__arrow{fill:#3d70b2;position:absolute;right:1rem;top:1.175rem;width:.625rem;height:.3125rem;pointer-events:none;transition:transform 300ms cubic-bezier(0.5, 0, 0.1, 1);transform-origin:50% 45%}.bx--dropdown[data-value=''] .bx--dropdown-text{color:#152935}.bx--dropdown-text{height:2.5rem;padding-top:.8125rem;padding-bottom:.8125rem;padding-left:1rem;padding-right:2.5rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border:1px solid transparent}.bx--dropdown-list{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);font-size:0.875rem;background-color:#fff;display:flex;flex-direction:column;width:100%;list-style:none;position:absolute;z-index:7000;max-height:0;transition:max-height 300ms cubic-bezier(0, 0, 0.25, 1);overflow:hidden}.bx--dropdown-item{transition:opacity 300ms cubic-bezier(0, 0, 0.25, 1);opacity:0}.bx--dropdown-link{display:block;color:currentColor;text-decoration:none;font-weight:normal;padding:1rem 1.5rem 1rem 1rem;text-overflow:ellipsis;overflow:hidden}.bx--dropdown-link:hover,.bx--dropdown-link:focus{background-color:rgba(61,112,178,0.1);color:#152935;outline:1px solid transparent;text-decoration:underline;color:#152935}.bx--dropdown--selected{display:none}.bx--dropdown--open .bx--dropdown__arrow{transform:rotate(-180deg)}.bx--dropdown--open .bx--dropdown-list{max-height:15rem}.bx--dropdown--open .bx--dropdown-list:hover{overflow:auto}.bx--dropdown--open:focus .bx--dropdown-list{box-shadow:0 1px 0 0 #3d70b2,1px 0 0 0 #3d70b2,-1px 0 0 0 #3d70b2}.bx--dropdown--open .bx--dropdown-item{opacity:1}.bx--dropdown--disabled{opacity:0.5;cursor:not-allowed}.bx--dropdown--disabled:focus{outline:none}.bx--dropdown--inline{background-color:transparent}.bx--dropdown--inline:focus{outline:none}.bx--dropdown--inline:focus .bx--dropdown-text{outline:1px solid #3d70b2}.bx--dropdown--inline[data-value=''] .bx--dropdown-text{color:#3d70b2}.bx--dropdown--inline .bx--dropdown-text{display:inline-block;padding-right:1.5rem;overflow:visible;color:#3d70b2}.bx--dropdown--inline .bx--dropdown-text:hover{background-color:rgba(61,112,178,0.1)}.bx--dropdown--inline.bx--dropdown--open:focus{box-shadow:none}.bx--dropdown--inline.bx--dropdown--open:focus .bx--dropdown-list{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1)}.bx--dropdown--inline.bx--dropdown--open:focus .bx--dropdown-text{outline:none}.bx--dropdown--inline .bx--dropdown__arrow{position:relative;top:-2px;left:8px;right:0;bottom:0}.bx--dropdown--inline .bx--dropdown-link{font-weight:normal}.bx--dropdown--inline .bx--dropdown-link:hover{background-color:rgba(61,112,178,0.1);color:#152935}.bx--dropdown-v2.bx--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1)}.bx--dropdown-v2.bx--skeleton:hover,.bx--dropdown-v2.bx--skeleton:focus,.bx--dropdown-v2.bx--skeleton:active{border:none;outline:none;cursor:default}.bx--dropdown-v2.bx--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes rotate-end-p1{100%{transform:rotate(360deg)}}@keyframes rotate-end-p2{100%{transform:rotate(-360deg)}}@keyframes init-stroke{0%{stroke-dashoffset:240}100%{stroke-dashoffset:40}}@keyframes stroke-end{0%{stroke-dashoffset:40}100%{stroke-dashoffset:240}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--modal{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1;display:flex;align-items:center;justify-content:center;content:'';opacity:0;background-color:rgba(240,243,246,0.5);transition:opacity 200ms, z-index 0s 200ms, visibility 0s 200ms;visibility:hidden}.bx--modal.is-visible{z-index:9000;opacity:1;transition:opacity 200ms;visibility:visible}.bx--modal--danger .bx--modal-container{border-top-color:#e0182d}.bx--modal-container{box-shadow:0 12px 24px 0 rgba(0,0,0,0.1);position:relative;display:flex;flex-direction:column;background-color:#fff;border-top:#3d70b2 4px solid;min-width:100%;max-height:100%;height:100%;padding:2rem 3% 0rem 3%}@media (min-width: 600px){.bx--modal-container{height:auto;min-width:500px;max-width:75%;max-height:90%;padding:2.5rem 3rem 0 3rem}}@media (min-width: 1024px){.bx--modal-container{max-width:50%;max-height:80%}}.bx--modal-header{margin-bottom:1.5rem}.bx--modal-header__label{font-size:0.75rem;letter-spacing:0;color:#152935;font-weight:600;text-transform:uppercase;margin-bottom:.5rem}.bx--modal-header__heading{font-size:1.75rem;font-weight:300;color:#5a6872}.bx--modal-content{overflow-y:auto;margin-bottom:3rem}.bx--modal-footer{margin-top:auto;text-align:right;background-color:#f0f3f6;margin-left:-1.5rem;margin-right:-1.5rem;padding:2rem 2rem}@media (min-width: 600px){.bx--modal-footer{margin-left:-3rem;margin-right:-3rem;padding:2rem 3rem}}.bx--modal-close{position:absolute;top:1rem;right:1rem;padding:0;overflow:hidden;cursor:pointer;background-color:transparent;border:none;padding:0.25rem 0.25rem 0.125rem}.bx--modal-close:focus{outline:1px solid #3d70b2}.bx--modal-close__icon{transition:200ms;fill:#8c9ba5;width:.75rem;height:.75rem}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--module{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;flex-direction:column;padding:.625rem;flex:1 0 auto;margin:0}.bx--module .bx--module__inner{box-shadow:0 1px 2px 0 rgba(0,0,0,0.1);background-color:#fff;border:1px solid transparent}.bx--module .bx--module__header{display:flex;align-items:center;padding:1rem 1.5rem;border-bottom:1px solid #dfe3e6}.bx--module .bx--module__title{font-size:0.875rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;font-weight:600;color:#152935}.bx--module .bx--module__content{display:flex;flex-direction:column;flex:3;padding:1.5rem}.bx--module .bx--module__content p{font-size:0.875rem}.bx--module .bx--module__content--centered{align-items:center;justify-content:center;padding:5rem}.bx--module .bx--module__content--scrollable{max-height:18.75rem;overflow-y:scroll;margin-bottom:2rem}.bx--module.bx--module--single{max-width:31.25rem}.bx--module.bx--module--double{max-width:62.5rem}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--multi-select.bx--combo-box>.bx--list-box__field{padding:0 1rem}.bx--multi-select.bx--combo-box input[role='combobox']{padding:0;outline:none}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--inline-notification{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:0.875rem;display:flex;justify-content:space-between;background-color:transparent;padding:.75rem 1rem;min-height:2.5rem;color:#5a6872;margin-top:1rem;margin-bottom:1rem}.bx--inline-notification--error{border:1px solid #e0182d;border-left:6px solid #e0182d}.bx--inline-notification--error .bx--inline-notification__icon{fill:#e0182d}.bx--inline-notification--success{border:1px solid #5aa700;border-left:6px solid #5aa700}.bx--inline-notification--success .bx--inline-notification__icon{fill:#5aa700}.bx--inline-notification--info{border:1px solid #5aaafa;border-left:6px solid #5aaafa}.bx--inline-notification--info .bx--inline-notification__icon{fill:#5aaafa}.bx--inline-notification--warning{border:1px solid #efc100;border-left:6px solid #efc100}.bx--inline-notification--warning .bx--inline-notification__icon{fill:#efc100}.bx--inline-notification__details{display:flex;align-items:center}.bx--inline-notification__icon{height:16px;width:16px;min-width:22px}.bx--inline-notification__text-wrapper{display:flex;flex-wrap:wrap;margin:0 1rem}@media (max-width: 640px){.bx--inline-notification__text-wrapper{flex-direction:column;width:100%}}.bx--inline-notification__title{font-size:0.875rem;font-weight:600;margin:0 .25rem 0 0;line-height:1.125}.bx--inline-notification__subtitle{font-size:0.875rem;line-height:1.125}.bx--inline-notification__close-button{background-color:transparent;border:none;cursor:pointer;padding:0;height:16px;width:12px;position:relative}.bx--inline-notification__close-button:focus{outline:1px solid #3d70b2}.bx--inline-notification__close-icon{height:10px;width:10px;fill:#5a6872;position:absolute;top:3px;right:1px}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--toast-notification{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);display:flex;justify-content:space-between;width:16.875rem;padding:1rem 1rem .5rem 1rem;background-color:#fff;color:#152935;margin-top:.5rem;margin-bottom:.5rem;margin-right:1rem}.bx--toast-notification:first-child{margin-top:1rem}.bx--toast-notification--error{border-left:6px solid #e0182d}.bx--toast-notification--success{border-left:6px solid #5aa700}.bx--toast-notification--info{border-left:6px solid #5aaafa}.bx--toast-notification--warning{border-left:6px solid #efc100}.bx--toast-notification__close-button{background-color:#fff;border:none;cursor:pointer;margin:0;width:12px;height:12px;position:relative}.bx--toast-notification__close-button:focus{outline:1px solid #3d70b2}.bx--toast-notification__icon{height:10px;width:10px;fill:#5a6872;position:absolute;top:1px;right:1px}.bx--toast-notification__title{font-size:0.875rem;letter-spacing:0;font-weight:600;line-height:1;padding-bottom:.125rem}.bx--toast-notification__subtitle{font-size:0.75rem;color:#5a6872;margin-top:0;margin-bottom:1rem;line-height:1.2}.bx--toast-notification__caption{font-size:0.75rem;color:#5a6872;line-height:1}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--tooltip--simple{display:flex;align-items:center}.bx--tooltip__trigger{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:1rem;display:inline-flex;align-items:center;color:#152935;font-weight:600}.bx--tooltip__trigger svg{fill:#3d70b2;margin-left:.5rem;cursor:pointer}.bx--tooltip__trigger svg:focus{outline:1px solid #3d70b2;fill:#5596e6}.bx--tooltip__trigger:hover svg,.bx--tooltip__trigger:focus svg{fill:#5596e6}.bx--tooltip{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);position:absolute;display:none;max-width:15rem;background:#fff;padding:1.5rem;border:1px solid #dfe3e6;z-index:10000;word-wrap:break-word}.bx--tooltip p{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem}.bx--tooltip .bx--tooltip__label{font-weight:600;margin-bottom:.5rem}.bx--tooltip:before{position:absolute;background:#fff;left:0;top:-.375rem;right:0;transform:rotate(-135deg);width:0.6rem;height:0.6rem;border-right:1px solid #dfe3e6;border-bottom:1px solid #dfe3e6;margin:0 auto;content:''}.bx--tooltip[data-floating-menu-direction='left']{margin-left:-.75rem}.bx--tooltip[data-floating-menu-direction='left']:before{left:auto;top:44.7%;right:-.375rem;transform:rotate(-45deg)}.bx--tooltip[data-floating-menu-direction='top']:before{top:auto;bottom:-.375rem;transform:rotate(45deg)}.bx--tooltip[data-floating-menu-direction='right']{margin-left:.75rem}.bx--tooltip[data-floating-menu-direction='right']:before{left:-.375rem;top:44.7%;right:auto;transform:rotate(135deg)}.bx--tooltip--shown{display:block}.bx--tooltip--simple__top,.bx--tooltip--simple__bottom{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:1.125rem;position:relative;display:inline-flex;align-items:center;cursor:pointer}.bx--tooltip--simple__top svg,.bx--tooltip--simple__bottom svg{fill:#3d70b2;margin-left:.5rem}.bx--tooltip--simple__top:before,.bx--tooltip--simple__top:after,.bx--tooltip--simple__bottom:before,.bx--tooltip--simple__bottom:after{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;position:absolute;display:none;background:#fff}.bx--tooltip--simple__top:before,.bx--tooltip--simple__bottom:before{font-size:0.875rem;box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);max-width:15rem;padding:1.5rem;border:1px solid #dfe3e6;margin-left:50%;color:#152935;content:attr(data-tooltip-text);transform:translateX(-50%);white-space:nowrap;pointer-events:none}.bx--tooltip--simple__top:after,.bx--tooltip--simple__bottom:after{right:0;left:0;width:0.6rem;height:0.6rem;border-right:1px solid #dfe3e6;border-bottom:1px solid #dfe3e6;margin:0 auto;content:''}.bx--tooltip--simple__top:hover svg,.bx--tooltip--simple__top:focus svg,.bx--tooltip--simple__bottom:hover svg,.bx--tooltip--simple__bottom:focus svg{fill:#5596e6}.bx--tooltip--simple__top:hover:before,.bx--tooltip--simple__top:hover:after,.bx--tooltip--simple__top:focus:before,.bx--tooltip--simple__top:focus:after,.bx--tooltip--simple__bottom:hover:before,.bx--tooltip--simple__bottom:hover:after,.bx--tooltip--simple__bottom:focus:before,.bx--tooltip--simple__bottom:focus:after{position:absolute;display:block}.bx--tooltip--simple__top:focus,.bx--tooltip--simple__bottom:focus{outline:1px solid transparent}.bx--tooltip--simple__top:focus svg,.bx--tooltip--simple__bottom:focus svg{outline:1px solid #3d70b2}.bx--tooltip--simple__top:before{bottom:1.8rem}.bx--tooltip--simple__top:after{bottom:1.5rem;transform:rotate(45deg)}.bx--tooltip--simple__bottom:before{top:1.8rem}.bx--tooltip--simple__bottom:after{top:1.5rem;transform:rotate(-135deg)}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--tag{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.75rem;display:inline-flex;align-items:center;padding:0 .5rem;height:1.25rem;margin:.125rem;border-radius:.9375rem}.bx--tag:not(:first-child){margin-left:0}.bx--tag--ibm{background-color:#c0e6ff;color:#325c80}.bx--tag--beta{background-color:#dfe3e6;color:#394b54}.bx--tag--third-party{background-color:#a7fae6;color:#006d5d}.bx--tag--local,.bx--tag--dedicated,.bx--tag--custom{background-color:#eed2ff;color:#734098}.bx--tag--experimental{background-color:#ffd4a0;color:#a53725}.bx--tag--community{background-color:#c8f08f;color:#2d660a}.bx--tag--private{background-color:#fde876;color:#735f00}.bx--tag.bx--skeleton{background-color:#dfe3e6;color:#394b54;width:3.75rem}.bx--tag.bx--skeleton:after{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);content:'';height:.375rem;width:100%}.bx--tag.bx--skeleton:after:hover,.bx--tag.bx--skeleton:after:focus,.bx--tag.bx--skeleton:after:active{border:none;outline:none;cursor:default}.bx--tag.bx--skeleton:after:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--left-nav__trigger{width:3.75rem;height:3.125rem;position:relative;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer;z-index:9999}.bx--left-nav__trigger:focus{outline:0}.bx--left-nav__trigger:hover,.bx--left-nav__trigger:focus{background-color:#5aaafa}.bx--left-nav__trigger:hover span,.bx--left-nav__trigger:hover span:before,.bx--left-nav__trigger:hover span:after,.bx--left-nav__trigger:focus span,.bx--left-nav__trigger:focus span:before,.bx--left-nav__trigger:focus span:after{background:#fff}.bx--left-nav__trigger--btn{position:absolute;top:1.5rem;left:1.25rem;width:100%;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);display:flex}.bx--left-nav__trigger--btn span,.bx--left-nav__trigger--btn span:before,.bx--left-nav__trigger--btn span:after{height:.125rem;width:1.25rem;cursor:pointer;position:absolute;display:block;content:'';transition:all 250ms ease}.bx--left-nav__trigger--btn span:before{top:-.375rem}.bx--left-nav__trigger--btn span:after{bottom:-.375rem}.bx--left-nav__trigger--active .bx--left-nav__trigger--btn{left:1.125rem}.bx--left-nav__trigger--active .bx--left-nav__trigger--btn span:before,.bx--left-nav__trigger--active .bx--left-nav__trigger--btn span:after{top:0;width:1.59125rem}.bx--left-nav__trigger--active .bx--left-nav__trigger--btn span:before{transform:rotate(45deg)}.bx--left-nav__trigger--active .bx--left-nav__trigger--btn span:after{transform:rotate(-45deg)}.bx--left-nav__trigger--apps span,.bx--left-nav__trigger--apps span:before,.bx--left-nav__trigger--apps span:after{background:#00b4a0}.bx--left-nav__trigger--apps:focus{outline:0}.bx--left-nav__trigger--apps:hover,.bx--left-nav__trigger--apps:focus{background-color:#008571}.bx--left-nav__trigger--apps:hover span,.bx--left-nav__trigger--apps:hover span:before,.bx--left-nav__trigger--apps:hover span:after,.bx--left-nav__trigger--apps:focus span,.bx--left-nav__trigger--apps:focus span:before,.bx--left-nav__trigger--apps:focus span:after{background:#fff}.bx--left-nav__trigger--apps.bx--left-nav__trigger--active span{background:transparent}.bx--left-nav__trigger--apps.bx--left-nav__trigger--active span:before,.bx--left-nav__trigger--apps.bx--left-nav__trigger--active span:after{background:#008571}.bx--left-nav__trigger--apps.bx--left-nav__trigger--active:hover,.bx--left-nav__trigger--apps.bx--left-nav__trigger--active:focus{background-color:#008571}.bx--left-nav__trigger--apps.bx--left-nav__trigger--active:hover span:before,.bx--left-nav__trigger--apps.bx--left-nav__trigger--active:hover span:after,.bx--left-nav__trigger--apps.bx--left-nav__trigger--active:focus span:before,.bx--left-nav__trigger--apps.bx--left-nav__trigger--active:focus span:after{background:#fff}.bx--left-nav__trigger--services span,.bx--left-nav__trigger--services span:before,.bx--left-nav__trigger--services span:after{background:#ba8ff7}.bx--left-nav__trigger--services:focus{outline:0}.bx--left-nav__trigger--services:hover,.bx--left-nav__trigger--services:focus{background-color:#734098}.bx--left-nav__trigger--services:hover span,.bx--left-nav__trigger--services:hover span:before,.bx--left-nav__trigger--services:hover span:after,.bx--left-nav__trigger--services:focus span,.bx--left-nav__trigger--services:focus span:before,.bx--left-nav__trigger--services:focus span:after{background:#fff}.bx--left-nav__trigger--services.bx--left-nav__trigger--active span{background:transparent}.bx--left-nav__trigger--services.bx--left-nav__trigger--active span:before,.bx--left-nav__trigger--services.bx--left-nav__trigger--active span:after{background:#734098}.bx--left-nav__trigger--services.bx--left-nav__trigger--active:hover,.bx--left-nav__trigger--services.bx--left-nav__trigger--active:focus{background-color:#734098}.bx--left-nav__trigger--services.bx--left-nav__trigger--active:hover span:before,.bx--left-nav__trigger--services.bx--left-nav__trigger--active:hover span:after,.bx--left-nav__trigger--services.bx--left-nav__trigger--active:focus span:before,.bx--left-nav__trigger--services.bx--left-nav__trigger--active:focus span:after{background:#fff}.bx--left-nav__trigger--infrastructure span,.bx--left-nav__trigger--infrastructure span:before,.bx--left-nav__trigger--infrastructure span:after{background:#5aaafa}.bx--left-nav__trigger--infrastructure:focus{outline:0}.bx--left-nav__trigger--infrastructure:hover,.bx--left-nav__trigger--infrastructure:focus{background-color:#3d70b2}.bx--left-nav__trigger--infrastructure:hover span,.bx--left-nav__trigger--infrastructure:hover span:before,.bx--left-nav__trigger--infrastructure:hover span:after,.bx--left-nav__trigger--infrastructure:focus span,.bx--left-nav__trigger--infrastructure:focus span:before,.bx--left-nav__trigger--infrastructure:focus span:after{background:#fff}.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active span{background:transparent}.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active span:before,.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active span:after{background:#3d70b2}.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:hover,.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:focus{background-color:#3d70b2}.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:hover span:before,.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:hover span:after,.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:focus span:before,.bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:focus span:after{background:#fff}.bx--global-header{box-shadow:0 6px 12px 0 rgba(0,0,0,0.1);font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;width:100%;position:fixed;top:2.25rem;left:0;display:flex;justify-content:space-between;height:3.125rem;line-height:1.5;background-color:#152935;z-index:9000}.bx--global-header__title{display:flex;align-items:center}.bx--global-header__title--logo{display:flex;align-items:center;padding:0 .5rem;text-decoration:none;color:#fff;position:relative}.bx--global-header__title--logo:hover .bx--logo__text,.bx--global-header__title--logo:focus .bx--logo__text{color:#7cc7ff}.bx--global-header__title--current-page{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;align-items:center;font-weight:400;font-size:1.125rem;line-height:inherit;color:#5aaafa}.bx--unified-header--apps .bx--global-header__title--current-page{color:#00b4a0}.bx--unified-header--infrastructure .bx--global-header__title--current-page{color:#5aaafa}.bx--unified-header--services .bx--global-header__title--current-page{color:#ba8ff7}.bx--global-header .bx--logo__image{cursor:pointer;position:relative;margin-right:1.125rem}.bx--global-header .bx--logo__text{font-size:1.125rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;cursor:pointer;text-decoration:none;color:#fff}.bx--global-header .bx--logo__text--bold{font-weight:600}.bx--global-header__left-container{display:flex;align-items:center}.bx--global-header__right-container{display:flex;align-items:center;padding-right:1%;background-color:#152935}.bx--global-header__menu{list-style:none;width:100%;display:flex;justify-content:flex-end}.bx--global-header__menu__item{width:100%;flex:0 1 100px}.bx--global-header__menu__item:focus{outline:0;background-color:#2d3f49;color:#5aaafa}.bx--global-header__menu__item:last-child .bx--dropdown-list{right:0}.bx--global-header__menu__item--link{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:0.875rem;font-weight:600;display:flex;justify-content:center;align-items:center;height:3.125rem;text-decoration:none;background-color:#152935;color:#fff;padding:0 1rem}.bx--global-header__menu__item--link:hover{color:#5aaafa}.bx--global-header__menu__item--link:focus{outline:0;background-color:#2d3f49;color:#5aaafa}.bx--global-header__menu__item .bx--dropdown{height:3.125rem;background-color:transparent}.bx--global-header__menu__item .bx--dropdown:focus{outline:0;background-color:#2d3f49}.bx--global-header__menu__item .bx--dropdown:focus .bx--dropdown__menu-text{color:#5aaafa}.bx--global-header__menu__item .bx--dropdown:focus .bx--dropdown__menu-text,.bx--global-header__menu__item .bx--dropdown:focus .bx--dropdown__list{outline:0}.bx--global-header__menu .bx--dropdown-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;justify-content:center;padding-top:0;padding-right:1rem;padding-bottom:0;align-items:center;height:100%;z-index:1000;color:#fff}.bx--global-header__menu .bx--dropdown-text:hover{color:#5aaafa}.bx--global-header__menu .bx--dropdown-list{transition:250ms all cubic-bezier(0.5, 0, 0.1, 1);transform:translateY(-150%);opacity:0;visibility:hidden;display:flex;flex-direction:column;position:absolute;top:100%;width:auto;z-index:-1;padding-bottom:0.5rem}.bx--global-header__menu .bx--dropdown-item{min-width:200px;width:100%}.bx--global-header__menu .bx--dropdown-link{padding:0.5rem 0.75rem;color:#fff}.bx--global-header__menu .bx--dropdown-link:hover{color:#152935;background-color:#5aaafa}.bx--global-header__menu .bx--dropdown--open .bx--dropdown-text{background-color:#2d3f49;color:#5aaafa}.bx--global-header__menu .bx--dropdown--open .bx--dropdown-list{transform:translateY(0);opacity:1;visibility:visible;background-color:#2d3f49}.bx--top-nav{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;justify-content:space-between;background-color:#0f212e;width:100%;height:2.25rem;padding:0 1rem;position:fixed;top:0;left:0;z-index:9500}.bx--top-nav__left-container,.bx--top-nav__right-container{list-style:none;display:flex;align-items:center;min-width:50%}.bx--top-nav__left-container .bx--dropdown,.bx--top-nav__right-container .bx--dropdown{font-size:0.75rem;list-style:none;background-color:#0f212e;color:#fff;height:100%;display:flex;align-items:center}.bx--top-nav__left-container .bx--dropdown__arrow,.bx--top-nav__right-container .bx--dropdown__arrow{fill:#fff;right:0.75rem;width:.75rem;height:1.5rem}.bx--top-nav__left-container .bx--dropdown-text,.bx--top-nav__right-container .bx--dropdown-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;max-width:12.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-weight:600}.bx--top-nav__left-container .bx--dropdown-list,.bx--top-nav__right-container .bx--dropdown-list{width:auto;position:absolute;top:100%;left:0;background-color:#2d3f49;transition:250ms all cubic-bezier(0.5, 0, 0.1, 1);display:flex;flex-direction:column;opacity:0;visibility:hidden;transform:translateY(-50%);z-index:-1}.bx--top-nav__left-container .bx--dropdown-item,.bx--top-nav__right-container .bx--dropdown-item{min-width:10.625rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.bx--top-nav__left-container .bx--dropdown-item:hover,.bx--top-nav__right-container .bx--dropdown-item:hover{background-color:#5aaafa;color:#152935}.bx--top-nav__left-container .bx--dropdown-link,.bx--top-nav__right-container .bx--dropdown-link{color:#fff}.bx--top-nav__left-container .bx--dropdown--open,.bx--top-nav__right-container .bx--dropdown--open{background-color:#2d3f49}.bx--top-nav__left-container .bx--dropdown--open .bx--dropdown-text,.bx--top-nav__right-container .bx--dropdown--open .bx--dropdown-text{color:#5aaafa}.bx--top-nav__left-container .bx--dropdown--open .bx--dropdown__arrow,.bx--top-nav__right-container .bx--dropdown--open .bx--dropdown__arrow{fill:#5aaafa}.bx--top-nav__left-container .bx--dropdown--open .bx--dropdown-list,.bx--top-nav__right-container .bx--dropdown--open .bx--dropdown-list{transform:translateY(0);opacity:1;visibility:visible;background-color:#2d3f49}.bx--top-nav__left-container__link{font-size:0.6875rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;justify-content:flex-start;background-color:#0f212e;align-items:flex-start;text-decoration:none;color:#fff;font-weight:600;margin-right:1rem}.bx--top-nav__left-container__link:hover,.bx--top-nav__left-container__link:focus{color:#5aaafa}.bx--top-nav__left-container__link:hover .bx--top-nav__left-container__link--icon,.bx--top-nav__left-container__link:focus .bx--top-nav__left-container__link--icon{fill:#5aaafa}.bx--top-nav__left-container__link--icon{width:0.675rem;height:0.7rem;fill:#fff;margin-right:0.3rem}.bx--top-nav__left-container__item:focus{outline:0}.bx--top-nav__left-container .bx--dropdown:focus,.bx--top-nav__left-container .bx--dropdown:hover{outline:0}.bx--top-nav__left-container .bx--dropdown:focus .bx--dropdown__arrow use,.bx--top-nav__left-container .bx--dropdown:hover .bx--dropdown__arrow use{fill:#5aaafa}.bx--top-nav__left-container .bx--dropdown:focus .bx--dropdown-text,.bx--top-nav__left-container .bx--dropdown:hover .bx--dropdown-text{background-color:#2d3f49;color:#5aaafa}.bx--top-nav__left-container .bx--dropdown-list{padding-bottom:0.5rem}.bx--top-nav__left-container .bx--dropdown__arrow{top:0.3rem;left:0.75rem;opacity:0;transform:rotate(0);animation:250ms cubic-bezier(0.64, 0.57, 0.67, 1.53) 650ms 1 normal forwards fade}.bx--top-nav__left-container .bx--dropdown-text{animation:250ms cubic-bezier(0.6, 0.22, 0.38, 2.03) 1 normal forwards pop-in;opacity:0;transform:scale(0.5);padding:0.725rem 1rem 0.725rem 2rem}.bx--top-nav__left-container .bx--dropdown-link{padding:0.6rem 0.75rem}.bx--top-nav__left-container .bx--dropdown-link:hover,.bx--top-nav__left-container .bx--dropdown-link:focus{background-color:#5aaafa;color:#152935}.bx--top-nav__right-container{justify-content:flex-end}.bx--top-nav__right-container__item[data-trial] .bx--dropdown-text,.bx--top-nav__right-container__item[data-credit] .bx--dropdown-text{padding:0.75rem 2rem 0.75rem 1rem;color:#fff}.bx--top-nav__right-container__item[data-trial] .bx--dropdown-list,.bx--top-nav__right-container__item[data-credit] .bx--dropdown-list{left:initial;outline:0;right:0;min-width:20.3125rem;transform:translateY(-10%)}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__arrow,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__arrow{top:0.5rem}.bx--top-nav__right-container__item[data-trial] .bx--dropdown--open .bx--dropdown-list,.bx--top-nav__right-container__item[data-credit] .bx--dropdown--open .bx--dropdown-list{transform:translateY(0)}.bx--top-nav__right-container__item[data-trial] .bx--dropdown--open .bx--dropdown-text,.bx--top-nav__right-container__item[data-credit] .bx--dropdown--open .bx--dropdown-text{color:#5aaafa}.bx--top-nav__right-container__item[data-trial] .bx--dropdown:hover,.bx--top-nav__right-container__item[data-trial] .bx--dropdown:focus,.bx--top-nav__right-container__item[data-credit] .bx--dropdown:hover,.bx--top-nav__right-container__item[data-credit] .bx--dropdown:focus{outline:0;background-color:#2d3f49}.bx--top-nav__right-container__item[data-trial] .bx--dropdown:hover .bx--dropdown-text,.bx--top-nav__right-container__item[data-trial] .bx--dropdown:focus .bx--dropdown-text,.bx--top-nav__right-container__item[data-credit] .bx--dropdown:hover .bx--dropdown-text,.bx--top-nav__right-container__item[data-credit] .bx--dropdown:focus .bx--dropdown-text{color:#5aaafa}.bx--top-nav__right-container__item[data-trial] .bx--dropdown:hover .bx--dropdown__arrow use,.bx--top-nav__right-container__item[data-trial] .bx--dropdown:focus .bx--dropdown__arrow use,.bx--top-nav__right-container__item[data-credit] .bx--dropdown:hover .bx--dropdown__arrow use,.bx--top-nav__right-container__item[data-credit] .bx--dropdown:focus .bx--dropdown__arrow use{fill:#5aaafa}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__trial-content,.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__trial-content,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content{cursor:auto;display:flex;flex-direction:column;padding:1rem}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__trial-content:focus,.bx--top-nav__right-container__item[data-trial] .bx--dropdown__trial-content:hover,.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content:focus,.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content:hover,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__trial-content:focus,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__trial-content:hover,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content:focus,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content:hover{outline:0;background-color:initial;color:#fff}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__trial-content--desc,.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content--desc,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__trial-content--desc,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content--desc{margin-bottom:1rem}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__trial-content .bx--link,.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content .bx--link,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__trial-content .bx--link,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content .bx--link{font-size:0.6875rem;color:#5aaafa;margin-top:1rem;text-align:center}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__trial-content--desc,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__trial-content--desc{font-size:0.75rem}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content div .bx--dropdown__credit-content--heading,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content div .bx--dropdown__credit-content--heading{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:0.75rem;font-weight:600}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content div .bx--dropdown__credit-content--desc,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content div .bx--dropdown__credit-content--desc{font-size:0.875rem}.bx--top-nav__right-container__item[data-trial] .bx--dropdown__credit-content div:last-child .bx--dropdown__credit-content--desc,.bx--top-nav__right-container__item[data-credit] .bx--dropdown__credit-content div:last-child .bx--dropdown__credit-content--desc{margin-bottom:0}.bx--top-nav__right-container__item:last-child .bx--dropdown:focus,.bx--top-nav__right-container__item:last-child .bx--dropdown:hover{background-color:#2d3f49;outline:0}.bx--top-nav__right-container__item:last-child .bx--dropdown__arrow{transform-origin:50% 40%}.bx--top-nav__right-container__item:last-child .bx--dropdown__arrow use{fill:#5aaafa}.bx--top-nav__right-container__item:last-child .bx--dropdown-text--profile-image{height:2.25rem;width:2.25rem;min-height:2.25rem;min-width:2.25rem;display:flex;align-items:center;justify-content:center;margin:0rem 1rem}.bx--top-nav__right-container__item:last-child .bx--dropdown-text--profile-image .profile-image{display:flex;align-items:center;border-radius:50%;overflow:hidden}.bx--top-nav__right-container__item:last-child .bx--dropdown-text--profile-image .profile-image svg,.bx--top-nav__right-container__item:last-child .bx--dropdown-text--profile-image .profile-image img{fill:#fff;max-height:1.5rem;max-width:1.5rem}.bx--top-nav__right-container__item:last-child .bx--dropdown-list{right:0;left:inherit;padding:1rem;min-width:225px}.bx--top-nav__right-container__item:last-child .bx--dropdown-item{display:flex;justify-content:space-between}.bx--top-nav__right-container__item:last-child .bx--dropdown-item svg{min-height:3rem;min-width:3rem}.bx--top-nav__right-container__item:last-child .bx--dropdown-item:hover{background-color:inherit;color:inherit}.bx--top-nav__right-container__item[data-credit] .bx--dropdown-list{min-width:0;width:100%}.bx--dropdown__profile-dropdown--picture{max-width:3rem;max-height:3rem;border-radius:50%;width:100%;fill:#fff}.bx--dropdown__profile-dropdown--information{margin-left:1rem}.bx--dropdown__profile-dropdown--information p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:0.875rem;font-weight:600}.bx--dropdown__profile-dropdown__container{display:flex;justify-content:flex-start;align-items:center}.bx--dropdown__profile-dropdown__container a{font-size:0.75rem;color:#5aaafa}.bx--dropdown__profile-dropdown__container a:hover{color:#7cc7ff}.bx--dropdown__profile-dropdown__container p{padding:0 0.5rem}@keyframes pop-in{100%{opacity:1;transform:scale(1)}}@keyframes fade{100%{opacity:1}}.bx--top-nav__left-container--item:nth-child(1) .bx--dropdown-text{animation-delay:200ms}.bx--top-nav__left-container--item:nth-child(2) .bx--dropdown-text{animation-delay:300ms}.bx--top-nav__left-container--item:nth-child(3) .bx--dropdown-text{animation-delay:400ms}.bx--global-header__left-nav{box-shadow:0 8px 16px 0 rgba(0,0,0,0.1);position:fixed;z-index:9000;width:15.625rem;top:2.25rem;left:0;height:100%;transform:translate3d(-100%, 0, 0);transition:300ms cubic-bezier(0.5, 0, 0.1, 1);box-shadow:none;visibility:hidden}.bx--global-header__left-nav.bx--left-nav--active{transform:translate3d(0, 0, 0);box-shadow:0px 1px 15px 2px rgba(0,0,0,0.1);visibility:visible}.bx--left-nav{display:block;width:100%;height:100%;background-color:#fff;padding:0 0 4rem 0;overflow-y:auto;overflow-x:hidden}.bx--left-nav__close-row{height:3.125rem;width:100%;background-color:#fff}.bx--left-nav__header{align-items:center;height:3.125rem;cursor:pointer;position:relative;display:flex;background-color:#0f212e;justify-content:space-between;top:0;left:0;width:100%;padding:1.125rem 1.25rem}.bx--left-nav__header[data-left-nav-current-section='apps']{background-color:#008571}.bx--left-nav__header[data-left-nav-current-section='infrastructure']{background-color:#3d70b2}.bx--left-nav__header[data-left-nav-current-section='services']{background-color:#734098}.bx--left-nav__header--title{font-size:1rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;font-weight:600;margin-right:auto}.bx--left-nav__header--taxonomy-icon{width:1.5rem;height:1.5rem;fill:#fff;margin-right:1rem}.bx--left-nav__header--close-icon{width:.875rem;height:.875rem;display:block;fill:#fff}.bx--left-nav__sections{list-style:none;padding:0 0 1rem;width:100%;z-index:8000;position:relative;border-bottom:1px solid #dfe3e6;background-color:#fff}.bx--left-nav__section{display:flex;align-items:center;cursor:pointer;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);background-color:#fff}.bx--left-nav__section:hover[data-left-nav-section='apps']{background-color:#008571}.bx--left-nav__section:hover[data-left-nav-section='services']{background-color:#734098}.bx--left-nav__section:hover[data-left-nav-section='infrastructure']{background-color:#4178be}.bx--left-nav__section:hover .bx--left-nav__section--link{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:600;color:#fff}.bx--left-nav__section:hover .bx--left-nav__section--taxonomy-icon{fill:#fff}.bx--left-nav__section--active,.bx--left-nav__section--transition{justify-content:flex-start;align-items:center;cursor:pointer;position:relative;display:flex;background-color:#fff;top:0;left:0;width:100%;padding:0.8rem 0}.bx--left-nav__section--active[data-left-nav-section='apps'],[data-left-nav-section='apps'].bx--left-nav__section--transition{background-color:#008571}.bx--left-nav__section--active[data-left-nav-section='infrastructure'],[data-left-nav-section='infrastructure'].bx--left-nav__section--transition{background-color:#3d70b2}.bx--left-nav__section--active[data-left-nav-section='services'],[data-left-nav-section='services'].bx--left-nav__section--transition{background-color:#734098}.bx--left-nav__section--transition{position:absolute;z-index:9999;transition:all 0.3s cubic-bezier(0, 0, 0.25, 1)}.bx--left-nav__section--transition--50{transform:translateY(100px)}.bx--left-nav__section--transition--100{transform:translateY(150px)}.bx--left-nav__section--transition--0{transform:translateY(50px)}.bx--left-nav__section--transition .bx--left-nav__section--taxonomy-icon{fill:#fff}.bx--left-nav__section--taxonomy-icon{width:1.5rem;height:1.5rem;fill:#152935;margin-right:1rem}.bx--left-nav__section--anchor{display:flex;width:100%;padding:0 1.25rem;align-items:center;text-decoration:none}.bx--left-nav__section--link{font-size:1rem;display:flex;align-items:center;color:#152935;height:3.125rem}.bx--left-nav__main-nav{list-style:none;display:flex;flex-direction:column;margin-bottom:5rem;margin-top:0;transition:all 250ms cubic-bezier(0, 0, 0.25, 1);padding-top:1rem;background-color:#fff}.bx--left-nav__main-nav--hidden{display:none}.bx--left-nav__main-nav--top{margin-top:-100vh}.bx--main-nav__parent-item{opacity:1;transition:opacity 200ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer;width:100%;padding:0;margin-bottom:0.25rem;background-color:#fff}.bx--main-nav__parent-item--fade{opacity:0}.bx--main-nav__parent-item--hidden{display:none}.bx--main-nav__parent-item--expanded .bx--parent-item__link--down-icon svg{transform:rotate(180deg)}.bx--parent-item__link{font-size:0.875rem;font-weight:400;display:flex;align-items:center;justify-content:flex-start;text-decoration:none;padding:0.5rem 1.25rem;transition:background-color 250ms cubic-bezier(0.5, 0, 0.1, 1);color:#152935}.bx--parent-item__link .bx--parent-item__link--taxonomy-icon{width:1.5rem;height:1.5rem;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);margin-right:1rem;fill:#152935}.bx--parent-item__link .bx--parent-item__link--down-icon{display:flex;margin-left:auto}.bx--parent-item__link .bx--parent-item__link--down-icon svg{width:.625rem;height:.625rem;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);fill:#152935}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--parent-item__link:hover{color:#008571}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--parent-item__link:hover .bx--parent-item__link--taxonomy-icon,.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--parent-item__link:hover .bx--parent-item__link--down-icon svg{fill:#008571}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--parent-item__link:hover{color:#734098}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--parent-item__link:hover .bx--parent-item__link--taxonomy-icon,.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--parent-item__link:hover .bx--parent-item__link--down-icon svg{fill:#734098}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--parent-item__link:hover{color:#3d70b2}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--parent-item__link:hover .bx--parent-item__link--taxonomy-icon,.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--parent-item__link:hover .bx--parent-item__link--down-icon svg{fill:#3d70b2}.bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link{background-color:#008571}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover .bx--parent-item__link--taxonomy-icon,.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover .bx--parent-item__link--down-icon svg{fill:#fff}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link{background-color:#734098}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover .bx--parent-item__link--taxonomy-icon,.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover .bx--parent-item__link--down-icon svg{fill:#fff}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link{background-color:#3d70b2}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover .bx--parent-item__link--taxonomy-icon,.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link:hover .bx--parent-item__link--down-icon svg{fill:#fff}.bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link--taxonomy-icon{fill:#fff}.bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link--down-icon svg{fill:#fff}.bx--main-nav__parent-item.bx--active-list-item:hover{color:#fff}.bx--main-nav__nested-list{display:flex;flex-direction:column;margin-top:0;list-style:none;max-height:0;transition:300ms cubic-bezier(0.5, 0, 0.1, 1);padding:0;opacity:0;overflow:hidden;margin-bottom:0}.bx--main-nav__parent-item--expanded .bx--main-nav__nested-list{max-height:20rem;transition:300ms cubic-bezier(0.5, 0, 0.1, 1);opacity:1;margin-top:0.5rem;overflow:visible}.bx--main-nav__parent-item--expanded .bx--main-nav__nested-list .bx--nested-list__item{opacity:1}.bx--nested-list__item{width:100%;position:static;margin-bottom:0.25rem;padding:0;transition:250ms;opacity:0}.bx--nested-list__item--link{font-size:0.875rem;color:#152935;padding:0.5rem 1.35rem 0.5rem 2rem;font-weight:400;display:flex;align-items:center;justify-content:space-between;text-decoration:none;position:relative;margin-right:auto}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--nested-list__item--link:hover{color:#008571}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--nested-list__item--link:hover .bx--left-nav-list__item-link--taxonomy-icon{fill:#008571}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--nested-list__item--link:hover{color:#734098}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--nested-list__item--link:hover .bx--left-nav-list__item-link--taxonomy-icon{fill:#734098}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--nested-list__item--link:hover{color:#3d70b2}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--nested-list__item--link:hover .bx--left-nav-list__item-link--taxonomy-icon{fill:#3d70b2}.bx--nested-list__item--icon svg{width:.625rem;height:.625rem;fill:#152935}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link{background-color:#008571}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link:hover .bx--parent-item__link--taxonomy-icon{fill:#fff}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link{background-color:#734098}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link:hover .bx--parent-item__link--taxonomy-icon{fill:#fff}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link{background-color:#3d70b2}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--link:hover .bx--parent-item__link--taxonomy-icon{fill:#fff}.bx--nested-list__item.bx--active-list-item .bx--nested-list__item--icon svg{fill:#152935}.bx--nested-list__flyout-menu{box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);display:none;min-width:auto;white-space:nowrap;outline:none;position:absolute;z-index:9999;color:#fff}.bx--nested-list__flyout-menu:before{content:'';display:block;position:absolute;width:120%;height:120%;top:-3rem;left:0;padding:2rem;z-index:-1}.bx--nested-list__flyout-menu--displayed{display:block;border-left:1px solid #dfe3e6}.bx--flyout-menu__item--link{font-size:0.875rem;padding:0 1.75rem 0 1rem;color:#152935;text-decoration:none}.bx--flyout-menu__item{background-color:#fff;margin:0;height:2.3125rem;display:flex;align-items:center}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--flyout-menu__item:hover .bx--flyout-menu__item--link{color:#008571}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--flyout-menu__item:hover .bx--flyout-menu__item--link{color:#734098}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--flyout-menu__item:hover .bx--flyout-menu__item--link{color:#3d70b2}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--flyout-menu__item.bx--active-list-item{background-color:#008571}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--flyout-menu__item.bx--active-list-item .bx--flyout-menu__item--link{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='apps'] .bx--flyout-menu__item.bx--active-list-item .bx--flyout-menu__item--link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--flyout-menu__item.bx--active-list-item{background-color:#734098}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--flyout-menu__item.bx--active-list-item .bx--flyout-menu__item--link{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='services'] .bx--flyout-menu__item.bx--active-list-item .bx--flyout-menu__item--link:hover{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--flyout-menu__item.bx--active-list-item{background-color:#3d70b2}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--flyout-menu__item.bx--active-list-item .bx--flyout-menu__item--link{color:#fff}.bx--left-nav__main-nav[data-left-nav-list='infrastructure'] .bx--flyout-menu__item.bx--active-list-item .bx--flyout-menu__item--link:hover{color:#fff}.bx--account-switcher{list-style:none;position:relative;height:100%;display:flex;align-items:center;justify-content:flex-end;min-width:21.875rem}.bx--account-switcher__linked-icon{fill:#fff;height:1rem;width:1rem;margin:0 0.5rem;transform:rotate(45deg)}.bx--account-switcher__toggle{z-index:9000;height:2.25rem;width:auto;display:inline-flex;align-items:center;justify-content:center;color:#fff;padding:0 1rem;background-color:#0f212e;cursor:pointer}.bx--account-switcher__toggle:focus,.bx--account-switcher__toggle:hover{outline:0;background-color:#2d3f49}.bx--account-switcher__toggle:focus .bx--account-switcher__toggle--text,.bx--account-switcher__toggle:hover .bx--account-switcher__toggle--text{color:#5aaafa}.bx--account-switcher__toggle:focus svg,.bx--account-switcher__toggle:hover svg{fill:#5aaafa}.bx--account-switcher__toggle--hidden{opacity:0;visibility:hidden}.bx--account-switcher__toggle--text{font-size:0.6875rem;letter-spacing:0;overflow:hidden;display:inline-flex;white-space:nowrap;padding-right:0.5rem;font-weight:300}.bx--account-switcher__toggle--text[data-switcher-account-sl],.bx--account-switcher__toggle--text[data-switcher-account]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:600}.bx--account-switcher__toggle--text[data-switcher-account]{display:inline-flex;align-items:center}.bx--account-switcher__toggle--text[data-switcher-account] .bx--account-switcher__linked-icon{margin-right:0}.bx--account-switcher__toggle--text>[data-dropdown-account-linked]{margin-left:0.5rem;margin-right:0}.bx--account-switcher__toggle--text:last-child{padding-right:0}.bx--account-switcher__menu{list-style:none}.bx--account-switcher__menu__container{box-shadow:6px 6px 6px 0 rgba(0,0,0,0.1);transition:250ms all cubic-bezier(0.5, 0, 0.1, 1);position:absolute;width:auto;min-width:21.875rem;height:auto;background-color:#2d3f49;visibility:hidden;opacity:0;top:100%;right:0;transform:translateY(-10%);color:#fff;z-index:8000}.bx--account-switcher--open{color:#5aaafa}.bx--account-switcher--open .bx--account-switcher__toggle{color:#5aaafa;background-color:#2d3f49}.bx--account-switcher--open .bx--account-switcher__linked-icon{fill:#5aaafa}.bx--account-switcher--open .bx--account-switcher__menu__container{visibility:visible;max-height:125rem;opacity:1;transform:translateY(0)}.bx--account-switcher__menu__item{height:auto;display:flex;justify-content:space-between;align-items:flex-start;padding:1rem}.bx--account-switcher__menu__item:first-child{border-bottom:1px solid #42535c}.bx--account-switcher__menu__item:nth-child(n+2){padding:1rem 1rem 0}.bx--account-switcher__menu__item:last-child{display:flex;margin-left:auto;justify-content:flex-start;max-width:75%;padding:0.75rem 0 1rem 1.5rem}.bx--account-switcher__menu__item:last-child a{font-size:0.6875rem;padding-right:1rem;color:#5aaafa}.bx--account-switcher__menu__item:last-child a:visited{color:#5aaafa}.bx--account-switcher__menu__item:last-child a:hover{color:#5596e6}.bx--account-switcher__menu__item--title{font-size:0.875rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:600;height:44px;min-width:100px;display:flex;align-items:center;flex:1}.bx--account-switcher__menu__item .bx--dropdown{font-size:0.875rem;flex:3;background-color:#42535c;display:block;flex-direction:column;min-width:200px}.bx--account-switcher__menu__item .bx--dropdown[data-value=''] .bx--dropdown-text{color:#fff}.bx--account-switcher__menu__item .bx--dropdown--scroll{max-height:180px;overflow-y:auto}.bx--account-switcher__menu__item .bx--dropdown--scroll::-webkit-scrollbar{background:#394b54;width:0.5rem;height:0.5rem}.bx--account-switcher__menu__item .bx--dropdown--scroll::-webkit-scrollbar-thumb{background-color:#8c9ba5;border-radius:10px}.bx--account-switcher__menu__item .bx--dropdown--scroll::-webkit-scrollbar-thumb:hover{background-color:#dfe6eb}.bx--account-switcher__menu__item .bx--dropdown li{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;max-width:400px}.bx--account-switcher__menu__item .bx--dropdown__arrow{fill:#5aaafa}.bx--account-switcher__menu__item .bx--dropdown-text{padding-right:2rem;align-self:flex-start;background-color:#42535c}.bx--account-switcher__menu__item .bx--dropdown-text .bx--account-switcher__linked-icon{fill:#fff;vertical-align:middle}.bx--account-switcher__menu__item .bx--dropdown-list{position:relative;transform:translateY(-10px);max-height:0;height:auto;width:100%;top:0}.bx--account-switcher__menu__item .bx--dropdown-item{background-color:#2d3f49}.bx--account-switcher__menu__item .bx--dropdown-item>.bx--dropdown-link:hover,.bx--account-switcher__menu__item .bx--dropdown-item .bx--dropdown-link:focus{background-color:#5aaafa;color:#152935}.bx--account-switcher__menu__item .bx--dropdown-item>.bx--dropdown-link:hover svg,.bx--account-switcher__menu__item .bx--dropdown-item .bx--dropdown-link:focus svg{fill:#152935}.bx--account-switcher__menu__item .bx--dropdown-link{height:100%;text-overflow:ellipsis;overflow:hidden}.bx--account-switcher__menu__item .bx--dropdown-link span{pointer-events:none}.bx--account-switcher__menu__item .bx--dropdown-link svg{fill:#fff;pointer-events:none;vertical-align:middle}.bx--account-switcher__menu__item .bx--dropdown--open .bx--dropdown-text{color:#fff}.bx--account-switcher__menu__item .bx--dropdown--open .bx--dropdown-list{display:flex;flex-direction:column;max-height:2000px;z-index:10}.bx--account-switcher__menu__item .bx--dropdown--open .bx--dropdown-item{background-color:#394b54}.bx--unified-header{position:fixed;z-index:6000}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--interior-left-nav{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;width:15.625rem;position:fixed;top:5.625rem;height:100%;background-color:#fff;border-right:1px solid #dfe3e6}.bx--interior-left-nav--v6{top:3.125rem}.bx--interior-left-nav .left-nav-list{list-style:none;display:flex;flex-direction:column;background-color:#fff;padding-top:1.5rem;overflow:auto}.bx--interior-left-nav .left-nav-list__item{cursor:pointer;width:100%;padding:0}.bx--interior-left-nav .left-nav-list__item:focus{outline:1px solid transparent}.bx--interior-left-nav .left-nav-list__item:focus:not(.left-nav-list__item--has-children){background-color:#f0f3f6}.bx--interior-left-nav .left-nav-list__item:focus .left-nav-list__item-link{color:#3d70b2;text-decoration:underline}.bx--interior-left-nav .left-nav-list__item:focus .left-nav-list--nested .left-nav-list__item-link{color:#152935;text-decoration:none}.bx--interior-left-nav .left-nav-list__item--active>.left-nav-list__item-link{background-color:#f0f3f6;color:#3d70b2;font-weight:600}.bx--interior-left-nav .left-nav-list__item-link{font-size:0.875rem;color:#152935;font-weight:400;position:relative;display:flex;align-items:center;justify-content:space-between;text-decoration:none;transition:background-color 250ms;padding:0.75rem 1.5rem 0.75rem 3.6875rem}.bx--interior-left-nav .left-nav-list__item-icon{display:flex}.bx--interior-left-nav .left-nav-list__item-icon .bx--interior-left-nav__icon{fill:#3d70b2;width:.5rem;height:.5rem;transition:250ms}.bx--interior-left-nav .left-nav-list__item--expanded .left-nav-list--nested{max-height:20rem;transition:300ms cubic-bezier(0.25, 0, 1, 1);overflow:inherit;opacity:1}.bx--interior-left-nav .left-nav-list__item--expanded .left-nav-list--nested .left-nav-list__item{opacity:1}.bx--interior-left-nav .left-nav-list__item--expanded>.left-nav-list__item-link{color:#3d70b2}.bx--interior-left-nav .left-nav-list__item--expanded .left-nav-list__item-icon .bx--interior-left-nav__icon{transform:rotate(180deg)}.bx--interior-left-nav .left-nav-list__item:not(.left-nav-list__item--has-children):hover>.left-nav-list__item-link{background-color:#f0f3f6;color:#3d70b2}.bx--interior-left-nav .left-nav-list__item--has-children .left-nav-list__item-link{padding-right:1.5rem}.bx--interior-left-nav .left-nav-list__item--has-children:hover>.left-nav-list__item-link{color:#3d70b2}.bx--interior-left-nav .left-nav-list--nested{max-height:0;overflow:hidden;transition:300ms cubic-bezier(0, 0, 0.25, 1);padding:0;opacity:0}.bx--interior-left-nav .left-nav-list--nested .left-nav-list__item{width:100%;position:relative;padding:0;transition:250ms;opacity:0}.bx--interior-left-nav .left-nav-list--nested .left-nav-list__item-link{font-size:0.875rem;color:#152935;padding:0.75rem 1.35rem 0.75rem 4.5rem;font-weight:400;display:flex;align-items:center;justify-content:space-between}.bx--interior-left-nav .left-nav-list--nested .left-nav-list__item-link:focus{outline:1px solid transparent;background-color:#f0f3f6;color:#3d70b2;text-decoration:underline}.bx--interior-left-nav .left-nav-list--nested .left-nav-list__item:hover{outline:none}.bx--interior-left-nav .left-nav-list--nested .left-nav-list__item--active{color:#3d70b2;background-color:#f0f3f6}.bx--interior-left-nav .left-nav-list--nested .left-nav-list__item--active>.left-nav-list__item-link{font-weight:600;color:#3d70b2}.bx--interior-left-nav--collapseable{overflow:hidden;display:flex;flex-direction:column;width:12.5rem;padding-top:1.25rem;transition:background-color 300ms cubic-bezier(0.5, 0, 0.1, 1),width 300ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--interior-left-nav--collapseable ul,.bx--interior-left-nav--collapseable li,.bx--interior-left-nav--collapseable hr,.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse__target{opacity:1}.bx--interior-left-nav--collapseable .left-nav-list,.bx--interior-left-nav--collapseable .left-nav-list__item-link{background-color:inherit}.bx--interior-left-nav--collapseable .left-nav-list__item--expanded>.left-nav-list{padding-top:.375rem;padding-bottom:.375rem}.bx--interior-left-nav--collapseable .left-nav-list__item--expanded>.left-nav-list__item-link{color:#152935}.bx--interior-left-nav--collapseable .left-nav-line{margin:1.5rem 1.25rem;border:1px solid #dfe3e6}.bx--interior-left-nav--collapseable .left-nav-list{padding-top:0}.bx--global-light-ui .bx--interior-left-nav--collapseable .left-nav-list{background-color:inherit}.bx--interior-left-nav--collapseable .left-nav-list__item--active>.left-nav-list__item-link{position:relative;background-color:transparent}.bx--interior-left-nav--collapseable .left-nav-list__item--active>.left-nav-list__item-link:before{top:0;position:absolute;background-color:#3d70b2;height:100%;left:0;width:4px;content:''}.bx--interior-left-nav--collapseable .left-nav-list__item{margin-bottom:.3125rem}.bx--interior-left-nav--collapseable .left-nav-list__item-link,.bx--interior-left-nav--collapseable .left-nav-list--nested .left-nav-list__item-link{padding:.5625rem 1.25rem}.bx--interior-left-nav--collapseable .left-nav-list--nested .left-nav-list__item-link{font-size:0.75rem;padding-left:2.5rem}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse{cursor:pointer;background-color:rgba(61,112,178,0.1);display:flex;justify-content:flex-end;align-items:center;margin-top:auto;margin-bottom:5.625rem;padding:.875rem 1rem}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse--v6{margin-bottom:3.125rem}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse:hover,.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse:focus{background-color:rgba(61,112,178,0.3)}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse__target{margin-left:.625rem;margin-right:.625rem}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse__link{font-size:0.875rem;display:flex;align-items:center;text-decoration:none;padding:0.25rem}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse__link:focus{outline:1px solid #3d70b2}.bx--interior-left-nav--collapseable .bx--interior-left-nav-collapse__arrow{transform:rotate(0);fill:#3d70b2;height:12px;width:12px}.bx--interior-left-nav--collapsing,.bx--interior-left-nav--collapsed{width:3rem;transition:background-color 300ms cubic-bezier(0.5, 0, 0.1, 1),width 300ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer;background-color:rgba(61,112,178,0.1)}.bx--interior-left-nav--collapsing:hover,.bx--interior-left-nav--collapsing:focus,.bx--interior-left-nav--collapsed:hover,.bx--interior-left-nav--collapsed:focus{background-color:rgba(61,112,178,0.3)}.bx--interior-left-nav--collapsing ul,.bx--interior-left-nav--collapsing li,.bx--interior-left-nav--collapsing hr,.bx--interior-left-nav--collapsing .bx--interior-left-nav-collapse__target,.bx--interior-left-nav--collapsed ul,.bx--interior-left-nav--collapsed li,.bx--interior-left-nav--collapsed hr,.bx--interior-left-nav--collapsed .bx--interior-left-nav-collapse__target{opacity:0;transition:opacity 300ms cubic-bezier(0.5, 0, 0.1, 1);overflow:hidden;white-space:nowrap}.bx--interior-left-nav--collapsing .bx--interior-left-nav-collapse,.bx--interior-left-nav--collapsed .bx--interior-left-nav-collapse{background-color:transparent}.bx--interior-left-nav--collapsing .bx--interior-left-nav-collapse:hover,.bx--interior-left-nav--collapsed .bx--interior-left-nav-collapse:hover{background-color:transparent}.bx--interior-left-nav--collapsing .bx--interior-left-nav-collapse__arrow,.bx--interior-left-nav--collapsed .bx--interior-left-nav-collapse__arrow{transform:rotate(180deg);transition:transform 300ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--interior-left-nav--collapsed ul,.bx--interior-left-nav--collapsed li,.bx--interior-left-nav--collapsed hr,.bx--interior-left-nav--collapsed .bx--interior-left-nav-collapse__target{display:none}.bx--interior-left-nav--collapsed .bx--interior-left-nav-collapse{justify-content:center;padding-left:0;padding-right:0}.bx--interior-left-nav--expanding{width:12.5rem;transition:width 300ms cubic-bezier(0.5, 0, 0.1, 1);background-color:#fff}.bx--interior-left-nav--expanding ul,.bx--interior-left-nav--expanding li,.bx--interior-left-nav--expanding hr,.bx--interior-left-nav--expanding .bx--interior-left-nav-collapse__target{opacity:1;transition:opacity 300ms cubic-bezier(0.5, 0, 0.1, 1);overflow:hidden;white-space:nowrap}.bx--interior-left-nav--expanding .bx--interior-left-nav-collapse__arrow{transform:rotate(0deg);transition:transform 300ms cubic-bezier(0.5, 0, 0.1, 1)}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--select--inline{display:flex;align-items:center}.bx--select--inline .bx--label{white-space:nowrap;margin:0 .5rem 0 0;font-weight:400}.bx--select--inline .bx--select-input{background-color:transparent;color:#3d70b2;font-weight:600}.bx--select--inline .bx--select-input:disabled ~ *{opacity:0.5;cursor:not-allowed}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--data-table-v2-container+.bx--pagination{border-top:0}.bx--pagination{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;width:100%;background-color:#fff;padding:.5rem 1rem;display:flex;align-items:center;border:1px solid #dfe3e6}.bx--pagination .bx--form-item{flex:auto}.bx--pagination__left{display:flex;align-items:center}.bx--pagination__right{display:flex;align-items:center;margin-left:auto}.bx--pagination__text{font-size:0.75rem;color:#5a6872;display:none}@media (min-width: 530px){.bx--pagination__text{display:block}}.bx--pagination__button-icon{height:.75rem;width:.75rem;fill:#8c9ba5;pointer-events:none;transition:250ms}.bx--pagination__button{border:none;background:none;cursor:pointer}.bx--pagination__button:hover .bx--pagination__button-icon{fill:#3d70b2}.bx--pagination__button:focus{outline:1px solid #3d70b2}.bx--pagination__button:disabled:hover{cursor:default}.bx--pagination__button:disabled:hover .bx--pagination__button-icon{fill:#8c9ba5}.bx--pagination__button--backward{margin-left:1rem;margin-right:1.5rem}.bx--pagination__button--forward{margin-left:1.5rem}.bx--pagination__button--no-index{border-right:0;margin-right:1px}.bx--pagination .bx--select{margin-right:.5rem}.bx--pagination .bx--select--inline{margin-right:0;width:auto}.bx--pagination .bx--select-input{height:1.5rem;width:auto;padding:0 1rem;margin:0;font-weight:600;text-align-last:center}.bx--pagination .bx--select-input:focus{outline:1px solid #3d70b2}.bx--pagination .bx--select__arrow{right:0.3rem;top:0.625rem}.bx--pagination .bx--text-input{height:1.5rem;min-width:1.5rem;width:1.5rem;padding:0;margin:0;font-weight:600;text-align:center}.bx--pagination .bx--text-input:focus{outline:1px solid #3d70b2}.bx--pagination--inline{height:42px;margin-top:-0.5rem;margin-bottom:-0.5rem;margin-right:-1rem}.bx--pagination--inline .bx--pagination__button{height:100%;border-left:1px solid #dfe3e6;border-right:1px solid #dfe3e6;width:2.625rem;margin:0}.bx--pagination--inline .bx--pagination__button--forward{border-right:0}.bx--pagination--inline .bx--pagination__button--backward{margin-left:1rem}.bx--pagination--inline .bx--select--inline{position:relative;top:-1.5px}.bx--pagination--inline .bx--select-input{padding-left:1rem}.bx--pagination--inline .bx--select__arrow{right:0.3rem}.bx--pagination.bx--skeleton .bx--skeleton__text{margin-right:1rem;margin-bottom:0}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--accordion{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;list-style:none;width:100%}.bx--accordion__item{transition:all 250ms cubic-bezier(0.5, 0, 0.1, 1);border-top:1px solid #dfe3e6;overflow:hidden}.bx--accordion__item:focus{outline:none}.bx--accordion__item:focus .bx--accordion__arrow{outline:1px solid #3d70b2;overflow:visible;outline-offset:-0.5px}.bx--accordion__item:last-child{border-bottom:1px solid #dfe3e6}.bx--accordion__heading{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;width:100%;color:#152935;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;cursor:pointer;padding:.5rem 0}.bx--accordion__heading::-moz-focus-inner{border:0}.bx--accordion__heading:focus{outline:none}.bx--accordion__heading:focus .bx--accordion__arrow{outline:1px solid #3d70b2;overflow:visible;outline-offset:-0.5px}.bx--accordion__arrow{transition:all 250ms cubic-bezier(0.5, 0, 0.1, 1);height:1.25rem;width:1.25rem;padding:.25rem .125rem .25rem .25rem;margin:0 0 0 .25rem;fill:#8c9ba5}.bx--accordion__title{margin:0 0 0 1rem}.bx--accordion__content{transition:all 300ms cubic-bezier(0, 0, 0.25, 1);padding:0 1rem 0 2.5rem;height:0;visibility:hidden;opacity:0}.bx--accordion__content p{font-size:0.875rem}.bx--accordion__item--active{overflow:visible}.bx--accordion__item--active .bx--accordion__content{padding-top:1rem;padding-bottom:1.5rem;height:auto;visibility:visible;opacity:1;transition:all 300ms cubic-bezier(0.25, 0, 1, 1)}.bx--accordion__item--active .bx--accordion__arrow{transform:rotate(90deg);fill:#3d70b2}.bx--accordion.bx--skeleton .bx--accordion__heading,.bx--accordion.bx--skeleton .bx--accordion__button{cursor:default}.bx--accordion.bx--skeleton .bx--accordion__arrow{pointer-events:none;fill:#8c9ba5;cursor:default}.bx--accordion.bx--skeleton .bx--accordion__arrow:hover,.bx--accordion.bx--skeleton .bx--accordion__arrow:focus,.bx--accordion.bx--skeleton .bx--accordion__arrow:active{border:none;outline:none;cursor:default}.bx--skeleton .bx--accordion__heading:focus .bx--accordion__arrow{border:none;outline:none;cursor:default}.bx--accordion__title.bx--skeleton__text{margin-bottom:0}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--progress{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;list-style:none}.bx--progress-step{position:relative;display:inline-flex;flex-direction:column;flex:1;min-width:7rem;transition:250ms all cubic-bezier(0.5, 0, 0.1, 1);overflow:visible}.bx--progress-line{position:absolute;top:.625rem;right:100%;height:1px;width:calc(100% - 24px);border:1px inset transparent}.bx--progress-step:first-child .bx--progress-line{display:none}.bx--progress-step svg{position:relative;z-index:1;width:1.5rem;height:1.5rem;border-radius:50%;margin-bottom:.5rem}.bx--progress-label{line-height:1;width:75%}.bx--progress-step--current circle:first-child{stroke:#3d70b2;stroke-width:5;fill:transparent}.bx--progress-step--current circle:last-child{fill:#3d70b2}.bx--progress-step--current .bx--progress-label{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#3d70b2;font-weight:600}.bx--progress-step--current .bx--progress-line{background-color:#3d70b2}.bx--progress-step--incomplete circle{stroke:#8c9ba5;stroke-width:5;fill:transparent}.bx--progress-step--incomplete .bx--progress-label{color:#5a6872}.bx--progress-step--incomplete .bx--progress-line{background-color:#8c9ba5}.bx--progress-step--complete circle{stroke:#3d70b2;stroke-width:5;fill:transparent}.bx--progress-step--complete polygon{fill:#3d70b2}.bx--progress-step--complete .bx--progress-label{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#3d70b2;font-weight:600}.bx--progress-step--complete .bx--progress-line{background-color:#3d70b2}.bx--progress.bx--skeleton .bx--progress-label{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);height:.75rem;width:2.5rem}.bx--progress.bx--skeleton .bx--progress-label:hover,.bx--progress.bx--skeleton .bx--progress-label:focus,.bx--progress.bx--skeleton .bx--progress-label:active{border:none;outline:none;cursor:default}.bx--progress.bx--skeleton .bx--progress-label:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--toolbar{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;display:flex;flex-flow:row nowrap;align-items:center;margin:1rem 0}.bx--toolbar>div{margin:0 .25rem}.bx--toolbar .bx--search-input{height:2rem;background-color:transparent;outline:none}.bx--toolbar .bx--search-close{display:none}.bx--toolbar .bx--overflow-menu__icon{fill:#5a6872;transition:fill 50ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--toolbar .bx--search-magnifier{fill:#5a6872;transform:scale(1.3);transition:all 175ms cubic-bezier(0.5, 0, 0.1, 1);top:.5rem;left:.375rem;cursor:pointer}.bx--toolbar fieldset{border:0;padding:0}.bx--toolbar .bx--toolbar-search--active{width:15.625rem}.bx--toolbar .bx--toolbar-search--active .bx--search-magnifier{transform:scale(1);top:.5625rem}.bx--toolbar .bx--toolbar-search--active .bx--search-input{background-color:rgba(61,112,178,0.1)}.bx--toolbar .bx--toolbar-search--active .bx--search-close{display:block}.bx--toolbar .bx--checkbox-label{margin-bottom:0}.bx--toolbar .bx--overflow-menu--open>.bx--overflow-menu__icon{fill:#3d70b2}.bx--toolbar-search{width:1.8rem;transition:all 175ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--toolbar-search__btn{position:absolute;left:0;top:0;background:transparent;border:0;height:2rem;width:2rem}.bx--toolbar-search__btn:focus{outline:1px solid #3d70b2}.bx--toolbar-filter-icon{padding-left:0;padding-right:0}.bx--toolbar-menu__title{font-size:0.75rem;letter-spacing:0;font-weight:600;padding:0.5rem 1.25rem}.bx--toolbar-menu__option{padding:0.5rem 1.25rem}.bx--toolbar-menu__divider{width:100%;border:0;border-top:1px solid #dfe3e6}.bx--radio-button-group{border:none}.bx--time-picker{display:flex;align-items:flex-start}.bx--time-picker .bx--select-input{padding-right:2rem}.bx--time-picker .bx--select__arrow{right:0.875rem}.bx--time-picker__input-field{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;font-size:0.875rem;display:flex;align-items:center;background-color:rgba(61,112,178,0.1);border:1px solid transparent;width:4.875rem;color:#152935;height:2.5rem;padding:0 1rem}.bx--time-picker__input-field:focus{outline:1px solid #3d70b2}.bx--time-picker__input-field:disabled{opacity:0.5;cursor:not-allowed}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--slider-container{max-width:37.5rem;min-width:12.5rem;display:flex;align-items:center;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (min-width: 768px){.bx--slider-container{min-width:21.875rem}}.bx--slider{position:relative;width:100%;margin:0 1rem}.bx--slider--disabled{opacity:0.5}.bx--slider--disabled .bx--slider__thumb:hover{transform:translate(-50%, -50%)}.bx--slider--disabled .bx--slider__thumb:focus{box-shadow:none;outline:none}.bx--slider--disabled .bx--slider__thumb:active{background:#3d70b2;transform:translate(-50%, -50%)}.bx--slider__range-label{font-size:0.875rem;color:#5a6872}.bx--slider__range-label:last-of-type{margin-right:1rem}.bx--slider__track{position:absolute;width:100%;height:.25rem;background:#8c9ba5;cursor:pointer;transform:translate(0%, -50%)}.bx--slider__filled-track{position:absolute;width:100%;height:.25rem;background:#3d70b2;transform-origin:left;pointer-events:none;transform:translate(0%, -50%)}.bx--slider__thumb{position:absolute;height:1.5rem;width:1.5rem;background:#3d70b2;border-radius:50%;top:0;transform:translate(-50%, -50%);transition:transform 100ms cubic-bezier(0.5, 0, 0.1, 1),background 100ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer;outline:none}.bx--slider__thumb--clicked{transition:left 250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--slider__thumb:hover{transform:translate(-50%, -50%) scale(1.05)}.bx--slider__thumb:focus{box-shadow:0 0 0 3px #7cc7ff;outline:1px solid transparent}.bx--slider__thumb:active{background:#36649f;transform:translate(-50%, -50%) scale(1.25)}.bx--slider__input{display:none}.bx--slider-text-input,.bx-slider-text-input{width:3.75rem;min-width:0;height:2rem;padding:0;text-align:center;font-weight:600;-moz-appearance:textfield}.bx--slider-text-input::-webkit-outer-spin-button,.bx--slider-text-input::-webkit-inner-spin-button,.bx-slider-text-input::-webkit-outer-spin-button,.bx-slider-text-input::-webkit-inner-spin-button{display:none}.bx--slider-container.bx--skeleton .bx--slider__range-label{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:1.25rem;height:.75rem}.bx--slider-container.bx--skeleton .bx--slider__range-label:hover,.bx--slider-container.bx--skeleton .bx--slider__range-label:focus,.bx--slider-container.bx--skeleton .bx--slider__range-label:active{border:none;outline:none;cursor:default}.bx--slider-container.bx--skeleton .bx--slider__range-label:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--slider-container.bx--skeleton .bx--slider__track{cursor:default;pointer-events:none}.bx--slider-container.bx--skeleton .bx--slider__thumb{left:50%;cursor:default;pointer-events:none}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--order-summary{font-size:0.875rem;background-color:#fff;padding-bottom:1.25rem;width:18rem;height:auto;display:flex;flex-direction:column}.bx--order-header{display:flex;align-items:center;padding:0 0 0 1.25rem;border-bottom:1px solid #8c9ba5}.bx--order-header .bx--dropdown{flex:1;background-color:#fff;margin-right:.0625rem}.bx--order-header .bx--dropdown-text{max-width:6.25rem}.bx--order-header .bx--dropdown-link{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bx--order-header .bx--dropdown[data-value=''] .bx--dropdown-text,.bx--order-header .bx--dropdown-text{color:#3d70b2}.bx--order-header-title{font-size:0.875rem;font-weight:600;flex:2}.bx--order-list{padding:1.25rem 0;margin:0 1.25rem;border-bottom:1px solid #8c9ba5}.bx--order-item{display:flex;justify-content:space-between;margin-bottom:1.125rem}.bx--order-item:last-child{margin-bottom:0}.bx--order-detail{font-size:0.875rem;color:#5a6872;padding-right:1.25rem;line-height:1.25}.bx--order-price{font-size:0.75rem;font-weight:600;white-space:nowrap}.bx--order-total-container{padding:1.125rem 1.25rem 0}.bx--order-total-container .bx--btn{width:100%;margin-top:1rem}.bx--order-total-container .bx--btn:first-of-type{margin-top:2rem}.bx--order-total-container .bx--btn:last-of-type{margin-bottom:2rem}.bx--order-total{display:flex;justify-content:space-between;margin-bottom:1rem}.bx--order-total-text{font-weight:600}.bx--order-total-price{display:flex;flex-direction:column;align-items:flex-end;font-weight:600}.bx--order-total-price span{font-size:0.75rem;color:#5a6872;font-weight:400}.bx--order-total-subtitle{font-size:0.6875rem;color:#5a6872;font-style:italic}.bx--order-footer{display:flex;align-items:center;justify-content:flex-end;margin-top:auto;padding-right:1.25rem}.bx--order-footer-text{font-size:0.875rem;color:#5a6872;line-height:1}.bx--order-category{margin-bottom:2rem}.bx--order-category:last-child{margin-bottom:0}.bx--order-category-title{font-size:0.75rem;font-weight:600;margin-bottom:.25rem;text-transform:uppercase}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--tile{box-shadow:0 1px 2px 0 rgba(0,0,0,0.1);display:block;min-width:8rem;min-height:4rem;background-color:#fff;border:1px solid #f0f3f6;position:relative;padding:1rem}.bx--tile:focus{outline:1px solid #3d70b2}.bx--tile--clickable,.bx--tile--selectable,.bx--tile--expandable{transition:250ms cubic-bezier(0.5, 0, 0.1, 1);cursor:pointer}.bx--tile--clickable:hover,.bx--tile--selectable:hover,.bx--tile--expandable:hover{border:1px solid #dfe3e6}.bx--tile--clickable:hover .bx--tile__checkmark,.bx--tile--clickable:focus .bx--tile__checkmark,.bx--tile--selectable:hover .bx--tile__checkmark,.bx--tile--selectable:focus .bx--tile__checkmark,.bx--tile--expandable:hover .bx--tile__checkmark,.bx--tile--expandable:focus .bx--tile__checkmark{opacity:1}.bx--tile--clickable:hover .bx--tile__chevron svg,.bx--tile--clickable:focus .bx--tile__chevron svg,.bx--tile--selectable:hover .bx--tile__chevron svg,.bx--tile--selectable:focus .bx--tile__chevron svg,.bx--tile--expandable:hover .bx--tile__chevron svg,.bx--tile--expandable:focus .bx--tile__chevron svg{fill:#3d70b2}.bx--tile--clickable:focus,.bx--tile--expandable:focus{outline:1px solid #3d70b2}.bx--tile--selectable{padding-right:3rem}.bx--tile--selectable:focus{outline:none;border:1px solid #3d70b2}.bx--tile--is-clicked{box-shadow:none;border:1px solid #dfe3e6}.bx--tile__checkmark,.bx--tile__chevron{position:absolute;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);border:none;background:transparent}.bx--tile__checkmark:focus,.bx--tile__chevron:focus{outline:1px solid #3d70b2}.bx--tile__checkmark{height:1rem;top:1rem;right:1rem;opacity:0}.bx--tile__checkmark svg{border-radius:50%;background-color:rgba(255,255,255,0.25);fill:rgba(61,112,178,0.25)}.bx--tile__chevron{position:absolute;bottom:0.5rem;right:0.5rem;height:1rem}.bx--tile__chevron svg{transform-origin:center;transition:250ms cubic-bezier(0.5, 0, 0.1, 1);fill:#8c9ba5}.bx--tile__chevron:hover{cursor:pointer}.bx--tile--expandable{overflow:hidden;cursor:default;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--tile-content__above-the-fold{display:block}.bx--tile-content__below-the-fold{display:block;opacity:0;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--tile--is-expanded{overflow:visible;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--tile--is-expanded .bx--tile__chevron svg{transform:rotate(-180deg)}.bx--tile--is-expanded .bx--tile-content__below-the-fold{opacity:1;transition:250ms cubic-bezier(0.5, 0, 0.1, 1)}.bx--tile--is-selected,.bx--tile--is-selected:hover,.bx--tile--is-selected:focus{border:1px solid #3d70b2;outline:none}.bx--tile-input:checked+.bx--tile__checkmark{opacity:1}.bx--tile-input:checked+.bx--tile__checkmark svg{fill:#3d70b2;background-color:#fff}.bx--tile-content{width:100%;height:100%}.bx--tile-input{display:none}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--lightbox{width:66rem;box-shadow:0 12px 24px 0 rgba(0,0,0,0.1)}.bx--lightbox__main{position:relative}.bx--lightbox__btn{border:0;background:transparent;cursor:pointer;position:absolute;top:50%}.bx--lightbox__btn:first-of-type{left:-2rem}.bx--lightbox__btn:last-of-type{right:-2rem;transform:rotate(180deg)}.bx--lightbox__btn:focus{outline:1px solid #3d70b2}.bx--lightbox__btn svg{height:1.5rem;fill:#8c9ba5}.bx--lightbox__item{display:none;width:100%}.bx--lightbox__item--shown{display:block}.bx--lightbox__footer{background:#fff;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--carousel{display:flex;align-items:center}.bx--carousel-container{max-width:50.625rem;overflow:hidden;padding:0 1px}.bx--filmstrip{display:flex;justify-content:space-between;transition:transform 100ms cubic-bezier(0.25, 0, 1, 1);padding:1.5rem 0;width:auto}.bx--filmstrip-btn{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;width:100%;height:1.25rem;width:1.25rem;margin-bottom:1rem;margin-right:.1875rem;margin-left:.1875rem}.bx--filmstrip-btn::-moz-focus-inner{border:0}.bx--filmstrip-btn:hover{cursor:pointer}.bx--filmstrip-btn:focus{outline:1px solid #3d70b2}.bx--carousel__btn{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;cursor:pointer;padding:0}.bx--carousel__btn::-moz-focus-inner{border:0}.bx--carousel__btn:first-child{margin-right:1.25rem}.bx--carousel__btn:last-child{margin-left:1.25rem}.bx--carousel__btn:focus{outline:1px solid #3d70b2}.bx--carousel__btn:last-of-type{transform:rotate(180deg)}.bx--carousel__btn svg{height:1.5rem;width:1rem;fill:#3d70b2}.bx--carousel__item{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;display:inline-block;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;cursor:pointer;width:100%;padding:0;line-height:0;margin-right:1.25rem;cursor:pointer}.bx--carousel__item::-moz-focus-inner{border:0}.bx--carousel__item:hover,.bx--carousel__item:focus{outline:1px solid #3d70b2}.bx--carousel__item--active{outline:1px solid #3d70b2}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--skeleton__text{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);width:100%;height:1rem;margin-bottom:.5rem}.bx--skeleton__text:hover,.bx--skeleton__text:focus,.bx--skeleton__text:active{border:none;outline:none;cursor:default}.bx--skeleton__text:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}.bx--skeleton__heading{height:1.5rem;margin-bottom:.75rem}.bx--icon--skeleton{position:relative;border:none;padding:0;box-shadow:none;pointer-events:none;background:rgba(61,112,178,0.1);display:inline-block;width:1rem;height:1rem}.bx--icon--skeleton:hover,.bx--icon--skeleton:focus,.bx--icon--skeleton:active{border:none;outline:none;cursor:default}.bx--icon--skeleton:before{content:'';width:0%;height:100%;position:absolute;top:0;left:0;opacity:0.3;background:rgba(61,112,178,0.1);animation:3000ms ease-in-out skeleton infinite}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--text-truncate--end{width:100%;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bx--text-truncate--front{width:100%;display:inline-block;direction:rtl;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--footer--bottom-fixed{position:fixed;bottom:0;left:0}.bx--footer{font-family:\"ibm-plex-sans\",Helvetica Neue,Arial,sans-serif;box-sizing:border-box;display:flex;align-items:center;border-top:2px solid #3d70b2;background-color:#fff;min-height:3.5rem;z-index:5000;padding:1.25rem 5%;width:100%}.bx--footer-info{display:flex}@media screen and (max-width: 600px){.bx--footer-info{flex-direction:column}}.bx--footer-info__item{font-size:1.125rem;line-height:1.5;display:flex;flex-direction:column;margin:0;margin-right:4rem}.bx--footer-info__item>.bx--link{font-weight:600}.bx--footer-info__item>.bx--footer-label{font-size:0.875rem;line-height:1.5;margin:0}@media screen and (max-width: 600px){.bx--footer-info__item>.bx--footer-label{display:none}}.bx--footer-cta{margin-left:auto}@keyframes skeleton{0%{width:0%;left:0;right:auto;opacity:0.3}20%{width:100%;left:0;right:auto;opacity:1}28%{width:100%;left:auto;right:0}51%{width:0%;left:auto;right:0}58%{width:0%;left:auto;right:0}82%{width:100%;left:auto;right:0}83%{width:100%;left:0;right:auto}96%{width:0%;left:0;right:auto}100%{width:0%;left:0;right:auto;opacity:0.3}}.bx--fab{transform:rotate(0);transition:transform 250ms;transform-origin:center;display:inline-block;width:4.5rem;height:4.5rem;text-decoration:none;filter:drop-shadow(0px 3px 3px 0 rgba(0,0,0,0.1))}.bx--fab__hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;visibility:visible;white-space:nowrap;color:#fff}.bx--fab__svg{width:100%}.bx--fab__svg .bx--fab__hexagon{transition:fill 250ms;fill:#5596e6}.bx--fab__svg .bx--fab__plus-icon{transform:rotate(0);transition:transform 250ms;transform-origin:center;fill:#fff}.bx--fab[data-state='closed']{transform:rotate(90deg);transition:transform 250ms;transform-origin:center}.bx--fab[data-state='closed'] .bx--fab__hexagon{transition:fill 250ms;fill:#42535c}.bx--fab[data-state='closed'] .bx--fab__plus-icon{transform:rotate(-45deg);transition:transform 250ms;transform-origin:center}\n";
})();

/***/ }),

/***/ "./node_modules/gridlex/dist/gridlex.min.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "[class*=grid-],[class*=grid_],[class~=grid]{box-sizing:border-box;display:flex;flex-flow:row wrap;margin:0 -.5rem}[class*=col-],[class*=col_],[class~=col]{box-sizing:border-box;padding:0 .5rem 1rem;max-width:100%}[class*=col_],[class~=col]{flex:1 1 0%}[class*=col-]{flex:none}[class*=grid-][class*=col-],[class*=grid-][class*=col_],[class*=grid-][class~=col],[class*=grid_][class*=col-],[class*=grid_][class*=col_],[class*=grid_][class~=col],[class~=grid][class*=col-],[class~=grid][class*=col_],[class~=grid][class~=col]{margin:0;padding:0}[class*=grid-][class*=-noGutter]{margin:0}[class*=grid-][class*=-noGutter]>[class*=col-],[class*=grid-][class*=-noGutter]>[class~=col]{padding:0}[class*=grid-][class*=-noWrap]{flex-wrap:nowrap}[class*=grid-][class*=-center]{justify-content:center}[class*=grid-][class*=-right]{justify-content:flex-end;align-self:flex-end;margin-left:auto}[class*=grid-][class*=-top]{align-items:flex-start}[class*=grid-][class*=-middle]{align-items:center}[class*=grid-][class*=-bottom]{align-items:flex-end}[class*=grid-][class*=-reverse]{flex-direction:row-reverse}[class*=grid-][class*=-column]{flex-direction:column}[class*=grid-][class*=-column]>[class*=col-]{flex-basis:auto}[class*=grid-][class*=-column-reverse]{flex-direction:column-reverse}[class*=grid-][class*=-spaceBetween]{justify-content:space-between}[class*=grid-][class*=-spaceAround]{justify-content:space-around}[class*=grid-][class*=-equalHeight]>[class*=col-],[class*=grid-][class*=-equalHeight]>[class*=col_],[class*=grid-][class*=-equalHeight]>[class~=col]{align-self:stretch}[class*=grid-][class*=-equalHeight]>[class*=col-]>*,[class*=grid-][class*=-equalHeight]>[class*=col_]>*,[class*=grid-][class*=-equalHeight]>[class~=col]>*{height:100%}[class*=grid-][class*=-noBottom]>[class*=col-],[class*=grid-][class*=-noBottom]>[class*=col_],[class*=grid-][class*=-noBottom]>[class~=col]{padding-bottom:0}[class*=col-][class*=-top]{align-self:flex-start}[class*=col-][class*=-middle]{align-self:center}[class*=col-][class*=-bottom]{align-self:flex-end}[class*=col-][class*=-first]{order:-1}[class*=col-][class*=-last]{order:1}[class*=grid-1]>[class*=col-],[class*=grid-1]>[class*=col_],[class*=grid-1]>[class~=col]{flex-basis:100%;max-width:100%}[class*=grid-2]>[class*=col-],[class*=grid-2]>[class*=col_],[class*=grid-2]>[class~=col]{flex-basis:50%;max-width:50%}[class*=grid-3]>[class*=col-],[class*=grid-3]>[class*=col_],[class*=grid-3]>[class~=col]{flex-basis:33.33333%;max-width:33.33333%}[class*=grid-4]>[class*=col-],[class*=grid-4]>[class*=col_],[class*=grid-4]>[class~=col]{flex-basis:25%;max-width:25%}[class*=grid-5]>[class*=col-],[class*=grid-5]>[class*=col_],[class*=grid-5]>[class~=col]{flex-basis:20%;max-width:20%}[class*=grid-6]>[class*=col-],[class*=grid-6]>[class*=col_],[class*=grid-6]>[class~=col]{flex-basis:16.66667%;max-width:16.66667%}[class*=grid-7]>[class*=col-],[class*=grid-7]>[class*=col_],[class*=grid-7]>[class~=col]{flex-basis:14.28571%;max-width:14.28571%}[class*=grid-8]>[class*=col-],[class*=grid-8]>[class*=col_],[class*=grid-8]>[class~=col]{flex-basis:12.5%;max-width:12.5%}[class*=grid-9]>[class*=col-],[class*=grid-9]>[class*=col_],[class*=grid-9]>[class~=col]{flex-basis:11.11111%;max-width:11.11111%}[class*=grid-10]>[class*=col-],[class*=grid-10]>[class*=col_],[class*=grid-10]>[class~=col]{flex-basis:10%;max-width:10%}[class*=grid-11]>[class*=col-],[class*=grid-11]>[class*=col_],[class*=grid-11]>[class~=col]{flex-basis:9.09091%;max-width:9.09091%}[class*=grid-12]>[class*=col-],[class*=grid-12]>[class*=col_],[class*=grid-12]>[class~=col]{flex-basis:8.33333%;max-width:8.33333%}@media (max-width:80em){[class*=_lg-1]>[class*=col-],[class*=_lg-1]>[class*=col_],[class*=_lg-1]>[class~=col]{flex-basis:100%;max-width:100%}[class*=_lg-2]>[class*=col-],[class*=_lg-2]>[class*=col_],[class*=_lg-2]>[class~=col]{flex-basis:50%;max-width:50%}[class*=_lg-3]>[class*=col-],[class*=_lg-3]>[class*=col_],[class*=_lg-3]>[class~=col]{flex-basis:33.33333%;max-width:33.33333%}[class*=_lg-4]>[class*=col-],[class*=_lg-4]>[class*=col_],[class*=_lg-4]>[class~=col]{flex-basis:25%;max-width:25%}[class*=_lg-5]>[class*=col-],[class*=_lg-5]>[class*=col_],[class*=_lg-5]>[class~=col]{flex-basis:20%;max-width:20%}[class*=_lg-6]>[class*=col-],[class*=_lg-6]>[class*=col_],[class*=_lg-6]>[class~=col]{flex-basis:16.66667%;max-width:16.66667%}[class*=_lg-7]>[class*=col-],[class*=_lg-7]>[class*=col_],[class*=_lg-7]>[class~=col]{flex-basis:14.28571%;max-width:14.28571%}[class*=_lg-8]>[class*=col-],[class*=_lg-8]>[class*=col_],[class*=_lg-8]>[class~=col]{flex-basis:12.5%;max-width:12.5%}[class*=_lg-9]>[class*=col-],[class*=_lg-9]>[class*=col_],[class*=_lg-9]>[class~=col]{flex-basis:11.11111%;max-width:11.11111%}[class*=_lg-10]>[class*=col-],[class*=_lg-10]>[class*=col_],[class*=_lg-10]>[class~=col]{flex-basis:10%;max-width:10%}[class*=_lg-11]>[class*=col-],[class*=_lg-11]>[class*=col_],[class*=_lg-11]>[class~=col]{flex-basis:9.09091%;max-width:9.09091%}[class*=_lg-12]>[class*=col-],[class*=_lg-12]>[class*=col_],[class*=_lg-12]>[class~=col]{flex-basis:8.33333%;max-width:8.33333%}}@media (max-width:64em){[class*=_md-1]>[class*=col-],[class*=_md-1]>[class*=col_],[class*=_md-1]>[class~=col]{flex-basis:100%;max-width:100%}[class*=_md-2]>[class*=col-],[class*=_md-2]>[class*=col_],[class*=_md-2]>[class~=col]{flex-basis:50%;max-width:50%}[class*=_md-3]>[class*=col-],[class*=_md-3]>[class*=col_],[class*=_md-3]>[class~=col]{flex-basis:33.33333%;max-width:33.33333%}[class*=_md-4]>[class*=col-],[class*=_md-4]>[class*=col_],[class*=_md-4]>[class~=col]{flex-basis:25%;max-width:25%}[class*=_md-5]>[class*=col-],[class*=_md-5]>[class*=col_],[class*=_md-5]>[class~=col]{flex-basis:20%;max-width:20%}[class*=_md-6]>[class*=col-],[class*=_md-6]>[class*=col_],[class*=_md-6]>[class~=col]{flex-basis:16.66667%;max-width:16.66667%}[class*=_md-7]>[class*=col-],[class*=_md-7]>[class*=col_],[class*=_md-7]>[class~=col]{flex-basis:14.28571%;max-width:14.28571%}[class*=_md-8]>[class*=col-],[class*=_md-8]>[class*=col_],[class*=_md-8]>[class~=col]{flex-basis:12.5%;max-width:12.5%}[class*=_md-9]>[class*=col-],[class*=_md-9]>[class*=col_],[class*=_md-9]>[class~=col]{flex-basis:11.11111%;max-width:11.11111%}[class*=_md-10]>[class*=col-],[class*=_md-10]>[class*=col_],[class*=_md-10]>[class~=col]{flex-basis:10%;max-width:10%}[class*=_md-11]>[class*=col-],[class*=_md-11]>[class*=col_],[class*=_md-11]>[class~=col]{flex-basis:9.09091%;max-width:9.09091%}[class*=_md-12]>[class*=col-],[class*=_md-12]>[class*=col_],[class*=_md-12]>[class~=col]{flex-basis:8.33333%;max-width:8.33333%}}@media (max-width:48em){[class*=_sm-1]>[class*=col-],[class*=_sm-1]>[class*=col_],[class*=_sm-1]>[class~=col]{flex-basis:100%;max-width:100%}[class*=_sm-2]>[class*=col-],[class*=_sm-2]>[class*=col_],[class*=_sm-2]>[class~=col]{flex-basis:50%;max-width:50%}[class*=_sm-3]>[class*=col-],[class*=_sm-3]>[class*=col_],[class*=_sm-3]>[class~=col]{flex-basis:33.33333%;max-width:33.33333%}[class*=_sm-4]>[class*=col-],[class*=_sm-4]>[class*=col_],[class*=_sm-4]>[class~=col]{flex-basis:25%;max-width:25%}[class*=_sm-5]>[class*=col-],[class*=_sm-5]>[class*=col_],[class*=_sm-5]>[class~=col]{flex-basis:20%;max-width:20%}[class*=_sm-6]>[class*=col-],[class*=_sm-6]>[class*=col_],[class*=_sm-6]>[class~=col]{flex-basis:16.66667%;max-width:16.66667%}[class*=_sm-7]>[class*=col-],[class*=_sm-7]>[class*=col_],[class*=_sm-7]>[class~=col]{flex-basis:14.28571%;max-width:14.28571%}[class*=_sm-8]>[class*=col-],[class*=_sm-8]>[class*=col_],[class*=_sm-8]>[class~=col]{flex-basis:12.5%;max-width:12.5%}[class*=_sm-9]>[class*=col-],[class*=_sm-9]>[class*=col_],[class*=_sm-9]>[class~=col]{flex-basis:11.11111%;max-width:11.11111%}[class*=_sm-10]>[class*=col-],[class*=_sm-10]>[class*=col_],[class*=_sm-10]>[class~=col]{flex-basis:10%;max-width:10%}[class*=_sm-11]>[class*=col-],[class*=_sm-11]>[class*=col_],[class*=_sm-11]>[class~=col]{flex-basis:9.09091%;max-width:9.09091%}[class*=_sm-12]>[class*=col-],[class*=_sm-12]>[class*=col_],[class*=_sm-12]>[class~=col]{flex-basis:8.33333%;max-width:8.33333%}}@media (max-width:36em){[class*=_xs-1]>[class*=col-],[class*=_xs-1]>[class*=col_],[class*=_xs-1]>[class~=col]{flex-basis:100%;max-width:100%}[class*=_xs-2]>[class*=col-],[class*=_xs-2]>[class*=col_],[class*=_xs-2]>[class~=col]{flex-basis:50%;max-width:50%}[class*=_xs-3]>[class*=col-],[class*=_xs-3]>[class*=col_],[class*=_xs-3]>[class~=col]{flex-basis:33.33333%;max-width:33.33333%}[class*=_xs-4]>[class*=col-],[class*=_xs-4]>[class*=col_],[class*=_xs-4]>[class~=col]{flex-basis:25%;max-width:25%}[class*=_xs-5]>[class*=col-],[class*=_xs-5]>[class*=col_],[class*=_xs-5]>[class~=col]{flex-basis:20%;max-width:20%}[class*=_xs-6]>[class*=col-],[class*=_xs-6]>[class*=col_],[class*=_xs-6]>[class~=col]{flex-basis:16.66667%;max-width:16.66667%}[class*=_xs-7]>[class*=col-],[class*=_xs-7]>[class*=col_],[class*=_xs-7]>[class~=col]{flex-basis:14.28571%;max-width:14.28571%}[class*=_xs-8]>[class*=col-],[class*=_xs-8]>[class*=col_],[class*=_xs-8]>[class~=col]{flex-basis:12.5%;max-width:12.5%}[class*=_xs-9]>[class*=col-],[class*=_xs-9]>[class*=col_],[class*=_xs-9]>[class~=col]{flex-basis:11.11111%;max-width:11.11111%}[class*=_xs-10]>[class*=col-],[class*=_xs-10]>[class*=col_],[class*=_xs-10]>[class~=col]{flex-basis:10%;max-width:10%}[class*=_xs-11]>[class*=col-],[class*=_xs-11]>[class*=col_],[class*=_xs-11]>[class~=col]{flex-basis:9.09091%;max-width:9.09091%}[class*=_xs-12]>[class*=col-],[class*=_xs-12]>[class*=col_],[class*=_xs-12]>[class~=col]{flex-basis:8.33333%;max-width:8.33333%}}[class*=grid-]>[class*=col-1],[class*=grid_]>[class*=col-1],[class~=grid]>[class*=col-1]{flex-basis:8.33333%;max-width:8.33333%}[class*=grid-]>[class*=col-2],[class*=grid_]>[class*=col-2],[class~=grid]>[class*=col-2]{flex-basis:16.66667%;max-width:16.66667%}[class*=grid-]>[class*=col-3],[class*=grid_]>[class*=col-3],[class~=grid]>[class*=col-3]{flex-basis:25%;max-width:25%}[class*=grid-]>[class*=col-4],[class*=grid_]>[class*=col-4],[class~=grid]>[class*=col-4]{flex-basis:33.33333%;max-width:33.33333%}[class*=grid-]>[class*=col-5],[class*=grid_]>[class*=col-5],[class~=grid]>[class*=col-5]{flex-basis:41.66667%;max-width:41.66667%}[class*=grid-]>[class*=col-6],[class*=grid_]>[class*=col-6],[class~=grid]>[class*=col-6]{flex-basis:50%;max-width:50%}[class*=grid-]>[class*=col-7],[class*=grid_]>[class*=col-7],[class~=grid]>[class*=col-7]{flex-basis:58.33333%;max-width:58.33333%}[class*=grid-]>[class*=col-8],[class*=grid_]>[class*=col-8],[class~=grid]>[class*=col-8]{flex-basis:66.66667%;max-width:66.66667%}[class*=grid-]>[class*=col-9],[class*=grid_]>[class*=col-9],[class~=grid]>[class*=col-9]{flex-basis:75%;max-width:75%}[class*=grid-]>[class*=col-10],[class*=grid_]>[class*=col-10],[class~=grid]>[class*=col-10]{flex-basis:83.33333%;max-width:83.33333%}[class*=grid-]>[class*=col-11],[class*=grid_]>[class*=col-11],[class~=grid]>[class*=col-11]{flex-basis:91.66667%;max-width:91.66667%}[class*=grid-]>[class*=col-12],[class*=grid_]>[class*=col-12],[class~=grid]>[class*=col-12]{flex-basis:100%;max-width:100%}[class*=grid-]>[data-push-left*=off-0],[class*=grid_]>[data-push-left*=off-0],[class~=grid]>[data-push-left*=off-0]{margin-left:0}[class*=grid-]>[data-push-left*=off-1],[class*=grid_]>[data-push-left*=off-1],[class~=grid]>[data-push-left*=off-1]{margin-left:8.33333%}[class*=grid-]>[data-push-left*=off-2],[class*=grid_]>[data-push-left*=off-2],[class~=grid]>[data-push-left*=off-2]{margin-left:16.66667%}[class*=grid-]>[data-push-left*=off-3],[class*=grid_]>[data-push-left*=off-3],[class~=grid]>[data-push-left*=off-3]{margin-left:25%}[class*=grid-]>[data-push-left*=off-4],[class*=grid_]>[data-push-left*=off-4],[class~=grid]>[data-push-left*=off-4]{margin-left:33.33333%}[class*=grid-]>[data-push-left*=off-5],[class*=grid_]>[data-push-left*=off-5],[class~=grid]>[data-push-left*=off-5]{margin-left:41.66667%}[class*=grid-]>[data-push-left*=off-6],[class*=grid_]>[data-push-left*=off-6],[class~=grid]>[data-push-left*=off-6]{margin-left:50%}[class*=grid-]>[data-push-left*=off-7],[class*=grid_]>[data-push-left*=off-7],[class~=grid]>[data-push-left*=off-7]{margin-left:58.33333%}[class*=grid-]>[data-push-left*=off-8],[class*=grid_]>[data-push-left*=off-8],[class~=grid]>[data-push-left*=off-8]{margin-left:66.66667%}[class*=grid-]>[data-push-left*=off-9],[class*=grid_]>[data-push-left*=off-9],[class~=grid]>[data-push-left*=off-9]{margin-left:75%}[class*=grid-]>[data-push-left*=off-10],[class*=grid_]>[data-push-left*=off-10],[class~=grid]>[data-push-left*=off-10]{margin-left:83.33333%}[class*=grid-]>[data-push-left*=off-11],[class*=grid_]>[data-push-left*=off-11],[class~=grid]>[data-push-left*=off-11]{margin-left:91.66667%}[class*=grid-]>[data-push-right*=off-0],[class*=grid_]>[data-push-right*=off-0],[class~=grid]>[data-push-right*=off-0]{margin-right:0}[class*=grid-]>[data-push-right*=off-1],[class*=grid_]>[data-push-right*=off-1],[class~=grid]>[data-push-right*=off-1]{margin-right:8.33333%}[class*=grid-]>[data-push-right*=off-2],[class*=grid_]>[data-push-right*=off-2],[class~=grid]>[data-push-right*=off-2]{margin-right:16.66667%}[class*=grid-]>[data-push-right*=off-3],[class*=grid_]>[data-push-right*=off-3],[class~=grid]>[data-push-right*=off-3]{margin-right:25%}[class*=grid-]>[data-push-right*=off-4],[class*=grid_]>[data-push-right*=off-4],[class~=grid]>[data-push-right*=off-4]{margin-right:33.33333%}[class*=grid-]>[data-push-right*=off-5],[class*=grid_]>[data-push-right*=off-5],[class~=grid]>[data-push-right*=off-5]{margin-right:41.66667%}[class*=grid-]>[data-push-right*=off-6],[class*=grid_]>[data-push-right*=off-6],[class~=grid]>[data-push-right*=off-6]{margin-right:50%}[class*=grid-]>[data-push-right*=off-7],[class*=grid_]>[data-push-right*=off-7],[class~=grid]>[data-push-right*=off-7]{margin-right:58.33333%}[class*=grid-]>[data-push-right*=off-8],[class*=grid_]>[data-push-right*=off-8],[class~=grid]>[data-push-right*=off-8]{margin-right:66.66667%}[class*=grid-]>[data-push-right*=off-9],[class*=grid_]>[data-push-right*=off-9],[class~=grid]>[data-push-right*=off-9]{margin-right:75%}[class*=grid-]>[data-push-right*=off-10],[class*=grid_]>[data-push-right*=off-10],[class~=grid]>[data-push-right*=off-10]{margin-right:83.33333%}[class*=grid-]>[data-push-right*=off-11],[class*=grid_]>[data-push-right*=off-11],[class~=grid]>[data-push-right*=off-11]{margin-right:91.66667%}@media (max-width:80em){[class*=grid-]>[class*=_lg-1],[class*=grid_]>[class*=_lg-1],[class~=grid]>[class*=_lg-1]{flex-basis:8.33333%;max-width:8.33333%}[class*=grid-]>[class*=_lg-2],[class*=grid_]>[class*=_lg-2],[class~=grid]>[class*=_lg-2]{flex-basis:16.66667%;max-width:16.66667%}[class*=grid-]>[class*=_lg-3],[class*=grid_]>[class*=_lg-3],[class~=grid]>[class*=_lg-3]{flex-basis:25%;max-width:25%}[class*=grid-]>[class*=_lg-4],[class*=grid_]>[class*=_lg-4],[class~=grid]>[class*=_lg-4]{flex-basis:33.33333%;max-width:33.33333%}[class*=grid-]>[class*=_lg-5],[class*=grid_]>[class*=_lg-5],[class~=grid]>[class*=_lg-5]{flex-basis:41.66667%;max-width:41.66667%}[class*=grid-]>[class*=_lg-6],[class*=grid_]>[class*=_lg-6],[class~=grid]>[class*=_lg-6]{flex-basis:50%;max-width:50%}[class*=grid-]>[class*=_lg-7],[class*=grid_]>[class*=_lg-7],[class~=grid]>[class*=_lg-7]{flex-basis:58.33333%;max-width:58.33333%}[class*=grid-]>[class*=_lg-8],[class*=grid_]>[class*=_lg-8],[class~=grid]>[class*=_lg-8]{flex-basis:66.66667%;max-width:66.66667%}[class*=grid-]>[class*=_lg-9],[class*=grid_]>[class*=_lg-9],[class~=grid]>[class*=_lg-9]{flex-basis:75%;max-width:75%}[class*=grid-]>[class*=_lg-10],[class*=grid_]>[class*=_lg-10],[class~=grid]>[class*=_lg-10]{flex-basis:83.33333%;max-width:83.33333%}[class*=grid-]>[class*=_lg-11],[class*=grid_]>[class*=_lg-11],[class~=grid]>[class*=_lg-11]{flex-basis:91.66667%;max-width:91.66667%}[class*=grid-]>[class*=_lg-12],[class*=grid_]>[class*=_lg-12],[class~=grid]>[class*=_lg-12]{flex-basis:100%;max-width:100%}[class*=grid-]>[data-push-left*=_lg-0],[class*=grid_]>[data-push-left*=_lg-0],[class~=grid]>[data-push-left*=_lg-0]{margin-left:0}[class*=grid-]>[data-push-left*=_lg-1],[class*=grid_]>[data-push-left*=_lg-1],[class~=grid]>[data-push-left*=_lg-1]{margin-left:8.33333%}[class*=grid-]>[data-push-left*=_lg-2],[class*=grid_]>[data-push-left*=_lg-2],[class~=grid]>[data-push-left*=_lg-2]{margin-left:16.66667%}[class*=grid-]>[data-push-left*=_lg-3],[class*=grid_]>[data-push-left*=_lg-3],[class~=grid]>[data-push-left*=_lg-3]{margin-left:25%}[class*=grid-]>[data-push-left*=_lg-4],[class*=grid_]>[data-push-left*=_lg-4],[class~=grid]>[data-push-left*=_lg-4]{margin-left:33.33333%}[class*=grid-]>[data-push-left*=_lg-5],[class*=grid_]>[data-push-left*=_lg-5],[class~=grid]>[data-push-left*=_lg-5]{margin-left:41.66667%}[class*=grid-]>[data-push-left*=_lg-6],[class*=grid_]>[data-push-left*=_lg-6],[class~=grid]>[data-push-left*=_lg-6]{margin-left:50%}[class*=grid-]>[data-push-left*=_lg-7],[class*=grid_]>[data-push-left*=_lg-7],[class~=grid]>[data-push-left*=_lg-7]{margin-left:58.33333%}[class*=grid-]>[data-push-left*=_lg-8],[class*=grid_]>[data-push-left*=_lg-8],[class~=grid]>[data-push-left*=_lg-8]{margin-left:66.66667%}[class*=grid-]>[data-push-left*=_lg-9],[class*=grid_]>[data-push-left*=_lg-9],[class~=grid]>[data-push-left*=_lg-9]{margin-left:75%}[class*=grid-]>[data-push-left*=_lg-10],[class*=grid_]>[data-push-left*=_lg-10],[class~=grid]>[data-push-left*=_lg-10]{margin-left:83.33333%}[class*=grid-]>[data-push-left*=_lg-11],[class*=grid_]>[data-push-left*=_lg-11],[class~=grid]>[data-push-left*=_lg-11]{margin-left:91.66667%}[class*=grid-]>[data-push-right*=_lg-0],[class*=grid_]>[data-push-right*=_lg-0],[class~=grid]>[data-push-right*=_lg-0]{margin-right:0}[class*=grid-]>[data-push-right*=_lg-1],[class*=grid_]>[data-push-right*=_lg-1],[class~=grid]>[data-push-right*=_lg-1]{margin-right:8.33333%}[class*=grid-]>[data-push-right*=_lg-2],[class*=grid_]>[data-push-right*=_lg-2],[class~=grid]>[data-push-right*=_lg-2]{margin-right:16.66667%}[class*=grid-]>[data-push-right*=_lg-3],[class*=grid_]>[data-push-right*=_lg-3],[class~=grid]>[data-push-right*=_lg-3]{margin-right:25%}[class*=grid-]>[data-push-right*=_lg-4],[class*=grid_]>[data-push-right*=_lg-4],[class~=grid]>[data-push-right*=_lg-4]{margin-right:33.33333%}[class*=grid-]>[data-push-right*=_lg-5],[class*=grid_]>[data-push-right*=_lg-5],[class~=grid]>[data-push-right*=_lg-5]{margin-right:41.66667%}[class*=grid-]>[data-push-right*=_lg-6],[class*=grid_]>[data-push-right*=_lg-6],[class~=grid]>[data-push-right*=_lg-6]{margin-right:50%}[class*=grid-]>[data-push-right*=_lg-7],[class*=grid_]>[data-push-right*=_lg-7],[class~=grid]>[data-push-right*=_lg-7]{margin-right:58.33333%}[class*=grid-]>[data-push-right*=_lg-8],[class*=grid_]>[data-push-right*=_lg-8],[class~=grid]>[data-push-right*=_lg-8]{margin-right:66.66667%}[class*=grid-]>[data-push-right*=_lg-9],[class*=grid_]>[data-push-right*=_lg-9],[class~=grid]>[data-push-right*=_lg-9]{margin-right:75%}[class*=grid-]>[data-push-right*=_lg-10],[class*=grid_]>[data-push-right*=_lg-10],[class~=grid]>[data-push-right*=_lg-10]{margin-right:83.33333%}[class*=grid-]>[data-push-right*=_lg-11],[class*=grid_]>[data-push-right*=_lg-11],[class~=grid]>[data-push-right*=_lg-11]{margin-right:91.66667%}[class*=grid-] [class*=_lg-first],[class*=grid_] [class*=_lg-first],[class~=grid] [class*=_lg-first]{order:-1}[class*=grid-] [class*=_lg-last],[class*=grid_] [class*=_lg-last],[class~=grid] [class*=_lg-last]{order:1}}@media (max-width:64em){[class*=grid-]>[class*=_md-1],[class*=grid_]>[class*=_md-1],[class~=grid]>[class*=_md-1]{flex-basis:8.33333%;max-width:8.33333%}[class*=grid-]>[class*=_md-2],[class*=grid_]>[class*=_md-2],[class~=grid]>[class*=_md-2]{flex-basis:16.66667%;max-width:16.66667%}[class*=grid-]>[class*=_md-3],[class*=grid_]>[class*=_md-3],[class~=grid]>[class*=_md-3]{flex-basis:25%;max-width:25%}[class*=grid-]>[class*=_md-4],[class*=grid_]>[class*=_md-4],[class~=grid]>[class*=_md-4]{flex-basis:33.33333%;max-width:33.33333%}[class*=grid-]>[class*=_md-5],[class*=grid_]>[class*=_md-5],[class~=grid]>[class*=_md-5]{flex-basis:41.66667%;max-width:41.66667%}[class*=grid-]>[class*=_md-6],[class*=grid_]>[class*=_md-6],[class~=grid]>[class*=_md-6]{flex-basis:50%;max-width:50%}[class*=grid-]>[class*=_md-7],[class*=grid_]>[class*=_md-7],[class~=grid]>[class*=_md-7]{flex-basis:58.33333%;max-width:58.33333%}[class*=grid-]>[class*=_md-8],[class*=grid_]>[class*=_md-8],[class~=grid]>[class*=_md-8]{flex-basis:66.66667%;max-width:66.66667%}[class*=grid-]>[class*=_md-9],[class*=grid_]>[class*=_md-9],[class~=grid]>[class*=_md-9]{flex-basis:75%;max-width:75%}[class*=grid-]>[class*=_md-10],[class*=grid_]>[class*=_md-10],[class~=grid]>[class*=_md-10]{flex-basis:83.33333%;max-width:83.33333%}[class*=grid-]>[class*=_md-11],[class*=grid_]>[class*=_md-11],[class~=grid]>[class*=_md-11]{flex-basis:91.66667%;max-width:91.66667%}[class*=grid-]>[class*=_md-12],[class*=grid_]>[class*=_md-12],[class~=grid]>[class*=_md-12]{flex-basis:100%;max-width:100%}[class*=grid-]>[data-push-left*=_md-0],[class*=grid_]>[data-push-left*=_md-0],[class~=grid]>[data-push-left*=_md-0]{margin-left:0}[class*=grid-]>[data-push-left*=_md-1],[class*=grid_]>[data-push-left*=_md-1],[class~=grid]>[data-push-left*=_md-1]{margin-left:8.33333%}[class*=grid-]>[data-push-left*=_md-2],[class*=grid_]>[data-push-left*=_md-2],[class~=grid]>[data-push-left*=_md-2]{margin-left:16.66667%}[class*=grid-]>[data-push-left*=_md-3],[class*=grid_]>[data-push-left*=_md-3],[class~=grid]>[data-push-left*=_md-3]{margin-left:25%}[class*=grid-]>[data-push-left*=_md-4],[class*=grid_]>[data-push-left*=_md-4],[class~=grid]>[data-push-left*=_md-4]{margin-left:33.33333%}[class*=grid-]>[data-push-left*=_md-5],[class*=grid_]>[data-push-left*=_md-5],[class~=grid]>[data-push-left*=_md-5]{margin-left:41.66667%}[class*=grid-]>[data-push-left*=_md-6],[class*=grid_]>[data-push-left*=_md-6],[class~=grid]>[data-push-left*=_md-6]{margin-left:50%}[class*=grid-]>[data-push-left*=_md-7],[class*=grid_]>[data-push-left*=_md-7],[class~=grid]>[data-push-left*=_md-7]{margin-left:58.33333%}[class*=grid-]>[data-push-left*=_md-8],[class*=grid_]>[data-push-left*=_md-8],[class~=grid]>[data-push-left*=_md-8]{margin-left:66.66667%}[class*=grid-]>[data-push-left*=_md-9],[class*=grid_]>[data-push-left*=_md-9],[class~=grid]>[data-push-left*=_md-9]{margin-left:75%}[class*=grid-]>[data-push-left*=_md-10],[class*=grid_]>[data-push-left*=_md-10],[class~=grid]>[data-push-left*=_md-10]{margin-left:83.33333%}[class*=grid-]>[data-push-left*=_md-11],[class*=grid_]>[data-push-left*=_md-11],[class~=grid]>[data-push-left*=_md-11]{margin-left:91.66667%}[class*=grid-]>[data-push-right*=_md-0],[class*=grid_]>[data-push-right*=_md-0],[class~=grid]>[data-push-right*=_md-0]{margin-right:0}[class*=grid-]>[data-push-right*=_md-1],[class*=grid_]>[data-push-right*=_md-1],[class~=grid]>[data-push-right*=_md-1]{margin-right:8.33333%}[class*=grid-]>[data-push-right*=_md-2],[class*=grid_]>[data-push-right*=_md-2],[class~=grid]>[data-push-right*=_md-2]{margin-right:16.66667%}[class*=grid-]>[data-push-right*=_md-3],[class*=grid_]>[data-push-right*=_md-3],[class~=grid]>[data-push-right*=_md-3]{margin-right:25%}[class*=grid-]>[data-push-right*=_md-4],[class*=grid_]>[data-push-right*=_md-4],[class~=grid]>[data-push-right*=_md-4]{margin-right:33.33333%}[class*=grid-]>[data-push-right*=_md-5],[class*=grid_]>[data-push-right*=_md-5],[class~=grid]>[data-push-right*=_md-5]{margin-right:41.66667%}[class*=grid-]>[data-push-right*=_md-6],[class*=grid_]>[data-push-right*=_md-6],[class~=grid]>[data-push-right*=_md-6]{margin-right:50%}[class*=grid-]>[data-push-right*=_md-7],[class*=grid_]>[data-push-right*=_md-7],[class~=grid]>[data-push-right*=_md-7]{margin-right:58.33333%}[class*=grid-]>[data-push-right*=_md-8],[class*=grid_]>[data-push-right*=_md-8],[class~=grid]>[data-push-right*=_md-8]{margin-right:66.66667%}[class*=grid-]>[data-push-right*=_md-9],[class*=grid_]>[data-push-right*=_md-9],[class~=grid]>[data-push-right*=_md-9]{margin-right:75%}[class*=grid-]>[data-push-right*=_md-10],[class*=grid_]>[data-push-right*=_md-10],[class~=grid]>[data-push-right*=_md-10]{margin-right:83.33333%}[class*=grid-]>[data-push-right*=_md-11],[class*=grid_]>[data-push-right*=_md-11],[class~=grid]>[data-push-right*=_md-11]{margin-right:91.66667%}[class*=grid-] [class*=_md-first],[class*=grid_] [class*=_md-first],[class~=grid] [class*=_md-first]{order:-1}[class*=grid-] [class*=_md-last],[class*=grid_] [class*=_md-last],[class~=grid] [class*=_md-last]{order:1}}@media (max-width:48em){[class*=grid-]>[class*=_sm-1],[class*=grid_]>[class*=_sm-1],[class~=grid]>[class*=_sm-1]{flex-basis:8.33333%;max-width:8.33333%}[class*=grid-]>[class*=_sm-2],[class*=grid_]>[class*=_sm-2],[class~=grid]>[class*=_sm-2]{flex-basis:16.66667%;max-width:16.66667%}[class*=grid-]>[class*=_sm-3],[class*=grid_]>[class*=_sm-3],[class~=grid]>[class*=_sm-3]{flex-basis:25%;max-width:25%}[class*=grid-]>[class*=_sm-4],[class*=grid_]>[class*=_sm-4],[class~=grid]>[class*=_sm-4]{flex-basis:33.33333%;max-width:33.33333%}[class*=grid-]>[class*=_sm-5],[class*=grid_]>[class*=_sm-5],[class~=grid]>[class*=_sm-5]{flex-basis:41.66667%;max-width:41.66667%}[class*=grid-]>[class*=_sm-6],[class*=grid_]>[class*=_sm-6],[class~=grid]>[class*=_sm-6]{flex-basis:50%;max-width:50%}[class*=grid-]>[class*=_sm-7],[class*=grid_]>[class*=_sm-7],[class~=grid]>[class*=_sm-7]{flex-basis:58.33333%;max-width:58.33333%}[class*=grid-]>[class*=_sm-8],[class*=grid_]>[class*=_sm-8],[class~=grid]>[class*=_sm-8]{flex-basis:66.66667%;max-width:66.66667%}[class*=grid-]>[class*=_sm-9],[class*=grid_]>[class*=_sm-9],[class~=grid]>[class*=_sm-9]{flex-basis:75%;max-width:75%}[class*=grid-]>[class*=_sm-10],[class*=grid_]>[class*=_sm-10],[class~=grid]>[class*=_sm-10]{flex-basis:83.33333%;max-width:83.33333%}[class*=grid-]>[class*=_sm-11],[class*=grid_]>[class*=_sm-11],[class~=grid]>[class*=_sm-11]{flex-basis:91.66667%;max-width:91.66667%}[class*=grid-]>[class*=_sm-12],[class*=grid_]>[class*=_sm-12],[class~=grid]>[class*=_sm-12]{flex-basis:100%;max-width:100%}[class*=grid-]>[data-push-left*=_sm-0],[class*=grid_]>[data-push-left*=_sm-0],[class~=grid]>[data-push-left*=_sm-0]{margin-left:0}[class*=grid-]>[data-push-left*=_sm-1],[class*=grid_]>[data-push-left*=_sm-1],[class~=grid]>[data-push-left*=_sm-1]{margin-left:8.33333%}[class*=grid-]>[data-push-left*=_sm-2],[class*=grid_]>[data-push-left*=_sm-2],[class~=grid]>[data-push-left*=_sm-2]{margin-left:16.66667%}[class*=grid-]>[data-push-left*=_sm-3],[class*=grid_]>[data-push-left*=_sm-3],[class~=grid]>[data-push-left*=_sm-3]{margin-left:25%}[class*=grid-]>[data-push-left*=_sm-4],[class*=grid_]>[data-push-left*=_sm-4],[class~=grid]>[data-push-left*=_sm-4]{margin-left:33.33333%}[class*=grid-]>[data-push-left*=_sm-5],[class*=grid_]>[data-push-left*=_sm-5],[class~=grid]>[data-push-left*=_sm-5]{margin-left:41.66667%}[class*=grid-]>[data-push-left*=_sm-6],[class*=grid_]>[data-push-left*=_sm-6],[class~=grid]>[data-push-left*=_sm-6]{margin-left:50%}[class*=grid-]>[data-push-left*=_sm-7],[class*=grid_]>[data-push-left*=_sm-7],[class~=grid]>[data-push-left*=_sm-7]{margin-left:58.33333%}[class*=grid-]>[data-push-left*=_sm-8],[class*=grid_]>[data-push-left*=_sm-8],[class~=grid]>[data-push-left*=_sm-8]{margin-left:66.66667%}[class*=grid-]>[data-push-left*=_sm-9],[class*=grid_]>[data-push-left*=_sm-9],[class~=grid]>[data-push-left*=_sm-9]{margin-left:75%}[class*=grid-]>[data-push-left*=_sm-10],[class*=grid_]>[data-push-left*=_sm-10],[class~=grid]>[data-push-left*=_sm-10]{margin-left:83.33333%}[class*=grid-]>[data-push-left*=_sm-11],[class*=grid_]>[data-push-left*=_sm-11],[class~=grid]>[data-push-left*=_sm-11]{margin-left:91.66667%}[class*=grid-]>[data-push-right*=_sm-0],[class*=grid_]>[data-push-right*=_sm-0],[class~=grid]>[data-push-right*=_sm-0]{margin-right:0}[class*=grid-]>[data-push-right*=_sm-1],[class*=grid_]>[data-push-right*=_sm-1],[class~=grid]>[data-push-right*=_sm-1]{margin-right:8.33333%}[class*=grid-]>[data-push-right*=_sm-2],[class*=grid_]>[data-push-right*=_sm-2],[class~=grid]>[data-push-right*=_sm-2]{margin-right:16.66667%}[class*=grid-]>[data-push-right*=_sm-3],[class*=grid_]>[data-push-right*=_sm-3],[class~=grid]>[data-push-right*=_sm-3]{margin-right:25%}[class*=grid-]>[data-push-right*=_sm-4],[class*=grid_]>[data-push-right*=_sm-4],[class~=grid]>[data-push-right*=_sm-4]{margin-right:33.33333%}[class*=grid-]>[data-push-right*=_sm-5],[class*=grid_]>[data-push-right*=_sm-5],[class~=grid]>[data-push-right*=_sm-5]{margin-right:41.66667%}[class*=grid-]>[data-push-right*=_sm-6],[class*=grid_]>[data-push-right*=_sm-6],[class~=grid]>[data-push-right*=_sm-6]{margin-right:50%}[class*=grid-]>[data-push-right*=_sm-7],[class*=grid_]>[data-push-right*=_sm-7],[class~=grid]>[data-push-right*=_sm-7]{margin-right:58.33333%}[class*=grid-]>[data-push-right*=_sm-8],[class*=grid_]>[data-push-right*=_sm-8],[class~=grid]>[data-push-right*=_sm-8]{margin-right:66.66667%}[class*=grid-]>[data-push-right*=_sm-9],[class*=grid_]>[data-push-right*=_sm-9],[class~=grid]>[data-push-right*=_sm-9]{margin-right:75%}[class*=grid-]>[data-push-right*=_sm-10],[class*=grid_]>[data-push-right*=_sm-10],[class~=grid]>[data-push-right*=_sm-10]{margin-right:83.33333%}[class*=grid-]>[data-push-right*=_sm-11],[class*=grid_]>[data-push-right*=_sm-11],[class~=grid]>[data-push-right*=_sm-11]{margin-right:91.66667%}[class*=grid-] [class*=_sm-first],[class*=grid_] [class*=_sm-first],[class~=grid] [class*=_sm-first]{order:-1}[class*=grid-] [class*=_sm-last],[class*=grid_] [class*=_sm-last],[class~=grid] [class*=_sm-last]{order:1}}@media (max-width:36em){[class*=grid-]>[class*=_xs-1],[class*=grid_]>[class*=_xs-1],[class~=grid]>[class*=_xs-1]{flex-basis:8.33333%;max-width:8.33333%}[class*=grid-]>[class*=_xs-2],[class*=grid_]>[class*=_xs-2],[class~=grid]>[class*=_xs-2]{flex-basis:16.66667%;max-width:16.66667%}[class*=grid-]>[class*=_xs-3],[class*=grid_]>[class*=_xs-3],[class~=grid]>[class*=_xs-3]{flex-basis:25%;max-width:25%}[class*=grid-]>[class*=_xs-4],[class*=grid_]>[class*=_xs-4],[class~=grid]>[class*=_xs-4]{flex-basis:33.33333%;max-width:33.33333%}[class*=grid-]>[class*=_xs-5],[class*=grid_]>[class*=_xs-5],[class~=grid]>[class*=_xs-5]{flex-basis:41.66667%;max-width:41.66667%}[class*=grid-]>[class*=_xs-6],[class*=grid_]>[class*=_xs-6],[class~=grid]>[class*=_xs-6]{flex-basis:50%;max-width:50%}[class*=grid-]>[class*=_xs-7],[class*=grid_]>[class*=_xs-7],[class~=grid]>[class*=_xs-7]{flex-basis:58.33333%;max-width:58.33333%}[class*=grid-]>[class*=_xs-8],[class*=grid_]>[class*=_xs-8],[class~=grid]>[class*=_xs-8]{flex-basis:66.66667%;max-width:66.66667%}[class*=grid-]>[class*=_xs-9],[class*=grid_]>[class*=_xs-9],[class~=grid]>[class*=_xs-9]{flex-basis:75%;max-width:75%}[class*=grid-]>[class*=_xs-10],[class*=grid_]>[class*=_xs-10],[class~=grid]>[class*=_xs-10]{flex-basis:83.33333%;max-width:83.33333%}[class*=grid-]>[class*=_xs-11],[class*=grid_]>[class*=_xs-11],[class~=grid]>[class*=_xs-11]{flex-basis:91.66667%;max-width:91.66667%}[class*=grid-]>[class*=_xs-12],[class*=grid_]>[class*=_xs-12],[class~=grid]>[class*=_xs-12]{flex-basis:100%;max-width:100%}[class*=grid-]>[data-push-left*=_xs-0],[class*=grid_]>[data-push-left*=_xs-0],[class~=grid]>[data-push-left*=_xs-0]{margin-left:0}[class*=grid-]>[data-push-left*=_xs-1],[class*=grid_]>[data-push-left*=_xs-1],[class~=grid]>[data-push-left*=_xs-1]{margin-left:8.33333%}[class*=grid-]>[data-push-left*=_xs-2],[class*=grid_]>[data-push-left*=_xs-2],[class~=grid]>[data-push-left*=_xs-2]{margin-left:16.66667%}[class*=grid-]>[data-push-left*=_xs-3],[class*=grid_]>[data-push-left*=_xs-3],[class~=grid]>[data-push-left*=_xs-3]{margin-left:25%}[class*=grid-]>[data-push-left*=_xs-4],[class*=grid_]>[data-push-left*=_xs-4],[class~=grid]>[data-push-left*=_xs-4]{margin-left:33.33333%}[class*=grid-]>[data-push-left*=_xs-5],[class*=grid_]>[data-push-left*=_xs-5],[class~=grid]>[data-push-left*=_xs-5]{margin-left:41.66667%}[class*=grid-]>[data-push-left*=_xs-6],[class*=grid_]>[data-push-left*=_xs-6],[class~=grid]>[data-push-left*=_xs-6]{margin-left:50%}[class*=grid-]>[data-push-left*=_xs-7],[class*=grid_]>[data-push-left*=_xs-7],[class~=grid]>[data-push-left*=_xs-7]{margin-left:58.33333%}[class*=grid-]>[data-push-left*=_xs-8],[class*=grid_]>[data-push-left*=_xs-8],[class~=grid]>[data-push-left*=_xs-8]{margin-left:66.66667%}[class*=grid-]>[data-push-left*=_xs-9],[class*=grid_]>[data-push-left*=_xs-9],[class~=grid]>[data-push-left*=_xs-9]{margin-left:75%}[class*=grid-]>[data-push-left*=_xs-10],[class*=grid_]>[data-push-left*=_xs-10],[class~=grid]>[data-push-left*=_xs-10]{margin-left:83.33333%}[class*=grid-]>[data-push-left*=_xs-11],[class*=grid_]>[data-push-left*=_xs-11],[class~=grid]>[data-push-left*=_xs-11]{margin-left:91.66667%}[class*=grid-]>[data-push-right*=_xs-0],[class*=grid_]>[data-push-right*=_xs-0],[class~=grid]>[data-push-right*=_xs-0]{margin-right:0}[class*=grid-]>[data-push-right*=_xs-1],[class*=grid_]>[data-push-right*=_xs-1],[class~=grid]>[data-push-right*=_xs-1]{margin-right:8.33333%}[class*=grid-]>[data-push-right*=_xs-2],[class*=grid_]>[data-push-right*=_xs-2],[class~=grid]>[data-push-right*=_xs-2]{margin-right:16.66667%}[class*=grid-]>[data-push-right*=_xs-3],[class*=grid_]>[data-push-right*=_xs-3],[class~=grid]>[data-push-right*=_xs-3]{margin-right:25%}[class*=grid-]>[data-push-right*=_xs-4],[class*=grid_]>[data-push-right*=_xs-4],[class~=grid]>[data-push-right*=_xs-4]{margin-right:33.33333%}[class*=grid-]>[data-push-right*=_xs-5],[class*=grid_]>[data-push-right*=_xs-5],[class~=grid]>[data-push-right*=_xs-5]{margin-right:41.66667%}[class*=grid-]>[data-push-right*=_xs-6],[class*=grid_]>[data-push-right*=_xs-6],[class~=grid]>[data-push-right*=_xs-6]{margin-right:50%}[class*=grid-]>[data-push-right*=_xs-7],[class*=grid_]>[data-push-right*=_xs-7],[class~=grid]>[data-push-right*=_xs-7]{margin-right:58.33333%}[class*=grid-]>[data-push-right*=_xs-8],[class*=grid_]>[data-push-right*=_xs-8],[class~=grid]>[data-push-right*=_xs-8]{margin-right:66.66667%}[class*=grid-]>[data-push-right*=_xs-9],[class*=grid_]>[data-push-right*=_xs-9],[class~=grid]>[data-push-right*=_xs-9]{margin-right:75%}[class*=grid-]>[data-push-right*=_xs-10],[class*=grid_]>[data-push-right*=_xs-10],[class~=grid]>[data-push-right*=_xs-10]{margin-right:83.33333%}[class*=grid-]>[data-push-right*=_xs-11],[class*=grid_]>[data-push-right*=_xs-11],[class~=grid]>[data-push-right*=_xs-11]{margin-right:91.66667%}[class*=grid-] [class*=_xs-first],[class*=grid_] [class*=_xs-first],[class~=grid] [class*=_xs-first]{order:-1}[class*=grid-] [class*=_xs-last],[class*=grid_] [class*=_xs-last],[class~=grid] [class*=_xs-last]{order:1}}@media (max-width:80em){[class*=lg-hidden]{display:none}}@media (max-width:64em){[class*=md-hidden]{display:none}}@media (max-width:48em){[class*=sm-hidden]{display:none}}@media (max-width:36em){[class*=xs-hidden]{display:none}}";
})();

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_carbon_components_css_carbon_components_min_css__ = __webpack_require__("./node_modules/carbon-components/css/carbon-components.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_carbon_components_css_carbon_components_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_carbon_components_css_carbon_components_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gridlex_dist_gridlex_min_css__ = __webpack_require__("./node_modules/gridlex/dist/gridlex.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gridlex_dist_gridlex_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gridlex_dist_gridlex_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_styles_index_css__ = __webpack_require__("./src/styles/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_styles_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_MainApp__ = __webpack_require__("./src/MainApp.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/pages/index.js";






const HomePage = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_MainApp__["a" /* default */], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
});

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/MainApp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_App_css__ = __webpack_require__("./src/styles/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_AssetDetailsPage__ = __webpack_require__("./src/components/pages/AssetDetailsPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_AssetPaymentPage__ = __webpack_require__("./src/components/pages/AssetPaymentPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pages_ExploreAssetsPage__ = __webpack_require__("./src/components/pages/ExploreAssetsPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pages_ExplorePage__ = __webpack_require__("./src/components/pages/ExplorePage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pages_NotFoundPage__ = __webpack_require__("./src/components/pages/NotFoundPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pages_PortfolioPage__ = __webpack_require__("./src/components/pages/PortfolioPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pages_TransactionHistoryPage__ = __webpack_require__("./src/components/pages/TransactionHistoryPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pages_HelpPage__ = __webpack_require__("./src/components/pages/HelpPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_AppHeader__ = __webpack_require__("./src/components/AppHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_NavigationBar__ = __webpack_require__("./src/components/NavigationBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_MetamaskChecker__ = __webpack_require__("./src/components/MetamaskChecker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions__ = __webpack_require__("./src/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants__ = __webpack_require__("./src/constants/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/MainApp.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable camelcase */

/* eslint-disable no-use-before-define */

/* eslint-disable class-methods-use-this */



















class MainApp extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  async UNSAFE_componentWillMount() {
    this.props.fetchPriceFromCoinmarketcap(__WEBPACK_IMPORTED_MODULE_17__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]);
    this.props.fetchPriceFromCoinmarketcap(__WEBPACK_IMPORTED_MODULE_17__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]);
    const timeout = 30 * 1000;
    setTimeout(() => {
      this.props.fetchPriceFromCoinmarketcap(__WEBPACK_IMPORTED_MODULE_17__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]);
      this.props.fetchPriceFromCoinmarketcap(__WEBPACK_IMPORTED_MODULE_17__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]);
    }, timeout);
    this.getUserDetails();
  }

  getUserDetails() {
    //this can fail if the user is not logged in to metamask
    //in which case  we want to keep trying to get the details
    //until the user logs in
    //TODO Improve
    this.props.loadMetamaskUserDetails(success => {
      if (!success) {
        setTimeout(() => this.getUserDetails(), 100);
      }
    });
  }

  isFirstVisit() {
    try {
      if (localStorage.getItem('mybitUser') === null) {
        localStorage.setItem('mybitUser', 'true');
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  render() {
    const _props = this.props,
          state = _props.state,
          setTransactionHistoryFilters = _props.setTransactionHistoryFilters,
          fetchTransactionHistory = _props.fetchTransactionHistory;
    const firstVisit = this.isFirstVisit();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_AppHeader__["a" /* default */], {
      state: this.props.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_NavigationBar__["a" /* default */], {
      currentPath: this.props.location.pathname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_MetamaskChecker__["a" /* default */], {
      shouldDisplay: this.props.location.pathname !== "/help",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/",
      render: () => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/explore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/asset-payment",
      render: () => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_pages_AssetPaymentPage__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/explore",
      render: props => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_pages_ExplorePage__["a" /* default */], _extends({
        state: state
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/explore/:category",
      render: props => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_pages_ExploreAssetsPage__["a" /* default */], _extends({
        state: state
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/explore/:category/:assetId",
      render: props => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_pages_AssetDetailsPage__["a" /* default */], _extends({
        state: state
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/portfolio",
      render: props => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_pages_PortfolioPage__["a" /* default */], _extends({
        state: state
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/help",
      render: props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_pages_HelpPage__["a" /* default */], _extends({
        state: state
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      exact: true,
      path: "/transaction-history",
      render: props => firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], {
        to: "/help",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_pages_TransactionHistoryPage__["a" /* default */], _extends({
        state: state,
        fetchTransactionHistory: fetchTransactionHistory,
        setTransactionHistoryFilters: setTransactionHistoryFilters
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], {
      path: "*",
      component: __WEBPACK_IMPORTED_MODULE_9__components_pages_NotFoundPage__["a" /* default */],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }))));
  }

}

MainApp.propTypes = {
  fetchPriceFromCoinmarketcap: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  fetchTransactionHistory: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  setTransactionHistoryFilters: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  loadMetamaskUserDetails: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    pathname: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  state
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_16__actions__)(MainApp)));

/***/ }),

/***/ "./src/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_web3__ = __webpack_require__("./src/util/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_contracts_API__ = __webpack_require__("./src/constants/contracts/API.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_contracts_AssetCreation__ = __webpack_require__("./src/constants/contracts/AssetCreation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__ = __webpack_require__("./src/constants/contracts/MyBitToken.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helpers__ = __webpack_require__("./src/util/helpers.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
// TODO: The previously suppressed error can actually be avoided with better syntax






const web3 = Object(__WEBPACK_IMPORTED_MODULE_0__util_web3__["a" /* default */])();

const fetch = __webpack_require__("isomorphic-fetch"); // Action constants


const CLEAR_ERRORS = 'CLEAR_ERRORS';
/* harmony export (immutable) */ __webpack_exports__["CLEAR_ERRORS"] = CLEAR_ERRORS;

const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ASSETS_SUCCESS"] = FETCH_ASSETS_SUCCESS;

const FETCH_ASSETS_FAILURE = 'FETCH_ASSETS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ASSETS_FAILURE"] = FETCH_ASSETS_FAILURE;

const FETCH_ASSETS = 'FETCH_ASSETS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ASSETS"] = FETCH_ASSETS;

const CHANGE_TRANSACTION_HISTORY_FILTERS = 'CHANGE_TRANSACTION_HISTORY_FILTERS';
/* harmony export (immutable) */ __webpack_exports__["CHANGE_TRANSACTION_HISTORY_FILTERS"] = CHANGE_TRANSACTION_HISTORY_FILTERS;

const FETCH_MYBIT_PRICE_USD = 'FETCH_MYBIT_PRICE_USD';
/* harmony export (immutable) */ __webpack_exports__["FETCH_MYBIT_PRICE_USD"] = FETCH_MYBIT_PRICE_USD;

const FETCH_MYBIT_PRICE_USD_SUCCESS = 'FETCH_MYBIT_PRICE_USD_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_MYBIT_PRICE_USD_SUCCESS"] = FETCH_MYBIT_PRICE_USD_SUCCESS;

const FETCH_MYBIT_PRICE_USD_FAILURE = 'FETCH_MYBIT_PRICE_USD_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_MYBIT_PRICE_USD_FAILURE"] = FETCH_MYBIT_PRICE_USD_FAILURE;

const FETCH_ETHEREUM_PRICE_USD = 'FETCH_ETHEREUM_PRICE_USD';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ETHEREUM_PRICE_USD"] = FETCH_ETHEREUM_PRICE_USD;

const FETCH_ETHEREUM_PRICE_USD_SUCCESS = 'FETCH_ETHEREUM_PRICE_USD_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ETHEREUM_PRICE_USD_SUCCESS"] = FETCH_ETHEREUM_PRICE_USD_SUCCESS;

const FETCH_ETHEREUM_PRICE_USD_FAILURE = 'FETCH_ETHEREUM_PRICE_USD_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ETHEREUM_PRICE_USD_FAILURE"] = FETCH_ETHEREUM_PRICE_USD_FAILURE;

const LOAD_METAMASK_USER_DETAILS = 'LOAD_METAMASK_USER_DETAILS';
/* harmony export (immutable) */ __webpack_exports__["LOAD_METAMASK_USER_DETAILS"] = LOAD_METAMASK_USER_DETAILS;

const LOAD_METAMASK_USER_DETAILS_SUCCESS = 'LOAD_METAMASK_USER_DETAILS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["LOAD_METAMASK_USER_DETAILS_SUCCESS"] = LOAD_METAMASK_USER_DETAILS_SUCCESS;

const LOAD_METAMASK_USER_DETAILS_FAILURE = 'LOAD_METAMASK_USER_DETAILS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["LOAD_METAMASK_USER_DETAILS_FAILURE"] = LOAD_METAMASK_USER_DETAILS_FAILURE;

const FETCH_TRANSACTION_HISTORY = 'FETCH_TRANSACTION_HISTORY';
/* harmony export (immutable) */ __webpack_exports__["FETCH_TRANSACTION_HISTORY"] = FETCH_TRANSACTION_HISTORY;

const FETCH_TRANSACTION_HISTORY_SUCCESS = 'FETCH_TRANSACTION_HISTORY_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_TRANSACTION_HISTORY_SUCCESS"] = FETCH_TRANSACTION_HISTORY_SUCCESS;

const FETCH_TRANSACTION_HISTORY_FAILURE = 'FETCH_TRANSACTION_HISTORY_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_TRANSACTION_HISTORY_FAILURE"] = FETCH_TRANSACTION_HISTORY_FAILURE;
 // Synchronous action creators

const fetchAssetsSuccess = assets => ({
  type: FETCH_ASSETS_SUCCESS,
  payload: {
    assets
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchAssetsSuccess"] = fetchAssetsSuccess;

const fetchAssetsFailure = error => ({
  type: FETCH_ASSETS_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchAssetsFailure"] = fetchAssetsFailure;

const fetchMyBitPriceUSDSuccess = price => ({
  type: FETCH_MYBIT_PRICE_USD_SUCCESS,
  payload: {
    price
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchMyBitPriceUSDSuccess"] = fetchMyBitPriceUSDSuccess;

const fetchMyBitPriceUSDFailure = error => ({
  type: FETCH_MYBIT_PRICE_USD_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchMyBitPriceUSDFailure"] = fetchMyBitPriceUSDFailure;

const fetchEthereumPriceUSDSuccess = price => ({
  type: FETCH_ETHEREUM_PRICE_USD_SUCCESS,
  payload: {
    price
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchEthereumPriceUSDSuccess"] = fetchEthereumPriceUSDSuccess;

const fetchEthereumPriceUSDFailure = error => ({
  type: FETCH_ETHEREUM_PRICE_USD_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchEthereumPriceUSDFailure"] = fetchEthereumPriceUSDFailure;

const clearErrors = () => ({
  type: CLEAR_ERRORS
});
/* harmony export (immutable) */ __webpack_exports__["clearErrors"] = clearErrors;

const setTransactionHistoryFilters = (itemsPerPage, currentPage, sortBy, sortDir) => ({
  type: CHANGE_TRANSACTION_HISTORY_FILTERS,
  payload: {
    itemsPerPage,
    currentPage,
    sortBy,
    sortDir
  }
});
/* harmony export (immutable) */ __webpack_exports__["setTransactionHistoryFilters"] = setTransactionHistoryFilters;

const loadMetamaskUserDetailsSuccess = details => ({
  type: LOAD_METAMASK_USER_DETAILS_SUCCESS,
  payload: {
    details
  }
});
/* harmony export (immutable) */ __webpack_exports__["loadMetamaskUserDetailsSuccess"] = loadMetamaskUserDetailsSuccess;

const loadMetamaskUserDetailsFailure = error => ({
  type: LOAD_METAMASK_USER_DETAILS_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["loadMetamaskUserDetailsFailure"] = loadMetamaskUserDetailsFailure;

const fetchTransactionHistorySuccess = transactionHistory => ({
  type: FETCH_TRANSACTION_HISTORY_SUCCESS,
  payload: {
    transactionHistory
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchTransactionHistorySuccess"] = fetchTransactionHistorySuccess;

const fetchTransactionHistoryFailure = error => ({
  type: FETCH_TRANSACTION_HISTORY_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchTransactionHistoryFailure"] = fetchTransactionHistoryFailure;
 // Asynchronous action creators

const fetchTransactionHistory = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_TRANSACTION_HISTORY
  });

  try {
    const userAddress = getState().user.userName;
    /*
    *  results from etherscan come in lower case
    *  its cheaper to create a var to hold the address in lower case,
    *  than it is to keep converting it for every iteration
    */

    const userAddressLowerCase = userAddress.toLowerCase();
    const endpoint = Object(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* ETHERSCAN_TX_BY_ADDR_ENDPOINT */])(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ETHERSCAN_API_KEY */], userAddress);
    const result = await fetch(endpoint);
    const jsonResult = await result.json();

    if (jsonResult.status === '0') {
      throw new Error(jsonResult.result);
    }

    const ethTransactionHistory = jsonResult.result.filter(txResult => txResult.to === userAddressLowerCase || txResult.from === userAddressLowerCase).map(txResult => {
      const multiplier = txResult.from === userAddressLowerCase ? -1 : 1;
      let status = 'Complete';

      if (txResult.isError === "1") {
        status = 'Fail';
      } else if (txResult.confirmations === 0) {
        status = 'Pending';
      }

      return {
        date: txResult.timeStamp * 1000,
        amount: web3.utils.fromWei(txResult.value, 'ether') * multiplier,
        status: status,
        type: 'ETH',
        txId: txResult.hash
      };
    }); // Pull MYB transactions from event log

    const myBitTokenContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["b" /* ADDRESS */]);
    const logTransactions = await myBitTokenContract.getPastEvents('Transfer', {
      fromBlock: 0,
      toBlock: 'latest'
    });
    const mybTransactionHistory = await Promise.all(logTransactions.filter(txResult => txResult.returnValues.to === userAddress || txResult.returnValues.from === userAddress).map(async txResult => {
      const blockInfo = await web3.eth.getBlock(txResult.blockNumber);
      const multiplier = txResult.returnValues.from === userAddress ? -1 : 1;
      return {
        amount: txResult.returnValues.value / 100000000 * multiplier,
        type: 'MYB',
        txId: txResult.transactionHash,
        status: 'Complete',
        date: blockInfo.timestamp * 1000
      };
    }));
    dispatch(fetchTransactionHistorySuccess(ethTransactionHistory.concat(mybTransactionHistory)));
  } catch (error) {
    dispatch(fetchTransactionHistoryFailure(error));
  }
};
/* harmony export (immutable) */ __webpack_exports__["fetchTransactionHistory"] = fetchTransactionHistory;

const loadMetamaskUserDetails = cb => async dispatch => {
  dispatch({
    type: LOAD_METAMASK_USER_DETAILS
  });

  try {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const myBitTokenContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["b" /* ADDRESS */]);
    const myBitBalance = (await myBitTokenContract.methods.balanceOf(accounts[0]).call()) / 100000000;
    const details = {
      userName: accounts[0],
      ethBalance: web3.utils.fromWei(balance, 'ether'),
      myBitBalance
    };
    cb(true);
    dispatch(loadMetamaskUserDetailsSuccess(details));
  } catch (error) {
    cb(false);
    dispatch(loadMetamaskUserDetailsFailure(error));
  }
};
/* harmony export (immutable) */ __webpack_exports__["loadMetamaskUserDetails"] = loadMetamaskUserDetails;

const fetchPriceFromCoinmarketcap = ticker => async dispatch => {
  switch (ticker) {
    case __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]:
      dispatch({
        type: FETCH_MYBIT_PRICE_USD
      });
      break;

    case __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]:
      dispatch({
        type: FETCH_ETHEREUM_PRICE_USD
      });
      break;

    default:
      throw new Error('Invalid ticker provided to fetchPriceFromCoinmarketcap');
  }

  try {
    const response = await fetch(`https://api.coinmarketcap.com/v2/ticker/${ticker}/`);
    const jsonResponse = await response.json();
    const price = jsonResponse.data.quotes.USD.price;

    switch (ticker) {
      case __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_MYBIT_PRICE_USD_SUCCESS,
          payload: {
            price: Math.round(price * 100) / 100
          }
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_ETHEREUM_PRICE_USD_SUCCESS,
          payload: {
            price: Math.round(price * 100) / 100
          }
        });
        break;

      default:
        throw new Error('Invalid ticker provided to fetchPriceFromCoinmarketcap');
    }
  } catch (error) {
    switch (ticker) {
      case __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_MYBIT_PRICE_USD_FAILURE,
          payload: {
            error
          }
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_ETHEREUM_PRICE_USD_FAILURE,
          payload: {
            error
          }
        });
        break;

      default:
        throw new Error('Invalid ticker provided to fetchPriceFromCoinmarketcap');
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["fetchPriceFromCoinmarketcap"] = fetchPriceFromCoinmarketcap;

const fetchAssets = () => async (dispatch, getState) => {
  dispatch(clearErrors());
  dispatch({
    type: FETCH_ASSETS
  });
  dispatch(fetchPriceFromCoinmarketcap(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]));

  try {
    const apiContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_1__constants_contracts_API__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_1__constants_contracts_API__["b" /* ADDRESS */]);
    const assetCreationContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_2__constants_contracts_AssetCreation__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_2__constants_contracts_AssetCreation__["b" /* ADDRESS */]);
    const logAssetInfoEvents = await assetCreationContract.getPastEvents('LogAssetInfo', {
      fromBlock: 0,
      toBlock: 'latest'
    });
    const logAssetFundingStartedEvents = await assetCreationContract.getPastEvents('LogAssetFundingStarted', {
      fromBlock: 0,
      toBlock: 'latest'
    });
    const logAssetInfo = logAssetInfoEvents.map(({
      returnValues
    }) => returnValues).map(object => ({
      assetID: object._assetID,
      installerID: object._installerID,
      amountToBeRaised: object._amountToBeRaised
    }));
    const logAssetFundingStarted = logAssetFundingStartedEvents.map(({
      returnValues
    }) => returnValues).map(object => ({
      assetID: object._assetID,
      assetType: object._assetType,
      creator: object._creator
    }));
    const combinedLogs = logAssetInfo // .concat(logAssetFundingSuccess)
    .concat(logAssetFundingStarted).sort((a, b) => {
      if (a.assetID < b.assetID) {
        return -1;
      }

      if (a.assetID > b.assetID) {
        return 1;
      }

      return 0;
    });
    const assets = Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["d" /* mergeAllLogsByAssetId */])(combinedLogs);
    const amountsRaised = await Promise.all(assets.map(async asset => apiContract.methods.amountRaised(asset.assetID).call()));
    const fundingDeadlines = await Promise.all(assets.map(async asset => apiContract.methods.fundingDeadline(asset.assetID).call()));
    const realAddress = web3.utils.toChecksumAddress(getState().user.userName);
    const ownershipUnits = await Promise.all(assets.map(async asset => apiContract.methods.ownershipUnits(realAddress, asset.assetID).call()));
    const assetIncomes = await Promise.all(assets.map(async asset => apiContract.methods.totalReceived(asset.assetID).call()));
    const assetsPlusMoreDetails = assets.map((asset, index) => _objectSpread({}, asset, {
      amountRaisedInUSD: String(Number(web3.utils.fromWei(amountsRaised[index], 'ether')) * getState().misc.currentEthInUsd),
      fundingDeadline: fundingDeadlines[index],
      ownershipUnits: ownershipUnits[index],
      assetIncome: assetIncomes[index]
    }));
    const assetsWithCategories = assetsPlusMoreDetails.map(asset => {
      if (asset.assetType) {
        return _objectSpread({}, asset, {
          category: Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["a" /* getCategoryFromAssetTypeHash */])(web3, asset.assetType)
        });
      }

      return _objectSpread({}, asset);
    });
    dispatch(fetchAssetsSuccess(assetsWithCategories));
  } catch (error) {
    dispatch(fetchAssetsFailure(error));
  }
};
/* harmony export (immutable) */ __webpack_exports__["fetchAssets"] = fetchAssets;


/***/ }),

/***/ "./src/components/AccountInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Address__ = __webpack_require__("./src/components/Address.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_AccountInfo_css__ = __webpack_require__("./src/styles/AccountInfo.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_AccountInfo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_AccountInfo_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/AccountInfo.js";






const AccountInfo = ({
  myBitBalance,
  ethBalance,
  userName
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "AccountInfo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "AccountInfo__balance",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  className: "AccountInfo__balance-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}, "Balance"), !ethBalance || !myBitBalance ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Loading"], {
  className: "AccountInfo__balance--is-loading",
  small: true,
  withOverlay: false,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  className: "AccountInfo__balance-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  }
}, myBitBalance, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  className: "AccountInfo__balance-myb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, "MYB"), Number(ethBalance).toFixed(4), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
}, "ETH"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Address__["a" /* default */], {
  className: "AccountInfo__address",
  userName: userName,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  }
}));

AccountInfo.defaultProps = {
  myBitBalance: '',
  ethBalance: '',
  userName: ''
};
AccountInfo.propTypes = {
  myBitBalance: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  ethBalance: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  userName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (AccountInfo);

/***/ }),

/***/ "./src/components/Address.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jazzicon__ = __webpack_require__("react-jazzicon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jazzicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_jazzicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Address_css__ = __webpack_require__("./src/styles/Address.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Address_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_Address_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/Address.js";






const Address = ({
  userName,
  className
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, !userName ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "Address__loader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Loading"], {
  small: true,
  withOverlay: false,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, "Loading account")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_jazzicon___default.a, {
  diameter: 39,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "Address__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, userName)));

Address.defaultProps = {
  userName: undefined
};
Address.propTypes = {
  userName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Address);

/***/ }),

/***/ "./src/components/AppHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_AppHeader_css__ = __webpack_require__("./src/styles/AppHeader.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_AppHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_AppHeader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./src/components/Logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ExchangeRate__ = __webpack_require__("./src/components/ExchangeRate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AccountInfo__ = __webpack_require__("./src/components/AccountInfo.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/AppHeader.js";







const AppHeader = ({
  state
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "grid AppHeader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */], {
  className: "AppHeader__logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ExchangeRate__["a" /* default */], {
  value: state.misc.currentMybitInUsd,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__AccountInfo__["a" /* default */], {
  myBitBalance: state.user.myBitBalance,
  ethBalance: state.user.ethBalance,
  userName: state.user.userName,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}));

AppHeader.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (AppHeader);

/***/ }),

/***/ "./src/components/Asset.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Asset_css__ = __webpack_require__("./src/styles/Asset.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Asset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_Asset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./src/constants/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/Asset.js";






var locationIcon = function locationIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Shape"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M0 5.2C0 8.08 5.5 16 5.5 16S11 8.08 11 5.2C11 2.33 8.54 0 5.5 0S0 2.33 0 5.2zm2 .14C2 3.564 3.685 2 5.51 2 7.335 2 9 3.585 9 5.35 9 7.125 7.325 9 5.49 9 3.665 9 2 7.115 2 5.34z",
    fill: "#FFF",
    fillRule: "evenodd"
  }));
};

locationIcon.defaultProps = {
  width: "11",
  height: "16",
  viewBox: "0 0 11 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const bitcoinAtm = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/bitcoin-atm.png";

const Asset = ({
  clickHandler,
  funded,
  goal,
  city,
  country,
  name,
  category,
  id
}) => {
  const barWidth = `${Math.ceil(funded / goal * 100)}%`;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-3_md-4_sm-6_xs-12 Asset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Asset__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Asset__image-holder",
    style: {
      backgroundImage: `url(${bitcoinAtm})`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Asset__image-holder-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    alt: "Location icon",
    className: "Asset__image-holder-location-icon",
    src: locationIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    className: "Asset__image-holder-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "Asset__image-holder-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, city, ", ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, country))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Asset__details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "Asset__details-funded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Funded: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "$", Math.round(funded))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "Asset__details-goal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Goal: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "$", goal)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Asset__details-progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Asset__details-progress-bar-fill",
    style: {
      width: barWidth
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"], {
    to: `/explore/${category}/${id}`,
    href: `/explore/${category}/${id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Button"], {
    onClick: clickHandler || (() => Object(__WEBPACK_IMPORTED_MODULE_5__constants__["i" /* debug */])(`Clicked to contribute, asset id: ${id}`)),
    className: "Asset__details-contribute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "CONTRIBUTE")))));
};

Asset.defaultProps = {
  clickHandler: undefined
};
Asset.propTypes = {
  funded: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  goal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  city: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  country: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  category: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  clickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
Asset.defaultProps = {
  city: '',
  country: '',
  name: '',
  clickHandler: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (Asset);

/***/ }),

/***/ "./src/components/AssetDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dayjs__ = __webpack_require__("dayjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dayjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dayjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConfirmationPopup__ = __webpack_require__("./src/components/ConfirmationPopup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Address__ = __webpack_require__("./src/components/Address.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_contracts_FundingHub__ = __webpack_require__("./src/constants/contracts/FundingHub.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_AssetDetails_css__ = __webpack_require__("./src/styles/AssetDetails.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_AssetDetails_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_AssetDetails_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_web3__ = __webpack_require__("./src/util/web3.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/AssetDetails.js";









const locationIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/location.png";
const calendarIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/calendar.png";
const backgroundImage = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/asset-details-page-header.png";


class AssetDetails extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    const _props$information = this.props.information,
          goal = _props$information.goal,
          raised = _props$information.raised;
    this.state = {
      currentSelectedAmount: Math.floor((goal - raised) / 2),
      daysToGo: 0,
      timeToGo: '',
      endingAt: '',
      acceptedTos: false,
      displayWarning: false
    };
    this.setDateDetails = this.setDateDetails.bind(this);
    this.endDateLocal = __WEBPACK_IMPORTED_MODULE_3_dayjs___default()(this.props.information.dueDate);
    this.clearInterval = this.clearInterval.bind(this);
    this.handleConfirmClicked = this.handleConfirmClicked.bind(this);
    this.setAcceptedTos = this.setAcceptedTos.bind(this);
    this.getAcceptedTos = this.getAcceptedTos.bind(this);
    this.runningMinInterval = false;
    this.web3 = Object(__WEBPACK_IMPORTED_MODULE_9__util_web3__["a" /* default */])();
  }

  componentDidMount() {
    this.setDateDetails();
    /*const fundingHubContract = new window.web3.eth.Contract(FundingHub.ABI, FundingHub.ADDRESS);
    // TODO: Mechanism to decide how much to contribute in wei
    const weiAmount = this.web3.utils.toWei('0.1', 'ether');
    fundingHubContract.methods.fund('0x4c8f18581c0167eb90a761b4a304e009b924f03b619a0c0e8ea3adfce20aee64')
      .send({ from: '0x11cF613d319DC923f3248175e0271588F1B26991', value: weiAmount })
      .then(debug)
      .catch(debug);
    return true;*/
  }

  setDateDetails() {
    const maxInvestment = this.props.information.goal - this.props.information.raised; // funding goal has been reached

    if (maxInvestment === 0) {
      this.setState({
        timeToGo: 'Funding goal has been reached',
        daysToGo: 0,
        endingAt: ''
      });
      this.clearInterval();
      return;
    } // funding period has reached end date


    if (__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(new Date()) > this.endDateLocal) {
      this.setState({
        daysToGo: -1,
        timeToGo: 'Funding period has ended',
        endingAt: `Funding period has ended on ${__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(this.endDateLocal).format('dddd, MMMM D')}`
      });
      this.clearInterval();
      return;
    }

    const days = this.endDateLocal.diff(__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(), 'days');
    const seconds = this.endDateLocal.diff(__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(), 'seconds');
    const calculateRemainingTime = __WEBPACK_IMPORTED_MODULE_3_dayjs___default()().startOf('day').add(seconds, 'seconds'); // less than 1 day until funding period ends

    if (days === 0) {
      const secondsToEndDate = this.endDateLocal.diff(__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(), 'seconds');
      const aux = __WEBPACK_IMPORTED_MODULE_3_dayjs___default()().startOf('day').add(86400, 'seconds');
      const secondsToMidnight = aux.diff(__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(), 'seconds');
      let day = 'today';
      if (secondsToEndDate > secondsToMidnight) day = 'tomorrow';
      this.setState({
        timeToGo: `Ending in ${calculateRemainingTime.hour()}h ${calculateRemainingTime.minute()}m ${calculateRemainingTime.second()}s`,
        daysToGo: 0,
        endingAt: `Funding period ends ${day} at ${__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(this.endDateLocal).format('H:mm:ss')}`
      });

      if (!this.setDateInterval || this.runningMinInterval) {
        this.setDateInterval = setInterval(() => {
          this.setDateDetails();
        }, 1000);
        this.runningMinInterval = false;
      }
    } else {
      // 1 or more days until funding period ends
      const dayString = days === 1 ? 'day' : 'days';
      this.setState({
        timeToGo: `${days} ${dayString} and ${calculateRemainingTime.hour()} hours to go`,
        daysToGo: days,
        endingAt: `Funding period ends on ${__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(this.endDateLocal).format('dddd, MMMM D')} at ${__WEBPACK_IMPORTED_MODULE_3_dayjs___default()(this.props.information.dueDate).format('H:mm:ss')}`
      });

      if (!this.setDateInterval) {
        this.setDateInterval = setInterval(() => {
          this.setDateDetails();
        }, 60000);
        this.runningMinInterval = true;
      }
    }
  }

  setAcceptedTos(acceptedTos) {
    this.setState({
      acceptedTos
    });

    if (acceptedTos && this.state.displayWarning) {
      this.setState({
        displayWarning: false
      });
    }
  }

  getAcceptedTos() {
    return this.state.acceptedTos;
  }

  clearInterval() {
    if (this.setDateInterval) {
      clearInterval(this.setDateInterval);
    }
  }

  componenWillUnmount() {
    this.clearInterval();
  }

  handleConfirmClicked() {
    if (!this.state.acceptedTos) {
      this.setState({
        displayWarning: true
      });
      return false;
    } // TODO: See if this is all that we want and handle the UI better


    const fundingHubContract = new window.web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_6__constants_contracts_FundingHub__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_6__constants_contracts_FundingHub__["b" /* ADDRESS */]);
    this.setState({
      acceptedTos: false
    }); // TODO: Mechanism to decide how much to contribute in wei

    const weiAmount = window.web3.toWei('0.001', 'ether');
    console.log(weiAmount);
    fundingHubContract.methods.fund(this.props.information.assetID).send({
      value: weiAmount
    }).then(__WEBPACK_IMPORTED_MODULE_7__constants__["i" /* debug */]).catch(__WEBPACK_IMPORTED_MODULE_7__constants__["i" /* debug */]);
    return true;
  }

  render() {
    const maxInvestment = this.state.daysToGo < 0 ? 0 : this.props.information.goal - this.props.information.raised;
    const ownership = this.state.currentSelectedAmount * 100 / this.props.information.goal;
    const etherValue = Number((this.state.currentSelectedAmount / this.props.currentEthInUsd).toFixed(2));
    let minInvestment = this.state.daysToGo < 0 || maxInvestment === 0 ? 0 : 100;

    if (maxInvestment <= 100 && maxInvestment > 0 && this.state.daysToGo > 0) {
      minInvestment = 1;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left col_lg-6 col_md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      }
    }, this.props.information.assetName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      alt: "Location icon",
      className: "AssetDetails__left-image-holder-location-icon",
      src: locationIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      }
    }, this.props.information.city, ", ", this.props.information.country), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-days-to-go-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      alt: "Location icon",
      className: "AssetDetails__left-image-holder-calendar-icon",
      src: calendarIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-days-to-go",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      }
    }, this.state.timeToGo)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-due-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      }
    }, this.state.endingAt), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-funding-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-funds-raised",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-funding-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      }
    }, "Funds raised"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-funding-value",
      style: {
        color: '#2db84b'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      }
    }, this.props.information.raised.toLocaleString(), " USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-funds-goal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-funding-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      }
    }, "Funding goal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-funding-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      }
    }, this.props.information.goal.toLocaleString(), " USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-funds-investors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-funding-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      }
    }, "Number of investors so far"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-funding-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      }
    }, "5"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-calculate-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      }
    }, "Calculate your investment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Slider"], {
      id: "slider",
      value: this.state.currentSelectedAmount,
      min: minInvestment,
      max: maxInvestment,
      onChange: arg => this.setState({
        currentSelectedAmount: arg.value
      }),
      hideTextInput: true,
      disabled: this.state.daysToGo < 0 || maxInvestment === 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-slider-min",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      }
    }, "Min. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      }
    }, minInvestment, " USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-slider-max",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      }
    }, "Max. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      }
    }, maxInvestment, " USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-contribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      }
    }, "Your contribution:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-contribution-bordered AssetDetails__left-contribution-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      }
    }, this.state.currentSelectedAmount.toLocaleString(), " USD"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-separator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-contribution-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      }
    }, etherValue, " ETH"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-ownership",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      }
    }, "Ownership:", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-contribution-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      }
    }, ownership, "%")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__left-contribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      }
    }, "Expected annual return:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-contribution-bordered AssetDetails__left-contribution-value AssetDetails__left-contribution-inactive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      }
    }, "18%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-separator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-contribution-bordered AssetDetails__left-contribution-value AssetDetails__left-contribution-inactive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      }
    }, "990 USD"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__left-separator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__left-contribution-value AssetDetails__left-contribution-inactive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      }
    }, "1.87 ETH"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["ModalWrapper"], {
      id: "ConfirmationPopup__container",
      buttonTriggerText: "Contribute",
      shouldCloseAfterSubmit: true,
      modalBeforeContent: false,
      primaryButtonText: "Confirm",
      secondaryButtonText: "Cancel",
      handleSubmit: this.handleConfirmClicked,
      disabled: this.state.daysToGo < 0 || maxInvestment === 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ConfirmationPopup__["a" /* default */], {
      amountUsd: this.state.currentSelectedAmount,
      amountEth: etherValue,
      ownership: ownership,
      setAcceptedTos: this.setAcceptedTos,
      displayWarning: this.state.displayWarning,
      getAcceptedTos: this.getAcceptedTos,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      }
    }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__right col_lg-6 col_md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      alt: "Asset details background",
      className: "AssetDetails__right-image",
      src: backgroundImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "AssetDetails__right-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__right-title-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      }
    }, "Asset Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__right-content-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      }
    }, this.props.information.details), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__right-title-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      }
    }, "Description"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetails__right-content-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      }
    }, this.props.information.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "AssetDetails__right-title-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      }
    }, "Asset manager"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Address__["a" /* default */], {
      userName: this.props.information.address,
      className: "AssetDetails__right-address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      }
    }))));
  }

}

AssetDetails.defaultProps = {
  currentEthInUsd: undefined
};
AssetDetails.propTypes = {
  information: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    assetID: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    dueDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    goal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    raised: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    assetName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    city: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    country: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    details: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    address: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired,
  currentEthInUsd: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
/* harmony default export */ __webpack_exports__["a"] = (AssetDetails);

/***/ }),

/***/ "./src/components/BrowserNotSupported.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_BrowserNotSupported_css__ = __webpack_require__("./src/styles/BrowserNotSupported.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_BrowserNotSupported_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_BrowserNotSupported_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/BrowserNotSupported.js";




var MetamaskLogo = function MetamaskLogo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, ".st0", `{`, "fill:#e2761b;stroke:#e2761b;stroke-linecap:round;stroke-linejoin:round", `}`, ".st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#e4761b;stroke:#e4761b;stroke-linecap:round;stroke-linejoin:round", `}`, ".st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#d7c1b3;stroke:#d7c1b3", `}`, ".st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#233447;stroke:#233447", `}`, ".st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#cd6116;stroke:#cd6116", `}`, ".st5,.st6,.st7,.st8,.st9", `{`, "fill:#e4751f;stroke:#e4751f", `}`, ".st6,.st7,.st8,.st9", `{`, "fill:#f6851b;stroke:#f6851b", `}`, ".st7,.st8,.st9", `{`, "fill:#c0ad9e;stroke:#c0ad9e", `}`, ".st8,.st9", `{`, "fill:#161616;stroke:#161616", `}`, ".st9", `{`, "fill:#763d16;stroke:#763d16", `}`), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M274.1 35.5l-99.5 73.9L193 65.8z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M44.4 35.5l98.7 74.6-17.5-44.3zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7L50.1 263l56.7-15.6-26.5-40.6z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zM106.8 247.4l31.5 14.9-.2-9.3 2.5-22.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M138.8 193.5l-28.2-8.3 19.9-9.1zM179.7 193.5l8.3-17.4 20 9.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st4",
    d: "M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zM230.8 162.1l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zM110.6 185.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st5",
    d: "M87.8 162.1l23.6 46-.8-22.9zM208.1 185.2l-1 22.9 23.7-46zM144.1 164.6l-5.3 28.9 6.6 34.1 1.5-44.9zM174.6 164.6l-2.7 18 1.2 45 6.7-34.1z"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zM110.6 185.2l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st7",
    d: "M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st8",
    d: "M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st9",
    d: "M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zM103.6 138.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zM174.6 164.6l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
  }));
};

MetamaskLogo.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 318.6 318.6"
};

const BrowserNotSupported = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_carbon_components_react__["Modal"], {
  className: "BrowserNotSupported",
  open: true,
  passiveModal: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "BrowserNotSupported__title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, "Download Metamask ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}), " to get started."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "BrowserNotSupported__metamaskfox-image",
  src: MetamaskLogo,
  alt: "Metamask",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "BrowserNotSupported__download-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, "Download the browser extension on", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "https://www.google.com/chrome/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, " Chrome"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "https://www.mozilla.org/en-US/firefox/new/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, " Firefox"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "https://www.opera.com/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, " Opera"), " or", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "https://brave.com/download/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}, " Brave"), "."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_carbon_components_react__["Button"], {
  small: true,
  className: "BrowserNotSupported__metamasklogin-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, "Your browser is not supported"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  }
}));

/* harmony default export */ __webpack_exports__["a"] = (BrowserNotSupported);

/***/ }),

/***/ "./src/components/CategoryBackButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./src/constants/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/CategoryBackButton.js";






const CategoryBackButton = ({
  category
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"], {
  to: `/explore/${category.toLowerCase()}`,
  href: `/explore/${category.toLowerCase()}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Button"], {
  kind: "secondary",
  className: "AssetDetailsPage__back-button",
  onClick: Object(__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* debug */])('Clicked to go back'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, "BACK"));

CategoryBackButton.propTypes = {
  category: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CategoryBackButton);

/***/ }),

/***/ "./src/components/CirclesBackgroundWrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_CirclesBackgroundWrapper_css__ = __webpack_require__("./src/styles/CirclesBackgroundWrapper.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_CirclesBackgroundWrapper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_CirclesBackgroundWrapper_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/CirclesBackgroundWrapper.js";




const CirclesBackgroundWrapper = ({
  children
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  style: {
    position: 'relative',
    zIndex: 2
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "CirclesBackgroundWrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "CirclesBackgroundWrapper__circle--is-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "CirclesBackgroundWrapper__circle--is-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
})));

CirclesBackgroundWrapper.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CirclesBackgroundWrapper);

/***/ }),

/***/ "./src/components/ConfirmationPopup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_ConfirmationPopup_css__ = __webpack_require__("./src/styles/ConfirmationPopup.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_ConfirmationPopup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_ConfirmationPopup_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/ConfirmationPopup.js";





const ConfirmationPopup = ({
  amountUsd,
  amountEth,
  ownership,
  setAcceptedTos,
  displayWarning,
  getAcceptedTos
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "ConfirmationPopup",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, "Confirm Purchase"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "ConfirmationPopup__wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, "Your Contribution:", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  className: "ConfirmationPopup__description-amount",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, "$", amountUsd)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  }
}, "Ownership:", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  className: "ConfirmationPopup__description-amount",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  }
}, ownership, "%")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description",
  style: {
    lineHeight: '1',
    paddingTop: '15px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
}, "Expected annual return:", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  className: "ConfirmationPopup__description-amount",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  }
}, "18%")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description-amount-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  }
}, "$18,000"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description-amount-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  }
}, amountEth, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
}, "ETH")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "ConfirmationPopup__line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description ConfirmationPopup__description-cost",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  }
}, "Total asset cost:", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  className: "ConfirmationPopup__description-amount",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  }
}, "$", amountUsd)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__description-amount-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  }
}, amountEth, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  }
}, "ETH")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "ConfirmationPopup__tos-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["ToggleSmall"], {
  onToggle: value => setAcceptedTos(value),
  className: "ConfirmationPopup__tos-toggle",
  ariaLabel: "Terms and conditions",
  id: "ConfirmationPopup__tos-toggle",
  toggled: getAcceptedTos(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__tos-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  }
}, "I read and agree to the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "https://mybit.io",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  }
}, "terms and conditions"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ConfirmationPopup__tos-message-error",
  style: {
    visibility: displayWarning ? 'visible' : 'hidden'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  }
}, "*Please accept our T&C before continuing")));

ConfirmationPopup.propTypes = {
  amountUsd: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  amountEth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  ownership: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  setAcceptedTos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  displayWarning: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  getAcceptedTos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (ConfirmationPopup);

/***/ }),

/***/ "./src/components/ExchangeRate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("./src/constants/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/ExchangeRate.js";





const ExchangeRate = ({
  value
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, !value && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Loading"], {
  className: "AppHeader__exchange-rate--is-loading",
  small: true,
  withOverlay: false,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  className: "AppHeader__exchange-rate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, value && `$${value}`, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, __WEBPACK_IMPORTED_MODULE_3__constants__["h" /* USD_MYB_SYMBOL */])));

ExchangeRate.defaultProps = {
  value: undefined
};
ExchangeRate.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
/* harmony default export */ __webpack_exports__["a"] = (ExchangeRate);

/***/ }),

/***/ "./src/components/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/Logo.js";



var logo = function logo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, ".st0", `{`, "fill:#fff", `}`), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M277.7 137.1v28.2l-13.5-.1v-27.5l-.1-3.8c0-5.5-3.4-9.7-8.5-10.1-1.2-.1-2.3 0-3.4.3-.4.1-.9.2-1.3.4-1.2.5-2.4 1.3-3.2 2.3-.4.5-.8 1-1 1.6-.7 1.4-.9 2.9-1.1 4.5 0 .4-.1.9-.1 1.3v31h-13.4V136v-1.8c0-.4 0-.9-.1-1.3-.1-1.6-.4-3.2-1.1-4.5-.3-.6-.6-1.1-1-1.6-.9-1-2-1.8-3.2-2.3-.4-.2-.8-.3-1.3-.4-1.1-.3-2.2-.4-3.4-.3-5.1.4-8.5 4.6-8.5 10.1l-.1 3.8v27.5l-13.5.1v-28.2c0-1.3 0-2.7.1-4.1 0-.3 0-.6.1-.9.5-7.4 3.4-13.7 9.9-17.6 5.6-3.3 13-4.4 19.2-2.4 4 1.2 6.6 3.7 9.4 6.7l.1.2.1-.2c2.7-3.1 5.4-5.5 9.4-6.7 6.3-1.9 13.6-.9 19.2 2.4 6.5 3.9 9.4 10.2 9.9 17.6v.9c.4 1.4.4 2.8.4 4.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M245.7 137.8v27.5h-.1v-29.2-1.8c0-.4 0-.9.1-1.3v4.8zM452.5 126.3v21.8c0 5.7 4.1 5.8 11.9 5.4v12.3c-18.6 2.1-25.4-3.2-25.4-17.6v-21.8h-9.1v-13h9.1V107l13.5-13.6v20h11.9v13h-11.9zM322.3 113.2l-11.6 35.2-13.6-35.2h-14.8l21.5 50.6c-2.5 7.1-6.5 10.1-13.7 10v12.6c13.4.7 22.2-5.9 27.6-20.9l19-52.3h-14.4zM408.6 113.2h13.5v52.3h-13.5zM391.5 119.8c-4.9-5.3-11-8.1-18-8.1-7.3 0-13 2.5-16.9 7.6v-27h-.4l-13.1 13.1v60.1h13.5v-6.2c4 5.1 9.6 7.6 16.9 7.6 7 0 13.1-2.6 18-7.9 5-5.3 7.5-11.9 7.5-19.7.1-7.7-2.4-14.1-7.5-19.5zM381.4 150c-2.7 2.7-6.2 4.1-10.4 4.1s-7.6-1.4-10.4-4.1c-2.7-2.8-4.1-6.4-4.1-10.7s1.4-7.8 4.1-10.6c2.7-2.8 6.2-4.2 10.4-4.2s7.6 1.4 10.4 4.2c2.8 2.7 4.2 6.3 4.2 10.6s-1.4 7.9-4.2 10.7z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    transform: "rotate(-44.928 415.307 96.92)",
    className: "st0",
    d: "M408.3 89.9h14V104h-14z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M175.2 136.7l-26.1 26.1c-11.2-11.1-26.5-18-43.4-18s-32.3 6.9-43.4 18l-26-26.1 69.5-69.5 69.4 69.5z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M141.5 170.5l-35.7 35.7L70 170.5c9.1-9.2 21.8-14.9 35.8-14.8 2.4 0 4.8.2 7.1.5 11.1 1.5 21.1 6.7 28.6 14.3z"
  }));
};

logo.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 500 287"
};

const Logo = ({
  className
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  alt: "MyBit Logo",
  className: className,
  src: logo,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  }
});

Logo.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "./src/components/MetamaskBooting.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_MetamaskAudit_css__ = __webpack_require__("./src/styles/MetamaskAudit.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_MetamaskAudit_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_MetamaskAudit_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/MetamaskBooting.js";





var MetamaskLogo = function MetamaskLogo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, ".st0", `{`, "fill:#e2761b;stroke:#e2761b;stroke-linecap:round;stroke-linejoin:round", `}`, ".st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#e4761b;stroke:#e4761b;stroke-linecap:round;stroke-linejoin:round", `}`, ".st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#d7c1b3;stroke:#d7c1b3", `}`, ".st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#233447;stroke:#233447", `}`, ".st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#cd6116;stroke:#cd6116", `}`, ".st5,.st6,.st7,.st8,.st9", `{`, "fill:#e4751f;stroke:#e4751f", `}`, ".st6,.st7,.st8,.st9", `{`, "fill:#f6851b;stroke:#f6851b", `}`, ".st7,.st8,.st9", `{`, "fill:#c0ad9e;stroke:#c0ad9e", `}`, ".st8,.st9", `{`, "fill:#161616;stroke:#161616", `}`, ".st9", `{`, "fill:#763d16;stroke:#763d16", `}`), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M274.1 35.5l-99.5 73.9L193 65.8z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M44.4 35.5l98.7 74.6-17.5-44.3zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7L50.1 263l56.7-15.6-26.5-40.6z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zM106.8 247.4l31.5 14.9-.2-9.3 2.5-22.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M138.8 193.5l-28.2-8.3 19.9-9.1zM179.7 193.5l8.3-17.4 20 9.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st4",
    d: "M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zM230.8 162.1l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zM110.6 185.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st5",
    d: "M87.8 162.1l23.6 46-.8-22.9zM208.1 185.2l-1 22.9 23.7-46zM144.1 164.6l-5.3 28.9 6.6 34.1 1.5-44.9zM174.6 164.6l-2.7 18 1.2 45 6.7-34.1z"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zM110.6 185.2l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st7",
    d: "M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st8",
    d: "M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st9",
    d: "M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zM103.6 138.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zM174.6 164.6l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
  }));
};

MetamaskLogo.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 318.6 318.6"
};

const MetamaskBooting = ({
  isBraveBrowser,
  extensionUrl
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Modal"], {
  className: "MetamaskAudit",
  open: true,
  passiveModal: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "MetamaskAudit__title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}, isBraveBrowser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, "To start investing, please ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}), " install Metamask.") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, "To start investing, please ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}), " connect your wallet.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "MetamaskAudit__metamaskfox-image",
  src: MetamaskLogo,
  alt: "Metamask",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}), !isBraveBrowser && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: extensionUrl,
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Button"], {
  small: true,
  kind: "primary",
  className: "MetamaskAudit__metamaskinstall-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, "Install Metamask and Refresh")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "https://metamask.io/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Button"], {
  small: true,
  kind: "secondary",
  className: "MetamaskAudit__metamaskmanual-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  }
}, "What is Metamask?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  }
}));

MetamaskBooting.propTypes = {
  isBraveBrowser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  extensionUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (MetamaskBooting);

/***/ }),

/***/ "./src/components/MetamaskChecker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MetamaskBooting__ = __webpack_require__("./src/components/MetamaskBooting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MetamaskLogin__ = __webpack_require__("./src/components/MetamaskLogin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BrowserNotSupported__ = __webpack_require__("./src/components/BrowserNotSupported.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isMetamask__ = __webpack_require__("./src/util/isMetamask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isMetamask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__util_isMetamask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_isUserLogged__ = __webpack_require__("./src/util/isUserLogged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/MetamaskChecker.js";

/* eslint-disable class-methods-use-this */








const _require = __webpack_require__("detect-browser"),
      detect = _require.detect;

class MetamaskChecker extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isMetamaskUserLogged: null
    };
    this.isBraveBrowser = false;
    this.extensionUrl = '';
  }

  componentDidMount() {
    Object(__WEBPACK_IMPORTED_MODULE_5__util_isUserLogged__["a" /* default */])().then(haveAccounts => {
      if (haveAccounts.length === 0) {
        this.setState({
          isMetamaskUserLogged: false
        });
      }
    });
  }

  isBraveBrowserBeingUsed() {
    // initial assertions
    if (!window.google_onload_fired && navigator.userAgent && !navigator.userAgent.includes('Chrome')) {
      return false;
    } // set up test


    const test = document.createElement('iframe');
    test.style.display = 'none';
    document.body.appendChild(test); // empty frames only have this attribute set in Brave Shield

    const isBrave = test.contentWindow.google_onload_fired === true; // teardown test

    test.parentNode.removeChild(test);
    return isBrave;
  }

  isBrowserSupported() {
    const browser = detect();

    if (this.isBraveBrowserBeingUsed()) {
      this.isBraveBrowser = true;
    }

    switch (browser.name) {
      case 'chrome':
        this.extensionUrl = __WEBPACK_IMPORTED_MODULE_6__constants__["d" /* METAMASK_CHROME */];
        return true;

      case 'opera':
        this.extensionUrl = __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* METAMASK_OPERA */];
        return true;

      case 'firefox':
        this.extensionUrl = __WEBPACK_IMPORTED_MODULE_6__constants__["e" /* METAMASK_FIREFOX */];
        return true;

      default:
        return false;
    }
  } // if Metamask is not established, modal is displayed with directions


  renderMetamaskWarrning() {
    if (!this.isBrowserSupported()) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__BrowserNotSupported__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      });
    }

    if (!__WEBPACK_IMPORTED_MODULE_4__util_isMetamask___default()()) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MetamaskBooting__["a" /* default */], {
        extensionUrl: this.extensionUrl,
        isBraveBrowser: this.isBraveBrowser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      });
    }

    return null;
  }

  render() {
    if (!this.props.shouldDisplay) {
      return null;
    } else {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, this.renderMetamaskWarrning(), this.state.isMetamaskUserLogged === false ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MetamaskLogin__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }) : null);
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (MetamaskChecker);

/***/ }),

/***/ "./src/components/MetamaskLogin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_MetamaskLogin_css__ = __webpack_require__("./src/styles/MetamaskLogin.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_MetamaskLogin_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_MetamaskLogin_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isUserLogged__ = __webpack_require__("./src/util/isUserLogged.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/MetamaskLogin.js";




var MetamaskLogo = function MetamaskLogo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, ".st0", `{`, "fill:#e2761b;stroke:#e2761b;stroke-linecap:round;stroke-linejoin:round", `}`, ".st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#e4761b;stroke:#e4761b;stroke-linecap:round;stroke-linejoin:round", `}`, ".st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#d7c1b3;stroke:#d7c1b3", `}`, ".st3,.st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#233447;stroke:#233447", `}`, ".st4,.st5,.st6,.st7,.st8,.st9", `{`, "fill:#cd6116;stroke:#cd6116", `}`, ".st5,.st6,.st7,.st8,.st9", `{`, "fill:#e4751f;stroke:#e4751f", `}`, ".st6,.st7,.st8,.st9", `{`, "fill:#f6851b;stroke:#f6851b", `}`, ".st7,.st8,.st9", `{`, "fill:#c0ad9e;stroke:#c0ad9e", `}`, ".st8,.st9", `{`, "fill:#161616;stroke:#161616", `}`, ".st9", `{`, "fill:#763d16;stroke:#763d16", `}`), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M274.1 35.5l-99.5 73.9L193 65.8z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M44.4 35.5l98.7 74.6-17.5-44.3zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7L50.1 263l56.7-15.6-26.5-40.6z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zM106.8 247.4l31.5 14.9-.2-9.3 2.5-22.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M138.8 193.5l-28.2-8.3 19.9-9.1zM179.7 193.5l8.3-17.4 20 9.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st4",
    d: "M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zM230.8 162.1l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zM110.6 185.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st5",
    d: "M87.8 162.1l23.6 46-.8-22.9zM208.1 185.2l-1 22.9 23.7-46zM144.1 164.6l-5.3 28.9 6.6 34.1 1.5-44.9zM174.6 164.6l-2.7 18 1.2 45 6.7-34.1z"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zM110.6 185.2l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st7",
    d: "M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st8",
    d: "M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st9",
    d: "M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zM103.6 138.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zM174.6 164.6l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
  }));
};

MetamaskLogo.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 318.6 318.6"
};


class MetamaskLogin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  componentDidMount() {
    const checkInterval = 1000;
    this.interval = setInterval(() => {
      Object(__WEBPACK_IMPORTED_MODULE_3__util_isUserLogged__["a" /* default */])().then(haveAccounts => {
        if (haveAccounts.length === 0) {
          this.setState({
            isOpen: true
          });
        }

        if (haveAccounts.length !== 0) {
          this.setState({
            isOpen: false
          });
        }
      });
    }, checkInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_carbon_components_react__["Modal"], {
      className: "MetamaskLogin",
      open: this.state.isOpen,
      passiveModal: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "MetamaskLogin__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, "To start investing, please ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }), " login to Metamask."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      className: "MetamaskLogin__metamaskfox-image",
      src: MetamaskLogo,
      alt: "Metamask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      href: "https://www.youtube.com/watch?time_continue=25&v=6Gf_kRE4MJU",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_carbon_components_react__["Button"], {
      small: true,
      className: "MetamaskLogin__metamasklogin-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, "Click here to see how")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (MetamaskLogin);

/***/ }),

/***/ "./src/components/NavigationBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_NavigationBar_css__ = __webpack_require__("./src/styles/NavigationBar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_NavigationBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_NavigationBar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NavigationOption__ = __webpack_require__("./src/components/NavigationOption.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./src/constants/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/NavigationBar.js";





const exploreIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/search.png";
const portfolioIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/chart-area.png";
const transactionsIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/history.png";
const savedIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/star.png";
const listAssetIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/plus.png";
const stakingIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/cubes.png";
const exchangeIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/exchange-alt.png";
const knowledgeBaseIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/question.png";

const NavigationBar = ({
  clickHandler,
  currentPath
}) => {
  const menuOptions = [{
    name: 'Explore',
    icon: exploreIcon,
    selectable: true,
    selected: currentPath.indexOf('/explore') !== -1,
    url: '/'
  }, {
    name: 'Portfolio',
    icon: portfolioIcon,
    selectable: true,
    selected: currentPath === '/portfolio',
    url: '/portfolio'
  }, {
    name: 'Transactions',
    icon: transactionsIcon,
    selectable: true,
    selected: currentPath === '/transaction-history',
    url: '/transaction-history'
  }, {
    name: 'Saved',
    icon: savedIcon
  }, {
    name: 'List Asset',
    icon: listAssetIcon
  }, {
    name: 'Staking',
    icon: stakingIcon
  }, {
    name: 'Exchange',
    icon: exchangeIcon
  }, {
    name: 'Help',
    icon: knowledgeBaseIcon,
    selectable: true,
    selected: currentPath === '/help',
    url: '/help'
  }];
  const navBarOptions = menuOptions.map(menuItem => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NavigationOption__["a" /* default */], {
    url: menuItem.url,
    key: menuItem.name,
    name: menuItem.name,
    icon: menuItem.icon,
    selectable: menuItem.selectable,
    selected: menuItem.selected,
    clickHandler: !clickHandler ? Object(__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* debug */])(menuItem.name) : clickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "AppNavigationBar grid-noGutter-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, navBarOptions);
};

NavigationBar.propTypes = {
  clickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  currentPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
NavigationBar.defaultProps = {
  clickHandler: __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* debug */]
};
/* harmony default export */ __webpack_exports__["a"] = (NavigationBar);

/***/ }),

/***/ "./src/components/NavigationOption.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/NavigationOption.js";

/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
// TODO: Fix the JSX linting errors




const classNames = __webpack_require__("classnames");

const NavigationOption = ({
  name,
  icon,
  selectable,
  selected,
  url
}) => {
  const optionClass = classNames({
    AppNavigationBar__option: true,
    'AppNavigationBar__option--is-selected': selected,
    'AppNavigationBar__option--is-selectable': selectable
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], {
    className: "col AppNavigationBar__option-col",
    to: url || '/',
    href: url || '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: optionClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    alt: name,
    className: "AppNavigationBar__option-img",
    src: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "AppNavigationBar__option-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, name)));
};

NavigationOption.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  selectable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  url: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
NavigationOption.defaultProps = {
  selected: false,
  selectable: false,
  url: ''
};
/* harmony default export */ __webpack_exports__["a"] = (NavigationOption);

/***/ }),

/***/ "./src/components/OverflowMenuCustom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/OverflowMenuCustom.js";




const OverflowMenuCustom = ({
  url
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["OverflowMenu"], {
  className: "Transactions__overflowOption",
  floatingMenu: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["OverflowMenuItem"], {
  onClick: () => {
    window.open(url, '_blank');
  },
  itemText: "View on Etherscan",
  primaryFocus: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}));

OverflowMenuCustom.propTypes = {
  url: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (OverflowMenuCustom);

/***/ }),

/***/ "./src/components/PortfolioRevenueItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/PortfolioRevenueItem.js";


const LineChart = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/chart-line.png";

const PortfolioRevenueItem = ({
  assetID,
  name,
  totalRevenue,
  monthlyRevenue
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  key: assetID,
  className: "Portfolio__tile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "Portfolio__tile-img",
  src: LineChart,
  alt: "Line chart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, "Total Revenue: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, "$", totalRevenue)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "Monthly Revenue: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "$", monthlyRevenue))));

PortfolioRevenueItem.propTypes = {
  assetID: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  monthlyRevenue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  totalRevenue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (PortfolioRevenueItem);

/***/ }),

/***/ "./src/components/PortfolioValueItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/PortfolioValueItem.js";


const PieChart = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/chart-pie.png";

const PortfolioValueItem = ({
  assetID,
  name,
  ownership,
  value
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  key: assetID,
  className: "Portfolio__tile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "Portfolio__tile-img",
  src: PieChart,
  alt: "Pie chart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, "Ownership: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, ownership, "%")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "Value: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "$", value))));

PortfolioValueItem.propTypes = {
  assetID: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  ownership: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (PortfolioValueItem);

/***/ }),

/***/ "./src/components/TotalPortfolioRevenue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PortfolioRevenueItem__ = __webpack_require__("./src/components/PortfolioRevenueItem.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/TotalPortfolioRevenue.js";



const BarChart = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/chart-bar.png";


const TotalPortfolioRevenue = ({
  totalPortfolioRevenue,
  portfolioRevenueAssets
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["ExpandableTile"], {
  className: "Portfolio__tile-expandable Portfolio__revenue",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["TileAboveTheFoldContent"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "Portfolio__tile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "Portfolio__tile-img",
  src: BarChart,
  alt: "Bar chart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "Total Asset Revenue:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, "$", totalPortfolioRevenue)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["TileBelowTheFoldContent"], {
  className: "Portfolio__folded-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, portfolioRevenueAssets.map(asset => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PortfolioRevenueItem__["a" /* default */], {
  assetID: asset.assetID,
  name: asset.name,
  monthlyRevenue: asset.monthlyRevenue,
  totalRevenue: asset.totalRevenue,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "Portfolio__tile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  }
}))));

TotalPortfolioRevenue.propTypes = {
  totalPortfolioRevenue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  portfolioRevenueAssets: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    assetID: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    monthlyRevenue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    totalRevenue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  })).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (TotalPortfolioRevenue);

/***/ }),

/***/ "./src/components/TotalPortfolioValue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PortfolioValueItem__ = __webpack_require__("./src/components/PortfolioValueItem.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/TotalPortfolioValue.js";



const PieChart = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/chart-pie.png";


const TotalPortfolioValue = ({
  totalPortfolioValue,
  portfolioValueAssets
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["ExpandableTile"], {
  className: "Portfolio__tile-expandable Portfolio__total",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["TileAboveTheFoldContent"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "Portfolio__tile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "Portfolio__tile-img",
  src: PieChart,
  alt: "Pie chart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "Total Portfolio Value:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, "$", totalPortfolioValue)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["TileBelowTheFoldContent"], {
  className: "Portfolio__folded-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, portfolioValueAssets.map(asset => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PortfolioValueItem__["a" /* default */], {
  name: asset.name,
  ownership: asset.ownership,
  value: asset.value,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "Portfolio__tile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
}))));

TotalPortfolioValue.propTypes = {
  totalPortfolioValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  portfolioValueAssets: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    ownership: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  })).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (TotalPortfolioValue);

/***/ }),

/***/ "./src/components/pages/AssetDetailsPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AssetDetails__ = __webpack_require__("./src/components/AssetDetails.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CategoryBackButton__ = __webpack_require__("./src/components/CategoryBackButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_AssetDetailsPage_css__ = __webpack_require__("./src/styles/AssetDetailsPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_AssetDetailsPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_AssetDetailsPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NotFoundPage__ = __webpack_require__("./src/components/pages/NotFoundPage.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/AssetDetailsPage.js";








const AssetDetailsPage = ({
  state,
  match
}) => {
  if (state.loading.assets) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      style: {
        width: '100%',
        position: 'relative',
        top: '50px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Loading"], {
      className: "AssetDetailsPage--is-loading",
      withOverlay: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "AssetDetailsPage-loading-message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, "Loading asset information"));
  }

  const _match$params = match.params,
        assetId = _match$params.assetId,
        category = _match$params.category;
  const asset = state.assets.find(({
    assetID
  }) => assetID === assetId);

  if (!asset) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NotFoundPage__["a" /* default */], {
      message: "The desired asset could not be found. Assets previously listed may no longer exist.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    });
  }

  const assetInformation = {
    assetID: asset.assetID,
    dueDate: asset.fundingDeadline,
    goal: asset.amountToBeRaised,
    raised: asset.amountRaisedInUSD,
    assetName: '',
    city: '',
    country: '',
    details: '',
    description: '',
    address: ''
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CategoryBackButton__["a" /* default */], {
    category: category,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AssetDetails__["a" /* default */], {
    information: assetInformation,
    currentEthInUsd: state.misc.currentEthInUsd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }));
};

AssetDetailsPage.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape().isRequired,
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (AssetDetailsPage);

/***/ }),

/***/ "./src/components/pages/AssetPaymentPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/AssetPaymentPage.js";


const AssetPaymentPage = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  }
}, "Asset Payment Page"));

/* harmony default export */ __webpack_exports__["a"] = (AssetPaymentPage);

/***/ }),

/***/ "./src/components/pages/ExploreAssetsPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_ExploreAssetsPage_css__ = __webpack_require__("./src/styles/ExploreAssetsPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_ExploreAssetsPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_ExploreAssetsPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Asset__ = __webpack_require__("./src/components/Asset.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NotFoundPage__ = __webpack_require__("./src/components/pages/NotFoundPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LoadingPage__ = __webpack_require__("./src/components/pages/LoadingPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_helpers__ = __webpack_require__("./src/util/helpers.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/ExploreAssetsPage.js";










const ExploreAssetsPage = ({
  state,
  match
}) => {
  const category = match.params.category;

  if (!category) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NotFoundPage__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    });
  }

  const loading = state.loading.assets;
  const assetsInCategory = state.assets.filter(asset => asset.category === match.params.category);
  const backButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], {
    key: "/explore",
    to: "/explore",
    href: "/explore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["Button"], {
    kind: "secondary",
    className: "ExploreAssetsPage__back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "BACK"));
  const assets = [backButton, assetsInCategory.map(asset => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Asset__["a" /* default */], {
    id: asset.assetID,
    key: asset.assetID,
    funded: asset.amountRaisedInUSD,
    goal: asset.amountToBeRaised,
    city: "unknown",
    country: "unknown",
    name: "unknown",
    category: Object(__WEBPACK_IMPORTED_MODULE_8__util_helpers__["c" /* getPrettyCategoryName */])(asset.category),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }))];
  const loadingElement = loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LoadingPage__["a" /* default */], {
    message: "Loading assets",
    hasBackButton: true,
    path: "/explore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }); // const noElements =
  //   !loading && (
  //     <div style={{ width: '100%' }}>
  //       {backButton}
  //       <p
  //         className="ExploreAssetsPage__message-no-elements"
  //       >
  //         {`No assets found in the ${category} category.`}
  //       </p>
  //     </div>
  //   );

  let renderedOutput = null;

  if (loading) {
    renderedOutput = loadingElement;
  } else if (assets[1].length === 0) {
    renderedOutput = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NotFoundPage__["a" /* default */], {
      message: "The desired category could not be found. Assets previously listed under this category may no longer exist.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    });
  } else {
    renderedOutput = assets;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "ExploreAssetsPage grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, renderedOutput);
};

ExploreAssetsPage.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired,
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (ExploreAssetsPage);

/***/ }),

/***/ "./src/components/pages/ExplorePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_ExplorePage_css__ = __webpack_require__("./src/styles/ExplorePage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_ExplorePage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_ExplorePage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helpers__ = __webpack_require__("./src/util/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LoadingPage__ = __webpack_require__("./src/components/pages/LoadingPage.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/ExplorePage.js";

/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */








const getCategories = assets => [...new Set(assets.map(asset => asset.category))].map(category => ({
  image: Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["b" /* getImageForCategory */])(category),
  path: category,
  name: Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["c" /* getPrettyCategoryName */])(category)
}));

const renderCategories = (categories, clickHandler) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "ExplorePage__container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
}, categories.map(category => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], {
  to: `/explore/${category.path}`,
  href: `/explore/${category.path}`,
  key: category.path,
  className: "ExplorePage__category",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "ExplorePage__image-container",
  onClick: clickHandler || Object(__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* debug */])(`Going to: ${category.path}`),
  style: {
    backgroundImage: `url(${category.image})`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  className: "ExplorePage__category-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  }
}, category.name)))));

class ExplorePage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const state = this.props.state;

    if (state.loading.assets) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__LoadingPage__["a" /* default */], {
        message: "Loading categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "ExplorePage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, renderCategories(getCategories(state.assets), this.props.clickHandler));
  }

}

ExplorePage.propTypes = {
  clickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape().isRequired
};
ExplorePage.defaultProps = {
  clickHandler: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (ExplorePage);

/***/ }),

/***/ "./src/components/pages/HelpPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_HelpPage_css__ = __webpack_require__("./src/styles/HelpPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_HelpPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_HelpPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CirclesBackgroundWrapper__ = __webpack_require__("./src/components/CirclesBackgroundWrapper.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/HelpPage.js";





const classNames = __webpack_require__("classnames");

const exploreIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/search.png";
const transactionsIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/history.png";
const portfolioIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/chart-area.png";
const metamaskIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/metamask.png";
const bugIcon = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/medium-bug.png";

const HelpPage = () => {
  const navOptions = [{
    imageSrc: exploreIcon,
    url: '/explore',
    title: 'Explore',
    desc: 'Here you can explore the different assets currently listed for sale on the platform. Simply select a catagory then select an asset to see more information.'
  }, {
    imageSrc: portfolioIcon,
    url: '/portfolio',
    title: 'Portfolio',
    desc: 'Once you’ve invested in a device it goes into your portfolio tab. From here you can check its performance, ownership and more detailed information.'
  }, {
    imageSrc: transactionsIcon,
    url: '/transaction-history',
    title: 'Transactions',
    desc: 'From here you can see a complete list of all your transactions; from investments you’ve made to revenue you’ve generated; from a particular device.'
  }];
  const buttons = [{
    imageSrc: metamaskIcon,
    url: 'https://www.youtube.com/watch?time_continue=25&v=6Gf_kRE4MJU',
    text: 'Need help setting up Metamask? Click here.',
    className: 'HelpPage__footer-button--is-metamask'
  }, {
    imageSrc: bugIcon,
    url: '',
    text: 'Found a bug? Click here.',
    className: 'HelpPage__footer-button--is-bug'
  }];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CirclesBackgroundWrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "HelpPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "HelpPage__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Welcome to the MyBit Alpha."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "HelpPage__desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Here are some helpful tips to get you started. Remember to connect to the Ethereum Ropsten testnet via Metamask. If you need to come back to this page click the help button in the top right."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "HelpPage__navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, navOptions.map(option => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], {
    className: "HelpPage__navigation-item",
    key: option.url,
    to: option.url,
    href: option.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "HelpPage__navigation-item-image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "HelpPage__navigation-item-image",
    src: option.imageSrc,
    alt: option.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    className: "HelpPage__navigation-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, option.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "HelpPage__navigation-item-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, option.desc)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "HelpPage__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, buttons.map(option => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    key: option.url,
    to: option.url,
    href: option.url,
    className: classNames({
      'HelpPage__footer-button': true,
      [option.className]: true
    }),
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "HelpPage__footer-button-image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "HelpPage__footer-button-image",
    src: option.imageSrc,
    alt: option.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    className: "HelpPage__footer-button-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, option.text))))));
};

/* harmony default export */ __webpack_exports__["a"] = (HelpPage);

/***/ }),

/***/ "./src/components/pages/LoadingPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_LoadingPage_css__ = __webpack_require__("./src/styles/LoadingPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_LoadingPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_LoadingPage_css__);


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/LoadingPage.js";






const LoadingPage = ({
  hasBackButton,
  path = '/explore',
  message
}) => {
  const backButton = hasBackButton && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"], {
    to: path,
    href: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Button"], {
    kind: "secondary",
    className: "LoadingPage__back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "BACK"));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "LoadingPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, backButton, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "LoadingPage__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Loading"], {
    withOverlay: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "LoadingPage__message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, message)));
};

LoadingPage.propTypes = {
  hasBackButton: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  path: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
LoadingPage.defaultProps = {
  path: ''
};
/* harmony default export */ __webpack_exports__["a"] = (LoadingPage);

/***/ }),

/***/ "./src/components/pages/NotFoundPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_NotFoundPage_css__ = __webpack_require__("./src/styles/NotFoundPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_NotFoundPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_NotFoundPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CirclesBackgroundWrapper__ = __webpack_require__("./src/components/CirclesBackgroundWrapper.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/NotFoundPage.js";





var NotFound = function NotFound(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, ".st0", `{`, "fill:url(#SVGID_1_)", `}`, ".st1", `{`, "fill:url(#SVGID_2_)", `}`, ".st2", `{`, "fill:url(#SVGID_3_)", `}`, ".st3", `{`, "fill:url(#SVGID_4_)", `}`, ".st4", `{`, "fill:url(#SVGID_5_)", `}`, ".st5", `{`, "fill:url(#SVGID_6_)", `}`, ".st6", `{`, "fill:url(#SVGID_7_)", `}`), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_1_",
    gradientUnits: "userSpaceOnUse",
    x1: "996.163",
    y1: "-4323.212",
    x2: "1392.27",
    y2: "-3927.106",
    gradientTransform: "matrix(0 1 1 0 4378.265 -1032.89)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#273469"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".176",
    stopColor: "#283877"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".507",
    stopColor: "#2a449b"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".954",
    stopColor: "#2e56d5"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".999",
    stopColor: "#2e58db"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M10.1 321.3V8.8c0-4.8 4-8.8 8.8-8.8H491c4.8 0 8.8 4 8.8 8.8v312.5H10.1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_2_",
    gradientUnits: "userSpaceOnUse",
    x1: "1279.14",
    y1: "-4066.279",
    x2: "1002.808",
    y2: "-4066.279",
    gradientTransform: "matrix(0 1 1 0 4321.984 -981.365)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#196cf2"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#59cef1"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M28.6 301.5V19.8h454.2v281.7z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_3_",
    gradientUnits: "userSpaceOnUse",
    x1: "1363.933",
    y1: "-4376.361",
    x2: "1363.933",
    y2: "-3873.653",
    gradientTransform: "matrix(0 1 1 0 4378.265 -1032.89)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#273469"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".176",
    stopColor: "#283877"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".507",
    stopColor: "#2a449b"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".954",
    stopColor: "#2e56d5"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: ".999",
    stopColor: "#2e58db"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M0 340v-23.9h511.4V340c0 3.3-2.6 6-6 6H6c-3.4-.1-6-2.7-6-6z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_4_",
    gradientUnits: "userSpaceOnUse",
    x1: "226.666",
    y1: "192.615",
    x2: "294.648",
    y2: "192.615",
    gradientTransform: "matrix(1 0 0 -1 0 512)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#00a022"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#2aff91"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M294.7 322.7H226c-.8 0-1.3-.5-1.3-1.3v-4c0-.8.5-1.3 1.3-1.3h68.7c.8 0 1.3.5 1.3 1.3v4c.2.7-.5 1.3-1.3 1.3z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_5_",
    gradientUnits: "userSpaceOnUse",
    x1: "34.529",
    y1: "306.874",
    x2: "422.795",
    y2: "451.849",
    gradientTransform: "matrix(1 0 0 -1 0 512)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#00a022"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#2aff91"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st4",
    d: "M185.5 214.6h-14.7v23.6h-34.2v-23.6H69.5v-31.2l47.1-92.8h36.3l-47.1 92.8h30.8v-31.7h34.2v31.7h14.7v31.2z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_6_",
    gradientUnits: "userSpaceOnUse",
    x1: "48.04",
    y1: "270.69",
    x2: "436.306",
    y2: "415.664",
    gradientTransform: "matrix(1 0 0 -1 0 512)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#00a022"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#2aff91"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st5",
    d: "M194.1 164.3c0-45.5 21.9-76.8 60.2-76.8s60.2 31.2 60.2 76.8-22 76.8-60.2 76.8-60.2-31.1-60.2-76.8zm86.5 0c0-28.5-8.7-43.9-26.4-43.9s-26.4 15.4-26.4 43.9 8.7 43.9 26.4 43.9 26.4-15.4 26.4-43.9z"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
    id: "SVGID_7_",
    gradientUnits: "userSpaceOnUse",
    x1: "65.79",
    y1: "223.15",
    x2: "454.056",
    y2: "368.125",
    gradientTransform: "matrix(1 0 0 -1 0 512)"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#00a022"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#2aff91"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st6",
    d: "M441 214.6h-14.7v23.6h-34.2v-23.6H325v-31.2l47.1-92.8h36.3l-47.1 92.8h30.8v-31.7h34.2v31.7H441v31.2z"
  }));
};

NotFound.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 346"
};



const NotFoundPage = ({
  message
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CirclesBackgroundWrapper__["a" /* default */], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "NotFoundPage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "NotFoundPage__wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  className: "NotFoundPage__image",
  alt: "Page not found",
  src: NotFound,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
  className: "NotFoundPage__header-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, "Page not found."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
  className: "NotFoundPage__message-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, message || 'The page you\'re looking for doesn\'t exist.'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"], {
  to: "/explore",
  href: "/explore",
  className: "NotFoundPage__home-btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_carbon_components_react__["Button"], {
  kind: "secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  }
}, "GO TO HOME")))));

NotFoundPage.propTypes = {
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
NotFoundPage.defaultProps = {
  message: ''
};
/* harmony default export */ __webpack_exports__["a"] = (NotFoundPage);

/***/ }),

/***/ "./src/components/pages/PortfolioPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_PortfolioPage_css__ = __webpack_require__("./src/styles/PortfolioPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_PortfolioPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_PortfolioPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingPage__ = __webpack_require__("./src/components/pages/LoadingPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TotalPortfolioValue__ = __webpack_require__("./src/components/TotalPortfolioValue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TotalPortfolioRevenue__ = __webpack_require__("./src/components/TotalPortfolioRevenue.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/PortfolioPage.js";







const fromWeiToEth = weiValue => window.web3.utils.fromWei(weiValue, 'ether');

const getOwnedAssets = assets => assets.filter(asset => asset.ownershipUnits > 0);

const getPortfolioValue = (assets, currentEthPrice) => assets.reduce((accumulator, currentValue) => accumulator + fromWeiToEth(currentValue.ownershipUnits, 'ether') * currentEthPrice, 0);

const getPortfolioRevenue = (assets, currentEthPrice) => assets.reduce((accumulator, currentValue) => accumulator + Number(currentValue.assetIncome) * currentEthPrice, 0);

const getPortfolioValueAssets = (assets, currentEthPrice) => assets.map(asset => ({
  assetID: asset.assetID,
  name: asset.assetID,
  ownership: asset.ownershipUnits,
  value: String(fromWeiToEth(asset.ownershipUnits) * currentEthPrice)
}));

const getPortfolioRevenueAssets = assets => assets.map(asset => ({
  assetID: asset.assetID,
  name: asset.assetID,
  monthlyRevenue: String(Number(asset.assetIncome) / 12),
  // TODO: This isn't the real calculation
  totalRevenue: asset.assetIncome
}));

const PortfolioPage = ({
  state
}) => {
  if (state.loading.portfolio) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__LoadingPage__["a" /* default */], {
      message: "Loading portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    });
  }

  const ownedAssets = getOwnedAssets(state.assets);
  const totalPortfolioValue = getPortfolioValue(ownedAssets, state.misc.currentEthInUsd);
  const totalPortfolioRevenue = getPortfolioRevenue(ownedAssets, state.misc.currentEthInUsd);
  const portfolioValueAssets = getPortfolioValueAssets(ownedAssets);
  const portfolioRevenueAssets = getPortfolioRevenueAssets(ownedAssets);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Portfolio__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TotalPortfolioValue__["a" /* default */], {
    totalPortfolioValue: String(totalPortfolioValue),
    portfolioValueAssets: portfolioValueAssets,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TotalPortfolioRevenue__["a" /* default */], {
    totalPortfolioRevenue: String(totalPortfolioRevenue),
    portfolioRevenueAssets: portfolioRevenueAssets,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))));
};

PortfolioPage.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (PortfolioPage);

/***/ }),

/***/ "./src/components/pages/TransactionHistoryPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dayjs__ = __webpack_require__("dayjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dayjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dayjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_carbon_components_react__ = __webpack_require__("carbon-components-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_carbon_components_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_TransactionHistory_css__ = __webpack_require__("./src/styles/TransactionHistory.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_TransactionHistory_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_TransactionHistory_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LoadingPage__ = __webpack_require__("./src/components/pages/LoadingPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OverflowMenuCustom__ = __webpack_require__("./src/components/OverflowMenuCustom.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/components/pages/TransactionHistoryPage.js";

/* eslint-disable camelcase */








class TransactionHistoryPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  UNSAFE_componentWillMount() {
    this.getTransactions();
  }

  getTransactions() {
    //we need to make sure we have the address/username of the user
    //before pulling the transactions
    //TODO Improve
    if (this.props.state.user.userName === '') {
      setTimeout(() => this.getTransactions(), 100);
      return;
    }

    this.props.fetchTransactionHistory();
  }

  render() {
    const _props = this.props,
          state = _props.state,
          setTransactionHistoryFilters = _props.setTransactionHistoryFilters;

    if (state.loading.transactionHistory) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__LoadingPage__["a" /* default */], {
        message: "Loading transactions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });
    }

    let transactionsToRender = [...state.transactions.history];
    const currentPage = state.transactions.currentPage;
    const itemsPerPage = state.transactions.itemsPerPage;
    const sortBy = state.transactions.sortBy;
    const sortDir = state.transactions.sortDir;

    if (sortBy === 'amount' && sortDir === 'DESC') {
      transactionsToRender = transactionsToRender.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === 'amount' && sortDir === 'ASC') {
      transactionsToRender = transactionsToRender.sort((a, b) => b.amount - a.amount);
    } else if (sortBy === 'date' && sortDir === 'DESC') {
      transactionsToRender = transactionsToRender.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'date' && sortDir === 'ASC') {
      transactionsToRender = transactionsToRender.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'status' && sortDir === 'DESC') {
      transactionsToRender = transactionsToRender.sort((a, b) => {
        if (a.status > b.status) {
          return -1;
        }

        if (a.status < b.status) {
          return 1;
        }

        return 0;
      });
    } else if (sortBy === 'status' && sortDir === 'ASC') {
      transactionsToRender = transactionsToRender.sort((a, b) => {
        if (a.status < b.status) {
          return -1;
        }

        if (a.status > b.status) {
          return 1;
        }

        return 0;
      });
    }

    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;
    transactionsToRender = transactionsToRender.splice(startIndex, endIndex);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "Transactions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "Transactions__history",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      className: "Transactions__table-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      }
    }, "Transaction History"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["Table"], {
      className: "Transactions__history-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableHead"], {
      className: "Transactions__history-table-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableRow"], {
      header: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableHeader"], {
      className: sortBy === 'date' ? '' : 'Transactions__history-column-header',
      onClick: () => {
        setTransactionHistoryFilters(itemsPerPage, currentPage, 'date', sortDir === 'ASC' ? 'DESC' : 'ASC');
      },
      sortDir: sortBy === 'date' ? sortDir : 'ASC',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      }
    }, "Date"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableHeader"], {
      className: sortBy === 'amount' ? '' : 'Transactions__history-column-header',
      onClick: () => {
        setTransactionHistoryFilters(itemsPerPage, currentPage, 'amount', sortDir === 'ASC' ? 'DESC' : 'ASC');
      },
      sortDir: sortBy === 'amount' ? sortDir : 'ASC',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    }, "Amount"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableHeader"], {
      className: sortBy === 'status' ? '' : 'Transactions__history-column-header',
      onClick: () => {
        setTransactionHistoryFilters(itemsPerPage, currentPage, 'status', sortDir === 'ASC' ? 'DESC' : 'ASC');
      },
      sortDir: sortBy === 'status' ? sortDir : 'ASC',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    }, "Status"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      }
    }, transactionsToRender.map((transaction, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableRow"], {
      key: transaction.txId,
      even: index % 2 !== 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableData"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      }
    }, __WEBPACK_IMPORTED_MODULE_2_dayjs___default()(transaction.date).format('MMMM D, YYYY, HH:mm')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableData"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      }
    }, transaction.amount, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      }
    }, transaction.type)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["TableData"], {
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      }
    }, transaction.status, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__OverflowMenuCustom__["a" /* default */], {
      url: transaction.type === 'ETH' ? `https://ropsten.etherscan.io/tx/${transaction.txId}` : `https://ropsten.etherscan.io/token/0x40fff37c1e5f48cee320bed447329a93f6d015c0?a=${transaction.txId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      }
    })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_carbon_components_react__["PaginationV2"], {
      onChange: val => {
        setTransactionHistoryFilters(val.pageSize, val.page - 1, sortBy, sortDir);
      },
      pageSizes: [10, 50, 100, 500],
      page: currentPage + 1,
      totalItems: state.transactions.history.length,
      pageSize: itemsPerPage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    }))));
  }

}

TransactionHistoryPage.propTypes = {
  fetchTransactionHistory: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  setTransactionHistoryFilters: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    user: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (TransactionHistoryPage);

/***/ }),

/***/ "./src/constants/contracts/API.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0x7c3833e4f308978984D40f7539A36494520D3531';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: true,
  inputs: [{
    name: '_owner',
    type: 'address'
  }, {
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'ownershipUnits',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'amountRaised',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_funder',
    type: 'address'
  }, {
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'totalPaidToFunder',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_name',
    type: 'string'
  }],
  name: 'contractAddress',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_operator',
    type: 'address'
  }],
  name: 'operatorAmountEscrowed',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_functionAuthorizationHash',
    type: 'bytes32'
  }],
  name: 'isFunctionAuthorized',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'operatorPercentage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'mybUSDPrice',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_user',
    type: 'address'
  }],
  name: 'isOwner',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'assetOperator',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'ethUSDSecondsRemaining',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'lockedForAsset',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_contractAddress',
    type: 'address'
  }],
  name: 'isPaused',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'totalPaidToFunders',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_operator',
    type: 'address'
  }],
  name: 'operatorAmountDeposited',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_contractAddress',
    type: 'address'
  }, {
    name: '_signer',
    type: 'address'
  }, {
    name: '_functionName',
    type: 'string'
  }, {
    name: '_agreedParameter',
    type: 'bytes32'
  }],
  name: 'getFunctionAuthorized',
  outputs: [{
    name: '',
    type: 'bytes32'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'ethUSDPrice',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'database',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'mybUSDSecondsRemaining',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'MyBitFoundation',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'fundingDeadline',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_user',
    type: 'address'
  }],
  name: 'userAccess',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'totalReceived',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'installerPercentage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'InstallerEscrow',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'ethUSDPriceExpiration',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'fundingStage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'deployFinished',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'myBitFoundationPercentage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'mybUSDPriceExpiration',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'amountToBeRaised',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    name: '_database',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  payable: false,
  stateMutability: 'nonpayable',
  type: 'fallback'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/contracts/AssetCreation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0x5E8E4b6EBeC4aF9CbB69Befab8Aa483C234D6f7d';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: false,
  inputs: [{
    name: '_myBitFoundationPercentage',
    type: 'uint256'
  }, {
    name: '_installerPercentage',
    type: 'uint256'
  }, {
    name: '_functionSigner',
    type: 'address'
  }],
  name: 'changeFundingPercentages',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_functionInitiator',
    type: 'address'
  }, {
    name: '_holdingAddress',
    type: 'address'
  }],
  name: 'destroy',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'database',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }, {
    name: '_amountToBeRaised',
    type: 'uint256'
  }, {
    name: '_operatorPercentage',
    type: 'uint256'
  }, {
    name: '_amountToEscrow',
    type: 'uint256'
  }, {
    name: '_installerID',
    type: 'bytes32'
  }, {
    name: '_assetType',
    type: 'bytes32'
  }],
  name: 'newAsset',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_newTimeGivenForFunding',
    type: 'uint256'
  }],
  name: 'changeFundingTime',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'fundingTime',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }, {
    name: '_functionSigner',
    type: 'address'
  }],
  name: 'removeAsset',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    name: '_database',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_creator',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_assetType',
    type: 'bytes32'
  }],
  name: 'LogAssetFundingStarted',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_installerID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_amountToBeRaised',
    type: 'uint256'
  }],
  name: 'LogAssetInfo',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_from',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_amountOf',
    type: 'uint256'
  }],
  name: 'LogLockAssetEscrow',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_remover',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogAssetRemoved',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_sender',
    type: 'address'
  }, {
    indexed: false,
    name: '_newTimeForFunding',
    type: 'uint256'
  }, {
    indexed: false,
    name: '_blockTimestamp',
    type: 'uint256'
  }],
  name: 'LogFundingTimeChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_myBitFoundationPercentage',
    type: 'uint256'
  }, {
    indexed: false,
    name: '_installerPercentage',
    type: 'uint256'
  }],
  name: 'LogFundingPercentageChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_locationSent',
    type: 'address'
  }, {
    indexed: true,
    name: '_amountSent',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_caller',
    type: 'address'
  }],
  name: 'LogDestruction',
  type: 'event'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/contracts/FundingHub.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0xace8Edd5295d1D144b902438B26A03f55FB1c50D';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'initiateRefund',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_functionInitiator',
    type: 'address'
  }, {
    name: '_holdingAddress',
    type: 'address'
  }],
  name: 'destroy',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'database',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'refund',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'fund',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: true,
  stateMutability: 'payable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'payout',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    name: '_database',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  payable: false,
  stateMutability: 'nonpayable',
  type: 'fallback'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_funder',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogNewFunder',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_sender',
    type: 'address'
  }, {
    indexed: true,
    name: '_amount',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogAssetFunded',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_amountRaised',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogAssetFundingFailed',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_currentEthPrice',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogAssetFundingSuccess',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_funder',
    type: 'address'
  }, {
    indexed: true,
    name: '_amount',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogRefund',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_amount',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_blockNumber',
    type: 'uint256'
  }],
  name: 'LogAssetPayout',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_locationSent',
    type: 'address'
  }, {
    indexed: true,
    name: '_amountSent',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_caller',
    type: 'address'
  }],
  name: 'LogDestruction',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_value1',
    type: 'uint256'
  }, {
    indexed: false,
    name: '_value2',
    type: 'uint256'
  }, {
    indexed: false,
    name: '_value3',
    type: 'uint256'
  }],
  name: 'fundingLimitModifier',
  type: 'event'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/contracts/MyBitToken.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0x40FfF37c1E5F48CeE320BeD447329A93F6d015C0';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: true,
  inputs: [],
  name: 'name',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_spender',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    name: 'success',
    type: 'bool'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_from',
    type: 'address'
  }, {
    name: '_to',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    name: 'success',
    type: 'bool'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'decimals',
  outputs: [{
    name: '',
    type: 'uint8'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'standard',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'target',
    type: 'address'
  }, {
    name: 'mintedAmount',
    type: 'uint256'
  }],
  name: 'mintToken',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'owner',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'symbol',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'newOwner',
    type: 'address'
  }],
  name: 'changeOwner',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_to',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_spender',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }, {
    name: '_extraData',
    type: 'bytes'
  }],
  name: 'approveAndCall',
  outputs: [{
    name: 'success',
    type: 'bool'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address'
  }, {
    name: '',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}, {
  inputs: [{
    name: 'initialSupply',
    type: 'uint256'
  }, {
    name: 'tokenName',
    type: 'string'
  }, {
    name: 'decimalUnits',
    type: 'uint8'
  }, {
    name: 'tokenSymbol',
    type: 'string'
  }],
  type: 'constructor'
}, {
  payable: false,
  type: 'fallback'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'from',
    type: 'address'
  }, {
    indexed: true,
    name: 'to',
    type: 'address'
  }, {
    indexed: false,
    name: 'value',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
const ARTIFICIAL_DELAY_IN_MS = 3000;
/* unused harmony export ARTIFICIAL_DELAY_IN_MS */

const USD_MYB_SYMBOL = 'USD/MYB';
/* harmony export (immutable) */ __webpack_exports__["h"] = USD_MYB_SYMBOL;

const noop = () => {};
/* unused harmony export noop */

const debug =  true ? console.log : noop;
/* harmony export (immutable) */ __webpack_exports__["i"] = debug;

const MYBIT_TICKER_COINMARKETCAP = 1902;
/* harmony export (immutable) */ __webpack_exports__["g"] = MYBIT_TICKER_COINMARKETCAP;

const ETHEREUM_TICKER_COINMARKETCAP = 1027;
/* harmony export (immutable) */ __webpack_exports__["a"] = ETHEREUM_TICKER_COINMARKETCAP;
 // TODO: Needs to be implemented server-side, API_KEY needs to be created

const ETHERSCAN_API_KEY = '';
/* harmony export (immutable) */ __webpack_exports__["b"] = ETHERSCAN_API_KEY;

const ETHERSCAN_TX_BY_ADDR_ENDPOINT = (apiKey, address) => `http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${apiKey}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = ETHERSCAN_TX_BY_ADDR_ENDPOINT;

const METAMASK_FIREFOX = 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/';
/* harmony export (immutable) */ __webpack_exports__["e"] = METAMASK_FIREFOX;

const METAMASK_CHROME = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
/* harmony export (immutable) */ __webpack_exports__["d"] = METAMASK_CHROME;

const METAMASK_OPERA = 'http://addons.opera.com/extensions/details/metamask/';
/* harmony export (immutable) */ __webpack_exports__["f"] = METAMASK_OPERA;


/***/ }),

/***/ "./src/styles/AccountInfo.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".AccountInfo {\n  position: absolute;\n  right: 60px;\n  height: 90px; }\n  .AccountInfo__balance {\n    text-align: right;\n    height: 90px;\n    float: left;\n    position: relative;\n    margin-right: 20px; }\n  .AccountInfo__balance-header {\n    font-size: 18px;\n    padding-top: 25px;\n    position: relative;\n    top: 2px;\n    display: inherit; }\n  .AccountInfo__balance--is-loading {\n    top: 42px;\n    position: absolute;\n    right: 15px; }\n  .AccountInfo__balance-info {\n    font-size: 14px; }\n  .AccountInfo__balance-myb {\n    padding-right: 10px; }\n  .AccountInfo__address {\n    float: left;\n    margin-top: 25px; }\n";
})();

/***/ }),

/***/ "./src/styles/Address.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".Address {\n  height: 39px; }\n  .Address__loader {\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    width: -moz-max-content;\n    width: max-content; }\n  .Address__text {\n    font-size: 14px;\n    padding-left: 50px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    width: 120px;\n    line-height: 1;\n    margin: 0px 0px;\n    position: relative;\n    top: -25px; }\n  .AppHeader .paper {\n  position: relative;\n  display: inherit !important; }\n";
})();

/***/ }),

/***/ "./src/styles/App.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".page-wrapper {\n  padding: 0px 50px 0px 50px;\n  max-width: 1400px;\n  margin: 0 auto; }\n";
})();

/***/ }),

/***/ "./src/styles/AppHeader.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".AppHeader {\n  height: 90px;\n  background-image: linear-gradient(to right, #0b3f9c, #2e58db);\n  margin: 0px 0px;\n  color: white; }\n  .AppHeader__logo {\n    padding: 0 25px;\n    margin: auto 0;\n    height: 73px; }\n  .AppHeader__exchange-rate {\n    line-height: 90px;\n    font-size: 14px; }\n  .AppHeader__exchange-rate--is-loading {\n    float: left;\n    top: 27px;\n    position: relative; }\n";
})();

/***/ }),

/***/ "./src/styles/Asset.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".Asset {\n  margin-bottom: 30px;\n  padding: 0px;\n  position: relative; }\n  .Asset__container {\n    width: 90%;\n    height: 298px;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n    margin: 0 auto; }\n  .Asset__image-holder {\n    background-size: cover;\n    background-position: center;\n    height: 196px;\n    position: relative; }\n  .Asset__image-holder-gradient {\n      position: absolute;\n      top: 0px;\n      height: 196px;\n      width: 100%;\n      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 66px); }\n  .Asset__image-holder-location-icon {\n      position: absolute;\n      bottom: 18px;\n      left: 21px; }\n  .Asset__image-holder-name {\n      position: absolute;\n      bottom: 42px;\n      font-size: 18px;\n      color: #ffffff;\n      left: 21px; }\n  .Asset__image-holder-location {\n      position: absolute;\n      bottom: 17px;\n      font-size: 14px;\n      color: #ffffff;\n      padding-left: 42px; }\n  .Asset__details {\n    padding: 5px 10px 0px 10px; }\n  .Asset__details-funded {\n      width: -moz-max-content;\n      width: max-content;\n      float: left;\n      font-size: 14px; }\n  .Asset__details-goal {\n      text-align: right;\n      font-size: 14px; }\n  .Asset__details-progress-bar {\n      width: 100%;\n      height: 4px;\n      background-color: #d8d8d8;\n      margin-top: 5px; }\n  .Asset__details-progress-bar-fill {\n      background-image: linear-gradient(272deg, #3ecd5d, #2db84b);\n      height: 4px; }\n  .Asset__details-contribute {\n      background-image: linear-gradient(to right, #3ecd5d, #2db84b);\n      margin-top: 15px;\n      height: 32px;\n      font-size: 14px;\n      width: 126px;\n      background-color: transparent;\n      border: none;\n      position: relative;\n      left: 50%;\n      transform: translate(-50%, 0);\n      cursor: pointer; }\n";
})();

/***/ }),

/***/ "./src/styles/AssetDetails.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".AssetDetails {\n  padding-top: 25px; }\n  .AssetDetails__left {\n    padding-left: 0px;\n    padding-right: 50px; }\n  .AssetDetails__left-name {\n      font-size: 34px;\n      display: block;\n      color: #383838;\n      padding-bottom: 10px; }\n  .AssetDetails__left-image-holder-location-icon {\n      height: 20px;\n      position: relative;\n      top: 3px; }\n  .AssetDetails__left-image-holder-calendar-icon {\n      position: relative;\n      top: 3px; }\n  .AssetDetails__left-location {\n      font-size: 18px;\n      color: #383838;\n      display: inline-block;\n      padding-left: 13px; }\n  .AssetDetails__left-days-to-go-wrapper {\n      display: block;\n      padding-top: 40px; }\n  .AssetDetails__left-days-to-go {\n      color: #125ac4;\n      font-size: 20px;\n      font-weight: 700;\n      display: inline-block;\n      padding-left: 18px; }\n  .AssetDetails__left-due-date {\n      font-size: 14px;\n      color: #383838;\n      padding-top: 6px; }\n  .AssetDetails__left-funding-wrapper {\n      margin-top: 30px;\n      text-align: center;\n      display: flex;\n      flex-wrap: nowrap;\n      justify-content: start; }\n  .AssetDetails__left-funds-raised {\n      border-right: 1px solid #575757;\n      padding-left: 0px;\n      text-align: left;\n      padding-right: 20px;\n      height: 57px; }\n  .AssetDetails__left-funds-goal {\n      border-right: 1px solid #575757;\n      padding: 0px 20px;\n      height: 57px; }\n  .AssetDetails__left-funds-investors {\n      padding: 0px 20px; }\n  .AssetDetails__left-funding-title {\n      font-size: 14px;\n      font-weight: 500;\n      color: #383838; }\n  .AssetDetails__left-funding-value {\n      font-size: 18px;\n      color: black;\n      position: relative;\n      top: 6px; }\n  .AssetDetails__left-calculate-title {\n      font-weight: 700;\n      margin-top: 40px;\n      font-size: 20px; }\n  .AssetDetails__left-slider-min {\n      width: -moz-max-content;\n      width: max-content;\n      float: left;\n      padding-top: 10px; }\n  .AssetDetails__left-slider-max {\n      text-align: right;\n      padding-top: 10px; }\n  .AssetDetails__left-contribution {\n      font-size: 18px;\n      padding-top: 20px;\n      display: inline-block;\n      padding-right: 10px; }\n  .AssetDetails__left-separator {\n      height: 31px;\n      border-right: 1px solid black;\n      display: inline-block;\n      position: relative;\n      top: 9px;\n      margin-right: 10px; }\n  .AssetDetails__left-contribution-value {\n      color: #125ac4; }\n  .AssetDetails__left-contribution-bordered {\n      display: inline-block;\n      padding-right: 10px; }\n  .AssetDetails__left-ownership {\n      font-size: 18px;\n      padding-top: 20px;\n      padding-right: 10px; }\n  .AssetDetails__left-contribution-inactive {\n      color: #d9d9d9; }\n  .AssetDetails__right {\n    padding: 0px 0px;\n    background-color: rgba(231, 232, 235, 0.63); }\n  .AssetDetails__right-image {\n      width: 100%; }\n  .AssetDetails__right-wrapper {\n      padding: 0px 22px; }\n  .AssetDetails__right-title-details {\n      font-size: 20px;\n      color: #383838;\n      display: block;\n      margin-top: 30px; }\n  .AssetDetails__right-content-details {\n      font-size: 14px;\n      color: #383838;\n      margin-top: 20px; }\n  .AssetDetails__right-address {\n      margin-top: 20px;\n      margin-bottom: 40px; }\n  .AssetDetails__right-address p {\n        top: -28px;\n        width: -moz-max-content;\n        width: max-content;\n        color: #125ac4;\n        cursor: pointer; }\n  .AssetDetails .bx--btn--primary:nth-child(1) {\n    width: 100%;\n    margin-top: 30px; }\n  .AssetDetails .bx--slider__range-label {\n    display: none; }\n  .AssetDetails .bx--slider {\n    margin: 0px 0px; }\n  .AssetDetails .bx--slider-container {\n    max-width: 100%; }\n  .AssetDetails .bx--form-item {\n    margin: 0px 0px; }\n  .AssetDetails .bx--slider__track {\n    background-color: rgba(31, 77, 193, 0.1); }\n  .AssetDetails .bx--slider__thumb {\n    background-color: #2db84b; }\n  .AssetDetails .bx--slider__thumb:active {\n      background-color: #2db84b; }\n  .AssetDetails .bx--slider__thumb:focus {\n      outline: none;\n      box-shadow: none; }\n  .AssetDetails .bx--slider__filled-track {\n    background-image: linear-gradient(268deg, #3ecd5d, #2db84b); }\n  .AssetDetails .bx--slider--disabled .bx--slider__thumb:active {\n    background-color: #2db84b; }\n";
})();

/***/ }),

/***/ "./src/styles/AssetDetailsPage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".AssetDetailsPage--is-loading {\n  margin: 0 auto; }\n\n.AssetDetailsPage-loading-message {\n  text-align: center;\n  font-size: 26px; }\n\n.AssetDetailsPage__back-button {\n  top: 11px;\n  height: 32px;\n  width: 112px;\n  border: solid 2px #125ac4;\n  font-weight: bold;\n  font-family: 'Roboto';\n  color: #125ac4;\n  margin-top: 10px; }\n";
})();

/***/ }),

/***/ "./src/styles/BrowserNotSupported.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".bx--modal-container {\n  border-top: none;\n  padding: 0;\n  min-width: 325px; }\n\n.bx--modal-content {\n  margin-bottom: 1rem;\n  margin-top: 1rem; }\n\n.bx--modal-close {\n  display: none; }\n\n.bx--btn--primary {\n  background-color: #2e58db;\n  font-family: 'Roboto'; }\n\n.bx--btn--primary:hover {\n    background-color: #2e58db;\n    border: #2e58db; }\n\n.bx--btn--primary:active {\n    border: #2e58db; }\n\n.bx--btn--primary:visited {\n    border: #2e58db;\n    background-color: #2e58db; }\n\n.bx--btn--primary:focus {\n    border: #2e58db;\n    background-color: #2e58db; }\n\n.bx--btn--secondary {\n  border-color: #2e58db;\n  color: #2e58db;\n  font-family: 'Roboto'; }\n\n.bx--btn--secondary:hover {\n    background-color: #2e58db; }\n\n.bx--btn--ghost {\n  color: #2e58db;\n  font-family: 'Roboto';\n  font-weight: 200; }\n\n.bx--btn--ghost:hover {\n    background-color: #2e58db;\n    border: none; }\n\n.BrowserNotSupported__title {\n  font-size: 1.1rem;\n  font-family: 'Gilroy';\n  color: rgba(0, 0, 0, 0.75);\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.5rem; }\n\n.BrowserNotSupported__metamaskfox-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 54%;\n  margin-bottom: 20px;\n  margin-top: 15px; }\n\n.BrowserNotSupported {\n  border-top: none; }\n\n.BrowserNotSupported__download-text {\n    width: 300px;\n    font-size: 18px;\n    line-height: 1;\n    text-align: center;\n    margin: 0 auto;\n    margin-bottom: 30px; }\n\n.BrowserNotSupported__download-text a {\n      text-decoration: none;\n      color: #1991eb; }\n\n.BrowserNotSupported__metamasklogin-button {\n    width: 86%;\n    margin-left: 7%;\n    margin-right: 7%;\n    cursor: default; }\n";
})();

/***/ }),

/***/ "./src/styles/CirclesBackgroundWrapper.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".CirclesBackgroundWrapper {\n  position: fixed;\n  top: 166px;\n  min-height: calc(100vh - 166px);\n  width: 100%;\n  left: 0px;\n  overflow: hidden; }\n  .CirclesBackgroundWrapper__circle--is-left {\n    background-image: linear-gradient(to bottom, #f2f4f7, #ffffff);\n    width: 1200px;\n    left: -650px;\n    height: 1200px;\n    bottom: -750px;\n    border-radius: 50%;\n    position: absolute;\n    display: none;\n    z-index: -1; }\n  @media (min-width: 1024px) {\n      .CirclesBackgroundWrapper__circle--is-left {\n        display: block; } }\n  .CirclesBackgroundWrapper__circle--is-right {\n    background-image: linear-gradient(to top, #f2f4f7, #ffffff);\n    width: 600px;\n    right: -370px;\n    height: 130%;\n    border-radius: 50%;\n    position: absolute;\n    display: none;\n    z-index: -1; }\n  @media (min-width: 1024px) {\n      .CirclesBackgroundWrapper__circle--is-right {\n        display: block; } }\n";
})();

/***/ }),

/***/ "./src/styles/ConfirmationPopup.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".ConfirmationPopup {\n  height: 403px;\n  width: 348px;\n  background-color: #ffffff;\n  font-family: 'Roboto'; }\n  .ConfirmationPopup__title {\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 50px;\n    border-bottom: 2px solid #dfe3e6; }\n  .ConfirmationPopup__wrapper {\n    padding: 0px 20px;\n    padding-top: 20px;\n    position: relative; }\n  .ConfirmationPopup__description {\n    font-size: 18px;\n    color: #5a6872;\n    padding-top: 10px; }\n  .ConfirmationPopup__description-amount {\n    position: absolute;\n    right: 20px;\n    font-size: 15px;\n    font-weight: 700;\n    color: black; }\n  .ConfirmationPopup__description-amount-right {\n    display: block;\n    text-align: right;\n    font-size: 14px;\n    font-weight: bold;\n    color: black; }\n  .ConfirmationPopup__line {\n    padding-top: 40px;\n    border-bottom: 1px solid #dfe3e6; }\n  .ConfirmationPopup__description-cost {\n    color: black;\n    padding-top: 20px;\n    line-height: 1; }\n  .ConfirmationPopup__tos-wrapper {\n    display: flex;\n    padding: 0px 40px;\n    padding-top: 13px; }\n  .ConfirmationPopup__tos-text {\n    font-size: 14px;\n    width: 165px;\n    text-align: center; }\n  .ConfirmationPopup__tos-message-error {\n    font-size: 14px;\n    color: red;\n    text-align: center; }\n  #ConfirmationPopup__container .bx--modal-container {\n  height: 520px;\n  width: 348px;\n  padding: 0px 0px;\n  border-top: none;\n  min-width: auto;\n  min-height: auto; }\n  #ConfirmationPopup__container .bx--modal-header {\n  display: none; }\n  #ConfirmationPopup__container .bx--modal-content {\n  margin-bottom: 0px; }\n  #ConfirmationPopup__container .bx--modal-footer {\n  margin: 0px 0px;\n  padding: 0px 0px;\n  background-color: white; }\n  #ConfirmationPopup__container .bx--modal__buttons-container {\n  position: relative; }\n  #ConfirmationPopup__container .bx--btn--secondary {\n  width: 100%;\n  position: absolute;\n  top: 50px;\n  left: 0px; }\n  #ConfirmationPopup__container .bx--btn--primary {\n  width: 100%;\n  position: absolute;\n  margin: 0px 0px;\n  left: 0px; }\n  #ConfirmationPopup__container .bx--modal-footer {\n  padding: 0px 20px;\n  padding-top: 10px; }\n";
})();

/***/ }),

/***/ "./src/styles/ExploreAssetsPage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".ExploreAssetsPage {\n  width: 100%;\n  margin: 0px;\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 55px; }\n  .ExploreAssetsPage--is-loading {\n    margin: 0 auto; }\n  .ExploreAssetsPage-loading-message {\n    text-align: center;\n    font-size: 26px; }\n  .ExploreAssetsPage__back-button {\n    position: absolute;\n    top: 11px;\n    height: 32px;\n    width: 112px;\n    border: solid 2px #125ac4;\n    font-weight: bold;\n    font-family: 'Roboto';\n    color: #125ac4;\n    left: 18px; }\n  .ExploreAssetsPage__message-no-elements {\n    text-align: center;\n    font-size: 20px;\n    padding-top: 70px; }\n";
})();

/***/ }),

/***/ "./src/styles/ExplorePage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".ExplorePage {\n  width: 100%;\n  margin: 0px;\n  max-width: 1370px;\n  margin: 0 auto;\n  padding-top: 50px; }\n  .ExplorePage__container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: left; }\n  .ExplorePage__category {\n    margin: 0px 15px 30px 15px;\n    padding: 0px;\n    height: 310px;\n    text-decoration: none;\n    width: 310px; }\n  .ExplorePage__category-name {\n      width: 100%;\n      text-align: center;\n      font-size: 36px;\n      font-family: 'Gilroy';\n      font-weight: 900;\n      color: #ffffff;\n      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n      position: relative;\n      padding: 0px 10px; }\n  .ExplorePage__image-container {\n    width: 100%;\n    margin: 0 auto;\n    height: 310px;\n    background-size: cover;\n    background-position: center;\n    cursor: pointer;\n    display: flex;\n    align-items: center; }\n";
})();

/***/ }),

/***/ "./src/styles/HelpPage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".HelpPage {\n  text-align: center;\n  color: #001358;\n  margin-top: 50px; }\n  .HelpPage__title {\n    font-family: Gilroy;\n    font-weight: 900;\n    font-size: 48px; }\n  .HelpPage__desc {\n    max-width: 1020px;\n    margin: 0 auto;\n    font-size: 24px;\n    margin-top: 30px; }\n  .HelpPage__navigation {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n  .HelpPage__navigation-item {\n      text-decoration: none;\n      width: 310px;\n      height: 306px;\n      background-color: #f9f9f9;\n      margin: 0px 15px;\n      margin-top: 40px;\n      border: solid 1px #dfe3e6;\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n      overflow: hidden;\n      color: #001358; }\n  .HelpPage__navigation-item:hover {\n        border-style: solid;\n        border-width: 6px;\n        border-image: linear-gradient(#24f281, #0083ff) 1;\n        cursor: pointer; }\n  .HelpPage__navigation-item:hover .HelpPage__navigation-item-title {\n        transform: translateY(-75px);\n        font-size: 18px; }\n  .HelpPage__navigation-item-title {\n        display: block;\n        margin-top: 20px;\n        font-size: 28px;\n        transition: all 0.25s; }\n  .HelpPage__navigation-item:hover .HelpPage__navigation-item-image-wrapper {\n        transform: translateY(-50px) scale(0.6); }\n  .HelpPage__navigation-item-image {\n        width: 51px;\n        height: 51px; }\n  .HelpPage__navigation-item-image-wrapper {\n        width: 108px;\n        height: 108px;\n        background-color: #ffffff;\n        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto;\n        margin-top: 60px;\n        transition: all 0.25s; }\n  .HelpPage__navigation-item:hover .HelpPage__navigation-item-description {\n        visibility: visible;\n        opacity: 1;\n        transform: translateY(-45px); }\n  .HelpPage__navigation-item-description {\n        visibility: hidden;\n        opacity: 0;\n        transform: translateY(100px);\n        padding-left: 10px;\n        padding-right: 10px;\n        font-size: 15px;\n        transition: all 0.25s; }\n  .HelpPage__footer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 100px; }\n  @media (max-width: 949px) {\n      .HelpPage__footer {\n        flex-direction: column;\n        align-items: center; } }\n  .HelpPage__footer-button {\n    width: 392px;\n    height: 106px;\n    color: #FFFFFF;\n    display: flex;\n    margin: 0px 20px;\n    border-radius: 6px;\n    text-decoration: none;\n    margin-top: 150px; }\n  .HelpPage__footer-button-image-wrapper {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 30px; }\n  .HelpPage__footer-button-text {\n      font-size: 24px;\n      display: flex;\n      align-items: center; }\n  .HelpPage__footer-button--is-metamask {\n      background-image: linear-gradient(255deg, #24f281, #0083ff); }\n  .HelpPage__footer-button--is-metamask img {\n        width: 59px;\n        height: 54px; }\n  .HelpPage__footer-button--is-bug {\n      background-image: linear-gradient(75deg, #001358, #125ac4); }\n  .HelpPage__footer-button--is-bug img {\n        width: 63.9px;\n        height: 84.69px; }\n  .HelpPage__footer-button--is-bug b {\n        padding: 0px 50px; }\n  @media (max-width: 949px) {\n        .HelpPage__footer-button--is-bug {\n          margin-top: 30px; } }\n";
})();

/***/ }),

/***/ "./src/styles/LoadingPage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".LoadingPage__back-button {\n  top: 11px;\n  height: 32px;\n  width: 112px;\n  border: solid 2px #125ac4;\n  font-weight: bold;\n  font-family: 'Roboto';\n  color: #125ac4;\n  margin-top: 10px; }\n\n.LoadingPage__wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: 50px; }\n\n.LoadingPage__message {\n  text-align: center;\n  font-size: 26px; }\n";
})();

/***/ }),

/***/ "./src/styles/MetamaskAudit.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".bx--modal-container {\n  border-top: none;\n  padding: 0;\n  min-width: 325px; }\n\n.bx--modal-content {\n  margin-bottom: 1rem;\n  margin-top: 1rem; }\n\n.bx--modal-close {\n  display: none; }\n\n.bx--btn--primary {\n  background-color: #2e58db;\n  font-family: 'Roboto'; }\n\n.bx--btn--primary:hover {\n    background-color: #2e58db;\n    border: #2e58db; }\n\n.bx--btn--primary:active {\n    border: #2e58db; }\n\n.bx--btn--primary:visited {\n    border: #2e58db;\n    background-color: #2e58db; }\n\n.bx--btn--primary:focus {\n    border: #2e58db;\n    background-color: #2e58db; }\n\n.bx--btn--secondary {\n  border-color: #2e58db;\n  color: #2e58db;\n  font-family: 'Roboto'; }\n\n.bx--btn--secondary:hover {\n    background-color: #2e58db; }\n\n.bx--btn--ghost {\n  color: #2e58db;\n  font-family: 'Roboto';\n  font-weight: 200; }\n\n.bx--btn--ghost:hover {\n    background-color: #2e58db;\n    border: none; }\n\n.MetamaskAudit__title {\n  font-size: 1.1rem;\n  font-family: 'Gilroy';\n  color: rgba(0, 0, 0, 0.75);\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.5rem; }\n\n.MetamaskAudit__metamaskfox-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 54%;\n  margin-bottom: 20px;\n  margin-top: 15px; }\n\n.MetamaskAudit {\n  border-top: none; }\n\n.MetamaskAudit__metamaskinstall-button {\n    width: 86%;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-bottom: 10px; }\n\n.MetamaskAudit__metamaskmanual-button {\n    width: 86%;\n    margin-left: 7%;\n    margin-right: 7%; }\n\n.MetamaskAudit__metamaskmanual-button a {\n      text-decoration: none; }\n";
})();

/***/ }),

/***/ "./src/styles/MetamaskLogin.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".bx--modal-container {\n  border-top: none;\n  padding: 0;\n  min-width: 325px; }\n\n.bx--modal-content {\n  margin-bottom: 1rem;\n  margin-top: 1rem; }\n\n.bx--modal-close {\n  display: none; }\n\n.bx--btn--primary {\n  background-color: #2e58db;\n  font-family: 'Roboto'; }\n\n.bx--btn--primary:hover {\n    background-color: #2e58db;\n    border: #2e58db; }\n\n.bx--btn--primary:active {\n    border: #2e58db; }\n\n.bx--btn--primary:visited {\n    border: #2e58db;\n    background-color: #2e58db; }\n\n.bx--btn--primary:focus {\n    border: #2e58db;\n    background-color: #2e58db; }\n\n.bx--btn--secondary {\n  border-color: #2e58db;\n  color: #2e58db;\n  font-family: 'Roboto'; }\n\n.bx--btn--secondary:hover {\n    background-color: #2e58db; }\n\n.bx--btn--ghost {\n  color: #2e58db;\n  font-family: 'Roboto';\n  font-weight: 200; }\n\n.bx--btn--ghost:hover {\n    background-color: #2e58db;\n    border: none; }\n\n.MetamaskLogin__title {\n  font-size: 1.1rem;\n  font-family: 'Gilroy';\n  color: rgba(0, 0, 0, 0.75);\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.5rem; }\n\n.MetamaskLogin__metamaskfox-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 54%;\n  margin-bottom: 20px;\n  margin-top: 15px; }\n\n.MetamaskLogin {\n  border-top: none; }\n\n.MetamaskLogin__metamasklogin-button, .MetamaskLogin__metamaskfriendlyguide-link {\n    width: 86%;\n    margin-left: 7%;\n    margin-right: 7%; }\n\n.MetamaskLogin__metamaskfriendlyguide-link {\n    text-decoration: underline; }\n";
})();

/***/ }),

/***/ "./src/styles/NavigationBar.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".AppNavigationBar {\n  height: 74px;\n  background-color: #f9f9f9;\n  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1); }\n  .AppNavigationBar__option-img {\n    height: 25px;\n    margin-top: 18px; }\n  .AppNavigationBar__option-text {\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1;\n    margin-top: 5px; }\n  .AppNavigationBar__option-col {\n    max-width: 120px;\n    text-align: center;\n    text-decoration: none; }\n  .AppNavigationBar__option {\n    height: 100%;\n    width: -moz-max-content;\n    width: max-content;\n    margin: 0 auto;\n    padding: 0px 4px;\n    color: #d9d9d9; }\n  .AppNavigationBar__option--is-selected {\n    border-bottom: 3px solid #125ac4; }\n  .AppNavigationBar__option--is-selectable {\n    cursor: pointer;\n    color: #125ac4; }\n";
})();

/***/ }),

/***/ "./src/styles/NotFoundPage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".NotFoundPage__wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 80px; }\n  @media (min-width: 768px) {\n    .NotFoundPage__wrapper {\n      top: 120px; } }\n  .NotFoundPage__image {\n  width: 70%; }\n  @media (min-width: 768px) {\n    .NotFoundPage__image {\n      width: 55%;\n      max-width: 360px; } }\n  @media (min-width: 1024px) {\n    .NotFoundPage__image {\n      max-width: 360px; } }\n  .NotFoundPage__header-text {\n  font-size: 30px;\n  font-weight: 800;\n  color: #125ac4;\n  margin-top: 20px; }\n  @media (min-width: 768px) {\n    .NotFoundPage__header-text {\n      font-size: 80px; } }\n  .NotFoundPage__message-text {\n  font-size: 15px;\n  color: #125ac4;\n  text-align: center; }\n  @media (min-width: 768px) {\n    .NotFoundPage__message-text {\n      font-size: 30px; } }\n  .NotFoundPage__home-btn {\n  text-decoration: none;\n  margin-top: 20px; }\n  .NotFoundPage__home-btn button {\n    height: 32px;\n    font-family: 'Roboto';\n    color: #ffffff;\n    border: 2px solid #125ac4;\n    margin-top: 10px;\n    background-color: #125ac4;\n    text-decoration: none;\n    z-index: 10; }\n  .NotFoundPage__home-btn button:hover {\n      background-color: #ffffff;\n      color: #125ac4; }\n";
})();

/***/ }),

/***/ "./src/styles/PortfolioPage.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".Portfolio {\n  padding-top: 50px; }\n  .Portfolio__tile-expandable {\n    width: 283px; }\n  .Portfolio__tile-expandable:focus {\n      outline: none; }\n  .Portfolio__tile-expandable .bx--tile__chevron:focus {\n      outline: none; }\n  .Portfolio__tile {\n    height: 78px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .Portfolio__tile div {\n      width: 70%; }\n  .Portfolio .bx--tile-content__below-the-fold .Portfolio__tile:nth-child(odd) {\n    background-color: #f5f7fa; }\n  .Portfolio__tile-img {\n    height: 27px;\n    width: 30px; }\n  .Portfolio .bx--tile--expandable {\n    background-color: #ffffff;\n    padding: 0px 0px; }\n  .Portfolio .bx--tile__chevron svg {\n    fill: #125ac4; }\n  .Portfolio p {\n    padding: 2px 0px;\n    margin: 0px 0px;\n    color: #575757;\n    line-height: 0.9; }\n  .Portfolio b {\n    color: #125ac4; }\n  .Portfolio__revenue {\n    margin-left: 30px; }\n  .Portfolio__revenue b {\n    color: #2db84b; }\n  .Portfolio__wrapper {\n    display: flex; }\n  @media only screen and (max-width: 695px) {\n  .Portfolio__wrapper {\n    flex-direction: column;\n    align-items: center; }\n  .Portfolio__revenue {\n    margin-left: 0px;\n    margin-top: 30px; } }\n";
})();

/***/ }),

/***/ "./src/styles/TransactionHistory.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".Transactions {\n  display: flex; }\n  .Transactions__table-name {\n    font-size: 18px;\n    color: #152935;\n    padding-left: 20px; }\n  .Transactions__history {\n    margin-top: 50px; }\n  .Transactions__history-table {\n    border: none;\n    max-width: 560px;\n    font-family: 'Roboto';\n    margin-top: 10px;\n    overflow: hidden; }\n  .Transactions__history-table-header {\n    background-color: #f5f7fa; }\n  .Transactions__overflowOption {\n    margin-left: 20px;\n    transform: rotate(90deg);\n    opacity: 0;\n    transition: opacity 0.2s; }\n  .Transactions__history-column-header .bx--table-sort__svg {\n    opacity: 0.3; }\n  .Transactions .bx--table-row:hover .Transactions__overflowOption {\n    opacity: 1;\n    transition: opacity 0.1s; }\n  .Transactions .bx--table-sort__svg {\n    position: relative;\n    left: 10px; }\n";
})();

/***/ }),

/***/ "./src/styles/index.css":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "@font-face {\n  font-family: 'Roboto';\n  src: url(\"../fonts/Roboto-Medium.ttf\") format(\"truetype\");\n  font-weight: medium; }\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(\"../fonts/Roboto-Regular.ttf\") format(\"truetype\");\n  font-weight: normal; }\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(\"../fonts/Roboto-Bold.ttf\") format(\"truetype\");\n  font-weight: bold; }\n\n@font-face {\n  font-family: 'Gilroy';\n  src: url(\"../fonts/Gilroy-Extrabold.otf\") format(\"opentype\");\n  font-weight: bold; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto';\n  position: relative;\n  font-weight: normal;\n  background-color: #ffffff; }\n\nhtml, body {\n  height: 100%; }\n\nhtml {\n  box-sizing: border-box; }\n\np {\n  letter-spacing: normal !important; }\n\n.grid {\n  margin-left: 0px !important;\n  margin-right: 0px !important; }\n\nb {\n  font-weight: bold; }\n\n.page-wrapper {\n  padding: 0px 50px 0px 50px; }\n\n.bx--btn--primary {\n  background-color: #2DB84B; }\n\n.bx--btn--primary:hover {\n    background-color: #3ECD5D; }\n\n.bx--btn--primary:active {\n    background-color: #3ECD5D; }\n\n.bx--btn--primary:focus {\n    border: 2px solid #2DB84B;\n    outline: none;\n    background-color: #2DB84B; }\n\n.bx--btn--primary:disabled {\n  background-color: #2DB84B; }\n\n.bx--btn--primary:disabled:hover {\n    background-color: #2DB84B; }\n\n.bx--btn--primary:disabled:active {\n    background-color: #2DB84B; }\n\n.bx--btn--primary:disabled:focus {\n    border: 2px solid #2DB84B;\n    outline: none;\n    background-color: #2DB84B; }\n\n.bx--btn--secondary:hover {\n  background-color: #125ac4; }\n\n.bx--btn--secondary:focus {\n  border: 2px solid #125ac4;\n  outline: none;\n  background-color: #125ac4; }\n";
})();

/***/ }),

/***/ "./src/util/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const cryptocurrencyAtmCategoryImage = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/category-cryptocurrency-atm.png";
const solarEnergyCategoryImage = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/category-solar-energy.png";
const parseEtherFromBalance = (web3, balance) => web3.fromWei(parseInt(balance, 10), 'ether');
/* unused harmony export parseEtherFromBalance */

const mergeAllLogsByAssetId = logs => {
  const assets = [];
  logs.forEach((logEntry, index, array) => {
    if (index === 0) {
      assets.push(_objectSpread({}, logEntry));
      return;
    }

    if (logEntry.assetID === array[index - 1].assetID) {
      const duplicateIndex = assets.map(asset => asset.assetID).indexOf(logEntry.assetID);

      if (duplicateIndex > -1) {
        assets[duplicateIndex] = _objectSpread({}, logEntry, array[index - 1], assets[duplicateIndex]);
      } else {
        assets.push(_objectSpread({}, logEntry, array[index - 1]));
      }
    } else {
      assets.push(_objectSpread({}, logEntry));
    }
  });
  return assets;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeAllLogsByAssetId;

const mergeAndSumFundingEvents = fundingEvents => {
  const assets = [];
  const fundingEventsWithNumbers = fundingEvents.map(({
    assetID,
    currentEthPrice
  }) => ({
    assetID,
    currentEthPrice: Number(currentEthPrice)
  }));
  fundingEventsWithNumbers.forEach((logEntry, index, array) => {
    if (index === 0) {
      assets.push(_objectSpread({}, logEntry));
      return;
    }

    if (logEntry.assetID === array[index - 1].assetID) {
      const duplicateIndex = assets.map(asset => asset.assetID).indexOf(logEntry.assetID);

      if (duplicateIndex > -1) {
        assets[duplicateIndex] = _objectSpread({}, logEntry, array[index - 1], assets[duplicateIndex], {
          currentEthPrice: assets[duplicateIndex].currentEthPrice + logEntry.currentEthPrice
        });
      } else {
        assets.push(_objectSpread({}, logEntry, array[index - 1], {
          currentEthPrice: array[index - 1].currentEthPrice + logEntry.currentEthPrice
        }));
      }
    } else {
      assets.push(_objectSpread({}, logEntry));
    }
  });
  const totalAmountRaisedAssets = assets.map(({
    assetID,
    currentEthPrice
  }) => ({
    assetID,
    totalAmountRaised: String(currentEthPrice)
  }));
  return totalAmountRaisedAssets;
};
/* unused harmony export mergeAndSumFundingEvents */

const getCategoryFromAssetTypeHash = (web3, assetTypeHash) => {
  switch (assetTypeHash) {
    case web3.utils.sha3('coffeemachine'):
      return 'coffeemachine';

    case web3.utils.sha3('bitcoinatm'):
      return 'bitcoinatm';

    default:
      return 'uncategorized';
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getCategoryFromAssetTypeHash;

const getAssetIDFromHash = (web3, assetIDHash) => {
  switch (assetIDHash) {
    case web3.utils.sha3('officecoffeemachine'):
      return 'officecoffeemachine';

    default:
      return '';
  }
};
/* unused harmony export getAssetIDFromHash */

const getPrettyCategoryName = category => {
  switch (category) {
    case 'coffeemachine':
      return 'Coffee Machines';

    case 'uncategorized':
      return 'Uncategorized';

    default:
      return 'Unknown';
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getPrettyCategoryName;

const getImageForCategory = category => {
  switch (category) {
    case 'coffeemachine':
      return cryptocurrencyAtmCategoryImage;

    case 'uncategorized':
      return solarEnergyCategoryImage;

    default:
      return cryptocurrencyAtmCategoryImage;
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getImageForCategory;


/***/ }),

/***/ "./src/util/isGlobalWeb3.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isGlobalWeb3() {
  if (typeof window === 'undefined') return false;
  if (!window) return false;
  if (!window.web3) return false;
  if (!window.web3.currentProvider) return false;
  return true;
}

module.exports = isGlobalWeb3;

/***/ }),

/***/ "./src/util/isMetamask.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const isGlobalWeb3 = __webpack_require__("./src/util/isGlobalWeb3.js");

function isMetaMask() {
  if (!isGlobalWeb3()) return false;
  if (!window.web3.currentProvider.isMetaMask) return false;
  return true;
}

module.exports = isMetaMask;

/***/ }),

/***/ "./src/util/isUserLogged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


async function checkAccount() {
  const accounts = await window.web3.eth.getAccounts().then(accs => accs);
  return accounts;
}

/* harmony default export */ __webpack_exports__["a"] = (checkAccount);

/***/ }),

/***/ "./src/util/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./src/constants/index.js");





const getWeb3Async = () => {
  if (typeof window === 'undefined') return {};

  if (window.web3) {
    // Injected Web3 detected. Use Mist/MetaMask's provider.
    window.web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
    Object(__WEBPACK_IMPORTED_MODULE_1__constants__["i" /* debug */])('Metamask Loaded');
  } else {
    // No web3 instance injected, using Local web3.
    const provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider('http://localhost:8545');
    window.web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
  }

  return window.web3;
};

/* harmony default export */ __webpack_exports__["a"] = (getWeb3Async);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "carbon-components-react":
/***/ (function(module, exports) {

module.exports = require("carbon-components-react");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "dayjs":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "detect-browser":
/***/ (function(module, exports) {

module.exports = require("detect-browser");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jazzicon":
/***/ (function(module, exports) {

module.exports = require("react-jazzicon");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map