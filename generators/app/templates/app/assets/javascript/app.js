'use strict';

var $ = require('jquery');

global.jQuery = $;
global.$ = $;

var module1 = require('./components/module1');
var module2 = require('./components/module2');

console.trace('app loaded');

$(function () {
    module1.initialize();
    module2.initialize();
});
