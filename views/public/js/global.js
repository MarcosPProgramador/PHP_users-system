"use strict";
var $ = function (elm) {
    var e = document.querySelector(elm);
    var querys = function (elm, index) {
        return document.querySelectorAll(elm)[index];
    };
    var child = function (configElement) {
        var children = document.createElement(configElement.Element);
        children.className = configElement.Class;
        children.textContent = configElement.Content ? configElement.Content : "";
        if (!configElement.Parent)
            e.appendChild(children);
        else
            querys(configElement.Parent, configElement.Index).appendChild(children);
        return { child: child };
    };
    return { child: child };
};
