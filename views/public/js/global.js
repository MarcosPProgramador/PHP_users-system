"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var path = 'http://localhost/projetos/linguagens/PHP_user-system/', commentsApi = path + "api/commentsApi.php", usersOnApi = path + "api/usersOnApi.php", usersOffApi = path + "api/usersOffApi.php";
function getContext(api, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
        var response, ApiRestDatas, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ApiRestDatas = _a.sent();
                    if (ApiRestDatas.status == 'error')
                        throw ApiRestDatas.datas;
                    else
                        callbackFn(ApiRestDatas.datas);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function _(elm) {
    var querys = function (elm, index) {
        return document.querySelectorAll(elm)[index];
    };
    var query = function (elm) { return document.querySelector(elm); };
    function _Class(Class, elm) {
        if (Array.isArray(Class)) {
            for (var _i = 0, Class_1 = Class; _i < Class_1.length; _i++) {
                var cls = Class_1[_i];
                var lowerCls = cls.toLowerCase();
                var findElmIndex = lowerCls.search(/[.]/);
                var countLetters = lowerCls.length;
                var cutPhrase = lowerCls.slice(findElmIndex + 1, countLetters);
                elm.classList.add(cutPhrase);
            }
        }
        else {
            var lowerCls = Class.toLowerCase();
            var findElmIndex = lowerCls.search(/[.]/);
            var countLetters = lowerCls.length;
            var cutPhrase = lowerCls.slice(findElmIndex + 1, countLetters);
            elm.className = cutPhrase;
        }
    }
    function _Create(Element) {
        return document.createElement(Element);
    }
    function _Parent(Parent) {
        var lowerParent = Parent.toLowerCase();
        if (lowerParent.search(/[.]/) < 0)
            return "." + lowerParent;
        return lowerParent;
    }
    var _Index = 0;
    var Child = function (_a) {
        var Class = _a.Class, Element = _a.Element, Index = _a.Index, Content = _a.Content, Parent = _a.Parent;
        var nChild = _Create(Element);
        _Class(Class, nChild);
        _Index = Index != undefined ? Index : _Index;
        if (Content)
            nChild.textContent = Content;
        if (Parent) {
            var nParent = _Parent(Parent);
            querys(nParent, _Index).appendChild(nChild);
        }
        else
            query(elm).appendChild(nChild);
        return { Child: Child };
    };
    return { Child: Child };
}
