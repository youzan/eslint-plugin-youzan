/**
 * @fileoverview youzan standard words
 * @author cookfront
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const wrong2RightWordsMap = {
    '登陆': '登录',
    '请稍后': '请稍候',
    '确认': '确定',
    'PV': '浏览量',
    'UV': '访客数',
    '新增': '新建',
    '其它': '其他',
    '校验': '验证',
    '字符': '字',
    '帐户': '账户',
    '账号': '帐号',
    '有赞 e 卡': '有赞 E 卡',
    '阀值': '阈值',
    '交易完成': '交易成功',
    '交易失败': '交易关闭',
    '订单号': '订单编号',
    '订单号码': '订单编号',
    '退款号': '退款编号',
    '退款单号': '退款编号',
    '收件人': '收货人',
    '同城配': '同城配送',
    '同城送': '同城配送',
    '制单日期': '制单时间',
    '买家备注': '买家留言',
    '商家留言': '商家备注',
    '模版': '模板'
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
                if (typeof node.value === 'string' && node.value.includes(wrongWords[i])) {
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
                        message: `使用的文案中有常见的错误用词：${wrongWord}，请用 ${wrong2RightWordsMap[wrongWord]} 代替`
                    });
                }
            }
        };
    }
};
