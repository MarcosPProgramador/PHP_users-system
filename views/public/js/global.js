"use strict";
var _ = function (elm) {
    var e = document.querySelector(elm);
    var es = document.querySelectorAll(elm);
    var querys = function (elm, index) {
        return document.querySelectorAll(elm)[index];
    };
    var html = function (elmHtml) {
        es.forEach(function (elm) {
            elm.innerHTML = elmHtml;
        });
    };
    var text = function (txt, i) {
        e.innerText = txt;
        // es.forEach((elm) => {
        //   (<HTMLElement>elm).innerText = txt;
        // });
    };
    var _index = 0;
    var child = function (configElement) {
        var children = document.createElement(configElement.Element);
        _index = configElement.Index != undefined ? configElement.Index : _index;
        children.className = configElement.Class;
        children.textContent = configElement.Content;
        if (!configElement.Parent)
            e.appendChild(children);
        else
            querys(configElement.Parent, _index).appendChild(children);
        return { child: child };
    };
    return { child: child, html: html, text: text };
};
