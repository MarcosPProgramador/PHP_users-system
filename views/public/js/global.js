"use strict";
var $ = function (elm) {
    var e = document.querySelector(elm);
    var es = document.querySelectorAll(elm);
    var query = function (elm) { return document.querySelector(elm); };
    var child = function (childObj) {
        var children = document.createElement(childObj.Element);
        children.className = childObj.Class;
        children.textContent = childObj.Content ? childObj.Content : "";
        if (!childObj.Parent)
            e.appendChild(children);
        else
            query(childObj.Parent).appendChild(children);
        return { child: child };
    };
    return { child: child };
};
