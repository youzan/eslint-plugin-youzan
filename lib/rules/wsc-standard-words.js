/**
 * @fileoverview wsc standard words
 * @author cookfront
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const wrongWords = [
    '登陆',
    '帐户',
    '账号',
    '模板',
    '请稍后',
    '其它'
];

module.exports = {
    meta: {
        docs: {
            description: "wsc standard words",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        function checkIsWrongWord(node) {
            for (let i = 0; i < wrongWords.length; i++) {
                if (node.value.indexOf(wrongWords[i]) !== -1) {
                    return true;
                }
            }
        }

        return {

            // give me methods
            "Literal": function(node) {
                if (checkIsWrongWord(node)) {
                    context.report({
                        node: node,
                        message: '使用的文案中有常见的错误用词'
                    });
                }
            }
        };
    }
};
