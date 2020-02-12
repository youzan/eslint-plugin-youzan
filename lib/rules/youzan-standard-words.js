/**
 * @fileoverview youzan standard words
 * @author cookfront
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const wrong2RightWordsMap = {
    '登陆': {
        regexp: /登陆/,
        replace: '登录',
    },
    '请稍后': {
        regexp: /请稍后([\u4e00-\u9fa5])+/,
        replace: '请稍候',
    },
    '确认': {
        regexp: /^确认$/,
        replace: '确定',
    },
    '新增': {
        regexp: /^新增$/,
        replace: '新建',
    },
    '其它': {
        regexp: /其它/,
        replace: '其他',
    },
    '校验': {
        regexp: /校验/,
        replace: '验证',
    },
    '字符': {
        regexp: /字符/,
        replace: '字',
    },
    '帐户': {
        regexp: /帐户/,
        replace: '账户',
    },
    '账号': {
        regexp: /账号/,
        replace: '帐号',
    },
    '有赞 e 卡':  {
        regexp: /有赞 e 卡/,
        replace: '有赞 E 卡',
    },
    '阀值': {
        regexp: /阀值/,
        replace: '阈值',
    },
    '交易完成': {
        regexp: /交易完成/,
        replace: '交易成功',
    },
    '交易失败': {
        regexp: /交易失败/,
        replace: '交易关闭',
    },
    '订单号': {
        regexp: /订单号/,
        replace: '订单编号',
    },
    '订单号码': {
        regexp: /订单号码/,
        replace: '订单编号',
    },
    '退款号': {
        regexp: /退款号/,
        replace: '退款编号',
    },
    '退款单号': {
        regexp: /退款单号/,
        replace: '退款编号',
    },
    '收件人': {
        regexp: /收件人/,
        replace: '收货人',
    },
    '同城配': {
        regexp: /同城配((?!送).)*$/,
        replace: '同城配送',
    },
    '同城送': {
        regexp: /同城送/,
        replace: '同城配送',
    },
    '制单日期': {
        regexp: /制单日期/,
        replace: '制单时间',
    },
    '买家备注': {
        regexp: /买家备注/,
        replace: '买家留言',
    },
    '商家留言': {
        regexp: /商家留言/,
        replace: '商家备注',
    },
    '模版': {
        regexp: /模版/,
        replace: '模板',
    },
};

const wrongWords = Object.keys(wrong2RightWordsMap);

module.exports = {
    meta: {
        docs: {
            description: "youzan standard words",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

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
                if (typeof node.value === 'string' && wrong2RightWordsMap[wrongWords[i]].regexp.test(node.value)) {
                    return wrongWords[i];
                }
            }
        }

        return {

            // give me methods
            "Literal": function (node) {
                const wrongWord = checkIsWrongWord(node);
                if (wrongWord) {
                    context.report({
                        node: node,
                        message: `使用的文案中有常见的错误用词：${wrongWord}，请用 ${wrong2RightWordsMap[wrongWord].replace} 代替`
                    });
                }
            }
        };
    }
};
