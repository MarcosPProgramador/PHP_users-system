"use strict";
function _(elm) {
    var querys = function (elm, index) {
        return document.querySelectorAll(elm)[index];
    };
    var query = function (elm) { return document.querySelector(elm); };
    function _Class(Class) {
        var a = Class.search(/[.]/) + 1;
        var b = Class.length;
        return Class.slice(a, b);
    }
    function _Parent(Parent) {
        var a = Parent.search(/[.]/);
        if (a < 0)
            return "." + Parent;
        else
            return Parent;
    }
    var Child = function (_a) {
        var Class = _a.Class, Element = _a.Element, Index = _a.Index, Content = _a.Content, Parent = _a.Parent;
        _Class(Class);
        if (Parent) {
            _Parent(Parent);
        }
        return { Child: Child };
    };
    return { Child: Child };
}
