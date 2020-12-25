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
    var child = function (configElement) {
        var children = document.createElement(configElement.Element);
        children.className = configElement.Class;
        children.textContent = configElement.Content;
        if (!configElement.Parent)
            e.appendChild(children);
        else
            configElement.Index != undefined
                ? querys(configElement.Parent, configElement.Index).appendChild(children)
                : false;
        return { child: child };
    };
    return { child: child, html: html, text: text };
};
