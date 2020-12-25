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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function getAPI(api) {
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
                    show(ApiRestDatas);
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
getAPI("http://localhost/projetos/linguagens/PHP_visitor-accountant/api/usersOnlineApi.php");
function show(ApiRestDatas) {
    ApiRestDatas.datas.map(function (user, i) {
        var lastAction = user.currentTime.replace(/[-]/g, "/");
        var last_action = lastAction.split(" ");
        var dateApi = last_action[0];
        var timeApi = last_action[1];
        var dateApiArr = dateApi.split("/");
        var timeApiArr = timeApi.split(":");
        var dateTimeDB = __spreadArrays(dateApiArr, timeApiArr);
        _(".users-on")
            .child({
            Index: i,
            Element: "div",
            Class: "users-on__user",
        })
            .child({
            Index: i,
            Element: "div",
            Class: "users-on__name",
            Parent: "div.users-on__user",
            Content: user.name,
        })
            .child({
            Index: i,
            Element: "div",
            Class: "users-on__datetime",
            Parent: "div.users-on__user",
        })
            .child({
            Index: i,
            Element: "span",
            Class: "users-on__date",
            Parent: "div.users-on__datetime",
            Content: dateApi,
        })
            .child({
            Index: i,
            Element: "span",
            Class: "users-on__time",
            Parent: "div.users-on__datetime",
            Content: timeApi,
        });
        var count = 0;
        var timeout = 1000;
        periodical();
        function periodical() {
            count++;
            var date = new Date();
            var dateTime = [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
            ];
            var _DateTime = function () {
                var arr = [];
                for (var key in dateTime) {
                    if (dateTime[key] <= 9)
                        arr.push("0" + dateTime[key]);
                    else
                        arr.push("" + dateTime[key]);
                }
                return arr;
            };
            var _concat = function () {
                var dateTimeSigular = [
                    "ano",
                    "mês",
                    "dia",
                    "hora",
                    "minuto",
                    "segundo",
                ];
                var dateTimePlural = [
                    "anos",
                    "meses",
                    "dias",
                    "horas",
                    "minutos",
                    "segundos",
                ];
                var arr = [];
                var dateTimeCurrent = _DateTime();
                for (var key in dateTimeSigular) {
                    console.log(Number(dateTimeCurrent[key]) - Number(dateTimeDB[key]));
                    if (dateTime[key] === 1) {
                        arr.push(dateTimeCurrent[key] + " " + dateTimeSigular[key]);
                    }
                    else
                        arr.push(dateTimeCurrent[key] + " " + dateTimePlural[key]);
                }
                return arr;
            };
            _concat();
            // console.log(_concat());
            if (count === 60)
                timeout = 60000;
            // if (count === 120) timeout = 600000;
            // if (count === 180) timeout = 6000000;
            // if (count === 210) timeout = 60000000;
            setTimeout(periodical, timeout);
        }
    });
}
