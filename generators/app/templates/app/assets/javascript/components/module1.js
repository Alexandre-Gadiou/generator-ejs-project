'use strict';

console.trace("app/components/module1 loaded");

var $ = require('jquery');

var function1 = function () {
    console.log("Do function 1 ...");
};

var function2 = function () {
    console.log("Do function 2 ...");
};

var init = function () {
    console.log("Launch module 1 ...");
    function1();
    function2();
};

module.exports = {
    initialize: init
};