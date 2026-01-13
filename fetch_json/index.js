"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    var _a = res.data, id = _a.id, title = _a.title, completed = _a.completed;
    // we don't know errors until we excute the code
    console.log("\n    The Todo with Id: ".concat(id, " \n    has a title of: ").concat(title, "\n    is it finished? ").concat(completed, "\n  "));
});
