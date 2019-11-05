/**
 * @fileoverview youzan standard words
 * @author cookfront
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/youzan-standard-words"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("youzan-standard-words", rule, {

    valid: [
        {
            code: "var a = '登录'"
        }
    ],

    invalid: [
        {
            code: "var a = '登陆'",
            errors: [{
                message: "使用的文案中有常见的错误用词：登陆，请用 登录 代替"
            }]
        }
    ]
});
