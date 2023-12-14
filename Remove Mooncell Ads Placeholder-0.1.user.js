// ==UserScript==
// @name         Remove Mooncell Ads Placeholder
// @name:zh-CN   移除 Mooncell 的广告占位符
// @namespace    https://github.com/EricChen1/remove-mooncell-ads
// @version      0.1
// @description  Remove the entire ad area when using an ad blocker
// @description:zh-CN 使用广告拦截器时，移除（没清理干净的）整块广告区域
// @author       Eric Chen
// @match        https://fgo.wiki/*
// @icon         https://fgo.wiki/favicon.ico
// @license      GPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let adom=[document.querySelector("#mw-content-text > div.mw-parser-output > div.mp-container-left > div.mp-bbbanner.nomobile"),document.querySelector("#mw-content-text > div.mw-parser-output > div:nth-child(1)"),document.querySelector("#mw-content-text > div.mw-parser-output > div.nomobile")];
    switch(document.location.href){
        case 'https://fgo.wiki/w/%E9%A6%96%E9%A1%B5':
            adom[0].remove();
            break;
        case 'https://fgo.wiki/w/%E8%8B%B1%E7%81%B5%E5%9B%BE%E9%89%B4':
        case 'https://fgo.wiki/w/%E7%A4%BC%E8%A3%85%E5%9B%BE%E9%89%B4':
        case 'https://fgo.wiki/w/%E6%8C%87%E4%BB%A4%E7%BA%B9%E7%AB%A0%E5%9B%BE%E9%89%B4':
            adom[1].remove();
            break;
        case 'https://fgo.wiki/w/%E9%9C%80%E8%A6%81%E6%88%91%E5%B8%AE%E4%BD%A0Mooncell%E4%B9%88':
            adom[2].remove();
            break;
        default:
            console.log('该 Mooncell 页面可能没有广告占位');
            break;
    }
})();